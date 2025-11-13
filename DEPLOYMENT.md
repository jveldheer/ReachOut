# Deployment Guide - ReachOut Web App

Deploy your ReachOut email generator to the web so you (and your team) can access it from anywhere!

## 🚀 Quick Deploy Options

All of these services integrate with GitHub and offer **free tiers**:

1. **[Vercel](#option-1-vercel-recommended)** - Easiest, fastest (1-click deploy)
2. **[Railway](#option-2-railway)** - Simple, great developer experience
3. **[Render](#option-3-render)** - Free tier, reliable

---

## Option 1: Vercel (Recommended) ⚡

**Pros:** Fastest deployment, automatic HTTPS, excellent free tier
**Free Tier:** Unlimited personal projects

### Step-by-Step:

1. **Push to GitHub**
   ```bash
   # Make sure your code is pushed
   git push origin claude/jared-brand-partnership-prompt-011CV4iVZExiw5qkC7Zefnt7
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub account
   - Select the `ReachOut` repository
   - Select the branch: `claude/jared-brand-partnership-prompt-011CV4iVZExiw5qkC7Zefnt7`
   - Vercel auto-detects the Node.js app
   - Click "Deploy"

3. **Add Environment Variable**
   - In Vercel dashboard → Settings → Environment Variables
   - Add: `ANTHROPIC_API_KEY` = `sk-ant-your-key-here`
   - Redeploy

4. **Done!**
   - Your app is live at: `https://reachout-[random].vercel.app`
   - Share this URL with your team

### Custom Domain (Optional)
- In Vercel dashboard → Settings → Domains
- Add: `reachout.yourdomain.com`
- Follow DNS instructions

---

## Option 2: Railway 🚂

**Pros:** Simple, generous free tier, great for Node.js
**Free Tier:** $5 credit/month (enough for this app)

### Step-by-Step:

1. **Push to GitHub**
   ```bash
   git push origin claude/jared-brand-partnership-prompt-011CV4iVZExiw5qkC7Zefnt7
   ```

2. **Deploy to Railway**
   - Go to [railway.app](https://railway.app)
   - Click "Start a New Project"
   - Select "Deploy from GitHub repo"
   - Choose `ReachOut` repository
   - Select branch: `claude/jared-brand-partnership-prompt-011CV4iVZExiw5qkC7Zefnt7`
   - Railway auto-detects Node.js

3. **Add Environment Variable**
   - Click on your project → Variables tab
   - Add: `ANTHROPIC_API_KEY` = `sk-ant-your-key-here`
   - Railway auto-redeploys

4. **Generate Domain**
   - Settings tab → Generate Domain
   - Get URL like: `reachout-production.up.railway.app`

5. **Done!**
   - App is live and accessible

---

## Option 3: Render 🎨

**Pros:** Free tier stays free, easy to use
**Free Tier:** 750 hours/month (more than enough)

### Step-by-Step:

1. **Push to GitHub**
   ```bash
   git push origin claude/jared-brand-partnership-prompt-011CV4iVZExiw5qkC7Zefnt7
   ```

2. **Deploy to Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select `ReachOut` repository
   - Select branch: `claude/jared-brand-partnership-prompt-011CV4iVZExiw5qkC7Zefnt7`

3. **Configure Service**
   - Name: `reachout`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: `Free`

4. **Add Environment Variable**
   - In "Environment" section
   - Add: `ANTHROPIC_API_KEY` = `sk-ant-your-key-here`

5. **Click "Create Web Service"**
   - Render builds and deploys (takes 2-3 min)
   - Get URL like: `reachout.onrender.com`

6. **Done!**

**Note:** Free tier spins down after 15 min of inactivity. First request after may take 30-60 seconds.

---

## Recommended: Vercel or Railway

Both are excellent for this app. Choose based on:

**Vercel if:**
- You want fastest deployment (1-click)
- You might add a custom domain
- You want best performance

**Railway if:**
- You prefer simpler configuration
- You want a persistent app (no cold starts)
- You like their dashboard UI

---

## After Deployment

### 1. Test Your App
Visit your deployed URL:
- Should see the ReachOut interface
- Click "Brand Settings" and update your data
- Generate a test pitch

### 2. Set Your API Key
Either:
- **Option A:** Add `ANTHROPIC_API_KEY` in platform dashboard (recommended)
- **Option B:** Users enter API key in UI each time

### 3. Share with Your Team
Send the URL to anyone who needs to generate pitches:
```
Your ReachOut App: https://reachout-[your-url].com

Quick Start:
1. Open the link
2. Fill out company form
3. Click "Generate Pitch"
4. Copy and send!
```

### 4. Update Brand Settings
- Have someone click "Brand Settings"
- Fill in all your actual data (audience, links, social proof)
- Click "Save"
- This persists on the server for all users

---

## Keeping It Updated

### Auto-Deploy (All platforms support this)

When you push to GitHub, your app auto-updates:

```bash
# Make changes locally
# Edit files...

# Commit and push
git add .
git commit -m "Update brand data"
git push

# Your hosting platform automatically redeploys!
# Takes 30-60 seconds
```

### Manual Deploy

If auto-deploy isn't enabled:
- **Vercel:** Dashboard → Deployments → Redeploy
- **Railway:** Dashboard → Deploy → Trigger Deploy
- **Render:** Dashboard → Manual Deploy → Deploy Latest Commit

---

## Troubleshooting

### App Won't Start

**Check logs:**
- **Vercel:** Dashboard → Deployments → [Click deployment] → Logs
- **Railway:** Dashboard → Logs tab
- **Render:** Dashboard → Logs

**Common issues:**
```bash
# Missing dependencies?
# Make sure package.json has all deps listed

# Port issues?
# All platforms set PORT env var automatically
# server.js already handles this: process.env.PORT || 3000

# API key missing?
# Add ANTHROPIC_API_KEY in dashboard
```

### Brand Settings Not Saving

**Issue:** File system may be read-only on some platforms

**Solution:** Settings are saved in deployed filesystem. On Render free tier, these reset on redeploy. Either:
1. Upgrade to paid tier (persistent disk)
2. Keep brand data in environment variables
3. Use Vercel or Railway (both persist files better on free tier)

### Companies Not Saving

Same as brand settings. For production use:
1. Upgrade to persistent storage tier
2. Or add a database (see "Advanced" below)

---

## Advanced: Add a Database (Optional)

For production with multiple users, consider adding a database:

### Option A: Railway + PostgreSQL
```bash
# In Railway dashboard:
# 1. Add "PostgreSQL" service
# 2. Connect to your app (auto-generates DATABASE_URL)
# 3. Update server.js to use PostgreSQL instead of JSON files
```

### Option B: Vercel + Vercel Postgres
```bash
# In Vercel dashboard:
# 1. Storage → Create Database → Postgres
# 2. Connect to project
# 3. Update server.js to use provided connection string
```

### Option C: Any Platform + Supabase (Free)
```bash
# 1. Create free Supabase account (supabase.com)
# 2. Create project, get connection string
# 3. Add DATABASE_URL env var to your hosting platform
# 4. Update server.js to use PostgreSQL
```

**Note:** Current file-based storage works fine for single-user or small team use!

---

## Security Notes

### Protect Your API Key
- ✅ Store in environment variables (not in code)
- ✅ Never commit `.env` file
- ✅ Rotate key periodically

### Limit Access
If you want password protection:

**Option 1: Use Hosting Platform Auth**
- Vercel: Pro plan has password protection
- Railway: Use environment variable to set a simple password in code
- Render: No built-in auth on free tier

**Option 2: Add Simple Auth to App**
```javascript
// Add to server.js
app.use((req, res, next) => {
  const auth = process.env.APP_PASSWORD;
  if (!auth) return next();

  const provided = req.headers['x-password'];
  if (provided === auth) return next();

  res.status(401).json({ error: 'Unauthorized' });
});
```

Then add `APP_PASSWORD` env var.

**Option 3: Keep URL Private**
If you just share the URL with trusted people, that's often enough.

---

## Cost Estimates

### Free Forever (for this app)
- **Vercel:** ✅ Free tier sufficient
- **Railway:** ✅ $5/month credit (plenty for this)
- **Render:** ✅ Free tier sufficient (750 hours)

### If You Need More
- **Vercel Pro:** $20/month (custom domain, more bandwidth)
- **Railway Hobby:** $5-10/month (more resources)
- **Render Starter:** $7/month (persistent storage, faster)

For a single-user or small team app generating 50-100 pitches/month, **free tier is totally fine**.

### Claude API Costs
- ~$0.10-0.30 per email generation
- If generating 50 emails/month: ~$5-15/month
- Much cheaper than manually writing each pitch!

---

## Recommended Setup

For Jared's use case:

1. **Deploy on Vercel** (fastest, easiest)
2. **Add ANTHROPIC_API_KEY** env var
3. **Fill brand settings** via UI after deploy
4. **Share URL** with anyone who needs to generate pitches
5. **Auto-deploy** on push (enabled by default)

**Total time:** 10 minutes
**Total cost:** $0/month (hosting) + Claude API usage

---

## Questions?

**Where's my code?**
- It's on your GitHub branch: `claude/jared-brand-partnership-prompt-011CV4iVZExiw5qkC7Zefnt7`
- Push this to `main` or create a PR if you want

**Can I use a custom domain?**
- Yes! All platforms support this (some require paid tier)
- Add DNS records as instructed by platform

**Can multiple people use it at once?**
- Yes! The app supports concurrent users
- Each person can save their own companies
- Brand settings are shared across all users

**What if I make changes?**
- Push to GitHub → auto-deploys
- Or manually trigger deploy in dashboard

**Can I switch platforms later?**
- Yes! All your code is the same
- Just deploy to a different platform
- Copy over your environment variables

---

## Next Steps

1. **Choose a platform** (I recommend Vercel)
2. **Follow the step-by-step** above
3. **Test your deployed app**
4. **Share the URL** with your team
5. **Start generating pitches!**

The January 29 premiere is coming. Let's get this deployed and start reaching out! 🚀
