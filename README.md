# Z-SWAP — Institutional Landing Page

Official landing page for **Z-SWAP**, the Liquidity Intelligence Platform within the ZETTA ecosystem.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom design system)
- **Framer Motion** (animations)
- **Google Fonts**: Syne + DM Sans + DM Mono

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Design system, animations, custom styles
│   ├── layout.tsx        # Root layout with metadata + fonts
│   └── page.tsx          # Page composition
└── components/
    ├── Navigation.tsx        # Sticky nav with scroll effects
    ├── HeroSection.tsx       # Animated particle hero
    ├── WhatIsSection.tsx     # Protocol definition + 6-pillar grid
    ├── LiquiditySection.tsx  # Swap engine + SVG flow diagram
    ├── ArchitectureSection.tsx # Full architecture SVG diagram
    ├── CapabilitiesSection.tsx # Interactive 7-layer explorer
    ├── AILayerSection.tsx    # ZION AI terminal + capabilities
    ├── SecuritySection.tsx   # Risk score panel
    ├── EcosystemSection.tsx  # Network map + integrations
    ├── FutureSection.tsx     # Roadmap + vision
    ├── CTASection.tsx        # Call to action
    └── Footer.tsx            # Footer with links
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy** — no configuration needed
5. Vercel auto-detects Next.js and builds correctly

### Option 3: Vercel Dashboard (Drag & Drop)

1. Run `npm run build` locally
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drop the project folder

## Environment Variables

No environment variables required for the base landing page.

## Customization

### Colors
Edit `tailwind.config.ts` → `theme.extend.colors.zs` to adjust the design system.

### Content
Each section is a self-contained component in `src/components/`. Edit content directly in each file.

### Fonts
Fonts are loaded in `src/app/layout.tsx`. Replace with any Google Fonts imports.

## Design System

| Token | Value | Use |
|-------|-------|-----|
| `zs-bg` | `#04040C` | Page background |
| `zs-cyan` | `#00E8FF` | Primary accent |
| `zs-violet` | `#7C3AED` | Secondary accent |
| `zs-gold` | `#F5A623` | Warning / AI layer |
| `zs-red` | `#FF3B5C` | Risk / alert |
| `zs-green` | `#00E087` | Success / safe |

---

**Z-SWAP is part of the ZETTA ecosystem.** This page positions Z-SWAP as infrastructure software, not an investment product. No financial promises or guaranteed returns are implied.
