import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ExternalLink,
  ArrowRight,
  Monitor,
  Smartphone,
  Sparkles,
  Scissors,
  UtensilsCrossed,
  Shirt,
  Armchair,
  Activity,
  Dumbbell,
  Building2,
  Car,
  Camera,
  GraduationCap,
  Info,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react'
import { getWhatsAppUrl, WHATSAPP_NUMBER_1 } from '../lib/constants'

interface ProjectItem {
  id: string
  title: string
  trade: string
  location: string
  category: 'Lifestyle' | 'Food' | 'Retail' | 'Medical & Fitness' | 'Property & Auto' | 'Education'
  description: string
  specs: string[]
  liveExternalUrl?: string
  previewPath: string
  image: string
  icon: React.ElementType
}

const projects: ProjectItem[] = [
  {
    id: 'salon',
    title: 'Maison de Beauté',
    trade: 'Luxury Salon & Aesthetic Spa',
    location: 'Banjara Hills, Hyderabad',
    category: 'Lifestyle',
    description: 'High-touch French editorial beauty sanctuary experience with tiered diagnostic bridal & hair rituals, master stylist credentials, and 1-tap WhatsApp VIP suite booking.',
    specs: ['Bespoke Service Price Matrix', 'Master Stylist Portfolio', 'Direct WhatsApp Slot Booking', 'Customer Review Carousel'],
    liveExternalUrl: 'https://salon-2-five.vercel.app',
    previewPath: '/preview/salon',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000&h=700&fit=crop',
    icon: Scissors,
  },
  {
    id: 'restaurant',
    title: 'Saffron & Stone',
    trade: 'Heritage Fine Dining & Terrace',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Food',
    description: 'Sensory Nizami heritage dining portal with terracotta peat charcoal tones. Highlights chef tasting notes, degustation menus, and instant online table reservations.',
    specs: ['Categorized Degustation Menu', 'Chef Signature Dish Highlights', 'WhatsApp Order Quick-Cart', 'Reservation Inquiry Form'],
    previewPath: '/preview/restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&h=700&fit=crop',
    icon: UtensilsCrossed,
  },
  {
    id: 'clothing',
    title: 'Atelier Nouveau',
    trade: 'Designer Apparel & Pret-a-Porter',
    location: 'Banjara Hills, Hyderabad',
    category: 'Retail',
    description: 'High-fashion monochrome minimalism with crimson accents. Handwoven silk fabric specifications, seasonal lookbooks, and bespoke tailoring concierge.',
    specs: ['Seasonal Lookbook Carousel', 'Silk & Fabric Detail Sheets', 'Instant WhatsApp Inquiries', 'Category Filter Navigation'],
    previewPath: '/preview/clothing',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&h=700&fit=crop',
    icon: Shirt,
  },
  {
    id: 'furniture',
    title: 'Timber & Arch',
    trade: 'Handcrafted Teakwood & Interior Architecture',
    location: 'Financial District, Hyderabad',
    category: 'Retail',
    description: 'Architectural furniture showroom highlighting solid teakwood craft, modular dimensions, wood finish swatches, and custom interior blueprint consultations.',
    specs: ['Hardwood Spec & Joinery Details', 'Room Context Gallery', 'Dimension Schematics', 'Custom Blueprint Quote Form'],
    previewPath: '/preview/furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&h=700&fit=crop',
    icon: Armchair,
  },
  {
    id: 'dental',
    title: 'Aura Dental Institute',
    trade: 'Advanced Dentistry & Implantology',
    location: 'Hitec City, Hyderabad',
    category: 'Medical & Fitness',
    description: 'Clinical minimalism with ice cyan accents. Straumann implant accreditations, Invisalign scan workflows, zero-wait patient forms, and dental emergency protocols.',
    specs: ['Treatment Cost Transparency', 'Doctor MDS Credentials', 'Digital Patient Inquiry Flow', 'Emergency Care Hotline'],
    previewPath: '/preview/dental',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&h=700&fit=crop',
    icon: Activity,
  },
  {
    id: 'gym',
    title: 'Kinetic Force',
    trade: 'High-Performance Athletics & CrossFit',
    location: 'Gachibowli, Hyderabad',
    category: 'Medical & Fitness',
    description: 'Matte carbon and energetic amber athletic styling. Eleiko Olympic weightlifting specs, Hammer Strength racks, transparent membership matrix, and 1-day pass passes.',
    specs: ['Transparent Membership Matrix', 'Certified Coach Roster', '1-Day Free Trial Pass Form', 'Equipment & Zone Breakdown'],
    previewPath: '/preview/gym',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&h=700&fit=crop',
    icon: Dumbbell,
  },
  {
    id: 'real-estate',
    title: 'The Elevation Group',
    trade: 'Luxury Villas & Penthouse Estates',
    location: 'Neopolis, Kokapet, Hyderabad',
    category: 'Property & Auto',
    description: 'Midnight navy and champagne gold typography. Verified HMDA and RERA documentation, penthouse specifications, and chauffeured Mercedes site visit booking.',
    specs: ['Verified RERA / HMDA Specs', 'Architectural Floorplan Viewer', 'Chauffeured Site Visit Scheduling', 'Unit Availability Matrix'],
    previewPath: '/preview/real-estate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&h=700&fit=crop',
    icon: Building2,
  },
  {
    id: 'automobile',
    title: 'Apex Labs',
    trade: 'Supercar Detailing & TPU PPF',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Property & Auto',
    description: 'Technical carbon and crimson typography. 9H ceramic coating standards, self-healing TPU PPF packages, and instant vehicle segment quotation calculator.',
    specs: ['Self-Healing TPU Film Specs', 'Vehicle Segment Price Matrix', 'Dust-Free Lab Inspection Booking', 'Warranty & Care Standards'],
    previewPath: '/preview/automobile',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1000&h=700&fit=crop',
    icon: Car,
  },
  {
    id: 'photography',
    title: 'Lumière & Frame',
    trade: 'Cinematic Wedding & Destination Photography',
    location: 'Hyderabad & Global Destinations',
    category: 'Lifestyle',
    description: 'Pure darkroom gallery with Cormorant Garamond typography. Authentic photojournalistic wedding triptychs, transparent investment tiers, and date availability checker.',
    specs: ['Darkroom Editorial Gallery', 'Transparent Investment Tiers', 'Date Availability Calendar Check', 'Deliverable Turnaround SLA'],
    previewPath: '/preview/photography',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1000&h=700&fit=crop',
    icon: Camera,
  },
  {
    id: 'education',
    title: 'Ascent Academy',
    trade: 'Premier Test Prep & Science Academy',
    location: 'Madhapur & Dilsukhnagar, Hyderabad',
    category: 'Education',
    description: 'Scholarly navy and gold typography. Verified IIT Madras and AIIMS faculty pedigree, audited 1:30 small-batch ratios, and free 2-day demo class booking seat.',
    specs: ['IIT Madras & AIIMS Pedigree', 'Strict 1:30 Small-Batch Ratio', 'Free 2-Day Demo Class Seat', 'Hostel & Transport Details'],
    previewPath: '/preview/education',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&h=700&fit=crop',
    icon: GraduationCap,
  },
]

