# Nawin Prasath K — DFIR Portfolio (Next.js)

A production-grade, fully animated DFIR portfolio built with **Next.js 14** and **Framer Motion**.

## Tech Stack
- **Next.js 14** (App Router)
- **Framer Motion 11** — scroll reveals, stagger grids, hover animations, counter animation
- **DM Sans + Bebas Neue + Share Tech Mono** — via Google Fonts
- Custom dot-grid canvas, custom cursor with lag ring, scanline overlay

## Features
- Animated custom cursor with hover detection
- Dot-grid canvas reacting to mouse position
- Hero typing animation cycling through roles
- Auto-typing terminal simulation
- Scroll-triggered stagger animations on every section
- Counter animation on stats strip
- Active NIA dot pulse animation
- Live project status badges with breathing pulse
- All company logos + cert badges as real images
- Mr.Forensics CTF team card
- Live Demo + GitHub links on all projects
- Responsive for mobile

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import your repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — done!

No environment variables needed. All images are in `/public/images/`.

## Project Structure
```
nawin-dfir-portfolio/
├── app/
│   ├── globals.css        ← Full design system
│   ├── layout.jsx         ← Root layout + metadata
│   └── page.jsx           ← Main page assembly
├── components/
│   ├── Animate.jsx        ← Reusable Framer Motion wrappers
│   ├── CursorCanvas.jsx   ← Cursor + dot-grid canvas
│   ├── Navbar.jsx
│   ├── Hero.jsx           ← Typed animation + terminal
│   ├── Stats.jsx          ← Counter animation
│   ├── Skills.jsx
│   ├── Experience.jsx     ← Timeline with logos
│   ├── Projects.jsx       ← Case file cards
│   ├── CTF.jsx            ← Platform cards + win grid
│   ├── Certifications.jsx ← Badge grid
│   ├── Contact.jsx        ← Form + social links
│   └── Footer.jsx
├── public/
│   └── images/            ← All logos and project images
├── next.config.mjs
└── package.json
```

## Updating Content
- **Jobs / Experience** → edit `JOBS` array in `components/Experience.jsx`
- **Projects** → edit `PROJECTS` array in `components/Projects.jsx`
- **CTF wins** → edit `WINS` array in `components/CTF.jsx`
- **Certs** → edit `CERTS` array in `components/Certifications.jsx`
- **Contact links** → `components/Contact.jsx`
- **Colors / fonts** → CSS variables at the top of `app/globals.css`
