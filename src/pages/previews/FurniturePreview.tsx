import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Star, Phone, MapPin, Check, Heart, Shield, Sparkles } from 'lucide-react'

const WA_URL = 'https://wa.me/918121507323'

const categories = ['All', 'Living Room', 'Bedroom', 'Dining Sets', 'Ergonomic Office', 'Accent & Decor']

const products = [
  {
    id: 1,
    name: 'Nordic 3-Seater Velvet Sofa',
    category: 'Living Room',
    price: '₹34,999',
    originalPrice: '₹48,000',
    wood: 'Kiln-Dried Solid Teak & High-Density Foam',
    dimensions: '84" W x 35" D x 32" H',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Royal Chesterfield Sheesham King Bed',
    category: 'Bedroom',
    price: '₹44,500',
    originalPrice: '₹59,000',
    wood: 'Handcrafted Seasoned Sheesham Wood with Hydraulic Storage',
    dimensions: '78" L x 72" W (King Size)',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&h=450&fit=crop',
    tag: 'Trending',
  },
  {
    id: 3,
    name: 'Artisan 6-Seater Marble Dining Table',
    category: 'Dining Sets',
    price: '₹52,000',
    originalPrice: '₹72,000',
    wood: 'Italian Composite Marble Top with Solid Walnut Base',
    dimensions: '72" L x 36" W x 30" H',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=600&h=450&fit=crop',
    tag: 'Premium Luxury',
  },
  {
    id: 4,
    name: 'ErgoPro Solid Oak Executive Desk',
    category: 'Ergonomic Office',
    price: '₹19,800',
    originalPrice: '₹26,500',
    wood: 'Natural Oak with Concealed Cable Management & Soft Drawers',
    dimensions: '60" W x 28" D x 30" H',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=450&fit=crop',
    tag: 'Work From Home',
  },
  {
    id: 5,
    name: 'Minimalist Fluted Coffee Table',
    category: 'Living Room',
    price: '₹12,499',
    originalPrice: '₹18,000',
    wood: 'Fluted Teak Finish with Toughened Glass Top',
    dimensions: '36" Dia x 18" H',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&h=450&fit=crop',
    tag: 'New Design',
  },
  {
    id: 6,
    name: 'Luxe Velvet Accent Wingback Chair',
    category: 'Accent & Decor',
    price: '₹16,500',
    originalPrice: '₹22,000',
    wood: 'Brass Finish Stiletto Legs & Stain-Resistant Fabric',
    dimensions: '32" W x 30" D x 40" H',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=450&fit=crop',
    tag: 'Limited Edition',
  },
]

