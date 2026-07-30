# Video Ingestion Guide — Broker Training Portal POC

## Best Way to Give Hermes Video Training Content

For the POC, the goal is not to store video pixels first. The real value comes from extracting the words, structure, scripts, and lessons from the videos so they become searchable and usable by AI.

## Preferred Input Order

### Best: Video link + transcript
Give:
- video title
- video URL
- transcript file or captions
- optional category/topic

This is the fastest and most accurate path.

### Good: YouTube / Loom / Vimeo link with captions
If the video has captions/transcripts enabled, Hermes can usually fetch or extract the transcript and turn it into searchable content.

### Good: Audio/video file
Upload the file, and we can transcribe it first. Useful formats:
- `.mp4`
- `.mov`
- `.m4a`
- `.mp3`
- `.wav`

### Also useful: Raw notes or slides
If video transcription is slow or unavailable, supporting docs help create playbooks and summaries.

## What Gets Indexed
For each video training, create one content record:

```json
{
  "title": "Listing Appointment Training",
  "type": "video_training",
  "category": "Listings",
  "topics": ["listing appointment", "seller scripts", "pricing"],
  "source_url": "...",
  "duration": "...",
  "summary": "...",
  "key_takeaways": [],
  "scripts": [],
  "transcript": "...",
  "chunks": []
}
```

## What the Portal Should Show From Videos
- searchable transcript text
- short summary
- key takeaways
- timestamps / chapters
- related scripts
- related playbooks
- suggested agent actions
- source citation back to the original video

## Example Upload Sheet Columns
Use a simple spreadsheet or CSV:

| title | video_url | file_name | category | topics | notes |
|---|---|---|---|---|---|
| Listing Appointment 101 | https://... | listing-appointment.mp4 | Listings | listing appointment, pricing | Core new-agent training |

## Recommended First Batch
Start with 5–10 videos max:
- Listing appointment
- Buyer consultation
- Lead follow-up
- Open house
- Price reductions
- Contract-to-close
- Inspection objection

## POC Processing Steps
1. Collect video links/files in `/content/raw-videos/` or a Google Drive folder.
2. Extract transcript/captions.
3. Normalize transcript into markdown.
4. Generate title, summary, chapters, tags, and key takeaways.
5. Chunk transcript for search/AI.
6. Add source links and citations.
7. Generate first related playbooks.
8. Test search and Ask-the-Broker answers.

## Important Principle
The video itself can be linked or embedded, but the AI/search system needs the transcript. For POC speed, prioritize transcript extraction over perfect video hosting.
