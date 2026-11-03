import { useState, useRef, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  Scissors,
  UtensilsCrossed,
  Shirt,
  Armchair,
  Activity,
  Dumbbell,
  Building2,
  Car,
  Camera,
  GraduationCap,
  Send,
  ShieldCheck,
  Zap,
  Globe,
  Clock,
  MessageSquare,
  Layers,
  Code2,
  Palette,
  Phone,
  ExternalLink,
  Check,
  Lock,
  UserCheck
} from 'lucide-react'

// Lazy load Three.js 3D kinetic sculpture to keep initial bundle ultra-lean
const ThreeHeroCanvas = lazy(() => import('../components/ThreeHeroCanvas'))
import SevenDayProcess from '../components/SevenDayProcess'
import OwnershipSection from '../components/OwnershipSection'

import {
  getWhatsAppUrl,
  WA_MESSAGES,
  SERVICES,
  PRICING_PLANS,
  PHONE_NUMBER_1,
  PHONE_DISPLAY_1,
  WHATSAPP_NUMBER_1,
  PHONE_NUMBER_2,
  PHONE_DISPLAY_2,
  WHATSAPP_NUMBER_2,
  CITY
} from '../lib/constants'

function ThreeFallback() {
  return (
    <div className="w-full h-[450px] sm:h-[550px] lg:h-[620px] flex items-center justify-center p-8">
      <div className="relative w-64 h-64 rounded-full border border-[#C6A46A]/25 flex items-center justify-center animate-pulse">
        <div className="absolute inset-4 rounded-full border border-[#C6A46A]/20 animate-spin" style={{ animationDuration: '24s' }} />
        <div className="w-36 h-36 rounded-3xl bg-gradient-to-tr from-[#191A17] via-[#2A2B26] to-[#C6A46A]/40 rotate-45 shadow-2xl border border-[#C6A46A]/30" />
      </div>
    </div>
  )
}

// ─── 10 BESPOKE INDUSTRY DEMOS DATA ──────────────────────────────────────────

interface DemoItem {
  id: string
  title: string
  trade: string
  location: string
  route: string
  image: string
  category: string
  description: string
  accent: string
  highlights: string[]
}

