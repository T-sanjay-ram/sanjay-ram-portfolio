# 🎬 EXACT STEP-BY-STEP (Like a Video Script)

**Follow this EXACTLY. Word for word. Command for command.**

---

# VIDEO 1: SETUP (5 MINUTES)

## Scene 1: Install Node.js

**ACTION:**
1. Open browser
2. Go to: https://nodejs.org
3. See two big buttons: "LTS" and "Current"
4. Click the one that says "LTS" (it's highlighted)
5. Wait for download
6. Open downloaded file
7. Click "Next" multiple times
8. Click "Finish"
9. **Restart your computer**

**VERIFY:**
1. Open Terminal (Mac/Linux) or Command Prompt (Windows)
2. Type: `node --version`
3. Hit Enter
4. You should see something like: `v18.17.0`
5. Type: `npm --version`
6. Hit Enter
7. You should see: `v9.6.7` (or similar)

✅ **Node.js installed!**

---

## Scene 2: Download & Extract

**ACTION:**
1. You received a file called `portfolio-final.zip` (or folder)
2. If it's zipped, extract it
3. You now have a folder called `portfolio-final`
4. Remember where you saved it

✅ **Project ready!**

---

## Scene 3: Open Terminal

**ON WINDOWS:**
1. Press Windows key + R
2. Type: `cmd`
3. Press Enter
4. You see Command Prompt open

**ON MAC:**
1. Press Cmd + Space
2. Type: `terminal`
3. Press Enter
4. Terminal opens

**ON LINUX:**
1. Press Ctrl + Alt + T
2. Terminal opens

---

## Scene 4: Navigate to Project

**TYPE THIS:**
```bash
cd /path/to/portfolio-final
```

**EXAMPLE FOR WINDOWS:**
```bash
cd C:\Users\YourName\Desktop\portfolio-final
```

**EXAMPLE FOR MAC:**
```bash
cd /Users/YourName/Desktop/portfolio-final
```

**EXAMPLE FOR LINUX:**
```bash
cd ~/Desktop/portfolio-final
```

Press Enter.

---

## Scene 5: Install Dependencies

**TYPE THIS:**
```bash
npm install
```

Press Enter.

**WHAT HAPPENS:**
- You'll see lots of text
- It takes 2-3 minutes
- DO NOT STOP IT
- Wait until you see the prompt again

✅ **Dependencies installed!**

---

# VIDEO 2: ADD PHOTO (5 MINUTES)

## Scene 1: Prepare Photo

**ACTION:**
1. Find a photo on your computer
2. Make sure it's: JPG or PNG
3. At least 400×500 pixels
4. Clear headshot (like LinkedIn)
5. Remember the filename (e.g., `sanjay.jpg`)

---

## Scene 2: Copy Photo to Project

**ACTION:**
1. In File Explorer, go to your `portfolio-final` folder
2. Open the `public` folder
3. Copy your photo file here
4. Your photo is now at: `public/sanjay.jpg`

---

## Scene 3: Edit Code

**ACTION:**
1. Open `src/Portfolio.jsx` in a text editor
   - **Windows:** Right-click → Open with → Notepad
   - **Mac:** Double-click → Open with → TextEdit
   - **Better:** Download VS Code (https://code.visualstudio.com)

**FIND LINE ~260:**

Scroll down or use Ctrl+F to find: `your-photo.jpg`

**YOU'LL SEE:**
```javascript
<img
  src="/your-photo.jpg"
  alt="Profile"
```

**CHANGE IT TO:**
```javascript
<img
  src="/sanjay.jpg"
  alt="Profile"
```

**IF YOUR PHOTO IS:**
- `me.jpg` → change to `/me.jpg`
- `profile.png` → change to `/profile.png`
- `john.jpg` → change to `/john.jpg`

**SAVE FILE:**
- Windows/Linux: Ctrl+S
- Mac: Cmd+S

✅ **Photo added!**

---

# VIDEO 3: CUSTOMIZE (10 MINUTES)

**KEEP `src/Portfolio.jsx` OPEN**

## Scene 1: Change Your Name

**FIND:** Around line 455

Look for:
```javascript
Hi, It's <span className="text-green-400">Sanjay Ram</span>
```

**CHANGE TO:**
```javascript
Hi, It's <span className="text-green-400">JOHN SMITH</span>
```

Replace `JOHN SMITH` with YOUR NAME.

**SAVE.**

---

## Scene 2: Change Your Bio

**FIND:** Around line 475

Look for:
```javascript
Lorem ipsum dolor sit, amet consectetur adipiscing elit. Minus labore dolores esse...
```

**CHANGE TO:**
```javascript
I'm a passionate full-stack developer with 3 years of experience. Love building amazing web apps...
```

Write YOUR OWN bio.

**SAVE.**

---

## Scene 3: Update Social Links

**FIND:** Around line 490

You'll see:
```javascript
{
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sanjay@example.com', label: 'Email' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
}
```

**CHANGE EACH ONE:**

```javascript
{
  { icon: Github, href: 'https://github.com/john123', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/john-smith', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:john@gmail.com', label: 'Email' },
  { icon: Twitter, href: 'https://twitter.com/johnsmith', label: 'Twitter' },
}
```

Replace:
- `john123` with YOUR GitHub username
- `john-smith` with YOUR LinkedIn profile
- `john@gmail.com` with YOUR email
- `johnsmith` with YOUR Twitter handle

**SAVE.**

---

## Scene 4: Update About Section

**FIND:** Around line 565-580

Replace all 3 paragraphs with YOUR actual bio.

**SAVE.**

---

## Scene 5: Update Projects

**FIND:** Around line 600

You'll see:
```javascript
const projects = [
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses.',
    tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  // ... more projects
];
```

**FOR EACH OF THE 6 PROJECTS:**

```javascript
{
  title: 'YOUR PROJECT NAME',
  description: 'What your project does',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  github: 'https://github.com/YOUR_USERNAME/your-repo-name',
  demo: 'https://your-project-link.com',
},
```

**EXAMPLE:**
```javascript
{
  title: 'E-Commerce Store',
  description: 'Online store with payment integration and admin panel.',
  tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
  github: 'https://github.com/john123/ecommerce-store',
  demo: 'https://my-store.vercel.app',
},
```

**UPDATE ALL 6 PROJECTS.**

**SAVE.**

---

## Scene 6: Update Skills

**FIND:** Around line 720

You'll see:
```javascript
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'SQL'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'HTML/CSS', 'REST APIs'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
];
```

**CHANGE THE SKILLS TO YOUR SKILLS:**

```javascript
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'Java', 'Ruby', 'PHP', 'Go'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'Vue.js', 'Node.js', 'Django', 'Bootstrap', 'GraphQL'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Kubernetes', 'Azure', 'MySQL', 'Redis', 'Jenkins'],
  },
];
```

**SAVE.**

✅ **All customized!**

---

# VIDEO 4: TEST (5 MINUTES)

## Scene 1: Start Server

**IN TERMINAL, TYPE:**
```bash
npm start
```

**PRESS ENTER**

**WHAT HAPPENS:**
- Terminal shows some messages
- Your browser opens automatically
- Goes to: http://localhost:3000
- Your portfolio appears! 🎉

---

## Scene 2: Check Everything

**VISUALLY INSPECT:**

- ✅ Photo shows in profile card?
- ✅ Your name displayed?
- ✅ Your bio shown?
- ✅ Social icons visible?
- ✅ About section correct?
- ✅ 6 projects showing?
- ✅ Skills showing?
- ✅ Progress bars SMALL (not long)?
- ✅ Animations smooth?

**SCROLL DOWN:**
- All sections visible?
- Contact form working?

---

## Scene 3: Test Mobile

**IN CHROME BROWSER:**

1. Press F12 (Developer Tools open)
2. Click mobile phone icon (top left)
3. Choose iPhone or Android
4. Make sure everything looks good on phone
5. Rotate to landscape
6. Still looks good?

---

## Scene 4: Stop Server

**IN TERMINAL:**

Press: `Ctrl + C`

The server stops.

✅ **Testing complete!**

---

# VIDEO 5: DEPLOY (10 MINUTES)

## Choose ONE deployment option:

---

# OPTION A: VERCEL (EASIEST)

## Scene 1: Create GitHub Account

**ACTION:**
1. Go to: https://github.com/signup
2. Enter email
3. Create password
4. Choose username (something like: john123)
5. Click "Create account"
6. Verify email

✅ **GitHub account created!**

---

## Scene 2: Create Repository

**ACTION:**
1. Go to: https://github.com/new
2. **Repository name:** `sanjay-ram-portfolio`
3. Click "Create repository"

✅ **Repository created!**

---

## Scene 3: Push Code to GitHub

**IN TERMINAL, TYPE EACH LINE (one at a time):**

```bash
git init
```

Press Enter.

```bash
git add .
```

Press Enter.

```bash
git commit -m "Initial portfolio"
```

Press Enter.

```bash
git branch -M main
```

Press Enter.

**IMPORTANT:** Replace `YOUR_USERNAME` with your GitHub username!

```bash
git remote add origin https://github.com/YOUR_USERNAME/sanjay-ram-portfolio.git
```

Press Enter.

```bash
git push -u origin main
```

Press Enter.

It may ask for password - enter your GitHub password.

✅ **Code on GitHub!**

---

## Scene 4: Deploy on Vercel

**ACTION:**
1. Go to: https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel
4. Click "New Project"
5. Find and click `sanjay-ram-portfolio` repo
6. Click "Import"
7. Vercel auto-detects React ✅
8. Click "Deploy"
9. Wait 2 minutes...
10. See "Congratulations! Deployed!" ✅

**YOUR SITE IS LIVE!** 🎉

**URL:** https://sanjay-ram-portfolio.vercel.app

---

# OPTION B: GITHUB PAGES

## Scene 1: Update package.json

**ACTION:**
1. Open `package.json` in editor
2. Find line: `"name": "sanjay-ram-portfolio",`
3. After that line, add:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/sanjay-ram-portfolio",
   ```
4. Replace `YOUR_USERNAME` with your GitHub username
5. **SAVE**

---

## Scene 2: Install gh-pages

**IN TERMINAL, TYPE:**
```bash
npm install --save-dev gh-pages
```

Press Enter.

Wait for installation...

---

## Scene 3: Add Deploy Scripts

**ACTION:**
1. Open `package.json`
2. Find `"scripts"` section
3. Add these two lines:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
   ```
4. Full section should look like:
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
5. **SAVE**

---

## Scene 4: Push to GitHub

**IN TERMINAL, TYPE:**

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sanjay-ram-portfolio.git
git push -u origin main
```

---

## Scene 5: Deploy

**IN TERMINAL, TYPE:**
```bash
npm run deploy
```

Press Enter.

Wait for completion...

---

## Scene 6: Enable GitHub Pages

**ACTION:**
1. Go to your GitHub repo
2. Click "Settings"
3. Scroll down to "Pages"
4. You should see `gh-pages` branch selected
5. Click "Save"
6. Wait 5 minutes

**YOUR SITE IS LIVE!** 🎉

**URL:** https://YOUR_USERNAME.github.io/sanjay-ram-portfolio

---

# OPTION C: NETLIFY

## Scene 1: Build Project

**IN TERMINAL, TYPE:**
```bash
npm run build
```

Press Enter.

Wait for build to complete...

---

## Scene 2: Create Netlify Account

**ACTION:**
1. Go to: https://app.netlify.com
2. Click "Sign up"
3. Click "Continue with GitHub"
4. Authorize

✅ **Account created!**

---

## Scene 3: Deploy

**ACTION:**
1. Click "Add new site"
2. Click "Deploy manually"
3. Find the `build` folder on your computer
4. Drag & drop it into Netlify
5. Wait 2 minutes...

**YOUR SITE IS LIVE!** 🎉

**URL:** Will be shown on screen (like: https://random-name.netlify.app)

---

# VIDEO 6: AFTER DEPLOYMENT

## Update Your Portfolio

**WHENEVER YOU MAKE CHANGES:**

**IN TERMINAL, TYPE:**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy  # Only for GitHub Pages
```

**FOR VERCEL/NETLIFY:**
- Automatically deploys after `git push`
- Takes 1-2 minutes

**FOR GITHUB PAGES:**
- Use `npm run deploy` after push
- Takes ~5 minutes

---

# 🎉 YOU'RE DONE!

**Your portfolio is LIVE!** 🚀

**Share the URL with:**
- Friends
- Family
- On your resume
- On LinkedIn
- Everywhere! 

---

# 📋 QUICK COMMAND REFERENCE

```bash
# Setup
npm install
npm start

# Build
npm run build

# Deploy (GitHub Pages)
npm run deploy

# Vercel
npm install -g vercel && vercel

# Stop server
Ctrl + C
```

---

**Congratulations!** 🎊

You now have a professional developer portfolio live on the internet!

**Good luck with your career!** 🌟
