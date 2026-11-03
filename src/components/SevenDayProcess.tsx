import { useState } from 'react'
import {
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Layout,
  Code2,
  Layers,
  Sparkles,
  ShieldCheck,
  Send,
  AlertCircle,
  ArrowRight
} from 'lucide-react'
import { getWhatsAppUrl } from '../lib/constants'

interface DayPlan {
  day: string
  dayNumber: number
  title: string
  subtitle: string
  icon: React.ElementType
  tasks: string[]
  clientMilestone: string
}

const sevenDays: DayPlan[] = [
  {
    day: 'DAY 01',
    dayNumber: 1,
    title: 'Discovery & Planning',
    subtitle: 'Understanding your business model, goals, and audience',
    icon: Compass,
    tasks: [
      'In-depth business & competitor landscape discussion (Google Meet or Hyderabad in-person)',
      'Finalize site architecture, navigation map, and primary conversion objectives',
      'Collect brand assets, logos, color preferences, high-res photography, and copy',
      'Establish project milestone timeline and dedicated WhatsApp communication channel',
    ],
    clientMilestone: 'Project Scope Agreement & Asset Onboarding',
  },
  {
    day: 'DAY 02',
    dayNumber: 2,
    title: 'UI/UX Design & Architecture',
    subtitle: 'Crafting bespoke typography, color harmony, and layouts',
    icon: Layout,
    tasks: [
      'Define tailor-made design tokens (display typography, brand colors, spacing scale)',
      'Design high-fidelity homepage wireframe and responsive layout structure',
      'Compose bespoke hero visual composition and conversion button hierarchy',
      'Present design direction to client for review and sign-off before coding begins',
    ],
    clientMilestone: 'Visual Design Direction Approval',
  },
  {
    day: 'DAY 03',
    dayNumber: 3,
    title: 'Frontend Engineering',
    subtitle: 'Transforming approved design into clean, responsive React code',
    icon: Code2,
    tasks: [
      'Set up clean Vite + React 19 + TypeScript + Tailwind infrastructure',
      'Code semantic HTML5 structure with zero bloatware or unneeded dependencies',
      'Develop pixel-perfect sticky navigation, desktop header, and mobile drawer',
      'Build core hero section, interactive showcases, and service containers',
    ],
    clientMilestone: 'Core Homepage Component Build Complete',
  },
  {
    day: 'DAY 04',
    dayNumber: 4,
    title: 'Inner Pages & Functionality',
    subtitle: 'Building catalogs, service sheets, and WhatsApp conversion flows',
    icon: Layers,
    tasks: [
      'Build dedicated inner trade pages, digital menus, portfolios, or catalogs',
      'Implement validated contact and consultation forms with zero spam leakage',
      'Integrate direct WhatsApp smart click-to-chat with formatted message payloads',
      'Embed interactive Google Maps location launcher and tap-to-call buttons',
    ],
    clientMilestone: 'Full Site Navigation & Functional Workflows Ready',
  },
  {
    day: 'DAY 05',
    dayNumber: 5,
    title: 'Animations & Responsiveness',
    subtitle: 'Elevating user experience with purposeful motion & mobile perfection',
    icon: Sparkles,
    tasks: [
      'Integrate smooth scroll physics and subtle scroll-triggered entrance reveals',
      'Rigorous viewport stress-testing across 360px, 390px, 768px, 1024px, and 1440px',
      'Ensure touch targets meet strict 44px+ mobile ergonomics and thumb friendly reach',
      'Implement dark mode persistence and reduced-motion accessibility fallbacks',
    ],
    clientMilestone: 'Multi-Device Fluidity & Motion Polish',
  },
  {
    day: 'DAY 06',
    dayNumber: 6,
    title: 'Testing & Client Review',
    subtitle: 'Comprehensive quality assurance and live preview walkthrough',
    icon: ShieldCheck,
    tasks: [
      'Cross-browser testing (Chrome, Safari, iOS WebKit, Firefox, Android Chrome)',
      'Link verification, form validation edge cases, and image compression checks',
      'Share private staging preview URL with client for interactive walkthrough',
      'Collect client feedback and execute precision punch-list adjustments',
    ],
    clientMilestone: 'Staging Preview Walkthrough & Feedback Sign-Off',
  },
  {
    day: 'DAY 07',
    dayNumber: 7,
    title: 'Final Delivery & Handover',
    subtitle: 'Domain connection, cloud deployment, and full asset handover',
    icon: Send,
    tasks: [
      'Deploy production build to enterprise cloud hosting (Vercel / Cloudflare)',
      'Configure DNS records, SSL security certificate, and custom domain routing',
      'Publish OpenGraph social preview cards and on-page local SEO metadata',
      'Hand over source code repository, credentials, and recorded walkthrough guide',
    ],
    clientMilestone: 'Live Public Launch & 100% Asset Ownership Handover',
  },
]

