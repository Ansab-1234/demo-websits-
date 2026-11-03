# PIXORA DIGITAL – Universal Business Website Master Demo

> **"Your Business Deserves a Better Digital Presence."**  
> *One Business. One Powerful Digital Experience.*

A world-class, responsive, and production-ready **Universal Business Website** built by our Hyderabad-based digital agency team. Designed to demonstrate to business owners across 18+ different industries how a modern, high-converting custom website can be engineered for their brand.

---

## 🌟 Live Demo & Architecture Highlights

- **18+ Industry Showcase**: Interactive cards featuring custom imagery, icons, service overviews, and live preview buttons.
- **10 Realistic Sample Business Websites**: Fully realized standalone sample sites (not just title changes), each with its own brand identity, color scheme, services, digital menus, appointment booking, WhatsApp ordering, and lead capture.
- **Floating & Contextual WhatsApp Integration**: Seamlessly pre-configures custom enquiry text sent directly to **+91 81215 07323**.
- **Interactive Project Customization Experience**: *"Imagine Your Business Here"* allows prospective clients to submit their business type, services, city, and phone number, generating a pre-formatted WhatsApp message for instant consultation.
- **Modern Agency Architecture**: Light and Dark mode toggle, smooth scrolling, mobile-first responsive layout, and zero-error TypeScript build.

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
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
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
