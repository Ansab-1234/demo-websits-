import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  Activity,
  Award,
  AlertCircle
} from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../../lib/constants'

interface Treatment {
  name: string
  category: string
  fee: string
  sessions: string
  warranty: string
  desc: string
  isPopular?: boolean
}

const treatments: Treatment[] = [
  {
    name: 'Swiss Straumann Dental Implants',
    category: 'Implantology',
    fee: '₹28,000 – ₹45,000',
    sessions: 'Single-Sitting Placement',
    warranty: 'Lifetime Global Warranty',
    desc: 'Grade-4 titanium & zirconia immediate-load implants guided by high-precision 3D CBCT digital tomographic navigation.',
    isPopular: true,
  },
  {
    name: 'Invisalign® Clear Orthodontic Aligners',
    category: 'Orthodontics',
    fee: '₹65,000 – ₹1,80,000',
    sessions: 'Custom Series of Trays',
    warranty: '5-Year Alignment Guarantee',
    desc: 'Nearly invisible, removable teeth straightening without metal brackets or dietary restrictions. 3D digital outcome simulation.',
    isPopular: true,
  },
  {
    name: 'Microscopic Single-Visit Root Canal',
    category: 'Endodontics',
    fee: '₹4,500 – ₹7,500',
    sessions: '1 Visit (60 Mins)',
    warranty: 'Standard Treatment Guarantee',
    desc: 'Completed under Zeiss surgical operating microscopes with rotary titanium files and bioceramic thermal obturation.',
  },
  {
    name: 'German E.max® Ceramic Smile Veneers',
    category: 'Cosmetic Dentistry',
    fee: '₹12,000 / Tooth',
    sessions: '2 Visits',
    warranty: '10-Year Fracture Warranty',
    desc: 'Ultra-thin lithium disilicate porcelain veneers custom-layered for natural tooth enamel translucency and Hollywood alignment.',
  },
  {
    name: 'Zoom 4® In-Office Laser Teeth Whitening',
    category: 'Cosmetic Dentistry',
    fee: '₹9,500',
    sessions: '45 Minutes',
    warranty: 'Up to 8 Shades Lighter',
    desc: 'Cold LED light-activated hydrogen peroxide gel with built-in ACP enamel desensitizer for zero post-procedure sensitivity.',
  },
  {
    name: 'Digital Pediatric Fluoride & Pit Sealants',
    category: 'Pediatric Care',
    fee: '₹1,500 – ₹3,000',
    sessions: '30 Minutes',
    warranty: 'Cavity Prevention Protocol',
    desc: 'Gentle, anxiety-free dental screenings for children using laughing gas (Nitrous Oxide) analgesia where needed.',
  },
]

const doctors = [
  {
    name: 'Dr. Aditya Varma, MDS',
    role: 'Chief Implantologist & Oral Surgeon',
    credentials: 'BDS, MDS (Prosthodontics), Fellow ICOI (USA)',
    experience: '14+ Years Clinical Experience • Over 3,500 Implants Placed',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=700&fit=crop',
  },
  {
    name: 'Dr. Shalini Reddy, MDS',
    role: 'Lead Orthodontist & Dentofacial Orthopedics',
    credentials: 'BDS, MDS (AIIMS New Delhi), Certified Invisalign Diamond Provider',
    experience: '11+ Years Experience • 1,200+ Clear Aligner Cases',
    image: 'https://images.unsplash.com/photo-1594824813512-32a220bd6219?w=600&h=700&fit=crop',
  },
]

