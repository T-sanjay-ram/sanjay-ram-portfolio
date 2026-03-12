# 📚 COMPLETE SETUP & DEPLOYMENT GUIDE

**Total Time: 45 minutes from download to live website**

---

# PART 1: INITIAL SETUP (5 Minutes)

## Step 1.1: Install Node.js

**If you don't have Node.js:**

1. Go to: https://nodejs.org
2. Click "LTS" (Long Term Support)
3. Download and install
4. Restart your computer

**Check if installed:**
```bash
node --version
npm --version
```

Both should show version numbers (like v18.0.0)

---

## Step 1.2: Download Your Project

1. Download the `portfolio-final` folder
2. Extract/Unzip it
3. Remember where you saved it

---

## Step 1.3: Open Terminal

**On Windows:**
- Open Command Prompt or PowerShell
- Type: `cd C:\path\to\portfolio-final`

**On Mac/Linux:**
- Open Terminal
- Type: `cd /path/to/portfolio-final`

---

## Step 1.4: Install Dependencies

Type this command:
```bash
npm install
```

Wait 2-3 minutes while it installs everything...

You'll see lots of text - this is normal! ✅

---

# PART 2: ADD YOUR PHOTO (5 Minutes)

## Step 2.1: Prepare Your Photo

Your photo should be:
- JPG or PNG format
- At least 400x500 pixels
- Clear headshot (like LinkedIn)
- Less than 1 MB

---

## Step 2.2: Add Photo to Project

1. Go to your project folder
2. Open the `public` folder
3. Copy your photo file into `public` folder

**Your photo should now be at:**
```
portfolio-final/public/your-photo.jpg
```

---

## Step 2.3: Update Code

1. Open `src/Portfolio.jsx` in a text editor (VS Code recommended)

2. Find line ~260 (search for "your-photo.jpg")

3. You'll see:
```javascript
<img
  src="/your-photo.jpg"  {/* CHANGE THIS */}
  alt="Profile"
```

4. Change `/your-photo.jpg` to your actual filename:

**Example 1: If your photo is `sanjay.jpg`**
```javascript
src="/sanjay.jpg"
```

**Example 2: If your photo is `profile-pic.png`**
```javascript
src="/profile-pic.png"
```

**Example 3: If your photo is `me.jpg`**
```javascript
src="/me.jpg"
```

5. Save the file (Ctrl+S or Cmd+S)

---

# PART 3: CUSTOMIZE YOUR CONTENT (10 Minutes)

## Step 3.1: Edit Your Name & Info

Open `src/Portfolio.jsx` and find these sections:

### Your Name (Line ~455)
**Find:**
```javascript
Hi, It's <span className="text-green-400">Sanjay Ram</span>
```

**Change to:**
```javascript
Hi, It's <span className="text-green-400">YOUR NAME</span>
```

### Your Role/Title (Line ~475)
**Find:**
```javascript
Lorem ipsum dolor sit, amet consectetur adipiscing elit...
```

**Change to:**
```javascript
Your actual bio text here. Talk about yourself, your skills, your passion...
```

### GitHub Link (Line ~490)
**Find:**
```javascript
{ icon: Github, href: 'https://github.com', label: 'GitHub' },
```

**Change to:**
```javascript
{ icon: Github, href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
```

### LinkedIn Link (Line ~493)
**Find:**
```javascript
{ icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
```

**Change to:**
```javascript
{ icon: Linkedin, href: 'https://linkedin.com/in/YOUR_PROFILE', label: 'LinkedIn' },
```

### Email Link (Line ~496)
**Find:**
```javascript
{ icon: Mail, href: 'mailto:sanjay@example.com', label: 'Email' },
```

**Change to:**
```javascript
{ icon: Mail, href: 'mailto:YOUR_EMAIL@example.com', label: 'Email' },
```

### Twitter Link (Line ~499)
**Find:**
```javascript
{ icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
```

