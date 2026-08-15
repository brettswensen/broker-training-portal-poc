# Billy Prompt: 9x16 Social Asset Designs from Broker Brain Transcripts

**Audience:** Billy / Broker Brain content operator  
**Requested by:** Brett  
**Prepared by:** Hermes coding assistant  
**Date:** 2026-08-11  
**Status:** Ready for Billy to execute as a content/design-spec batch

---

## 1. Context: What Hermes built for social

Broker Brain now includes a **Social Content Studio** concept in the portal. The purpose is **not** internal broker summaries. It is a demo of how agents can turn broker training transcripts into customer-facing social content that helps them attract buyers and sellers.

Current Social Content Studio positioning:

- Agents choose a training topic from completed transcript/source material.
- Broker Brain turns the training insight into public-friendly content ideas.
- Output is **draft-only** and should be reviewed by the broker/agent before posting.
- Content should help agents educate potential clients and start conversations.
- It should work for Instagram/Facebook style posting.
- It should avoid legal/tax/financial advice unless phrased as general education with professional-referral language.
- It should feel polished, useful, and client-facing, not like a transcript summary.

Brett now wants Billy to create sample **9:16 vertical social asset designs** based on the transcripts, so agents can have images/reels/story slides they can post to attract clients.

---

## 2. Billy's assignment

Create a first batch of transcript-grounded **9x16 social asset design concepts**.

These should be image/design specs, not platform code.

Each asset should help an agent post something useful to buyers/sellers on social media. Think:

- Instagram Story
- Instagram Reel cover
- Facebook Story
- Vertical carousel slide
- Agent-branded educational graphic

Target size:

```text
1080 x 1920 px
9:16 vertical
```

---

## 3. Source material to use first

Start with these currently indexed Broker Brain transcript topics:

| Priority | Source ID | Topic | Client-facing angle |
|---|---|---|---|
| 1 | `planned-decision-making-2026-07` | Planned Decision Making | Help buyers/sellers slow down, avoid panic, and make clearer decisions in stressful real estate moments. |
| 2 | `short-sales-2025-04` | Short Sales - How to Buy and Sell | Explain short sales in plain language for distressed sellers or buyers considering a short sale property. |
| 3 | `repc-errors-2025-12` | Common REPC Errors to Avoid | Educate clients on why detail-oriented contract work matters. Keep it public-friendly and not too technical. |
| 4 | `repair-negotiations-2026-07` | Repair Negotiations | Help buyers/sellers understand inspection response strategy and avoiding repair-request wish lists. |
| 5 | `1031-exchange-2026-05` | 1031 Exchange | High-level education only. Must include CPA/QI/professional guidance language. |
| 6 | `cma-triplex-2026-02` / `cma-flip-property-2026-05` | CMA / Pricing | Help sellers understand why pricing needs evidence and nuance, not guesses. |

Use the existing files in:

```text
content-ingestion/source-digests/
content-ingestion/source-records/
content-ingestion/raw-transcripts/
```

---

## 4. Required deliverable from Billy

Create a Markdown file at:

```text
content-ingestion/social-assets/social-asset-designs-batch-001.md
```

Also create a machine-readable JSON companion at:

```text
content-ingestion/social-assets/social-asset-designs-batch-001.json
```

If you actually generate image files, place them under:

```text
content-ingestion/social-assets/batch-001-images/
```

Use descriptive filenames like:

```text
planned-decision-making-ooda-loop-story-01.png
short-sale-plain-english-story-01.png
repc-errors-contract-details-story-01.png
```

---

## 5. Batch size

For the first pass, create:

```text
12 total asset concepts
```

Recommended spread:

- 2 concepts for Planned Decision Making
- 2 concepts for Short Sales
- 2 concepts for Common REPC Errors
- 2 concepts for Repair Negotiations
- 2 concepts for CMA/Pricing
- 1 concept for 1031 Exchange
- 1 concept for New Construction / PID / client due diligence if source material supports it

---

## 6. Each asset concept must include

For each 9:16 design concept, include:

