import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, GraduationCap, Award, Users, CheckCircle2, Clock, Phone, MapPin, Star } from 'lucide-react'

const WA_URL = 'https://wa.me/918121507323'

const courses = [
  {
    id: 1,
    name: 'NEET Super-50 Intensive Batch',
    target: 'Class 11, 12 & Droppers',
    duration: '1 Year Full-Time',
    fee: '₹45,000 / year',
    faculty: 'Ex-AIIMS & Senior Medical Faculty',
    results: '94% Qualification Rate in NEET 2024',
    features: ['Daily 30-min OMR mock tests', 'Dedicated doubt clearing desk till 9 PM', 'Custom illustrated NCERT booster notes'],
  },
  {
    id: 2,
    name: 'IIT-JEE (Main + Advanced) Pinnacle',
    target: 'Class 11 & 12 Engineering Aspirants',
    duration: '2 Years Comprehensive',
    fee: '₹55,000 / year',
    faculty: 'Top IIT Bombay & IIT Madras Alumni',
    results: '42 Students into IITs & NITs in 2024',
    features: ['Computer-Based Test (CBT) Labs', 'Advanced calculus & mechanics problem sets', 'One-on-one mentor performance tracking'],
  },
  {
    id: 3,
    name: 'Full Stack Web Development & AI BootCamp',
    target: 'College Students & Career Switchers',
    duration: '6 Months (Live + Projects)',
    fee: '₹28,000 Total',
    faculty: 'Senior Engineers from FAANG / Top MNCs',
    results: '100% Placement Drive Support',
    features: ['React, Node, TypeScript & Python GenAI', '5 Production Portfolio Apps on GitHub', 'Resume review & mock interview drill'],
  },
  {
    id: 4,
    name: 'Spoken English & Corporate Communication',
    target: 'Professionals & Job Seekers',
    duration: '3 Months (Evening Batches)',
    fee: '₹9,500 Total',
    faculty: 'Cambridge Certified Language Trainers',
    results: '4,000+ Alumni Working Globally',
    features: ['Eliminate hesitation & MTI (accent reduction)', 'Extempore, GD & presentation stage practice', 'Interview readiness drills'],
  },
]

const facultyList = [
  { name: 'Dr. M. S. R. Chary, Ph.D.', role: 'Head of Physics & Mechanics', exp: '18+ Yrs Exp • Ex-Chaitanya HOD', emoji: '👨‍🏫' },
  { name: 'Prof. Lakshmi Kameshwari', role: 'Chief Botany & Zoology Mentor', exp: '15+ Yrs Exp • Author of 3 NEET Guides', emoji: '👩‍🏫' },
  { name: 'Er. Sandeep Varma (B.Tech IIT-M)', role: 'Mathematics & Advanced Calculus', exp: '11+ Yrs Exp • AIR 314 in IIT-JEE', emoji: '👨‍🏫' },
]

