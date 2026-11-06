# Puncture Patrol – 24/7 Mobile Tyre Service Scotland

A modern, responsive, high-converting website built for **Puncture Patrol**, an emergency mobile tyre fitting and roadside tyre assistance provider operating across Scotland.

---

## 🎨 Brand Identity & Colors

- **Primary Brand Color (Navy Blue)**: `#101F3C`
- **Secondary Accent Color (Reddish Coral)**: `#E6534B`
- **Supporting Neutral**: `#F5F7FA` (Light background)
- **Dark Text**: `#172033`
- **Muted Text**: `#667085`

---

## 🚀 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (React / JSX only — zero TypeScript)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + custom inline SVGs

---

## 📁 Project Structure

```text
puncture-patrol/
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── src/
    ├── app/
    │   ├── globals.css          # Tailwind directives, animations & custom styles
    │   ├── layout.jsx           # Root layout with SEO metadata & viewport settings
    │   └── page.jsx             # Main homepage composing all sections
    ├── components/
    │   ├── Header.jsx           # Sticky nav, emergency hotline & mobile drawer
    │   ├── Logo.jsx             # Custom Puncture Patrol badge icon & typography
    │   ├── Hero.jsx             # Conversion-focused hero with 24/7 dispatch radar
    │   ├── TrustIndicators.jsx  # 4 core trust pillars (24/7, mobile, emergency, certified)
    │   ├── Services.jsx         # 6 service cards with detailed modals & prefill triggers
    │   ├── HowItWorks.jsx       # 3-step callout process + Scottish motorway safety guide
    │   ├── WhyChooseUs.jsx      # Benefits & comparison table (vs traditional garages)
    │   ├── TyreSizeGuide.jsx    # Interactive sidewall decoder (e.g. 205/55 R16 91V)
    │   ├── AreasCovered.jsx     # Scottish coverage hubs, motorway corridors & search
    │   ├── CustomerReviews.jsx  # Testimonial cards with Scottish breakdown scenarios
    │   ├── BookingForm.jsx      # Validated interactive booking form with confirmation
    │   ├── EmergencyCTA.jsx     # Full-width roadside assistance emergency callout
    │   ├── Footer.jsx           # Links, contact info, operating hours & copyright
    │   └── EmergencyFloatingBar.jsx # Sticky mobile bottom emergency bar
    └── data/
        ├── servicesData.js      # Detailed data for 6 mobile services
        ├── areasData.js         # Scottish towns, cities, postcodes & motorways
        └── reviewsData.js       # Representative customer testimonials
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```
