# Getting Started with ReachOut Web App

## Installation (30 seconds)

```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start

# 3. Open your browser
# Navigate to: http://localhost:3000
```

That's it! The app is running.

---

## First Time Setup (3 minutes)

### Step 1: Configure Your Brand Data

Click the **"⚙️ Brand Settings"** button in the top right.

You'll see a JSON editor with your brand information. Fill in these key fields:

```json
{
  "audience": {
    "instagram": "28000",           // Your IG follower count
    "tiktok": "15000",              // TikTok followers
    "youtube": "8500",              // YouTube subscribers
    "emailList": "3500",            // Email list size
    "emailOpenRate": "42"           // Average open rate %
  },
  "demographics": {
    "topGeos": "Michigan, Ohio, Illinois, Texas",
    "ageSkew": "25-44 (65%), 45-54 (25%)",
    "genderSplit": "70% male, 30% female",
    "interests": "football, fitness, grilling, family cooking"
  },
  "socialProof": {
    "press": "Featured in Grand Rapids Magazine, MLive Sports",
    "communityImpact": "Free youth lineman clinics (200+ athletes), food bank collabs",
    "caseStudy": "Grill brand: 8.2% CTR, 2.8x ROAS, 420 redemptions"
  },
  "pricing": {
    "tierA": "12000-15000",
    "tierB": "8000-10000",
    "tierC": "5000-6500"
  },
  "links": {
    "calendar": "https://calendly.com/jaredvelveire/15min",
    "mediaKit": "https://jaredvelveire.com/media-kit",
    "vault": "https://velveirelinemenvault.com",
    "cookingHub": "https://jaredvelveire.com/cooking"
  }
}
```

**Don't have all this info?** That's okay! Fill in what you have. You can always update it later.

**Must-have fields:**
- Audience numbers (IG, TikTok, YouTube)
- Calendar link
- At least 1-2 pieces of social proof

Click **"💾 Save Brand Data"** when done.

---

## Your First Pitch (2 minutes)

### Step 2: Research Your Target Company (10 min)

Before filling out the form, do quick research:

**LinkedIn** (5 min)
- Search: "brand partnerships [Company Name]"
- Find: Director of Partnerships, Brand Marketing Manager, or similar
- Note: Their name, title, recent posts

**Company Website** (3 min)
- Check: /press or /news for recent announcements
- Look for: Product launches, campaigns, expansions
- Note: 1-2 recent triggers

**Their Social** (2 min)
- Check: Recent Instagram/TikTok posts
- Look for: What they're promoting now
- Note: Themes and messaging

### Step 3: Fill Out the Form

Back in ReachOut, fill in the company form:

**Required Fields:**
```
Company Name: Lodge Cast Iron
First Name: Sarah
Last Name: Johnson
Job Title: Director of Brand Partnerships
Category: Cookware/Knives (dropdown)

Recent Trigger #1:
  "New spring collection launch featuring performance cookware"

Their KPIs:
  "email capture, retail sell-through, social engagement"

Why This Partnership Fits:
  "Lodge's 125-year heritage and performance-first positioning aligns
   perfectly with Jared's authentic, results-driven cooking approach.
   Both brands speak to Midwest values, family cooking, and quality
   that lasts. The Next Level Chef appearance gives Lodge a timely
   hook to reach home cooks ready to invest in their kitchens."
```

**Pro Tip:** The "Why This Partnership Fits" field is the most important. Be specific and compelling!

**Optional but Recommended:**
```
Avg Order Value: $75
Projected Redemptions: 500-800
Projected Revenue: $37,500-$60,000
```

### Step 4: Generate

Click **"🚀 Generate Pitch"**

You'll see two tabs:

**Prompt Tab**
- The complete prompt ready to copy
- Use the 📋 Copy button
- Paste into Claude (web or desktop)

**OR Generate with API**
- Enter your Anthropic API key (optional if set in .env)
- Click **"✨ Generate with API"**
- Get instant results in the app!

### Step 5: Review and Send

The generated output includes:

1. **4 Subject Line Options** (A/B/C/D)
   - Pick the one that fits your voice
   - Each has a matching preheader

2. **Personalized Opening**
   - First 1-2 lines tailored to their trigger

3. **Primary Email** (240-320 words)
   - Ready to copy and send
   - Professionally formatted
   - All your brand data integrated

