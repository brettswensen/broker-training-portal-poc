# Billy Ingestion QA Review — Pass 2 — 2026-08-06

**Scope:** Review of Billy's correction pass on the four `content-ingestion/source-records/*.json` files.

## Verdict

Improved substantially, but **not fully accepted yet**.

The correction pass fixed the main structural issues:

- All 4 JSON files are valid JSON.
- Required fields are present.
- `operator_interpretation` exists on all 4 records.
- Every `broker_guidance` and `objections` citation ref points to an existing chunk ID.
- All chunks now include `source_line_start` and `source_line_end`.
- No bad/out-of-bounds line ranges were found.

However, several chunks, especially in `1031-exchange-2026-05.json`, have **incorrect line ranges**. The chunk text is direct or near-direct transcript language, but the claimed `source_line_start/source_line_end` often points to the wrong part of the transcript.

## Validation Summary

| Record | JSON valid | Broken refs | Bad line ranges | Weak/mismatched line matches |
|---|---:|---:|---:|---:|
| `1031-exchange-2026-05.json` | yes | 0 | 0 | 6 |
| `cma-flip-property-2026-05.json` | yes | 0 | 0 | 1 minor |
| `cma-triplex-2026-02.json` | yes | 0 | 0 | 0 |
| `repair-negotiations-2026-07.json` | yes | 0 | 0 | 1 minor / acceptable |

## Blocking Issue: 1031 Line Ranges Need Correction

The following chunks have claimed line ranges that do not contain the quoted chunk text.

### `1031-exchange-2026-05.json`

| Chunk | Claimed range | Evidence of likely actual location |
|---|---:|---|
| `chunk-002` | `5-17` | Text begins around line `30`: “at the very beginning of the process...” |
| `chunk-003` | `58-78` | Text begins around line `70-71`: “1031 exchange gets its common name...” |
| `chunk-005` | `95-115` | Text begins around line `141`: “You could sell an Airbnb and buy a storage unit...” |
| `chunk-006` | `115-140` | Text appears to combine material around line `122` and later around `200-224`; this may need splitting or a broader/correct range. |
| `chunk-007` | `140-155` | Text begins around line `265`: “They have one hundred and eighty calendar days...” |
| `chunk-009` | `180-195` | Text was not found as a tight direct excerpt in the claimed range; likely around reverse exchange discussion near `288-307+`, or it is still partly synthesized. |

### `cma-flip-property-2026-05.json`

| Chunk | Claimed range | Note |
|---|---:|---|
| `chunk-003` | `10-28` | Starts correctly around line `15`, but the chunk continues into later land-value/math discussion. Either expand the line range or split into two chunks: one for property setup/flag-lot issue and one for land-value math. |

### `repair-negotiations-2026-07.json`

| Chunk | Claimed range | Note |
|---|---:|---|
| `chunk-010` | `340-388` | Acceptable. The quote is close to the claimed range, with minor wording cleanup. |

## Required Fix Before Approval

Billy should do a narrow correction pass, not a full rewrite:

1. Fix `source_line_start/source_line_end` for the six flagged 1031 chunks.
2. For `1031` `chunk-006`, split it if the text spans multiple separate parts of the transcript.
3. For `1031` `chunk-009`, either:
   - replace it with a direct transcript excerpt from the reverse-exchange/multiple-property section, or
   - mark it as interpretation if it is synthesized.
4. For `cma-flip` `chunk-003`, either expand the line range to cover all quoted material or split into setup/math chunks.
5. Re-run a simple self-check: the first 8-12 words of each `chunks.text` should appear within the claimed line range.

## Final Pass-2 Verdict For Brett

This is much better than pass 1. Billy fixed the conceptual issue of putting summaries in chunks, but the source-line mapping is not reliable enough yet, mainly in the 1031 file.

I would give Billy a **small targeted correction**, not a broad redo. Once those line ranges are fixed, the batch should be acceptable for staging ingestion review.
