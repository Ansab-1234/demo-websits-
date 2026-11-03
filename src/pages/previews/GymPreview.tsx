import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Check, Star, Dumbbell, Flame, Trophy, Clock, MapPin, Phone, Users } from 'lucide-react'

const WA_URL = 'https://wa.me/918121507323'

const plans = [
  {
    name: 'Standard Pass',
    price: '₹1,499',
    period: 'Per Month',
    popular: false,
    features: [
      'Full Gym & Cardio floor access',
      'Locker room & steam shower',
      'Free fitness assessment & BMI test',
      'Access to standard timings (6 AM - 10 PM)',
    ],
  },
  {
    name: 'Pro Transformation',
    price: '₹3,499',
    period: 'For 3 Months',
    popular: true,
    features: [
      'Everything in Standard Pass',
      'Certified Personal Trainer (2 sessions)',
      'Custom Diet & Nutrition Meal Chart',
      'Unlimited Zumba, HIIT & Crossfit batches',
      'Body composition analysis every 15 days',
    ],
  },
  {
    name: 'Elite Annual Membership',
    price: '₹9,999',
    period: 'For 12 Months',
    popular: false,
    features: [
      '365 Days 24/7 Access',
      '12 Personal Training Guidance sessions',
      'Guest passes (2 per month)',
      'Nutritionist consultation quarterly',
      'Free protein shake & gym merchandise kit',
    ],
  },
]

const trainers = [
  { name: 'Vikram Rajput', title: 'Head Strength & Conditioning Coach', cert: 'ACE & K11 Certified • 8+ Yrs Exp', emoji: '🏋️‍♂️' },
  { name: 'Pooja Kashyap', title: 'Female Fitness & Calisthenics Expert', cert: 'CSCS & Yoga Alliance • 6+ Yrs Exp', emoji: '🤸‍♀️' },
  { name: 'Kabir Khan', title: 'Crossfit & Functional Hypertrophy Coach', cert: 'CrossFit L2 Trainer • 7+ Yrs Exp', emoji: '🥊' },
]

const facilities = [
  { icon: '🏋️', title: 'Imported Biomechanical Machines', desc: 'Hammer Strength & LifeFitness heavy duty plate-loaded equipment' },
  { icon: '🏃', title: 'Interactive Cardio Zone', desc: 'Virtual sprint treadmills, stairmasters, air-bikes & rowing machines' },
  { icon: '🥊', title: 'Crossfit & MMA Cage', desc: 'Prowler sleds, battle ropes, Olympic lifting platforms and boxing bags' },
  { icon: '🚿', title: 'Luxury Steam & Showers', desc: 'Private secure digital lockers, steam rooms and clean changing areas' },
]

