import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Clock,
  MapPin,
  Phone,
  Flame,
  CheckCircle2,
  Calendar,
  Dumbbell,
  Users,
  ChevronRight,
  ShieldCheck,
  Zap,
  Award
} from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../../lib/constants'

interface Plan {
  name: string
  price: string
  period: string
  features: string[]
  isBestValue?: boolean
}

const plans: Plan[] = [
  {
    name: 'Floor Conditioning Pass',
    price: '₹1,999',
    period: 'per month (Quarterly Billing)',
    features: [
      'Full 12,000 Sq.Ft gym floor & free-weight turf access',
      'Eleiko Olympic bars, calibrated competition plates',
      'Woodway 4Front curved motorless treadmills',
      'Biometric locker & luxury shower lounge amenities',
      'Complimentary fitness movement assessment on Day 1',
    ],
  },
  {
    name: 'Performance Athlete',
    price: '₹3,499',
    period: 'per month (Most Popular)',
    features: [
      'Everything in Floor Conditioning Pass',
      'Unlimited Hyrox & CrossFit functional group classes',
      'Monthly InBody 770 clinical body composition analysis',
      'Post-workout infrared dry sauna recovery suite',
      'Kinetic community weekend lifting throwdowns',
    ],
    isBestValue: true,
  },
  {
    name: 'Elite 1-on-1 Coaching',
    price: '₹8,999',
    period: 'per month (Exclusive 20 Slots)',
    features: [
      'Everything in Performance Athlete',
      '12 dedicated 1-on-1 sessions with CSCS strength coaches',
      'Customized macronutrient & performance meal strategy',
      'Bi-weekly video biomechanics lifting analysis',
      'Priority access to physical therapy & mobility zone',
    ],
  },
]

const coaches = [
  {
    name: 'Vikram Rajput, CSCS',
    role: 'Head of Strength & Conditioning',
    credentials: 'NSCA-CSCS, Ex-National Powerlifting Gold Medalist',
    focus: 'Barbell Biomechanics & Maximal Strength',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=700&fit=crop',
  },
  {
    name: 'Ananya Roy',
    role: 'Lead Functional & Hyrox Coach',
    credentials: 'CrossFit Level 2 Trainer, Asia Championships Finalist',
    focus: 'Metabolic Conditioning & Movement Efficiency',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=700&fit=crop',
  },
]

