# Billy Ingestion Batch 2 Report — August 9, 2026

**Prepared by:** Billy  
**Review requested by:** Brett Swensen  
**For QA review by:** Hermes coding assistant  

---

## Sources Processed

| # | File | Date | Speaker | Type | Lines | Chunks |
|---|------|------|---------|------|-------|--------|
| 1 | 2025 Feb 12 Nerdy Nuances and Negotiation Nuggets w Marty-transcript.pdf | 2025-02-12 | Marty | Training transcript | 827 | 12 |
| 2 | 2025 Jan 15 Making Connections Using Storytelling w Marty-transcript.pdf | 2025-01-15 | Marty (with Sarah) | Training transcript | 846 | 10 |

**Total:** 2 sources, 22 chunks, 16 broker guidance scenarios, 7 objections

---

## Files Created

### Raw Transcripts
- `content-ingestion/raw-transcripts/nerdy-nuances-negotiation-2025-02.txt` (827 lines)
- `content-ingestion/raw-transcripts/making-connections-storytelling-2025-01.txt` (846 lines)

### JSON Source Records
- `content-ingestion/source-records/nerdy-nuances-negotiation-2025-02.json` (11 broker guidance, 4 objections, 12 chunks)
- `content-ingestion/source-records/making-connections-storytelling-2025-01.json` (5 broker guidance, 3 objections, 10 chunks)

### Markdown Digests
- `content-ingestion/source-digests/nerdy-nuances-negotiation-2025-02.md`
- `content-ingestion/source-digests/making-connections-storytelling-2025-01.md`

### Updated Log
- `content-ingestion/ingestion-log.md` (Batch 2 section added)

---

## Validation Results

```
Validated 6 source record(s), 56 chunk(s).
PASSED: all source records satisfy the Billy ingestion validation checks.
```

| Check | Result |
|-------|--------|
| JSON parses cleanly | PASS (6/6) |
| Required top-level fields present | PASS (6/6) |
| Chunk IDs unique | PASS |
| citation_refs point to real chunk_ids | PASS (all refs resolved) |
| Every chunk has source_line_start/end | PASS (56/56) |
| Line ranges in bounds | PASS |
| First 8-10 words in claimed range | PASS (56/56) |
| Token coverage >= 80% | PASS (56/56) |
| Interpretation/outside knowledge separated | PASS |

---

## Source 1: Nerdy Nuances and Negotiation Nuggets

**Topics covered:**
- Earnest money leverage (increasing amount + breach protection)
- Earnest money due date leverage (Heather's investor case study)
- Delayed possession vs leaseback (Carter's $1,500 water damage case)
- Section 4.2/4.3C assessments (always mark "seller", never "NA")
- Hidden second due diligence deadline (Section 8.3B(I))
- New construction substantial completion notice (Sections 12.2 + 19)
- Stop reminding other side of deadlines (fiduciary duty)
- Section 25 acceptance deadline (not response deadline)
- Contingent cancellation addendum ("ultimatum addendum")
- Escalation clauses (custom attorney-drafted template)
- Power of goodwill in negotiation

**Risk-sensitive content:**
- All contract references are UAR/Utah-specific
- Escalation clause template is NOT UAR-approved (custom attorney-drafted)
- Section 8.3B(I) "buyer's sole discretion" is a contract loophole — documented as safety net only
- New construction notice strategy involves intentional non-disclosure of builder's error until they try to charge fees

**Notable case studies:**
- Heather's seller vs investors: $350K to $280K renegotiation attempt; seller canceled first on earnest money breach, kept $5K
- Carter's delayed possession: upstairs water heater leak, $1,500 repair cost to seller

---

## Source 2: Making Connections Using Storytelling

**Topics covered:**
- Donald Miller StoryBrand framework applied to real estate
- Hero's journey narrative structure
- Client as hero, agent as mystical guide (Yoda/Mr. Miyagi)
- Seven-step brand script framework
- Aspirational identity (before/after client transformation)
- Call to action criticality ("1600% better sales" statistic — UNVERIFIED)
- Social media storytelling hooks ("I want to tell you a story", "Story time")
- Consultation structure (1.5-2 hours, mostly listening)
- Painting picture of success ("Just imagine...")
- Brief failure picture (don't dwell)

**Risk notes:**
- "1600% better sales" for emails with CTAs is an unverified claim Marty said he "found this morning"
- Star Wars film clips shown during training are copyrighted — excluded from chunks
- Framework is commercial methodology from Donald Miller's book

---

## Items Flagged for Hermes Attention

1. **Chunk text fidelity:** All chunks are direct transcript excerpts (not polished summaries). Verified via validator.

2. **Line range accuracy:** All 56 chunks have first 8-10 words appearing in claimed line range. Token coverage >= 80%.

3. **Citation integrity:** All broker_guidance[].citation_refs[] and objections[].citation_refs[] point to real chunk_ids.

4. **Interpretation separation:** Outside knowledge, best practices, and assumptions are in operator_interpretation and confidence_notes, not in chunks.text.

5. **Unverified claims flagged:**
   - "1600% better sales" statistic (storytelling source)
   - "18 years of experience" (Marty's self-reported)
   - Escalation clause "never had a seller counter to cap" is anecdotal

6. **State-specific content:** All contract sections reference UAR/Utah REPC. Other states need local equivalents.

7. **Copyrighted content excluded:** Star Wars film clip transcripts excluded from chunks (only Marty's commentary about the clips is included).

8. **Custom firm resources noted:** Escalation clause template is attorney-drafted, not UAR-approved — availability to other agents is unclear.

---

## QA Checklist (Self-Review)

- [x] One JSON source record per source
- [x] Matching raw transcript in raw-transcripts/
- [x] Optional digest in source-digests/
- [x] ingestion-log.md updated
- [x] JSON parses cleanly
- [x] Required fields present
- [x] citation_refs valid
- [x] chunks have line ranges
- [x] Line ranges in bounds
- [x] First 8-10 words in claimed range
- [x] Token coverage >= 80%
- [x] Chunk text is direct source excerpt
- [x] Outside knowledge in operator_interpretation/confidence_notes
- [x] Risk-sensitive topics have escalation notes

---

## Recommendations for Hermes

1. **Load test:** Try loading these 2 new records into the portal search/Ask flow alongside the 4 approved batch 1 records.

2. **Cross-source consistency:** Check if any broker guidance from these sources conflicts with batch 1 guidance (e.g., repair negotiations, CMAs).

3. **Utah-specific flagging:** Consider adding a "jurisdiction" field to source records for non-Utah deployments.

4. **Unverified claim handling:** Decide how to surface the "1600%" statistic — maybe with a confidence badge or disclaimer.

5. **Chunk size:** Some chunks are long (chunk-007 in nerdy-nuances spans 80 lines). Consider if search granularity is optimal.

---

## Files Ready for Review

All files are in `/Users/billyagent/real-estate-training-portal-poc/content-ingestion/`:

```
source-records/
  nerdy-nuances-negotiation-2025-02.json
  making-connections-storytelling-2025-01.json
source-digests/
  nerdy-nuances-negotiation-2025-02.md
  making-connections-storytelling-2025-01.md
raw-transcripts/
  nerdy-nuances-negotiation-2025-02.txt
  making-connections-storytelling-2025-01.txt
ingestion-log.md
```

---

*Report generated: August 9, 2026*  
*Validator: PASSED*  
*Awaiting Hermes QA review*
