#!/usr/bin/env python3
"""
Build Broker Brain's searchable index from Billy-prepared source records.

This script intentionally does NOT evaluate, summarize, rewrite, or QA the source
content. Billy owns content ingestion and content QA. Hermes/platform automation
only checks structure and converts Billy's approved records into the JSON index
that Broker Brain search and Ask read.

Inputs:
  content-ingestion/source-records/*.json

Primary output:
  data/search-index.json

Mirror outputs for current static/staging preview folders:
  design-pass/data/search-index.json
  staging/ask-submit-progress/data/search-index.json
  staging/ask-submit-progress/design-pass/data/search-index.json
"""
from __future__ import annotations

from pathlib import Path
import argparse
import json
import re
import shutil
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
SOURCE_RECORDS = ROOT / "content-ingestion" / "source-records"
PRIMARY_OUT = ROOT / "data" / "search-index.json"
MIRROR_OUTS = [
    ROOT / "design-pass" / "data" / "search-index.json",
    ROOT / "staging" / "ask-submit-progress" / "data" / "search-index.json",
    ROOT / "staging" / "ask-submit-progress" / "design-pass" / "data" / "search-index.json",
]

CATEGORY_RULES = [
    (re.compile(r"1031|exchange|qualified intermediary|tax", re.I), "Investors & Tax Strategy"),
    (re.compile(r"repair|inspection|negotiat", re.I), "Negotiation & Inspection"),
    (re.compile(r"cma|pricing|flip|land|triplex|adu|rental", re.I), "CMA & Pricing"),
    (re.compile(r"story|connection|relationship", re.I), "Client Relationships & Communication"),
]


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", str(value or "").lower()).strip("-") or "source"


def read_json(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as f:
        data = json.load(f)
    if not isinstance(data, dict):
        raise ValueError(f"{path.name}: top-level JSON must be an object")
    return data


def text_len(value: Any) -> int:
    if isinstance(value, str):
        return len(value)
    if isinstance(value, list):
        return sum(text_len(v) for v in value)
    if isinstance(value, dict):
        return sum(text_len(v) for v in value.values())
    return 0


def category_for(record: dict[str, Any]) -> str:
    explicit = record.get("category")
    if isinstance(explicit, str) and explicit.strip():
        return explicit.strip()
    blob = " ".join([
        str(record.get("title", "")),
        str(record.get("source_id", "")),
        " ".join(map(str, record.get("topics") or [])),
    ])
    for pattern, category in CATEGORY_RULES:
        if pattern.search(blob):
            return category
    return "Broker Training"


def timestamp_for(chunk: dict[str, Any]) -> str:
    start = chunk.get("timestamp_start") or chunk.get("timestamp") or ""
    end = chunk.get("timestamp_end") or ""
    if start and end and start != end:
        return f"{start}–{end}"
    if start:
        return str(start)
    line_start = chunk.get("source_line_start")
    line_end = chunk.get("source_line_end")
    if line_start and line_end:
        return f"lines {line_start}-{line_end}"
    return str(chunk.get("section") or "Source section")


def citation_label(chunk: dict[str, Any]) -> str:
    line_start = chunk.get("source_line_start")
    line_end = chunk.get("source_line_end")
    section = chunk.get("section") or "Source section"
    parts = [str(section)]
    if line_start and line_end:
        parts.append(f"lines {line_start}-{line_end}")
    ts = timestamp_for(chunk)
    if ts and not ts.startswith("lines "):
        parts.append(ts)
    return " · ".join(parts)


def normalize_record(path: Path, record: dict[str, Any]) -> tuple[dict[str, Any], list[dict[str, Any]]]:
    source_id = str(record.get("source_id") or record.get("id") or slugify(path.stem))
    title = str(record.get("title") or source_id.replace("-", " ").title())
    topics = [str(t) for t in (record.get("topics") or [])]
    category = category_for(record)
    chunks = record.get("chunks") or []
    if not isinstance(chunks, list):
        raise ValueError(f"{path.name}: chunks must be a list")

    index_record = {
        "id": source_id,
        "title": title,
        "file": path.name,
        "sourceRecordPath": str(path.relative_to(ROOT)),
        "sourceType": record.get("source_type") or "source_record",
        "sourceUrl": record.get("drive_url") or record.get("source_url") or "",
        "speakerOrAuthor": record.get("speaker_or_author") or "",
        "date": record.get("date") or "",
        "category": category,
        "topics": topics,
        "chunkCount": len(chunks),
        "charCount": text_len(record),
        "summary": record.get("summary") or f"Broker Brain source record for {title}.",
        "hasOperatorInterpretation": bool(record.get("operator_interpretation")),
        "hasConfidenceNotes": bool(record.get("confidence_notes")),
    }

    index_chunks: list[dict[str, Any]] = []
    for i, chunk in enumerate(chunks, 1):
        if not isinstance(chunk, dict):
            raise ValueError(f"{path.name}: chunk {i} must be an object")
        chunk_id = str(chunk.get("chunk_id") or f"chunk-{i:03d}")
        text = str(chunk.get("text") or "")
        index_chunks.append({
            "id": f"{source_id}-{chunk_id}",
            "chunkId": chunk_id,
            "sourceId": source_id,
            "title": title,
            "category": category,
            "topics": topics,
            "timestamp": timestamp_for(chunk),
            "section": chunk.get("section") or "Source section",
            "sourceLineStart": chunk.get("source_line_start"),
            "sourceLineEnd": chunk.get("source_line_end"),
            "sourceUrl": index_record["sourceUrl"],
            "sourceRecordPath": index_record["sourceRecordPath"],
            "citation": citation_label(chunk),
            "text": text,
        })

    return index_record, index_chunks


def build_index() -> dict[str, Any]:
    paths = sorted(SOURCE_RECORDS.glob("*.json"))
    if not paths:
        raise SystemExit(f"No source records found in {SOURCE_RECORDS}")

    records: list[dict[str, Any]] = []
    chunks: list[dict[str, Any]] = []
    for path in paths:
        record, record_chunks = normalize_record(path, read_json(path))
        records.append(record)
        chunks.extend(record_chunks)

    return {
        "generatedFrom": "content-ingestion/source-records",
        "sourceRecordCount": len(records),
        "chunkCount": len(chunks),
        "records": records,
        "chunks": chunks,
    }


def write_json(path: Path, data: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Build Broker Brain search index from Billy source records.")
    parser.add_argument("--no-mirrors", action="store_true", help="Only write data/search-index.json")
    args = parser.parse_args()

    data = build_index()
    write_json(PRIMARY_OUT, data)
    outputs = [PRIMARY_OUT]

    if not args.no_mirrors:
        for out in MIRROR_OUTS:
            out.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(PRIMARY_OUT, out)
            outputs.append(out)

    print(json.dumps({
        "records": len(data["records"]),
        "chunks": len(data["chunks"]),
        "generatedFrom": data["generatedFrom"],
        "outputs": [str(p.relative_to(ROOT)) for p in outputs],
    }, indent=2))


if __name__ == "__main__":
    main()
