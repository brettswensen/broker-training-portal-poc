# Broker Brain Repeatable Content Ingestion Process

_Last updated: 2026-08-09_

## Plain-English Goal

Brett will keep adding training/source material to the Google Drive folder. Billy handles the source work. Hermes handles the app/indexing work.

The point is to avoid Brett manually reviewing every new training batch.

If Billy follows the source-ingestion standard and the automated checks pass, a **content-only batch** can be indexed and pushed live without Brett doing a staging content review.

## Ownership Split

| Owner | Responsible for | Not responsible for |
|---|---|---|
| Brett | Adds source material to Google Drive; gives production approval rules | Manually QA'ing every training chunk |
| Billy | Reads/watches/transcribes sources; creates source-grounded records; runs content QA | App/UI code, deployment mechanics, changing Broker Brain frontend |
| Hermes/platform operator | Runs automated validation; builds `data/search-index.json`; verifies search/Ask can see the records; deploys content-only updates according to the approval rule | Reading/rejudging source content Billy already processed |

## Google Drive Source Folder

```text
https://drive.google.com/drive/folders/1NK9_divLg7_AslW-fjVRoOSk_3dx_y5y
```

## Repo Paths

Billy prepares content here:

```text
content-ingestion/source-records/*.json
content-ingestion/raw-transcripts/*.txt
content-ingestion/source-digests/*.md
content-ingestion/ingestion-log.md
```

Broker Brain reads this generated index:

```text
data/search-index.json
```

Current preview/static mirror paths also get the same index copied to:

```text
design-pass/data/search-index.json
staging/ask-submit-progress/data/search-index.json
staging/ask-submit-progress/design-pass/data/search-index.json
```

## Repeatable Flow

```text
1. Brett drops new content into Google Drive.
2. Billy processes only the new sources.
3. Billy creates/updates source records, raw transcripts, digests, and ingestion log.
4. Billy runs source-record validation.
5. Billy reports the batch complete with counts and uncertainties.
6. Hermes/platform operator runs automated validation again.
7. Hermes/platform operator builds the Broker Brain search index from Billy's source records.
8. Hermes/platform operator runs no-content-review verification: counts, index generated, search can retrieve new source titles/metadata.
9. If this is content-only and checks pass, it can be pushed live under Brett's standing rule.
10. UI/code/behavior changes still require staging review unless Brett explicitly waives it.
```

## Billy's Content Standard

Billy must follow:

```text
BILLY_BROKER_AGENT_SOURCE_INGESTION_HANDOFF.md
```

Critical rule:

```text
chunks.text = direct or near-direct transcript/source excerpt
```

Not polished summary. Not generic advice. Not outside knowledge.

Every chunk needs:

```text
chunk_id
text
section
source_line_start
source_line_end
timestamp_start / timestamp_end when available
```

Interpretation belongs in:

```text
operator_interpretation
confidence_notes
broker_guidance
objections
steps
client_language
```

The first 8-12 words of every `chunks.text` must appear inside that chunk's claimed source line range.

## Billy's Required Validation Command

Run from repo root:

```bash
python3 content-ingestion/validate_source_records.py
```

Expected passing shape:

```text
Validated X source record(s), Y chunk(s).
PASSED: all source records satisfy the Billy ingestion validation checks.
```

## Hermes / Platform Commands

Run from repo root.

### 1. Validate Billy's records

```bash
python3 content-ingestion/validate_source_records.py
```

This checks structure, citation refs, line ranges, and first-phrase coverage. It does not make Hermes read or judge the content.

### 2. Build the Broker Brain search index

```bash
python3 scripts/build-search-index.py
```

This reads:

```text
content-ingestion/source-records/*.json
```

and writes:

```text
data/search-index.json
```

plus the current static/staging mirror index files.

### 3. Confirm counts only

```bash
python3 - <<'PY'
import json
from pathlib import Path
p = Path('data/search-index.json')
d = json.loads(p.read_text())
print('generatedFrom:', d.get('generatedFrom'))
print('records:', len(d.get('records', [])))
print('chunks:', len(d.get('chunks', [])))
print('titles:')
for r in d.get('records', []):
    print('-', r.get('title'))
PY
```

This verifies the app index sees the records without reviewing the substance of the content.

## Current Code Contract

Broker Brain search and Ask read from:

```text
data/search-index.json
```

Relevant code paths:

