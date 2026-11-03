import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ArrowLeft, Filter } from 'lucide-react'

const WA_URL = 'https://wa.me/918121507323'

const categories = ['All', 'Women', 'Men', 'Kids', 'Ethnic', 'Western', 'Sale']

const products = [
  { id: 1, name: 'Floral Anarkali Suit', category: 'Women', subcat: 'Ethnic', price: '₹1,899', originalPrice: '₹2,500', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop', badge: 'New Arrival', colors: ['#8B4513', '#FF69B4', '#800080'], rating: 4.8 },
  { id: 2, name: 'Slim Fit Chinos', category: 'Men', subcat: 'Western', price: '₹999', originalPrice: '₹1,499', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop', badge: 'Sale', colors: ['#8B8680', '#1C1C1C', '#3B5323'], rating: 4.6 },
  { id: 3, name: 'Embroidered Lehenga', category: 'Women', subcat: 'Ethnic', price: '₹4,599', originalPrice: '₹6,000', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop', badge: 'Premium', colors: ['#DC143C', '#FFD700', '#000080'], rating: 4.9 },
  { id: 4, name: 'Kurta Set', category: 'Men', subcat: 'Ethnic', price: '₹1,299', originalPrice: null, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4468?w=400&h=500&fit=crop', badge: null, colors: ['#FFFFFF', '#F5F5DC', '#87CEEB'], rating: 4.5 },
  { id: 5, name: 'Kids Frock Set', category: 'Kids', subcat: 'Western', price: '₹699', originalPrice: '₹999', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=500&fit=crop', badge: 'Sale', colors: ['#FFB6C1', '#90EE90', '#87CEEB'], rating: 4.7 },
  { id: 6, name: 'Denim Jacket', category: 'Women', subcat: 'Western', price: '₹1,499', originalPrice: null, img: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=400&h=500&fit=crop', badge: 'Trending', colors: ['#1C6EA4', '#000000'], rating: 4.8 },
]

export default function ClothingPreview() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? products : products.filter((p) =>
    p.category === activeCategory || p.subcat === activeCategory || (activeCategory === 'Sale' && p.originalPrice)
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white text-center py-2 text-xs font-medium">
        📌 Sample clothing store demo by PIXORA DIGITAL —
        <a href={`${WA_URL}?text=I want a clothing store website like this demo`} target="_blank" rel="noopener noreferrer" className="underline ml-1">Get one for your business</a>
        <Link to="/" className="ml-3 opacity-70 hover:opacity-100 inline-flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Back</Link>
      </div>

      {/* Announcement bar */}
      <div className="bg-black text-white text-center py-2 text-xs font-medium">
        🎉 NEW ARRIVALS IN — Use code <strong>WELCOME10</strong> for 10% off your first order | Free shipping on orders above ₹999
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-slate-900">TRENDY<span className="text-pink-500">WEAR</span></h1>
            <p className="text-xs text-slate-500">Fashion for Everyone</p>
          </div>
          <a href={`${WA_URL}?text=Hi! I'd like to order from TrendyWear. Please share the catalogue.`} target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-pink-500 text-white text-sm font-semibold rounded-xl hover:bg-pink-600 transition-colors">
            Order via WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-pink-500 font-semibold text-sm mb-3 tracking-widest uppercase">New Season Collection</p>
            <h2 className="text-5xl font-black text-slate-900 mb-4 leading-tight">
              Style That<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Speaks Volumes.</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg">Discover premium fashion for women, men, and kids. From ethnic elegance to modern western wear.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#catalogue" className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl transition-colors">Browse Collection</a>
              <a href={`${WA_URL}?text=Hi! I'd like to see the full collection from TrendyWear.`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-pink-500 text-pink-600 font-bold rounded-xl hover:bg-pink-50 transition-colors">WhatsApp Order</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=400&fit=crop" alt="Fashion" className="rounded-2xl w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&h=400&fit=crop" alt="Fashion 2" className="rounded-2xl w-full h-48 object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Offers banner */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 text-center">
        <p className="font-bold">🔥 SALE UP TO 40% OFF — Limited Time Offer on Selected Items</p>
      </div>

      {/* Catalogue */}
      <section id="catalogue" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-3xl font-black text-slate-900">Our Collection</h2>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Filter className="w-4 h-4" />
            <span>{filtered.length} items</span>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-pink-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-pink-100 hover:text-pink-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <div key={product.id} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-pink-200 transition-all">
              <div className="relative overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                {product.badge && (
                  <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-bold text-white ${product.badge === 'Sale' ? 'bg-red-500' : product.badge === 'New Arrival' ? 'bg-green-500' : product.badge === 'Trending' ? 'bg-orange-500' : 'bg-purple-500'}`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-bold text-slate-900 text-sm mb-1 truncate">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs text-slate-500">{product.rating}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-black text-slate-900">{product.price}</span>
                  {product.originalPrice && <span className="text-xs text-slate-400 line-through">{product.originalPrice}</span>}
                </div>
                <div className="flex gap-1 mb-3">
                  {product.colors.map((c) => (
                    <div key={c} className="w-4 h-4 rounded-full border-2 border-white shadow" style={{ background: c }} />
                  ))}
                </div>
                <a
                  href={`${WA_URL}?text=Hi! I'd like to order ${product.name} (${product.price}) from TrendyWear. Please share size options.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p className="mb-2">👗 TrendyWear — Fashion for Everyone, Hyderabad</p>
        <p className="text-slate-600 text-xs">Demo website by <Link to="/" className="text-indigo-400 hover:underline">PIXORA DIGITAL</Link>. Not a real business.</p>
      </footer>

      {/* WhatsApp Float */}
      <a href={`${WA_URL}?text=Hi TrendyWear! I'd like to browse your collection.`} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
