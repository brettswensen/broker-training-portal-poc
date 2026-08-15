#!/usr/bin/env python3
"""Generate social-first assets using Pollinations.ai - clean, agent-ready, no branding"""

import urllib.parse
import urllib.request
import time
import os

OUTPUT_DIR = "/Users/billyagent/real-estate-training-portal-poc/content-ingestion/social-assets/social-first-batch-003-images"

ASSETS = [
    {
        "file": "01-deadline-stress-tip.png",
        "prompt": "Clean modern 1080x1920 vertical Instagram Story graphic. Dark navy blue background with subtle wave patterns. Small text at top left: DEAL STRESS TIP. Large bold white headline: Before a deadline gets weird, ask these 3 questions. Subhead in lighter gray: Most deal panic is really missing information. Three rounded rectangular boxes stacked vertically with thin teal borders, each with teal circle and white checkmark: 1. What do we know? 2. What are we guessing? 3. What happens if we wait? Bottom: teal banner with dark text Save this for your next contract deadline. Minimal, professional, no logos, no branding",
        "seed": 301,
    },
    {
        "file": "02-buyer-reminder.png",
        "prompt": "Clean modern 1080x1920 vertical Instagram Story graphic. Warm cream background. Small text at top left: BUYER REMINDER. Large bold dark headline: If you want the fridge, write it down. Subhead in warm gray: Verbal assumptions do not move with the house. Simple icons: fridge, washer, curtains, shelving. Text: Appliances. Fixtures. Curtains. Shelving. Spell it out before everyone signs. Bottom: warm accent banner Send this to someone writing an offer soon. Minimal, clean, no logos, no branding",
        "seed": 302,
    },
    {
        "file": "03-moving-day-reality.png",
        "prompt": "Clean modern 1080x1920 vertical Instagram Story graphic. Light gray background. Small text at top left: MOVING DAY REALITY CHECK. Large bold dark headline: Signing day is not always key day. Subhead: Settlement and closing are different moments. Simple timeline graphic: signature icon labeled SETTLEMENT, arrow, courthouse icon labeled CLOSING. Text: Settlement equals signing. Closing equals recording. Plan your movers after you confirm possession. Bottom: accent banner Ask about this before you book the truck. Clean, minimal, no logos",
        "seed": 303,
    },
    {
        "file": "04-inspection-tip.png",
        "prompt": "Clean modern 1080x1920 vertical Instagram Story graphic. Soft green background. Small text at top left: INSPECTION TIP. Large bold dark headline: The inspection is not a shopping list. Subhead: Ask for the things that actually protect you. Three priority items with icons: shield SAFETY, wrench FUNCTION, warning triangle MAJOR DEFECTS. Text: Start there. Bottom: green banner Save this before your inspection period. Clean, minimal, no logos, no branding",
        "seed": 304,
    },
    {
        "file": "05-real-estate-myth.png",
        "prompt": "Clean modern 1080x1920 vertical Instagram Story graphic. Split layout myth vs fact. Top half soft red with MYTH label: Short sales are quick discounts. Bottom half soft green with FACT label: The lender has to approve the deal. Center headline: A short sale is not the clearance rack. Subhead: It is a lender approval process. Bottom: neutral banner Curious about one? Ask before you fall in love with it. Clean, modern, no logos, no branding",
        "seed": 305,
    },
    {
        "file": "06-seller-pricing-tip.png",
        "prompt": "Clean modern 1080x1920 vertical Instagram Story graphic. Soft blue background. Small text at top left: SELLER PRICING TIP. Large bold dark headline: Your Zestimate has probably never walked through your ADU. Subhead: Unique properties need human pricing work. Icons: house with plus sign ADU, building triplex, bed nightly rental, tree land. Text: ADUs. Triplexes. Nightly rentals. Land. The comps need context. Bottom: blue banner If your property is unusual, get a real pricing review. Clean, minimal, no logos",
        "seed": 306,
    },
    {
        "file": "07-new-build-tip.png",
        "prompt": "Clean modern 1080x1920 vertical Instagram Story graphic. Soft orange background. Small text at top left: NEW BUILD BUYER TIP. Large bold dark headline: That new-build payment may have a surprise hiding in it. Subhead: Ask about PIDs before you fall in love with the model home. Three checklist items: Is there a PID? How much is it? How long does it last? Bottom: orange banner Save this for your next builder tour. Clean, minimal, no logos, no branding",
        "seed": 307,
    },
    {
        "file": "08-investor-note.png",
        "prompt": "Clean modern 1080x1920 vertical Instagram Story graphic. Professional dark background. Small text at top left: INVESTOR NOTE. Large bold white headline: A 1031 is not a magic tax eraser. Subhead in light gray: It can defer taxes, but the rules are strict. Simple timeline: sell property, arrow with DEFERRED, buy property. Text: Deferral is not forgiveness. Get the CPA and qualified intermediary involved early. Bottom: gold accent banner Talk to your tax team before you list. Professional, clean, no logos",
        "seed": 308,
    },
]


def generate_image(prompt, seed, output_path):
    encoded = urllib.parse.quote(prompt)
    url = f"https://image.pollinations.ai/prompt/{encoded}?width=1080&height=1920&seed={seed}&nologo=true"
    
    req = urllib.request.Request(url)
    req.add_header("User-Agent", "Mozilla/5.0")
    
    with urllib.request.urlopen(req, timeout=120) as response:
        data = response.read()
        with open(output_path, "wb") as f:
            f.write(data)
    
    return len(data)


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    for i, asset in enumerate(ASSETS, 1):
        output_path = os.path.join(OUTPUT_DIR, asset["file"])
        print(f"\n[{i}/8] Generating: {asset['file']}")
        
        try:
            size = generate_image(asset["prompt"], asset["seed"], output_path)
            print(f"  Success: {size:,} bytes")
            
            # Verify it's an image
            with open(output_path, "rb") as f:
                header = f.read(20)
                if header[:8] == b"\x89PNG\r\n\x1a\n":
                    print(f"  Verified: PNG")
                elif header[:3] == b"\xff\xd8\xff":
                    print(f"  Verified: JPEG")
                else:
                    print(f"  Warning: Unknown format")
                    
        except Exception as e:
            print(f"  Failed: {e}")
        
        if i < len(ASSETS):
            print(f"  Waiting 3s...")
            time.sleep(3)
    
    print(f"\n{'='*50}")
    print(f"Done! Check {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