**Change to:**
```javascript
{ icon: Twitter, href: 'https://twitter.com/YOUR_TWITTER', label: 'Twitter' },
```

---

## Step 3.2: Edit About Section (Line ~565-580)

**Find:**
```javascript
I'm a passionate Computer Science Engineering student...
I thrive on solving complex problems...
My mission is to create impactful digital experiences...
```

**Change to:** Your actual about text (3 paragraphs)

---

## Step 3.3: Edit Projects (Line ~600-670)

**Find the projects array:**
```javascript
const projects = [
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses.',
    tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
```

**Change EACH project:**
```javascript
{
  title: 'YOUR PROJECT NAME',
  description: 'What your project does',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  github: 'https://github.com/YOUR_USERNAME/YOUR_REPO',
  demo: 'https://your-project-url.com',
}
```

**You have 6 projects - update all of them!**

---

## Step 3.4: Edit Skills (Line ~720-760)

**Find:**
```javascript
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'SQL'],
  },
```

**Change to your skills:**
```javascript
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'Java', 'Your Skill', 'Another Skill'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Your Tech', 'Another Tech'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'Your Tool', 'More Tools'],
  },
];
```

---

# PART 4: TEST LOCALLY (5 Minutes)

## Step 4.1: Start Development Server

In terminal, type:
```bash
npm start
```

This automatically opens your browser at `http://localhost:3000`

---

## Step 4.2: Check Everything Works

- [ ] Your name displays correctly
- [ ] Your photo shows in profile card
- [ ] All social links are correct
- [ ] About section text is there
- [ ] Projects show your projects
- [ ] Skills show your skills
- [ ] Progress bars are small (not long)
- [ ] Navigation menu works (click About, Projects, etc.)
- [ ] Hamburger menu works on mobile (resize browser to test)
- [ ] Animations are smooth

---

## Step 4.3: Test on Mobile

**In Chrome browser:**
1. Press F12 (opens Developer Tools)
2. Click mobile icon (top left)
3. Choose iPhone or Android
4. Rotate to portrait/landscape
5. Make sure everything looks good!

---

## Step 4.4: Stop Server

Press `Ctrl + C` in terminal to stop

---

# PART 5: DEPLOY (Choose ONE Option)

## OPTION A: VERCEL (Easiest - Takes 10 Minutes)

### A.1: Create GitHub Account (if you don't have one)

1. Go to https://github.com/signup
2. Create free account
3. Verify email

### A.2: Create Repository on GitHub

1. Go to https://github.com/new
2. **Repository name:** `sanjay-ram-portfolio`
3. **Description:** `My Developer Portfolio`
4. Click "Create repository"

### A.3: Push Code to GitHub

In your terminal, run these commands one by one:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial portfolio commit"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/YOUR_USERNAME/sanjay-ram-portfolio.git
```

**Replace `YOUR_USERNAME` with your GitHub username!**

```bash
git push -u origin main
```

---

### A.4: Deploy on Vercel

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel
4. Click "New Project"
5. Select your `sanjay-ram-portfolio` repository
6. Click "Import"
7. Vercel auto-detects React ✅
8. Click "Deploy"
9. Wait 2 minutes...

**DONE! Your site is LIVE!** 🎉

You'll get a URL like: `https://sanjay-ram-portfolio.vercel.app`

---

## OPTION B: GITHUB PAGES (Takes 15 Minutes)

### B.1: Create Repository

1. Go to https://github.com/new
2. **Name:** `sanjay-ram-portfolio`
3. Click "Create repository"

### B.2: Update package.json

Open `package.json`, find the line:
```json
"name": "sanjay-ram-portfolio",
```

Add this line right after it:
```json
"homepage": "https://YOUR_USERNAME.github.io/sanjay-ram-portfolio",
```

**Replace `YOUR_USERNAME` with your GitHub username!**

Full example:
```json
{
  "name": "sanjay-ram-portfolio",
  "homepage": "https://john123.github.io/sanjay-ram-portfolio",
  "version": "1.0.0",
  ...
}
```

