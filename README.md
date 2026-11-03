# PIXORA DIGITAL — Ultra Premium 3D Digital Agency Experience

> **"Beyond Websites. Into Digital Experiences."**  
> *One Business. One Powerful Digital Experience.*

An award-winning, responsive, and production-ready **Universal Multi-Industry Digital Platform** built by our Hyderabad-based creative development studio. Featuring an interactive Three.js 3D kinetic sculpture, multi-device viewport testing lab (Desktop, Tablet, Mobile), and 10 standalone, independently designed business trade websites.

---

## 🌟 Architecture, Motion & Interactive Highlights

- **Interactive Three.js WebGL Kinetic Sculpture**: Floating geometric polyhedral sculpture with ACESFilmic tone mapping, dynamic mouse-tracking point light, ambient particle starfield, and smooth pointer lerp.
- **Lenis Smooth Momentum Scrolling**: High-precision kinetic scrolling with hardware-accelerated momentum and full `prefers-reduced-motion` compliance.
- **GSAP & Framer Motion Integrations**: Subtle text reveals, scroll triggers, staggered cards, and seamless micro-interactions.
- **Our 7-Day Development Process (`/process`)**: Interactive day-by-day milestone roadmaps (Day 1 Discovery to Day 7 Handover) with clear client feedback timing prerequisites.
- **100% Client Ownership Guarantee**: Dedicated domain and hosting ownership architecture. We configure accounts directly under the client's name with delegated access, ensuring you retain total sovereignty over your domain and assets.
- **Multi-Device Experience Lab (`/experiences`)**: Live viewport testing workstation allowing instant switching between Desktop (1440px), Tablet (768px), and Mobile (390px) simulated device frames with live interactive iframe rendering.
- **10 Bespoke Business Website Demos**: Fully custom standalone preview websites, each engineered with distinct typography, tailored color palettes, authentic Hyderabad localized copy, and zero generic template clones.
- **Transparent Honest Pricing (`/pricing`)**: Starter (₹5,000), Growth (₹9,000), and Custom Pro (₹15,000) with clear distinction between standard inclusions and external vendor bills (domain/hosting).
- **Zero AI Mentions**: Public-facing content contains zero AI badges or developer watermarks, maintaining authentic agency craft throughout.
- **Direct WhatsApp Conversion Engine**: Pre-configured inquiries routed directly to **+91 81215 07323**.

---

## 🏢 10 Dedicated Business Website Previews

| Industry | Route | Dedicated Features Included |
| :--- | :--- | :--- |
| **Salon & Beauty** | `/preview/salon` | Service menu with pricing, stylist team profiles, before/after gallery, WhatsApp booking, reviews, timings |
| **Restaurant & Cafe** | `/preview/restaurant` | Interactive digital menu with category filtering, food gallery, table reservation form, WhatsApp ordering |
| **Clothing & Fashion** | `/preview/clothing` | Product catalogue with category filters, color swatches, new arrival badges, WhatsApp ordering |
| **Healthcare & Dental** | `/preview/dental` | Specialist doctor profiles, treatments with pricing, online consultation form, sterilization standards |
| **Gym & Fitness** | `/preview/gym` | Membership plans with tier comparisons, certified trainer roster, facility overview, 1-day free trial form |
| **Furniture Showroom** | `/preview/furniture` | Hardwood living room, bedroom & dining catalog with dimensions, materials, custom carpentry WhatsApp enquiry |
| **Real Estate Agency** | `/preview/real-estate` | Property listings with RERA/HMDA tags, bedroom/bath specs, price filters, free cab site visit scheduling |
| **Automobile & Detailing**| `/preview/automobile` | Ceramic coating, TPU PPF packages, dust-free lab standards, instant quotation on WhatsApp |
| **Wedding Photography** | `/preview/photography` | High-impact dark portfolio gallery, package pricing breakdown, calendar date availability checker |
| **Education & Coaching** | `/preview/education` | NEET/IIT-JEE batches, Kota & Hyderabad faculty roster, track records, scholarship demo class form |

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/) with code-splitting lazy routes
- **Motion & 3D**: [Three.js](https://threejs.org/), [GSAP](https://greensock.com/), [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis), [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Curated luxury & editorial fonts via Google Fonts (`Cinzel`, `Cormorant Garamond`, `Outfit`, `Playfair Display`, `Plus Jakarta Sans`, `Space Grotesk`, `Syne`, `Oswald`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Navigation**: [React Router v7](https://reactrouter.com/) (with automatic scroll restoration)
- **Deployment Ready**: Optimized for Vercel, Netlify, Cloudflare Pages, or AWS S3 + CloudFront

---

## 📲 WhatsApp Direct Connect

- **Dedicated Number**: `+91 81215 07323`
- **Standard WA Link**: [https://wa.me/918121507323](https://wa.me/918121507323)
- **Floating Button**: Persistent across all pages with interactive quick-chat popup.
- **Form Actions**: Custom forms validate all fields and launch WhatsApp with formatted inquiry payloads.

---

## 💻 Local Development & Build

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
```bash
# Clone or navigate to the project directory
cd "demo website"

# Install all dependencies
npm install
```

### Run Locally (Dev Server)
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized, production-ready bundle in the `dist/` directory.

### Preview Production Build Locally
```bash
npx vite preview
```

---

## 📱 Responsive Testing Benchmarks

The website and all 10 sample previews are engineered and verified for zero horizontal overflow and optimal readability across:
- **Mobile Small**: 360px (Samsung Galaxy / entry phones)
- **Mobile Standard**: 390px (iPhone 13/14/15/16)
- **Tablet**: 768px (iPad portrait)
- **Laptop**: 1024px (MacBook Air / 13" laptops)
- **Desktop**: 1440px+ (Ultra-wide & high-res monitors)

---

## 🛡️ Admin Dashboard Notes (Specification 14)

Per project requirements:
> *"Build a separate admin dashboard only if a secure backend is implemented... If no backend is configured, keep the admin dashboard out of the public navigation and document what configuration is needed."*

To protect client security, no pseudo or mock login screen is exposed on the public site. When integrating backend services (such as Supabase, Firebase, or custom Node/Express APIs), the recommended architecture is:
1. Setup authenticated admin routes via Supabase Auth or Firebase Auth with HTTP-only session cookies.
2. Store form submissions into a `leads` table with fields: `business_name`, `category`, `phone`, `city`, `created_at`.
3. Provide a role-based protected route `/admin` with Row-Level Security (RLS) to review lead inquiries and update content.

---

## 📍 About the Agency

**PIXORA DIGITAL** is a Hyderabad-based website development team:
- **Location**: Hyderabad, Telangana, India
- **Contact**: +91 81215 07323
- **Focus**: Helping local and regional businesses establish modern, fast, mobile-friendly websites that attract customers and generate inquiries.
