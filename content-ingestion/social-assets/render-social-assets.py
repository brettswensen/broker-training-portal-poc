#!/usr/bin/env python3
"""
Render social assets as clean HTML/CSS and screenshot to PNG using Playwright.
This produces precise, professional 1080x1920 graphics with real text rendering.
"""

import os
import asyncio
from playwright.async_api import async_playwright

OUTPUT_DIR = "/Users/billyagent/real-estate-training-portal-poc/content-ingestion/social-assets/batch-004-rendered"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Asset definitions matching Hermes' curated batch-002
ASSETS = [
    {
        "file": "01-deadline-stress-tip.png",
        "label": "DEAL STRESS TIP",
        "headline": "Before a deadline gets weird, ask these 3 questions.",
        "subhead": "Most deal panic is really missing information.",
        "items": [
            ("1", "What do we know?"),
            ("2", "What are we guessing?"),
            ("3", "What happens if we wait?"),
        ],
        "cta": "Save this for your next contract deadline.",
        "bg": "#1a2332",
        "accent": "#2dd4bf",
        "text": "#ffffff",
        "subtext": "#94a3b8",
    },
    {
        "file": "02-buyer-reminder.png",
        "label": "BUYER REMINDER",
        "headline": "If you want the fridge, write it down.",
        "subhead": "Verbal assumptions do not move with the house.",
        "items": [
            ("•", "Appliances"),
            ("•", "Fixtures"),
            ("•", "Curtains"),
            ("•", "Shelving"),
        ],
        "cta": "Send this to someone writing an offer soon.",
        "bg": "#faf6f1",
        "accent": "#d97706",
        "text": "#1f2937",
        "subtext": "#6b7280",
    },
    {
        "file": "03-moving-day-reality.png",
        "label": "MOVING DAY REALITY CHECK",
        "headline": "Signing day is not always key day.",
        "subhead": "Settlement and closing are different moments.",
        "items": [
            ("✍️", "Settlement = signing"),
            ("🏛️", "Closing = recording"),
            ("🚚", "Plan movers after possession confirms"),
        ],
        "cta": "Ask about this before you book the truck.",
        "bg": "#f3f4f6",
        "accent": "#4f46e5",
        "text": "#111827",
        "subtext": "#4b5563",
    },
    {
        "file": "04-inspection-tip.png",
        "label": "INSPECTION TIP",
        "headline": "The inspection is not a shopping list.",
        "subhead": "Ask for the things that actually protect you.",
        "items": [
            ("🛡️", "Safety"),
            ("🔧", "Function"),
            ("⚠️", "Major defects"),
        ],
        "cta": "Save this before your inspection period.",
        "bg": "#ecfdf5",
        "accent": "#059669",
        "text": "#064e3b",
        "subtext": "#065f46",
    },
    {
        "file": "05-short-sale-myth.png",
        "label": "REAL ESTATE MYTH",
        "headline": "A short sale is not the clearance rack.",
        "subhead": "It is a lender approval process.",
        "items": [
            ("MYTH", "Short sales are quick discounts"),
            ("FACT", "The lender has to approve the deal"),
        ],
        "cta": "Curious about one? Ask before you fall in love with it.",
        "bg": "#fef2f2",
        "accent": "#dc2626",
        "text": "#7f1d1d",
        "subtext": "#991b1b",
    },
    {
        "file": "06-seller-pricing-tip.png",
        "label": "SELLER PRICING TIP",
        "headline": "Your Zestimate has probably never walked through your ADU.",
        "subhead": "Unique properties need human pricing work.",
        "items": [
            ("🏠", "ADUs"),
            ("🏢", "Triplexes"),
            ("🛏️", "Nightly rentals"),
            ("🌲", "Land"),
        ],
        "cta": "If your property is unusual, get a real pricing review.",
        "bg": "#eff6ff",
        "accent": "#2563eb",
        "text": "#1e3a8a",
        "subtext": "#1e40af",
    },
    {
        "file": "07-new-build-tip.png",
        "label": "NEW BUILD BUYER TIP",
        "headline": "That new-build payment may have a surprise hiding in it.",
        "subhead": "Ask about PIDs before you fall in love with the model home.",
        "items": [
            ("❓", "Is there a PID?"),
            ("💰", "How much is it?"),
            ("⏱️", "How long does it last?"),
        ],
        "cta": "Save this for your next builder tour.",
        "bg": "#fff7ed",
        "accent": "#ea580c",
        "text": "#7c2d12",
        "subtext": "#9a3412",
    },
    {
        "file": "08-investor-note.png",
        "label": "INVESTOR NOTE",
        "headline": "A 1031 is not a magic tax eraser.",
        "subhead": "It can defer taxes, but the rules are strict.",
        "items": [
            ("📉", "Deferral is not forgiveness"),
            ("👥", "Get the CPA involved early"),
            ("📋", "Qualified intermediary required"),
        ],
        "cta": "Talk to your tax team before you list.",
        "bg": "#18181b",
        "accent": "#fbbf24",
        "text": "#fafafa",
        "subtext": "#a1a1aa",
    },
]


