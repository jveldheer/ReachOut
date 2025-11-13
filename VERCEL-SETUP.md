# Vercel Deployment - Step-by-Step Guide

## Complete Walkthrough with Environment Variables

### Step 1: Get Your Anthropic API Key First

Before deploying, get your API key ready:

1. **Go to Anthropic Console**
   - Visit: https://console.anthropic.com/settings/keys
   - Sign in with your Anthropic account (or create one)

2. **Create API Key**
   - Click "Create Key" button
   - Give it a name (e.g., "ReachOut Production")
   - Click "Create"

3. **Copy Your Key**
   - It starts with `sk-ant-`
   - Example: `sk-ant-api03-abc123...`
   - **COPY IT NOW** - you won't see it again!
   - Paste it somewhere safe temporarily (like a notes app)

**Don't have an Anthropic account yet?**
- Go to https://console.anthropic.com
- Sign up (free)
- Add payment method (required for API access)
- API costs ~$0.10-0.30 per email generation

---

### Step 2: Start Vercel Deployment

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Authorize Vercel**
   - Vercel will ask to access your GitHub
   - Click "Authorize Vercel"
   - This lets Vercel read your repos

3. **Import Your Project**
   - Click "Add New..." → "Project"
   - You'll see a list of your GitHub repos
   - Find "ReachOut" in the list
   - Click "Import" next to it

**Don't see ReachOut in the list?**
- Click "Adjust GitHub App Permissions"
- Make sure Vercel has access to the repo
- Or click "Import Third-Party Git Repository" and paste: `https://github.com/jveldheer/ReachOut`

---

### Step 3: Configure Project Settings

After clicking Import, you'll see the configuration screen:

#### Framework Preset
- Vercel should auto-detect "Other"
- This is correct - don't change it

#### Root Directory
- Leave as `./` (default)
- Don't change this

#### Build and Output Settings
- Vercel auto-detects from `package.json`
- **Build Command:** Should show `npm run build` or leave empty
- **Output Directory:** Leave empty
- **Install Command:** Should be `npm install`

**Don't worry if these are different - Vercel is smart and will figure it out!**

#### Git Branch
- **Important:** Change this to your branch name
- Click the branch dropdown
- Select: `claude/jared-brand-partnership-prompt-011CV4iVZExiw5qkC7Zefnt7`
- Or if you merged to main, select `main`

---

### Step 4: Add Environment Variables

**This is the important part!**

On the same configuration screen, scroll down to find **"Environment Variables"**

#### Add Your API Key:

1. **Click "Add" or the input field**

2. **Enter the variable name:**
   ```
   ANTHROPIC_API_KEY
   ```
   (Type exactly as shown, case-sensitive)

3. **Enter the value:**
   - Paste your API key from Step 1
   - Should start with `sk-ant-`
   - Example: `sk-ant-api03-abc123def456...`

4. **Select environments:**
   - Check all three boxes:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
   - This makes the key available in all environments

