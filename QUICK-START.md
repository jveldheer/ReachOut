# Quick Start - 5 Minute Setup

## Step 1: Fill Your Brand Data (3 minutes)

Open `/config/brand-data.json` and find these lines. Replace the `{{tokens}}` with your real numbers and links:

### Audience Numbers
```json
"audience": {
  "instagram": "{{AudienceSizeIG}}",      // e.g., "28K" or "28,000"
  "tiktok": "{{AudienceSizeTikTok}}",     // e.g., "15K"
  "youtube": "{{AudienceSizeYT}}",        // e.g., "8.5K"
  "emailList": "{{EmailSubs}}",           // e.g., "3200"
  "emailOpenRate": "{{EmailOpenRate}}"    // e.g., "38" (just the number)
}
```

### Demographics
```json
"demographics": {
  "topGeos": "{{TopGeos}}",               // e.g., "Michigan, Ohio, Illinois, Texas"
  "ageSkew": "{{AgeSkew}}",               // e.g., "25-44 (65%), 45-54 (25%)"
  "genderSplit": "{{GenderSplit}}",       // e.g., "70% male, 30% female"
  "interests": "{{Interests}}"            // e.g., "football, fitness, grilling, family cooking"
}
```

### Social Proof
```json
"socialProof": {
  "press": "{{PressHighlights}}",         // e.g., "Featured in Grand Rapids Magazine, MLive Sports"
  "communityImpact": "{{GiveBack}}",      // e.g., "Free youth lineman clinics (200+ athletes), food bank collabs"
  "caseStudy": "{{MiniCaseStudy}}"        // e.g., "Grill brand: 8.2% CTR, 2.8x ROAS, 420 redemptions"
}
```

### Pricing
```json
"pricing": {
  "tierA": "{{TierA}}",                   // e.g., "12,000-15,000"
  "tierB": "{{TierB}}",                   // e.g., "8,000-10,000"
  "tierC": "{{TierC}}"                    // e.g., "5,000-6,500"
}
```

### Links
```json
"links": {
  "mediaKit": "{{MediaKitURL}}",          // e.g., "https://jaredvelveire.com/media-kit"
  "oneSheet": "{{OneSheetURL}}",          // e.g., "https://jaredvelveire.com/one-sheet.pdf"
  "caseStudy": "{{CaseStudyURL}}",        // e.g., "https://jaredvelveire.com/case-studies"
  "calendar": "{{CalendlyURL}}",          // e.g., "https://calendly.com/jaredvelveire/15min"
  "vault": "{{VaultURL}}",                // e.g., "https://velveirelinemenvault.com"
  "cookingHub": "{{CookingHubURL}}"       // e.g., "https://jaredvelveire.com/cooking"
}
```

**Don't have some of these?** That's OK! Leave the `{{token}}` as-is for now. The system will handle it gracefully. But try to fill in at least:
- Audience numbers (IG, TikTok, YouTube)
- Calendar link
- Top 1-2 pieces of social proof

## Step 2: Create Your First Company File (2 minutes)

Copy `/examples/company-template.json` and save as `/companies/[brand-name].json`

Fill in these 10 fields:

```json
{
  "CompanyName": "Lodge Cast Iron",               // The brand you're pitching
  "RecipientFirst": "Sarah",                      // First name of decision-maker
  "RecipientLast": "Johnson",                     // Last name
  "Title": "Director of Brand Partnerships",      // Their job title
  "Category": "cookware",                         // cookware, supplements, fitness, etc.
  "Trigger1": "new spring collection launch",     // Recent news (LinkedIn, press, website)
  "Trigger2": "",                                 // Optional second trigger
  "KPI": "email capture, sell-through",           // What they care about
  "WhyFit": "Lodge heritage + Midwest values",    // Why this partnership makes sense
  "AvgOrderValue": "$75"                          // Typical purchase price (estimate OK)
}
```

**Where to find this info:**
- LinkedIn: Search "[Company] brand partnerships" or "[Name] [Company]"
- Company website: /about, /press, /news
- Their Instagram/social: Recent posts about launches or campaigns

## Step 3: Generate & Send (30 seconds)

Run:
```bash
node scripts/generate-pitch.js companies/[your-file].json
```

The script will print a long prompt. **Copy the entire output** (everything between the `═` lines).

Paste it into Claude Code.

Claude will generate a complete email package with:
- 4 subject lines
- Full email (ready to send)
- Short version (for DM)
- 2 follow-up emails
- Tracking codes
- Signature

Review, copy the "Primary Email" section, and send!

## Step 4: Repeat for More Brands

For each new brand:
1. Copy `companies/template.json` → `companies/new-brand.json`
2. Change 10 fields (2 min research)
3. Run generator
4. Paste into Claude
5. Send

Target 5-10 brands per day during the pre-premiere window (now through Jan 28).

## Categories to Target

**High Priority (move fast, digital-first):**
- Cookware (Lodge, Traeger, Blackstone, YETI)
- Supplements (Performix, Optimum Nutrition, Ghost)
- Fitness Equipment (Rogue, Titan, EliteFTS)
- Grills/Outdoor (Weber, Pit Boss, Camp Chef)

**Medium Priority (retailers, CPG):**
- Midwest Grocers (Meijer, Hy-Vee, Festival Foods)
- Meal Kits (HelloFresh, ButcherBox, Thrive Market)
- Family Brands (Rubbermaid, Ziploc, Reynolds)

**Long-Tail (mission-driven, local):**
- Michigan/Grand Rapids brands
- Youth sports orgs
- Community-focused brands

## Pro Tips

1. **Batch research**: Spend 30 min finding 5 decision-makers on LinkedIn, then create all 5 JSON files
2. **Test subject lines**: Track which style gets best open rate, then favor that pattern
3. **Personalize WhyFit**: This one field makes the biggest difference. Make it specific and flattering but true
4. **Time your sends**: Tuesday-Thursday, 9-11am or 2-4pm (recipient's time zone)
5. **Follow up**: Use the generated follow-up emails at +2 days and +7 days if no reply

## Need Help?

**I don't have a media kit / case study / one-sheet:**
- Leave those tokens blank for now
- The email will still work without them
- Build them out as you get traction

**I don't know my exact audience demographics:**
- Check Instagram Insights → Audience
- Or use reasonable estimates based on your content
- Example: "Football/cooking content → 25-45, 65% male, Midwest + Texas"

**I don't have pricing tiers yet:**
- Leave as `{{TierA}}` etc.
- Claude will generate a structure you can use as a starting point
- Or just say "Let's scope to your KPIs" in the email

**The company doesn't list a partnerships contact:**
- Try: Director of Marketing, Brand Marketing Manager, CMO
- Find on LinkedIn: "brand partnerships [Company]" or "marketing [Company]"
- If all else fails, use general marketing email and it will get routed

---

Now go generate your first pitch! Should take < 5 minutes total once your brand data is set up.
