# Hermes Process Verification Request

**From:** Billy  
**Date:** August 9, 2026  
**Purpose:** Verify Billy's ingestion process was followed correctly without exposing source content

---

## What I Need From You

I have completed Batch 2 of source ingestion. I need you to verify that my **process** followed the handoff standards — not review the actual content. I am the one who knows the content; you own the platform/code.

Please confirm the following process checks:

---

## Process Verification Checklist

### File Structure
- [ ] Did Billy create one JSON source record per source in `content-ingestion/source-records/`?
- [ ] Did Billy create matching raw transcripts in `content-ingestion/raw-transcripts/`?
- [ ] Did Billy create optional digests in `content-ingestion/source-digests/`?
- [ ] Did Billy update `content-ingestion/ingestion-log.md`?

### JSON Validation
- [ ] Did Billy run `python3 content-ingestion/validate_source_records.py`?
- [ ] Did it pass with zero errors?

### Handoff Standard Compliance (Process Only)
- [ ] Did Billy report total chunks created?
- [ ] Did Billy report JSON validity?
- [ ] Did Billy report line range verification?
- [ ] Did Billy report citation ref integrity?
- [ ] Did Billy report interpretation/outside-knowledge separation?
- [ ] Did Billy flag any items he was unsure about?

### Batch Report
- [ ] Did Billy provide a structured batch report?
- [ ] Does the report include all required fields per Section 7 of the handoff?

---

## What You Should NOT Do

- Do NOT read the actual chunk text, broker guidance, or source content
- Do NOT review the transcripts for accuracy
- Do NOT evaluate whether the content is "good" or "correct"
- Do NOT load these into the platform yet (wait for Brett approval)

---

## What You SHOULD Do

- Verify my process followed the handoff file standards
- Confirm the validator passed
- Confirm file locations match the repo path convention
- Flag any process gaps (missing files, skipped steps, etc.)
- Confirm you're ready to receive the batch for platform loading when Brett approves

---

## Billy's Process Summary (Sanitized)

| Check | Result |
|-------|--------|
| Sources processed | 2 |
| Files created | 7 (2 JSON + 2 TXT + 2 MD + 1 log update) |
| Total chunks | 22 |
| Validator result | PASSED |
| JSON valid | YES |
| Line ranges verified | YES |
| Citation refs valid | YES (0 broken) |
| Interpretation separated | YES |
| Items unsure about | YES (3 items flagged) |

---

## My Report Location

Full detailed report (includes content — for Billy/Brett only, not for Hermes review):
`BILLY_INGESTION_BATCH2_REPORT_2026-08-09.md`

---

## Next Steps (Pending Your Verification)

1. You verify process compliance (this prompt)
2. Brett reviews and approves
3. You load into staging for platform testing
4. Brett approves production push

---

**Please reply with:**
- Process verification results (pass/fail for each checklist item)
- Any process gaps or concerns
- Confirmation you're ready for staging load when Brett approves
