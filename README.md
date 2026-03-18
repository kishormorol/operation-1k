# 🚀 Operation 1K — AI Engineer Study Tracker

Your personal 1,000-hour study tracker. Built to deploy on Vercel and use from any device.

## Deploy to Vercel (2 minutes)

### Option 1: Vercel CLI
```bash
npm install -g vercel
cd op1k
npm install
vercel
```

### Option 2: GitHub + Vercel (recommended)
1. Push this folder to a GitHub repo:
   ```bash
   cd op1k
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/operation-1k.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repo
5. Framework: **Vite** (auto-detected)
6. Click **Deploy**

Your app will be live at `your-project.vercel.app` in ~30 seconds.

## Add to Phone Home Screen (feels like a native app)

### iPhone
1. Open your Vercel URL in Safari
2. Tap the Share button (box with arrow)
3. Tap "Add to Home Screen"
4. Name it "Op1K" → tap Add

### Android
1. Open your Vercel URL in Chrome
2. Tap the three dots menu
3. Tap "Add to Home Screen" or "Install App"

## Features
- **Plan** — 4-week study plan with 42 LeetCode problems, ML/LLM tasks, all with checkboxes
- **Routine** — Auto-detects today and shows your daily schedule
- **Stats** — Progress by week, by category, hours logged
- **Hour Logger** — One tap to log daily study hours
- **Persistent** — Data saved in localStorage, survives refreshes
- **Mobile-first** — Works great on phone, tablet, and desktop
- **PWA** — Add to home screen for app-like experience

## Tech Stack
- React 18 + Vite
- Pure CSS (no frameworks)
- localStorage for persistence
- PWA manifest for home screen install
