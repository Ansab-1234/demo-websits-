import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Filter,
  Eye,
  Ruler,
  Phone,
  MessageSquare
} from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../../lib/constants'

interface Product {
  id: string
  title: string
  collection: string
  fabric: string
  price: string
  sizes: string[]
  colors: string[]
  image: string
  isBestseller?: boolean
}

const collections: Product[] = [
  {
    id: 'look-1',
    title: 'The Crimson Zari Tissue Anarkali',
    collection: 'Festive Silk',
    fabric: 'Pure Handwoven Chanderi Tissue with Zardozi Borders',
    price: '₹14,500',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#990000', '#D4AF37', '#1A1A1A'],
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=1100&fit=crop',
    isBestseller: true,
  },
  {
    id: 'look-2',
    title: 'Raw Mulberry Silk Bandhgala Suit',
    collection: 'Menswear Couture',
    fabric: 'Structured Matka Silk with Hand-Carved Brass Buttons',
    price: '₹18,200',
    sizes: ['38', '40', '42', '44'],
    colors: ['#0B1320', '#2C2B29', '#FFFFFF'],
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4468?w=800&h=1100&fit=crop',
    isBestseller: true,
  },
  {
    id: 'look-3',
    title: 'Contemporary Cape & Draped Dhoti Set',
    collection: 'Indo-Western Pret',
    fabric: 'Georgette Crepe with Micro-Pleated Organza Cape',
    price: '₹11,800',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#E11D48', '#2563EB', '#F59E0B'],
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&h=1100&fit=crop',
  },
  {
    id: 'look-4',
    title: 'Handloom Tussar Silk Trench Jacket',
    collection: 'Indo-Western Pret',
    fabric: 'Textured Natural Tussar with Hand-Embroidered Lapel',
    price: '₹9,600',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#C4A482', '#1C1C1C'],
    image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=800&h=1100&fit=crop',
  },
  {
    id: 'look-5',
    title: 'Emerald Gilded Lehenga Ensemble',
    collection: 'Festive Silk',
    fabric: 'Banarasi Brocade with Stitched Can-Can & Net Dupatta',
    price: '₹24,000',
    sizes: ['Custom Fitted', 'S', 'M', 'L'],
    colors: ['#064E3B', '#B45309'],
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=1100&fit=crop',
    isBestseller: true,
  },
  {
    id: 'look-6',
    title: 'Ivory Linen Kurta with Mirror Nehru Vest',
    collection: 'Menswear Couture',
    fabric: '100% Breathable European Linen with Mirror-Work Cotton',
    price: '₹8,900',
    sizes: ['38', '40', '42', '44'],
    colors: ['#FAF9F6', '#E5E7EB'],
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1100&fit=crop',
  },
]

