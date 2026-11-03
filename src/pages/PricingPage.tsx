import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  AlertCircle,
  Server,
  Globe,
  Layers,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Phone,
  MessageSquare
} from 'lucide-react'
import OwnershipSection from '../components/OwnershipSection'
import {
  getWhatsAppUrl,
  WA_MESSAGES,
  PHONE_DISPLAY_1,
  PHONE_NUMBER_1,
  WHATSAPP_NUMBER_1,
  PHONE_DISPLAY_2,
  PHONE_NUMBER_2,
  WHATSAPP_NUMBER_2
} from '../lib/constants'

const plans = [
  {
    name: 'Starter',
    price: '₹5,000',
    suffix: 'onwards',
    description: 'Engineered for small local businesses requiring an immediate, high-converting digital presence.',
    highlight: false,
    badge: null,
    includes: [
      'Bespoke Mobile-First Website (Up to 4 sections)',
      'Direct WhatsApp Call-to-Action & Floating Widget',
      'One-Tap Phone Calling & Google Maps Integration',
      'Essential On-Page Local SEO Configuration',
      'Clean Typography & Theme Tailored to Your Brand',
      'Zero-Bloat Fast Loading Cloud Deployment',
    ],
    excludes: [
      'Multi-category product/food digital menu',
      'High-resolution photo lookbook gallery',
      'Custom interactive booking or calculation forms',
      'Backend administrative dashboard',
    ],
  },
  {
    name: 'Growth',
    price: '₹9,000',
    suffix: 'onwards',
    description: 'Ideal for established local businesses that need complete service catalogs, lookbooks, and lead flows.',
    highlight: true,
    badge: 'Most Popular',
    includes: [
      'Everything in Starter Package',
      'Multi-Category Service or Product Showcase (Up to 8 sections)',
      'High-Resolution Gallery / Lookbook Grid',
      'Validated Contact & Inquiry Form with WhatsApp Routing',
      'Interactive FAQ Accordions & Testimonial Proof',
      'Comprehensive Schema Metadata for Google Search',
      'Smooth Scroll Physics & Sub-Second Optimization',
    ],
    excludes: [
      'Custom web app logic or user login portals',
      'Complex third-party API integrations',
    ],
  },
  {
    name: 'Custom Pro',
    price: '₹15,000',
    suffix: 'onwards',
    description: 'For businesses requiring bespoke interactive layouts, complex catalogs, and specialized workflows.',
    highlight: false,
    badge: 'Enterprise Architecture',
    includes: [
      'Everything in Growth Package',
      'Bespoke Multi-Page or Deep Architectural Layouts (Up to 15+ sections)',
      'Custom Interactive Tools (Calculators, Bay Selectors, Tier Matrices)',
      'Advanced Motion Transitions & Micro-Interactions',
      'Dedicated Priority Communication via WhatsApp Sprint Channel',
      'Comprehensive Multi-Device Cross-Browser Stress Testing',
      'Full Source Code Handover & Recorded Video Walkthrough',
    ],
    excludes: [],
  },
]

const separateItems = [
  {
    title: 'Domain Name Registration',
    desc: 'Registered directly in your name via GoDaddy, Namecheap, or Google. Billed at actual registrar cost (approx. ₹800 – ₹1,200/year for .in / .com). You retain 100% legal ownership.',
    icon: Globe,
  },
  {
    title: 'Cloud Web Hosting Infrastructure',
    desc: 'Configured on high-speed global edge networks (Vercel, Cloudflare, Netlify). Free-tier or low-cost direct billing under your personal account.',
    icon: Server,
  },
  {
    title: 'Premium Third-Party APIs',
    desc: 'SMS gateways, paid transactional email (SendGrid), or payment gateways (Razorpay) are billed directly by the respective provider.',
    icon: Layers,
  },
  {
    title: 'Ongoing Technical Updates & Retainers',
    desc: 'Routine seasonal content refreshes, menu price adjustments, and banner additions can be requested on-demand or via a predictable monthly support retainer.',
    icon: ShieldCheck,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#10110F] text-[#141512] dark:text-[#F5F0E7] transition-colors selection:bg-[#C6A46A] selection:text-[#10110F] pt-36 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6]/80 dark:bg-[#191A17] text-[#8E6D3E] dark:text-[#C6A46A] text-xs font-mono font-bold uppercase tracking-widest mb-6 border border-black/5 dark:border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A46A]" />
            Transparent & Honest Pricing
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.06] mb-6 text-[#141512] dark:text-[#F5F0E7]">
            Predictable Investment.{' '}
            <span className="font-serif-display italic font-normal text-[#C6A46A] block sm:inline">
              Zero Hidden Charges.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
            We believe in complete financial clarity. Our design and software engineering fees are fixed and transparent. Domain names, hosting renewals, and third-party tools are billed at actuals directly to client-owned accounts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                plan.highlight
                  ? 'bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] border-2 border-[#C6A46A] shadow-2xl relative'
                  : 'bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] border border-black/5 dark:border-white/10 shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C6A46A] text-[#10110F] text-xs font-bold uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#141512] dark:text-[#F5F0E7]">{plan.name}</h3>
                <p className="text-xs text-[#5A564F] dark:text-[#A8A49B] mb-6">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-black/5 dark:border-white/10">
                  <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-[#141512] dark:text-[#F5F0E7]">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#8F8B82]">{plan.suffix}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8F8B82] block">
                    What's Included:
                  </span>
                  {plan.includes.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-[#444037] dark:text-[#DDD5C7]">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A46A] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}

                  {plan.excludes.length > 0 && (
                    <div className="pt-4 border-t border-black/5 dark:border-white/10 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#8F8B82] block">
                        Scope Exclusions:
                      </span>
                      {plan.excludes.map((exc) => (
                        <div key={exc} className="flex items-start gap-2.5 text-xs text-[#8F8B82]">
                          <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <a
                href={getWhatsAppUrl(`Hello PIXORA DIGITAL! I'm interested in the ${plan.name} Package (${plan.price}). Could you provide a formal project scope & quote?`, WHATSAPP_NUMBER_1)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${
                  plan.highlight
                    ? 'bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F]'
                    : 'bg-[#F7F5EF] dark:bg-[#121310] text-[#141512] dark:text-[#F5F0E7] hover:bg-[#C6A46A] hover:text-[#10110F]'
                }`}
              >
                <span>Select {plan.name} Plan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Separate Items & Third-Party Transparency Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 shadow-lg">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8E6D3E] dark:text-[#C6A46A] mb-3 block">
              Itemized Transparency
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#141512] dark:text-[#F5F0E7] mb-4">
              Separate Third-Party Costs (Billed at Actuals)
            </h2>
            <p className="text-sm sm:text-base text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
              Unlike agencies that secretly markup hosting and hold your credentials hostage, PIXORA DIGITAL believes in complete financial transparency. We configure external accounts directly under your name.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {separateItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-[#F7F5EF] dark:bg-[#121310] border border-black/5 dark:border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C6A46A]/15 text-[#C6A46A] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#141512] dark:text-[#F5F0E7]">{item.title}</h4>
                  <p className="text-xs text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 100% Client Ownership Guarantee Section */}
      <OwnershipSection />
    </div>
  )
}