| Field | Requirement |
|---|---|
| `asset_id` | Stable slug, e.g. `planned-decision-making-ooda-story-01` |
| `source_id` | Matching transcript/source record ID |
| `source_title` | Human source title |
| `audience` | Buyer, seller, homeowner, investor, or general client |
| `agent_goal` | What this helps an agent attract or start a conversation about |
| `format` | Story, Reel cover, carousel slide, infographic, checklist, myth-vs-fact, etc. |
| `headline` | Big text on the image, 6-12 words max |
| `subheadline` | Support text, 1-2 short lines |
| `body_copy` | Optional supporting text; keep minimal for 9:16 image readability |
| `cta` | Soft call to action, e.g. “DM me before you make your next move” |
| `visual_direction` | Layout, colors, icon/photo ideas, composition |
| `design_prompt` | Image-generation prompt or designer prompt for a 1080x1920 asset |
| `caption_draft` | Agent-facing caption draft for Instagram/Facebook |
| `compliance_note` | Risk note and required professional-referral wording if needed |
| `source_basis` | 1-3 bullet points from the transcript/digest that justify the asset |
| `source_citations` | Chunk IDs, transcript lines, or digest section references |

---

## 7. Design style guidance

Make these look like modern real-estate education graphics, not generic AI quote cards.

Preferred style:

- Premium but approachable.
- Clean dark or warm neutral background.
- Bold readable headline.
- One simple visual metaphor per asset.
- Works on a phone at a glance.
- Keep text large and minimal.
- Leave safe margins for Instagram UI.
- Add optional placeholder for agent/brokerage logo but do not require final branding.

Avoid:

- Tiny paragraphs on the image.
- Fearmongering.
- Legal/tax guarantees.
- “Broker-only” jargon.
- Claims like “save thousands” unless directly source-supported and carefully qualified.
- Anything that sounds like legal, tax, lending, or financial advice.

---

## 8. Example asset directions Brett is looking for

### Planned Decision Making

Potential 9:16 image ideas:

- “Pause Before You Panic”
- “Real Estate Decisions Need a Flight Plan”
- “Observe. Orient. Decide. Act.”
- “When the Deal Gets Stressful, Slow the Decision Down”

Client-facing angle:

> A good agent helps clients separate facts from assumptions before making a high-stakes decision.

### Short Sales

Potential 9:16 image ideas:

- “A Short Sale Is a Process, Not a Discount Sign”
- “Behind Every Short Sale: Lender Approval”
- “Buying a Short Sale? Patience Is Part of the Price”
- “Hardship Sale? Know Your Options Before Foreclosure”

Client-facing angle:

> Educate distressed sellers and patient buyers without giving legal/tax/credit advice.

Required caution:

> Encourage clients to speak with qualified legal, tax, lending, and credit professionals where appropriate.

### Common REPC Errors

Potential 9:16 image ideas:

- “Tiny Contract Details Can Create Big Problems”
- “Mounted Usually Means Included”
- “Settlement and Closing Are Not Always the Same Day”
- “Before You Sign: Ask What This Blank Means”

Client-facing angle:

> Show why hiring a detail-oriented agent protects the client.

### Repair Negotiations

Potential 9:16 image ideas:

- “Inspection Requests Are Strategy, Not a Wish List”
- “Focus Repairs on What Matters Most”
- “Safety. Function. Major Defects. Start There.”
- “A Clean Repair Request Keeps Negotiations Alive”

Client-facing angle:

> Help buyers and sellers understand how to keep repair conversations productive.

### CMA / Pricing

Potential 9:16 image ideas:

- “Pricing Is Evidence, Not a Guess”
- “The Right Price Starts With the Right Comparables”
- “Unique Homes Need More Than a Zestimate”
- “Before You List, Understand the Story Your Comps Tell”

Client-facing angle:

> Attract sellers by showing strategic pricing expertise.

---

## 9. JSON shape to use

Use this structure for the JSON companion file:

