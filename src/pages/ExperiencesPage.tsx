import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  Maximize2,
  Sparkles,
  ArrowRight,
  RotateCcw,
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
  CheckCircle2,
  ShieldCheck,
  MessageSquare
} from 'lucide-react'
import { getWhatsAppUrl, WHATSAPP_NUMBER_1 } from '../lib/constants'

interface DemoConfig {
  id: string
  title: string
  industry: string
  previewUrl: string
  externalUrl?: string
  accentColor: string
  icon: React.ElementType
  tagline: string
  objective: string
  features: string[]
  metrics: { label: string; value: string }[]
}

const demos: DemoConfig[] = [
  {
    id: 'salon',
    title: 'Maison de Beauté',
    industry: 'Salon & Spa Studio',
    previewUrl: '/preview/salon',
    externalUrl: 'https://salon-2-five.vercel.app',
    accentColor: '#C6A46A',
    icon: Scissors,
    tagline: 'High-touch French salon & aesthetic sanctuary experience.',
    objective: 'Drive immediate WhatsApp VIP slot bookings and showcase stylist portfolios without phone friction.',
    features: ['Transparent Tiered Price Menu', 'Master Stylist Credentials', 'Before / After Proof Gallery', 'Instant WhatsApp Slot Booking'],
    metrics: [
      { label: 'Booking Friction', value: 'Zero-Wait' },
      { label: 'Conversion Lift', value: '3.2x vs Phone' },
      { label: 'Mobile Optimized', value: '100% Touch' },
    ],
  },
  {
    id: 'restaurant',
    title: 'Saffron & Stone',
    industry: 'Heritage Fine Dining',
    previewUrl: '/preview/restaurant',
    accentColor: '#C6A46A',
    icon: UtensilsCrossed,
    tagline: 'Sensory Nizami gourmet dining experience and takeaway hub.',
    objective: 'Display mouthwatering high-res food menus, accept direct takeaway orders, and fill dinner tables.',
    features: ['Categorized Degustation Menu', 'Chef Signature Dish Spotlights', 'Direct WhatsApp Takeaway Cart', 'Table Reservation Enquiry Flow'],
    metrics: [
      { label: 'Direct Orders', value: '0% Platform Fee' },
      { label: 'Table Bookings', value: 'Instant WhatsApp' },
      { label: 'Menu Update Speed', value: '<5 Mins' },
    ],
  },
  {
    id: 'clothing',
    title: 'Atelier Nouveau',
    industry: 'Designer Pret-a-Porter',
    previewUrl: '/preview/clothing',
    accentColor: '#C6A46A',
    icon: Shirt,
    tagline: 'Editorial designer lookbook & couture catalogue.',
    objective: 'Showcase seasonal ethnic and western collections with silk fabric details and WhatsApp order requests.',
    features: ['High-Fashion Lookbook Grid', 'Silk & Fabric Detail Sheets', 'Instant WhatsApp Inquiries', 'Category Filter Navigation'],
    metrics: [
      { label: 'Customer Inquiry', value: 'Direct Chat' },
      { label: 'Marketplace Fees', value: '₹0 Commission' },
      { label: 'Catalog Depth', value: 'Unlimited' },
    ],
  },
  {
    id: 'furniture',
    title: 'Timber & Arch',
    industry: 'Architectural Teakwood',
    previewUrl: '/preview/furniture',
    accentColor: '#C6A46A',
    icon: Armchair,
    tagline: 'Architectural teakwood & bespoke interior sanctuary.',
    objective: 'Educate buyers on hardwood joinery, modular dimensions, and invite showroom visits in Hyderabad.',
    features: ['Mortise & Tenon Specs', 'CAD Blueprint Quote Flow', 'Room Context Inspiration', 'Finish Swatch Showcase'],
    metrics: [
      { label: 'Custom Quotes', value: 'Instant WhatsApp' },
      { label: 'Lead Velocity', value: '<2 Hrs Response' },
      { label: 'Showroom Footfall', value: 'Google Maps Nav' },
    ],
  },
  {
    id: 'dental',
    title: 'Aura Dental Institute',
    industry: 'Advanced Dental Surgery',
    previewUrl: '/preview/dental',
    accentColor: '#C6A46A',
    icon: Activity,
    tagline: 'Clinical minimalism, Straumann implants & Invisalign.',
    objective: 'Build patient confidence with senior MDS faculty rosters, fee transparency, and zero-wait consultation forms.',
    features: ['Specialist Doctor Profiles', 'Treatment Cost Transparency', 'Sterilization Standard Protocols', 'Emergency WhatsApp Line'],
    metrics: [
      { label: 'Patient Trust', value: 'Sterilization Proof' },
      { label: 'Online Consults', value: 'Zero Wait Time' },
      { label: 'Emergency Lead', value: '1-Tap Call' },
    ],
  },
  {
    id: 'gym',
    title: 'Kinetic Force',
    industry: 'High-Performance Athletics',
    previewUrl: '/preview/gym',
    accentColor: '#C6A46A',
    icon: Dumbbell,
    tagline: 'Eleiko Olympic lifting racks & transparent membership tiers.',
    objective: 'Turn casual gym seekers into committed members with transparent pricing and 1-day free trial passes.',
    features: ['Transparent Membership Matrix', 'Certified Coach Roster', '1-Day Free Trial Pass Form', 'Equipment & Zone Breakdown'],
    metrics: [
      { label: 'Trial Signups', value: 'Instant Pass' },
      { label: 'Fee Transparency', value: 'Zero Hidden Fees' },
      { label: 'Coach Booking', value: 'Direct WhatsApp' },
    ],
  },
  {
    id: 'real-estate',
    title: 'The Elevation Group',
    industry: 'Luxury Real Estate',
    previewUrl: '/preview/real-estate',
    accentColor: '#C6A46A',
    icon: Building2,
    tagline: 'HMDA & RERA verified villas and penthouses in Kokapet.',
    objective: 'Attract high-net-worth investors with verified architectural specs and chauffeured site visits.',
    features: ['RERA & HMDA Verified Badges', 'Architectural Floorplan Viewer', 'Chauffeured Site Visit Booking', 'Unit Availability Matrix'],
    metrics: [
      { label: 'Buyer Confidence', value: '100% RERA Verified' },
      { label: 'Brochure Downloads', value: 'Direct WhatsApp' },
      { label: 'Site Visits', value: 'Free Cab Pickup' },
    ],
  },
  {
    id: 'automobile',
    title: 'Apex Labs',
    industry: 'Supercar Detailing & PPF',
    previewUrl: '/preview/automobile',
    accentColor: '#C6A46A',
    icon: Car,
    tagline: 'Dust-free lab 9H ceramic coating & TPU paint protection.',
    objective: 'Demonstrate detailing precision, segment pricing (Sedan/SUV), and book inspection bays.',
    features: ['Interactive Vehicle Segment Pricing', '9H Ceramic & Self-Healing TPU PPF', 'Dust-Free Clean Room Showcase', 'Bay Slot Inspection Booking'],
    metrics: [
      { label: 'Average Ticket', value: '₹15k – ₹85k' },
      { label: 'Warranty Tracking', value: 'Digital Guarantee' },
      { label: 'Bay Booking', value: 'Immediate WhatsApp' },
    ],
  },
  {
    id: 'photography',
    title: 'Lumière & Frame',
    industry: 'Wedding & Editorial Photography',
    previewUrl: '/preview/photography',
    accentColor: '#C6A46A',
    icon: Camera,
    tagline: 'Cinematic wedding photojournalism & portraits.',
    objective: 'Engage couples with full-screen darkroom photo stories and check wedding date booking availability.',
    features: ['Cinematic Dark Full-Screen Layout', 'Transparent Investment Packages', 'Destination Wedding Real Stories', 'Wedding Date Availability Checker'],
    metrics: [
      { label: 'Visual Impact', value: '4K Full Screen' },
      { label: 'Date Inquiries', value: 'Instant Calendar Form' },
      { label: 'Deliverables', value: 'Teaser + Film Specs' },
    ],
  },
  {
    id: 'education',
    title: 'Ascent Academy',
    industry: 'IIT-JEE & NEET Coaching',
    previewUrl: '/preview/education',
    accentColor: '#C6A46A',
    icon: GraduationCap,
    tagline: 'Small batch ratios & verified IIT/AIIMS faculty ranks.',
    objective: 'Demonstrate faculty pedigrees, publish batch schedules, and enroll students in free 2-day demo classes.',
    features: ['Rigorous Batch Timing Schedule', 'Faculty Track Record & Qualifications', 'Scholarship Aptitude Test Details', 'Free 2-Day Demo Class Registration'],
    metrics: [
      { label: 'Batch Ratio', value: '1:30 Max' },
      { label: 'Free Demo Pass', value: 'Direct Registration' },
      { label: 'Study Material', value: 'Free PDF Download' },
    ],
  },
]

