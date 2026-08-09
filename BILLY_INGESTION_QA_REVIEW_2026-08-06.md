# Billy Ingestion QA Review — 2026-08-06

**Reviewed by:** Hermes coding assistant  
**Scope:** First Billy-generated `content-ingestion/` batch for Broker Brain  
**Verdict:** Directionally good, structurally usable, but not yet production-ingestion quality until citation/excerpt discipline is tightened.

---

## Files Reviewed

Expected repo path:

```text
/Users/billyagent/real-estate-training-portal-poc/content-ingestion/
```

Observed files:

```text
content-ingestion/ingestion-log.md
content-ingestion/raw-transcripts/1031-exchange-2026-05.pdf
content-ingestion/raw-transcripts/1031-exchange-2026-05.txt
content-ingestion/raw-transcripts/cma-flip-property-2026-05.pdf
content-ingestion/raw-transcripts/cma-flip-property-2026-05.txt
content-ingestion/raw-transcripts/cma-triplex-2026-02.pdf
content-ingestion/raw-transcripts/cma-triplex-2026-02.txt
content-ingestion/raw-transcripts/repair-negotiations-2026-07.pdf
content-ingestion/raw-transcripts/repair-negotiations-2026-07.txt
content-ingestion/source-digests/1031-exchange-2026-05.md
content-ingestion/source-digests/cma-flip-property-2026-05.md
content-ingestion/source-digests/cma-triplex-2026-02.md
content-ingestion/source-digests/repair-negotiations-2026-07.md
content-ingestion/source-records/1031-exchange-2026-05.json
content-ingestion/source-records/cma-flip-property-2026-05.json
content-ingestion/source-records/cma-triplex-2026-02.json
content-ingestion/source-records/repair-negotiations-2026-07.json
```

Note: Billy reported 18 files, but 17 files were present during this review. The missing count is not a major issue, but future status reports should match actual file count.

---

## What Billy Did Well

- Created the expected folder structure under `content-ingestion/`.
- Downloaded/stored source PDFs and extracted raw transcript `.txt` files.
- Created one JSON source record and one Markdown digest per transcript source.
- JSON records are valid JSON.
- Required high-level fields are present in all four records:
  - `source_id`
  - `title`
  - `source_type`
  - `drive_url`
  - `date`
  - `speaker_or_author`
  - `audience`
  - `summary`
  - `topics`
  - `broker_guidance`
  - `steps`
  - `objections`
  - `chunks`
  - `confidence_notes`
- No broken `citation_refs` were found. Every guidance/objection citation ref points to an existing chunk ID.
- The overall substance appears directionally aligned with the transcripts on the main training themes.

---

## Structural Validation Results

| Record | JSON valid | Required fields | Guidance | Objections | Chunks | Broken refs |
|---|---:|---:|---:|---:|---:|---:|
| `1031-exchange-2026-05.json` | yes | none missing | 10 | 5 | 10 | 0 |
| `cma-flip-property-2026-05.json` | yes | none missing | 5 | 3 | 3 | 0 |
| `cma-triplex-2026-02.json` | yes | none missing | 5 | 3 | 5 | 0 |
| `repair-negotiations-2026-07.json` | yes | none missing | 10 | 5 | 15 | 0 |

---

## Main Issue To Fix Before More Work

### Problem: chunks are often synthesized summaries, not source excerpts

The JSON field named `chunks` should be treated as source-grounded searchable/citable text. In Billy's first batch, many chunk texts are polished summaries or reconstructed guidance rather than exact or near-exact transcript excerpts.

That matters because the Broker Brain Ask/search layer needs to cite source material. If chunks are synthesized, the platform may cite Billy's summary instead of the original source.

### Evidence from QA

A rough overlap check compared 8-word windows from chunk text against the raw transcript text. Many chunks had zero exact text-window matches in the raw transcript.

Examples:

| Record | Issue |
|---|---|
| `1031-exchange-2026-05` | Most chunk texts are accurate themes, but many are summarized rather than transcript excerpts. |
| `cma-triplex-2026-02` | Several chunks contain generalized best-practice language that was not easily found as exact transcript language. |
| `repair-negotiations-2026-07` | Strong summary quality, but chunks still often use cleaned-up wording instead of raw source excerpts. |

