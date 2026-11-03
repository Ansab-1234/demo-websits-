import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock, ShieldCheck, Sparkles, Send, ArrowRight } from 'lucide-react'
import SevenDayProcess from '../components/SevenDayProcess'
import OwnershipSection from '../components/OwnershipSection'
import { getWhatsAppUrl, WA_MESSAGES, WHATSAPP_NUMBER_1 } from '../lib/constants'

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#10110F] text-[#141512] dark:text-[#F5F0E7] transition-colors selection:bg-[#C6A46A] selection:text-[#10110F] pt-36 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6]/80 dark:bg-[#191A17] text-[#8E6D3E] dark:text-[#C6A46A] text-xs font-mono font-bold uppercase tracking-widest mb-6 border border-black/5 dark:border-white/10">
            <Clock className="w-3.5 h-3.5 text-[#C6A46A]" />
            Structured Delivery Roadmap
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.06] mb-6 text-[#141512] dark:text-[#F5F0E7]">
            How We Build & Deliver In{' '}
            <span className="font-serif-display italic font-normal text-[#C6A46A]">
              7 Working Days.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
            No mystery delays, no endless waiting. We follow a documented, day-by-day milestone methodology from kickoff discovery to live domain routing and asset ownership handover.
          </p>
        </div>
      </section>

      {/* 7-Day Sprint Showcase */}
      <SevenDayProcess />

      {/* Domain & Hosting Ownership Guarantee */}
      <OwnershipSection />

      {/* Final Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] rounded-3xl p-10 sm:p-14 text-center border border-black/5 dark:border-white/10 relative overflow-hidden shadow-xl">
          <div className="max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E6D3E] dark:text-[#C6A46A] font-bold mb-3 block">
              Day 01 Kickoff
            </span>
            <h3 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              Ready to begin Day 01 Discovery?
            </h3>
            <p className="text-[#5A564F] dark:text-[#A8A49B] text-sm sm:text-base mb-8 leading-relaxed font-light">
              Schedule a no-obligation 15-minute consultation to review your requirements, brand assets, and receive a structured project plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={getWhatsAppUrl(WA_MESSAGES.freeConsultation, WHATSAPP_NUMBER_1)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#C6A46A]/20 transition-all hover:-translate-y-0.5"
              >
                <span>Schedule Day 01 on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F7F5EF] dark:bg-[#121310] hover:bg-[#EFECE6] border border-black/10 dark:border-white/10 text-[#141512] dark:text-[#F5F0E7] text-xs font-bold uppercase tracking-wider rounded-full transition-all"
              >
                <span>View Pricing Packages</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