```text
assets/app.js
assets/route-pages.js
api/ask.js
```

Those files search `records` and `chunks` inside `data/search-index.json`.

The build script is:

```text
scripts/build-search-index.py
```

It intentionally does **not** summarize, rewrite, or judge source content. It only converts Billy's already-approved source records into the index shape that the app expects.

## Auto-Publish Rule

Standing rule for this project:

| Change type | Review rule |
|---|---|
| Content-only batch from Billy source records, validator passes, index builds, no app code/UI behavior changed | Can flow live without Brett manually staging-reviewing every item |
| UI changes, Ask behavior changes, schema changes, deployment config changes, new data pipeline logic | Staging review first unless Brett explicitly waives it |
| Failed validation, broken citation refs, bad line ranges, missing source records, index build failure | Do not publish; send back to Billy/Hermes for correction |

## What Billy Should Report After Each Batch

```text
Batch complete.

Sources processed:
- [source name]
- [source name]

Files created/updated:
- content-ingestion/source-records/[file].json
- content-ingestion/raw-transcripts/[file].txt
- content-ingestion/source-digests/[file].md
- content-ingestion/ingestion-log.md

Validation:
- validate_source_records.py: PASSED/FAILED
- Total records now: [number]
- New records in this batch: [number]
- Total chunks now: [number]
- New chunks in this batch: [number]
- Broken citation refs: [number]
- Line ranges verified: yes/no
- First 8-12 words in claimed range: yes/no
- operator_interpretation/confidence_notes separated: yes/no

Uncertainty:
- [item 1, or none]
- [item 2, or none]
```

## Copy/Paste Prompt for Billy

```text
Billy, I added new training/source material to the Google Drive folder:
https://drive.google.com/drive/folders/1NK9_divLg7_AslW-fjVRoOSk_3dx_y5y

Please process only the newly added sources.

Follow the canonical handoff:
BILLY_BROKER_AGENT_SOURCE_INGESTION_HANDOFF.md

And understand the full repeatable pipeline here:
BROKER_BRAIN_REPEATABLE_INGESTION_PROCESS.md

Your role is content ingestion and content QA. Do not change Broker Brain UI/code/deploy files.

For each source, create/update:
- content-ingestion/source-records/*.json
- content-ingestion/raw-transcripts/*.txt
- content-ingestion/source-digests/*.md
- content-ingestion/ingestion-log.md

Critical chunk rule:
- chunks.text must be direct or near-direct transcript/source excerpt.
- Every chunk must include source_line_start and source_line_end.
- The first 8-12 words of chunks.text must appear inside the claimed source line range.
- Do not put polished summaries or outside knowledge in chunks.text.

Put practical synthesis in broker_guidance, objections, steps, and client_language.
Put outside knowledge, assumptions, uncertainties, or best-practice interpretation in operator_interpretation or confidence_notes.

Before reporting complete, run from repo root:
python3 content-ingestion/validate_source_records.py

Then report:
- source names processed
- files created/updated
- new records count
- new chunks count
- total records/chunks now
- validator result
- broken refs count
- line ranges verified yes/no
- first 8-12 words verified yes/no
- interpretation/confidence notes separated yes/no
- anything uncertain

Once your batch passes, Hermes will run automated process checks and build the Broker Brain search index. Hermes will not read or re-judge the content unless Brett specifically asks.
```

## If Billy Ever Needs To Take Over the Code/Index Step

Billy can do this only after his source records pass validation.

From repo root:

```bash
python3 content-ingestion/validate_source_records.py
```

Then:

```bash
python3 scripts/build-search-index.py
```

Then confirm counts:

```bash
python3 - <<'PY'
import json
from pathlib import Path
p = Path('data/search-index.json')
d = json.loads(p.read_text())
print('generatedFrom:', d.get('generatedFrom'))
print('records:', len(d.get('records', [])))
print('chunks:', len(d.get('chunks', [])))
for r in d.get('records', []):
    print('-', r.get('title'))
PY
```

If those commands pass, the Broker Brain index files are updated locally. Deployment/push rules still depend on Brett's current instruction and repo workflow.

## What Not To Do

- Do not manually paste content into `data/search-index.json`.
- Do not edit app/UI files just to add a new content batch.
- Do not summarize source material inside the indexing script.
- Do not ask Brett to manually review every new chunk if Billy's process checks pass.
- Do not publish when validation fails.
- Do not treat UI/code changes as content-only updates.
