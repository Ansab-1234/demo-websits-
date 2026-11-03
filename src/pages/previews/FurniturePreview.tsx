import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
  Ruler,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Layers,
  FileText
} from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../../lib/constants'

interface FurniturePiece {
  id: string
  name: string
  space: string
  wood: string
  dimensions: string
  price: string
  finish: string
  image: string
  isSignature?: boolean
}

const furniturePieces: FurniturePiece[] = [
  {
    id: 'f-1',
    name: 'The Kyoto Low-Slung Teak Lounger',
    space: 'Living Room',
    wood: 'Grade-A Reclaimed Burma Teak',
    dimensions: '34"W × 36"D × 28"H',
    price: '₹28,500',
    finish: 'Natural Matte Hardwax Oil',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&h=700&fit=crop',
    isSignature: true,
  },
  {
    id: 'f-2',
    name: 'Solid Smoked Oak 8-Seater Dining Table',
    space: 'Dining Room',
    wood: 'American White Oak with Live Edge',
    dimensions: '96"L × 40"W × 30"H',
    price: '₹64,000',
    finish: 'Smoked Walnut Tint & Polyurethane Seal',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&h=700&fit=crop',
    isSignature: true,
  },
  {
    id: 'f-3',
    name: 'Floating Zen Platform King Bed',
    space: 'Master Suite',
    wood: 'Solid Indian Sheesham with Cane Headboard',
    dimensions: '82"L × 78"W × 38"H (King)',
    price: '₹48,000',
    finish: 'Hand-Rubbed Organic Linseed Oil',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&h=700&fit=crop',
  },
  {
    id: 'f-4',
    name: 'Fluted Travertine & Walnut Coffee Plinth',
    space: 'Living Room',
    wood: 'Italian Roman Travertine & Walnut Base',
    dimensions: '48"L × 26"W × 15"H',
    price: '₹34,500',
    finish: 'Honed Matte Stone & Oiled Walnut',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986b88?w=900&h=700&fit=crop',
  },
  {
    id: 'f-5',
    name: 'Architect’s Executive Writing Desk',
    space: 'Studio Workspace',
    wood: 'Quarter-Sawn Teakwood with Brass Inlay',
    dimensions: '60"W × 28"D × 30"H',
    price: '₹42,000',
    finish: 'Micro-Satin Protective Wax',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=900&h=700&fit=crop',
  },
  {
    id: 'f-6',
    name: 'Cane-Woven Pavilion Credenza',
    space: 'Dining Room',
    wood: 'Seasoned Teakwood with Rattan Caning',
    dimensions: '72"W × 18"D × 32"H',
    price: '₹39,000',
    finish: 'Heritage Honey Teak Glaze',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=900&h=700&fit=crop',
  },
]