export default function GymPreview() {
  const [form, setForm] = useState({ name: '', phone: '', goal: 'Muscle Building', plan: 'Pro Transformation' })
  const [booked, setBooked] = useState(false)

  const handleTrial = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello IronForge Fitness! I want to claim my FREE 1-Day Trial Pass:\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Fitness Goal: ${form.goal}\n• Interested In: ${form.plan}`
    window.open(`${WA_URL}?text=${encodeURIComponent(msg)}`, '_blank')
    setBooked(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Demo Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white text-center py-2.5 px-4 text-xs font-semibold flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to PIXORA
        </Link>
        <span>💪 Sample Gym & Fitness Studio Website Demo — Built to convert leads</span>
        <a href={`${WA_URL}?text=Hi! I want a fitness studio/gym website like your IronForge demo.`} target="_blank" rel="noopener noreferrer" className="bg-white text-emerald-800 px-3 py-1 rounded-full text-xs font-bold hover:bg-emerald-50 transition">
          Build My Gym Website
        </a>
      </div>

      {/* Gym Navbar */}
      <nav className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/20">
              ⚡
            </div>
            <div>
              <h1 className="text-xl font-black tracking-wider text-white">IRONFORGE</h1>
              <p className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">Elite Fitness & Crossfit Studio</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#trial" className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-black rounded-xl shadow transition uppercase tracking-wider">
              Claim Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop')] bg-cover bg-center brightness-[0.25]" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6">
            <Flame className="w-3.5 h-3.5 text-emerald-400" /> Hyderabad’s Most Energetic Training Facility • Madhapur
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-none">
            Stop Making Excuses. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400">
              Build Your Dream Physique.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            10,000 sq.ft. of world-class imported strength & cardio gear, certified coaches, functional crossfit turf and motivating music.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#trial" className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black rounded-xl shadow-lg transition uppercase tracking-wider">
              Get Free 1-Day Trial Pass
            </a>
            <a href="#plans" className="px-8 py-3.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl transition">
              View Membership Plans
            </a>
          </div>
        </div>
      </section>

      {/* Stat Bar */}
      <div className="border-y border-slate-800 bg-slate-900/60 py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-emerald-400">10,000</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Sq.Ft Training Floor</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400">1,800+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Active Members</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400">12+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Certified Trainers</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400">5 AM – 11 PM</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Daily Timings</div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">World Class Equipment</span>
          <h3 className="text-3xl font-black text-white mt-2 mb-3">Engineered For Serious Results</h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Everything you need for bodybuilding, weight loss, mobility or athletic conditioning under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {facilities.map((f) => (
            <div key={f.title} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-500/50 transition">
              <div className="text-3xl p-3 bg-slate-800 rounded-xl">{f.icon}</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1.5">{f.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Plans */}
      <section id="plans" className="bg-slate-900/40 border-y border-slate-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Transparent Pricing</span>
            <h3 className="text-3xl font-black text-white mt-2 mb-3">Simple Membership Options</h3>
            <p className="text-slate-400 text-sm">No hidden maintenance charges. What you see is what you pay.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-3xl p-7 border flex flex-col justify-between transition-all ${
                  p.popular
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-emerald-500 shadow-xl shadow-emerald-500/10 scale-105'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div>
                  {p.popular && (
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider mb-4">
                      Most Popular Plan
                    </span>
                  )}
                  <h4 className="text-xl font-black text-white mb-1">{p.name}</h4>
                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-3xl font-black text-emerald-400">{p.price}</span>
                    <span className="text-xs text-slate-400">/ {p.period}</span>
                  </div>
                  <ul className="space-y-3 my-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`${WA_URL}?text=Hello IronForge! I'm interested in the *${encodeURIComponent(p.name)}* (${p.price}). Please share signup details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition ${
                    p.popular
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  Join via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Form & Location */}
      <section id="trial" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Experience Before You Commit</span>
            <h3 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4">
              Get Your Free 1-Day VIP Guest Pass
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Work out on our floor, attend a group session, speak with a certified trainer, and check out the vibe before making any decision.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>3rd Floor, Silicon Towers, Hitech City Main Rd, Madhapur, Hyderabad</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Open 5:30 AM to 10:30 PM (Mon - Sat), 7:00 AM to 2:00 PM (Sun)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp or Call: +91 81215 07323</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl">
            {booked ? (
              <div className="text-center py-8">
                <Trophy className="w-14 h-14 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">Free Pass Requested!</h4>
                <p className="text-xs text-slate-400 mb-6">WhatsApp has opened. Send the pre-filled message and show it at the front desk when you arrive!</p>
                <button onClick={() => setBooked(false)} className="px-5 py-2 text-xs bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700">
                  Request Another Pass
                </button>
              </div>
            ) : (
              <form onSubmit={handleTrial} className="space-y-4">
                <h4 className="text-lg font-bold text-white mb-4">Claim Free Day Pass</h4>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp Mobile *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="10-digit phone number"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Goal</label>
                    <select
                      value={form.goal}
                      onChange={(e) => setForm({ ...form, goal: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500"
                    >
                      <option>Weight Loss</option>
                      <option>Muscle Building</option>
                      <option>Strength & Endurance</option>
                      <option>General Fitness</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Interested Plan</label>
                    <select
                      value={form.plan}
                      onChange={(e) => setForm({ ...form, plan: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500"
                    >
                      {plans.map((p) => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black rounded-xl text-sm transition shadow-lg mt-2 uppercase tracking-wider"
                >
                  Activate Pass via WhatsApp ⚡
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <p className="mb-2">IronForge Fitness Studio • Madhapur, Hyderabad • Demo Project by PIXORA DIGITAL</p>
        <Link to="/" className="text-emerald-400 hover:underline">Want a website built for your gym or fitness center? Contact PIXORA DIGITAL →</Link>
      </footer>
    </div>
  )
}
