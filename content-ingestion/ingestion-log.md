# Broker Brain Ingestion Log

**Started:** August 6, 2026
**Source Folder:** https://drive.google.com/drive/folders/1NK9_divLg7_AslW-fjVRoOSk_3dx_y5y
**Status:** Initial inventory complete

---

## Source Material Inventory

| # | Source | Type | Size | Transcript? | Priority |
|---|--------|------|------|-------------|----------|
| 1 | 2026 Jul 23 Repair Negotiations w Craig | Video + PDF | 157.9 MB + 176 KB | ✅ Yes | HIGH |
| 2 | 2026 May 4 1031 Exchange Basics w Darrin | Video + PDF | 182.9 MB + 141 KB | ✅ Yes | HIGH |
| 3 | 2026 May 6 CMA - Flip Property and Land w Craig | Video + PDF | 192.6 MB + 176 KB | ✅ Yes | HIGH |
| 4 | 2026 Feb 4 CMA's - Triplex, Addition, Nightly Rental w Craig | Video + PDF | 189.2 MB + 213 KB | ✅ Yes | MEDIUM |
| 5 | 2026 Apr 16 Development & New Construction Deals w Craig | Video only | 728.4 MB | ❌ No | MEDIUM |
| 6 | 2025 Jul 30 Work With Your TC w Marty & Marc | Video only | 634 MB | ❌ No | MEDIUM |
| 7 | card_20260730040320 screenshot | Image | 268 KB | N/A | LOW |

**Total Sources:** 7
**With Transcripts:** 4
**Without Transcripts:** 2 videos + 1 image

---

## Digestion Priority Rationale

**First Pass (1-3 sources):**
1. **Repair Negotiations w Craig** - Most recent, high-value topic (repair negotiations are frequent and high-stakes), has transcript
2. **1031 Exchange Basics w Darrin** - Specialized knowledge, common client question, has transcript
3. **CMA - Flip Property and Land w Craig** - Practical skill, has transcript

**Second Pass (remaining):**
4. CMA's - Triplex, Addition, Nightly Rental (Feb)
5. Development & New Construction Deals (need transcript generation)
6. Work With Your TC (need transcript generation)
7. Screenshot (context TBD)

---

## Files Created

### Raw Transcripts
- raw-transcripts/repair-negotiations-2026-07.txt (58,461 chars, 21 pages)
- raw-transcripts/1031-exchange-2026-05.txt (42,117 chars, 16 pages)
- raw-transcripts/cma-flip-property-2026-05.txt (59,143 chars, 21 pages)
- raw-transcripts/cma-triplex-2026-02.txt (57,432 chars, 24 pages)

### JSON Source Records
- source-records/repair-negotiations-2026-07.json (10 broker guidance scenarios, 5 objections, 15 search chunks)
- source-records/1031-exchange-2026-05.json (10 broker guidance scenarios, 5 objections, 10 search chunks)
- source-records/cma-flip-property-2026-05.json (5 broker guidance scenarios, 3 objections, 3 search chunks)
- source-records/cma-triplex-2026-02.json (5 broker guidance scenarios, 3 objections, 5 search chunks)

### Markdown Digests
- source-digests/repair-negotiations-2026-07.md (full digest with all chunks)
- source-digests/1031-exchange-2026-05.md (full digest with all chunks)
- source-digests/cma-flip-property-2026-05.md (full digest with all chunks)
- source-digests/cma-triplex-2026-02.md (full digest with all chunks)

### Log
- ingestion-log.md (this file)

---

## Blockers / Notes

- ✅ RESOLVED: Extracted all 4 transcript PDFs via direct download
- 2 videos still lack transcripts (Development & New Construction, Work With Your TC)
- 1 image/screenshot not yet processed (card_20260730040320.png)
- Google Drive folder is publicly accessible but API access not authenticated to billy@ account
- All transcript PDFs successfully downloaded and extracted using pdfplumber

## Batch 2 — August 9, 2026

### New Sources Added
| # | Source | Type | Size | Transcript? | Status |
|---|--------|------|------|-------------|--------|
| 8 | 2025 Feb 12 Nerdy Nuances and Negotiation Nuggets w Marty | PDF transcript | 165 KB | ✅ Yes | **PROCESSED** |
| 9 | 2025 Jan 15 Making Connections Using Storytelling w Marty | PDF transcript | 178 KB | ✅ Yes | **PROCESSED** |

