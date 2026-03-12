# 🎯 QUICK REFERENCE GUIDE

## ✨ KEY FEATURES

### ✅ Profile Photo Upload
- **Location:** Profile card (top left)
- **Icon:** Camera button (bottom right of card)
- **How it works:** Click button → Select photo → Photo saves automatically
- **Saves in:** Browser storage (localStorage)

### ✅ Smaller Progress Bars
- **Size:** h-1 (much smaller and cleaner!)
- **Shows:** 85% text value
- **Animation:** Animates on scroll (0→85%)
- **Location:** Skills & Expertise section

### ✅ Responsive Design
- **Mobile:** Hamburger menu, optimized spacing
- **Tablet:** 2-column layouts
- **Desktop:** Full 3-column layouts
- **Text:** Scales automatically: text-4xl → 5xl → 6xl → 7xl

### ✅ Smooth Animations
- **Scroll animations:** Fade, slide, scale
- **Hover effects:** Icons rotate, cards lift
- **Typing animation:** Hero section
- **Tech carousel:** Infinite smooth scroll

---

## 📁 FILE LOCATIONS - WHAT TO EDIT

### Main Content File
```
src/Portfolio.jsx  ← EDIT THIS FILE!
```

**What to edit:**
```javascript
// Line 455: Your name
Hi, It's <span className="text-green-400">YOUR NAME</span>

// Line 475: Your bio
Lorem ipsum... → Your bio

// Line 490: Social links
href: 'https://github.com/YOUR_USERNAME'

// Line 560-580: About section
Replace lorem with your text

// Line 600-670: Projects array
Edit titles, descriptions, links

// Line 720-760: Skills categories
Edit skill names and categories
```

### Config Files (Don't usually edit)
```
package.json          ← Dependencies
tailwind.config.js    ← Colors & fonts
.gitignore            ← Git rules
public/index.html     ← Page title
```

---

## 🚀 QUICK COMMANDS

```bash
# Install dependencies
npm install

# Start development (opens browser automatically)
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 🎨 CUSTOMIZATION QUICK TIPS

### Change Neon Green Color
Edit `tailwind.config.js`:
```javascript
green: { 400: '#00ff41' }  // Change this hex code
```

### Change Tech Stack Icons
Edit `TechStackCarousel` in `Portfolio.jsx`:
```javascript
const techStack = [
  { icon: Code2, label: 'React', color: '#61dafb' },
  // Add more here
];
```

### Change Skill Percentages
Edit `SkillsSection`:
```javascript
// Currently all skills show 85%
// Change this number in line ~780
animate={isInView ? { width: '85%' } : { width: 0 }}
// Change 85% to your desired value
```

---

## 📊 FILE STRUCTURE

```
portfolio-final/
├── src/
│   ├── Portfolio.jsx     ← MAIN FILE (edit here!)
│   ├── App.jsx           (wrapper)
│   ├── index.js          (entry point)
│   └── index.css         (styles)
├── public/
│   └── index.html        (HTML template)
├── package.json          (dependencies)
├── tailwind.config.js    (colors/fonts)
├── postcss.config.js     (CSS config)
├── .gitignore            (git rules)
├── SETUP_GUIDE.md        (this setup guide)
└── README.md             (full docs)
```

---

## 🔍 FIND & REPLACE QUICK REFERENCE

| What | Find | Replace With |
|------|------|-------------|
| Your Name | `Sanjay Ram` | YOUR NAME |
| Your Email | `sanjay@example.com` | YOUR_EMAIL@example.com |
| GitHub | `https://github.com` | Your GitHub URL |
| LinkedIn | `https://linkedin.com` | Your LinkedIn URL |
| About Text | `Lorem ipsum...` | Your bio |
| Project Title | `AI Chat Application` | Your project name |
| Project Link | `https://github.com` | Your project repo |

---

## 🌐 DEPLOYMENT QUICK LINKS

**Vercel:** https://vercel.com (easiest)  
**GitHub Pages:** github.com (free)  
**Netlify:** https://app.netlify.com (easy)  

---

## ✅ BEFORE YOU DEPLOY

- [ ] Edited your name
- [ ] Updated all social links
- [ ] Changed About section text
- [ ] Updated projects
- [ ] Uploaded profile photo
- [ ] Tested on mobile
- [ ] No console errors (F12)

---

## 💡 TIPS

1. **Photo won't save?**
   - Uses browser localStorage
   - Try different browser or clear cache

2. **Text too small?**
   - Already set to scale responsively
   - On mobile: smaller, On desktop: larger

3. **Animations choppy?**
   - Disable browser extensions
   - Check browser version is latest

4. **Need help?**
   - Check SETUP_GUIDE.md
   - Check README.md
   - Google your error message

---

## 🎉 YOU'RE READY!

Read SETUP_GUIDE.md for step-by-step deployment! 🚀
