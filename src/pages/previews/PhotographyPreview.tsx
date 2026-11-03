import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Camera, Heart, CheckCircle2, Clock, Calendar, Sparkles } from 'lucide-react'

const WA_URL = 'https://wa.me/918121507323'

const categories = ['All Works', 'Royal Weddings', 'Pre-Wedding & Couple', 'Fashion & Editorial', 'Newborn & Maternity']

const gallery = [
  {
    id: 1,
    title: 'Nizami Royal Wedding at Taj Falaknuma Palace',
    category: 'Royal Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&h=850&fit=crop',
    likes: '1.4k',
    client: 'Ananya & Siddharth',
  },
  {
    id: 2,
    title: 'Sunset Beach Romance • Goa Pre-Wedding',
    category: 'Pre-Wedding & Couple',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&h=850&fit=crop',
    likes: '980',
    client: 'Rhea & Karan',
  },
  {
    id: 3,
    title: 'Haute Couture Silk & Jewelry Lookbook',
    category: 'Fashion & Editorial',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&h=850&fit=crop',
    likes: '2.1k',
    client: 'Vogue India Edition',
  },
  {
    id: 4,
    title: 'Traditional Muhurtham Rituals & Sangeet Night',
    category: 'Royal Weddings',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&h=850&fit=crop',
    likes: '1.2k',
    client: 'Meera & Varun',
  },
  {
    id: 5,
    title: 'Tender Miracle • Golden Hour Maternity Studio',
    category: 'Newborn & Maternity',
    image: 'https://images.unsplash.com/photo-1544126592-807ade215a0f?w=700&h=850&fit=crop',
    likes: '850',
    client: 'Pooja & Sameer',
  },
  {
    id: 6,
    title: 'Desert Dunes Cinematic Drone Portraits',
    category: 'Pre-Wedding & Couple',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&h=850&fit=crop',
    likes: '1.8k',
    client: 'Tanya & Rohit',
  },
]

const packages = [
  {
    name: 'Cinematic Pre-Wedding Shoot',
    price: '₹35,000',
    duration: '1 Full Day',
    includes: [
      '2 Cinematographers & 1 Lead Candid Photographer',
      '4K 3-Minute Teaser Music Video + 45 Color Graded Photos',
      'Drone Aerial 4K Videography included',
      '3 Outfit Changes & Stylist Posing Guidance',
    ],
  },
  {
    name: 'The Royal Wedding Story (2-Day Full Package)',
    price: '₹1,25,000',
    duration: '2 Days (Mehendi, Sangeet & Muhurtham)',
    includes: [
      'Team of 5: 2 Candid, 1 Traditional, 2 Cinematic Filmmakers',
      '20-Minute Wedding Film + 3-Minute Instagram Reel',
      'Premium Leatherette Bound 40-Page Layflat Photo Album',
      'All Raw High-Res Photos on 1TB Custom Hard Drive',
      'Same-Day Edit Video for Reception Screening',
    ],
  },
  {
    name: 'Editorial Fashion / Maternity Portfolio',
    price: '₹18,500',
    duration: '4 Hours Studio Session',
    includes: [
      'Unlimited High-Res Clicks in Controlled Lighting Lab',
      '25 Magazine-Grade Skin Retouched Master Portraits',
      'Props, Gowns & Floral Backdrop Access',
      'Instant On-Screen Selection Monitor',
    ],
  },
]

