import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
  Building2,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Maximize2,
  FileText,
  Car,
  Compass
} from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../../lib/constants'

interface Estate {
  id: string
  title: string
  location: string
  type: string
  carpetArea: string
  price: string
  reraNumber: string
  specs: string[]
  image: string
}

const estates: Estate[] = [
  {
    id: 'estate-1',
    title: 'The Sovereign Sky Villa',
    location: 'Neopolis, Kokapet, Hyderabad',
    type: '5BHK Single-Floor Sky Residence',
    carpetArea: '6,450 Sq.Ft (12.5 Ft Ceiling Height)',
    price: '₹5.85 Cr onwards',
    reraNumber: 'P02400007812',
    specs: ['Private heated sky plunge pool on cantilever deck', '4 reserved basement EV-charging parking bays', 'Dedicated service entrance & separate maid suite', 'Schuco German double-glazed acoustic facade'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&h=750&fit=crop',
  },
  {
    id: 'estate-2',
    title: 'The Verdant Lakefront Gated Estate',
    location: 'Tellapur, Gachibowli Extension',
    type: '4BHK Independent Triplex Villa',
    carpetArea: '5,200 Sq.Ft on 420 Sq.Yd Plot',
    price: '₹4.40 Cr onwards',
    reraNumber: 'P02400006934',
    specs: ['Private landscaped Zen garden with water cascade', 'Private hydraulic internal home elevator', 'Italian Statuario marble across living & dining suites', 'Clubhouse with Olympic swimming pool & tennis clay court'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&h=750&fit=crop',
  },
  {
    id: 'estate-3',
    title: 'The Zenith Crown Penthouse',
    location: 'Financial District, Nanakramguda',
    type: '6BHK Duplex Penthouse (Top 2 Floors)',
    carpetArea: '9,200 Sq.Ft Panoramic Terrace',
    price: '₹9.20 Cr onwards',
    reraNumber: 'P02400008450',
    specs: ['360° unobstructed horizon views over Golconda & Hitec City', 'Custom temperature-controlled wine cellar & cigar lounge', 'Private double-height grand foyer with brass spiral stair', 'Comprehensive smart home automation & biometric locks'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&h=750&fit=crop',
  },
]

export default function RealEstatePreview() {
  const [siteVisit, setSiteVisit] = useState({
    name: '',
    phone: '',
    estate: 'The Sovereign Sky Villa (Neopolis)',
    pickupType: 'Complimentary Chauffeured Mercedes Cab (Home Pickup)',
    date: '',
    time: '11:00 AM',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSiteVisit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!siteVisit.name || !siteVisit.phone || !siteVisit.date) return
    const msg = `Hello The Elevation Group!
I would like to schedule a private site visit & walkthrough:
• Visitor Name: ${siteVisit.name}
• Contact: ${siteVisit.phone}
• Selected Property: ${siteVisit.estate}
• Transit Preference: ${siteVisit.pickupType}
• Preferred Date & Time: ${siteVisit.date} at ${siteVisit.time}
Please confirm appointment and send RERA brochure PDF.`

    window.open(getWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#090C15] text-[#F6F4F0] font-sans selection:bg-[#C5A880] selection:text-black">
      {/* Top Agency Demo Navigation Bar */}
      <div className="bg-[#04060B] text-[#8C92A4] px-4 py-2 text-xs flex items-center justify-between border-b border-[#181E30]">
        <Link to="/our-work" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PIXORA Showcase</span>
        </Link>
        <span className="hidden sm:inline font-mono tracking-widest uppercase text-[10px] text-[#C5A880]">
          Industry Showcase: Luxury Real Estate & RERA Gated Communities
        </span>
        <a
          href={getWhatsAppUrl("Hello PIXORA DIGITAL! I explored your Elevation Group Real Estate demo. I'd like to build an ultra-luxury real estate website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C5A880] hover:underline font-semibold"
        >
          Build Website for My Realty Project →
        </a>
      </div>

      {/* RERA Approval Strip */}
      <div className="border-b border-[#181E30] bg-[#0E1322] px-4 py-2.5 text-xs text-[#8C92A4]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              100% HMDA Approved & Telangana RERA Registered Projects
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
              100% 100% Vastu Compliant Architectural Floorplans
            </span>
          </div>
          <span className="font-semibold text-white flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
            Private Sales Suite: {PHONE_DISPLAY}
          </span>
        </div>
      </div>

      {/* Real Estate Header */}
      <header className="sticky top-0 z-40 bg-[#090C15]/95 backdrop-blur-md border-b border-[#181E30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif-cinzel text-xl sm:text-2xl tracking-[0.2em] text-white font-bold">
              THE ELEVATION GROUP
            </span>
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#C5A880]">
              Ultra-Luxury Residences & Estates • Hyderabad
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-[#8C92A4]">
            <a href="#estates" className="hover:text-white transition-colors">Residential Portfolio</a>
            <a href="#amenities" className="hover:text-white transition-colors">Clubhouse Amenities</a>
            <a href="#visit" className="hover:text-white transition-colors">Chauffeured Site Visit</a>
          </nav>

          <a
            href="#visit"
            className="px-5 py-2.5 rounded-full bg-[#C5A880] text-black text-xs font-bold tracking-wider uppercase hover:bg-amber-300 transition-colors shadow-lg"
          >
            Book Site Visit
          </a>
        </div>
      </header>

      {/* Hero: High-Rise Twilight View */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#181E30]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=1000&fit=crop')] bg-cover bg-center brightness-[0.3]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090C15] via-transparent to-black/50" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6 pt-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-xs font-mono tracking-widest text-[#C5A880] uppercase">
            <Building2 className="w-3.5 h-3.5" />
            Neopolis & Kokapet Ultra-Luxury Living
          </span>

          <h1 className="font-serif-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            ARCHITECTURE OF EMINENCE. <br />
            <span className="text-[#C5A880] italic font-serif-luxury">LIVING BEYOND BOUNDARIES.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B0B7C6] max-w-2xl mx-auto font-light leading-relaxed">
            Curated gated estates and single-floor sky villas starting from 5,200 Sq.Ft. Engineered with Schuco acoustic facades, private plunge pools, and private elevators.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#visit"
              className="px-8 py-4 rounded-full bg-[#C5A880] hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-widest transition-colors shadow-xl"
            >
              Book Chauffeured Site Visit
            </a>
            <a
              href="#estates"
              className="px-8 py-4 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Explore Sky Villas
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-lg mx-auto">
            <div>
              <span className="font-serif-cinzel text-3xl font-bold text-white block">₹4.4 Cr</span>
              <span className="text-xs text-[#8C92A4]">Starting Investment</span>
            </div>
            <div>
              <span className="font-serif-cinzel text-3xl font-bold text-white block">12.5 Ft</span>
              <span className="text-xs text-[#8C92A4]">Clear Ceiling Height</span>
            </div>
            <div>
              <span className="font-serif-cinzel text-3xl font-bold text-white block">100%</span>
              <span className="text-xs text-[#8C92A4]">RERA Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Portfolio Showcase */}
      <section id="estates" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#181E30]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] font-bold block mb-2">
              Current Master Releases
            </span>
            <h2 className="font-serif-cinzel text-3xl sm:text-5xl font-bold">
              Available Landmark Residences
            </h2>
          </div>
          <p className="text-xs font-mono text-[#8C92A4]">
            Possession Scheduled: Q4 2026 – Q2 2027 • Direct Developer Pricing
          </p>
        </div>

        <div className="space-y-16">
          {estates.map((estate, idx) => (
            <article
              key={estate.id}
              className="grid lg:grid-cols-12 gap-8 p-8 rounded-3xl bg-[#0E1322] border border-[#181E30] hover:border-[#C5A880]/50 transition-colors items-center"
            >
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/10 group">
                  <img
                    src={estate.image}
                    alt={estate.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={`lg:col-span-5 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="text-[11px] font-mono text-[#C5A880] uppercase tracking-wider block mb-1">
                    {estate.type} • {estate.location}
                  </span>
                  <h3 className="font-serif-cinzel text-2xl sm:text-3xl font-bold text-white">
                    {estate.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="font-mono text-lg font-bold text-[#C5A880]">{estate.price}</span>
                    <span className="text-xs text-[#8C92A4]">| {estate.carpetArea}</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-[#181E30]">
                  <p className="text-xs font-mono text-[#8C92A4] uppercase tracking-wider">
                    Architectural Specifications
                  </p>
                  {estate.specs.map((spec) => (
                    <div key={spec} className="flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A880] flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#8C92A4]">
                    RERA: {estate.reraNumber}
                  </span>
                  <a
                    href={getWhatsAppUrl(`Hello The Elevation Group! I would like to receive the floor plans, brochure, and price sheet for "${estate.title}" (${estate.location}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C5A880] hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Download Brochure PDF</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Chauffeured Site Visit Suite */}
      <section id="visit" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0E1322] rounded-3xl p-8 sm:p-12 border border-[#C5A880]/30 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] font-bold block mb-2">
              VIP Experience
            </span>
            <h2 className="font-serif-cinzel text-3xl sm:text-5xl font-bold">
              Schedule Chauffeured Site Visit
            </h2>
            <p className="text-xs sm:text-sm text-[#8C92A4] mt-2">
              We provide complimentary doorstep Mercedes / BMW transit from any location in Hyderabad directly to our show suite.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#C5A880] mx-auto" />
              <h3 className="font-serif-cinzel text-2xl font-bold">Site Visit Itinerary Formatted!</h3>
              <p className="text-xs text-[#8C92A4] max-w-md mx-auto">
                Your private walkthrough request has been sent to WhatsApp. Our relationship manager will confirm your pickup time and driver details.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white/5"
              >
                Schedule Another Visit
              </button>
            </div>
          ) : (
            <form onSubmit={handleSiteVisit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#8C92A4] mb-2">
                    Visitor Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Ramana Murthy"
                    value={siteVisit.name}
                    onChange={(e) => setSiteVisit({ ...siteVisit, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090C15] border border-[#181E30] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#8C92A4] mb-2">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={siteVisit.phone}
                    onChange={(e) => setSiteVisit({ ...siteVisit, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090C15] border border-[#181E30] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#8C92A4] mb-2">
                    Selected Residence
                  </label>
                  <select
                    value={siteVisit.estate}
                    onChange={(e) => setSiteVisit({ ...siteVisit, estate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090C15] border border-[#181E30] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  >
                    <option>The Sovereign Sky Villa (Neopolis)</option>
                    <option>The Verdant Lakefront Estate (Tellapur)</option>
                    <option>The Zenith Crown Penthouse (Kokapet)</option>
                    <option>All Projects Comprehensive Tour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#8C92A4] mb-2">
                    Transit Preference
                  </label>
                  <select
                    value={siteVisit.pickupType}
                    onChange={(e) => setSiteVisit({ ...siteVisit, pickupType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090C15] border border-[#181E30] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  >
                    <option>Complimentary Chauffeured Mercedes Cab (Home Pickup)</option>
                    <option>Airport Direct Chauffeur (RGIA Hyderabad)</option>
                    <option>Self-Drive (Reserved VIP Parking Bay at Sales Gallery)</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#8C92A4] mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={siteVisit.date}
                    onChange={(e) => setSiteVisit({ ...siteVisit, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090C15] border border-[#181E30] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#8C92A4] mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={siteVisit.time}
                    onChange={(e) => setSiteVisit({ ...siteVisit, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090C15] border border-[#181E30] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  >
                    <option>10:30 AM (Morning Natural Light)</option>
                    <option>01:30 PM (Midday)</option>
                    <option>04:30 PM (Golden Hour Sunset Tour)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#C5A880] hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-lg"
              >
                Confirm Chauffeured Visit via WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#04060B] text-[#5C6274] py-12 border-t border-[#181E30] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} The Elevation Group Residences. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#8C92A4]">Sample Business Website Concept engineered by PIXORA DIGITAL</p>
        </div>
      </footer>
    </div>
  )
}
