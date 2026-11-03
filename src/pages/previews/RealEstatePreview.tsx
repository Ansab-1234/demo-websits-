import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Bed, Bath, Square, Phone, Calendar, CheckCircle2, Shield, Eye } from 'lucide-react'

const WA_URL = 'https://wa.me/918121507323'

const propertyTypes = ['All', 'Gated Luxury Villas', 'High-Rise Apartments', 'Commercial Offices', 'Open Plots (HMDA/RERA)']

const properties = [
  {
    id: 1,
    title: 'The Grand Crest Luxury 4BHK Villa',
    location: 'Tellapur, Gachibowli Extn, Hyderabad',
    type: 'Gated Luxury Villas',
    price: '₹3.85 Cr',
    area: '4,450 sq.ft.',
    beds: 4,
    baths: 5,
    status: 'Ready to Handover',
    rera: 'P02400004921',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=420&fit=crop',
    features: ['Private Plunge Pool', 'Double Height Living', 'Clubhouse with 40+ Amenities', 'Solar Powered'],
  },
  {
    id: 2,
    title: 'Skyline Skydeck 3BHK Lakeview Residences',
    location: 'Financial District, Nanakramguda, Hyderabad',
    type: 'High-Rise Apartments',
    price: '₹1.95 Cr',
    area: '2,350 sq.ft.',
    beds: 3,
    baths: 3,
    status: 'Under Construction (Dec 2026)',
    rera: 'P02400006180',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=420&fit=crop',
    features: ['52 Storey Tower', 'Infinity Rooftop Pool', '100% Vastu Compliant', '5 Mins to Wipro Circle'],
  },
  {
    id: 3,
    title: 'Urban Oasis 2.5 BHK Smart Condos',
    location: 'Kondapur, Hitec City Corridor, Hyderabad',
    type: 'High-Rise Apartments',
    price: '₹1.15 Cr',
    area: '1,420 sq.ft.',
    beds: 2,
    baths: 2,
    status: 'Ready to Move In',
    rera: 'P02400003110',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=420&fit=crop',
    features: ['Modular Italian Kitchen', 'Covered Car Parking', 'Walking Distance to Metro', 'No Common Walls'],
  },
  {
    id: 4,
    title: 'Pinnacle Corporate IT Hub Floors',
    location: 'Madhapur, Hitech City, Hyderabad',
    type: 'Commercial Offices',
    price: '₹4.50 Cr',
    area: '3,800 sq.ft.',
    beds: 0,
    baths: 4,
    status: 'Grade-A Commercial Space',
    rera: 'P02400005520',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=420&fit=crop',
    features: ['100% Power Backup', 'LEED Platinum Certified', 'High Speed Mitsubishi Elevators', 'High Rental Yield'],
  },
  {
    id: 5,
    title: 'Green Meadows HMDA Villa Plots',
    location: 'Shankarpally - Mokila Highway, Hyderabad',
    type: 'Open Plots (HMDA/RERA)',
    price: '₹62 Lakhs',
    area: '250 Sq. Yards',
    beds: 0,
    baths: 0,
    status: 'Clear Title Clear RERA',
    rera: 'P02400007890',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=420&fit=crop',
    features: ['Underground Electricity', '40ft Blacktop Roads', 'Avenue Plantation', 'Bank Loan Approved'],
  },
  {
    id: 6,
    title: 'Palm Royale Signature 5BHK Triplex Villa',
    location: 'Mokila, Near Outer Ring Road, Hyderabad',
    type: 'Gated Luxury Villas',
    price: '₹4.60 Cr',
    area: '5,200 sq.ft.',
    beds: 5,
    baths: 6,
    status: 'New Launch Offer',
    rera: 'P02400008401',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=420&fit=crop',
    features: ['Private Elevator', 'Terrace Garden Lounge', 'EV Charging Station', 'Home Automation'],
  },
]

