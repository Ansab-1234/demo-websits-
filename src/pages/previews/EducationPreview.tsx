import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  GraduationCap,
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Users,
  Award,
  Sparkles,
  FileText
} from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../../lib/constants'

interface Course {
  name: string
  target: string
  duration: string
  batchRatio: string
  weeklyHours: string
  fee: string
  desc: string
  isFlagship?: boolean
}

const courses: Course[] = [
  {
    name: '2-Year Integrated JEE Advanced Program',
    target: 'Class 11th & 12th Moving Students',
    duration: '2 Academic Years (2026–2028)',
    batchRatio: 'Strict 1:30 Max Batch Ratio',
    weeklyHours: '24 Hours Classroom + 12 Hours Supervised Study',
    fee: '₹1,25,000 / Year',
    desc: 'Comprehensive syllabus coverage of Physics, Chemistry & Math with weekly computer-based test (CBT) benchmarking against national percentiles.',
    isFlagship: true,
  },
  {
    name: '2-Year Integrated NEET Medical Excellence',
    target: 'Class 11th & 12th Medical Aspirants',
    duration: '2 Academic Years (2026–2028)',
    batchRatio: 'Strict 1:30 Max Batch Ratio',
    weeklyHours: '26 Hours Classroom + NCERT Line-by-Line Drills',
    fee: '₹1,20,000 / Year',
    desc: 'Specialized focus on 360/360 in Biology, conceptual organic reaction mechanisms, and speed-accuracy time management drills.',
    isFlagship: true,
  },
  {
    name: '1-Year Repeater / Dropper Rank Accelerator',
    target: '12th Pass Students Seeking Top 500 Ranks',
    duration: '1 Academic Year Intensive (July – May)',
    batchRatio: '1:25 Dedicated Batch Ratio',
    weeklyHours: '36 Hours Intensive Class + Daily Doubt Clinic',
    fee: '₹95,000 Total',
    desc: 'Rapid revision modules, 10,000+ curated problem sets, and daily 3-hour proctored testing designed for high-scoring repeaters.',
  },
]

const faculty = [
  {
    name: 'Prof. K. Venkateshwar Rao',
    subject: 'Senior Physics Faculty & Mentor',
    credentials: 'B.Tech (IIT Madras), 16+ Years JEE Advanced Classroom Tenure',
    trackRecord: 'Mentored AIR 42, AIR 118, and 400+ IITians',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=700&fit=crop',
  },
  {
    name: 'Dr. Meenakshi Sundaram',
    subject: 'Head of Zoology & Human Physiology',
    credentials: 'MBBS, MD (Gold Medalist), Ex-AIIMS Faculty Associate',
    trackRecord: 'Guided 85+ students scoring 350+ marks in NEET Biology',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop',
  },
]

