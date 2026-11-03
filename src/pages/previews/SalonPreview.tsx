import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Star,
  ExternalLink,
  MessageSquare
} from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../../lib/constants'

const salonServices = [
  {
    category: 'Haute Coiffure & Color',
    items: [
      { name: 'Signature Precision Cut & Sculpt', duration: '60 min', price: '₹1,800', desc: 'Custom diagnostic consultation, botanical wash, bespoke cut, and signature blowout.' },
      { name: 'French Balayage & Glossing Ritual', duration: '180 min', price: '₹6,500', desc: 'Hand-painted dimension using ammonia-free L’Oréal Professionnel with bonding gloss.' },
      { name: 'K18 Molecular Biomimetic Repair', duration: '45 min', price: '₹2,400', desc: 'Reverses chemical damage and heat stress at the polypeptide chain level.' },
      { name: 'Japanese Botanical Head Spa', duration: '75 min', price: '₹3,200', desc: 'Micro-mist scalp purification, acupressure drainage, and herbal steam infusion.' },
    ],
  },
  {
    category: 'Skin & Aesthetic Rituals',
    items: [
      { name: 'Hydra-Infusion Radiance Facial', duration: '75 min', price: '₹4,500', desc: 'Deep vortex pore extraction, hyaluronic acid peptide infusion, and lymphatic cooling.' },
      { name: '24K Liquid Gold Cellular Glow', duration: '90 min', price: '₹5,800', desc: 'Pure colloidal gold micro-massage to stimulate cellular regeneration and bridal glow.' },
      { name: 'Oxy-Dermabrasion Detoxification', duration: '60 min', price: '₹3,600', desc: 'Hyperbaric medical-grade oxygen jet targeting urban environmental pollutants.' },
    ],
  },
  {
    category: 'Bridal & Festive Couture',
    items: [
      { name: 'Haute Bridal Makeover Consultation', duration: '240 min', price: '₹18,500', desc: 'Airbrush HD application, bespoke hair ornamentation, and drape styling.' },
      { name: 'Pre-Wedding 3-Day Radiance Package', duration: '3 Days', price: '₹28,000', desc: 'Comprehensive full-body polish, collagen facial, caviar hair therapy, and manicures.' },
    ],
  },
]

const masterStylists = [
  {
    name: 'Elena Vance',
    title: 'Creative Director & Master Colorist',
    experience: '12 Years (Trained Vidal Sassoon London)',
    specialty: 'Balayage & Editorial Cuts',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=750&fit=crop',
  },
  {
    name: 'Sameer Khan',
    title: 'Senior Hair Artisan',
    experience: '8 Years (L’Oréal Color Trophy Finalist)',
    specialty: 'Texture Reform & Japanese Head Spa',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop',
  },
  {
    name: 'Tara Mehta',
    title: 'Lead Aesthetician & Bridal Stylist',
    experience: '9 Years (CIDESCO Certified)',
    specialty: 'Hydra-Facials & HD Bridal Finishes',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=750&fit=crop',
  },
]

const lookbookGallery = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&h=900&fit=crop',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&h=900&fit=crop',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&h=900&fit=crop',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&h=900&fit=crop',
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=700&h=900&fit=crop',
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=700&h=900&fit=crop',
]