export default function SevenDayProcess() {
  const [activeDay, setActiveDay] = useState(1)

  const selectedPlan = sevenDays.find((d) => d.dayNumber === activeDay) || sevenDays[0]
  const Icon = selectedPlan.icon

  return (
    <section id="seven-day-process" className="py-24 border-b border-black/5 dark:border-white/10 relative overflow-hidden bg-[#F7F5EF] dark:bg-[#141512]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A46A]/15 border border-[#C6A46A]/30 text-xs font-semibold text-[#8E6D3E] dark:text-[#C6A46A] mb-4">
            <Clock className="w-3.5 h-3.5" />
            Clear & Predictable Timeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] mb-4 text-[#141512] dark:text-[#F5F0E7]">
            Your Professional Website. <br />
            <span className="text-[#C6A46A]">Delivered in 7 Working Days.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6A665E] dark:text-[#A8A49B] leading-relaxed font-normal">
            We follow a structured milestone timeline. Once all required business materials, photos, and approvals are provided, our standard engineering cycle is 7 working days from kickoff to live deployment.
          </p>
        </div>

        {/* Day-by-Day Interactive Stepper */}
        <div className="mb-12">
          {/* Desktop/Tablet Stepper Bar */}
          <div className="grid grid-cols-7 gap-2 overflow-x-auto pb-4 no-scrollbar">
            {sevenDays.map((step) => {
              const isCurrent = step.dayNumber === activeDay
              const isPast = step.dayNumber < activeDay
              return (
                <button
                  key={step.day}
                  onClick={() => setActiveDay(step.dayNumber)}
                  className={`flex flex-col items-center p-3 sm:p-4 rounded-2xl text-center transition-all ${
                    isCurrent
                      ? 'bg-[#C6A46A] text-[#10110F] shadow-lg shadow-[#C6A46A]/25 scale-[1.02]'
                      : 'bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 text-[#6A665E] dark:text-[#A8A49B] hover:border-[#C6A46A]/40'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold tracking-widest ${isCurrent ? 'text-[#2B271F]' : 'text-[#8F8B82]'}`}>
                    {step.day}
                  </span>
                  <span className={`text-xs sm:text-sm font-black mt-1 line-clamp-1 ${isCurrent ? 'text-[#10110F]' : 'text-[#141512] dark:text-[#F5F0E7]'}`}>
                    {step.title.split(' ')[0]}
                  </span>
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    isCurrent ? 'bg-[#10110F]' : isPast ? 'bg-[#C6A46A]' : 'bg-[#DCD8CF] dark:bg-[#33352E]'
                  }`} />
                </button>
              )
            })}
          </div>

          {/* Active Day Detail Workstation */}
          <div className="mt-8 p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#C6A46A]/15 border border-[#C6A46A]/30 flex items-center justify-center text-[#C6A46A] flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A46A]">
                      {selectedPlan.day} Milestone
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#141512] dark:text-[#F5F0E7]">
                      {selectedPlan.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#6A665E] dark:text-[#A8A49B] leading-relaxed font-light">
                  {selectedPlan.subtitle}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F8B82] dark:text-[#88847B] block">
                    Engineering Checklist for {selectedPlan.day}
                  </span>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedPlan.tasks.map((task) => (
                      <div key={task} className="flex items-start gap-2.5 text-xs text-[#44413A] dark:text-[#C4C0B6] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#C6A46A] flex-shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#FBF9F5] dark:bg-[#121310] border border-black/5 dark:border-white/10 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8F8B82] block mb-1">
                    Day Deliverable Target
                  </span>
                  <p className="text-sm font-bold text-[#141512] dark:text-[#F5F0E7]">
                    {selectedPlan.clientMilestone}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 dark:border-white/10 text-xs text-[#6A665E] dark:text-[#A8A49B] leading-relaxed">
                  Daily progress updates and staging previews are shared directly on WhatsApp by 7:00 PM.
                </div>

                <a
                  href={getWhatsAppUrl(`Hello PIXORA DIGITAL! I'd like to plan a 7-day website build for my business. Let's discuss starting Day 1.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Book Your 7-Day Sprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Important Delivery Conditions Notice */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#C6A46A]/10 border border-[#C6A46A]/25 text-xs sm:text-sm text-[#444037] dark:text-[#DDD5C7]">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#C6A46A] flex-shrink-0 mt-0.5" />
            <div className="space-y-2 leading-relaxed">
              <strong className="block text-sm font-bold text-[#141512] dark:text-[#F5F0E7]">
                Important Delivery Conditions & Transparency Policy:
              </strong>
              <p>
                • <strong>Material Dependency:</strong> The 7-day development timeline is a standard target that officially commences after the client has provided all necessary content, text, high-resolution imagery, logo assets, and structural approvals.
              </p>
              <p>
                • <strong>Scope Flexibility:</strong> Delays in content provision, external third-party domain verification, payment gateway approvals, or expansion of the agreed project scope will naturally adjust the final deployment date.
              </p>
              <p>
                • <strong>Proactive Communication:</strong> We pride ourselves on complete transparency. Any schedule adjustments or external blockers are communicated immediately so you are always in full control of your launch date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