export default function PhotographyPreview() {
  const [activeCategory, setActiveCategory] = useState('All Works')
  const [form, setForm] = useState({ name: '', phone: '', eventType: 'Wedding Photography', date: '' })
  const [booked, setBooked] = useState(false)

  const filtered = activeCategory === 'All Works' ? gallery : gallery.filter((g) => g.category === activeCategory)

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello LensCraft Visuals! I want to check dates for photography:\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Event Type: ${form.eventType}\n• Tentative Date: ${form.date || 'TBD'}`
    window.open(`${WA_URL}?text=${encodeURIComponent(msg)}`, '_blank')
    setBooked(true)
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top Demo Banner */}
      <div className="bg-gradient-to-r from-violet-800 to-neutral-900 text-white text-center py-2.5 px-4 text-xs font-semibold flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to PIXORA
        </Link>
        <span>📸 Sample Wedding & Fashion Photography Portfolio Website Demo</span>
        <a href={`${WA_URL}?text=Hi! I want a photography / videography portfolio website like your LensCraft demo.`} target="_blank" rel="noopener noreferrer" className="bg-white text-violet-900 px-3 py-1 rounded-full text-xs font-bold hover:bg-violet-50 transition">
          Get My Portfolio Website
        </a>
      </div>

      {/* Photography Navbar */}
      <nav className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center text-xl text-white shadow-lg shadow-violet-600/30">
              📸
            </div>
            <div>
              <h1 className="text-xl font-serif tracking-widest text-white">LENSCRAFT</h1>
              <p className="text-[10px] text-neutral-400 font-sans tracking-widest uppercase">Wedding Stories & Cinematic Films • Hyderabad</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#packages"
              className="px-4 py-2 bg-white text-neutral-950 hover:bg-violet-100 text-xs font-bold rounded-xl shadow transition"
            >
              Check Date Availability
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=900&fit=crop')] bg-cover bg-center brightness-[0.22]" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs font-semibold mb-6">
            ✨ Destination Wedding Filmmakers • Over 450+ Weddings Documented
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-black mb-6 leading-tight">
            We Don’t Pose People. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-200 to-rose-200">
              We Immortalize Raw Emotions.
            </span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Candid wedding photojournalism and cinematic short films that make you relive every teardrop, heartfelt smile, and euphoric celebration 20 years from today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#portfolio" className="px-7 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-lg transition">
              View Featured Stories
            </a>
            <a
              href={`${WA_URL}?text=Hello LensCraft! I'd like to receive your wedding photography pricing brochure PDF.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition"
            >
              Request Pricing Deck PDF
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-violet-400 text-xs font-bold uppercase tracking-widest">Our Visual Legacy</span>
          <h3 className="text-3xl sm:text-4xl font-serif font-black text-white mt-2 mb-3">Featured Love Stories & Lookbooks</h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Click any story category to filter candid frames from Hyderabad, Udaipur, Goa & abroad.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeCategory === c
                  ? 'bg-violet-600 text-white shadow-md'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-90 group-hover:brightness-100" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 p-6 flex flex-col justify-end">
                <span className="text-[10px] text-violet-400 font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <h4 className="text-base font-serif font-bold text-white mb-2 leading-snug">{item.title}</h4>
                <div className="flex items-center justify-between text-xs text-neutral-300 pt-2 border-t border-white/20">
                  <span>Client: {item.client}</span>
                  <span className="flex items-center gap-1 text-rose-400">
                    <Heart className="w-3.5 h-3.5 fill-rose-400" /> {item.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages & Investment */}
      <section id="packages" className="bg-neutral-900/60 border-y border-neutral-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-violet-400 text-xs font-bold uppercase tracking-widest">Investment Guide</span>
            <h3 className="text-3xl font-serif font-black text-white mt-2 mb-3">Transparent Coverage Packages</h3>
            <p className="text-neutral-400 text-sm">Every package is fully customizable based on hours and number of events.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-7 flex flex-col justify-between hover:border-violet-500/50 transition">
                <div>
                  <h4 className="text-xl font-serif font-bold text-white mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-black text-violet-400 my-2">{pkg.price}</div>
                  <div className="text-xs text-neutral-400 mb-6">Duration: {pkg.duration}</div>

                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`${WA_URL}?text=Hello LensCraft! I'm interested in booking the *${encodeURIComponent(pkg.name)}* (${pkg.price}). Please let me know if you are free on our date.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold text-center transition tracking-wider uppercase"
                >
                  Book Package WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Date Enquiry Form */}
      <section className="max-w-xl mx-auto px-4 py-20">
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-2xl text-center">
          <Camera className="w-12 h-12 text-violet-400 mx-auto mb-3" />
          <h3 className="text-2xl font-serif font-bold text-white mb-2">Check Date Availability</h3>
          <p className="text-xs text-neutral-400 mb-6">We take a strictly limited number of weddings each season to deliver exceptional creative quality.</p>

          {booked ? (
            <div className="py-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
              <p className="font-bold text-white text-sm">Date Enquiry Sent!</p>
              <p className="text-xs text-neutral-400 mt-1">We've opened WhatsApp with your wedding details. Our team will verify the master calendar instantly.</p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Name *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Radhika Reddy"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">WhatsApp Phone *</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="10-digit number"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-violet-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Type of Event</label>
                  <select
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-violet-500"
                  >
                    <option>Wedding Photography</option>
                    <option>Pre-Wedding Film</option>
                    <option>Fashion Editorial</option>
                    <option>Maternity & Newborn</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Tentative Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-violet-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl text-sm transition shadow mt-3 uppercase tracking-wider"
              >
                Check Date via WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-8 text-center text-xs text-neutral-500">
        <p className="mb-2">LensCraft Visuals • Jubilee Hills, Hyderabad • Demo Project by PIXORA DIGITAL</p>
        <Link to="/" className="text-violet-400 hover:underline">Want a website built for your photography studio? Contact PIXORA DIGITAL →</Link>
      </footer>
    </div>
  )
}
