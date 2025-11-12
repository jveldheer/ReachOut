# ReachOut Web App 🚀

A beautiful, plug-and-play web application for generating brand partnership pitch emails. No command line needed!

## Quick Start (2 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```

### 3. Open Your Browser
Navigate to: **http://localhost:3000**

That's it! You're ready to generate pitches.

---

## Features

### ✨ Main Features
- **Beautiful Web UI** - Modern, responsive interface that works on desktop, tablet, and mobile
- **Smart Form** - Guided input with helpful tooltips and validation
- **Save Companies** - Save company profiles for quick reuse
- **Brand Settings** - Easily update your brand data (audience, links, social proof)
- **Two Generation Modes:**
  - **Copy Prompt** - Generate prompt and paste into Claude (free)
  - **Direct API** - Generate complete emails instantly with Claude API

### 🎯 Workflow Options

**Option A: Copy/Paste (No API Key Needed)**
1. Fill in company form
2. Click "Generate Pitch"
3. Copy the prompt
4. Paste into Claude (web, desktop, or API)
5. Get your complete email package

**Option B: Direct Generation (Requires API Key)**
1. Fill in company form
2. Click "Generate Pitch"
3. Click "Generate with API"
4. Enter your Anthropic API key (or set in .env)
5. Get instant results in the app

---

## Setup Guide

### Prerequisites
- Node.js 14 or higher
- npm (comes with Node.js)

### Installation

1. **Clone/Navigate to the repo**
   ```bash
   cd ReachOut
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Optional: Set up API key**
   ```bash
   cp .env.example .env
   # Edit .env and add your Anthropic API key
   ```

4. **Configure your brand data**
   - Start the server: `npm start`
   - Open http://localhost:3000
   - Click "Brand Settings" button
   - Fill in your audience numbers, links, and social proof
   - Click "Save"

5. **Start generating pitches!**

---

## Using the Web App

### Fill Out Company Information

Navigate to http://localhost:3000 and you'll see a form with:

**Required Fields:**
- Company Name
- Recipient First/Last Name
- Job Title
- Category (dropdown)
- Recent Trigger #1 (news, launch, campaign)
- Their KPIs (what they care about)
- Why This Partnership Fits (most important!)

**Optional Fields:**
- Recent Trigger #2
- Avg Order Value
- Projected Redemptions
- Projected Revenue

### Generate Your Pitch

Click **"🚀 Generate Pitch"** and you'll see two tabs:

**1. Prompt Tab**
- Full prompt ready to copy
- Copy button for easy clipboard access
- Option to generate directly with API

**2. Generated Email Tab** (if using API)
- Complete email package with:
  - 4 subject line options
  - Personalized opener
  - Primary email (240-320 words)
  - Short version (mobile/DM)
  - 2 follow-up emails
  - Category-specific concepts
  - Tracking & rights info
  - Signature block

### Save Companies for Reuse

Click **"💾 Save Company"** to store the company profile.

Later, click **"📁 Saved Companies"** to:
- View all saved companies
- Load a company to edit/regenerate
- Delete old companies

### Update Brand Settings

Click **"⚙️ Brand Settings"** to update your static brand info:

```json
{
  "audience": {
    "instagram": "28K",      // Update with your actual numbers
    "tiktok": "15K",
    "youtube": "8.5K",
    "emailList": "3500",
    "emailOpenRate": "42"
  },
  "links": {
    "calendar": "https://calendly.com/your-link",
    "mediaKit": "https://your-site.com/media-kit"
  }
}
```

This data is used for all generated pitches.

---

## API Key Setup (Optional)

You can generate emails directly in the app with the Claude API.

### Option 1: Environment Variable (Recommended)
```bash
# Create .env file
cp .env.example .env

# Edit .env and add:
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

Restart the server and the key will be used automatically.

### Option 2: Enter in UI
When you click "Generate with API", you can enter your key in the text field. This is temporary and not saved.

### Get an API Key
1. Go to https://console.anthropic.com/settings/keys
2. Create a new key
3. Copy and paste into .env or UI