export default function EducationPreview() {
  const [form, setForm] = useState({ name: '', phone: '', course: 'NEET Super-50 Intensive Batch', studentClass: 'Class 11' })
  const [submitted, setSubmitted] = useState(false)

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello BrightMind Academy! I want admission counseling details:\n• Student Name: ${form.name}\n• Contact Number: ${form.phone}\n• Course Interested: ${form.course}\n• Current Class: ${form.studentClass}`
    window.open(`${WA_URL}?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Demo Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-cyan-800 to-slate-900 text-white text-center py-2.5 px-4 text-xs font-semibold flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to PIXORA
        </Link>
        <span>📚 Sample Coaching Institute & Academy Website Demo</span>
        <a href={`${WA_URL}?text=Hi! I want an educational / coaching institute website like your BrightMind demo.`} target="_blank" rel="noopener noreferrer" className="bg-white text-teal-900 px-3 py-1 rounded-full text-xs font-bold hover:bg-teal-50 transition">
          Build My Institute Website
        </a>
      </div>

      {/* Academy Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center text-xl text-white shadow-md">
              🎓
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight">BRIGHTMIND ACADEMY</h1>
              <p className="text-[10px] text-teal-600 font-bold tracking-widest uppercase">Premier NEET, IIT-JEE & Career Skills Hub • Hyderabad</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#admissions"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow transition"
            >
              Admissions Open 2026-27
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-20 px-4 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=900&fit=crop')] bg-cover bg-center opacity-25" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold mb-6">
            <Award className="w-3.5 h-3.5 text-teal-400" /> Scholarships Up to 90% Available via BrightMind Talent Exam (BMTE)
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            Nurturing Ambition into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-300">
              National Top Ranks.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Personalized mentoring with restricted batch sizes of only 35 students per class. Learn from Kota and Hyderabad's top educator legends in Dilsukhnagar & Kukatpally.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#admissions" className="px-7 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg transition">
              Apply For Free Demo Class
            </a>
            <a
              href={`${WA_URL}?text=Hello BrightMind! I'd like to receive the 2026-27 Course Fee Structure & Scholarship Brochure.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition"
            >
              Get Fee Brochure PDF
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <div className="border-b border-slate-200 bg-white py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-black text-teal-800">1:35 Ratio</div>
            <div className="text-xs text-slate-500 mt-1">Strict Small Batch Limits</div>
          </div>
          <div>
            <div className="text-2xl font-black text-teal-800">Daily Tests</div>
            <div className="text-xs text-slate-500 mt-1">Real Time AI Rank Predictor</div>
          </div>
          <div>
            <div className="text-2xl font-black text-teal-800">Air-Conditioned</div>
            <div className="text-xs text-slate-500 mt-1">Smart Digital Classrooms</div>
          </div>
          <div>
            <div className="text-2xl font-black text-teal-800">Doubt Counters</div>
            <div className="text-xs text-slate-500 mt-1">Open 8 AM till 9 PM Every Day</div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <span className="text-teal-700 text-xs font-bold uppercase tracking-widest">Academic Programs</span>
          <h3 className="text-3xl font-black text-slate-900 mt-2 mb-3">Structured Batches For 2026-27</h3>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Comprehensive foundation programs, crash revision batches and industry career courses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map((c) => (
            <div key={c.id} className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:border-teal-500/80 hover:shadow-lg transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    {c.target}
                  </span>
                  <span className="text-sm font-black text-slate-900">{c.fee}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{c.name}</h4>
                <div className="text-xs text-slate-600 mb-1">
                  <strong>Duration:</strong> {c.duration} • <strong>Faculty:</strong> {c.faculty}
                </div>
                <div className="text-xs font-semibold text-emerald-700 mb-4 bg-emerald-50 p-2 rounded-xl">
                  🏆 Track Record: {c.results}
                </div>
                <ul className="space-y-2 mb-6">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">Batches starting 1st of every month</span>
                <a
                  href={`${WA_URL}?text=Hello BrightMind Academy! I'm interested in enrolling for *${encodeURIComponent(c.name)}*. Please share syllabus & demo seat details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition shadow"
                >
                  Apply via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Senior Faculty */}
      <section className="bg-white border-y border-slate-200 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-teal-700 text-xs font-bold uppercase tracking-widest">Master Mentors</span>
            <h3 className="text-3xl font-black text-slate-900 mt-2 mb-3">Learn From Kota & Hyderabad’s Best</h3>
            <p className="text-slate-500 text-sm">Our faculty does not rotate. The same mentors guide you from day one to exam hall.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {facultyList.map((f) => (
              <div key={f.name} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow transition">
                <div className="text-5xl mb-4">{f.emoji}</div>
                <h4 className="text-base font-bold text-slate-900 mb-1">{f.name}</h4>
                <p className="text-xs font-semibold text-teal-700 mb-2">{f.role}</p>
                <p className="text-xs text-slate-500">{f.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Enquiry Form */}
      <section id="admissions" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-teal-700 text-xs font-bold uppercase tracking-widest">Counseling & Free Demo</span>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-4">
              Book a Free Counseling Session & Demo Class
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Sit in on live lectures, interact with our HODs, take an assessment test, and see why 9 out of 10 parents choose BrightMind.
            </p>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Campuses: Dilsukhnagar Main Rd & Kukatpally Housing Board (KPHB), Hyderabad</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Office Hours: 8:00 AM – 7:30 PM (Open all 7 days)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Admissions Helpline: +91 81215 07323</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Enquiry Received!</h4>
                <p className="text-xs text-slate-500 mb-6">WhatsApp has opened. Our senior counselor will share the scholarship syllabus & demo schedule immediately.</p>
                <button onClick={() => setSubmitted(false)} className="px-5 py-2 text-xs bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200">
                  Register Another Student
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquiry} className="space-y-4">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Admission Counseling Form</h4>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Student Full Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Varun Teja"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Parent's WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="10-digit number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Current Class</label>
                    <select
                      value={form.studentClass}
                      onChange={(e) => setForm({ ...form, studentClass: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-teal-500"
                    >
                      <option>Class 9 & 10 Foundation</option>
                      <option>Class 11</option>
                      <option>Class 12</option>
                      <option>Long Term (Dropper)</option>
                      <option>College / Working Pro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Course Desired</label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-teal-500"
                  >
                    {courses.map((c) => (
                      <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-sm transition shadow mt-2"
                >
                  Book Counseling on WhatsApp 🎓
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <p className="mb-2">BrightMind Academy & Coaching • Hyderabad Campuses • Demo Project by PIXORA DIGITAL</p>
        <Link to="/" className="text-teal-700 hover:underline">Want a website built for your educational institute or school? Contact PIXORA DIGITAL →</Link>
      </footer>
    </div>
  )
}
