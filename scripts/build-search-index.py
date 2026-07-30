#!/usr/bin/env python3
from pathlib import Path
import json, re

ROOT = Path(__file__).resolve().parents[1]
TRANSCRIPTS = ROOT / "transcripts"
OUT = ROOT / "data" / "search-index.json"

CATEGORY_BY_TITLE = {
    "1031 Exchange Basics": "Investors & Tax Strategy",
    "Repair Negotiations": "Negotiation & Inspection",
    "Flip Property and Land": "CMA & Pricing",
    "Triplex": "CMA & Pricing",
}

TOPIC_RULES = [
    ("1031 exchange", ["1031 exchange", "investor clients", "tax deferral", "qualified intermediary", "timelines"]),
    ("repair negotiations", ["repair negotiations", "inspection objection", "seller response", "buyer requests", "credits"]),
    ("flip", ["CMA", "flip property", "investor property", "renovation", "pricing"]),
    ("land", ["CMA", "land valuation", "development", "pricing"]),
    ("nightly", ["CMA", "nightly rental", "short term rental", "pricing"]),
    ("triplex", ["CMA", "triplex", "multi-family", "pricing"]),
]

def clean_text(text: str) -> str:
    text = text.replace("\x0c", "\n")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()

def title_from_path(path: Path) -> str:
    return path.stem.replace("-transcript", "")

def category_for(title: str) -> str:
    for key, cat in CATEGORY_BY_TITLE.items():
        if key.lower() in title.lower():
            return cat
    return "Training Transcript"

def topics_for(title: str, text: str):
    blob = f"{title} {text[:5000]}".lower()
    topics = []
    for needle, vals in TOPIC_RULES:
        if needle in blob:
            topics.extend(vals)
    return sorted(set(topics)) or ["training", "broker coaching"]

def chunk_transcript(text: str, max_chars=1150, overlap=180):
    # Split around timestamps while keeping timestamp text available for citations.
    parts = re.split(r"(?=\b\d{2}:\d{2}:\d{2}\b)", text)
    chunks, buf = [], ""
    for part in parts:
        part = part.strip()
        if not part:
            continue
        if len(buf) + len(part) < max_chars:
            buf = f"{buf} {part}".strip()
        else:
            if buf:
                chunks.append(buf)
            buf = (buf[-overlap:] + " " + part).strip() if overlap and buf else part
            if len(buf) > max_chars * 1.5:
                sentences = re.split(r"(?<=[.!?])\s+", buf)
                buf = ""
                for s in sentences:
                    if len(buf) + len(s) < max_chars:
                        buf = f"{buf} {s}".strip()
                    else:
                        if buf: chunks.append(buf)
                        buf = s
    if buf:
        chunks.append(buf)
    return chunks

def timestamp(chunk: str):
    m = re.search(r"\b\d{2}:\d{2}:\d{2}\b", chunk)
    return m.group(0) if m else "Transcript section"

records, chunks = [], []
for path in sorted(TRANSCRIPTS.glob("*.txt")):
    text = clean_text(path.read_text(errors="ignore"))
    title = title_from_path(path)
    category = category_for(title)
    topics = topics_for(title, text)
    rec_id = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    doc_chunks = chunk_transcript(text)
    records.append({
        "id": rec_id,
        "title": title,
        "file": path.name,
        "category": category,
        "topics": topics,
        "chunkCount": len(doc_chunks),
        "charCount": len(text),
        "summary": f"Transcript source for {title}.",
    })
    for i, ch in enumerate(doc_chunks, 1):
        chunks.append({
            "id": f"{rec_id}-{i:03d}",
            "sourceId": rec_id,
            "title": title,
            "category": category,
            "topics": topics,
            "timestamp": timestamp(ch),
            "text": ch,
        })

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps({"generatedFrom":"source-pdfs via pdftotext", "records":records, "chunks":chunks}, indent=2), encoding="utf-8")
print(json.dumps({"records": len(records), "chunks": len(chunks), "output": str(OUT)}, indent=2))