export default function GymPreview() {
  const [trialPass, setTrialPass] = useState({
    name: '',
    phone: '',
    trainingGoal: 'Strength & Muscle Building',
    preferredSlot: 'Morning (06:00 AM – 10:00 AM)',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trialPass.name || !trialPass.phone) return
    const msg = `Hello Kinetic Force Athletics!
I would like to activate my 1-Day VIP Trial Pass:
• Athlete Name: ${trialPass.name}
• Contact: ${trialPass.phone}
• Primary Goal: ${trialPass.trainingGoal}
• Preferred Session: ${trialPass.preferredSlot}
Please send me my digital QR entry pass!`

    window.open(getWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#F3F4F6] font-sans selection:bg-[#F59E0B] selection:text-black">
      {/* Top Agency Demo Navigation Bar */}
      <div className="bg-[#050608] text-[#8E929C] px-4 py-2 text-xs flex items-center justify-between border-b border-[#1A1D24]">
        <Link to="/our-work" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PIXORA Showcase</span>
        </Link>
        <span className="hidden sm:inline font-mono tracking-widest uppercase text-[10px] text-[#F59E0B]">
          Industry Showcase: Athletic Performance Lab & Strength Gym
        </span>
        <a
          href={getWhatsAppUrl("Hello PIXORA DIGITAL! I explored your Kinetic Force Gym demo. I'd like to build an energetic website for my gym/fitness studio.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F59E0B] hover:underline font-semibold"
        >
          Build Website for My Gym →
        </a>
      </div>

      {/* Gym Top Address Strip */}
      <div className="border-b border-[#1A1D24] bg-[#101217] px-4 py-2.5 text-xs text-[#8E929C]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
              ISB Road, Financial District, Gachibowli, Hyderabad
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              Open Daily: 05:30 AM – 10:30 PM (Sundays: 07:00 AM – 08:00 PM)
            </span>
          </div>
          <span className="font-semibold text-white flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
            Front Desk: {PHONE_DISPLAY}
          </span>
        </div>
      </div>

      {/* Gym Header */}
      <header className="sticky top-0 z-40 bg-[#0A0B0E]/95 backdrop-blur-md border-b border-[#1A1D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B] text-black flex items-center justify-center font-black text-lg shadow-md shadow-amber-500/20">
              <Zap className="w-6 h-6 fill-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-display-athletic text-2xl tracking-wider text-white font-bold">
                KINETIC FORCE
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#F59E0B]">
                Athletics & Performance Lab • Gachibowli
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-[#8E929C]">
            <a href="#plans" className="hover:text-white transition-colors">Membership Tiers</a>
            <a href="#coaches" className="hover:text-white transition-colors">Strength Coaches</a>
            <a href="#facility" className="hover:text-white transition-colors">Equipment Standards</a>
            <a href="#trial" className="hover:text-white transition-colors">Free VIP Pass</a>
          </nav>

          <a
            href="#trial"
            className="px-5 py-2.5 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black text-xs font-bold tracking-wider uppercase transition-colors shadow-md shadow-amber-500/20"
          >
            Claim 1-Day Free Pass
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#1A1D24]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=1000&fit=crop')] bg-cover bg-center brightness-[0.25]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-black/60" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6 pt-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-xs font-mono tracking-widest text-[#F59E0B] uppercase">
            <Flame className="w-3.5 h-3.5" />
            Zero Crowds. Zero Gimmicks. Pure Performance.
          </span>

          <h1 className="font-display-athletic text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.98]">
            ENGINEERED FOR <br />
            <span className="text-[#F59E0B]">ELITE STRENGTH</span> & GRIT.
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto font-normal leading-relaxed">
            Hyderabad’s dedicated athletic strength lab. 12,000 Sq.Ft of competition Eleiko barbells, calibrated steel plates, Olympic lifting platforms, and accredited CSCS coaches.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#trial"
              className="px-8 py-4 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-widest transition-colors shadow-xl shadow-amber-500/25"
            >
              Activate Free 1-Day Trial Pass
            </a>
            <a
              href="#plans"
              className="px-8 py-4 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Compare Membership Tiers
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-lg mx-auto">
            <div>
              <span className="font-display-athletic text-3xl font-bold text-white block">12,000</span>
              <span className="text-xs text-[#9CA3AF]">Sq.Ft Training Turf</span>
            </div>
            <div>
              <span className="font-display-athletic text-3xl font-bold text-white block">Eleiko</span>
              <span className="text-xs text-[#9CA3AF]">Official Certified Plates</span>
            </div>
            <div>
              <span className="font-display-athletic text-3xl font-bold text-white block">CSCS</span>
              <span className="text-xs text-[#9CA3AF]">Head Coach Pedigree</span>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans Comparison */}
      <section id="plans" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1A1D24]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F59E0B] font-bold block mb-2">
            No Hidden Registration Fees
          </span>
          <h2 className="font-display-athletic text-4xl sm:text-6xl font-bold">
            Transparent Membership Plans
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-3">
            Every membership includes locker amenities, towel service, parking, and zero lock-in contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                plan.isBestValue
                  ? 'bg-[#151821] border-2 border-[#F59E0B] shadow-2xl relative'
                  : 'bg-[#101217] border border-[#1A1D24]'
              }`}
            >
              {plan.isBestValue && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#F59E0B] text-black text-xs font-mono font-bold uppercase tracking-wider">
                  Athlete Recommendation
                </div>
              )}

              <div>
                <h3 className="font-display-athletic text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-[#8E929C] mb-6">{plan.period}</p>

                <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-[#1A1D24]">
                  <span className="font-display-athletic text-4xl font-bold text-white">{plan.price}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                      <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsAppUrl(`Hello Kinetic Force! I want to join on the "${plan.name}" plan (${plan.price}). Please share registration and payment link.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  plan.isBestValue
                    ? 'bg-[#F59E0B] text-black hover:bg-amber-400 shadow-lg'
                    : 'bg-[#1A1D24] text-white hover:bg-[#F59E0B] hover:text-black'
                }`}
              >
                <span>Select {plan.name.split(' ')[0]} Pass</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Strength Coaches */}
      <section id="coaches" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1A1D24]">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F59E0B] font-bold block mb-2">
            Professional Coaching Staff
          </span>
          <h2 className="font-display-athletic text-4xl sm:text-6xl font-bold">
            Certified Strength Coaches
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-3">
            Our coaches don't stare at their phones. They analyze movement patterns, cue lifting technique, and ensure progression every single session.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {coaches.map((c) => (
            <div key={c.name} className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-[#101217] border border-[#1A1D24]">
              <div className="w-full sm:w-48 h-56 rounded-2xl overflow-hidden bg-black flex-shrink-0">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-display-athletic text-2xl font-bold text-white">{c.name}</h3>
                  <p className="text-xs font-bold text-[#F59E0B] mt-0.5">{c.role}</p>
                  <p className="text-xs text-[#8E929C] mt-2 font-mono">{c.credentials}</p>
                  <p className="text-xs text-[#D1D5DB] mt-3 leading-relaxed">
                    <strong>Coaching Specialization:</strong> {c.focus}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#1A1D24] mt-4">
                  <a
                    href={getWhatsAppUrl(`Hello Kinetic Force! I'd like to book a 1-on-1 assessment session with Coach ${c.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] hover:underline"
                  >
                    <span>Consult with Coach {c.name.split(' ')[0]}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1-Day Free Trial Pass Suite */}
      <section id="trial" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#101217] rounded-3xl p-8 sm:p-12 border border-[#F59E0B]/40 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F59E0B] font-bold block mb-2">
              Zero Commitment Trial
            </span>
            <h2 className="font-display-athletic text-4xl sm:text-6xl font-bold">
              Claim Your 1-Day VIP Pass
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2">
              Experience the equipment, turf, and coaching before investing. Submit your details to generate your digital entry pass.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#F59E0B] mx-auto" />
              <h3 className="font-display-athletic text-3xl font-bold">VIP Pass Dispatched!</h3>
              <p className="text-xs text-[#9CA3AF] max-w-md mx-auto">
                Your VIP trial pass request has been sent to WhatsApp. Show this message at our front desk to receive your locker key and day pass.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white/5"
              >
                Claim Another Pass
              </button>
            </div>
          ) : (
            <form onSubmit={handleTrialSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#8E929C] mb-2">
                    Athlete Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tarun Teja"
                    value={trialPass.name}
                    onChange={(e) => setTrialPass({ ...trialPass, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0B0E] border border-[#1A1D24] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#8E929C] mb-2">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={trialPass.phone}
                    onChange={(e) => setTrialPass({ ...trialPass, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0B0E] border border-[#1A1D24] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#8E929C] mb-2">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={trialPass.trainingGoal}
                    onChange={(e) => setTrialPass({ ...trialPass, trainingGoal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0B0E] border border-[#1A1D24] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    <option>Strength & Muscle Building</option>
                    <option>Hyrox & Stamina Conditioning</option>
                    <option>Fat Loss & Metabolic Reset</option>
                    <option>Olympic Weightlifting Technique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#8E929C] mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    value={trialPass.preferredSlot}
                    onChange={(e) => setTrialPass({ ...trialPass, preferredSlot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0B0E] border border-[#1A1D24] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    <option>Morning (06:00 AM – 10:00 AM)</option>
                    <option>Midday (11:00 AM – 03:00 PM)</option>
                    <option>Evening Peak (05:00 PM – 09:30 PM)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#F59E0B] hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-lg shadow-amber-500/20"
              >
                Generate 1-Day VIP Pass via WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050608] text-[#6B7280] py-12 border-t border-[#1A1D24] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Kinetic Force Athletics Lab. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#8E929C]">Sample Business Website Concept engineered by PIXORA DIGITAL</p>
        </div>
      </footer>
    </div>
  )
}