```json
{
  "batch_id": "social-asset-designs-batch-001",
  "created_by": "Billy",
  "purpose": "9x16 customer-facing social asset designs from Broker Brain transcripts",
  "asset_size": "1080x1920",
  "assets": [
    {
      "asset_id": "planned-decision-making-ooda-story-01",
      "source_id": "planned-decision-making-2026-07",
      "source_title": "Planned Decision Making",
      "audience": "buyers and sellers under pressure",
      "agent_goal": "Start conversations with clients who are facing stressful real estate decisions.",
      "format": "Instagram Story / Reel cover",
      "headline": "Pause Before You Panic",
      "subheadline": "Good real estate decisions start by separating facts from assumptions.",
      "body_copy": "Observe. Orient. Decide. Act.",
      "cta": "DM me before you make your next move under pressure.",
      "visual_direction": "Dark premium background, subtle cockpit/flight-plan line art, four-step OODA loop as simple vertical markers, calm cyan accent.",
      "design_prompt": "Create a polished 1080x1920 vertical real estate education graphic for Instagram Stories. Dark premium background, subtle flight-plan/cockpit-inspired line art, bold headline 'Pause Before You Panic', smaller text 'Observe. Orient. Decide. Act.', calm cyan and white typography, modern brokerage education style, large readable text, safe margins, no logos, no tiny paragraphs.",
      "caption_draft": "In a stressful real estate moment, the worst move is often a rushed one. A good decision starts by separating facts from assumptions, then choosing the next best step. If you're feeling pressure in a deal, let's slow it down and work through it clearly.",
      "compliance_note": "General real estate education only. Avoid promising outcomes.",
      "source_basis": [
        "Training introduces OODA loop for real estate decision-making.",
        "Training emphasizes avoiding rushed decisions that make stressful situations worse.",
        "Training says agents should separate known facts from assumptions."
      ],
      "source_citations": [
        "planned-decision-making-2026-07 digest: The OODA Loop",
        "planned-decision-making-2026-07 digest: Danger of Assumptions"
      ]
    }
  ]
}
```

---

## 10. Billy self-QA before saying ready

Before handing the batch back, check:

- [ ] Every asset is based on a real transcript/source digest.
- [ ] Every asset is customer-facing for buyers/sellers, not an internal broker summary.
- [ ] Every image concept fits 9:16 / 1080x1920.
- [ ] On-image text is short enough to read on a phone.
- [ ] Captions help agents attract clients or start conversations.
- [ ] Risk-sensitive topics include appropriate professional-referral language.
- [ ] Source basis/citations are included for each concept.
- [ ] No legal/tax/credit/lending guarantees.
- [ ] No unsupported claims about savings, outcomes, or market predictions.

---

## 11. Copy/paste prompt for Billy

```text
Billy, please create a first batch of 9:16 social asset design concepts from the Broker Brain transcripts.

Context: Hermes added a Social Content Studio concept to Broker Brain. The point is to help agents turn completed broker training transcripts into customer-facing Instagram/Facebook content ideas that attract buyers and sellers. This is draft-only, broker/agent review required, and not auto-posting.

Please create 12 vertical 1080x1920 social asset concepts based on the existing source digests/source records/transcripts in the repo:

content-ingestion/source-digests/
content-ingestion/source-records/
content-ingestion/raw-transcripts/

Prioritize these topics:
1. Planned Decision Making
2. Short Sales - How to Buy and Sell
3. Common REPC Errors to Avoid
4. Repair Negotiations
5. CMA / Pricing
6. 1031 Exchange or New Construction/PID due diligence if source-supported

For each asset, include:
- asset_id
- source_id
- source_title
- audience
- agent_goal
- format
- headline
- subheadline
- body_copy
- cta
- visual_direction
- design_prompt for a 1080x1920 image
- caption_draft
- compliance_note
- source_basis
- source_citations

Create:

content-ingestion/social-assets/social-asset-designs-batch-001.md
content-ingestion/social-assets/social-asset-designs-batch-001.json

If you generate actual sample image files, place them here:

content-ingestion/social-assets/batch-001-images/

Keep everything transcript-grounded and customer-facing. Avoid internal broker summaries, tiny text, fearmongering, and legal/tax/credit/lending guarantees. For short sales and 1031 exchange, include professional-referral language where appropriate.

The goal is to give agents social-ready 9x16 educational image concepts that help them attract clients and start conversations.
```
