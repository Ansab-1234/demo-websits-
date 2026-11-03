import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Clock, MapPin, Phone, CheckCircle2, ArrowLeft, Shield, Calendar, Award } from 'lucide-react'

const WA_URL = 'https://wa.me/918121507323'

const treatments = [
  { name: 'Painless Laser Root Canal (RCT)', desc: 'Advanced single-sitting rotary endodontics with zero discomfort', price: '₹3,500 – ₹5,500', icon: '⚡', time: '45 mins' },
  { name: 'Teeth Whitening & Brightening', desc: 'LED in-office whitening for instant 4-6 shades whiter sparkling teeth', price: '₹4,000 – ₹7,000', icon: '✨', time: '60 mins' },
  { name: 'Dental Implants (Titanium & Zirconia)', desc: 'Permanent lifetime warranty replacement for missing single or full teeth', price: '₹18,000 – ₹35,000', icon: '🔩', time: '2 visits' },
  { name: 'Invisible Clear Aligners', desc: 'Custom clear aligners to straighten teeth discreetly without metal braces', price: '₹35,000 – ₹80,000', icon: '😁', time: '6-12 months' },
  { name: 'Ceramic Crown & Bridges', desc: 'High strength CAD/CAM designed natural looking tooth crowns', price: '₹4,500 – ₹9,000', icon: '👑', time: '2 visits' },
  { name: 'Kids Dental & Preventive Care', desc: 'Gentle pediatric fluoride application, pit & fissure sealants and cavity care', price: '₹800 – ₹1,800', icon: '🧸', time: '30 mins' },
]

const doctors = [
  { name: 'Dr. Arjun Verma, MDS', title: 'Chief Implantologist & Cosmetic Dentist', exp: '14+ Yrs Exp • Ex-Osmania', emoji: '👨‍⚕️' },
  { name: 'Dr. Sneha Kulkarni, MDS', title: 'Orthodontist & Clear Aligner Specialist', exp: '10+ Yrs Exp • Certified Invisalign', emoji: '👩‍⚕️' },
  { name: 'Dr. Rajesh Nambiar, BDS, MDS', title: 'Endodontist & Laser Specialist', exp: '9+ Yrs Exp • Single-Sitting RCT', emoji: '👨‍⚕️' },
]

const reviews = [
  { name: 'Kavita Menon', text: 'Dr. Arjun made my root canal completely painless. Extremely sanitized clinic with world-class digital scanners.', rating: 5, date: '2 weeks ago' },
  { name: 'Siddharth Rao', text: 'Got my clear aligners from Dr. Sneha. Halfway through my treatment and the results are already incredible!', rating: 5, date: '1 month ago' },
  { name: 'Pooja Reddy', text: 'Very friendly team and clean environment. They explained the treatment plan clearly with transparent pricing.', rating: 5, date: '3 weeks ago' },
]