type DeviceMode = 'desktop' | 'tablet' | 'mobile'

export default function ExperiencesPage() {
  const [selectedDemoId, setSelectedDemoId] = useState('salon')
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop')
  const [iframeKey, setIframeKey] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const activeDemo = demos.find((d) => d.id === selectedDemoId) || demos[0]
  const ActiveIcon = activeDemo.icon

  const handleRefresh = () => {
    setIframeKey((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#10110F] text-[#141512] dark:text-[#F5F0E7] transition-colors selection:bg-[#C6A46A] selection:text-[#10110F] pt-36 pb-24">
      {/* Editorial Lab Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6]/80 dark:bg-[#191A17] text-[#8E6D3E] dark:text-[#C6A46A] text-xs font-mono font-bold uppercase tracking-widest mb-6 border border-black/5 dark:border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A46A]" />
            Multi-Device Testing Workstation
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.06] mb-6 text-[#141512] dark:text-[#F5F0E7]">
            Test 10 Trade Websites in{' '}
            <span className="font-serif-display italic font-normal text-[#C6A46A]">
              Real Viewports.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
            Select any business trade below to load its independent digital platform. Toggle between Desktop, Tablet, and Mobile simulated frames to test responsiveness and ergonomic touch workflows.
          </p>
        </div>
      </section>

      {/* Industry Selector Carousel Bar */}
      <section className="py-4 border-y border-black/5 dark:border-white/10 bg-[#F7F5EF] dark:bg-[#141512] sticky top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max py-1">
            {demos.map((demo) => {
              const Icon = demo.icon
              const isSelected = demo.id === selectedDemoId
              return (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemoId(demo.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[#C6A46A] text-[#10110F] shadow-sm'
                      : 'bg-white dark:bg-[#191A17] text-[#5A564F] dark:text-[#A8A49B] border border-black/5 dark:border-white/10 hover:border-[#C6A46A]/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{demo.industry}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Preview Workstation */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Device Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white dark:bg-[#191A17] p-4 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm">
          {/* Active Demo Meta */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C6A46A]/15 text-[#C6A46A] flex items-center justify-center flex-shrink-0">
              <ActiveIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black text-[#141512] dark:text-[#F5F0E7] leading-tight">
                {activeDemo.title}
              </h2>
              <p className="text-xs text-[#8F8B82]">
                {activeDemo.industry}
              </p>
            </div>
          </div>

          {/* Viewport Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#F7F5EF] dark:bg-[#121310] p-1 rounded-xl border border-black/5 dark:border-white/10">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                deviceMode === 'desktop'
                  ? 'bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] shadow-xs'
                  : 'text-[#8F8B82] hover:text-[#141512] dark:hover:text-[#F5F0E7]'
              }`}
              title="Desktop View (100% Canvas)"
            >
              <Monitor className="w-4 h-4" />
              <span className="hidden sm:inline">Desktop</span>
            </button>

            <button
              onClick={() => setDeviceMode('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                deviceMode === 'tablet'
                  ? 'bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] shadow-xs'
                  : 'text-[#8F8B82] hover:text-[#141512] dark:hover:text-[#F5F0E7]'
              }`}
              title="Tablet View (768px frame)"
            >
              <Tablet className="w-4 h-4" />
              <span className="hidden sm:inline">Tablet</span>
            </button>

            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                deviceMode === 'mobile'
                  ? 'bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] shadow-xs'
                  : 'text-[#8F8B82] hover:text-[#141512] dark:hover:text-[#F5F0E7]'
              }`}
              title="Mobile View (390px phone frame)"
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Actions: Refresh & Fullscreen */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="p-2 rounded-xl border border-black/10 dark:border-white/10 text-[#8F8B82] hover:text-[#141512] dark:hover:text-[#F5F0E7] hover:bg-[#F7F5EF] dark:hover:bg-[#121310] transition-colors"
              title="Reload preview"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <Link
              to={activeDemo.previewUrl}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold shadow-md transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Screen Demo</span>
            </Link>
          </div>
        </div>

        {/* Viewport Frame Container */}
        <div className="flex justify-center items-center py-6">
          {/* Desktop Frame */}
          {deviceMode === 'desktop' && (
            <div className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-[#121310] overflow-hidden shadow-2xl transition-all duration-300">
              <div className="h-10 bg-[#191A17] border-b border-white/5 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-[#10110F] border border-white/5 text-[11px] font-mono text-[#A8A49B]">
                  <span className="text-[#C6A46A] font-bold">https://</span>
                  <span>demo.pixora.digital{activeDemo.previewUrl}</span>
                </div>
                <div className="w-16 text-right">
                  <span className="text-[10px] font-mono text-[#8F8B82]">1440×900</span>
                </div>
              </div>
              <div className="relative h-[650px] bg-[#10110F]">
                <iframe
                  key={iframeKey}
                  ref={iframeRef}
                  src={activeDemo.previewUrl}
                  title={`${activeDemo.title} Desktop Preview`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* Tablet Frame (768px) */}
          {deviceMode === 'tablet' && (
            <div className="w-[768px] max-w-full rounded-[36px] p-3 bg-[#121310] border-4 border-black/20 dark:border-white/10 shadow-2xl transition-all duration-300">
              <div className="h-8 bg-[#191A17] rounded-t-[24px] px-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-[#8F8B82]">iPad Viewport 768px</span>
              </div>
              <div className="relative h-[700px] bg-[#10110F] rounded-b-[24px] overflow-hidden">
                <iframe
                  key={iframeKey}
                  ref={iframeRef}
                  src={activeDemo.previewUrl}
                  title={`${activeDemo.title} Tablet Preview`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* Mobile Frame (390px) */}
          {deviceMode === 'mobile' && (
            <div className="w-[390px] max-w-full rounded-[48px] p-3 bg-[#121310] border-4 border-black/20 dark:border-white/10 shadow-2xl transition-all duration-300">
              <div className="h-8 bg-[#191A17] rounded-t-[36px] px-6 flex items-center justify-between border-b border-white/5">
                <span className="text-[10px] font-mono text-[#8F8B82]">9:41</span>
                <div className="w-16 h-3.5 bg-black rounded-full" />
                <span className="text-[10px] font-mono text-[#8F8B82]">5G</span>
              </div>
              <div className="relative h-[680px] bg-[#10110F] rounded-b-[36px] overflow-hidden">
                <iframe
                  key={iframeKey}
                  ref={iframeRef}
                  src={activeDemo.previewUrl}
                  title={`${activeDemo.title} Mobile Preview`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>

        {/* Trade Strategic Brief Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 shadow-lg">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8E6D3E] dark:text-[#C6A46A] block">
                Trade Strategy Brief
              </span>
              <h3 className="text-2xl font-black text-[#141512] dark:text-[#F5F0E7]">
                {activeDemo.tagline}
              </h3>
              <p className="text-sm text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
                {activeDemo.objective}
              </p>

              <div className="pt-4 border-t border-black/5 dark:border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8F8B82] block mb-2">
                  Architectural Deliverables:
                </span>
                <div className="grid sm:grid-cols-2 gap-2">
                  {activeDemo.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-[#141512] dark:text-[#DDD5C7]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A46A] flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 p-6 rounded-2xl bg-[#F7F5EF] dark:bg-[#121310] border border-black/5 dark:border-white/10 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8F8B82] block">
                Performance Benchmarks
              </span>
              <div className="space-y-3">
                {activeDemo.metrics.map((m) => (
                  <div key={m.label} className="flex justify-between py-1 border-b border-black/5 dark:border-white/10 text-xs">
                    <span className="text-[#8F8B82]">{m.label}</span>
                    <span className="font-bold text-[#141512] dark:text-[#F5F0E7]">{m.value}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppUrl(`Hello PIXORA DIGITAL! I explored the ${activeDemo.title} (${activeDemo.industry}) in the Device Lab. I'd like a quote for my business.`, WHATSAPP_NUMBER_1)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Build Similar Website</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