export default function ClothingPreview() {
  const [selectedFilter, setSelectedFilter] = useState('All Drops')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>('M')

  const filteredProducts = selectedFilter === 'All Drops'
    ? collections
    : collections.filter((p) => p.collection === selectedFilter)

  const handleOrderWhatsApp = (product: Product) => {
    const msg = `Hello Atelier Nouveau!
I would like to order / check size availability for:
• Look: ${product.title}
• Collection: ${product.collection}
• Fabric: ${product.fabric}
• Size: ${selectedSize}
• Price: ${product.price}
Please share payment & delivery timeline details!`

    window.open(getWhatsAppUrl(msg), '_blank')
  }

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#FFFFFF] font-sans selection:bg-[#E11D48] selection:text-white">
      {/* Top Agency Demo Navigation Bar */}
      <div className="bg-[#050506] text-[#888890] px-4 py-2 text-xs flex items-center justify-between border-b border-[#1E1E24]">
        <Link to="/our-work" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PIXORA Showcase</span>
        </Link>
        <span className="hidden sm:inline font-mono tracking-widest uppercase text-[10px] text-[#E11D48]">
          Industry Showcase: High-Fashion Boutique & Pret Lookbook
        </span>
        <a
          href={getWhatsAppUrl("Hello PIXORA DIGITAL! I explored your Atelier Nouveau Fashion Boutique demo. I'd like to build an online fashion boutique website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E11D48] hover:underline font-semibold"
        >
          Build Website for My Brand →
        </a>
      </div>

      {/* Ticker Tape */}
      <div className="border-b border-[#1E1E24] bg-[#0F0F14] px-4 py-2 text-[11px] font-mono tracking-widest uppercase text-[#90909A] overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          ● AUTUMN/FESTIVE CAPSULE DROP NOW LIVE ● BESPOKE BRIDAL MEASUREMENTS BY APPOINTMENT ● COMPLIMENTARY COURIER ACROSS HYDERABAD ● 100% ARTISANAL WEAVE
        </div>
      </div>

      {/* Brand Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0C]/95 backdrop-blur-md border-b border-[#1E1E24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-display-syne text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              ATELIER NOUVEAU
            </span>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#E11D48]">
              Couture & Pret Lookbook • Banjara Hills
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-[#888890]">
            <a href="#collection" className="hover:text-white transition-colors">Current Drop</a>
            <a href="#fabrics" className="hover:text-white transition-colors">Fabrics & Craft</a>
            <a href="#concierge" className="hover:text-white transition-colors">Size Concierge</a>
          </nav>

          <a
            href={getWhatsAppUrl("Hello Atelier Nouveau! I would like to schedule a private bridal styling consultation at your Banjara Hills studio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#E11D48] hover:text-white transition-colors"
          >
            WhatsApp Concierge
          </a>
        </div>
      </header>

      {/* Hero: Asymmetrical High-Fashion Cover */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1E1E24]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E11D48] font-bold block">
              Capsule Edition 2026
            </span>
            <h1 className="font-display-syne text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[0.95]">
              SILK IN MOTION. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-amber-300">
                TIMELESS COUTURE.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#90909A] leading-relaxed max-w-lg font-light">
              Crafted in collaboration with master weavers of Chanderi and Banaras. Designed for modern celebrations, contemporary soirées, and destination weddings.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#collection"
                className="px-8 py-4 rounded-full bg-[#E11D48] hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-rose-900/30"
              >
                Browse Current Drop
              </a>
              <a
                href="#concierge"
                className="px-8 py-4 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Custom Measurements
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&h=900&fit=crop"
                alt="Editorial Look 1"
                className="rounded-3xl w-full h-80 sm:h-96 object-cover border border-[#1E1E24]"
              />
              <div className="p-3 bg-[#121218] rounded-2xl border border-[#1E1E24] text-xs">
                <span className="text-[10px] font-mono text-[#E11D48] uppercase block">Lookbook Item</span>
                <p className="font-bold text-white">The Zari Tissue Anarkali</p>
                <p className="text-[#888890] text-[11px]">Hand-dyed crimson</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4b4468?w=700&h=900&fit=crop"
                alt="Editorial Look 2"
                className="rounded-3xl w-full h-80 sm:h-96 object-cover border border-[#1E1E24]"
              />
              <div className="p-3 bg-[#121218] rounded-2xl border border-[#1E1E24] text-xs">
                <span className="text-[10px] font-mono text-[#E11D48] uppercase block">Menswear Edit</span>
                <p className="font-bold text-white">Matka Silk Bandhgala</p>
                <p className="text-[#888890] text-[11px]">Brass button details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Collection Gallery */}
      <section id="collection" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E11D48] font-bold block mb-2">
              Curated Lookbook
            </span>
            <h2 className="font-display-syne text-3xl sm:text-5xl font-extrabold">
              The Seasonal Catalogue
            </h2>
          </div>
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['All Drops', 'Festive Silk', 'Indo-Western Pret', 'Menswear Couture'].map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedFilter === f
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-[#14141C] text-[#888890] border border-[#1E1E24] hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <article
              key={p.id}
              className="group bg-[#121218] rounded-3xl border border-[#1E1E24] overflow-hidden hover:border-[#E11D48]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    loading="lazy"
                  />
                  {p.isBestseller && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#E11D48] text-white">
                      Bestseller
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md px-3 py-2 rounded-xl">
                    <span>Sizes: {p.sizes.join(' • ')}</span>
                    <span className="font-bold">{p.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#E11D48] block mb-1">
                    {p.collection}
                  </span>
                  <h3 className="font-display-syne text-xl font-bold text-white mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#888890] leading-relaxed mb-4">
                    {p.fabric}
                  </p>

                  {/* Color Swatches */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-mono text-[#666670] uppercase">Tones:</span>
                    <div className="flex items-center gap-1.5">
                      {p.colors.map((c, i) => (
                        <span
                          key={i}
                          className="w-3.5 h-3.5 rounded-full border border-white/20"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#1E1E24] mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#666670] uppercase block">Price</span>
                  <span className="font-mono text-base font-bold text-white">{p.price}</span>
                </div>
                <button
                  onClick={() => handleOrderWhatsApp(p)}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#E11D48] text-black hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sizing & Tailoring Concierge */}
      <section id="concierge" className="py-24 bg-[#0F0F14] border-t border-[#1E1E24]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E11D48] font-bold block">
            Bespoke Tailoring Concierge
          </span>
          <h2 className="font-display-syne text-3xl sm:text-5xl font-extrabold">
            Need Custom Sizing or Bridal Appointments?
          </h2>
          <p className="text-sm text-[#90909A] max-w-xl mx-auto leading-relaxed">
            Every garment from Atelier Nouveau can be tailored to your precise measurements. We also host private bridal trousseau consultations at our Banjara Hills studio with our master master-cutter.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello Atelier Nouveau! I'd like to book an in-person measurement consultation at your Banjara Hills studio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#E11D48] hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
            >
              Book In-Person Studio Fitting
            </a>
            <a
              href={getWhatsAppUrl("Hello! Could you share your complete lookbook catalog and size measurement guide?")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Request Size Measurement Chart
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050506] text-[#666670] py-12 border-t border-[#1E1E24] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Atelier Nouveau Couture. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#888890]">Sample Business Website Concept engineered by PIXORA DIGITAL</p>
        </div>
      </footer>
    </div>
  )
}
