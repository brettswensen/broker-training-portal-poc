# Broker Brain dashboard current recap

_Last updated: 2026-08-02_

## What this is

Broker Brain is an agent-facing training dashboard for a real estate team. It is not a broker sales page. The core promise is: an agent can ask a live transaction/client question, get plain-English broker guidance, and then open the underlying training, playbooks, topics, videos, and objections when they need source material.

## Main product direction

- **Ask the Broker is the focal feature.** The dashboard should visually lead with Ask, not bury it behind generic training-library sections.
- **Answers should be useful first, cited second.** The answer should show broker guidance, why it works, and wording the agent can use. Sources stay available but should not dominate the first mobile view.
- **The tone should be authoritative and practical.** Avoid backend/model status language, casual AI phrasing, or abstract product jargon.
- **The dashboard is for agents in the field.** Mobile needs to be compact, readable, and easy to tap.
- **Preview first.** Changes should be reviewed on staging/dev before any production-style rollout.

## Current implementation areas

- `design-pass/index.html` — main Broker Brain dashboard preview.
- `design-pass/designer-pass.css` — designer/mobile polish for the dashboard.
- `assets/styles.css` — shared base UI styles.
- `assets/app.js` — dashboard behavior, Ask the Broker rendering, search routing, training/playbook/topic rendering.
- `library/`, `playbooks/`, `topics/` — routed pages linked from the dashboard.
- `api/ask.js` — live Ask endpoint used when available, with saved-training fallback on the static dashboard.

## Built dashboard sections

1. **Hero** — team knowledge-base positioning.
2. **Ask the Broker** — question box, quick chips, Ask button, generated broker guidance, client wording, and collapsed source evidence.
3. **Search trainings and playbooks** — search-under-Ask route into the library with preserved query.
4. **Latest Training** — horizontally scrollable mobile video/training rail.
5. **New Agent Path** — onboarding/learning path card.
6. **Playbooks** — field-guide cards linking to standalone playbook pages.
7. **Topic Library** — topic grid for browsing brokerage knowledge.
8. **Training Videos** — searchable training list.
9. **Objection Library** — common objection cards tied back to playbooks.
10. **Powered by Makrly footer** — subtle attribution.

## Mobile optimization status

Previously completed:

- Mobile shell/sidebar/header treatment.
- Compact mobile hero.
- Ask card mobile layout.
- Smaller question box and compact chips.
- Mobile answer layout with practical summary first.
- Sources collapsed by default.
- Faster saved-training fallback when the live Ask endpoint is slow.

Current local Phase 3 verification pass covers:

- No horizontal overflow at 390px mobile width.
- Ask renders a ready answer.
- Source evidence remains collapsed by default.
- Search-under-Ask accepts a query and routes to `/library/?q=repair`.
- Latest Training cards fit as a mobile horizontal rail.
- Playbooks, Topics, Training Videos, and Objections stack into mobile-safe cards.
- Visible tap targets pass the local mobile check.

## Current staging/preview target

Primary GitHub Pages preview path pattern:

- `https://brettswensen.github.io/broker-training-portal-poc/design-pass/?v=<cache-key>`

The last known active preview from prior work was:

- `https://brettswensen.github.io/broker-training-portal-poc/design-pass/?v=4df083c`

## Important next decision

Before broader functionality changes, Billy should review the finished mobile pass on the staging preview. After mobile approval, the next functionality work can focus on things like live Ask behavior, better source grounding, search/filter UX, saved answers, admin/training ingestion workflow, or role-specific broker guidance flows.
