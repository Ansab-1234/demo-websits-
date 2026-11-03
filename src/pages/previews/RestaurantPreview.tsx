import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Clock, MapPin, ArrowLeft, Phone, Utensils, CheckCircle2 } from 'lucide-react'

const WA_URL = 'https://wa.me/918121507323'

const menuCategories = ['All', 'Starters', 'Biryani & Rice', 'Main Course', 'Tandoor & Breads', 'Beverages & Desserts']

const menuItems = [
  { name: 'Nizami Paneer Tikka', category: 'Starters', price: '₹280', desc: 'Cottage cheese marinated in royal Hyderabadi spices and cooked in clay oven', rating: 4.8, emoji: '🧀', popular: true },
  { name: 'Chicken 65 Original', category: 'Starters', price: '₹320', desc: 'Authentic Hyderabadi spiced crispy chicken tossed with fresh curry leaves and green chilies', rating: 4.9, emoji: '🍗', popular: true },
  { name: 'Mutton Seekh Kebab', category: 'Starters', price: '₹390', desc: 'Finely minced spiced mutton skewers charred to smoky tenderness', rating: 4.9, emoji: '🍢', popular: true },
  { name: 'Crispy Corn Pepper Salt', category: 'Starters', price: '₹220', desc: 'Wok tossed sweet corn kernels with scallions and crushed black pepper', rating: 4.6, emoji: '🌽', popular: false },
  { name: 'Dum Mutton Biryani', category: 'Biryani & Rice', price: '₹420', desc: 'Slow cooked fragrant long-grain basmati rice with tender succulent mutton & saffron', rating: 5.0, emoji: '🍚', popular: true },
  { name: 'Special Chicken Dum Biryani', category: 'Biryani & Rice', price: '₹340', desc: 'Layered spiced marinated chicken and aged basmati rice cooked on charcoal dum', rating: 4.9, emoji: '🍗', popular: true },
  { name: 'Subz Dum Biryani', category: 'Biryani & Rice', price: '₹260', desc: 'Garden fresh vegetables layered with spiced aromatic rice and mint', rating: 4.7, emoji: '🥕', popular: false },
  { name: 'Murgh Makhani (Butter Chicken)', category: 'Main Course', price: '₹360', desc: 'Tandoor grilled chicken simmered in rich satin tomato and cashew gravy', rating: 4.9, emoji: '🍛', popular: true },
  { name: 'Dal Makhani Bukhara', category: 'Main Course', price: '₹260', desc: 'Slow-simmered black lentils for 18 hours with hand-churned butter', rating: 4.8, emoji: '🫘', popular: false },
  { name: 'Butter Garlic Naan', category: 'Tandoor & Breads', price: '₹75', desc: 'Soft leavened tandoor bread brushed with fresh garlic butter', rating: 4.8, emoji: '🫓', popular: true },
  { name: 'Special Mango Mastani', category: 'Beverages & Desserts', price: '₹160', desc: 'Thick mango pulp milkshake topped with dry fruits and ice cream', rating: 4.9, emoji: '🥭', popular: true },
  { name: 'Shahi Tukda with Rabri', category: 'Beverages & Desserts', price: '₹150', desc: 'Crispy fried bread steeped in saffron syrup, smothered with thickened rabri', rating: 4.9, emoji: '🍮', popular: true },
]

