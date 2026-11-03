import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Camera,
  Heart,
  Calendar,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Film
} from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../../lib/constants'

interface Story {
  title: string
  couple: string
  venue: string
  type: string
  coverImage: string
  frames: string[]
}

const stories: Story[] = [
  {
    title: 'The Royal Nizami Nuptials',
    couple: 'Ananya & Karthik',
    venue: 'Taj Falaknuma Palace, Hyderabad',
    type: '3-Day Royal Heritage Celebration',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&h=700&fit=crop',
    frames: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=600&h=800&fit=crop',
    ],
  },
  {
    title: 'Monsoon Mist in the Western Ghats',
    couple: 'Radhika & Siddharth',
    venue: 'Evolve Back Plantation Estate, Coorg',
    type: 'Intimate Botanical Destination Wedding',
    coverImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=1000&h=700&fit=crop',
    frames: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=800&fit=crop',
    ],
  },
]

const packages = [
  {
    name: 'The 2-Day Intimate Affair',
    fee: '₹2,50,000',
    coverage: 'Mehendi, Sangeet & Traditional Wedding Ceremony',
    deliverables: [
      'Lead candid photojournalist + traditional family photographer',
      '1 cinematographer shooting in 4K ProRes color profile',
      '3-4 minute cinematic teaser trailer within 14 days',
      '18-20 minute narrative wedding documentary film',
      'Handcrafted Italian archival leather fine-art album (35 spreads)',
      'Online password-protected cloud gallery with 600+ graded high-res stills',
    ],
  },
  {
    name: 'The Grand 3-Day Celebration',
    fee: '₹4,20,000',
    coverage: 'Haldi, Sangeet Gala, Wedding Muhurtham & Reception',
    deliverables: [
      '2 master candid photographers + 2 traditional photographers',
      '2 cinema filmmakers + licensed drone aerial cinematography',
      'Same-day wedding highlights edit for reception screening',
      'Full-length feature film (30-40 mins) with raw footage delivery',
      '2 heirloom leather albums (1 couple album + 1 parents album)',
      'Pre-wedding editorial concept shoot in Hyderabad or destination',
    ],
    isPopular: true,
  },
]