const categories = ['All Trade Demos', 'Lifestyle', 'Food', 'Retail', 'Medical & Fitness', 'Property & Auto', 'Education'] as const

export default function OurWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All Trade Demos')

  const filteredProjects = selectedCategory === 'All Trade Demos'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#10110F] text-[#141512] dark:text-[#F5F0E7] transition-colors selection:bg-[#C6A46A] selection:text-[#10110F] pt-36 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-black/5 dark:border-white/10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6]/80 dark:bg-[#191A17] text-[#8E6D3E] dark:text-[#C6A46A] text-xs font-mono font-bold uppercase tracking-widest mb-6 border border-black/5 dark:border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A46A]" />
              10 Fully Implemented Trade Websites
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.06] mb-6 text-[#141512] dark:text-[#F5F0E7]">
              Live Showcase of{' '}
              <span className="font-serif-display italic font-normal text-[#C6A46A]">
                Digital Trade Platforms.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
              Explore 10 realistic, fully realized website demonstrations built for Hyderabad businesses. Each project features custom typography, tailored color grammar, and functional conversion flows.
            </p>
          </div>

          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#C6A46A]/20"
          >
            <Monitor className="w-4 h-4" />
            <span>Open Device Lab</span>
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C6A46A] text-[#10110F] shadow-sm'
                  : 'bg-white dark:bg-[#191A17] text-[#5A564F] dark:text-[#A8A49B] border border-black/5 dark:border-white/10 hover:border-[#C6A46A]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon
            return (
              <div
                key={project.id}
                className="group flex flex-col bg-white dark:bg-[#191A17] rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden hover:border-[#C6A46A]/50 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Visual Header */}
                <div className="relative h-64 sm:h-80 overflow-hidden bg-[#10110F]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10110F] via-[#10110F]/30 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/95 dark:bg-[#10110F]/95 text-[#141512] dark:text-[#F5F0E7] backdrop-blur-md border border-white/20">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold text-[#10110F] bg-[#C6A46A]">
                      DEMO 0{idx + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#C6A46A] uppercase block">
                      {project.location}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-lg bg-[#F7F5EF] dark:bg-[#121310] text-[#141512] dark:text-[#F5F0E7] text-xs font-semibold mb-3 border border-black/5 dark:border-white/10">
                      {project.trade}
                    </div>
                    <p className="text-sm text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tailored Specs */}
                  <div className="space-y-2 pt-2 border-t border-black/5 dark:border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8F8B82] block">
                      Key Architectural Inclusions:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-xs text-[#141512] dark:text-[#DDD5C7]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A46A] flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                    <Link
                      to={project.previewPath}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold transition-all shadow-sm"
                    >
                      <span>Explore Live Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={getWhatsAppUrl(`Hello PIXORA DIGITAL! I saw your ${project.title} demo and would like to build a custom website for my business.`, WHATSAPP_NUMBER_1)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#5A564F] dark:text-[#A8A49B] hover:text-[#C6A46A] transition-colors inline-flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Inquire Now</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