export default function RestaurantPreview() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [resForm, setResForm] = useState({ name: '', phone: '', guests: '2 Guests', date: '', time: '7:30 PM' })
  const [booked, setBooked] = useState(false)

  const filtered = activeCategory === 'All' ? menuItems : menuItems.filter((i) => i.category === activeCategory)

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello Spice Garden! I'd like to reserve a table:\n• Name: ${resForm.name}\n• Phone: ${resForm.phone}\n• Guests: ${resForm.guests}\n• Date: ${resForm.date || 'Today'}\n• Time: ${resForm.time}`
    window.open(`${WA_URL}?text=${encodeURIComponent(msg)}`, '_blank')
    setBooked(true)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Top Demo Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white text-center py-2.5 px-4 text-xs font-semibold flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to PIXORA
        </Link>
        <span>🍽️ Sample Restaurant Website Demo — Want a custom website like this?</span>
        <a href={`${WA_URL}?text=Hi! I want a restaurant website like your Spice Garden demo.`} target="_blank" rel="noopener noreferrer" className="bg-white text-orange-700 px-3 py-1 rounded-full text-xs font-bold hover:bg-orange-50 transition">
          Get This Website
        </a>
      </div>

      {/* Restaurant Navbar */}
      <nav className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xl shadow-lg shadow-orange-500/20">
              🥘
            </div>
            <div>
              <h1 className="text-xl font-black text-amber-400 tracking-wide font-serif">SPICE GARDEN</h1>
              <p className="text-[11px] text-slate-400 tracking-wider uppercase">Royal Hyderabadi & North Indian Dining</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#reservation" className="hidden sm:inline-flex px-4 py-2 border border-amber-500/50 hover:bg-amber-500/10 text-amber-400 rounded-xl text-xs font-semibold transition">
              Table Reservation
            </a>
            <a
              href={`${WA_URL}?text=Hello Spice Garden! I'd like to place a food order for delivery/pickup.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-bold rounded-xl shadow-md transition"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop')] bg-cover bg-center brightness-[0.28]" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
            ✨ Fine Dining Experience in Jubilee Hills, Hyderabad
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-black text-white mb-6 leading-tight">
            Authentic Flavors, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              Timeless Hyderabadi Heritage.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience handcrafted Biryanis, slow-cooked royal gravies, and succulent kebabs prepared with traditional recipes and the purest spices.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#menu" className="px-7 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg transition">
              Explore Digital Menu
            </a>
            <a href="#reservation" className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition backdrop-blur-sm">
              Book a Table
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <div className="border-y border-slate-800 bg-slate-950/60 py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-amber-400 font-serif">4.9 ★</div>
            <div className="text-xs text-slate-400 mt-1">1,400+ Google Reviews</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-400 font-serif">100% Halal</div>
            <div className="text-xs text-slate-400 mt-1">Fresh Farm Produce</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-400 font-serif">12 PM – 11 PM</div>
            <div className="text-xs text-slate-400 mt-1">Open All 7 Days</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-400 font-serif">30 Mins</div>
            <div className="text-xs text-slate-400 mt-1">Express Delivery</div>
          </div>
        </div>
      </div>

      {/* Digital Menu Section */}
      <section id="menu" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Culinary Masterpieces</span>
          <h3 className="text-3xl sm:text-4xl font-serif font-black text-white mt-2 mb-4">Our Digital Menu</h3>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Browse our full selection of freshly crafted starters, main course curries, breads and desserts.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.name} className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-5 hover:border-amber-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="text-3xl">{item.emoji}</div>
                  {item.popular && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-bold uppercase">
                      Bestseller
                    </span>
                  )}
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition mb-1">{item.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-700/60">
                <div>
                  <span className="text-lg font-black text-amber-400">{item.price}</span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <a
                  href={`${WA_URL}?text=Hello Spice Garden! I want to order *${encodeURIComponent(item.name)}* (${item.price}). Please share delivery timings.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 text-white rounded-lg text-xs font-bold transition shadow"
                >
                  Order WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Table Reservation Section */}
      <section id="reservation" className="bg-slate-950 py-20 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Reserve Your Table</span>
            <h3 className="text-3xl sm:text-4xl font-serif font-black text-white mt-2 mb-4">
              Celebrate Moments With Royal Dining
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Whether it’s a family reunion, a corporate dinner, or an intimate candlelit celebration, we ensure your evening is unforgettable.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Road No. 36, Jubilee Hills, Hyderabad 500033</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Lunch: 12:00 PM – 3:30 PM | Dinner: 7:00 PM – 11:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+918121507323" className="hover:text-amber-400 transition">+91 81215 07323</a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl">
            {booked ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-14 h-14 text-green-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">Reservation Sent!</h4>
                <p className="text-xs text-slate-400 mb-6">WhatsApp has been opened with your reservation details. Our host will confirm your booking in 5 minutes.</p>
                <button onClick={() => setBooked(false)} className="px-5 py-2 text-xs bg-slate-800 text-slate-200 rounded-xl hover:bg-slate-700">
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleReservation} className="space-y-4">
                <h4 className="text-lg font-bold text-white mb-4">Table Reservation Request</h4>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                  <input
                    required
                    type="text"
                    value={resForm.name}
                    onChange={(e) => setResForm({ ...resForm, name: e.target.value })}
                    placeholder="e.g. Vikram Reddy"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone *</label>
                    <input
                      required
                      type="tel"
                      value={resForm.phone}
                      onChange={(e) => setResForm({ ...resForm, phone: e.target.value })}
                      placeholder="10-digit number"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Party Size</label>
                    <select
                      value={resForm.guests}
                      onChange={(e) => setResForm({ ...resForm, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option>2 Guests</option>
                      <option>4 Guests</option>
                      <option>6 Guests</option>
                      <option>8+ Guests (Family)</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Date</label>
                    <input
                      type="date"
                      value={resForm.date}
                      onChange={(e) => setResForm({ ...resForm, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Time Slot</label>
                    <select
                      value={resForm.time}
                      onChange={(e) => setResForm({ ...resForm, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option>12:30 PM</option>
                      <option>1:30 PM</option>
                      <option>7:30 PM</option>
                      <option>8:30 PM</option>
                      <option>9:30 PM</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 text-white font-bold rounded-xl text-sm transition shadow-lg mt-2"
                >
                  Confirm Table on WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <p className="mb-2">Spice Garden Fine Dining • Jubilee Hills, Hyderabad • Demo Project by PIXORA DIGITAL</p>
        <Link to="/" className="text-amber-400 hover:underline">Want a website built for your restaurant? Contact PIXORA DIGITAL →</Link>
      </footer>
    </div>
  )
}