export default function EducationPreview() {
  const [demoReg, setDemoReg] = useState({
    studentName: '',
    parentPhone: '',
    targetStream: '2-Year Integrated JEE Advanced (Class 11)',
    currentClass: 'Class 10th (Moving to 11th)',
    campus: 'Madhapur Campus (Near Metro)',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!demoReg.studentName || !demoReg.parentPhone) return
    const msg = `Hello Ascent Academy!
I would like to register for a Free 2-Day Classroom Demo Class & Diagnostic Test:
• Student Name: ${demoReg.studentName}
• Parent WhatsApp: ${demoReg.parentPhone}
• Target Stream: ${demoReg.targetStream}
• Current Standard: ${demoReg.currentClass}
• Preferred Campus: ${demoReg.campus}
Please confirm seat reservation and send syllabus diagnostic test paper!`

    window.open(getWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F1E36] font-sans selection:bg-[#0F1E36] selection:text-white">
      {/* Top Agency Demo Navigation Bar */}
      <div className="bg-[#0B1528] text-[#8C9BB4] px-4 py-2 text-xs flex items-center justify-between border-b border-[#18263E]">
        <Link to="/our-work" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PIXORA Showcase</span>
        </Link>
        <span className="hidden sm:inline font-mono tracking-widest uppercase text-[10px] text-[#F59E0B]">
          Industry Showcase: Academic Coaching Academy & Entrance Institute
        </span>
        <a
          href={getWhatsAppUrl("Hello PIXORA DIGITAL! I explored your Ascent Academy Education demo. I'd like to build an educational institute website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F59E0B] hover:underline font-semibold"
        >
          Build Website for My Institute →
        </a>
      </div>

      {/* Campus Info Strip */}
      <div className="border-b border-[#E2E8F0] bg-white px-4 py-2.5 text-xs text-[#52637D]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0F1E36]" />
              Campuses: Madhapur (Hitec City) & Dilsukhnagar, Hyderabad
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#0F1E36]" />
              Classroom Batches Capped at Maximum 30 Students
            </span>
          </div>
          <span className="font-semibold text-[#0F1E36] flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
            Admissions Cell: {PHONE_DISPLAY}
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F1E36] text-white flex items-center justify-center font-bold text-lg shadow-md">
              <GraduationCap className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-[#0F1E36]">
                ASCENT ACADEMY
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#52637D] font-semibold">
                IIT-JEE, NEET & Olympiad Sciences • Hyderabad
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#52637D]">
            <a href="#courses" className="hover:text-[#0F1E36] transition-colors">Courses & Schedules</a>
            <a href="#faculty" className="hover:text-[#0F1E36] transition-colors">IIT Faculty</a>
            <a href="#pedagogy" className="hover:text-[#0F1E36] transition-colors">Doubt Clearing Model</a>
            <a href="#demo" className="hover:text-[#0F1E36] transition-colors">Free Demo Class</a>
          </nav>

          <a
            href="#demo"
            className="px-5 py-2.5 rounded-full bg-[#0F1E36] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#F59E0B] hover:text-black transition-colors shadow-md"
          >
            Claim 2-Day Demo Pass
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
              <Award className="w-4 h-4 text-[#F59E0B]" />
              Admissions Open for Academic Year 2026–2027 • Limited 30 Seats/Batch
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0F1E36] leading-[1.08]">
              PROVEN PEDAGOGY. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F1E36] via-[#1A3660] to-[#F59E0B]">
                SMALL-BATCH MENTORSHIP.
              </span> <br />
              TOP-TIER RANKS.
            </h1>

            <p className="text-base sm:text-lg text-[#52637D] leading-relaxed max-w-xl font-normal">
              Hyderabad’s premier academic institute where students don't get lost in crowded 200-seat lecture halls. Learn directly from IIT Madras and AIIMS faculty in intimate batches capped at 30.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#demo"
                className="px-8 py-4 rounded-full bg-[#0F1E36] hover:bg-[#F59E0B] hover:text-black text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-blue-950/20"
              >
                Book Free 2-Day Demo Seat
              </a>
              <a
                href="#courses"
                className="px-8 py-4 rounded-full border border-[#CBD5E1] bg-white text-[#0F1E36] text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-xs"
              >
                View Batch Timetables
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E2E8F0] max-w-lg">
              <div>
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#0F1E36] block">1:30</span>
                <span className="text-xs text-[#52637D]">Max Student Ratio</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#0F1E36] block">16+ Yrs</span>
                <span className="text-xs text-[#52637D]">Faculty Seniority</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#0F1E36] block">Daily</span>
                <span className="text-xs text-[#52637D]">1-on-1 Doubt Clinic</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-white group">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=700&fit=crop"
                alt="Focused Classroom Environment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300">Classroom Culture</span>
                <h3 className="text-xl font-bold">Concept Rigor & Speed Accuracy</h3>
                <p className="text-xs text-slate-200 mt-1">Daily Practice Problems (DPP) solved under live supervision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Schedule & Fee Matrix */}
      <section id="courses" className="py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#F59E0B] font-bold block mb-2">
              Academic Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F1E36]">
              Targeted Preparation Batches
            </h2>
            <p className="text-sm text-[#52637D] mt-3">
              Every course includes complete printed study modules, online computer-based test portal access, and weekly parent progress reports.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {courses.map((course) => (
              <div
                key={course.name}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  course.isFlagship
                    ? 'bg-[#0B1528] text-white shadow-2xl relative border-2 border-[#F59E0B]'
                    : 'bg-[#F8FAFC] text-[#0F1E36] border border-[#E2E8F0]'
                }`}
              >
                {course.isFlagship && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#F59E0B] text-black text-xs font-mono font-bold uppercase tracking-wider">
                    Flagship Program
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                  <p className={`text-xs mb-4 font-mono ${course.isFlagship ? 'text-amber-300' : 'text-[#F59E0B]'}`}>
                    {course.target}
                  </p>

                  <div className="my-4 py-4 border-y border-white/10 space-y-1.5 text-xs">
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Batch Ratio:</strong> {course.batchRatio}</p>
                    <p><strong>Workload:</strong> {course.weeklyHours}</p>
                    <p><strong>Academic Fee:</strong> <span className="font-mono font-bold text-base">{course.fee}</span></p>
                  </div>

                  <p className={`text-xs leading-relaxed ${course.isFlagship ? 'text-slate-300' : 'text-[#52637D]'}`}>
                    {course.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <a
                    href={getWhatsAppUrl(`Hello Ascent Academy! I am interested in enrolling my child in "${course.name}" (${course.fee}). Please share syllabus brochure and scholarship test dates.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      course.isFlagship
                        ? 'bg-[#F59E0B] text-black hover:bg-amber-400 shadow-md'
                        : 'bg-[#0F1E36] text-white hover:bg-[#F59E0B] hover:text-black'
                    }`}
                  >
                    <span>Request Course Syllabus</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Credentials */}
      <section id="faculty" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#F59E0B] font-bold block mb-2">
            Master Educators
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F1E36]">
            Learn from Senior IIT & AIIMS Alumni
          </h2>
          <p className="text-sm text-[#52637D] mt-3">
            Our permanent faculty members teach every single lecture themselves. No junior assistants or substituted online recordings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faculty.map((f) => (
            <div key={f.name} className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
              <div className="w-full sm:w-48 h-56 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0F1E36]">{f.name}</h3>
                  <p className="text-xs font-bold text-[#F59E0B] mt-0.5">{f.subject}</p>
                  <p className="text-xs text-[#52637D] mt-2 font-mono">{f.credentials}</p>
                  <p className="text-xs text-[#334155] mt-3 leading-relaxed">
                    <strong>Proven Track Record:</strong> {f.trackRecord}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2E8F0] mt-4">
                  <a
                    href={getWhatsAppUrl(`Hello Ascent Academy! I'd like to book a direct academic counseling session with ${f.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F1E36] hover:text-[#F59E0B]"
                  >
                    <span>Consult with Faculty</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free 2-Day Demo Class Registration Suite */}
      <section id="demo" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1528] rounded-3xl p-8 sm:p-12 text-white border border-white/10 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F59E0B] font-bold block mb-2">
              Experience the Classroom
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Register for Free 2-Day Demo Class
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Attend two live classroom lectures with our senior IIT faculty and take our complimentary diagnostic aptitude test before deciding.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#F59E0B] mx-auto" />
              <h3 className="text-2xl font-bold">Demo Seat Request Formatted!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Your demo pass request has been sent to WhatsApp. Our admissions coordinator will verify your student ID and send class timings.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white/10"
              >
                Register Another Student
              </button>
            </div>
          ) : (
            <form onSubmit={handleDemoSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-slate-300 mb-2">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sai Teja Sharma"
                    value={demoReg.studentName}
                    onChange={(e) => setDemoReg({ ...demoReg, studentName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#142340] border border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-slate-300 mb-2">
                    Parent WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={demoReg.parentPhone}
                    onChange={(e) => setDemoReg({ ...demoReg, parentPhone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#142340] border border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-slate-300 mb-2">
                    Target Academic Stream
                  </label>
                  <select
                    value={demoReg.targetStream}
                    onChange={(e) => setDemoReg({ ...demoReg, targetStream: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#142340] border border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    <option>2-Year Integrated JEE Advanced (Class 11)</option>
                    <option>2-Year Integrated NEET Medical (Class 11)</option>
                    <option>1-Year Repeater/Dropper Batch</option>
                    <option>Foundation Olympiads (Class 8th to 10th)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-slate-300 mb-2">
                    Preferred Campus
                  </label>
                  <select
                    value={demoReg.campus}
                    onChange={(e) => setDemoReg({ ...demoReg, campus: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#142340] border border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    <option>Madhapur Campus (Near Metro Station)</option>
                    <option>Dilsukhnagar Campus (Main Road)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#F59E0B] hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-lg"
              >
                Confirm Demo Seat on WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060D1A] text-[#71829D] py-12 border-t border-[#18263E] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Ascent Academy of Sciences. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#8C9BB4]">Sample Business Website Concept engineered by PIXORA DIGITAL</p>
        </div>
      </footer>
    </div>
  )
}
