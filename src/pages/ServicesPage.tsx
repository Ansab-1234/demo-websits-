import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  MessageSquare,
  ShoppingBag,
  Flame,
  Camera,
  Sparkles,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Layers,
  Palette,
  Code2,
  Server,
  Zap,
  Clock
} from 'lucide-react'
import { SERVICES, getWhatsAppUrl, WA_MESSAGES, WHATSAPP_NUMBER_1 } from '../lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Camera: <Camera className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#10110F] text-[#141512] dark:text-[#F5F0E7] transition-colors selection:bg-[#C6A46A] selection:text-[#10110F] pt-36 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6]/80 dark:bg-[#191A17] text-[#8E6D3E] dark:text-[#C6A46A] text-xs font-mono font-bold uppercase tracking-widest mb-6 border border-black/5 dark:border-white/10">
            <Zap className="w-3.5 h-3.5 text-[#C6A46A]" />
            Engineered For Growth & Authority
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.06] mb-6 text-[#141512] dark:text-[#F5F0E7]">
            Bespoke Web Services That Solve{' '}
            <span className="font-serif-display italic font-normal text-[#C6A46A]">
              Real Business Bottlenecks.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
            We don’t assemble off-the-shelf WordPress templates. We craft fast, tailored digital experiences that turn visitors into phone calls and WhatsApp inquiries for local businesses across Hyderabad.
          </p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <div
              key={s.id}
              className={`rounded-3xl p-8 border border-black/5 dark:border-white/10 bg-white dark:bg-[#191A17] shadow-sm hover:shadow-2xl hover:border-[#C6A46A]/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 || idx === 3 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#C6A46A]/15 text-[#C6A46A] flex items-center justify-center border border-[#C6A46A]/20 group-hover:scale-105 transition-transform">
                    {iconMap[s.iconName] || <Globe className="w-5 h-5" />}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#F7F5EF] dark:bg-[#121310] text-[#8F8B82] font-semibold border border-black/5 dark:border-white/10">
                      {s.tag}
                    </span>
                    <span className="text-[10px] font-mono text-[#8E6D3E] dark:text-[#C6A46A] font-bold">
                      {s.tier}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-[#141512] dark:text-[#F5F0E7] mb-1.5 group-hover:text-[#C6A46A] transition-colors">
                  {s.title}
                </h2>
                <p className="text-xs font-semibold text-[#8E6D3E] dark:text-[#C6A46A] mb-4">{s.subtitle}</p>

                <p className="text-sm text-[#5A564F] dark:text-[#A8A49B] leading-relaxed mb-6 font-light">
                  {s.description}
                </p>
              </div>

              <div className="pt-6 border-t border-black/5 dark:border-white/10">
                <div className="flex items-start gap-2.5 text-xs text-[#5A564F] dark:text-[#A8A49B] mb-6 bg-[#F7F5EF] dark:bg-[#121310] p-4 rounded-2xl border border-black/5 dark:border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A46A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#141512] dark:text-[#F5F0E7] block mb-0.5">Measurable Impact:</strong>
                    <span>{s.benefit}</span>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(`Hello PIXORA DIGITAL! I'm interested in your *${s.title}* service. Could you share project details and pricing?`, WHATSAPP_NUMBER_1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8E6D3E] dark:text-[#C6A46A] hover:text-[#B39054] transition-colors uppercase tracking-wider"
                >
                  <span>Discuss This Service on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-10 sm:p-14 bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] border border-black/5 dark:border-white/10 relative overflow-hidden text-center shadow-xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E6D3E] dark:text-[#C6A46A] font-bold mb-4 block">
              Transparent & Direct
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
              Ready to Upgrade Your Business Website?
            </h2>
            <p className="text-[#5A564F] dark:text-[#A8A49B] text-base mb-8 leading-relaxed font-light">
              Tell us about your industry and what you want your website to accomplish. We'll provide honest guidance and an upfront quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={getWhatsAppUrl(WA_MESSAGES.buildWebsite, WHATSAPP_NUMBER_1)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#C6A46A]/20 transition-all hover:-translate-y-0.5"
              >
                Let's Build Your Website
              </a>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-[#F7F5EF] dark:bg-[#121310] hover:bg-[#EFECE6] border border-black/10 dark:border-white/10 text-[#141512] dark:text-[#F5F0E7] text-xs font-bold uppercase tracking-wider rounded-full transition-all"
              >
                View Transparent Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
