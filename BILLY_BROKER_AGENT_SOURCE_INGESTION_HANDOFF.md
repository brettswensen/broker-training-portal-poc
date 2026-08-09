# Billy Broker Agent Source Ingestion Handoff

**Audience:** Billy / broker-agent operator  
**Owner of this document:** Hermes coding assistant keeps this file updated as the platform changes.  
**Current intent:** Billy handles source-material digestion and database ingestion. Hermes coding assistant handles the platform/code surface only.

---

## 1. Operating Split

| Workstream | Owner | Notes |
|---|---|---|
| Source material discovery | **Billy** | Pull source files, recordings, transcripts, newsletters, scripts, and reference docs from the shared source folder. |
| Source digestion | **Billy** | Watch/read/source the material, extract training concepts, client scenarios, broker guidance, objections, scripts, and source citations. |
| Database-ready ingestion package | **Billy** | Produce structured records/chunks that can be loaded into the broker portal knowledge database. |
| Platform/code implementation | **Hermes coding assistant** | Build the dashboard, ingestion hooks, search UI, Ask flow, source display, route pages, and deployment/staging support. |
| Production publishing | **Brett approval required** | No production push without Brett approval. |

**Important boundary:** The platform should not invent broker guidance. The answer/search experience should be grounded in Billy-digested source records and cite source material.

---

## 2. Source Folder

Use the shared Google Drive folder as the canonical source drop:

```text
https://drive.google.com/drive/folders/1NK9_divLg7_AslW-fjVRoOSk_3dx_y5y
```

Existing repo note:

```text
drive_folder_access_check.md
```

Known access note from repo:

- Public browser access can see the folder and file list.
- Hermes Google Drive API is not authenticated right now.
- Browser/public-link extraction is currently the available route.
- Transcripts are preferred over raw MP4 ingestion when available.

---

## 3. Billy's Ingestion Mission

Billy should turn raw source material into a structured broker knowledge package that the portal can load.

### Inputs Billy should collect

- Training video files or video links
- Transcripts, captions, or AI-generated transcript drafts
- Newsletters
- Scripts/checklists
- SOPs/process docs
- Broker notes
- Objection-handling examples
- Transaction scenarios
- Any source URL/file metadata needed for citations

### Outputs Billy should produce

Billy should produce database-ready records with:

| Field | Description |
|---|---|
| `source_id` | Stable slug/id for the source, e.g. `repair-negotiation-training-2026-07` |
| `title` | Human title of the training/source |
| `source_type` | `video`, `transcript`, `newsletter`, `script`, `sop`, `checklist`, `note`, etc. |
| `drive_url` | Google Drive file/folder URL or original source URL |
| `date` | Source date if known |
| `speaker_or_author` | Broker/trainer/source author if known |
| `audience` | Who this guidance is for, e.g. agents, new agents, listing agents, buyer agents |
| `summary` | Plain-English summary of the source |
| `topics` | Search/browse tags, e.g. repair negotiations, objections, pricing, scripts |
| `broker_guidance` | The actual broker-approved guidance extracted from the source |
| `client_language` | Client-facing phrasing agents can copy/adapt |
| `steps` | Ordered workflow or checklist items when applicable |
| `objections` | Objection + response pairs when applicable |
| `citations` | Source references with transcript timestamps/page/section where possible |
| `chunks` | Search/RAG chunks with source refs, timestamps, and raw transcript/source line ranges |
| `operator_interpretation` | Billy's labeled synthesis, best-practice notes, or outside knowledge that is useful but not directly stated in the source |
| `confidence_notes` | What was explicit in the source vs inferred by Billy, plus any uncertainty or risk notes |

---

## 4. Source-Grounded Chunk Standard

This is the most important repeatable rule from the first QA cycle.

### Core rule

`chunks.text` must be a **direct or near-direct excerpt from the transcript/source**, not a polished summary.