export default function RealEstatePreview() {
  const [activeType, setActiveType] = useState('All')
  const [siteVisitModal, setSiteVisitModal] = useState<{ open: boolean; property: string }>({ open: false, property: '' })
  const [visitForm, setVisitForm] = useState({ name: '', phone: '', date: '' })
  const [scheduled, setScheduled] = useState(false)

  const filtered = activeType === 'All' ? properties : properties.filter((p) => p.type === activeType)

  const handleVisit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello Prime Properties! I want to schedule a Site Visit:\n• Property: ${siteVisitModal.property || 'General Properties'}\n• Name: ${visitForm.name}\n• Phone: ${visitForm.phone}\n• Preferred Date: ${visitForm.date || 'This weekend'}\n• Please arrange cab pickup.`
    window.open(`${WA_URL}?text=${encodeURIComponent(msg)}`, '_blank')
    setScheduled(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Demo Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white text-center py-2.5 px-4 text-xs font-semibold flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to PIXORA
        </Link>
        <span>🏢 Sample Real Estate Agency & Builder Website Demo</span>
        <a href={`${WA_URL}?text=Hi! I want a real estate agency website like your Prime Properties demo.`} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-900 px-3 py-1 rounded-full text-xs font-bold hover:bg-blue-50 transition">
          Build My Real Estate Website
        </a>
      </div>

      {/* Real Estate Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-xl text-white shadow-md">
              🏛️
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight">PRIME PROPERTIES</h1>
              <p className="text-[10px] text-blue-600 font-bold tracking-widest uppercase">RERA Registered Property Consultants • Hyderabad</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`${WA_URL}?text=Hello Prime Properties! I'm looking to buy/invest in property in Hyderabad. Please share current hot projects.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow transition"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-20 px-4 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&h=900&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-6">
            <Shield className="w-3.5 h-3.5 text-blue-400" /> 100% RERA & HMDA Verified Developments Across West Hyderabad
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            Find Your Dream Home In <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
              Hyderabad’s Growth Corridors.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Zero brokerage on new builder projects. Handpicked premium apartments, luxury triplex villas, and high-yield commercial spaces in Gachibowli, Tellapur & Kokapet.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#listings" className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition">
              Browse Verified Properties
            </a>
            <button
              onClick={() => setSiteVisitModal({ open: true, property: 'General Tour' })}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition"
            >
              Schedule Free Site Visit (Cab Provided)
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <div className="border-b border-slate-200 bg-white py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-black text-blue-900">₹850+ Cr</div>
            <div className="text-xs text-slate-500 mt-1">Property Value Transacted</div>
          </div>
          <div>
            <div className="text-2xl font-black text-blue-900">1,200+</div>
            <div className="text-xs text-slate-500 mt-1">Families Handed Over Keys</div>
          </div>
          <div>
            <div className="text-2xl font-black text-blue-900">0% Brokerage</div>
            <div className="text-xs text-slate-500 mt-1">On All Direct Developer Units</div>
          </div>
          <div>
            <div className="text-2xl font-black text-blue-900">100% Free</div>
            <div className="text-xs text-slate-500 mt-1">Home Loan & Legal Assistance</div>
          </div>
        </div>
      </div>

      {/* Property Listings Grid */}
      <section id="listings" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Handpicked Projects</span>
          <h3 className="text-3xl font-black text-slate-900 mt-2 mb-3">Featured Residential & Commercial Properties</h3>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Direct builder prices, certified legal diligence, and clear titles.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {propertyTypes.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeType === t
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Property cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.status}
                  </span>
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-lg font-bold">
                    RERA: {item.rera}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-blue-600 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">{item.title}</h4>

                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center text-xs text-slate-600 mb-4">
                    {item.beds > 0 && (
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-slate-900">{item.beds} BHK</span>
                        <span className="text-[10px] text-slate-400">Bedrooms</span>
                      </div>
                    )}
                    {item.baths > 0 && (
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-slate-900">{item.baths}</span>
                        <span className="text-[10px] text-slate-400">Bathrooms</span>
                      </div>
                    )}
                    <div className="flex flex-col items-center col-span-1">
                      <span className="font-bold text-slate-900">{item.area}</span>
                      <span className="text-[10px] text-slate-400">Super Builtup</span>
                    </div>
                  </div>

                  <div className="space-y-1 mb-2">
                    {item.features.slice(0, 2).map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Pricing</span>
                  <span className="text-lg font-black text-slate-900">{item.price}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSiteVisitModal({ open: true, property: item.title })}
                    className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition"
                  >
                    Site Visit
                  </button>
                  <a
                    href={`${WA_URL}?text=Hello Prime Properties! I'm interested in *${encodeURIComponent(item.title)}* (${item.price}) located at ${encodeURIComponent(item.location)}. Please share brochure PDF & floor plan.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition shadow"
                  >
                    Brochure
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Site Visit Modal / Box */}
      {siteVisitModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => { setSiteVisitModal({ open: false, property: '' }); setScheduled(false) }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 text-sm font-bold"
            >
              ✕ Close
            </button>
            <h4 className="text-xl font-bold text-slate-900 mb-1">Schedule Site Visit</h4>
            <p className="text-xs text-slate-500 mb-4">
              Project: <strong className="text-slate-800">{siteVisitModal.property}</strong>
            </p>

            {scheduled ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
                <p className="font-bold text-slate-900 text-sm">Site Visit Requested!</p>
                <p className="text-xs text-slate-500 mt-1 mb-4">Our relationship manager will coordinate your private vehicle pickup via WhatsApp.</p>
                <button
                  onClick={() => { setSiteVisitModal({ open: false, property: '' }); setScheduled(false) }}
                  className="px-4 py-2 bg-slate-900 text-white text-xs rounded-xl"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleVisit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    value={visitForm.name}
                    onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                    placeholder="e.g. Ananya Rao"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Mobile *</label>
                  <input
                    required
                    type="tel"
                    value={visitForm.phone}
                    onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                    placeholder="10-digit number"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={visitForm.date}
                    onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow mt-2"
                >
                  Confirm Visit on WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <p className="mb-2">Prime Properties Consultants • Hitec City & Financial District, Hyderabad • Demo Project by PIXORA DIGITAL</p>
        <Link to="/" className="text-blue-600 hover:underline">Want a website built for your real estate consultancy or builder firm? Contact PIXORA DIGITAL →</Link>
      </footer>
    </div>
  )
}