const FEATURED_DEMOS: DemoItem[] = [
  {
    id: 'salon',
    title: 'Maison de Beauté',
    trade: 'Luxury Salon & Spa',
    location: 'Banjara Hills, Hyderabad',
    route: '/preview/salon',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    category: 'Beauty & Wellness',
    description: 'High-editorial French salon aesthetics with diagnostic treatment menus, master stylist rosters, and direct VIP suite booking.',
    accent: '#C6A46A',
    highlights: ['Interactive Treatment Menu', 'Master Stylist Portfolio', 'WhatsApp VIP Booking'],
  },
  {
    id: 'restaurant',
    title: 'Saffron & Stone',
    trade: 'Heritage Fine Dining',
    location: 'Jubilee Hills, Hyderabad',
    route: '/preview/restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    category: 'Hospitality & Dining',
    description: 'Cinzel classical typography with terracotta peat charcoal tones, Nizami heritage degustation menus, and seamless table reservations.',
    accent: '#C6A46A',
    highlights: ['Categorized Degustation Menu', 'Instant Table Reservation', 'Chef Tasting Notes'],
  },
  {
    id: 'clothing',
    title: 'Atelier Nouveau',
    trade: 'Designer Fashion House',
    location: 'Banjara Hills, Hyderabad',
    route: '/preview/clothing',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    category: 'Fashion & Retail',
    description: 'High-fashion monochrome minimalism with crimson accents, handwoven silk fabric specifications, and bespoke tailoring concierge.',
    accent: '#C6A46A',
    highlights: ['Curated Seasonal Lookbook', 'Fabric & Weave Specifications', 'Bespoke Tailoring Concierge'],
  },
  {
    id: 'furniture',
    title: 'Timber & Arch',
    trade: 'Architectural Teakwood',
    location: 'Financial District, Hyderabad',
    route: '/preview/furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    category: 'Home & Living',
    description: 'Wabi-sabi natural teakwood with mortise & tenon construction details, CAD floorplan consults, and custom showroom inquiries.',
    accent: '#C6A46A',
    highlights: ['Mortise & Tenon Craft Details', 'CAD Floorplan Consultations', 'Direct Showroom WhatsApp Inquiry'],
  },
  {
    id: 'dental',
    title: 'Aura Dental Institute',
    trade: 'Advanced Dentistry & Implants',
    location: 'Hitec City, Hyderabad',
    route: '/preview/dental',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    category: 'Healthcare & Clinical',
    description: 'Clinical minimalism in ice cyan and obsidian, Straumann implant certifications, Invisalign scan workflows, and senior MDS rosters.',
    accent: '#C6A46A',
    highlights: ['Straumann & Invisalign Standards', 'Senior MDS Faculty Roster', 'Zero-Wait Clinical Booking'],
  },
  {
    id: 'gym',
    title: 'Kinetic Force',
    trade: 'High-Performance Athletics',
    location: 'Gachibowli, Hyderabad',
    route: '/preview/gym',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    category: 'Fitness & Sports',
    description: 'Matte carbon black and amber athletic typography, Eleiko Olympic weightlifting racks, transparent membership matrix, and 1-day pass passes.',
    accent: '#C6A46A',
    highlights: ['Eleiko & Hammer Strength Specs', 'Transparent Membership Matrix', '1-Day VIP Pass Generator'],
  },
  {
    id: 'real-estate',
    title: 'The Elevation Group',
    trade: 'Luxury Villas & Penthouses',
    location: 'Neopolis, Kokapet, Hyderabad',
    route: '/preview/real-estate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    category: 'Real Estate & Living',
    description: 'Midnight navy and champagne gold, HMDA and RERA verified numbers, private penthouse suites, and chauffeured Mercedes site visits.',
    accent: '#C6A46A',
    highlights: ['HMDA & RERA Compliance Badges', 'Architectural Floorplans', 'Chauffeured Site Visit Booking'],
  },
  {
    id: 'automobile',
    title: 'Apex Labs',
    trade: 'Supercar Detailing & PPF',
    location: 'Jubilee Hills, Hyderabad',
    route: '/preview/automobile',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    category: 'Automotive & Detailing',
    description: 'Technical carbon and crimson typography, 9H ceramic coating standards, self-healing TPU PPF packages, and instant segment estimation.',
    accent: '#C6A46A',
    highlights: ['Self-Healing TPU Film Specs', 'Vehicle Segment Price Matrix', 'Dust-Free Lab Inspection Booking'],
  },
  {
    id: 'photography',
    title: 'Lumière & Frame',
    trade: 'Cinematic Photography',
    location: 'Hyderabad & Global Destinations',
    route: '/preview/photography',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80',
    category: 'Creative Arts & Events',
    description: 'Darkroom gallery with Cormorant Garamond typography, true photojournalistic storytelling, transparent investment packages, and date availability checker.',
    accent: '#C6A46A',
    highlights: ['Darkroom Editorial Gallery', 'Transparent Investment Tiers', 'Date Availability Calendar Check'],
  },
  {
    id: 'education',
    title: 'Ascent Academy',
    trade: 'Premier Test Prep & Science',
    location: 'Madhapur & Dilsukhnagar, Hyderabad',
    route: '/preview/education',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    category: 'Education & Academics',
    description: 'Scholarly navy and gold, verified IIT Madras and AIIMS faculty pedigree, strictly audited 1:30 small-batch ratios, and free 2-day demo class booking.',
    accent: '#C6A46A',
    highlights: ['IIT Madras & AIIMS Pedigree', 'Strict 1:30 Small-Batch Ratio', 'Free 2-Day Demo Class Seat'],
  },
]