export default function SalonPreview() {
  const [activeCategory, setActiveCategory] = useState('Haute Coiffure & Color')
  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    service: 'Signature Precision Cut & Sculpt',
    stylist: 'Elena Vance',
    date: '',
    time: '11:00 AM',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!booking.name || !booking.phone || !booking.date) return
    const msg = `Hello Maison de Beauté!
I would like to reserve a VIP salon appointment:
• Client: ${booking.name}
• Phone: ${booking.phone}
• Service: ${booking.service}
• Preferred Stylist: ${booking.stylist}
• Date: ${booking.date} at ${booking.time}
Please confirm slot availability.`

    window.open(getWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  const currentCategory = salonServices.find((c) => c.category === activeCategory) || salonServices[0]

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1615] font-sans selection:bg-[#C5A880] selection:text-white">
      {/* Top Agency Demo Navigation Bar */}
      <div className="bg-[#1A1615] text-[#E8DFD8] px-4 py-2 text-xs flex items-center justify-between border-b border-[#2D2624]">
        <Link to="/our-work" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PIXORA Showcase</span>
        </Link>
        <span className="hidden sm:inline font-mono tracking-widest uppercase text-[10px] text-[#A6998E]">
          Industry Showcase: Salon & Aesthetic Wellness Studio
        </span>
        <a
          href={getWhatsAppUrl("Hello PIXORA DIGITAL! I explored your Maison de Beauté Salon demo. I'd like to get a quote to build a website for my salon business.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C5A880] hover:underline font-semibold"
        >
          Build Website for My Salon →
        </a>
      </div>

      {/* Salon Top Info Strip */}
      <div className="border-b border-[#E8DFD8] bg-[#F4EFEB] px-4 py-2.5 text-xs text-[#5C534D]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              Road No. 10, Banjara Hills, Hyderabad
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              Tue – Sun: 10:00 AM – 8:00 PM (Mondays Closed)
            </span>
          </div>
          <span className="font-semibold text-[#1A1615] flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
            Appointments: {PHONE_DISPLAY}
          </span>
        </div>
      </div>

      {/* Salon Main Header */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif-editorial text-2xl sm:text-3xl tracking-[0.18em] uppercase text-[#1A1615] font-semibold">
              Maison de Beauté
            </span>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#8C7A6B]">
              Atelier & Aesthetic Spa • Banjara Hills
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#5C534D]">
            <a href="#services" className="hover:text-[#1A1615] transition-colors">Services Menu</a>
            <a href="#stylists" className="hover:text-[#1A1615] transition-colors">Master Artisans</a>
            <a href="#lookbook" className="hover:text-[#1A1615] transition-colors">Lookbook</a>
            <a href="#reserve" className="hover:text-[#1A1615] transition-colors">Private Booking</a>
          </nav>

          <a
            href="#reserve"
            className="px-5 py-2.5 rounded-full bg-[#1A1615] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#C5A880] transition-colors"
          >
            Reserve Suite
          </a>
        </div>
      </header>

      {/* Hero: Luxury Magazine Editorial */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs uppercase font-mono tracking-[0.3em] text-[#C5A880] font-bold">
              Haute Coiffure & Botanical Skincare
            </span>
            <h1 className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-[#1A1615] leading-[0.95]">
              The architecture of <span className="italic font-serif-luxury text-[#8C6D4A]">refined beauty</span> & modern hair.
            </h1>
            <p className="text-base sm:text-lg text-[#5C534D] leading-relaxed max-w-xl font-light">
              An intimate sanctuary in Banjara Hills dedicated to bespoke French balayage, biological cellular facials, and couture bridal aesthetics.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#reserve"
                className="px-8 py-4 rounded-full bg-[#1A1615] text-[#FAF7F2] text-xs uppercase font-bold tracking-widest hover:bg-[#C5A880] transition-colors shadow-lg"
              >
                Reserve Your Appointment
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full border border-[#D5C7B8] text-[#1A1615] text-xs uppercase font-bold tracking-widest hover:bg-[#EFE7DE] transition-colors"
              >
                Explore Treatment Menu
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=1000&fit=crop"
                alt="Maison de Beaute Model"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8DFD8]">Featured Atelier Service</span>
                <p className="font-serif-editorial text-2xl font-normal">French Balayage & Glossing Ritual</p>
                <p className="text-xs text-[#E8DFD8] mt-1">Starting from ₹6,500 • Master Stylist Elena Vance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Menu Section */}
      <section id="services" className="py-24 bg-[#F4EFEB] border-t border-[#E8DFD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A880] font-bold block mb-2">
              Atelier Rituals
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#1A1615]">
              Curated Services & Investment
            </h2>
            <p className="text-sm text-[#5C534D] mt-3">
              Every appointment begins with a one-on-one diagnostic consultation, complimentary organic botanical refreshment, and post-service home regimen guidance.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#D5C7B8]">
            {salonServices.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeCategory === cat.category
                    ? 'bg-[#1A1615] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#FAF7F2] text-[#5C534D] border border-[#D5C7B8] hover:border-[#1A1615]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Services List */}
          <div className="grid md:grid-cols-2 gap-8">
            {currentCategory.items.map((item) => (
              <div
                key={item.name}
                className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E8DFD8] hover:border-[#C5A880] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif-editorial text-xl sm:text-2xl font-semibold text-[#1A1615]">
                      {item.name}
                    </h3>
                    <span className="font-mono text-sm font-bold text-[#8C6D4A] flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#8C7A6B] block mb-3">
                    Duration: {item.duration}
                  </span>
                  <p className="text-xs text-[#5C534D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8DFD8] flex items-center justify-between">
                  <span className="text-[11px] text-[#8C7A6B]">Includes Diagnostic Wash</span>
                  <a
                    href={getWhatsAppUrl(`Hello Maison de Beauté! I would like to book the "${item.name}" (${item.price}). Please share available slots.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#1A1615] hover:text-[#C5A880] flex items-center gap-1"
                  >
                    <span>Book via WhatsApp</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Stylists Roster */}
      <section id="stylists" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A880] font-bold block mb-2">
            Artisanal Pedigree
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#1A1615]">
            Meet Our Master Stylists
          </h2>
          <p className="text-sm text-[#5C534D] mt-3">
            Trained in London, Paris, and Milan, our senior artisans bring bespoke precision and international editorial techniques to every styling suite.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {masterStylists.map((stylist) => (
            <div key={stylist.name} className="group bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8DFD8] shadow-sm">
              <div className="aspect-[3/4] overflow-hidden bg-[#E8DFD8]">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif-editorial text-2xl font-bold text-[#1A1615]">{stylist.name}</h3>
                <p className="text-xs text-[#8C6D4A] font-semibold mt-1">{stylist.title}</p>
                <p className="text-xs text-[#5C534D] mt-3">{stylist.experience}</p>
                <div className="mt-4 pt-4 border-t border-[#E8DFD8] text-[11px] text-[#8C7A6B]">
                  <strong>Specialty:</strong> {stylist.specialty}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lookbook Gallery */}
      <section id="lookbook" className="py-20 bg-[#1A1615] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A880] font-bold block mb-2">
                Atelier Portfolio
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl">
                Editorial Transformations
              </h2>
            </div>
            <p className="text-xs font-mono text-[#A6998E]">
              Shot on location at Banjara Hills Salon Studio
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {lookbookGallery.map((img, i) => (
              <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                <img
                  src={img}
                  alt={`Editorial Lookbook ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Reservation Suite */}
      <section id="reserve" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#D5C7B8] shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A880] font-bold block mb-2">
              Private Reservation
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#1A1615]">
              Request an Appointment Suite
            </h2>
            <p className="text-xs sm:text-sm text-[#5C534D] mt-2">
              Select your desired ritual and stylist. We will review availability and dispatch an instant confirmation to your WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#C5A880] mx-auto" />
              <h3 className="font-serif-editorial text-3xl font-bold">Reservation Dispatched</h3>
              <p className="text-xs text-[#5C534D] max-w-md mx-auto">
                Your reservation inquiry has been opened on WhatsApp. Please tap send to finalize your consultation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full border border-[#D5C7B8] text-xs font-semibold hover:bg-[#EFE7DE]"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#5C534D] mb-2">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Rao"
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFEB] border border-[#D5C7B8] text-sm text-[#1A1615] focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#5C534D] mb-2">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFEB] border border-[#D5C7B8] text-sm text-[#1A1615] focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#5C534D] mb-2">
                    Desired Ritual / Service
                  </label>
                  <select
                    value={booking.service}
                    onChange={(e) => setBooking({ ...booking, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFEB] border border-[#D5C7B8] text-sm text-[#1A1615] focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  >
                    <option>Signature Precision Cut & Sculpt (₹1,800)</option>
                    <option>French Balayage & Glossing Ritual (₹6,500)</option>
                    <option>K18 Molecular Biomimetic Repair (₹2,400)</option>
                    <option>Japanese Botanical Head Spa (₹3,200)</option>
                    <option>Hydra-Infusion Radiance Facial (₹4,500)</option>
                    <option>24K Liquid Gold Cellular Glow (₹5,800)</option>
                    <option>Haute Bridal Makeover Consultation (₹18,500)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#5C534D] mb-2">
                    Preferred Master Stylist
                  </label>
                  <select
                    value={booking.stylist}
                    onChange={(e) => setBooking({ ...booking, stylist: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFEB] border border-[#D5C7B8] text-sm text-[#1A1615] focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  >
                    <option>Elena Vance (Creative Director)</option>
                    <option>Sameer Khan (Senior Hair Artisan)</option>
                    <option>Tara Mehta (Lead Aesthetician)</option>
                    <option>Any Senior Artisan Available</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#5C534D] mb-2">
                    Date of Visit *
                  </label>
                  <input
                    type="date"
                    required
                    value={booking.date}
                    onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFEB] border border-[#D5C7B8] text-sm text-[#1A1615] focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#5C534D] mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    value={booking.time}
                    onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFEB] border border-[#D5C7B8] text-sm text-[#1A1615] focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  >
                    <option>10:30 AM (Morning Slot)</option>
                    <option>12:00 PM (Midday)</option>
                    <option>02:30 PM (Afternoon)</option>
                    <option>04:30 PM (Evening)</option>
                    <option>06:30 PM (Twilight)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#1A1615] hover:bg-[#C5A880] text-[#FAF7F2] font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-lg"
              >
                Confirm & Dispatch to WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Salon Footer */}
      <footer className="bg-[#1A1615] text-[#8C7A6B] py-12 border-t border-[#2D2624] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Maison de Beauté Atelier. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#A6998E]">Sample Business Website Concept engineered by PIXORA DIGITAL</p>
        </div>
      </footer>
    </div>
  )
}
