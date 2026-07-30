# Real Estate Broker Training Portal POC

## Goal
Build a proof-of-concept dashboard for a real estate broker/team that houses trainings, scripts, SOPs, webinars, transcripts, newsletters, and documents — then indexes everything so agents can search, browse topics/playbooks, and ask AI questions with source citations.

## Reference Pattern
Inspired by the Operators Network portal:
- Dashboard home
- Global search across episodes/topics/tags
- Topic browsing grid with counts
- Playbooks synthesized from source material
- AI ask box that searches indexed transcripts and answers with sources
- Starred / In Progress / Completed learning states

## Real Estate Version
Primary users: agents on a brokerage/team.

Core sections:
- Dashboard
- All Trainings
- Topics
- Playbooks
- Scripts
- Documents
- Newsletters / Broker Updates
- Starred
- In Progress
- Completed
- Ask the Broker

## MVP Features
1. Upload/import source content
   - PDFs
   - transcripts
   - markdown/text docs
   - training notes
   - scripts/checklists
   - video links with transcript text

2. Normalize and index content
   - title
   - source type
   - category
   - topic tags
   - summary
   - full text/transcript
   - source URL or file path
   - chunks for search

3. Browse by topic
   Example real estate topics:
   - New Agent Onboarding
   - Listing Appointments
   - Buyer Consultations
   - Lead Follow Up
   - Open Houses
   - Price Reductions
   - Inspection Objections
   - CRM Daily Routine
   - Social Media / Content
   - Contracts & Compliance

4. Playbooks
   Example playbooks:
   - Listing Appointment Playbook
   - Buyer Consultation Playbook
   - Open House Playbook
   - Lead Follow-Up Playbook
   - Price Reduction Conversation Playbook
   - New Agent 30-Day Onboarding
   - Inspection Objection Playbook

5. Ask the Broker
   Agents can ask questions like:
   - How do I prepare for a listing appointment?
   - What do I say when a seller wants to overprice?
   - What is our open house follow-up process?
   - Where is the buyer consultation script?

   AI answer requirements:
   - concise answer
   - bullet/action steps
   - source citations
   - links back to related trainings/playbooks

## Suggested Tech Stack for Fast POC
- Frontend: Next.js / React
- Styling: dark Linear/Vercel-style dashboard
- Storage: local JSON + files first
- Search: keyword search first, vector search second
- AI: current Hermes GPT model for build; Kimi K2.7 Code can be tested for coding-agent workflow
- Later: Supabase/Postgres + pgvector if we want production-ready multi-user auth/content storage

## POC Acceptance Criteria
- [ ] Starter dashboard is viewable locally
- [ ] Sample content can be added to a `/content` folder
- [ ] Index script creates searchable JSON from uploaded files
- [ ] Search returns matching trainings/topics/scripts
- [ ] Ask box answers using indexed content and cites sources
- [ ] At least 3 playbooks are generated from sample trainings
- [ ] Agent can click a source and see the original content metadata/text

## Next Inputs Needed From Brett
Upload a starter batch:
- 3–5 trainings or documents
- 1–2 transcripts
- 1 script/checklist
- optional: brokerage/team name and branding preference

Best first content categories:
- Listing appointment
- Buyer consultation
- Lead follow-up
- Open house
- Price reductions
