import { Link } from 'react-router-dom'
import {
  Palette,
  Briefcase,
  Zap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  MessageSquare
} from 'lucide-react'
import { getWhatsAppUrl, WA_MESSAGES, WHATSAPP_NUMBER_1 } from '../lib/constants'

const featureGroups = [
  {
    category: 'Design & Visual Experience',
    icon: Palette,
    summary: 'Aesthetic distinction crafted to match high-end international digital studio standards.',
    features: [
      { name: 'Mobile-First Responsive Layout', desc: 'Flawlessly proportioned across 360px phones, tablets, and 4K displays.' },
      { name: 'Light & Dark Mode Persistence', desc: 'Seamless theme switcher stored in localStorage with zero layout flashing.' },
      { name: 'Industry-Specific Color & Typography', desc: 'Distinct font hierarchies and color palettes selected specifically for your trade.' },
      { name: 'Micro-Interactions & Transitions', desc: 'Subtle button hover physics and card elevations that elevate perceived brand value.' },
      { name: 'Accessible Contrast Ratios', desc: 'Strict WCAG 2.1 compliance for readability and inclusive user interaction.' },
      { name: 'Zero Stock Template Feel', desc: 'Custom tailored bento structures and editorial grid compositions.' },
    ],
  },
  {
    category: 'Local Conversion & Lead Engines',
    icon: Briefcase,
    summary: 'Engineered to reduce friction between discovering your business and initiating contact.',
    features: [
      { name: 'Direct WhatsApp Smart Triggers', desc: 'Pre-formatted messages that open WhatsApp instantly with the visitor’s exact inquiry.' },
      { name: 'One-Tap Phone Calling', desc: 'Prominent, click-to-call buttons optimized for mobile users on the go.' },
      { name: 'Google Maps & Direction Launcher', desc: 'Interactive map integration directing clients straight to your storefront or clinic.' },
      { name: 'Zero-Spam Contact Inquiries', desc: 'Clean, validated input fields that generate formatted WhatsApp dispatches.' },
      { name: 'Interactive Menus & Catalogues', desc: 'Categorized food menus, lookbooks, or service matrices with transparent pricing.' },
      { name: 'Social Proof & Review Elements', desc: 'Strategic trust signals and verification metrics placed beside conversion buttons.' },
    ],
  },
  {
    category: 'Engineering & Performance',
    icon: Zap,
    summary: 'Ultra-fast, modern web stack built without sluggish CMS overhead or plugin bloat.',
    features: [
      { name: 'Sub-Second Page Load Speeds', desc: 'Compiled via Vite 6 and React 19 for instant client-side transitions.' },
      { name: 'Local Hyderabad SEO Architecture', desc: 'Semantic HTML5 structure, schema headers, and geographical meta tags.' },
      { name: 'Open Graph Social Sharing Previews', desc: 'Rich image, title, and description cards whenever your link is shared on WhatsApp or LinkedIn.' },
      { name: 'Optimized Image Delivery', desc: 'Modern responsive image formats with lazy-loading attributes to save customer mobile data.' },
      { name: 'Clean Route Code-Splitting', desc: 'Modular route bundles ensuring users only download the code for the page they visit.' },
      { name: 'Enterprise Cloud Deployment', desc: 'Continuous global CDN hosting with 99.9% uptime and automatic SSL certificates.' },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#10110F] text-[#141512] dark:text-[#F5F0E7] transition-colors selection:bg-[#C6A46A] selection:text-[#10110F] pt-36 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6]/80 dark:bg-[#191A17] text-[#8E6D3E] dark:text-[#C6A46A] text-xs font-mono font-bold uppercase tracking-widest mb-6 border border-black/5 dark:border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A46A]" />
            Studio Engineering Standards
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.06] mb-6 text-[#141512] dark:text-[#F5F0E7]">
            Everything your business needs to{' '}
            <span className="font-serif-display italic font-normal text-[#C6A46A]">
              thrive and convert online.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
            Every website we engineer is equipped with conversion-focused features, fast loading times, and intuitive mobile ergonomics to turn everyday visitors into real customer inquiries.
          </p>
        </div>
      </section>

      {/* Feature Groups */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {featureGroups.map((group) => {
            const GroupIcon = group.icon
            return (
              <div key={group.category} className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#C6A46A]/15 text-[#C6A46A] flex items-center justify-center flex-shrink-0">
                    <GroupIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#141512] dark:text-[#F5F0E7] tracking-tight">
                      {group.category}
                    </h2>
                    <p className="text-sm sm:text-base text-[#5A564F] dark:text-[#A8A49B] mt-1 font-light">
                      {group.summary}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 hover:border-[#C6A46A]/40 transition-all hover:shadow-xl space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C6A46A] flex-shrink-0" />
                        <h3 className="text-base font-bold text-[#141512] dark:text-[#F5F0E7]">
                          {feature.name}
                        </h3>
                      </div>
                      <p className="text-xs text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] border border-black/5 dark:border-white/10 text-center shadow-xl">
          <div className="max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E6D3E] dark:text-[#C6A46A] font-bold mb-3 block">
              Direct Engineering Consultation
            </span>
            <h3 className="text-3xl sm:text-4xl font-black mb-4">
              Experience the PIXORA DIGITAL standard.
            </h3>
            <p className="text-[#5A564F] dark:text-[#A8A49B] text-sm sm:text-base mb-8 leading-relaxed font-light">
              Connect with our Hyderabad web engineering studio today for a transparent review of your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={getWhatsAppUrl(WA_MESSAGES.default, WHATSAPP_NUMBER_1)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#C6A46A]/20 transition-all hover:-translate-y-0.5"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F7F5EF] dark:bg-[#121310] hover:bg-[#EFECE6] border border-black/10 dark:border-white/10 text-[#141512] dark:text-[#F5F0E7] text-xs font-bold uppercase tracking-wider rounded-full transition-all"
              >
                <span>Explore Live Demos</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