export default function PhotographyPreview() {
  const [inquiry, setInquiry] = useState({
    name: '',
    phone: '',
    weddingDate: '',
    venue: 'Hyderabad (Falaknuma / Hitex / Outdoor Villa)',
    estimatedGuests: '300 – 600 Guests',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inquiry.name || !inquiry.phone || !inquiry.weddingDate) return
    const msg = `Hello Lumière & Frame!
I would like to check wedding date availability & investment packages:
• Couple / Client: ${inquiry.name}
• Contact: ${inquiry.phone}
• Wedding Date: ${inquiry.weddingDate}
• Venue Location: ${inquiry.venue}
• Expected Gathering: ${inquiry.estimatedGuests}
Please confirm team availability and share your complete wedding brochure!`

    window.open(getWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#070709] text-[#F3F2EE] font-sans selection:bg-[#C5A880] selection:text-black">
      {/* Top Agency Demo Navigation Bar */}
      <div className="bg-[#030304] text-[#7E8088] px-4 py-2 text-xs flex items-center justify-between border-b border-[#141418]">
        <Link to="/our-work" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PIXORA Showcase</span>
        </Link>
        <span className="hidden sm:inline font-mono tracking-widest uppercase text-[10px] text-[#C5A880]">
          Industry Showcase: Fine-Art Wedding Photography & Cinema
        </span>
        <a
          href={getWhatsAppUrl("Hello PIXORA DIGITAL! I explored your Lumière & Frame Photography demo. I'd like to build an artistic portfolio website for my photography studio.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C5A880] hover:underline font-semibold"
        >
          Build Website for My Studio →
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#070709]/95 backdrop-blur-md border-b border-[#141418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif-editorial text-2xl sm:text-3xl tracking-[0.15em] text-[#F3F2EE] font-normal uppercase">
              LUMIÈRE & FRAME
            </span>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C5A880]">
              Visual Stories & Wedding Cinema • Hyderabad & Worldwide
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-[#7E8088]">
            <a href="#stories" className="hover:text-white transition-colors">Real Stories</a>
            <a href="#films" className="hover:text-white transition-colors">Cinema Trailers</a>
            <a href="#investment" className="hover:text-white transition-colors">Investment</a>
            <a href="#inquire" className="hover:text-white transition-colors">Check Dates</a>
          </nav>

          <a
            href="#inquire"
            className="px-5 py-2.5 rounded-full bg-[#C5A880] text-black text-xs font-bold tracking-wider uppercase hover:bg-amber-300 transition-colors shadow-lg"
          >
            Check Availability
          </a>
        </div>
      </header>

      {/* Hero: Evocative Full-Bleed Portrait */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#141418]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=1000&fit=crop')] bg-cover bg-center brightness-[0.32]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/50" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6 pt-16">
          <span className="inline-block text-xs uppercase font-mono tracking-[0.3em] text-[#C5A880] font-bold">
            Fine-Art Documentary Wedding Photojournalism
          </span>

          <h1 className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[0.98]">
            POETRY IN CANDID LIGHT. <br />
            <span className="italic font-serif-luxury text-[#C5A880]">STORIES THAT OUTLIVE TIME.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A0A2AA] max-w-2xl mx-auto font-light leading-relaxed">
            We preserve weddings not as staged poses, but as an honest, cinematic chronicle of human emotion, stolen glances, and grand celebration.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#inquire"
              className="px-8 py-4 rounded-full bg-[#C5A880] hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-widest transition-colors shadow-xl"
            >
              Inquire Your Wedding Date
            </a>
            <a
              href="#stories"
              className="px-8 py-4 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              View Featured Stories
            </a>
          </div>
        </div>
      </section>

      {/* Real Wedding Stories Showcase */}
      <section id="stories" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#141418]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5A880] font-bold block mb-2">
              Featured Photojournalism
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl text-white">
              Recent Celebrations
            </h2>
          </div>
          <p className="text-xs font-mono text-[#7E8088]">
            Limited to 20 Select Wedding Commissions Annually
          </p>
        </div>

        <div className="space-y-24">
          {stories.map((story) => (
            <article key={story.title} className="space-y-8">
              <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-black border border-white/10 group">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
                      {story.type} • {story.venue}
                    </span>
                    <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal mt-1">
                      {story.couple}: {story.title}
                    </h3>
                  </div>
                  <a
                    href={getWhatsAppUrl(`Hello Lumière & Frame! I was deeply inspired by the "${story.couple}" wedding at ${story.venue}. I'd like to check availability for our wedding.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white/90 text-black text-xs font-bold uppercase tracking-wider hover:bg-[#C5A880] hover:text-white transition-colors flex-shrink-0"
                  >
                    View Gallery & Film
                  </a>
                </div>
              </div>

              {/* Triptych Frames */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {story.frames.map((frame, i) => (
                  <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden bg-black border border-white/10 group">
                    <img
                      src={frame}
                      alt={`${story.couple} frame ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Investment & Packages */}
      <section id="investment" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#141418]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] font-bold block mb-2">
            Transparent Investment
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-white">
            Curated Wedding Collections
          </h2>
          <p className="text-sm text-[#A0A2AA] mt-3">
            Every collection includes full copyright print release, color-graded delivery, and handcrafted archival albums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all ${
                pkg.isPopular
                  ? 'bg-[#121218] border-2 border-[#C5A880] shadow-2xl relative'
                  : 'bg-[#0B0B0E] border border-[#141418]'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C5A880] text-black text-xs font-mono font-bold uppercase tracking-wider">
                  Most Requested Collection
                </div>
              )}

              <div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-white mb-2">{pkg.name}</h3>
                <p className="text-xs font-mono text-[#C5A880] mb-6">{pkg.coverage}</p>

                <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-[#1E1E26]">
                  <span className="font-serif-editorial text-4xl sm:text-5xl font-normal text-white">{pkg.fee}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-2.5 text-xs text-[#D1D3DC]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A880] flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsAppUrl(`Hello Lumière & Frame! I would like to book "${pkg.name}" (${pkg.fee}). Please share contract details and availability.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  pkg.isPopular
                    ? 'bg-[#C5A880] text-black hover:bg-amber-300 shadow-lg'
                    : 'bg-[#1A1A22] text-white hover:bg-[#C5A880] hover:text-black'
                }`}
              >
                <span>Reserve {pkg.name.split(' ')[1]} Collection</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Date Availability Suite */}
      <section id="inquire" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B0B0E] rounded-3xl p-8 sm:p-12 border border-[#C5A880]/30 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] font-bold block mb-2">
              Reserve Your Date
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-white">
              Check Wedding Date Availability
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A2AA] mt-2">
              To guarantee individual artistic focus, we photograph only one wedding celebration per weekend.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#C5A880] mx-auto" />
              <h3 className="font-serif-editorial text-3xl font-bold">Date Inquiry Dispatched!</h3>
              <p className="text-xs text-[#A0A2AA] max-w-md mx-auto">
                Your date details have been sent to WhatsApp. Our studio producer will check our wedding calendar and reply within 4 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white/5"
              >
                Inquire Another Date
              </button>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#7E8088] mb-2">
                    Couple Names *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meera & Vamsi"
                    value={inquiry.name}
                    onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070709] border border-[#1E1E26] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#7E8088] mb-2">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={inquiry.phone}
                    onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070709] border border-[#1E1E26] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#7E8088] mb-2">
                    Wedding Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={inquiry.weddingDate}
                    onChange={(e) => setInquiry({ ...inquiry, weddingDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070709] border border-[#1E1E26] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#7E8088] mb-2">
                    Wedding Venue / City
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hyderabad / Udaipur / Goa"
                    value={inquiry.venue}
                    onChange={(e) => setInquiry({ ...inquiry, venue: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070709] border border-[#1E1E26] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#C5A880] hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-lg"
              >
                Check Date Availability on WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030304] text-[#55565C] py-12 border-t border-[#141418] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Lumière & Frame Visual Stories. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#7E8088]">Sample Business Website Concept engineered by PIXORA DIGITAL</p>
        </div>
      </footer>
    </div>
  )
}