4. **Short Version** (≤120 words)
   - For LinkedIn DM or mobile-friendly pitch

5. **2 Follow-Up Emails**
   - Follow-up #1: +48 hours after send
   - Follow-up #2: +7 days if no reply

6. **Category-Specific Concepts**
   - 8 different vertical ideas
   - Use for other pitches in same category

7. **Tracking & Rights**
   - UTM codes
   - Discount code format
   - FTC disclosure

8. **Signature Block**
   - Professional sign-off
   - P.S. with give-back angle

---

## Saving Companies

Click **"💾 Save Company"** to store this profile.

Later, click **"📁 Saved Companies"** to:
- View all saved companies
- Load a company (auto-fills the form)
- Delete old companies
- Generate new pitches for saved companies

**Use Case:** Save 10-20 high-priority companies, then batch generate pitches when you have time.

---

## Two Ways to Generate

### Option A: Copy Prompt (Free)
1. Fill form → Generate Pitch
2. Copy the prompt
3. Paste into Claude (claude.ai)
4. Get your email package
5. **Cost:** Free (uses your Claude subscription)

### Option B: Direct API (Faster)
1. Fill form → Generate Pitch
2. Enter API key (or set in .env)
3. Click "Generate with API"
4. Get instant results in the app
5. **Cost:** ~$0.10-0.30 per generation

---

## Best Practices

### Research Quality
- **10-15 min per company** = much better results
- Recent triggers > generic info
- LinkedIn is your best friend

### Form Quality
- **WhyFit is everything** - spend 3-5 min on this field
- Be specific, not generic
- Show you understand their brand and goals

### Timing
- **Best days:** Tuesday-Thursday
- **Best times:** 9-11am or 2-4pm (recipient's timezone)
- **Pre-premiere urgency:** Now through Jan 28

### Batch Processing
1. Research 5 companies (1 hour)
2. Fill and save all 5 profiles (20 min)
3. Generate all pitches (5 min)
4. Schedule sends throughout week
5. Track responses

### Follow-Up Strategy
- Send initial pitch
- Wait 48 hours
- Send Follow-up #1 (new angle/data)
- Wait 7 days total
- Send Follow-up #2 (last call before premiere)

---

## Categories to Target

### High Priority (Fast Movers)
- Cookware (Lodge, Traeger, Blackstone, YETI)
- Supplements (Optimum Nutrition, Ghost, Performix)
- Fitness Equipment (Rogue, Titan, EliteFTS)
- Grills (Weber, Pit Boss, Camp Chef)

### Medium Priority (Retailers)
- Midwest Grocers (Meijer, Hy-Vee)
- Meal Kits (HelloFresh, ButcherBox)
- Family Brands (Rubbermaid, Reynolds)

### Long Tail (Local/Mission)
- Michigan/Grand Rapids brands
- Youth sports organizations
- Community-focused brands

---

## Keyboard Shortcuts

- `Tab` through form fields
- `Enter` to submit form
- `Cmd/Ctrl + C` to copy prompt
- `Esc` to close modals

---

## Need Help?

**App not loading?**
```bash
npm install
npm start
```

**Port 3000 in use?**
```bash
# Create .env file
echo "PORT=8080" > .env
npm start
```

**API key errors?**
- Get key from: https://console.anthropic.com/settings/keys
- Add to .env: `ANTHROPIC_API_KEY=sk-ant-...`
- OR enter in UI when prompted

**Brand data not saving?**
- Make sure JSON is valid (no trailing commas)
- Use the editor's format feature
- Restart server after major changes

---

## What's Next?

✅ Brand settings configured
✅ First pitch generated

**Now:**
1. Generate 5-10 pitches (high-priority targets)
2. Send throughout the week
3. Track response rates
4. Iterate on what works
5. Scale up pre-premiere push

**Timeline:**
- **Now - Jan 28:** Pre-premiere push (be first)
- **Jan 29 - Feb 4:** Launch week (active moment)
- **Feb 5 - Mar 15:** Post-premiere (proven lift)

The January 29 premiere is your moment. Let's maximize it! 🚀

---

## More Resources

- **[WEB-APP-README.md](WEB-APP-README.md)** - Full technical documentation
- **[README.md](README.md)** - Complete system overview
- **[QUICK-START.md](QUICK-START.md)** - CLI workflow (if you prefer scripts)