**Pricing:** Claude API charges per token. A typical email generation costs $0.10-0.30.

---

## File Structure

```
ReachOut/
├── server.js              # Express server (API routes)
├── public/
│   ├── index.html         # Main web interface
│   ├── styles.css         # Beautiful modern styling
│   └── app.js             # Frontend JavaScript
├── config/
│   └── brand-data.json    # Your brand info (edit via UI)
├── templates/
│   └── master-prompt.md   # Email generation prompt
├── companies/             # Saved company profiles (auto-created)
├── output/                # Command-line generated prompts
├── scripts/
│   └── generate-pitch.js  # CLI script (still works)
├── examples/              # Example company files
├── package.json
├── .env.example           # API key template
└── WEB-APP-README.md      # This file
```

---

## Tips & Best Practices

### Research Tips
Before filling out the form, spend 10 minutes researching:
- **LinkedIn**: Find decision-maker (search "brand partnerships [Company]")
- **Company website**: Recent news, launches, campaigns
- **Their social**: What they're promoting right now
- **Press releases**: Recent announcements

### Form Tips
- **WhyFit is crucial**: This one field determines success. Be specific, flattering, and honest.
- **Use recent triggers**: The more timely, the better response rate
- **Know their KPIs**: Research what metrics matter in their industry
- **Save companies**: Build a library for quick follow-ups

### Timing Tips
- **Best days**: Tuesday-Thursday
- **Best times**: 9-11am or 2-4pm (recipient's timezone)
- **Urgency window**: Now through Jan 28 (before premiere)
- **Follow up**: Use generated follow-ups at +2 days and +7 days

### Batch Processing
1. Research 5-10 companies in one session (1-2 hours)
2. Fill and save all company profiles
3. Generate all pitches at once
4. Schedule sends throughout the week
5. Track responses and iterate

---

## Deployment (Optional)

Want to host this online so your team can use it?

### Deploy to Heroku (Free)
```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Create app
heroku create reachout-email-gen

# Set API key
heroku config:set ANTHROPIC_API_KEY=sk-ant-your-key

# Deploy
git push heroku main

# Open
heroku open
```

### Deploy to Railway (Free)
1. Push to GitHub
2. Go to https://railway.app
3. "New Project" → "Deploy from GitHub"
4. Select your repo
5. Add environment variable: `ANTHROPIC_API_KEY`
6. Deploy!

### Deploy to Vercel/Netlify
These work too! Just configure the Node.js environment and add your API key as an environment variable.

---

## Troubleshooting

### Server won't start
```bash
# Make sure dependencies are installed
npm install

# Check Node version (need 14+)
node --version

# Check port 3000 is available
# Or change port in .env: PORT=8080
```

### API key errors
```bash
# Check .env file exists and has correct format
cat .env

# Make sure to restart server after adding .env
npm start

# Or enter key in UI when prompted
```

### Companies not saving
```bash
# Check companies/ directory exists and is writable
ls -la companies/

# Create if missing
mkdir companies
```

### Brand data not loading
```bash
# Check config/brand-data.json exists
cat config/brand-data.json

# Should be valid JSON
# Use "Brand Settings" in UI to edit safely
```

---

## Command Line Still Works!

The original CLI tool still works alongside the web app:

```bash
# Generate prompt via CLI
node scripts/generate-pitch.js companies/lodge-cast-iron.json

# Run test
npm test
```

---

## Support

**Found a bug?** Open an issue or reach out to Jared.

**Feature request?** Let us know what would make this better!

**Questions?** Check the main README.md for more details on the email strategy and best practices.

---

## What's Next?

1. **Fill your brand data** (⚙️ Brand Settings)
2. **Create your first pitch** (takes 3 minutes)
3. **Save high-priority companies** (build your pipeline)
4. **Generate 5-10 pitches** (pre-premiere push)
5. **Track what works** (iterate on successful patterns)

The January 29 premiere window is your moment. Let's make it count!

🚀 Happy pitching!