### Files Created (Batch 2)

**Raw Transcripts**
- raw-transcripts/nerdy-nuances-negotiation-2025-02.txt (827 lines)
- raw-transcripts/making-connections-storytelling-2025-01.txt (846 lines)

**JSON Source Records**
- source-records/nerdy-nuances-negotiation-2025-02.json (11 broker guidance scenarios, 4 objections, 12 search chunks)
- source-records/making-connections-storytelling-2025-01.json (5 broker guidance scenarios, 3 objections, 10 search chunks)

**Markdown Digests**
- source-digests/nerdy-nuances-negotiation-2025-02.md
- source-digests/making-connections-storytelling-2025-01.md

### Batch 2 Notes
- Both sources are Marty-led training sessions from early 2025
- Nerdy Nuances: Utah/UAR-specific contract tactics; escalation clause template is custom (not UAR-approved)
- Storytelling: Donald Miller StoryBrand framework application; "1600%" email CTA stat is unverified
- Star Wars film clips shown during training excluded from chunks (copyrighted content)

## Batch 3 — August 11, 2026

### New Sources Added
| # | Source | Type | Size | Transcript? | Status |
|---|--------|------|------|-------------|--------|
| 10 | 2025 Apr 9 Short Sales - How to Buy & Sell w Marty | PDF transcript | 212 KB | ✅ Yes | **PROCESSED** |
| 11 | 2025 Dec 10 Common REPC Errors to Avoid | PDF transcript | 114 KB | ✅ Yes | **PROCESSED** |
| 12 | 2026 Jul 6 Planned Decision Making | PDF transcript | 153 KB | ✅ Yes | **PROCESSED** |
| 13 | 2025 Jul 30 Work With Your TC w Marty & Marc | Video only | 665 MB | ❌ No | PENDING TRANSCRIPTION |
| 14 | 2026 Apr 16 Development & New Construction Deals w Craig | Video only | 764 MB | ❌ No | PENDING TRANSCRIPTION |

### Files Created (Batch 3)

**Raw Transcripts**
- raw-transcripts/short-sales-2025-04-transcript.txt (935 lines)
- raw-transcripts/repc-errors-2025-12-transcript.txt (474 lines)
- raw-transcripts/planned-decision-making-2026-07-transcript.txt (683 lines)

**JSON Source Records**
- source-records/short-sales-2025-04.json (13 broker guidance scenarios, 4 objections, 18 search chunks)
- source-records/repc-errors-2025-12.json (13 broker guidance scenarios, 3 objections, 13 search chunks)
- source-records/planned-decision-making-2026-07.json (8 broker guidance scenarios, 3 objections, 9 search chunks)

**Markdown Digests**
- source-digests/short-sales-2025-04.md
- source-digests/repc-errors-2025-12.md
- source-digests/planned-decision-making-2026-07.md

### Batch 3 Notes
- Short Sales: Marty-led comprehensive training; Utah-specific forms (Brokermint, MLS); conversation log technique emphasized as critical tool
- REPC Errors: Darren-led practical contract administration; PID disclosure is newer requirement many agents miss; compensation structure litigation risk is significant
- Planned Decision Making: Marty adapts military OODA loop and FACADE model from Hazard Lee's "The Art of Clear Thinking"; emphasizes slowing down under pressure
- 2 videos still pending transcription (Work With Your TC, Development & New Construction)
- **Validator bug fixed:** `first_phrase_in_span()` was returning `False` for all chunks with < 8 words even when the phrase was present in the span. Fixed to `return phrase in span_norm, phrase`
- **pdftotext extraction artifacts:** Some PDF-to-text conversions produced garbled characters (e.g., "T. He Art o Clear T hin king" instead of "The Art of Clear Thinking"). These artifacts are preserved in raw transcripts as-is. Future batches should use a higher-quality PDF extraction tool or verify transcript accuracy before chunking.

## Next Steps

1. Transcribe 2 remaining videos via faster-whisper
2. Process screenshot image for any relevant content
3. Create master index file for Hermes to consume
4. Update handoff file with file locations and schema
