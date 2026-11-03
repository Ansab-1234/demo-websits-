import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Car,
  ChevronRight,
  Flame,
  Award,
  Zap
} from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../../lib/constants'

interface DetailingPackage {
  name: string
  thickness: string
  hardness: string
  warranty: string
  pricing: Record<string, string>
  features: string[]
  isFlagship?: boolean
}

const packages: DetailingPackage[] = [
  {
    name: 'Stealth Shield TPU Self-Healing PPF',
    thickness: '200 Microns (8.5 Mil)',
    hardness: 'Instant Thermal Scratch Healing',
    warranty: '7-Year Anti-Yellowing Warranty',
    pricing: {
      Hatchback: '₹68,000',
      'Executive Sedan': '₹85,000',
      'Luxury SUV': '₹98,000',
      'Exotic Supercar': '₹1,25,000',
    },
    features: [
      'Full exterior body panel wrapped in hydrophobic aliphatic TPU',
      'Instant scratch recovery under warm sunlight or warm water',
      'Repels stone chips, road debris, bird droppings, acid rain',
      'Includes headlights, door cups, and piano black pillar protection',
      'Digital computerized precision plotter pre-cut panels',
    ],
    isFlagship: true,
  },
  {
    name: '9H Matrix Matrix Ceramic Coating',
    thickness: '4-Layer Graphene Infused',
    hardness: '9H Pencil Hardness Certified',
    warranty: '3-Year Hydrophobic Guarantee',
    pricing: {
      Hatchback: '₹22,000',
      'Executive Sedan': '₹28,000',
      'Luxury SUV': '₹34,000',
      'Exotic Supercar': '₹48,000',
    },
    features: [
      '3-stage dual action Rupes paint correction (swirl removal up to 92%)',
      'Super-hydrophobic lotus leaf contact angle (>110° water beading)',
      'High mirror gloss enhancement with UV discoloration defense',
      'Includes alloy wheel barrel coating & windshield glass treatment',
      'Infrared heat-lamp thermal curing chamber protocol',
    ],
  },
  {
    name: 'Bespoke Interior Leather Reconditioning',
    thickness: 'Deep Fiber Extraction',
    hardness: 'Ceramic Leather Shield',
    warranty: '12-Month Stain Resistance',
    pricing: {
      Hatchback: '₹12,000',
      'Executive Sedan': '₹16,000',
      'Luxury SUV': '₹19,500',
      'Exotic Supercar': '₹26,000',
    },
    features: [
      'Steam sterilization & enzyme extraction of carpets and headliner',
      'pH-balanced conditioning of Nappa and Dakota leather upholstery',
      'Anti-microbial AC duct ozone fumigation treatment',
      'Ceramic coating on leather steering wheel and touch panels',
    ],
  },
]