def build_html(asset):
    """Build clean HTML for a social asset."""
    items_html = ""
    for num, text in asset["items"]:
        items_html += f'''
        <div style="display: flex; align-items: center; margin-bottom: 32px; padding: 24px 28px; background: rgba(255,255,255,0.07); border-radius: 16px; border-left: 4px solid {asset['accent']};">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: {asset['accent']}; display: flex; align-items: center; justify-content: center; margin-right: 24px; flex-shrink: 0;">
                <span style="color: {asset['bg'] if asset['bg'] != '#18181b' else '#18181b'}; font-size: 22px; font-weight: 700;">{num}</span>
            </div>
            <span style="font-size: 36px; font-weight: 600; color: {asset['text']};">{text}</span>
        </div>
        '''

    return f'''<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{
    width: 1080px;
    height: 1920px;
    background: {asset['bg']};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    display: flex;
    flex-direction: column;
    padding: 80px 64px;
    position: relative;
}}
.label {{
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: {asset['accent']};
    margin-bottom: 40px;
}}
.headline {{
    font-size: 72px;
    font-weight: 800;
    line-height: 1.15;
    color: {asset['text']};
    margin-bottom: 28px;
}}
.subhead {{
    font-size: 36px;
    font-weight: 400;
    line-height: 1.4;
    color: {asset['subtext']};
    margin-bottom: 60px;
}}
.items {{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}}
.cta {{
    margin-top: auto;
    padding: 28px 36px;
    background: {asset['accent']};
    border-radius: 16px;
    text-align: center;
}}
.cta-text {{
    font-size: 30px;
    font-weight: 700;
    color: {asset['bg'] if asset['bg'] != '#18181b' else '#18181b'};
}}
</style>
</head>
<body>
    <div class="label">{asset['label']}</div>
    <div class="headline">{asset['headline']}</div>
    <div class="subhead">{asset['subhead']}</div>
    <div class="items">
        {items_html}
    </div>
    <div class="cta">
        <span class="cta-text">{asset['cta']}</span>
    </div>
</body>
</html>'''


async def render_asset(asset, output_path):
    """Render HTML to PNG using Playwright."""
    html = build_html(asset)

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1080, "height": 1920})
        await page.set_content(html)
        await page.wait_for_timeout(2000)  # Wait for fonts to load
        await page.screenshot(path=output_path, full_page=True)
        await browser.close()

    return os.path.getsize(output_path)


async def main():
    for i, asset in enumerate(ASSETS, 1):
        output_path = os.path.join(OUTPUT_DIR, asset["file"])
        print(f"\n[{i}/8] Rendering: {asset['file']}")
        print(f"  Headline: {asset['headline'][:50]}...")

        try:
            size = await render_asset(asset, output_path)
            print(f"  Success: {size:,} bytes")
        except Exception as e:
            print(f"  Failed: {e}")

    print(f"\n{'='*50}")
    print(f"Done! Check {OUTPUT_DIR}")


if __name__ == "__main__":
    asyncio.run(main())