---

## Specific Content QA Notes

### Repair Negotiations

Verdict: **mostly strong / source-aligned**

Supported in transcript:

- Agent remarks disclosure strategy
- contractor credits/contribution-limit discussion
- carpet/concrete items as poor repair-negotiation targets
- safety/health framing
- aggressive buyer representation framing

Needed improvement:

- Keep chunk text closer to transcript wording.
- If Billy creates a polished guidance summary, put that under `broker_guidance`, not under `chunks.text`.

### 1031 Exchange

Verdict: **good themes, needs citation precision**

Supported in transcript:

- check-in-hand / no qualified intermediary fatal issue
- 1031 as deferral
- short-term vs long-term capital gains ranges
- 45-day identification
- 180 calendar-day closing deadline
- Utah-specific form mentioned
- boot/mortgage/debt replacement discussion

Needs caution:

- The transcript says identify “at least three replacement properties” and discusses the 200% rule. Billy's summary converts this into a more formal generalized rule set. That may be generally true, but if it is not explicitly stated in the transcript, mark it as `interpretation` or confirm it against an external source before treating it as source-grounded broker guidance.
- Avoid adding IRS-rule detail beyond what the training source actually said unless separately cited.

### CMA Flip Property / Land

Verdict: **good and mostly grounded**

Supported in transcript:

- Springville example
- flag lot caution
- go back about a year for land comps
- three-lot math / ~$390K land-value reasoning
- knock-down/demo consideration

Needed improvement:

- Preserve the actual transcript text around the math in the chunk, then put the cleaned-up math in `broker_guidance`.

### CMA Triplex / ADU / Nightly Rental

Verdict: **useful but highest risk of over-generalization**

Supported in transcript:

- residential lenders not cross-collateralizing
- portfolio lender exception possibility
- Airbnb/business value concern
- need to verify legality with city for questionable rentals
- financing/appraiser concern for illegal rentals

Needs correction/verification:

- Claims like “unpermitted square footage = 50% or less,” “get dashboard screenshots or tax returns,” “calculate net not gross,” and several ADU regulation specifics may be good industry practice, but they were not clearly found as exact transcript claims in the quick source check.
- If these came from Billy's reasoning instead of the transcript, they need to be labeled as interpretation/best practice or removed from source-grounded chunks.

---

## Required Correction Standard For Billy Going Forward

For every JSON source record:

1. `chunks.text` should be a direct transcript excerpt or very near-exact cleaned excerpt.
2. `broker_guidance` can be Billy's synthesized interpretation, but each item must cite one or more chunk IDs.
3. If Billy adds outside knowledge or general best practice, label it clearly in a new field such as:

```json
"operator_interpretation": "..."
```

or include it in `confidence_notes`.

4. Add raw location metadata to each chunk:

```json
{
  "chunk_id": "chunk-001",
  "text": "near-exact source excerpt",
  "timestamp_start": "00:03:07",
  "timestamp_end": "00:04:10",
  "source_line_start": 55,
  "source_line_end": 65,
  "section": "Common fatal mistake"
}
```

5. Do not cite a polished summary as if it is the original source.
6. For legal/tax topics, do not expand beyond the transcript unless citing a separate source. Mark tax/legal material as broker training guidance, not legal/tax advice.

---

## Recommended Billy Fix Before Next Batch

Before Brett gives Billy more material, Billy should revise the first four records:

1. Keep the current summaries/guidance where source-supported.
2. Rewrite every `chunks.text` field as a direct or near-direct excerpt from the raw transcript.
3. Add `source_line_start` and `source_line_end` to each chunk.
4. Move generalized or inferred advice into `confidence_notes` or `operator_interpretation`.
5. Re-run a self-check: for each chunk, verify the chunk text appears in the raw transcript around the claimed timestamp/line range.

---

## Final Verdict For Brett

Billy is doing the right kind of work and appears to understand the assignment. The first pass is promising and useful as a digest, but I would **not yet feed this directly into production Ask/search as citation-grounded knowledge**.

Give Billy one correction cycle on the existing four records before assigning more. The correction is not about the overall content direction. It is about citation discipline:

> chunks must be source excerpts; guidance can be synthesis; interpretations must be labeled.
