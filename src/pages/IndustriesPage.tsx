import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Scissors,
  UtensilsCrossed,
  Shirt,
  Activity,
  Dumbbell,
  Armchair,
  Building2,
  Car,
  Camera,
  GraduationCap,
  Tv,
  Wrench,
  Cake,
  Compass,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  MessageSquare
} from 'lucide-react'
import { INDUSTRIES, getWhatsAppUrl, WA_MESSAGES, WHATSAPP_NUMBER_1 } from '../lib/constants'

const industryIconMap: Record<string, React.ElementType> = {
  salon: Scissors,
  restaurant: UtensilsCrossed,
  clothing: Shirt,
  dental: Activity,
  gym: Dumbbell,
  furniture: Armchair,
  'real-estate': Building2,
  automobile: Car,
  photography: Camera,
  education: GraduationCap,
  electronics: Tv,
  'home-services': Wrench,
  bakery: Cake,
  travel: Compass,
  'pet-care': HeartHandshake,
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#10110F] text-[#141512] dark:text-[#F5F0E7] transition-colors selection:bg-[#C6A46A] selection:text-[#10110F] pt-36 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6]/80 dark:bg-[#191A17] text-[#8E6D3E] dark:text-[#C6A46A] text-xs font-mono font-bold uppercase tracking-widest mb-6 border border-black/5 dark:border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A46A]" />
            15 Specialized Trade Architectures
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.06] mb-6 text-[#141512] dark:text-[#F5F0E7]">
            Websites Engineered For{' '}
            <span className="font-serif-display italic font-normal text-[#C6A46A]">
              Your Specific Trade.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
            A salon has completely different business objectives than a dental clinic or an apparel boutique. We craft bespoke digital architectures with industry-tailored workflows, instant WhatsApp booking triggers, and verified customer trust signals.
          </p>
        </div>
      </section>

      {/* Industry Bento Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry) => {
            const Icon = industryIconMap[industry.id] || Sparkles
            return (
              <div
                key={industry.id}
                className="group flex flex-col bg-white dark:bg-[#191A17] rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden hover:border-[#C6A46A]/50 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Visual Header */}
                <div className="relative h-60 overflow-hidden bg-[#10110F]">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10110F] via-[#10110F]/30 to-transparent" />
                  
                  {/* Category & Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/95 dark:bg-[#10110F]/95 text-[#141512] dark:text-[#F5F0E7] backdrop-blur-md border border-white/20">
                      {industry.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold text-[#10110F] bg-[#C6A46A]">
                      {industry.badge}
                    </span>
                  </div>

                  {/* Icon & Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/95 dark:bg-[#10110F]/95 backdrop-blur-md flex items-center justify-center text-[#C6A46A] shadow-md flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-snug">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-sm text-[#5A564F] dark:text-[#A8A49B] leading-relaxed mb-5 font-light">
                      {industry.tagline}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#8F8B82] block">
                        Built-in Capabilities:
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {industry.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-xs text-[#141512] dark:text-[#DDD5C7]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A46A] flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between gap-3">
                    <Link
                      to={industry.previewUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8E6D3E] dark:text-[#C6A46A] hover:text-[#B39054] transition-colors"
                    >
                      <span>Explore Live Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={getWhatsAppUrl(`Hello PIXORA DIGITAL! I run a ${industry.title} business and would like to build a custom website. Could you share details?`, WHATSAPP_NUMBER_1)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#5A564F] dark:text-[#A8A49B] hover:text-[#C6A46A] transition-colors flex items-center gap-1"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Custom Tailored Trade Banner */}
        <div className="mt-20 p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] relative overflow-hidden border border-black/5 dark:border-white/10 shadow-xl">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E6D3E] dark:text-[#C6A46A] font-bold mb-3 block">
              Bespoke Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
              Don’t see your exact trade listed? We engineer custom solutions.
            </h2>
            <p className="text-[#5A564F] dark:text-[#A8A49B] text-base leading-relaxed mb-8 font-light">
              Whether you manage an architectural consultancy, chartered accountancy firm, pet wellness clinic, or luxury rental fleet in Hyderabad, we construct tailor-made digital journeys built specifically for your conversion goals.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl("Hello PIXORA DIGITAL! I run a business not listed on your demo page and would like to discuss a custom website.", WHATSAPP_NUMBER_1)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#C6A46A]/20 transition-all hover:-translate-y-0.5"
              >
                <span>Discuss Custom Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F7F5EF] dark:bg-[#121310] hover:bg-[#EFECE6] border border-black/10 dark:border-white/10 text-[#141512] dark:text-[#F5F0E7] text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Review Package Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