### B.3: Install gh-pages

In terminal, run:
```bash
npm install --save-dev gh-pages
```

### B.4: Add Deploy Scripts to package.json

Find the `"scripts"` section:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

Add these two lines:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

### B.5: Push to GitHub

In terminal, run:
```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial portfolio"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/YOUR_USERNAME/sanjay-ram-portfolio.git
```

```bash
git push -u origin main
```

### B.6: Deploy

```bash
npm run deploy
```

### B.7: Enable GitHub Pages

1. Go to your GitHub repo
2. Click "Settings"
3. Scroll down to "Pages"
4. Should already show `gh-pages` branch
5. Wait 5 minutes

**Your site is now LIVE at:**
`https://YOUR_USERNAME.github.io/sanjay-ram-portfolio`

---

## OPTION C: NETLIFY (Takes 10 Minutes)

### C.1: Build Project

```bash
npm run build
```

Creates a `build` folder

### C.2: Create Netlify Account

1. Go to https://app.netlify.com
2. Sign up (click "Sign up with GitHub")

### C.3: Deploy

1. Click "Add new site"
2. Click "Deploy manually"
3. **Drag & drop the `build` folder**
4. Wait 2 minutes...

**DONE!** Your site is live! 🎉

URL will be like: `https://random-name.netlify.app`

---

# PART 6: AFTER DEPLOYMENT

## Update Your Portfolio

### For Vercel/Netlify:

```bash
# Make changes to code
git add .
git commit -m "Update portfolio"
git push origin main
```

Auto-deploys in 1-2 minutes!

### For GitHub Pages:

```bash
# Make changes
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

Live in ~5 minutes!

---

# PART 7: CUSTOM DOMAIN (Optional)

### Buy Domain

- Namecheap.com
- GoDaddy.com
- Google Domains
- AWS Route53

### Connect to Vercel

1. Vercel Dashboard → Your Project → Settings
2. Click "Domains"
3. Add your domain
4. Follow DNS instructions

### Connect to GitHub Pages

1. Repo → Settings → Pages
2. Custom domain
3. Add domain
4. Follow DNS instructions

---

# TROUBLESHOOTING

## "npm: command not found"
→ Install Node.js: https://nodejs.org

## "Port 3000 already in use"
```bash
npm start -- --port 3001
```

## Photo doesn't show
1. Check photo is in `public/` folder
2. Check filename in code is correct
3. Check path starts with `/`
4. Clear cache: Ctrl+Shift+R
5. Restart: npm start

## Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

## Git errors
Make sure you have Git installed:
https://git-scm.com/downloads

---

# FINAL CHECKLIST

Before sharing your portfolio:

- [ ] npm install (done?)
- [ ] npm start (works?)
- [ ] Photo added and showing
- [ ] Name updated
- [ ] All social links correct
- [ ] About section updated
- [ ] Projects updated (all 6)
- [ ] Skills updated
- [ ] Tested on mobile
- [ ] No console errors (F12)
- [ ] Deployed to Vercel/GitHub/Netlify
- [ ] Website is LIVE
- [ ] Shared with friends! 🎉

---

# YOU'RE DONE! 🚀

Your portfolio is now:
✅ Complete
✅ Customized
✅ Tested
✅ Deployed
✅ LIVE ON THE INTERNET

Congratulations! 🎉

---

# QUICK REFERENCE

**Installation:**
```bash
npm install
npm start
```

**Deployment:**
```bash
# Vercel
npm install -g vercel && vercel

# GitHub Pages
npm install --save-dev gh-pages
# Add scripts to package.json
npm run deploy

# Netlify
npm run build
# Upload build/ folder
```

**Photo Setup:**
1. Copy photo to `public/` folder
2. Update src in `src/Portfolio.jsx` line 260
3. Done!

---

**Need help? Check the documentation files included in your project!**

Good luck! 🌟
