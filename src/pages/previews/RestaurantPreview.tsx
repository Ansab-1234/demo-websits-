import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Clock,
  MapPin,
  Phone,
  UtensilsCrossed,
  CheckCircle2,
  Calendar,
  Users,
  ChevronRight,
  Flame,
  Wine,
  Sparkles,
  MessageSquare
} from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../../lib/constants'

interface MenuItem {
  name: string
  price: string
  desc: string
  isVeg: boolean
  isChefSpecial?: boolean
  calories?: string
}

const menuCategories = [
  {
    category: 'Heritage Dastarkhwan Starters',
    items: [
      { name: 'Melt-in-Mouth Galouti Kebab', price: '₹580', desc: 'Smoked lamb paté infused with 32 Nizami spices, served over miniature saffron sheermal.', isVeg: false, isChefSpecial: true },
      { name: 'Pathar Ka Gosht (Stone-Seared)', price: '₹620', desc: 'Tenderized mutton escalopes seared over granite river stones with cracked peppercorn and clarified butter.', isVeg: false },
      { name: 'Wild Truffle & Malai Paneer Tikka', price: '₹480', desc: 'Charcoal-grilled cottage cheese steeped in black truffle cream and crushed coriander seeds.', isVeg: true, isChefSpecial: true },
      { name: 'Crispy Lotus Stem in Kokum Reduction', price: '₹420', desc: 'Caramelized lotus root crisps with coastal kokum, roasted cumin, and mint emulsion.', isVeg: true },
    ],
  },
  {
    category: 'Clay Oven & Slow-Cooked Handi',
    items: [
      { name: 'Kachche Gosht Ki Dum Biryani', price: '₹690', desc: 'Marinated young lamb slow-cooked with aged basmati rice, saffron ghee, and sealed clay pot crust.', isVeg: false, isChefSpecial: true },
      { name: 'Subz Chilman Pulao', price: '₹490', desc: 'Seasonal vegetables, saffron milk, caramelized shallots baked under puff pastry lid.', isVeg: true },
      { name: '24-Hour Simmered Dal Saffron', price: '₹420', desc: 'Black lentils slow-cooked overnight over embers with churned butter and Kashmiri chili.', isVeg: true, isChefSpecial: true },
      { name: 'Nalli Nihari with Roghani Kulcha', price: '₹740', desc: 'Slow-braised lamb shanks in rich velvety bone broth seasoned with vetiver and rose petals.', isVeg: false },
    ],
  },
  {
    category: 'Confectionery & Elixirs',
    items: [
      { name: 'Double Ka Meetha Mille-Feuille', price: '₹360', desc: 'Deconstructed caramelized brioche layers with rabri mousse, pistachio praline, and gold leaf.', isVeg: true, isChefSpecial: true },
      { name: 'Zafrani Kesar Phirni in Earthen Pot', price: '₹320', desc: 'Ground basmati rice pudding slow-reduced in milk with Iranian saffron and crushed almonds.', isVeg: true },
      { name: 'Smoked Rose & Cardamom Cooler', price: '₹260', desc: 'Fresh damask rose cordial, crushed mint, green cardamom, and mineral soda.', isVeg: true },
    ],
  },
]