5. **Click "Add"** (if there's a separate Add button)

**Screenshot of what you should see:**
```
┌─────────────────────────────────────────────────┐
│ Environment Variables                            │
├─────────────────────────────────────────────────┤
│ NAME                    VALUE                    │
│ ANTHROPIC_API_KEY       sk-ant-api03-abc...     │
│                                                  │
│ ✅ Production  ✅ Preview  ✅ Development        │
│                                                  │
│ [Add Another]                                    │
└─────────────────────────────────────────────────┘
```

**Optional: Add More Variables**

You can also add these (optional):

- `NODE_ENV` = `production`
- `PORT` = `3000` (Vercel sets this automatically, so not needed)

---

### Step 5: Deploy!

1. **Review Everything:**
   - Project name: `reachout` (or customize it)
   - Framework: Other (or auto-detected)
   - Branch: `claude/jared-brand-partnership-prompt-011CV4iVZExiw5qkC7Zefnt7`
   - Environment Variables: `ANTHROPIC_API_KEY` is set ✅

2. **Click "Deploy"**
   - Big blue button at the bottom
   - Vercel starts building your app

3. **Wait for Build** (1-2 minutes)
   - You'll see a progress screen with logs
   - Shows: Installing dependencies → Building → Deploying
   - Don't close the tab!

4. **Success!**
   - When done, you'll see confetti 🎉
   - And your live URL

---

### Step 6: Get Your Live URL

After successful deployment:

1. **Your URL is shown:**
   - Format: `https://reachout-abc123.vercel.app`
   - Or custom: `https://your-project-name.vercel.app`

2. **Click "Visit" or copy the URL**

3. **Test Your App:**
   - Click the URL
   - Should see the ReachOut interface
   - If you see it, **you're deployed!** 🎉

---

### Step 7: Configure Your Brand Settings

Now that it's deployed, set up your brand data:

1. **Click "⚙️ Brand Settings"** (top right)

2. **Fill in your data:**
   ```json
   {
     "audience": {
       "instagram": "28000",
       "tiktok": "15000",
       "youtube": "8500",
       "emailList": "3500",
       "emailOpenRate": "42"
     },
     "links": {
       "calendar": "https://calendly.com/yourlink",
       "mediaKit": "https://yoursite.com/media-kit"
     }
   }
   ```

3. **Click "💾 Save Brand Data"**

4. **Done!** Your brand settings are saved on the server.

---

### Step 8: Test Email Generation

1. **Fill out the company form:**
   - Company Name: Test Company
   - Fill in the required fields
   - Click "🚀 Generate Pitch"

2. **Try the API generation:**
   - Click "Generate with API" tab
   - Since you set `ANTHROPIC_API_KEY`, you can leave the field empty
   - Click "✨ Generate with API"
   - Should see your email generated!

3. **If it works:** Everything is set up correctly! 🎉

4. **If it fails:** See troubleshooting below

---

## Troubleshooting

### "API Key Error" or "401 Unauthorized"

**Problem:** API key isn't working

**Solutions:**

1. **Check the key is correct:**
   - Go to Vercel dashboard
   - Click your project → Settings → Environment Variables
   - Click "Edit" on `ANTHROPIC_API_KEY`
   - Verify it starts with `sk-ant-`
   - If wrong, update it

2. **Verify the key works:**
   - Test at https://console.anthropic.com/workbench
   - Try making a simple API call
   - If it doesn't work there, generate a new key

3. **Redeploy after changing env vars:**
   - Vercel dashboard → Deployments
   - Click "..." → "Redeploy"
   - Wait for new deployment

### "Environment Variable Not Found"

**Problem:** Vercel can't find `ANTHROPIC_API_KEY`

**Solutions:**

1. **Add it in Vercel dashboard:**
   - Project → Settings → Environment Variables
   - Click "Add"
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your key
   - Select all environments
   - Save

2. **Trigger a redeploy:**
   - Go to Deployments tab
   - Click "Redeploy" on latest deployment

### "Build Failed" or "Deployment Failed"

**Problem:** Code won't build

**Solutions:**

1. **Check the build logs:**
   - Click on the failed deployment
   - Read the error message
   - Usually it's a missing dependency

2. **Common fixes:**
   ```bash
   # If "module not found", make sure package.json has all dependencies
   # Check that these are listed:
   "dependencies": {
     "express": "^4.18.2",
     "@anthropic-ai/sdk": "^0.20.0"
   }
   ```

3. **Verify branch is correct:**
   - Settings → Git
   - Production Branch: `claude/jared-brand-partnership-prompt-011CV4iVZExiw5qkC7Zefnt7`

### "Page Not Found" or "404"

**Problem:** Can't access the app

**Solutions:**

1. **Check the URL:**
   - Should be `https://your-project.vercel.app`
   - Not `https://your-project.vercel.app/index.html`

2. **Verify deployment succeeded:**
   - Vercel dashboard → Deployments
   - Latest should show ✅ Ready

3. **Check vercel.json routing:**
   - Should already be correct in your repo

---

## Adding Environment Variables AFTER Deployment

If you forgot to add the API key during initial setup:

### Method 1: Vercel Dashboard

1. **Go to your project in Vercel**
   - https://vercel.com/dashboard
   - Click your "reachout" project

2. **Settings → Environment Variables**

3. **Add New:**
   - Click "Add" button
   - Name: `ANTHROPIC_API_KEY`
   - Value: (paste your key)
   - Environments: Check all three boxes
   - Click "Save"

4. **Redeploy:**
   - Go to "Deployments" tab
   - Find latest deployment
   - Click "..." menu → "Redeploy"
   - Wait ~1 minute

5. **Test again:**
   - Visit your site
   - Try generating an email

### Method 2: Vercel CLI (Advanced)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Add environment variable
vercel env add ANTHROPIC_API_KEY

# Paste your key when prompted
# Select: Production, Preview, Development

# Redeploy
vercel --prod
```

---

## Alternative: Use API Key in UI

If you don't want to set up environment variables:

1. **Skip the env var setup in Vercel**
2. **Deploy without it**
3. **When generating emails:**
   - Users enter their API key in the UI
   - It's temporary (not saved)
   - Works, but less convenient

**Recommended for:** Testing only
**Not recommended for:** Production use (team members need to know the key)

---

## Custom Domain (Optional)

Want `reachout.yourdomain.com` instead of `reachout.vercel.app`?

1. **Vercel Dashboard → Your Project → Settings → Domains**

2. **Add Domain:**
   - Enter: `reachout.yourdomain.com`
   - Click "Add"

3. **Configure DNS:**
   - Vercel gives you DNS records
   - Add CNAME record in your domain provider:
     ```
     Name: reachout
     Type: CNAME
     Value: cname.vercel-dns.com
     ```

4. **Wait for verification** (5-60 minutes)

5. **Done!** Your app is at your custom domain with auto-SSL

---

## Next Steps After Deployment

✅ App is deployed
✅ API key is set
✅ Brand settings configured
✅ Tested email generation

**Now:**

1. **Bookmark your URL**
2. **Share with your team**
3. **Start generating pitches!**
4. **Track which emails work best**
5. **Iterate and scale**

---

## Summary: Environment Variables Checklist

- [ ] Got Anthropic API key from console.anthropic.com
- [ ] Copied key (starts with `sk-ant-`)
- [ ] Added to Vercel during setup OR after in Settings
- [ ] Selected all three environments (Production, Preview, Development)
- [ ] Clicked Save/Deploy
- [ ] Waited for deployment to complete
- [ ] Tested API generation in deployed app
- [ ] ✅ Working!

---

## Need More Help?

**Vercel Docs:**
- Environment Variables: https://vercel.com/docs/concepts/projects/environment-variables
- Deployments: https://vercel.com/docs/concepts/deployments/overview

**Anthropic Docs:**
- API Keys: https://docs.anthropic.com/claude/reference/getting-started
- Authentication: https://docs.anthropic.com/claude/reference/authentication

**ReachOut Docs:**
- [DEPLOYMENT.md](DEPLOYMENT.md) - Other deployment platforms
- [WEB-APP-README.md](WEB-APP-README.md) - App features and usage

---

## Quick Reference: Environment Variable

**Name (exact):**
```
ANTHROPIC_API_KEY
```

**Value format:**
```
sk-ant-api03-[long-string-of-characters]
```

**Where to set:**
- During initial deployment: Configuration screen
- After deployment: Settings → Environment Variables

**Environments:**
- ✅ Production
- ✅ Preview
- ✅ Development

That's it! Once this is set, your app can generate emails automatically. 🚀