// ─── 1. HERO SECTION ─────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-black/5 dark:border-white/10 bg-[#FBF9F5] dark:bg-[#10110F]">
      {/* Subtle Studio Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#C6A46A]/10 dark:bg-[#C6A46A]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EFECE6]/80 dark:bg-[#191A17] border border-black/5 dark:border-white/10 text-[#141512] dark:text-[#F5F0E7] text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#C6A46A] animate-pulse" />
              <span>PIXORA DIGITAL</span>
              <span className="text-[#8F8B82] dark:text-[#5A564F]">|</span>
              <span className="text-[#8E6D3E] dark:text-[#C6A46A] font-bold">HYDERABAD STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black text-[#141512] dark:text-[#F5F0E7] leading-[1.05] tracking-tight">
              Digital Experiences That{' '}
              <span className="font-serif-display italic font-normal text-[#C6A46A] block sm:inline">
                Move Businesses Forward.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light max-w-2xl">
              We design and develop premium digital experiences, business websites and custom web solutions that help brands build trust and grow online.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#demos"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#C6A46A]/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white dark:bg-[#191A17] hover:bg-[#EFECE6] dark:hover:bg-[#252622] text-[#141512] dark:text-[#F5F0E7] border border-black/10 dark:border-white/10 font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-[#C6A46A]" />
              </a>
            </div>

            {/* Studio Engineering Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-black/5 dark:border-white/10 max-w-xl">
              <div>
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#141512] dark:text-[#F5F0E7] block">
                  10+
                </span>
                <span className="text-xs text-[#6A665E] dark:text-[#A8A49B] font-medium">
                  Live Trade Demos
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#141512] dark:text-[#F5F0E7] block">
                  7 Days
                </span>
                <span className="text-xs text-[#6A665E] dark:text-[#A8A49B] font-medium">
                  Delivery Roadmap
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#141512] dark:text-[#F5F0E7] block">
                  100%
                </span>
                <span className="text-xs text-[#6A665E] dark:text-[#A8A49B] font-medium">
                  Client Ownership
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D WebGL Kinetic Sculpture */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative rounded-3xl bg-white/40 dark:bg-[#161714]/80 border border-black/5 dark:border-white/10 p-2 backdrop-blur-xl shadow-2xl overflow-hidden">
              <Suspense fallback={<ThreeFallback />}>
                <ThreeHeroCanvas />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#studio-intro"
            className="flex flex-col items-center gap-2 text-xs font-mono text-[#8F8B82] dark:text-[#A8A49B] hover:text-[#C6A46A] transition-colors"
          >
            <span>DISCOVER THE STUDIO</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── 2. STUDIO INTRODUCTION ──────────────────────────────────────────────────

function StudioIntroSection() {
  return (
    <section id="studio-intro" className="py-24 border-b border-black/5 dark:border-white/10 relative bg-[#F7F5EF] dark:bg-[#141512]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A46A]/15 border border-[#C6A46A]/30 text-xs font-semibold text-[#8E6D3E] dark:text-[#C6A46A] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Studio Philosophy & Craft
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-[#141512] dark:text-[#F5F0E7]">
            Not generic templates. <br />
            <span className="text-[#C6A46A]">Digital platforms built for real business impact.</span>
          </h2>
          <p className="text-lg text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
            Most business websites in Hyderabad are built like static brochures: slow, bloated, and disconnected from customer decision-making. At PIXORA DIGITAL, we combine editorial design with high-performance software engineering to create digital platforms that convert visitors into paying clients.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 hover:border-[#C6A46A]/40 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#C6A46A]/15 flex items-center justify-center text-[#C6A46A] mb-6 group-hover:scale-105 transition-transform">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#141512] dark:text-[#F5F0E7]">01. Bespoke Visual Identity</h3>
            <p className="text-sm text-[#6A665E] dark:text-[#A8A49B] leading-relaxed">
              We never use cookie-cutter templates. Every typography pairing, color harmony, and layout rhythm is handcrafted to reflect your brand's unique character.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 hover:border-[#C6A46A]/40 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#C6A46A]/15 flex items-center justify-center text-[#C6A46A] mb-6 group-hover:scale-105 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#141512] dark:text-[#F5F0E7]">02. High-Performance Engineering</h3>
            <p className="text-sm text-[#6A665E] dark:text-[#A8A49B] leading-relaxed">
              Built with React 19, TypeScript, and modern bundlers. Zero plugin bloat. Lightning-fast sub-second loading ensures zero customer abandonment.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 hover:border-[#C6A46A]/40 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#C6A46A]/15 flex items-center justify-center text-[#C6A46A] mb-6 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#141512] dark:text-[#F5F0E7]">03. Frictionless Conversion</h3>
            <p className="text-sm text-[#6A665E] dark:text-[#A8A49B] leading-relaxed">
              Customers don't want 8-field forms. We embed direct WhatsApp triggers, instant click-to-call, and interactive menu order flows that turn interest into bookings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 3. FEATURED INDUSTRY DEMOS (Portfolio-Style Gallery) ─────────────────────

function FeaturedDemosSection() {
  return (
    <section id="demos" className="py-24 border-b border-black/5 dark:border-white/10 bg-[#FBF9F5] dark:bg-[#10110F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A46A]/15 border border-[#C6A46A]/30 text-xs font-semibold text-[#8E6D3E] dark:text-[#C6A46A] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              10 Fully Implemented Trade Demos
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#141512] dark:text-[#F5F0E7]">
              Explore realistic business websites in action.
            </h2>
            <p className="text-base sm:text-lg text-[#5A564F] dark:text-[#A8A49B] mt-4 font-light">
              Each demo website below has been custom designed with dedicated trade features, interactive booking forms, and realistic Hyderabad business copy.
            </p>
          </div>

          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#191A17] border border-black/10 dark:border-white/10 text-xs font-bold text-[#141512] dark:text-[#F5F0E7] hover:border-[#C6A46A] transition-colors"
          >
            <span>Open Device Lab</span>
            <ArrowRight className="w-4 h-4 text-[#C6A46A]" />
          </Link>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_DEMOS.map((demo, index) => (
            <div
              key={demo.id}
              className="group flex flex-col bg-white dark:bg-[#191A17] rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden hover:border-[#C6A46A]/50 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#10110F]">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10110F] via-[#10110F]/30 to-transparent" />

                {/* Floating Tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/95 dark:bg-[#10110F]/95 text-[#141512] dark:text-[#F5F0E7] backdrop-blur-md border border-white/20">
                    {demo.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold text-[#10110F] bg-[#C6A46A] shadow-sm">
                    DEMO 0{index + 1}
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-[11px] font-mono tracking-widest text-[#C6A46A] uppercase block">
                    {demo.location}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {demo.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#F7F5EF] dark:bg-[#121310] text-[#141512] dark:text-[#F5F0E7] text-xs font-semibold mb-3 border border-black/5 dark:border-white/10">
                    {demo.trade}
                  </div>
                  <p className="text-sm text-[#5A564F] dark:text-[#A8A49B] leading-relaxed">
                    {demo.description}
                  </p>
                </div>

                {/* Trade Highlights */}
                <div className="space-y-2 pt-2 border-t border-black/5 dark:border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8F8B82] block">
                    Tailored Features Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {demo.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#141512] dark:text-[#DDD5C7]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A46A] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                  <Link
                    to={demo.route}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold transition-all shadow-sm"
                  >
                    <span>View Live Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppUrl(`Hello PIXORA DIGITAL! I saw the ${demo.title} demo and would like to build a custom website for my business in Hyderabad.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#5A564F] dark:text-[#A8A49B] hover:text-[#C6A46A] transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 4. INTERACTIVE MULTI-DEVICE EXPERIENCE LAB CALLOUT ───────────────────────

function InteractiveDeviceLabSection() {
  const [activeDemo, setActiveDemo] = useState<'salon' | 'restaurant' | 'clothing' | 'dental' | 'gym' | 'real-estate'>('salon')
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  const demosMeta = {
    salon: {
      title: 'Maison de Beauté',
      trade: 'Salon & Spa',
      route: '/preview/salon',
      tag: 'Bespoke Booking Flow',
    },
    restaurant: {
      title: 'Saffron & Stone',
      trade: 'Fine Dining',
      route: '/preview/restaurant',
      tag: 'Degustation & Table Reservation',
    },
    clothing: {
      title: 'Atelier Nouveau',
      trade: 'Fashion Boutique',
      route: '/preview/clothing',
      tag: 'Lookbook & Tailoring Concierge',
    },
    dental: {
      title: 'Aura Dental Institute',
      trade: 'Clinical Dental',
      route: '/preview/dental',
      tag: 'MDS Roster & Zero-Wait Consult',
    },
    gym: {
      title: 'Kinetic Force',
      trade: 'Athletic Gym',
      route: '/preview/gym',
      tag: 'Equipment Matrix & 1-Day Pass',
    },
    'real-estate': {
      title: 'The Elevation Group',
      trade: 'Luxury Real Estate',
      route: '/preview/real-estate',
      tag: 'RERA Compliance & Chauffeured Visit',
    },
  }

  const current = demosMeta[activeDemo]

  return (
    <section className="py-24 border-b border-black/5 dark:border-white/10 bg-[#F7F5EF] dark:bg-[#141512]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A46A]/15 border border-[#C6A46A]/30 text-xs font-semibold text-[#8E6D3E] dark:text-[#C6A46A] mb-4">
              <Monitor className="w-3.5 h-3.5" />
              Viewport Testing Workstation
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#141512] dark:text-[#F5F0E7]">
              Multi-Device Experience Lab.
            </h2>
          </div>
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#8E6D3E] dark:text-[#C6A46A] hover:underline"
          >
            <span>Open Dedicated Testing Lab</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Workstation Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 mb-6 shadow-sm">
          {/* Trade Switcher Buttons */}
          <div className="flex flex-wrap gap-1.5">
            {(['salon', 'restaurant', 'clothing', 'dental', 'gym', 'real-estate'] as const).map((key) => {
              const item = demosMeta[key]
              const isSelected = activeDemo === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveDemo(key)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[#C6A46A] text-[#10110F] shadow-xs'
                      : 'bg-[#F7F5EF] dark:bg-[#121310] text-[#5A564F] dark:text-[#A8A49B] hover:text-[#141512] dark:hover:text-[#F5F0E7]'
                  }`}
                >
                  {item.trade}
                </button>
              )
            })}
          </div>

          {/* Viewport Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#F7F5EF] dark:bg-[#121310] p-1 rounded-xl">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-lg transition-colors ${
                deviceMode === 'desktop'
                  ? 'bg-white dark:bg-[#191A17] text-[#C6A46A] shadow-xs'
                  : 'text-[#8F8B82] hover:text-[#141512] dark:hover:text-[#F5F0E7]'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`p-1.5 rounded-lg transition-colors ${
                deviceMode === 'tablet'
                  ? 'bg-white dark:bg-[#191A17] text-[#C6A46A] shadow-xs'
                  : 'text-[#8F8B82] hover:text-[#141512] dark:hover:text-[#F5F0E7]'
              }`}
              title="Tablet 768px"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-lg transition-colors ${
                deviceMode === 'mobile'
                  ? 'bg-white dark:bg-[#191A17] text-[#C6A46A] shadow-xs'
                  : 'text-[#8F8B82] hover:text-[#141512] dark:hover:text-[#F5F0E7]'
              }`}
              title="Mobile 390px"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          {/* Direct Route Action */}
          <Link
            to={current.route}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C6A46A] text-[#10110F] text-xs font-bold hover:bg-[#B39054] transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Launch Fullscreen</span>
          </Link>
        </div>

        {/* Viewport Frame */}
        <div className="flex justify-center items-center py-4">
          <div
            className={`w-full transition-all duration-300 ${
              deviceMode === 'mobile'
                ? 'max-w-[390px] rounded-[44px] p-2 bg-[#121310] border-4 border-black/20 dark:border-white/10 shadow-2xl'
                : deviceMode === 'tablet'
                ? 'max-w-[768px] rounded-[32px] p-2 bg-[#121310] border-4 border-black/20 dark:border-white/10 shadow-2xl'
                : 'max-w-full rounded-2xl bg-[#121310] border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden'
            }`}
          >
            {/* Top Bar */}
            <div className="h-8 bg-[#191A17] px-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-[11px] font-mono text-[#A8A49B]">
                demo.pixora.digital{current.route}
              </span>
              <span className="text-[10px] font-mono text-[#C6A46A] uppercase">{current.tag}</span>
            </div>

            {/* Iframe View */}
            <div
              className={`bg-[#10110F] overflow-hidden ${
                deviceMode === 'mobile'
                  ? 'h-[640px] rounded-[36px]'
                  : deviceMode === 'tablet'
                  ? 'h-[680px] rounded-[24px]'
                  : 'h-[620px]'
              }`}
            >
              <iframe
                src={current.route}
                title={`${current.title} Preview`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 5. STUDIO SERVICES & CAPABILITIES ───────────────────────────────────────

function ServicesSection() {
  return (
    <section className="py-24 border-b border-black/5 dark:border-white/10 bg-[#FBF9F5] dark:bg-[#10110F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A46A]/15 border border-[#C6A46A]/30 text-xs font-semibold text-[#8E6D3E] dark:text-[#C6A46A] mb-6">
            <Zap className="w-3.5 h-3.5" />
            Studio Services & Scope
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] mb-6 text-[#141512] dark:text-[#F5F0E7]">
            Full-spectrum digital web engineering.
          </h2>
          <p className="text-lg text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
            From modern responsive storefronts to direct WhatsApp ordering carts and high-speed cloud infrastructure, we build digital assets that deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service, index) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 hover:border-[#C6A46A]/40 transition-all hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#C6A46A]">
                    0{index + 1}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#F7F5EF] dark:bg-[#121310] text-[#8E6D3E] dark:text-[#C6A46A] border border-black/5 dark:border-white/10">
                    {service.tier}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#141512] dark:text-[#F5F0E7] mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#8E6D3E] dark:text-[#C6A46A] font-semibold mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm text-[#5A564F] dark:text-[#A8A49B] leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 dark:border-white/10 text-xs text-[#6A665E] dark:text-[#A8A49B]">
                <strong className="text-[#141512] dark:text-[#F5F0E7]">Impact:</strong> {service.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 6. TRANSPARENT PRICING & SEPARATE BILLING ───────────────────────────────

function PricingSection() {
  return (
    <section className="py-24 border-b border-black/5 dark:border-white/10 bg-[#F7F5EF] dark:bg-[#141512]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8E6D3E] dark:text-[#C6A46A] mb-3 block">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-[#141512] dark:text-[#F5F0E7]">
            Clear, upfront pricing.
          </h2>
          <p className="text-base text-[#5A564F] dark:text-[#A8A49B] font-light">
            No hidden costs. Domain, hosting renewals, and third-party APIs are billed at actuals directly to client-owned accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                plan.highlight
                  ? 'bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] border-2 border-[#C6A46A] shadow-2xl relative'
                  : 'bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] border border-black/5 dark:border-white/10'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C6A46A] text-[#10110F] text-xs font-bold uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#141512] dark:text-[#F5F0E7]">{plan.name}</h3>
                <p className="text-xs text-[#5A564F] dark:text-[#A8A49B] mb-6">
                  {plan.tagline}
                </p>

                <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-black/5 dark:border-white/10">
                  <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-[#141512] dark:text-[#F5F0E7]">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#8F8B82]">{plan.suffix}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-[#444037] dark:text-[#DDD5C7]">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A46A] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsAppUrl(`Hello PIXORA DIGITAL! I'm interested in the ${plan.name} Package (${plan.price}). Could you provide a formal project scope & quote?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${
                  plan.highlight
                    ? 'bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F]'
                    : 'bg-[#F7F5EF] dark:bg-[#121310] text-[#141512] dark:text-[#F5F0E7] hover:bg-[#C6A46A] hover:text-[#10110F]'
                }`}
              >
                <span>Select {plan.name} Plan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 7. WHY CHOOSE PIXORA DIGITAL ─────────────────────────────────────────────

function WhyChooseUsSection() {
  const reasons = [
    {
      title: '100% Client Ownership Policy',
      desc: 'Your domain, hosting, and source code are registered directly in your name. We provide delegated co-setup with zero proprietary lock-in.',
      icon: ShieldCheck,
    },
    {
      title: 'Predictable 7-Day Sprint',
      desc: 'Our structured milestone calendar means you launch in 7 business days from asset sign-off, not weeks or months.',
      icon: Clock,
    },
    {
      title: 'Bespoke Non-Template Craft',
      desc: 'We never deploy cookie-cutter templates. Every trade layout is tailored with custom typography, spacing, and conversion funnels.',
      icon: Palette,
    },
    {
      title: 'Direct Hyderabad Engineering',
      desc: 'Speak directly with the software engineers writing your code. No middlemen, no junior subcontracting.',
      icon: Code2,
    },
  ]

  return (
    <section className="py-24 border-b border-black/5 dark:border-white/10 bg-[#FBF9F5] dark:bg-[#10110F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A46A]/15 border border-[#C6A46A]/30 text-xs font-semibold text-[#8E6D3E] dark:text-[#C6A46A] mb-4">
            <Check className="w-3.5 h-3.5" />
            The Agency Difference
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#141512] dark:text-[#F5F0E7]">
            Why Hyderabad businesses partner with PIXORA DIGITAL.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="p-8 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 hover:border-[#C6A46A]/40 transition-all hover:shadow-xl space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C6A46A]/15 flex items-center justify-center text-[#C6A46A]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#141512] dark:text-[#F5F0E7]">
                  {r.title}
                </h3>
                <p className="text-xs text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
                  {r.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── 8. CONTACT & INQUIRY (WITH TWO CONTACT NUMBERS) ──────────────────────────

function ContactSection() {
  const [formData, setFormData] = useState({
    businessCategory: 'Luxury Salon & Spa',
    name: '',
    phone: '',
    budget: 'Growth (₹9,000 onwards)',
    requirements: '',
    contactLine: 'line1', // 'line1' or 'line2'
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!formData.name.trim()) e.name = 'Please provide your full name'
    if (!formData.phone.trim() || formData.phone.length < 10) e.phone = 'Valid 10-digit phone number is required'
    if (!formData.requirements.trim()) e.requirements = 'Please tell us what you need for your website'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const targetNumber = formData.contactLine === 'line2' ? WHATSAPP_NUMBER_2 : WHATSAPP_NUMBER_1

    const message = `Hello PIXORA DIGITAL!

*New Website Project Inquiry:*
• Trade/Category: ${formData.businessCategory}
• Client Name: ${formData.name}
• Client Phone: ${formData.phone}
• Preferred Budget: ${formData.budget}

*Project Requirements:*
${formData.requirements}

Please share a proposal and next steps!`

    window.open(getWhatsAppUrl(message, targetNumber), '_blank')
    setSubmitted(true)
  }

  return (
    <section id="inquiry" className="py-24 relative bg-[#F7F5EF] dark:bg-[#141512]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Phone & WhatsApp Connections */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A46A]/15 border border-[#C6A46A]/30 text-xs font-semibold text-[#8E6D3E] dark:text-[#C6A46A]">
              <MessageSquare className="w-3.5 h-3.5" />
              Direct Studio Connections
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] text-[#141512] dark:text-[#F5F0E7]">
              Let's build something exceptional together.
            </h2>
            <p className="text-[#5A564F] dark:text-[#A8A49B] text-sm sm:text-base leading-relaxed font-light">
              Connect directly with our Hyderabad engineering team. We are available via direct call or WhatsApp on two dedicated lines.
            </p>

            {/* Contact Card 1 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C6A46A] block">
                    Contact Line 1
                  </span>
                  <span className="text-base font-bold text-[#141512] dark:text-[#F5F0E7]">
                    {PHONE_DISPLAY_1}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Online
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${PHONE_NUMBER_1}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] hover:bg-[#EFECE6] dark:hover:bg-[#252622] text-[#141512] dark:text-[#F5F0E7] text-xs font-bold transition-colors border border-black/5 dark:border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A46A]" />
                  <span>Call Line 1</span>
                </a>
                <a
                  href={getWhatsAppUrl(WA_MESSAGES.default, WHATSAPP_NUMBER_1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp 1</span>
                </a>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C6A46A] block">
                    Contact Line 2
                  </span>
                  <span className="text-base font-bold text-[#141512] dark:text-[#F5F0E7]">
                    {PHONE_DISPLAY_2}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Online
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${PHONE_NUMBER_2}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] hover:bg-[#EFECE6] dark:hover:bg-[#252622] text-[#141512] dark:text-[#F5F0E7] text-xs font-bold transition-colors border border-black/5 dark:border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A46A]" />
                  <span>Call Line 2</span>
                </a>
                <a
                  href={getWhatsAppUrl(WA_MESSAGES.default, WHATSAPP_NUMBER_2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp 2</span>
                </a>
              </div>
            </div>

            <div className="text-xs text-[#6A665E] dark:text-[#A8A49B] flex items-center gap-2 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#C6A46A]" />
              <span>Direct engineer response within 1 business hour.</span>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#191A17] rounded-3xl p-8 border border-black/5 dark:border-white/10 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#141512] dark:text-[#F5F0E7]">
                  WhatsApp Inquiry Dispatched!
                </h3>
                <p className="text-sm text-[#5A564F] dark:text-[#A8A49B] max-w-md mx-auto">
                  Your formatted project brief has been transferred to WhatsApp. Please tap Send in the chat to connect with our team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-xs font-bold text-[#141512] dark:text-[#F5F0E7] hover:bg-[#F7F5EF] dark:hover:bg-[#121310] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                      Trade / Business Category *
                    </label>
                    <select
                      value={formData.businessCategory}
                      onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] border border-black/5 dark:border-white/10 text-[#141512] dark:text-[#F5F0E7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A46A]"
                    >
                      <option>Luxury Salon & Spa</option>
                      <option>Heritage Restaurant & Dining</option>
                      <option>Designer Fashion Boutique</option>
                      <option>Architectural Furniture Showroom</option>
                      <option>Advanced Dental & Healthcare</option>
                      <option>High-Performance Athletic Gym</option>
                      <option>Luxury Real Estate & Villas</option>
                      <option>Supercar Detailing & PPF Studio</option>
                      <option>Cinematic Wedding Photography</option>
                      <option>Premier Coaching & Test Prep</option>
                      <option>Other Trade (Custom Website)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                      Target Budget Scope *
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] border border-black/5 dark:border-white/10 text-[#141512] dark:text-[#F5F0E7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A46A]"
                    >
                      <option>Starter (₹5,000 onwards)</option>
                      <option>Growth (₹9,000 onwards)</option>
                      <option>Custom Pro (₹15,000 onwards)</option>
                      <option>Bespoke Enterprise Scope</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] border ${
                        errors.name ? 'border-red-500' : 'border-black/5 dark:border-white/10'
                      } text-[#141512] dark:text-[#F5F0E7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A46A]`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] border ${
                        errors.phone ? 'border-red-500' : 'border-black/5 dark:border-white/10'
                      } text-[#141512] dark:text-[#F5F0E7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A46A]`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                    Send Inquiry To Contact Line:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, contactLine: 'line1' })}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all text-left ${
                        formData.contactLine === 'line1'
                          ? 'border-[#C6A46A] bg-[#C6A46A]/10 text-[#141512] dark:text-[#F5F0E7]'
                          : 'border-black/5 dark:border-white/10 bg-[#F7F5EF] dark:bg-[#121310] text-[#8F8B82]'
                      }`}
                    >
                      <span className="block font-mono text-[10px] text-[#C6A46A]">LINE 1</span>
                      <span>{PHONE_DISPLAY_1}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, contactLine: 'line2' })}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all text-left ${
                        formData.contactLine === 'line2'
                          ? 'border-[#C6A46A] bg-[#C6A46A]/10 text-[#141512] dark:text-[#F5F0E7]'
                          : 'border-black/5 dark:border-white/10 bg-[#F7F5EF] dark:bg-[#121310] text-[#8F8B82]'
                      }`}
                    >
                      <span className="block font-mono text-[10px] text-[#C6A46A]">LINE 2</span>
                      <span>{PHONE_DISPLAY_2}</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                    Website Goals & Requirements *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your business, essential features (e.g. online booking, WhatsApp catalog, portfolio, location map), and desired launch timeline..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] border ${
                      errors.requirements ? 'border-red-500' : 'border-black/5 dark:border-white/10'
                    } text-[#141512] dark:text-[#F5F0E7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A46A] resize-none`}
                  />
                  {errors.requirements && <p className="text-red-500 text-xs mt-1">{errors.requirements}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#C6A46A]/20 transition-all hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry & Connect on WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-[#8F8B82]">
                  🔒 Your data is kept strictly confidential. You connect directly with our engineering studio.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── MASTER HOMEPAGE EXPORT ───────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#10110F] text-[#141512] dark:text-[#F5F0E7] transition-colors selection:bg-[#C6A46A] selection:text-[#10110F]">
      <HeroSection />
      <StudioIntroSection />
      <FeaturedDemosSection />
      <InteractiveDeviceLabSection />
      <ServicesSection />
      <SevenDayProcess />
      <OwnershipSection />
      <PricingSection />
      <WhyChooseUsSection />
      <ContactSection />
    </div>
  )
}
