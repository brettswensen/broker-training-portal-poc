#!/usr/bin/env python3
"""
Validate Broker Brain source-record JSON files against the Billy ingestion standard.

Checks:
- JSON parses
- required top-level fields exist
- chunk IDs are unique
- broker_guidance/objections citation_refs point to real chunks
- each chunk has source_line_start/source_line_end
- line ranges are valid and in bounds against raw-transcripts/<source_id>.txt
- first 8-10 words of chunk text appear inside the claimed line span
- chunk token coverage against claimed source span is not suspiciously low

Usage:
  python3 content-ingestion/validate_source_records.py
  python3 content-ingestion/validate_source_records.py --records content-ingestion/source-records/foo.json
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys
from typing import Any

BASE = pathlib.Path(__file__).resolve().parent
DEFAULT_RECORD_DIR = BASE / "source-records"
RAW_DIR = BASE / "raw-transcripts"

REQUIRED_TOP_LEVEL = [
    "source_id",
    "title",
    "source_type",
    "drive_url",
    "date",
    "speaker_or_author",
    "audience",
    "summary",
    "topics",
    "broker_guidance",
    "steps",
    "objections",
    "chunks",
    "operator_interpretation",
    "confidence_notes",
]

REQUIRED_CHUNK_FIELDS = ["chunk_id", "text", "source_line_start", "source_line_end", "section"]


def words(text: str) -> list[str]:
    return re.findall(r"[a-z0-9%$']+", (text or "").lower())


def normalized(text: str) -> str:
    return " ".join(words(text))


def first_phrase_in_span(chunk_text: str, span: str) -> tuple[bool, str]:
    chunk_words = words(chunk_text)
    if not chunk_words:
        return False, ""

    span_norm = normalized(span)
    for n in (10, 9, 8):
        if len(chunk_words) >= n:
            phrase = " ".join(chunk_words[:n])
            if phrase in span_norm:
                return True, phrase

    phrase = " ".join(chunk_words[: min(10, len(chunk_words))])
    return False, phrase


def token_coverage(chunk_text: str, span: str) -> float:
    chunk_words = [w for w in words(chunk_text) if len(w) > 1]
    if not chunk_words:
        return 0.0
    span_words = set(words(span))
    return sum(1 for w in chunk_words if w in span_words) / len(chunk_words)


def as_list(value: Any) -> list[Any]:
    return value if isinstance(value, list) else []


def validate_record(path: pathlib.Path) -> list[str]:
    errors: list[str] = []

    try:
        data = json.loads(path.read_text())
    except Exception as exc:  # noqa: BLE001 - CLI validator should report parse details
        return [f"{path.name}: invalid JSON: {exc}"]

    source_id = data.get("source_id") or path.stem
    missing = [field for field in REQUIRED_TOP_LEVEL if field not in data]
    if missing:
        errors.append(f"{path.name}: missing top-level fields: {', '.join(missing)}")

    chunks = as_list(data.get("chunks"))
    chunk_ids: list[str] = []
    for idx, chunk in enumerate(chunks, 1):
        if not isinstance(chunk, dict):
            errors.append(f"{path.name}: chunk #{idx} is not an object")
            continue
        cid = chunk.get("chunk_id")
        if cid:
            chunk_ids.append(str(cid))
        missing_chunk = [field for field in REQUIRED_CHUNK_FIELDS if field not in chunk]
        if missing_chunk:
            errors.append(f"{path.name}: {cid or 'chunk #' + str(idx)} missing chunk fields: {', '.join(missing_chunk)}")

    duplicate_ids = sorted({cid for cid in chunk_ids if chunk_ids.count(cid) > 1})
    if duplicate_ids:
        errors.append(f"{path.name}: duplicate chunk IDs: {', '.join(duplicate_ids)}")

    chunk_id_set = set(chunk_ids)
    for section_name in ("broker_guidance", "objections"):
        for idx, item in enumerate(as_list(data.get(section_name)), 1):
            if not isinstance(item, dict):
                continue
            for ref in as_list(item.get("citation_refs")):
                if ref not in chunk_id_set:
                    errors.append(f"{path.name}: {section_name}[{idx}] citation_ref '{ref}' does not match a chunk_id")

    raw_path = RAW_DIR / f"{source_id}.txt"
    if not raw_path.exists():
        errors.append(f"{path.name}: missing raw transcript/source file: {raw_path.relative_to(BASE)}")
        return errors

    raw_lines = raw_path.read_text(errors="ignore").splitlines()
    for chunk in chunks:
        if not isinstance(chunk, dict):
            continue
        cid = chunk.get("chunk_id", "unknown-chunk")
        line_start = chunk.get("source_line_start")
        line_end = chunk.get("source_line_end")
        if not isinstance(line_start, int) or not isinstance(line_end, int):
            errors.append(f"{path.name}: {cid} source_line_start/source_line_end must be integers")
            continue
        if line_start < 1 or line_end < line_start or line_end > len(raw_lines):
            errors.append(f"{path.name}: {cid} invalid line range {line_start}-{line_end}; transcript has {len(raw_lines)} lines")
            continue

        span = "\n".join(raw_lines[line_start - 1 : line_end])
        ok_phrase, phrase = first_phrase_in_span(str(chunk.get("text", "")), span)
        if not ok_phrase:
            errors.append(f"{path.name}: {cid} first 8-10 words not found in claimed range {line_start}-{line_end}: '{phrase}'")

        coverage = token_coverage(str(chunk.get("text", "")), span)
        if coverage < 0.80:
            errors.append(f"{path.name}: {cid} low token coverage {coverage:.2f} against claimed range {line_start}-{line_end}")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate Broker Brain source-record JSON files.")
    parser.add_argument("--records", nargs="*", help="Specific source-record JSON files to validate.")
    args = parser.parse_args()

    if args.records:
        record_paths = [pathlib.Path(p).resolve() for p in args.records]
    else:
        record_paths = sorted(DEFAULT_RECORD_DIR.glob("*.json"))

    if not record_paths:
        print("No source-record JSON files found.")
        return 1

    all_errors: list[str] = []
    total_chunks = 0
    for record_path in record_paths:
        try:
            data = json.loads(record_path.read_text())
            total_chunks += len(as_list(data.get("chunks")))
        except Exception:
            pass
        all_errors.extend(validate_record(record_path))

    print(f"Validated {len(record_paths)} source record(s), {total_chunks} chunk(s).")
    if all_errors:
        print("FAILED")
        for error in all_errors:
            print(f"- {error}")
        return 1

    print("PASSED: all source records satisfy the Billy ingestion validation checks.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