Billy can absolutely synthesize the source into practical broker guidance, scripts, checklists, and objections. That synthesis belongs in `broker_guidance`, `client_language`, `steps`, `objections`, or `operator_interpretation` — **not** in `chunks.text`.

### Field responsibilities

| Field | What belongs here | What does **not** belong here |
|---|---|---|
| `chunks.text` | Direct/near-direct source excerpt | Billy's cleaned-up summary, outside knowledge, generalized best practice |
| `broker_guidance` | Practical broker/agent guidance synthesized from cited chunks | Uncited claims or advice not traceable to a source chunk |
| `client_language` | Agent/client-facing wording derived from the source | Language that changes the legal/tax meaning of the source |
| `objections` | Objection + source-grounded response pairs | Generic objection handling with no source chunk |
| `operator_interpretation` | Useful synthesis, best-practice notes, risk flags, outside/contextual knowledge clearly labeled as interpretation | Anything the platform should cite as original source text |
| `confidence_notes` | Uncertainty, source limits, legal/tax cautions, transcript quality notes | Hidden assumptions |

### Required chunk metadata

Every chunk must include:

```json
{
  "chunk_id": "chunk-001",
  "text": "Direct or near-direct excerpt from the raw transcript/source.",
  "timestamp_start": "00:03:07",
  "timestamp_end": "00:04:10",
  "source_line_start": 55,
  "source_line_end": 65,
  "section": "Common fatal mistake"
}
```

If there is no timestamp, use `null` for `timestamp_start` / `timestamp_end`, but still provide page number or source line range when possible.

### Splitting rule

Do **not** combine distant transcript sections into one chunk just because they support the same idea.

If a concept is supported by multiple separated transcript sections:

1. Create multiple chunks.
2. Cite all relevant chunk IDs from `broker_guidance`.
3. Put the combined synthesis in `broker_guidance`, not in a synthetic chunk.

### Interpretation rule

If Billy adds industry best practice or outside knowledge that was not explicitly stated in the source, keep it clearly labeled.

Good:

```json
"operator_interpretation": "The transcript raises a concern about seller Airbnb numbers but does not specifically mention dashboard screenshots or tax returns. Requesting those documents is Billy's standard verification recommendation, not a direct quote from the source."
```

Bad:

```json
"chunks": [
  {
    "text": "Do not trust seller Airbnb numbers. Get dashboard screenshots or tax returns."
  }
]
```

Unless that exact idea appears in the transcript, it should not be a chunk.

### Tax/legal/risk-sensitive rule

For legal, tax, lending, contract, 1031 exchange, repair liability, ADU legality, or financing guidance:

- Stay very close to the source.
- Do not expand IRS/lending/legal rules beyond what the source says unless a separate cited source is added.
- Add an escalation note when appropriate, e.g. CPA, QI, title company, lender, broker, attorney, city/zoning department.
- Treat source material as broker training guidance, not legal/tax advice.

---

## 5. Recommended File Shape Billy Can Produce

Preferred handoff format: one JSON file per source plus optional Markdown notes.

### Option A — JSON source record

```json
{
  "source_id": "repair-negotiation-training-2026-07",
  "title": "Repair Negotiation Training",
  "source_type": "transcript",
  "drive_url": "https://drive.google.com/...",
  "date": "2026-07-30",
  "speaker_or_author": "Broker / trainer name if known",
  "audience": ["buyer agents", "listing agents"],
  "summary": "Short summary of what this source teaches.",
  "topics": ["repair negotiations", "inspection objections", "client communication"],
  "broker_guidance": [
    {
      "scenario": "Buyer wants every inspection item fixed",
      "guidance": "Broker-approved guidance extracted from the source.",
      "client_language": "Suggested client-facing phrasing.",
      "citation_refs": ["chunk-001"]
    }
  ],
  "steps": [
    "Step 1 from the source",
    "Step 2 from the source"
  ],
  "objections": [
    {
      "objection": "Client objection or agent concern",
      "response": "Source-grounded response",
      "citation_refs": ["chunk-002"]
    }
  ],
  "chunks": [
    {
      "chunk_id": "chunk-001",
      "text": "Direct or near-direct excerpt from the raw transcript/source.",
      "timestamp_start": "00:03:12",
      "timestamp_end": "00:04:28",
      "source_line_start": 120,
      "source_line_end": 136,
      "section": "Repair negotiation framing"
    }
  ],
  "operator_interpretation": "Clearly label any useful synthesis, best-practice recommendation, or outside knowledge that is not directly stated in the source.",
  "confidence_notes": "State anything uncertain, inferred, legally/tax sensitive, or limited by transcript quality."
}
```

