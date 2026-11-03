import { Link } from 'react-router-dom'
import {
  MapPin,
  Target,
  Smartphone,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Phone,
  MessageSquare,
  Palette,
  Layers,
  HeartHandshake
} from 'lucide-react'
import {
  getWhatsAppUrl,
  WA_MESSAGES,
  PHONE_DISPLAY_1,
  PHONE_NUMBER_1,
  WHATSAPP_NUMBER_1,
  PHONE_DISPLAY_2,
  PHONE_NUMBER_2,
  WHATSAPP_NUMBER_2,
  CITY
} from '../lib/constants'

const agencyPillars = [
  {
    icon: Target,
    title: 'Business-Driven Architecture',
    desc: 'We do not build digital art pieces that look pretty but fail to generate calls. Every button, layout structure, and copy flow is engineered to convert visitors into inquiries.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First by Default',
    desc: 'Over 82% of Hyderabad consumers search on mobile. We design and test on actual 360px–420px viewports before ever expanding to desktop displays.',
  },
  {
    icon: ShieldCheck,
    title: '100% Client Ownership Policy',
    desc: 'Your domain, cloud hosting, and code assets remain registered under your direct name. We never hold your business digital property hostage.',
  },
  {
    icon: Zap,
    title: 'Zero Code Bloat',
    desc: 'No sluggish WordPress builders that take 6 seconds to load. We build on modern React 19 and Tailwind CSS for instant sub-second rendering.',
  },
  {
    icon: Clock,
    title: 'Predictable 7-Day Sprint',
    desc: 'From our Day 1 discovery session to final deployment, every phase follows a documented milestone timeline with regular WhatsApp progress updates.',
  },
  {
    icon: Code2,
    title: 'Direct Engineering Access',
    desc: 'Speak directly with the software engineers writing your code. No middlemen, no junior subcontracting, and no endless communication delays.',
  },
]

const operationalFacts = [
  { label: 'Headquarters', value: CITY },
  { label: 'Studio Specialization', value: 'High-Converting Trade Websites' },
  { label: 'Core Engineering Stack', value: 'React 19, TypeScript, Vite, Tailwind CSS' },
  { label: 'Primary Contact Channel', value: 'Direct WhatsApp & Phone' },
  { label: 'Active Live Demos', value: '10 Dedicated Trade Solutions' },
  { label: 'Ownership Policy', value: '100% Client-Owned Credentials' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#10110F] text-[#141512] dark:text-[#F5F0E7] transition-colors selection:bg-[#C6A46A] selection:text-[#10110F]">
      {/* Editorial Studio Header */}
      <section className="pt-36 pb-20 border-b border-black/5 dark:border-white/10 relative overflow-hidden bg-[#FBF9F5] dark:bg-[#10110F]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C6A46A]/10 dark:bg-[#C6A46A]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6]/80 dark:bg-[#191A17] border border-black/5 dark:border-white/10 text-xs font-mono font-semibold text-[#8E6D3E] dark:text-[#C6A46A] mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#C6A46A]" />
            <span>HYDERABAD, TELANGANA, INDIA</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.06] mb-6 text-[#141512] dark:text-[#F5F0E7]">
            Who we are & how we{' '}
            <span className="font-serif-display italic font-normal text-[#C6A46A]">
              engineer for your growth.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5A564F] dark:text-[#A8A49B] max-w-3xl leading-relaxed font-light">
            PIXORA DIGITAL is a dedicated web design and software engineering studio based in Hyderabad. We partner directly with ambitious local businesses, healthcare specialists, restaurants, and retailers who are ready to build digital trust and attract premium clients.
          </p>
        </div>
      </section>

      {/* Main Studio Narrative & Operations Bento */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7 space-y-6 text-[#5A564F] dark:text-[#A8A49B] leading-relaxed text-base sm:text-lg font-light">
            <h2 className="text-2xl sm:text-4xl font-black text-[#141512] dark:text-[#F5F0E7] tracking-tight">
              A modern digital partner for businesses that value substance over fluff.
            </h2>
            <p>
              Many local businesses in Hyderabad face the same frustrating dilemma: pay a traditional agency exorbitant fees for bloated, slow WordPress templates, or hire freelance operators who disappear the moment you need an urgent menu change or domain renewal.
            </p>
            <p>
              We founded <strong className="text-[#141512] dark:text-[#F5F0E7]">PIXORA DIGITAL</strong> to offer a better standard. We believe a business website should be as fast, refined, and responsive as software built by world-class tech companies — but straightforward, transparent, and accessible for local trade owners.
            </p>
            <p>
              Whether you operate a luxury salon in Banjara Hills, a heritage restaurant in Jubilee Hills, a dental institute in Hitec City, or an architectural showroom in the Financial District, we engineer an experience that honors your standards and converts visitors into loyal clients.
            </p>
            
            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl(WA_MESSAGES.freeConsultation, WHATSAPP_NUMBER_1)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#C6A46A]/20 transition-all hover:-translate-y-0.5"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-[#191A17] hover:bg-[#F7F5EF] dark:hover:bg-[#252622] text-[#141512] dark:text-[#F5F0E7] border border-black/10 dark:border-white/10 text-xs font-bold uppercase tracking-wider rounded-full transition-all"
              >
                <span>Explore Live Demos</span>
                <ArrowUpRight className="w-4 h-4 text-[#C6A46A]" />
              </Link>
            </div>
          </div>

          {/* Studio Operations Bento Card */}
          <div className="lg:col-span-5 bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] rounded-3xl p-8 sm:p-10 border border-black/5 dark:border-white/10 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C6A46A] text-[#10110F] flex items-center justify-center font-black text-sm">
                  P<span className="text-white text-[10px]">●</span>
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tight">Studio Operations</h3>
                  <span className="text-[10px] font-mono text-[#8E6D3E] dark:text-[#C6A46A] uppercase tracking-wider">Hyderabad, Telangana</span>
                </div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="space-y-4 text-xs">
              {operationalFacts.map((fact) => (
                <div key={fact.label} className="flex justify-between py-2 border-b border-black/5 dark:border-white/10">
                  <span className="text-[#8F8B82]">{fact.label}</span>
                  <span className="font-semibold text-right text-[#141512] dark:text-[#F5F0E7]">{fact.value}</span>
                </div>
              ))}
            </div>

            {/* Direct Calling Strip */}
            <div className="pt-2 space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8F8B82] block">
                Direct Engineering Hotlines:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${PHONE_NUMBER_1}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] hover:bg-[#EFECE6] text-[#141512] dark:text-[#F5F0E7] font-semibold transition border border-black/5 dark:border-white/10"
                >
                  <Phone className="w-3 h-3 text-[#C6A46A]" />
                  <span>Line 1</span>
                </a>
                <a
                  href={`tel:${PHONE_NUMBER_2}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] hover:bg-[#EFECE6] text-[#141512] dark:text-[#F5F0E7] font-semibold transition border border-black/5 dark:border-white/10"
                >
                  <Phone className="w-3 h-3 text-[#C6A46A]" />
                  <span>Line 2</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Agency Pillars */}
        <div className="pt-16 border-t border-black/5 dark:border-white/10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8E6D3E] dark:text-[#C6A46A] mb-3 block">
              Our Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#141512] dark:text-[#F5F0E7]">
              How we approach every project.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agencyPillars.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="p-8 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 hover:border-[#C6A46A]/40 transition-all hover:shadow-xl space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#C6A46A]/15 flex items-center justify-center text-[#C6A46A] group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#141512] dark:text-[#F5F0E7]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
