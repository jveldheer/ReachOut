# ReachOut - Brand Partnership Email Generator

A conversion-optimized email generation system for pitching brand partnerships to companies, leveraging Jared Velveire's upcoming appearance on The Next Level Chef (Season 5, premiering January 29).

## Quick Start

### 1. Fill in Your Brand Data (ONE TIME)

Edit `/config/brand-data.json` and replace the `{{tokens}}` with your actual information:

```json
{
  "audience": {
    "instagram": "25K",  // Replace {{AudienceSizeIG}}
    "tiktok": "15K",     // Replace {{AudienceSizeTikTok}}
    "youtube": "8K",     // Replace {{AudienceSizeYT}}
    "emailList": "3500", // Replace {{EmailSubs}}
    "emailOpenRate": "42" // Replace {{EmailOpenRate}}
  },
  "links": {
    "calendar": "https://calendly.com/jaredvelveire/15min"  // Add your actual links
  }
}
```

**What to fill in:**
- Audience numbers (IG, TikTok, YouTube, email list size, open rate)
- Demographics (top geographies, age range, gender split, interests)
- Links (Calendly, media kit, one-sheet, case studies, Lineman Vault, cooking hub)
- Social proof (press highlights, community impact stories, case study results)
- Pricing tiers (Tier A/B/C dollar amounts)

### 2. Create Company-Specific Data

For each brand you want to pitch, create a JSON file (use `/examples/company-template.json` as a starting point):

```json
{
  "CompanyName": "Lodge Cast Iron",
  "RecipientFirst": "Sarah",
  "RecipientLast": "Johnson",
  "Title": "Director of Brand Partnerships",
  "Category": "cookware",
  "Trigger1": "new spring collection launch",
  "Trigger2": "increased focus on performance cooking content",
  "KPI": "email capture, retail sell-through, social engagement",
  "WhyFit": "Lodge's heritage + performance positioning aligns...",
  "AvgOrderValue": "$75",
  "ProjectedRedemptions": "500-800",
  "ProjectedRevenue": "$37,500-$60,000"
}
```

Save as `companies/lodge-cast-iron.json`

### 3. Generate the Pitch

Run the generator script:

```bash
node scripts/generate-pitch.js companies/lodge-cast-iron.json
```

This will:
1. Merge your brand data + company data
2. Fill in the master prompt template
3. Save to `/output/pitch-lodge-cast-iron-[timestamp].md`
4. Print the prompt to console

### 4. Get Your Email Package

Copy the generated prompt and paste it into Claude Code. Claude will generate:

1. **4 Subject Lines** (A/B/C/D) with preheaders
2. **Personalization Icebreaker** (opening line)
3. **Primary Email** (240-320 words, ready to send)
4. **Short Version** (≤120 words for mobile/DM)
5. **2 Follow-up Emails** (+48hr and +7 day)
6. **Category Adaptation Cheat Sheet** (8 vertical-specific concepts)
7. **Tracking & Rights Block** (UTM, codes, FTC compliance)
8. **Signature Block** (with give-back P.S.)
9. **Token Legend** (all variables used)

## Project Structure

```
ReachOut/
├── config/
│   └── brand-data.json          # Your static brand info (fill once)
├── templates/
│   └── master-prompt.md         # The email generation prompt
├── scripts/
│   └── generate-pitch.js        # Generator script
├── examples/
│   ├── company-template.json    # Blank template
│   └── company-supplement-brand.json  # Example for supplement brand
├── companies/                   # Your company files (create as needed)
├── output/                      # Generated prompts (auto-created)
└── README.md
```

## Workflow Tips

### For a Single Brand

1. Research the company (decision-maker, recent news, KPIs)
2. Fill in `companies/[brand-name].json`
3. Run generator
4. Paste prompt into Claude Code
5. Review generated emails
6. Send!

### For Multiple Brands (Batch)

1. Create multiple company JSON files
2. Run generator for each:
   ```bash
   for file in companies/*.json; do
     node scripts/generate-pitch.js "$file"
   done
   ```
3. Review all generated prompts in `/output/`
4. Process through Claude Code one by one

### Category-Specific Examples

Check `/examples/` for pre-filled templates:
- **Cookware/Knives**: `company-template.json` (Lodge Cast Iron)
- **Supplements**: `company-supplement-brand.json` (Performix Nutrition)

Copy and modify for your target brands.

## Customization

### Add More Category Examples

Edit `/examples/` and create new templates for:
- Grocer/CPG/meal kits
- Fitness equipment/recovery
- Outdoor/grill/fire
- Family/household brands
- Midwest/regional retailers
- Mission-driven orgs

### Modify the Master Prompt

Edit `/templates/master-prompt.md` to adjust:
- Tone and style
- Email structure
- Output format
- Quality standards

### Extend the Generator

Edit `/scripts/generate-pitch.js` to add:
- Additional data sources
- Pre-validation checks
- Company research automation
- Multi-format output (plain text, HTML, etc.)

## Token Reference

### Brand Tokens (config/brand-data.json)
- `{{AudienceSizeIG}}`, `{{AudienceSizeTikTok}}`, `{{AudienceSizeYT}}`
- `{{EmailSubs}}`, `{{EmailOpenRate}}`
- `{{TopGeos}}`, `{{AgeSkew}}`, `{{GenderSplit}}`, `{{Interests}}`
- `{{PressHighlights}}`, `{{GiveBack}}`, `{{MiniCaseStudy}}`
- `{{TierA}}`, `{{TierB}}`, `{{TierC}}`
- `{{MediaKitURL}}`, `{{OneSheetURL}}`, `{{CaseStudyURL}}`, `{{CalendlyURL}}`
- `{{VaultURL}}`, `{{CookingHubURL}}`

### Company Tokens (companies/*.json)
- `{{CompanyName}}`, `{{RecipientFirst}}`, `{{RecipientLast}}`, `{{Title}}`
- `{{Category}}`, `{{Trigger1}}`, `{{Trigger2}}`
- `{{KPI}}`, `{{WhyFit}}`
- `{{AvgOrderValue}}`, `{{ProjectedRedemptions}}`, `{{ProjectedRevenue}}`

## Best Practices

1. **Keep brand-data.json updated** - Review monthly (audience growth, new press, case studies)
2. **Research each company** - Spend 10-15 min finding recent triggers (launches, campaigns, hiring)
3. **Customize WhyFit** - This is the most important field; make it specific and compelling
4. **Test subject lines** - Run A/B tests and update the generator based on open rates
5. **Track conversions** - Note which categories/concepts convert best and refine

## Timeline Strategy

**Pre-January 29 (NOW - Jan 28)**
- Target: Brands who can move fast (digital-first, performance-focused)
- Angle: "Be first to align with the moment"
- Urgency: "Partnership launches week of premiere"

**Launch Week (Jan 29 - Feb 4)**
- Target: Larger brands, retailers (need more lead time)
- Angle: "Active cultural moment happening now"
- Proof: Episode viewership, social lift

**Post-Premiere (Feb 5 - Mar 15)**
- Target: All categories, plus those who watched and responded
- Angle: "Proven moment, extend the tail"
- Proof: 6-week lift data, engagement metrics

## Support

Questions? Check:
- The examples in `/examples/`
- The master prompt in `/templates/master-prompt.md`
- Generated output structure (run once to see format)

## License

Private - for Jared Velveire brand use only.