export default function RestaurantPreview() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].category)
  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    zone: 'Rooftop Starlight Terrace',
    date: '',
    time: '08:00 PM',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault()
    if (!reservation.name || !reservation.phone || !reservation.date) return
    const msg = `Hello Saffron & Stone Bistro!
I would like to reserve a dining table:
• Guest Name: ${reservation.name}
• Phone: ${reservation.phone}
• Party Size: ${reservation.guests}
• Preferred Seating: ${reservation.zone}
• Date & Time: ${reservation.date} at ${reservation.time}
${reservation.notes ? `• Special Notes: ${reservation.notes}` : ''}
Please confirm table reservation.`

    window.open(getWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  const currentCategory = menuCategories.find((c) => c.category === activeCategory) || menuCategories[0]

  return (
    <div className="min-h-screen bg-[#0F1012] text-[#FDFBF7] font-sans selection:bg-[#C86D51] selection:text-white">
      {/* Top Agency Demo Navigation Bar */}
      <div className="bg-[#050607] text-[#9A9B9E] px-4 py-2 text-xs flex items-center justify-between border-b border-[#1E2024]">
        <Link to="/our-work" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PIXORA Showcase</span>
        </Link>
        <span className="hidden sm:inline font-mono tracking-widest uppercase text-[10px] text-[#C86D51]">
          Industry Showcase: Gourmet Restaurant & Rooftop Bistro
        </span>
        <a
          href={getWhatsAppUrl("Hello PIXORA DIGITAL! I explored your Saffron & Stone Restaurant demo. I'd like to build a similar website for my restaurant.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4AF37] hover:underline font-semibold"
        >
          Build Website for My Restaurant →
        </a>
      </div>

      {/* Top Address & Timings Strip */}
      <div className="border-b border-[#1E2024] bg-[#14161A] px-4 py-2.5 text-xs text-[#9A9B9E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C86D51]" />
              Road No. 45, Jubilee Hills, Hyderabad
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C86D51]" />
              Lunch: 12:00 PM – 3:30 PM | Dinner: 7:00 PM – 11:30 PM
            </span>
          </div>
          <span className="font-semibold text-[#FDFBF7] flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            Table Concierge: {PHONE_DISPLAY}
          </span>
        </div>
      </div>

      {/* Restaurant Header */}
      <header className="sticky top-0 z-40 bg-[#0F1012]/95 backdrop-blur-md border-b border-[#1E2024]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif-cinzel text-xl sm:text-2xl tracking-[0.2em] text-[#FDFBF7] font-bold">
              SAFFRON & STONE
            </span>
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#C86D51]">
              Contemporary Nizami Bistro & Rooftop
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#A0A2A6]">
            <a href="#menu" className="hover:text-white transition-colors">Digital Menu</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Culinary Philosophy</a>
            <a href="#ambience" className="hover:text-white transition-colors">Rooftop Ambience</a>
            <a href="#reserve" className="hover:text-white transition-colors">Reservations</a>
          </nav>

          <a
            href="#reserve"
            className="px-5 py-2.5 rounded-full bg-[#C86D51] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#b05c42] transition-colors shadow-lg"
          >
            Reserve Table
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=1000&fit=crop')] bg-cover bg-center brightness-[0.32]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1012] via-transparent to-black/40" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6 pt-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C86D51]/20 border border-[#C86D51]/40 text-xs font-mono tracking-widest text-[#FDFBF7] uppercase">
            <Flame className="w-3.5 h-3.5 text-[#C86D51]" />
            Slow-Cooked Heritage Gastronomy
          </span>

          <h1 className="font-serif-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FDFBF7] leading-[1.08]">
            AN EPICUREAN JOURNEY THROUGH <span className="text-[#C86D51] italic font-serif-luxury">HYDERABADI FLAVORS</span>
          </h1>

          <p className="text-base sm:text-lg text-[#C7C9CC] max-w-2xl mx-auto font-light leading-relaxed">
            Smoked coals, slow-simmered handis, and rooftop breezes in Jubilee Hills. Experience heirloom recipes elevated with modern culinary precision.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#reserve"
              className="px-8 py-4 rounded-full bg-[#C86D51] text-white text-xs uppercase font-bold tracking-widest hover:bg-[#b05c42] transition-colors shadow-xl"
            >
              Reserve Starlight Table
            </a>
            <a
              href="#menu"
              className="px-8 py-4 rounded-full border border-white/20 text-[#FDFBF7] text-xs uppercase font-bold tracking-widest hover:bg-white/10 transition-colors"
            >
              Explore Digital Menu
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Digital Menu */}
      <section id="menu" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1E2024]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C86D51] font-bold block mb-2">
              The Chef's Dastarkhwan
            </span>
            <h2 className="font-serif-cinzel text-3xl sm:text-5xl">
              Curated Seasonal Menu
            </h2>
          </div>
          <p className="text-xs font-mono text-[#9A9B9E]">
            All meats are sourced ethically • Stone-ground spices roasted daily in-house
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#1E2024]">
          {menuCategories.map((c) => (
            <button
              key={c.category}
              onClick={() => setActiveCategory(c.category)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                activeCategory === c.category
                  ? 'bg-[#C86D51] text-white shadow-md'
                  : 'bg-[#14161A] text-[#9A9B9E] border border-[#1E2024] hover:text-white'
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentCategory.items.map((item) => (
            <div
              key={item.name}
              className="p-8 rounded-3xl bg-[#14161A] border border-[#1E2024] hover:border-[#C86D51]/50 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-xs border flex items-center justify-center p-0.5 ${
                        item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                      }`}
                      title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                    </span>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#FDFBF7]">
                      {item.name}
                    </h3>
                  </div>
                  <span className="font-mono text-base font-bold text-[#D4AF37] flex-shrink-0">
                    {item.price}
                  </span>
                </div>

                {item.isChefSpecial && (
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C86D51]/20 text-[#C86D51] mb-2">
                    Chef’s Masterpiece
                  </span>
                )}

                <p className="text-xs sm:text-sm text-[#9A9B9E] leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E2024] flex items-center justify-between">
                <span className="text-[11px] text-[#696B6E]">Prepared to Order</span>
                <a
                  href={getWhatsAppUrl(`Hello Saffron & Stone! I'd like to order takeaway for "${item.name}" (${item.price}). Please share delivery/pickup details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#C86D51] hover:underline flex items-center gap-1"
                >
                  <span>Order via WhatsApp</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culinary Philosophy & Story */}
      <section id="philosophy" className="py-24 bg-[#14161A] border-t border-[#1E2024]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C86D51] font-bold block">
                The Heritage Flame
              </span>
              <h2 className="font-serif-cinzel text-3xl sm:text-5xl leading-tight">
                Slow-Simmered Over Peat Embers Since Inception.
              </h2>
              <p className="text-sm text-[#9A9B9E] leading-relaxed">
                In an era of commercial shortcuts, our kitchen preserves the classical <em>dum pukht</em> tradition: sealing hand-beaten deghs with kneaded dough to capture aromatic steam, ensuring that spices, saffron, and tender cuts mature in their own essences for hours.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-[#0F1012] border border-[#1E2024]">
                  <span className="text-2xl font-serif-cinzel font-bold text-[#D4AF37] block">32</span>
                  <span className="text-xs text-[#9A9B9E]">Indigenous Spices in Garam Masala</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F1012] border border-[#1E2024]">
                  <span className="text-2xl font-serif-cinzel font-bold text-[#C86D51] block">24 Hrs</span>
                  <span className="text-xs text-[#9A9B9E]">Slow-Cooking Dal Simmer Time</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=800&fit=crop"
                alt="Clay oven cooking"
                className="rounded-3xl w-full h-80 object-cover border border-[#1E2024]"
              />
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=800&fit=crop"
                alt="Rooftop dining ambience"
                className="rounded-3xl w-full h-80 object-cover border border-[#1E2024] mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Table Reservation Suite */}
      <section id="reserve" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14161A] rounded-3xl p-8 sm:p-12 border border-[#1E2024] shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C86D51] font-bold block mb-2">
              Guaranteed Seating
            </span>
            <h2 className="font-serif-cinzel text-3xl sm:text-5xl">
              Reserve Your Dining Experience
            </h2>
            <p className="text-xs sm:text-sm text-[#9A9B9E] mt-2">
              For parties of 8 or more, or private dining cellar inquiries, our reservations team will contact you directly on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#C86D51] mx-auto" />
              <h3 className="font-serif-cinzel text-2xl font-bold">Table Inquiry Dispatched</h3>
              <p className="text-xs text-[#9A9B9E] max-w-md mx-auto">
                Your reservation request has been prepared on WhatsApp. Tap send to finalize your table confirmation with our host.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full border border-[#1E2024] text-xs font-semibold hover:bg-white/5"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleReservation} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#9A9B9E] mb-2">
                    Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Varma"
                    value={reservation.name}
                    onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#1E2024] text-sm text-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#9A9B9E] mb-2">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={reservation.phone}
                    onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#1E2024] text-sm text-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#9A9B9E] mb-2">
                    Party Size
                  </label>
                  <select
                    value={reservation.guests}
                    onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#1E2024] text-sm text-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
                  >
                    <option>2 Guests (Intimate Dining)</option>
                    <option>4 Guests (Standard Table)</option>
                    <option>6 Guests (Family Table)</option>
                    <option>8 to 12 Guests (Feast Table)</option>
                    <option>15+ Guests (Private Cellar Booking)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#9A9B9E] mb-2">
                    Seating Atmosphere
                  </label>
                  <select
                    value={reservation.zone}
                    onChange={(e) => setReservation({ ...reservation, zone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#1E2024] text-sm text-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
                  >
                    <option>Rooftop Starlight Terrace</option>
                    <option>Heritage Courtyard Bistro</option>
                    <option>Air-Conditioned Indoor Dining</option>
                    <option>Private Dining Cellar</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#9A9B9E] mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={reservation.date}
                    onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#1E2024] text-sm text-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#9A9B9E] mb-2">
                    Seating Time
                  </label>
                  <select
                    value={reservation.time}
                    onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#1E2024] text-sm text-[#FDFBF7] focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
                  >
                    <option>12:30 PM (Lunch)</option>
                    <option>02:00 PM (Afternoon)</option>
                    <option>07:30 PM (Early Dinner)</option>
                    <option>08:30 PM (Prime Dinner)</option>
                    <option>09:45 PM (Late Dinner)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#C86D51] hover:bg-[#b05c42] text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-lg"
              >
                Confirm Table via WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050607] text-[#696B6E] py-12 border-t border-[#1E2024] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Saffron & Stone Bistro. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#9A9B9E]">Sample Business Website Concept engineered by PIXORA DIGITAL</p>
        </div>
      </footer>
    </div>
  )
}
