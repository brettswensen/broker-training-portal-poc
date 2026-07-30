# Broker Training Portal — Transcript Search Update

Date: 2026-07-29

## What changed

The Google Drive folder was checked and 4 PDF transcript files were visible and downloadable. They were downloaded, converted to text, chunked into a static search index, and wired into the GitHub Pages demo.

## Source PDFs found in Google Drive

- `2026 Feb 4 CMA's - Triplex, Addtition, Nightly Rental w Craig-transcript.pdf` — 213 KB
- `2026 Jul 23 Repair Negotiations w Craig-transcript.pdf` — 176 KB
- `2026 May 4 1031 Exchange Basics w Darrin-transcript.pdf` — 141 KB
- `2026 May 6 CMA - Flip Property and Land w Craig-transcript.pdf` — 176 KB

## Local files added

PDF sources:

- `source-pdfs/2026 Feb 4 CMAs - Triplex Addition Nightly Rental w Craig-transcript.pdf`
- `source-pdfs/2026 Jul 23 Repair Negotiations w Craig-transcript.pdf`
- `source-pdfs/2026 May 4 1031 Exchange Basics w Darrin-transcript.pdf`
- `source-pdfs/2026 May 6 CMA - Flip Property and Land w Craig-transcript.pdf`

Extracted transcript text:

- `transcripts/2026 Feb 4 CMAs - Triplex Addition Nightly Rental w Craig-transcript.txt`
- `transcripts/2026 Jul 23 Repair Negotiations w Craig-transcript.txt`
- `transcripts/2026 May 4 1031 Exchange Basics w Darrin-transcript.txt`
- `transcripts/2026 May 6 CMA - Flip Property and Land w Craig-transcript.txt`

Search index:

- `data/search-index.json`
- `scripts/build-search-index.py`

## Index stats

- 4 transcript records
- 267 searchable transcript sections/chunks
- Extracted text line count: 3,589 total lines

## Live demo behavior

The hosted GitHub Pages demo now loads `data/search-index.json` in the browser and performs real client-side transcript search. Search results show transcript snippets, source titles, categories, timestamps, and match percentages.

Verified query:

```text
qualified intermediary 1031
```

Verified live result:

- 9 transcript matches
- Top results came from `2026 May 4 1031 Exchange Basics w Darrin`
- Snippet included real transcript text about closing without setting up the 1031 exchange and not having a qualified intermediary

## Live URL

https://brettswensen.github.io/broker-training-portal-poc/

## Git commit

`2135fa8` — `feat: index real transcript PDFs for client search`

## Remaining next step

Optional backend/RAG plan: define the later production path for true AI-generated answers with secure server-side API keys, vector search, and citation-aware generation.