export default function FurniturePreview() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [enquiryItem, setEnquiryItem] = useState<string | null>(null)

  const filtered = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Top Demo Banner */}
      <div className="bg-gradient-to-r from-amber-800 to-stone-800 text-white text-center py-2.5 px-4 text-xs font-semibold flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to PIXORA
        </Link>
        <span>🛋️ Sample Furniture & Home Decor Store Website Demo</span>
        <a href={`${WA_URL}?text=Hi! I want a furniture / interior showroom website like your Casa Elegante demo.`} target="_blank" rel="noopener noreferrer" className="bg-white text-amber-900 px-3 py-1 rounded-full text-xs font-bold hover:bg-amber-50 transition">
          Get My Furniture Website
        </a>
      </div>

      {/* Furniture Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-700 to-stone-800 flex items-center justify-center text-xl text-white">
              🛋️
            </div>
            <div>
              <h1 className="text-xl font-serif font-black tracking-wide text-stone-900">CASA ELEGANTE</h1>
              <p className="text-[10px] text-amber-800 font-semibold tracking-widest uppercase">Handcrafted Teak & Sheesham Living</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`${WA_URL}?text=Hello Casa Elegante! I'd like to request the 2026 furniture catalog & price list.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-stone-900 hover:bg-amber-900 text-white text-xs font-semibold rounded-xl shadow transition"
            >
              Request Catalog PDF
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=900&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="relative max-w-4xl mx-auto text-center z-10 text-white">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-6">
            ✨ Direct From Factory Showroom • Banjara Hills, Hyderabad
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-black mb-6 leading-tight">
            Furniture Built to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-stone-200">
              Grace Generations.
            </span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            100% solid seasoned hardwood, custom upholstery in 200+ fabric choices, and 10-year structural warranty on every piece.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#catalogue" className="px-7 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-lg transition">
              Explore Collection
            </a>
            <a
              href={`${WA_URL}?text=Hello Casa Elegante! I want to book a showroom visit to Banjara Hills.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition"
            >
              Book Showroom Visit
            </a>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <div className="border-b border-stone-200 bg-white py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-sm font-bold text-stone-900">10-Year Warranty</div>
            <div className="text-xs text-stone-500 mt-0.5">On All Solid Wood Frames</div>
          </div>
          <div>
            <div className="text-sm font-bold text-stone-900">Custom Dimensions</div>
            <div className="text-xs text-stone-500 mt-0.5">Tailored to Your Floor Plan</div>
          </div>
          <div>
            <div className="text-sm font-bold text-stone-900">Zero EMI Available</div>
            <div className="text-xs text-stone-500 mt-0.5">Bajaj Finserv & Credit Cards</div>
          </div>
          <div>
            <div className="text-sm font-bold text-stone-900">Free Hyderabad Delivery</div>
            <div className="text-xs text-stone-500 mt-0.5">Professional Assembly Included</div>
          </div>
        </div>
      </div>

      {/* Catalogue */}
      <section id="catalogue" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-widest">Handcrafted Collections</span>
          <h3 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 mt-2 mb-3">Featured Furniture Designs</h3>
          <p className="text-stone-600 text-sm max-w-xl mx-auto">
            Choose from ready-to-ship catalog designs or customize dimensions, fabric texture and wood stain.
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
                  ? 'bg-amber-800 text-white shadow-md'
                  : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-lg transition flex flex-col justify-between group">
              <div>
                <div className="relative h-56 overflow-hidden bg-stone-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                  <span className="absolute top-3 left-3 bg-stone-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider">{item.category}</span>
                  <h4 className="text-base font-bold text-stone-900 mt-1 mb-2">{item.name}</h4>
                  <p className="text-xs text-stone-600 mb-1"><strong>Material:</strong> {item.wood}</p>
                  <p className="text-xs text-stone-500 mb-4"><strong>Specs:</strong> {item.dimensions}</p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="text-lg font-black text-amber-900">{item.price}</div>
                  <div className="text-xs text-stone-400 line-through">{item.originalPrice}</div>
                </div>
                <a
                  href={`${WA_URL}?text=Hello Casa Elegante! I'm interested in *${encodeURIComponent(item.name)}* (${item.price}). Please share customized fabric options and delivery timeline.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-stone-900 hover:bg-amber-800 text-white text-xs font-bold rounded-xl transition shadow"
                >
                  Price Enquiry WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showroom & Custom Orders */}
      <section className="bg-stone-100 border-t border-stone-200 py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white border border-stone-200 p-8 sm:p-10 rounded-3xl shadow-sm text-center">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-widest">Custom Carpentry & Design</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-2 mb-4">
            Need Custom Furniture Crafted for Your Floor Plan?
          </h3>
          <p className="text-stone-600 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Send us your architect's drawings or room measurements on WhatsApp. Our master craftsmen will provide a 3D sketch and quote within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${WA_URL}?text=Hello Casa Elegante! I have a custom furniture requirement. Sharing my room measurements / reference images.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl shadow transition text-sm"
            >
              Send Reference on WhatsApp
            </a>
            <a
              href="tel:+918121507323"
              className="px-8 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl transition text-sm"
            >
              Call Showroom: +91 81215 07323
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500">
            Showroom: Plot 12, Road No. 10, Banjara Hills, Hyderabad • Mon - Sun: 10:30 AM - 8:30 PM
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-8 text-center text-xs text-stone-500">
        <p className="mb-2">Casa Elegante Hardwood Living • Banjara Hills, Hyderabad • Demo Project by PIXORA DIGITAL</p>
        <Link to="/" className="text-amber-800 hover:underline">Want a website built for your furniture brand? Contact PIXORA DIGITAL →</Link>
      </footer>
    </div>
  )
}
