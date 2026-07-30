# Broker Brain platform demo progress recap - 2026-07-30

## What shipped

The portal was upgraded from a basic training/search dashboard into a stronger platform demo focused on the agent experience and the post-training workflow.

### New demo sections

1. **Latest Training**
   - Added a horizontal video-style carousel.
   - Shows thumbnail-like training cards with play buttons, status, deliverables, and actions.
   - Example cards include TC workflow, new construction, CMA, repair negotiations, 1031 exchange, and flip/land CMA.

2. **Training Pipeline**
   - Added a visual workflow showing how a live training becomes usable agent knowledge.
   - Flow: recording → transcript indexed → scripts extracted → playbooks updated → assets created → Ask the Broker updated.

3. **Expanded Playbook Example**
   - Playbook cards are now clickable.
   - Opening a playbook shows an operator-style expanded workflow with steps, broker-approved script, and source trail.
   - Repair Negotiation Playbook is the default expanded example.

4. **Ask the Broker enhancements**
   - Added copyable script actions: copy script, text message version, email version.
   - Added recommended next-step buttons.
   - Added a frontend fallback so related playbook actions still show when the live answer does not provide followups.

5. **Secondary proof-point section**
   - Added a buyer-conversation section comparing generic ChatGPT against Broker Brain.
   - Kept it lower on the page so the primary demo still feels agent-facing.
   - Removed white-label and unique/expert voice features from the build.

## What was intentionally not built

- White Label Expansion Preview.
- Ask Marty / Ask Craig / unique expert voice/personality modes.
- Public-facing emphasis on multiple voices or personality styles.

## Verification completed

### Local checks

- `node --check assets/app.js` passed.
- `node --check api/ask.js` passed.
- Local browser QA showed the latest training rail, pipeline, Ask panel, expanded playbook, and comparison section rendering cleanly.

### Production deployment

- Frontend and backend deployed to Vercel production.
- Production alias verified: `https://real-estate-training-portal-poc.vercel.app`
- GitHub repo pushed on `main`.

### Production API verification

Test prompt:

> How should I handle repair negotiations after inspection?

Result:

- HTTP 200.
- `live: true`.
- Source count: 3.
- Script present: yes.
- Followups present: yes.
- No unwanted phrases found in the API response check.

## Commits

- `917e0e9 feat: add platform demo training workflow`
- `e897c4a chore: log ask fallback reason`

## Notes

Production live generation briefly returned the safe fallback during verification. The handler worked locally with the stored key, so the Vercel production environment values were refreshed without printing secrets, then production was redeployed. After that, the Ask endpoint returned `live: true` again.

## Testable paths

1. Open the live portal.
2. Review the Latest Training carousel near the top.
3. Review the Training Pipeline directly below it.
4. Ask: `How should I handle repair negotiations after inspection?`
5. Confirm the answer includes broker guidance, a suggested script, copy/script buttons, recommended next steps, and sources.
6. Scroll to Playbooks and click a card to open the expanded playbook example.