export default function FurniturePreview() {
  const [selectedSpace, setSelectedSpace] = useState('All Spaces')
  const [blueprintInquiry, setBlueprintInquiry] = useState({
    name: '',
    phone: '',
    spaceType: 'Complete 3BHK / 4BHK Residence',
    woodPreference: 'Grade-A Reclaimed Burma Teak',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const filteredPieces = selectedSpace === 'All Spaces'
    ? furniturePieces
    : furniturePieces.filter((p) => p.space === selectedSpace)

  const handleBlueprintSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!blueprintInquiry.name || !blueprintInquiry.phone) return
    const msg = `Hello Timber & Arch Showroom!
I would like to request a bespoke furniture & blueprint consultation:
• Client: ${blueprintInquiry.name}
• Phone: ${blueprintInquiry.phone}
• Space Scope: ${blueprintInquiry.spaceType}
• Preferred Hardwood: ${blueprintInquiry.woodPreference}
• Details: ${blueprintInquiry.notes || 'Please share catalog & showroom consultation availability.'}`

    window.open(getWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#231F1D] font-sans selection:bg-[#8C6338] selection:text-white">
      {/* Top Agency Demo Navigation Bar */}
      <div className="bg-[#1C1816] text-[#A89E96] px-4 py-2 text-xs flex items-center justify-between border-b border-[#2C2724]">
        <Link to="/our-work" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PIXORA Showcase</span>
        </Link>
        <span className="hidden sm:inline font-mono tracking-widest uppercase text-[10px] text-[#C29D76]">
          Industry Showcase: Solid Hardwood Furniture & Architectural Interiors
        </span>
        <a
          href={getWhatsAppUrl("Hello PIXORA DIGITAL! I explored your Timber & Arch Furniture Showroom demo. I'd like to build an architectural furniture website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C29D76] hover:underline font-semibold"
        >
          Build Website for My Showroom →
        </a>
      </div>

      {/* Showroom Address Strip */}
      <div className="border-b border-[#E2DDD3] bg-[#EBE7DF] px-4 py-2.5 text-xs text-[#6B6158]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#8C6338]" />
              Financial District, Nanakramguda, Hyderabad
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#8C6338]" />
              Mon – Sat: 10:30 AM – 7:30 PM (Private Viewings by Appointment)
            </span>
          </div>
          <span className="font-semibold text-[#231F1D] flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#8C6338]" />
            Showroom Concierge: {PHONE_DISPLAY}
          </span>
        </div>
      </div>

      {/* Showroom Header */}
      <header className="sticky top-0 z-40 bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-sans-outfit text-2xl font-black tracking-tight text-[#231F1D] uppercase">
              TIMBER & ARCH
            </span>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#8C6338]">
              Architectural Joinery & Living Studio • Hyderabad
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#6B6158]">
            <a href="#collections" className="hover:text-[#231F1D] transition-colors">Catalog by Space</a>
            <a href="#materials" className="hover:text-[#231F1D] transition-colors">Hardwood Standards</a>
            <a href="#blueprint" className="hover:text-[#231F1D] transition-colors">Custom Floorplans</a>
          </nav>

          <a
            href="#blueprint"
            className="px-5 py-2.5 rounded-full bg-[#231F1D] text-[#F4F1EA] text-xs font-bold tracking-wider uppercase hover:bg-[#8C6338] transition-colors"
          >
            Schedule Showroom Visit
          </a>
        </div>
      </header>

      {/* Hero: Architectural Living Space */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#8C6338] font-bold block">
              Kiln-Dried Hardwood Craftsmanship
            </span>
            <h1 className="font-sans-outfit text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#231F1D] leading-[1.02]">
              FURNITURE AS AN <span className="font-serif-editorial italic font-normal text-[#8C6338]">ARCHITECTURAL ART FORM.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6B6158] leading-relaxed max-w-lg font-light">
              Crafted from 100% seasoned Burma Teak, American Oak, and Indian Sheesham. Traditional mortise-and-tenon joinery built to endure generations.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#collections"
                className="px-8 py-4 rounded-full bg-[#231F1D] text-[#F4F1EA] text-xs font-bold uppercase tracking-widest hover:bg-[#8C6338] transition-colors shadow-lg"
              >
                Explore Curated Spaces
              </a>
              <a
                href="#blueprint"
                className="px-8 py-4 rounded-full border border-[#D1C9BC] text-[#231F1D] text-xs font-bold uppercase tracking-widest hover:bg-[#EBE7DF] transition-colors"
              >
                Custom Floorplan Quote
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E2DDD3]">
              <div>
                <span className="font-sans-outfit text-2xl font-bold text-[#231F1D] block">10 Yrs</span>
                <span className="text-xs text-[#6B6158]">Structural Warranty</span>
              </div>
              <div>
                <span className="font-sans-outfit text-2xl font-bold text-[#231F1D] block">&lt;8%</span>
                <span className="text-xs text-[#6B6158]">Moisture Kiln-Dried</span>
              </div>
              <div>
                <span className="font-sans-outfit text-2xl font-bold text-[#231F1D] block">Custom</span>
                <span className="text-xs text-[#6B6158]">CAD Dimensions</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] relative group">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&h=750&fit=crop"
                alt="Architectural Living Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#D1C9BC]">Masterpiece Series</span>
                <h3 className="font-sans-outfit text-2xl font-bold">The Kyoto Teak Lounger</h3>
                <p className="text-xs text-[#E8E4DC] mt-1">Reclaimed Burma Teak with Bouclé Linen Cushion • ₹28,500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog by Space */}
      <section id="collections" className="py-24 bg-[#EBE7DF] border-t border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#8C6338] font-bold block mb-2">
                Curated Architecture
              </span>
              <h2 className="font-sans-outfit text-3xl sm:text-5xl font-black">
                Explore by Living Space
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All Spaces', 'Living Room', 'Dining Room', 'Master Suite', 'Studio Workspace'].map((space) => (
                <button
                  key={space}
                  onClick={() => setSelectedSpace(space)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedSpace === space
                      ? 'bg-[#231F1D] text-[#F4F1EA] shadow-md'
                      : 'bg-[#F4F1EA] text-[#6B6158] border border-[#D1C9BC] hover:text-[#231F1D]'
                  }`}
                >
                  {space}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPieces.map((p) => (
              <div
                key={p.id}
                className="bg-[#F4F1EA] rounded-3xl overflow-hidden border border-[#E2DDD3] hover:border-[#8C6338] transition-all duration-300 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E2DDD3]">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    {p.isSignature && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#231F1D] text-[#F4F1EA]">
                        Showroom Signature
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C6338] font-bold block mb-1">
                      {p.space}
                    </span>
                    <h3 className="font-sans-outfit text-xl font-bold text-[#231F1D] mb-2 leading-snug">
                      {p.name}
                    </h3>

                    <div className="space-y-1.5 text-xs text-[#6B6158] my-4 pt-4 border-t border-[#E2DDD3]">
                      <p><strong>Hardwood:</strong> {p.wood}</p>
                      <p><strong>Dimensions:</strong> {p.dimensions}</p>
                      <p><strong>Protective Finish:</strong> {p.finish}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E2DDD3] mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#8C7E72] uppercase block">Price</span>
                    <span className="font-sans-outfit text-xl font-black text-[#231F1D]">{p.price}</span>
                  </div>
                  <a
                    href={getWhatsAppUrl(`Hello Timber & Arch! I am interested in "${p.name}" (${p.price}). Could you provide specifications, wood finish swatches, and showroom availability?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#231F1D] hover:bg-[#8C6338] text-[#F4F1EA] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1"
                  >
                    <span>Inquire on WhatsApp</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Blueprint & Floorplan Consultation Suite */}
      <section id="blueprint" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EBE7DF] rounded-3xl p-8 sm:p-12 border border-[#D1C9BC] shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#8C6338] font-bold block mb-2">
              Architectural Collaboration
            </span>
            <h2 className="font-sans-outfit text-3xl sm:text-5xl font-black">
              Custom Carpentry & Floorplan Consult
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6158] mt-2">
              Building a new villa or apartment in Hyderabad? Bring your architectural floorplans or room measurements for custom wood finish matching.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#8C6338] mx-auto" />
              <h3 className="font-sans-outfit text-2xl font-bold">Inquiry Dispatched to Showroom</h3>
              <p className="text-xs text-[#6B6158] max-w-md mx-auto">
                Your consultation request has been prepared on WhatsApp. Tap send to discuss your floorplans directly with our lead furniture architect.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full border border-[#D1C9BC] text-xs font-semibold hover:bg-white/50"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleBlueprintSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#6B6158] mb-2">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kilaru"
                    value={blueprintInquiry.name}
                    onChange={(e) => setBlueprintInquiry({ ...blueprintInquiry, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#D1C9BC] text-sm text-[#231F1D] focus:outline-none focus:ring-2 focus:ring-[#8C6338]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#6B6158] mb-2">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={blueprintInquiry.phone}
                    onChange={(e) => setBlueprintInquiry({ ...blueprintInquiry, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#D1C9BC] text-sm text-[#231F1D] focus:outline-none focus:ring-2 focus:ring-[#8C6338]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#6B6158] mb-2">
                    Scope of Residence
                  </label>
                  <select
                    value={blueprintInquiry.spaceType}
                    onChange={(e) => setBlueprintInquiry({ ...blueprintInquiry, spaceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#D1C9BC] text-sm text-[#231F1D] focus:outline-none focus:ring-2 focus:ring-[#8C6338]"
                  >
                    <option>Complete 3BHK / 4BHK Residence</option>
                    <option>Gated Villa Project (5000+ Sq.Ft)</option>
                    <option>Living & Dining Room Suite Only</option>
                    <option>Executive Office & Workspace</option>
                    <option>Custom Single Standalone Piece</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#6B6158] mb-2">
                    Hardwood Preference
                  </label>
                  <select
                    value={blueprintInquiry.woodPreference}
                    onChange={(e) => setBlueprintInquiry({ ...blueprintInquiry, woodPreference: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#D1C9BC] text-sm text-[#231F1D] focus:outline-none focus:ring-2 focus:ring-[#8C6338]"
                  >
                    <option>Grade-A Reclaimed Burma Teak</option>
                    <option>American White Oak (Smoked / Natural)</option>
                    <option>Seasoned Indian Sheesham (Rosewood)</option>
                    <option>Stone & Marble Inlay Combinations</option>
                    <option>Architectural Recommendation Needed</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#231F1D] hover:bg-[#8C6338] text-[#F4F1EA] font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-lg"
              >
                Send Floorplan Consultation Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1816] text-[#8C7E72] py-12 border-t border-[#2C2724] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Timber & Arch Living. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#A89E96]">Sample Business Website Concept engineered by PIXORA DIGITAL</p>
        </div>
      </footer>
    </div>
  )
}