### Option B — Markdown digest

```markdown
# Source Digest: Repair Negotiation Training

Source URL: https://drive.google.com/...
Date: 2026-07-30
Speaker/Author: Broker / trainer name if known

## Summary

Short summary.

## Key Broker Guidance

- Guidance point with timestamp/source citation.
- Guidance point with timestamp/source citation.

## Client-Facing Language

> Suggested phrase agents can use with clients.

## Objections and Responses

| Objection | Broker-approved response | Source |
|---|---|---|
| Example objection | Example response | 00:03:12 |

## Search Chunks

### chunk-001

Timestamp: 00:03:12–00:04:28  
Topic tags: repair negotiations, inspection objections

Searchable excerpt here.
```

---

## 6. Suggested Repo Paths

When Billy produces digests, place them in a predictable path so the platform can ingest them later.

```text
content-ingestion/
  source-records/
    repair-negotiation-training-2026-07.json
  source-digests/
    repair-negotiation-training-2026-07.md
  raw-transcripts/
    repair-negotiation-training-2026-07.txt
  ingestion-log.md
```

If these folders do not exist yet, Hermes coding assistant can create them when we wire the ingestion pipeline.

---

## 7. Billy Self-QA Before Submitting Each Batch

Billy should run this checklist before saying a batch is ready for Hermes review.

### Required file checks

- [ ] One JSON source record exists in `content-ingestion/source-records/` for every source.
- [ ] The matching raw transcript/source text exists in `content-ingestion/raw-transcripts/` when available.
- [ ] Optional digest exists in `content-ingestion/source-digests/` when useful for human review.
- [ ] `content-ingestion/ingestion-log.md` notes what was added or changed.

### Required JSON checks

Billy/Hermes can run the reusable validator from the repo root:

```bash
python3 content-ingestion/validate_source_records.py
```

For every JSON source record, the validator/manual check should confirm:

- [ ] JSON parses cleanly.
- [ ] Required top-level fields are present.
- [ ] Every `broker_guidance[].citation_refs[]` points to a real `chunks[].chunk_id`.
- [ ] Every `objections[].citation_refs[]` points to a real `chunks[].chunk_id`.
- [ ] Every chunk has `chunk_id`, `text`, `source_line_start`, `source_line_end`, and `section`.
- [ ] `source_line_start` and `source_line_end` are in-bounds and ordered.
- [ ] The first 8-12 words of each `chunks.text` appear inside the claimed source line range.
- [ ] Chunk text is direct/near-direct source text, not a polished summary.
- [ ] Any industry best practice or outside knowledge is placed in `operator_interpretation` or `confidence_notes`, not in `chunks.text`.
- [ ] Risk-sensitive guidance identifies when to escalate to the broker, CPA, QI, lender, title company, attorney, or city/zoning department.

### Batch report Billy should send back

After every ingestion batch, Billy should report:

```text
Batch complete.

Files created/updated:
- content-ingestion/source-records/[file].json
- content-ingestion/raw-transcripts/[file].txt
- content-ingestion/source-digests/[file].md

QA results:
- JSON valid: yes/no
- Total chunks: [number]
- Every chunk has line ranges: yes/no
- First 8-12 words of every chunk appear in claimed range: yes/no
- Broken citation refs: [number]
- Interpretation/outside-best-practice notes separated: yes/no
- Items unsure about: [list or none]
```

---

## 8. Platform Contract for Hermes Coding Assistant

