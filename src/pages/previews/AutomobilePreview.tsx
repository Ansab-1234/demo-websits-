import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Star, Clock, MapPin, Phone, Shield, Sparkles, CheckCircle2, Award } from 'lucide-react'

const WA_URL = 'https://wa.me/918121507323'

const packages = [
  {
    name: 'Full Body Ceramic Coating (9H/10H)',
    price: '₹14,999',
    original: '₹22,000',
    duration: '24 Hours',
    warranty: '3 Years Warranty with Free Bi-Annual Topups',
    popular: true,
    features: [
      '3-Stage Multi-Step Paint Correction (Swirl Mark & Scratch Removal)',
      'Dual Layer 9H Japanese Nano-Ceramic Glass Shield',
      'All Glass Hydrophobic Rain Repellent Treatment',
      'Alloy Wheels Ceramic Sealant & Engine Bay Detail',
      'Interior Anti-Bacterial Steam Clean & Leather Nourishing',
    ],
  },
  {
    name: 'TPU Paint Protection Film (PPF)',
    price: '₹55,000',
    original: '₹75,000',
    duration: '48 Hours',
    warranty: '5-7 Years Instant Self-Healing Warranty',
    popular: false,
    features: [
      'Self-Healing Thermo-Plastic Polyurethane (TPU) Film',
      'Shields against stone chips, highway scratches & keys',
      'Extreme High-Gloss Hydrophobic Non-Yellowing Topcoat',
      'Computerized Plotter Pre-Cut Installation (Zero Blade Marks)',
      'Complimentary Full Interior Deep Clean',
    ],
  },
  {
    name: 'Deep Interior Spa & Anti-Microbial Clean',
    price: '₹3,499',
    original: '₹5,000',
    duration: '4 Hours',
    warranty: '100% Odor & Stain Free Guarantee',
    popular: false,
    features: [
      '140°C High-Pressure Dry Steam on AC Vents & Seats',
      'German Hot Water Extraction on Carpets & Floor Mats',
      'Leather Seat Cleansing with UV Conditioner Shield',
      'Roof Headliner Microfiber Stain Extraction',
      'Ozone Air Sterilization & Odor Eliminator',
    ],
  },
]

const servicesList = [
  { name: 'Underbody Anti-Rust Coating', price: '₹2,500', time: '2 Hrs', desc: 'Heavy duty bitumen rubberized rubber coat with 5-year warranty against moisture & gravel' },
  { name: 'Headlight Restoration & De-Yellowing', price: '₹1,200', time: '1 Hr', desc: 'Multi-stage wet sanding and UV acrylic polymer coat to restore crystal clarity' },
  { name: 'Windshield Glass Polishing', price: '₹1,800', time: '1.5 Hrs', desc: 'Removal of wiper track marks, hard water scaling and acid rain deposits' },
  { name: 'Engine Bay Detailing & Dressing', price: '₹999', time: '45 Mins', desc: 'Dry steam electrical-safe degreasing with non-greasy protective satin dressing' },
]

