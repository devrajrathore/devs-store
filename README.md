<div align="center">

# DEV'S STORE 👕✨
### Archival Indian Streetwear & Tactile Clothing Rail Experience

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-20232A?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

<br />

**A state-of-the-art, interactive fashion e-commerce storefront crafted for the Indian streetwear culture.**  
Featuring a tactile physical clothing rail you can interact with right in your browser.

[Live Demo](#-deployment) · [Explore Features](#-key-features) · [Local Setup](#-getting-started)

</div>

---

## 🌟 Key Highlights

- 🪝 **Interactive Clothing Rail Hero:** A physics-modeled interactive clothing rail. Brush along the rail, slide hangers, lift garments to inspect back drapes, and toggle autoplay.
- 🇮🇳 **Indian Localization & Currency (₹):** Tailored specifically for the Indian market with prices in Indian Rupees (INR ₹), Pan-India express delivery highlights, and UPI (GPay, PhonePe, Paytm), RuPay, and COD support.
- 🛍️ **Slide-Over Shopping Bag Drawer:** Includes a live dynamic **Free Shipping Progress Meter** (unlocks at ₹2,499), item quantity stepper, promo code system (`DEV10` for 10% off), and a simulated secure checkout manifest.
- 🔍 **Instant Search Modal (`⌘K` / `Ctrl+K`):** Global keyboard shortcut search that filters through silhouettes, fabric compositions, and colors in real-time.
- 📐 **3-Angle Garment Inspection Modal:** Inspect front views, back views, and side profiles with technical specifications, organic certification details, and real-time size selection.
- 🎨 **Archival Catalog & Hover Flip:** Product cards with smooth front-to-back photo transitions, color swatches, and hover quick-size add buttons (`S`, `M`, `L`, `XL`).
- 📖 **Editorial Lookbook & Styling Pairings:** Curated outfit pairings shot across iconic Indian cultural spots (Bandra, Hauz Khas, Indiranagar, Koregaon Park) with 1-click *"Add look pieces"* functionality.
- 💎 **Material & Craftsmanship Story:** Editorial breakdown of 240 GSM Indian ring-spun organic cotton, flatlock reinforced seaming, and small-batch mineral dye patinas.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router + Turbopack)](https://nextjs.org/)
- **Frontend Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Typography:** Geist & Geist Mono

---

## 📂 Project Structure

```bash
devs-store/
├── app/
│   ├── layout.tsx         # Global fonts, metadata & layout
│   ├── page.tsx           # Assembled single-page luxury storefront
│   └── globals.css        # Tailwind v4 theme & custom utilities
├── components/
│   ├── store/
│   │   ├── announcement-bar.tsx  # Rotating pan-India shipping ticker
│   │   ├── navbar.tsx            # Sticky glass navbar, search & bag
│   │   ├── hero-rail-section.tsx # Interactive rail wrapper & controls
│   │   ├── catalog-section.tsx   # Filterable product grid & quick add
│   │   ├── materials-section.tsx # Editorial 240 GSM craftsmanship story
│   │   ├── lookbook-section.tsx  # Styling pairs & direct add to bag
│   │   ├── reviews-section.tsx   # GQ India, Homegrown press & wear logs
│   │   ├── newsletter-section.tsx# VIP Drop email dispatch
│   │   ├── cart-drawer.tsx       # Slide-over bag with free shipping meter
│   │   ├── cart-context.tsx      # Global store state & cart management
│   │   ├── product-modal.tsx     # 3-Angle specs & size picker popup
│   │   ├── search-modal.tsx      # Instant Cmd+K live catalog search
│   │   └── footer.tsx            # Comprehensive multi-column footer
│   └── ui/
│       ├── product-rail-gallery.tsx # SVG & Canvas physics clothing rail
│       └── demo.tsx                 # 10 curated archival garments & specs
└── public/
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18.17 or higher) installed on your system.

### 1. Clone the repository
```bash
git clone https://github.com/devrajrathore/devs-store.git
cd devs-store
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience Dev's Store.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deployment (Vercel)

This project is optimized for 1-click zero-config deployment on **[Vercel](https://vercel.com)**:

1. Push your code to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com) using your GitHub account.
3. Click **"Add New..."** -> **"Project"** and import `devs-store`.
4. Click **"Deploy"** and your site will be live in under a minute!

---

## 👤 Author

**Devraj Rathore**  
- GitHub: [@devrajrathore](https://github.com/devrajrathore)

---

<div align="center">
  <sub>Built with care for Indian Streetwear Culture · 2026</sub>
</div>