Hermes coding assistant should build the platform around Billy's output, not around invented sample content.

For the repeatable Billy-to-Broker-Brain indexing process, see:

```text
BROKER_BRAIN_REPEATABLE_INGESTION_PROCESS.md
```

Standing rule: Billy owns content QA. Hermes/platform automation owns validation, indexing, and deployment mechanics. Content-only batches that pass validation and index-building can flow live without Brett manually reviewing every training chunk. UI/code/schema/deployment-behavior changes still require staging review unless Brett explicitly waives it.

### Platform should support

- Loading structured source records from `content-ingestion/source-records/`
- Search across title, summary, topics, guidance, objections, scripts, and chunks
- Ask-the-Broker answers that cite `source_id`, title, and timestamp/section
- Source cards that link back to the original Google Drive file when available
- Admin/operator path to add new records without changing frontend code manually
- Staging previews before production pushes

### Platform should avoid

- Fabricating broker guidance without a source record
- Hiding citations behind vague “sources say” language
- Treating demo copy as production knowledge
- Pushing production without Brett approval

---

## 9. Billy Prompt / Assignment

Billy can use this as his operating prompt:

```text
You own source digestion and ingestion for the Broker Brain portal.

Use the Google Drive source folder as the canonical source drop:
https://drive.google.com/drive/folders/1NK9_divLg7_AslW-fjVRoOSk_3dx_y5y

Your job is to read/watch/transcribe the source material, extract broker-approved guidance, create database-ready source records, and preserve citations back to timestamps, transcript sections, pages, or raw transcript line ranges.

Do not focus on coding the portal UI. Hermes coding assistant owns the platform/code. Your deliverable is structured, source-grounded content that can be loaded into the portal database/search layer.

For each source, produce:
1. A JSON source record in `content-ingestion/source-records/` following `BILLY_BROKER_AGENT_SOURCE_INGESTION_HANDOFF.md`.
2. A matching raw transcript/source text file in `content-ingestion/raw-transcripts/` when available.
3. An optional Markdown digest in `content-ingestion/source-digests/` when helpful for human review.
4. An update to `content-ingestion/ingestion-log.md` noting what changed.

Critical chunk rule:
- `chunks.text` must be direct or near-direct transcript/source excerpts.
- Every chunk must include `source_line_start` and `source_line_end`.
- The first 8-12 words of each chunk must appear inside its claimed line range.
- Do not put polished summaries or outside knowledge in `chunks.text`.

Synthesis rule:
- Put practical broker guidance in `broker_guidance` and cite one or more chunk IDs.
- Put client-facing wording in `client_language`.
- Put objection handling in `objections` and cite one or more chunk IDs.
- Put outside knowledge, industry best practices, or inferred recommendations in `operator_interpretation` or `confidence_notes`.
- For tax/legal/lending/contract/zoning-sensitive topics, stay close to the source and add escalation notes when appropriate.

Before reporting the batch complete, run the self-QA checklist in Section 7 and include the batch report fields listed there.

Flag uncertainty explicitly. Separate direct source facts from interpretation. Prefer source-grounded broker guidance over generic real estate advice.
```

---

## 10. Model Note

Brett believes Billy is currently running on **Kimi 2.6**. Treat that as an operator note to verify in Billy's runtime/profile before relying on exact model naming.

---

## 11. Next Coordination Steps

1. Brett shares this file with Billy.
2. Billy confirms Google Drive source-folder access.
3. Billy creates the next source-record batch using the Section 4 chunk standard and Section 7 self-QA checklist.
4. Hermes coding assistant reviews the batch, then adds or updates the ingestion loader/search index to consume Billy's structured output.
5. Brett reviews the staged portal using the standardized staging link before production.

---

## 12. Keep This File Updated

Update this file whenever any of these change:

- Google Drive source folder
- Billy's expected output format
- Database/schema fields
- Repo ingestion paths
- Platform ingestion/search implementation
- Ownership split between Billy and Hermes coding assistant
