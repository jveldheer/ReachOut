# ReachOut Quick Reference Card

## 🚀 Start the App
```bash
npm install        # First time only
npm start         # Start server
# Open: http://localhost:3000
```

## 📝 Fill Out Form (3 min per company)

### Must Research (10 min)
- LinkedIn → Find decision-maker
- Company site → Recent news/launches
- Their social → Current campaigns

### Must Fill Fields
1. **Company Name** - Full legal or brand name
2. **Contact** - First name, last name, title
3. **Category** - Pick from dropdown
4. **Trigger** - Recent news/launch/campaign
5. **KPIs** - What they care about (redemptions, CPA, engagement)
6. **WhyFit** - THIS IS KEY! Be specific and compelling

### Optional (helps with ROI math)
- Avg Order Value
- Projected Redemptions
- Projected Revenue

## 🎯 Generation Options

### Copy Prompt (Free)
1. Click "Generate Pitch"
2. Click "📋 Copy"
3. Paste into Claude
4. Get email package

### Direct API (Fast)
1. Click "Generate Pitch"
2. Enter API key
3. Click "Generate with API"
4. Instant results

## 💾 Save & Reuse

**Save Company**
- Click "💾 Save Company" button
- Stored for later reuse

**Load Company**
- Click "📁 Saved Companies"
- Click "Load" on any company
- Edit and regenerate

## ⚙️ Brand Settings

**Update Your Data**
- Click "⚙️ Brand Settings"
- Edit JSON (audience, links, proof)
- Click "💾 Save"

**What to Update**
- Social follower counts (monthly)
- New press mentions
- Updated case studies
- New links (media kit, etc.)

## 📧 Email Output Structure

1. **Subject Lines** (4 options A/B/C/D)
2. **Opening Line** (personalized)
3. **Primary Email** (240-320 words) ← Send this
4. **Short Version** (≤120 words) ← For DMs
5. **Follow-up #1** (+48 hours)
6. **Follow-up #2** (+7 days)
7. **Category Concepts** (8 verticals)
8. **Tracking Codes**
9. **Signature**

## ⏰ Best Times to Send

**Days:** Tuesday, Wednesday, Thursday
**Times:** 9-11am or 2-4pm (their timezone)
**Avoid:** Mondays (swamped), Fridays (checked out)

## 🎯 Target Categories (Priority Order)

### Tier 1: Fast Digital Brands
- Cookware (Lodge, Traeger, YETI)
- Supplements (Optimum Nutrition, Ghost)
- Fitness Gear (Rogue, Titan)
- Grills (Weber, Pit Boss, Blackstone)

### Tier 2: Retailers & CPG
- Midwest Grocers (Meijer, Hy-Vee)
- Meal Kits (HelloFresh, ButcherBox)
- Family Brands (Rubbermaid, Ziploc)

### Tier 3: Local & Mission
- Grand Rapids brands
- Youth sports orgs
- Community brands

## 📅 Timeline Strategy

**NOW - Jan 28 (Pre-Premiere)**
- Target: Digital-first brands (move fast)
- Angle: "Be first to align with moment"
- Volume: 5-10 pitches/week

**Jan 29 - Feb 4 (Launch Week)**
- Target: All categories
- Angle: "Active moment happening NOW"
- Volume: 10-15 pitches/week

**Feb 5 - Mar 15 (Post-Premiere)**
- Target: Slow movers, follow-ups
- Angle: "Proven lift, extend the tail"
- Volume: 5-10 pitches/week + follow-ups

## 🔑 Success Formula

1. **Research 10 min** → Better targeting
2. **WhyFit 5 min** → Be specific and compelling
3. **Send Tuesday-Thursday** → Higher open rates
4. **Follow up 2x** → +48hr and +7 days
5. **Track what works** → Iterate

## 📊 Track These Metrics

- **Open rates** → Test subject lines
- **Reply rates** → Test WhyFit quality
- **Meeting booked** → Track by category
- **Deals closed** → Calculate ROI

## 🆘 Quick Troubleshooting

**App won't start?**
```bash
npm install
npm start
```

**Port 3000 busy?**
```bash
echo "PORT=8080" > .env
npm start
```

**API key error?**
- Get key: console.anthropic.com/settings/keys
- Add to .env: `ANTHROPIC_API_KEY=sk-ant-...`
- Restart server

**Form not saving?**
- Check all required (*) fields
- WhyFit can't be blank

**Brand settings won't save?**
- Check JSON format (no trailing commas)
- Use editor's format feature

## 💡 Pro Tips

### Research
- LinkedIn: "brand partnerships [Company]"
- Google: "[Company] new product 2025"
- Social: Check last 2 weeks of posts

### Writing WhyFit
❌ Bad: "Lodge is a great brand and Jared is a great chef"
✅ Good: "Lodge's 125-year heritage + performance positioning aligns with Jared's results-driven cooking and Midwest values"

### Subject Lines
- Test all 4 options (A/B test)
- Track which style gets opens
- Double down on winners

### Follow-Ups
- Don't skip! 60% of replies come from follow-ups
- Change subject line (break thread)
- Add new value (don't just "bump")

### Batch Processing
- Research 5 companies Monday
- Generate all 5 pitches Tuesday
- Schedule sends Tue-Thu
- Review replies Friday

## 🎁 What Makes a Strong Pitch?

1. **Timely Trigger** - Recent news/launch (not generic)
2. **Specific WhyFit** - Show you get their brand
3. **Clear ROI** - Numbers (even estimated)
4. **One CTA** - Calendar link, not "let me know"
5. **Give-Back Angle** - Mission alignment

## 📈 Scale Strategy

**Week 1:** 5 pitches (test and learn)
**Week 2:** 10 pitches (refine approach)
**Week 3-6:** 15-20 pitches/week (scale what works)
**Post-premiere:** Focus on follow-ups + new targets

## 🔗 Quick Links

- **Web App:** http://localhost:3000
- **API Keys:** https://console.anthropic.com/settings/keys
- **Calendar:** [Your Calendly Link]
- **Media Kit:** [Your Media Kit URL]

## 📚 Documentation

- **[GETTING-STARTED.md](GETTING-STARTED.md)** - First-time setup walkthrough
- **[WEB-APP-README.md](WEB-APP-README.md)** - Full technical guide
- **[README.md](README.md)** - Complete system overview

## 🎯 Daily Workflow

**Morning (30 min)**
1. Research 3-5 companies
2. Save as company profiles
3. Review yesterday's replies

**Afternoon (30 min)**
4. Generate pitches for saved companies
5. Send 2-3 emails (stagger timing)
6. Schedule follow-ups

**Weekly (1 hour)**
7. Review metrics (opens, replies, meetings)
8. Iterate on successful patterns
9. Build next week's target list

---

## The One Thing to Remember

> **WhyFit is everything.**
>
> Spend 80% of your time here. Make it specific, compelling, and true.
> Generic = ignored. Specific = meetings.

---

**Questions?** Check GETTING-STARTED.md or WEB-APP-README.md

**Ready?** `npm start` and let's get pitching! 🚀