export default function DentalPreview() {
  const [form, setForm] = useState({ name: '', phone: '', treatment: '', date: '', time: 'Morning' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello BrightSmile Dental Care! I want to schedule an appointment:\n• Patient Name: ${form.name}\n• Phone: ${form.phone}\n• Treatment: ${form.treatment || 'General Checkup'}\n• Preferred Date: ${form.date || 'Earliest available'}\n• Preferred Time: ${form.time}`
    window.open(`${WA_URL}?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Demo Banner */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white text-center py-2.5 px-4 text-xs font-semibold flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to PIXORA
        </Link>
        <span>🦷 Sample Dental Clinic Website Demo — Customized for your practice</span>
        <a href={`${WA_URL}?text=Hi! I want a dental/healthcare website like your BrightSmile demo.`} target="_blank" rel="noopener noreferrer" className="bg-white text-cyan-700 px-3 py-1 rounded-full text-xs font-bold hover:bg-cyan-50 transition">
          Build My Clinic Website
        </a>
      </div>

      {/* Clinic Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl shadow-md text-white">
              🦷
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight">BrightSmile Dental</h1>
              <p className="text-[11px] text-cyan-600 font-semibold tracking-wide">Advanced Digital Multispeciality Clinic</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+918121507323" className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-cyan-600 transition">
              <Phone className="w-3.5 h-3.5" /> +91 81215 07323
            </a>
            <a
              href="#appointment"
              className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-xs font-bold rounded-xl shadow transition"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-cyan-900 via-slate-900 to-slate-950 text-white py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-6">
              <Shield className="w-3.5 h-3.5 text-cyan-400" /> NABH Accredited & 100% Sterile Standards
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Gentle, Pain-Free <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Dental Care You Can Trust.
              </span>
            </h2>
            <p className="text-slate-300 text-base mb-8 leading-relaxed max-w-lg">
              Equipped with German 3D digital scanners, low-radiation CBCT imaging, and pain-free laser technology in Gachibowli, Hyderabad.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a href="#appointment" className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-xl shadow-lg transition">
                Book Consultation
              </a>
              <a
                href={`${WA_URL}?text=Hello BrightSmile! I'd like to ask a question regarding dental treatment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
              <Award className="w-8 h-8 text-cyan-400 mb-2" />
              <div className="text-2xl font-black text-white">12,000+</div>
              <div className="text-xs text-slate-400 mt-1">Happy Smiles Restored</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
              <Star className="w-8 h-8 text-amber-400 mb-2 fill-amber-400" />
              <div className="text-2xl font-black text-white">4.9 / 5.0</div>
              <div className="text-xs text-slate-400 mt-1">From 950+ Reviews</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
              <Clock className="w-8 h-8 text-cyan-400 mb-2" />
              <div className="text-2xl font-black text-white">Zero Wait</div>
              <div className="text-xs text-slate-400 mt-1">Guaranteed Appointments</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
              <Shield className="w-8 h-8 text-emerald-400 mb-2" />
              <div className="text-2xl font-black text-white">100% Sterile</div>
              <div className="text-xs text-slate-400 mt-1">Class-B Autoclave Protocol</div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <span className="text-cyan-600 text-xs font-bold uppercase tracking-widest">Our Expertise</span>
          <h3 className="text-3xl font-black text-slate-900 mt-2 mb-3">Multispeciality Dental Procedures</h3>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            From routine checkups and cleanings to complex full-mouth digital restorations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:border-cyan-400 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-3">{t.icon}</div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">{t.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{t.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Est. Cost</span>
                  <span className="text-sm font-bold text-cyan-700">{t.price}</span>
                </div>
                <a
                  href={`${WA_URL}?text=Hello BrightSmile! I want to enquire about *${encodeURIComponent(t.name)}*. Please share details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 text-xs font-bold rounded-lg transition"
                >
                  Enquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="bg-white border-y border-slate-200 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-cyan-600 text-xs font-bold uppercase tracking-widest">Medical Team</span>
            <h3 className="text-3xl font-black text-slate-900 mt-2 mb-3">Meet Our Senior Dental Specialists</h3>
            <p className="text-slate-500 text-sm">Specialists trained at premier Indian and international institutes.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {doctors.map((d) => (
              <div key={d.name} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center hover:shadow transition">
                <div className="text-5xl mb-4">{d.emoji}</div>
                <h4 className="text-base font-bold text-slate-900 mb-1">{d.name}</h4>
                <p className="text-xs font-semibold text-cyan-600 mb-2">{d.title}</p>
                <p className="text-xs text-slate-500">{d.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form & Reviews */}
      <section id="appointment" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-cyan-600 text-xs font-bold uppercase tracking-widest">Book Your Visit</span>
            <h3 className="text-3xl font-black text-slate-900 mt-2 mb-4">Consultation Request</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Schedule your checkup in 30 seconds. We confirm all appointments with instant WhatsApp reminders.
            </p>

            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Request Delivered!</h4>
                  <p className="text-xs text-slate-500 mb-6">WhatsApp has opened with your request details. Our care coordinator will confirm your exact slot immediately.</p>
                  <button onClick={() => setSubmitted(false)} className="px-5 py-2 text-xs bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Patient Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Phone *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Treatment Required</label>
                    <select
                      value={form.treatment}
                      onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-500"
                    >
                      <option value="">General Consultation / Checkup</option>
                      {treatments.map((t) => (
                        <option key={t.name} value={t.name}>{t.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Time</label>
                      <select
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-500"
                      >
                        <option>Morning (10 AM - 1 PM)</option>
                        <option>Afternoon (2 PM - 5 PM)</option>
                        <option>Evening (5 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 text-white font-bold rounded-xl text-sm transition shadow mt-2"
                  >
                    Confirm via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>

          <div>
            <span className="text-cyan-600 text-xs font-bold uppercase tracking-widest">Patient Reviews</span>
            <h3 className="text-3xl font-black text-slate-900 mt-2 mb-4">What Our Patients Say</h3>
            <div className="space-y-4">
              {reviews.map((r) => (
                <div key={r.name} className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-sm">{r.name}</span>
                    <span className="text-[11px] text-slate-400">{r.date}</span>
                  </div>
                  <div className="flex gap-1 text-amber-400 mb-2">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">"{r.text}"</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-cyan-50 border border-cyan-200/80 p-5 rounded-2xl text-xs text-cyan-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-cyan-950">
                <MapPin className="w-4 h-4 text-cyan-600" /> Clinic Address:
              </div>
              <p>Plot 48, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032</p>
              <p className="text-cyan-800">Timings: Mon - Sat: 9:30 AM to 8:30 PM | Sunday: 10:00 AM to 2:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <p className="mb-2">BrightSmile Dental Care • Gachibowli, Hyderabad • Demo Project by PIXORA DIGITAL</p>
        <Link to="/" className="text-cyan-600 hover:underline">Want a website built for your clinic? Contact PIXORA DIGITAL →</Link>
      </footer>
    </div>
  )
}