export default function DentalPreview() {
  const [selectedCategory, setSelectedCategory] = useState('All Procedures')
  const [appointment, setAppointment] = useState({
    name: '',
    phone: '',
    concern: 'Dental Implants Consultation',
    preferredDoctor: 'Dr. Aditya Varma, MDS',
    date: '',
    time: '11:00 AM',
  })
  const [submitted, setSubmitted] = useState(false)

  const filteredTreatments = selectedCategory === 'All Procedures'
    ? treatments
    : treatments.filter((t) => t.category === selectedCategory)

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (!appointment.name || !appointment.phone || !appointment.date) return
    const msg = `Hello Aura Dental Institute!
I would like to book a dental consultation appointment:
• Patient Name: ${appointment.name}
• Contact: ${appointment.phone}
• Dental Concern: ${appointment.concern}
• Preferred Doctor: ${appointment.preferredDoctor}
• Date & Time: ${appointment.date} at ${appointment.time}
Please confirm consultation availability!`

    window.open(getWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#0284C7] selection:text-white">
      {/* Top Agency Demo Navigation Bar */}
      <div className="bg-[#0F172A] text-[#94A3B8] px-4 py-2 text-xs flex items-center justify-between border-b border-[#1E293B]">
        <Link to="/our-work" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PIXORA Showcase</span>
        </Link>
        <span className="hidden sm:inline font-mono tracking-widest uppercase text-[10px] text-[#38BDF8]">
          Industry Showcase: Multispeciality Dental Surgery & Implant Center
        </span>
        <a
          href={getWhatsAppUrl("Hello PIXORA DIGITAL! I explored your Aura Dental Clinic demo. I'd like to build a clean medical website for my dental clinic.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#38BDF8] hover:underline font-semibold"
        >
          Build Website for My Clinic →
        </a>
      </div>

      {/* Emergency & Clinic Timings Strip */}
      <div className="border-b border-[#E2E8F0] bg-white px-4 py-2.5 text-xs text-[#64748B]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
              Opp. Mindspace IT Park, Hitec City, Hyderabad
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
              Mon – Sat: 9:00 AM – 8:30 PM | Sundays: 10:00 AM – 2:00 PM
            </span>
          </div>
          <span className="font-semibold text-[#0F172A] flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
            24/7 Dental Emergency Helpline: {PHONE_DISPLAY}
          </span>
        </div>
      </div>

      {/* Clinic Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
              <Activity className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-[#0F172A]">
                AURA DENTAL
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#0284C7] font-semibold">
                Multispeciality Clinic & 3D Implant Center
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
            <a href="#procedures" className="hover:text-[#0284C7] transition-colors">Treatments & Fees</a>
            <a href="#doctors" className="hover:text-[#0284C7] transition-colors">Specialist Doctors</a>
            <a href="#technology" className="hover:text-[#0284C7] transition-colors">3D CBCT Technology</a>
            <a href="#book" className="hover:text-[#0284C7] transition-colors">Book Consult</a>
          </nav>

          <a
            href="#book"
            className="px-5 py-2.5 rounded-full bg-[#0284C7] text-white text-xs font-bold tracking-wider uppercase hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20"
          >
            Zero-Wait Appointment
          </a>
        </div>
      </header>

      {/* Hero: Reassuring Healthcare Experience */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800">
              <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
              Hospital-Grade 6-Stage Autoclave Sterilization Protocols
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0F172A] leading-[1.08]">
              Precision digital dentistry. <br />
              <span className="text-[#0284C7]">Zero anxiety.</span> Complete fee transparency.
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl font-normal">
              State-of-the-art dental care in Hitec City. Featuring 3D digital oral scanners, computerized painless local anesthesia, and certified Swiss implant specialists.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#book"
                className="px-8 py-4 rounded-full bg-[#0284C7] hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-sky-600/25"
              >
                Schedule Consultation
              </a>
              <a
                href="#procedures"
                className="px-8 py-4 rounded-full border border-[#CBD5E1] bg-white text-[#0F172A] text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-xs"
              >
                Explore Treatments & Fees
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E2E8F0] max-w-lg">
              <div>
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#0F172A] block">100%</span>
                <span className="text-xs text-[#64748B]">Digital Workflow</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#0F172A] block">3,500+</span>
                <span className="text-xs text-[#64748B]">Implants Placed</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#0F172A] block">Zero</span>
                <span className="text-xs text-[#64748B]">Waiting Policy</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-white group">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&h=700&fit=crop"
                alt="Modern Dental Clinic Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-sky-200">Clinical Hygiene</span>
                <h3 className="text-xl font-bold">Class-B Vacuum Autoclave Certified</h3>
                <p className="text-xs text-slate-200 mt-1">Single-use disposables & sealed surgical instrument pouches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments & Transparent Fee Schedule */}
      <section id="procedures" className="py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#0284C7] font-bold block mb-2">
                Ethical Healthcare
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A]">
                Transparent Fee Schedule
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All Procedures', 'Implantology', 'Orthodontics', 'Endodontics', 'Cosmetic Dentistry'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0284C7] text-white shadow-md'
                      : 'bg-slate-100 text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((t) => (
              <div
                key={t.name}
                className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#E2E8F0] hover:border-[#0284C7] transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7] bg-sky-100 px-2.5 py-1 rounded-full">
                      {t.category}
                    </span>
                    {t.isPopular && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                        Popular Choice
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-2 leading-snug">
                    {t.name}
                  </h3>

                  <div className="my-4 py-3 border-y border-[#E2E8F0] space-y-1 text-xs text-[#475569]">
                    <p><strong>Treatment Fee:</strong> <span className="font-mono font-bold text-[#0284C7] text-sm">{t.fee}</span></p>
                    <p><strong>Duration / Visits:</strong> {t.sessions}</p>
                    <p><strong>Warranty Terms:</strong> {t.warranty}</p>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {t.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2E8F0] mt-6 flex items-center justify-between">
                  <span className="text-[11px] text-[#94A3B8]">0% Interest EMI Available</span>
                  <a
                    href={getWhatsAppUrl(`Hello Aura Dental! I would like to book a consultation for "${t.name}" (${t.fee}). Please share doctor appointment slots.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Doctors Roster */}
      <section id="doctors" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#0284C7] font-bold block mb-2">
            Specialist Faculty
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A]">
            Consult with Senior MDS Specialists
          </h2>
          <p className="text-sm text-[#475569] mt-3">
            We do not rotate general dentists. Complex root canals, implants, and aligners are performed exclusively by certified postgraduate specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((d) => (
            <div key={d.name} className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
              <div className="w-full sm:w-48 h-56 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A]">{d.name}</h3>
                  <p className="text-xs font-bold text-[#0284C7] mt-0.5">{d.role}</p>
                  <p className="text-xs text-[#64748B] mt-2 font-mono">{d.credentials}</p>
                  <p className="text-xs text-[#475569] mt-3 leading-relaxed">{d.experience}</p>
                </div>
                <div className="pt-4 border-t border-[#E2E8F0] mt-4">
                  <a
                    href={getWhatsAppUrl(`Hello Aura Dental! I would like to book a direct consultation with ${d.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:underline"
                  >
                    <span>Book with {d.name.split(',')[0]}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Suite */}
      <section id="book" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#CBD5E1] shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#0284C7] font-bold block mb-2">
              Zero-Wait Booking
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A]">
              Schedule Your Dental Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              We respect your schedule. Confirmed appointments have an average wait time under 10 minutes.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-2xl font-bold">Appointment Request Formatted!</h3>
              <p className="text-xs text-[#475569] max-w-md mx-auto">
                Your appointment details have been dispatched to WhatsApp. Tap send to confirm your slot with our clinic receptionist.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full border border-slate-300 text-xs font-semibold hover:bg-slate-50"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#475569] mb-2">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sravan Kumar"
                    value={appointment.name}
                    onChange={(e) => setAppointment({ ...appointment, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#475569] mb-2">
                    Phone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={appointment.phone}
                    onChange={(e) => setAppointment({ ...appointment, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#475569] mb-2">
                    Primary Dental Concern
                  </label>
                  <select
                    value={appointment.concern}
                    onChange={(e) => setAppointment({ ...appointment, concern: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  >
                    <option>Dental Implants Consultation</option>
                    <option>Invisalign® Aligners Assessment</option>
                    <option>Single-Visit Root Canal Therapy</option>
                    <option>Cosmetic Smile Veneers Consultation</option>
                    <option>Routine Checkup & Digital X-Ray</option>
                    <option>Emergency Tooth Pain Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#475569] mb-2">
                    Preferred Doctor
                  </label>
                  <select
                    value={appointment.preferredDoctor}
                    onChange={(e) => setAppointment({ ...appointment, preferredDoctor: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  >
                    <option>Dr. Aditya Varma, MDS (Implantologist)</option>
                    <option>Dr. Shalini Reddy, MDS (Orthodontist)</option>
                    <option>First Available Senior Specialist</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#475569] mb-2">
                    Appointment Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={appointment.date}
                    onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#475569] mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    value={appointment.time}
                    onChange={(e) => setAppointment({ ...appointment, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  >
                    <option>10:00 AM (Morning)</option>
                    <option>11:30 AM (Midday)</option>
                    <option>02:30 PM (Afternoon)</option>
                    <option>05:00 PM (Evening)</option>
                    <option>07:00 PM (Post-Work Slot)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#0284C7] hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-lg shadow-sky-600/25"
              >
                Confirm Appointment via WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-[#94A3B8] py-12 border-t border-[#1E293B] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Aura Multispeciality Dental Institute. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#64748B]">Sample Business Website Concept engineered by PIXORA DIGITAL</p>
        </div>
      </footer>
    </div>
  )
}