export default function AutomobilePreview() {
  const [carType, setCarType] = useState('Hatchback / Sedan')
  const [form, setForm] = useState({ name: '', phone: '', carModel: '', service: 'Full Body Ceramic Coating (9H/10H)' })
  const [booked, setBooked] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello Apex Detailing Studio! I want to book a car detailing slot:\n• Customer: ${form.name}\n• Phone: ${form.phone}\n• Vehicle Model: ${form.carModel}\n• Vehicle Type: ${carType}\n• Service Required: ${form.service}`
    window.open(`${WA_URL}?text=${encodeURIComponent(msg)}`, '_blank')
    setBooked(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Demo Banner */}
      <div className="bg-gradient-to-r from-red-700 via-zinc-800 to-black text-white text-center py-2.5 px-4 text-xs font-semibold flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to PIXORA
        </Link>
        <span>🏎️ Sample Automobile / Car Detailing Studio Website Demo</span>
        <a href={`${WA_URL}?text=Hi! I want an automobile / car detailing website like your Apex Detailing demo.`} target="_blank" rel="noopener noreferrer" className="bg-white text-red-700 px-3 py-1 rounded-full text-xs font-bold hover:bg-red-50 transition">
          Build My Auto Website
        </a>
      </div>

      {/* Auto Navbar */}
      <nav className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-xl shadow-lg shadow-red-600/30">
              🏎️
            </div>
            <div>
              <h1 className="text-xl font-black tracking-wider text-white">APEX AUTO SPA</h1>
              <p className="text-[10px] text-red-500 font-bold tracking-widest uppercase">Ceramic Coating & Paint Protection Film Studio</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#packages"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow transition tracking-wider uppercase"
            >
              Get Studio Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center py-24 px-4 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1600&h=900&fit=crop')] bg-cover bg-center brightness-[0.25]" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-semibold mb-6">
            <Shield className="w-3.5 h-3.5 text-red-400" /> Dust-Free Climate Controlled Lab • Jubilee Hills, Hyderabad
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tight leading-none">
            Unrivaled Gloss. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              Permanent Paint Armor.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Protect your vehicle against Hyderabad sun oxidation, swirl marks, hard water stains, and flying stone chips with certified ceramic & self-healing PPF treatments.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#packages" className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition uppercase tracking-wider">
              Explore Packages
            </a>
            <a
              href={`${WA_URL}?text=Hello Apex Detailing! I'd like to share photos of my car for a paint restoration quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition"
            >
              Send Photos for Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <div className="border-y border-slate-800 bg-slate-900/60 py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-red-500">2,500+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Supercars & Luxury Cars Coated</div>
          </div>
          <div>
            <div className="text-3xl font-black text-red-500">100% Dust-Free</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Negative Pressure Coating Bay</div>
          </div>
          <div>
            <div className="text-3xl font-black text-red-500">Certified Techs</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Gtechniq & Rupes Accredited</div>
          </div>
          <div>
            <div className="text-3xl font-black text-red-500">Pick & Drop</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Doorstep Valet Across Hyderabad</div>
          </div>
        </div>
      </div>

      {/* Main Detailing Packages */}
      <section id="packages" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Precision Packages</span>
          <h3 className="text-3xl font-black text-white mt-2 mb-3">Popular Protection Treatments</h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Choose your vehicle category to see transparent upfront pricing.
          </p>

          {/* Vehicle Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {['Hatchback / Sedan', 'Compact SUV', 'Full Size Luxury SUV (Fortuner/X5/Defender)'].map((t) => (
              <button
                key={t}
                onClick={() => setCarType(t)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  carType === t
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-7 border flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-red-500 shadow-xl shadow-red-500/10'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div>
                {pkg.popular && (
                  <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider mb-4">
                    Most Demanded Treatment
                  </span>
                )}
                <h4 className="text-lg font-black text-white mb-1">{pkg.name}</h4>
                <div className="flex items-baseline gap-2 my-3">
                  <span className="text-3xl font-black text-red-500">{pkg.price}</span>
                  <span className="text-xs text-slate-500 line-through">{pkg.original}</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-400 mb-4 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-red-400" /> Duration: {pkg.duration} • {pkg.warranty}
                </div>

                <ul className="space-y-2.5 my-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`${WA_URL}?text=Hello Apex Auto! I'm interested in the *${encodeURIComponent(pkg.name)}* for my *${carType}*. Please share slot availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition ${
                  pkg.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                Book Package on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Additional A La Carte Services */}
      <section className="bg-slate-900/50 border-y border-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h4 className="text-2xl font-black text-white">Add-On Detailing Services</h4>
            <p className="text-xs text-slate-400 mt-1">Can be added during your main package service</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesList.map((s) => (
              <div key={s.name} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">{s.name}</span>
                  <span className="text-xs font-bold text-red-400">{s.price}</span>
                </div>
                <p className="text-xs text-slate-400 mb-2 leading-relaxed">{s.desc}</p>
                <span className="text-[10px] text-slate-500 font-semibold">⏱ Time: {s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form & Studio Location */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Reserve Your Studio Slot</span>
            <h3 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4">
              Give Your Car The Showroom Mirror Finish
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              We take only 2 vehicles per day to ensure unhurried, obsessive craftsmanship. Book 24 hours in advance.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Road No. 45, Near Durgam Cheruvu Cable Bridge, Jubilee Hills, Hyderabad</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-red-500" />
                <span>Operating Hours: 9:00 AM – 8:00 PM (Tuesday to Sunday)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500" />
                <span>Direct Hotline: +91 81215 07323</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl">
            {booked ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">Slot Request Forwarded!</h4>
                <p className="text-xs text-slate-400 mb-6">WhatsApp has opened with your car details. Our master detailer will confirm your inspection time.</p>
                <button onClick={() => setBooked(false)} className="px-5 py-2 text-xs bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700">
                  Book Another Vehicle
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-lg font-bold text-white mb-4">Book Detailing Inspection</h4>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Aditya Varma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp Phone *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="10-digit number"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Car Make & Model *</label>
                    <input
                      required
                      type="text"
                      value={form.carModel}
                      onChange={(e) => setForm({ ...form, carModel: e.target.value })}
                      placeholder="e.g. BMW 3 Series / Creta"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Service Required</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
                  >
                    <option>Full Body Ceramic Coating (9H/10H)</option>
                    <option>TPU Paint Protection Film (PPF)</option>
                    <option>Deep Interior Spa & Anti-Microbial Clean</option>
                    <option>Underbody Rust + Glass Polishing</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition shadow mt-2 uppercase tracking-wider"
                >
                  Book Inspection on WhatsApp 🏎️
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <p className="mb-2">Apex Auto Detailing Lab • Jubilee Hills, Hyderabad • Demo Project by PIXORA DIGITAL</p>
        <Link to="/" className="text-red-500 hover:underline">Want a website built for your automobile workshop or car spa? Contact PIXORA DIGITAL →</Link>
      </footer>
    </div>
  )
}