export default function AutomobilePreview() {
  const [vehicleSegment, setVehicleSegment] = useState<'Hatchback' | 'Executive Sedan' | 'Luxury SUV' | 'Exotic Supercar'>('Luxury SUV')
  const [bayBooking, setBayBooking] = useState({
    name: '',
    phone: '',
    carModel: 'BMW 5 Series / Audi A6',
    selectedPackage: 'Stealth Shield TPU Self-Healing PPF',
    date: '',
    time: '10:00 AM',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleBaySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!bayBooking.name || !bayBooking.phone || !bayBooking.date) return
    const msg = `Hello Apex Performance Labs!
I would like to book a detailing inspection bay:
• Client Name: ${bayBooking.name}
• Contact: ${bayBooking.phone}
• Vehicle Model: ${bayBooking.carModel} (${vehicleSegment})
• Selected Treatment: ${bayBooking.selectedPackage}
• Date: ${bayBooking.date} at ${bayBooking.time}
Please confirm bay reservation and inspection slot!`

    window.open(getWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#060709] text-[#E5E7EB] font-sans selection:bg-[#E11D48] selection:text-white">
      {/* Top Agency Demo Navigation Bar */}
      <div className="bg-[#030405] text-[#828896] px-4 py-2 text-xs flex items-center justify-between border-b border-[#14161D]">
        <Link to="/our-work" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PIXORA Showcase</span>
        </Link>
        <span className="hidden sm:inline font-mono tracking-widest uppercase text-[10px] text-[#E11D48]">
          Industry Showcase: Automobile Detailing, 9H Ceramic & TPU PPF Studio
        </span>
        <a
          href={getWhatsAppUrl("Hello PIXORA DIGITAL! I explored your Apex Detailing Studio demo. I'd like to build a high-performance auto detailing website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E11D48] hover:underline font-semibold"
        >
          Build Website for My Studio →
        </a>
      </div>

      {/* Lab Clean Room Strip */}
      <div className="border-b border-[#14161D] bg-[#0A0C11] px-4 py-2.5 text-xs text-[#828896]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
              Road No. 36, Jubilee Hills, Hyderabad
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E11D48]" />
              Positive-Pressure Dust-Free Application Bay Certified
            </span>
          </div>
          <span className="font-semibold text-white flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#E11D48]" />
            Inspection Hotline: {PHONE_DISPLAY}
          </span>
        </div>
      </div>

      {/* Detailing Header */}
      <header className="sticky top-0 z-40 bg-[#060709]/95 backdrop-blur-md border-b border-[#14161D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E11D48] text-white flex items-center justify-center font-black text-lg shadow-md shadow-rose-600/30">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display-tech text-xl tracking-wider text-white font-bold uppercase">
                APEX LABS
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#E11D48]">
                Ceramic Surface & Paint Protection Studio
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-[#828896]">
            <a href="#packages" className="hover:text-white transition-colors">Surface Defense</a>
            <a href="#process" className="hover:text-white transition-colors">5-Stage Decon</a>
            <a href="#booking" className="hover:text-white transition-colors">Reserve Bay</a>
          </nav>

          <a
            href="#booking"
            className="px-5 py-2.5 rounded-full bg-[#E11D48] hover:bg-rose-600 text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-md shadow-rose-600/25"
          >
            Book Paint Inspection
          </a>
        </div>
      </header>

      {/* Hero: Supercar Under Inspection Lights */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#14161D]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&h=1000&fit=crop')] bg-cover bg-center brightness-[0.22]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-black/60" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6 pt-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E11D48]/15 border border-[#E11D48]/30 text-xs font-mono tracking-widest text-[#E11D48] uppercase">
            <Car className="w-3.5 h-3.5" />
            Extreme Hydrophobic Protection & Swirl Removal
          </span>

          <h1 className="font-display-tech text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] uppercase">
            MOLECULAR PAINT DEFENSE. <br />
            <span className="text-[#E11D48]">9H GRAPHENE CERAMIC</span> & PPF.
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto font-light leading-relaxed">
            Hyderabad’s premier dust-free detailing clean room. Protecting high-end vehicles with self-healing optical TPU films and laboratory-grade graphene coatings.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#booking"
              className="px-8 py-4 rounded-full bg-[#E11D48] hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-xl shadow-rose-900/30"
            >
              Reserve Detailing Bay Slot
            </a>
            <a
              href="#packages"
              className="px-8 py-4 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Review Vehicle Pricing
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-lg mx-auto">
            <div>
              <span className="font-display-tech text-3xl font-bold text-white block">99.4 GU</span>
              <span className="text-xs text-[#828896]">Gloss Unit Rating</span>
            </div>
            <div>
              <span className="font-display-tech text-3xl font-bold text-white block">9H</span>
              <span className="text-xs text-[#828896]">Pencil Hardness</span>
            </div>
            <div>
              <span className="font-display-tech text-3xl font-bold text-white block">7 Yrs</span>
              <span className="text-xs text-[#828896]">PPF Film Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Segment-Based Pricing Engine */}
      <section id="packages" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#14161D]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E11D48] font-bold block mb-2">
              Vehicle Segment Pricing Engine
            </span>
            <h2 className="font-display-tech text-3xl sm:text-5xl font-bold uppercase">
              Select Your Vehicle Class
            </h2>
          </div>
          {/* Segment Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {(['Hatchback', 'Executive Sedan', 'Luxury SUV', 'Exotic Supercar'] as const).map((seg) => (
              <button
                key={seg}
                onClick={() => setVehicleSegment(seg)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  vehicleSegment === seg
                    ? 'bg-[#E11D48] text-white font-bold shadow-md'
                    : 'bg-[#0E1117] text-[#828896] border border-[#1E222D] hover:text-white'
                }`}
              >
                {seg}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                pkg.isFlagship
                  ? 'bg-[#0E1117] border-2 border-[#E11D48] shadow-2xl relative'
                  : 'bg-[#0A0C11] border border-[#14161D]'
              }`}
            >
              {pkg.isFlagship && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#E11D48] text-white text-xs font-mono font-bold uppercase tracking-wider">
                  Ultimate Armor
                </div>
              )}

              <div>
                <h3 className="font-display-tech text-xl font-bold text-white mb-2">{pkg.name}</h3>
                
                <div className="my-4 py-3 border-y border-[#1E222D] space-y-1 text-xs text-[#9CA3AF]">
                  <p><strong>Film Spec:</strong> {pkg.thickness}</p>
                  <p><strong>Hardness:</strong> {pkg.hardness}</p>
                  <p><strong>Warranty:</strong> {pkg.warranty}</p>
                </div>

                <div className="mb-6">
                  <span className="text-[10px] font-mono text-[#828896] uppercase block">
                    {vehicleSegment} Pricing
                  </span>
                  <span className="font-display-tech text-4xl font-bold text-white">
                    {pkg.pricing[vehicleSegment]}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                      <CheckCircle2 className="w-4 h-4 text-[#E11D48] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsAppUrl(`Hello Apex Labs! I would like to book "${pkg.name}" for my ${vehicleSegment} (${pkg.pricing[vehicleSegment]}). Please check bay availability.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  pkg.isFlagship
                    ? 'bg-[#E11D48] hover:bg-rose-600 text-white shadow-lg'
                    : 'bg-[#1E222D] text-white hover:bg-[#E11D48]'
                }`}
              >
                <span>Book This Package</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Bay Slot Inspection Booking Suite */}
      <section id="booking" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A0C11] rounded-3xl p-8 sm:p-12 border border-[#E11D48]/30 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E11D48] font-bold block mb-2">
              Clean Room Bay Scheduling
            </span>
            <h2 className="font-display-tech text-3xl sm:text-5xl font-bold uppercase">
              Schedule Paint Inspection
            </h2>
            <p className="text-xs sm:text-sm text-[#828896] mt-2">
              We perform an initial electronic paint depth gauge test (measuring clearcoat thickness in microns) before beginning any polishing or film work.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#E11D48] mx-auto" />
              <h3 className="font-display-tech text-2xl font-bold">Bay Slot Request Dispatched!</h3>
              <p className="text-xs text-[#828896] max-w-md mx-auto">
                Your vehicle inspection details have been sent to WhatsApp. Our studio manager will confirm your bay slot arrival time.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white/5"
              >
                Book Another Inspection
              </button>
            </div>
          ) : (
            <form onSubmit={handleBaySubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#828896] mb-2">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohith Goud"
                    value={bayBooking.name}
                    onChange={(e) => setBayBooking({ ...bayBooking, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060709] border border-[#1E222D] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#828896] mb-2">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={bayBooking.phone}
                    onChange={(e) => setBayBooking({ ...bayBooking, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060709] border border-[#1E222D] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#828896] mb-2">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Porsche 911 / BMW M3 / Defender"
                    value={bayBooking.carModel}
                    onChange={(e) => setBayBooking({ ...bayBooking, carModel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060709] border border-[#1E222D] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#828896] mb-2">
                    Selected Package
                  </label>
                  <select
                    value={bayBooking.selectedPackage}
                    onChange={(e) => setBayBooking({ ...bayBooking, selectedPackage: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060709] border border-[#1E222D] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  >
                    <option>Stealth Shield TPU Self-Healing PPF</option>
                    <option>9H Matrix Graphene Ceramic Coating</option>
                    <option>Bespoke Interior Leather Reconditioning</option>
                    <option>Full Paint Correction + Windshield Defense</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#828896] mb-2">
                    Drop-off Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={bayBooking.date}
                    onChange={(e) => setBayBooking({ ...bayBooking, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060709] border border-[#1E222D] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#828896] mb-2">
                    Time Slot
                  </label>
                  <select
                    value={bayBooking.time}
                    onChange={(e) => setBayBooking({ ...bayBooking, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060709] border border-[#1E222D] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  >
                    <option>09:30 AM (Morning Drop)</option>
                    <option>12:00 PM (Midday Inspection)</option>
                    <option>03:00 PM (Afternoon)</option>
                    <option>06:00 PM (Evening Drop for Next-Day Delivery)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#E11D48] hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-lg shadow-rose-900/30"
              >
                Confirm Bay Reservation on WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030405] text-[#555964] py-12 border-t border-[#14161D] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Apex Performance Labs. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#828896]">Sample Business Website Concept engineered by PIXORA DIGITAL</p>
        </div>
      </footer>
    </div>
  )
}
