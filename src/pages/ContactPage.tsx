import { useState } from 'react'
import {
  Check,
  MapPin,
  Phone,
  MessageSquare,
  ShieldCheck,
  Send,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight
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

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    tradeCategory: 'Luxury Salon & Spa',
    budget: 'Growth (₹9,000 onwards)',
    message: '',
    contactLine: 'line1',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Please provide your name'
    if (!form.business.trim()) e.business = 'Business name is required'
    if (!form.phone.trim() || form.phone.length < 10) e.phone = 'Valid 10-digit phone number is required'
    if (!form.message.trim()) e.message = 'Please provide brief project details'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const targetNumber = form.contactLine === 'line2' ? WHATSAPP_NUMBER_2 : WHATSAPP_NUMBER_1

    const msg = `Hello PIXORA DIGITAL!

*Direct Project Inquiry:*
• Client Name: ${form.name}
• Business Name: ${form.business}
• Phone: ${form.phone}
• Trade Category: ${form.tradeCategory}
• Selected Budget Scope: ${form.budget}

*Project Vision & Goals:*
${form.message}

Please confirm availability and share next steps!`

    window.open(getWhatsAppUrl(msg, targetNumber), '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#10110F] text-[#141512] dark:text-[#F5F0E7] transition-colors selection:bg-[#C6A46A] selection:text-[#10110F] pt-36 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6]/80 dark:bg-[#191A17] text-[#8E6D3E] dark:text-[#C6A46A] text-xs font-mono font-bold uppercase tracking-widest mb-6 border border-black/5 dark:border-white/10">
            <MessageSquare className="w-3.5 h-3.5 text-[#C6A46A]" />
            Direct Studio Connections
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.06] mb-6 text-[#141512] dark:text-[#F5F0E7]">
            Let's Talk About{' '}
            <span className="font-serif-display italic font-normal text-[#C6A46A]">
              Your Next Website.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5A564F] dark:text-[#A8A49B] leading-relaxed font-light">
            Ready to upgrade your business website? Reach our Hyderabad engineering team directly. We are accessible via two direct phone lines and priority WhatsApp channels.
          </p>
        </div>
      </section>

      {/* Main Grid: Dual Contact Cards + Interactive Inquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Phone & Studio Details */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#141512] dark:text-[#F5F0E7] tracking-tight">
              Two Dedicated Lines
            </h2>
            <p className="text-sm text-[#5A564F] dark:text-[#A8A49B] font-light leading-relaxed">
              Call us directly for immediate project scoping, or initiate a chat on WhatsApp with formatted details.
            </p>

            {/* Contact Line 1 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C6A46A] block">
                    Contact Line 1
                  </span>
                  <span className="text-lg font-bold text-[#141512] dark:text-[#F5F0E7]">
                    {PHONE_DISPLAY_1}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Online
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${PHONE_NUMBER_1}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] hover:bg-[#EFECE6] text-[#141512] dark:text-[#F5F0E7] text-xs font-bold transition-colors border border-black/5 dark:border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A46A]" />
                  <span>Call Line 1</span>
                </a>
                <a
                  href={getWhatsAppUrl(WA_MESSAGES.default, WHATSAPP_NUMBER_1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp 1</span>
                </a>
              </div>
            </div>

            {/* Contact Line 2 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C6A46A] block">
                    Contact Line 2
                  </span>
                  <span className="text-lg font-bold text-[#141512] dark:text-[#F5F0E7]">
                    {PHONE_DISPLAY_2}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Online
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${PHONE_NUMBER_2}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] hover:bg-[#EFECE6] text-[#141512] dark:text-[#F5F0E7] text-xs font-bold transition-colors border border-black/5 dark:border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A46A]" />
                  <span>Call Line 2</span>
                </a>
                <a
                  href={getWhatsAppUrl(WA_MESSAGES.default, WHATSAPP_NUMBER_2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp 2</span>
                </a>
              </div>
            </div>

            {/* Studio Location Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C6A46A]/15 text-[#C6A46A] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8F8B82] block">
                    Studio Location
                  </span>
                  <p className="text-base font-bold text-[#141512] dark:text-[#F5F0E7]">{CITY}</p>
                  <p className="text-xs text-[#5A564F] dark:text-[#A8A49B] mt-1 font-light">
                    Serving Banjara Hills, Jubilee Hills, Hitec City, Gachibowli, Kokapet, and pan-India clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Interactive Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#191A17] rounded-3xl p-8 sm:p-10 border border-black/5 dark:border-white/10 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#141512] dark:text-[#F5F0E7]">
                  WhatsApp Inquiry Transferred!
                </h3>
                <p className="text-sm text-[#5A564F] dark:text-[#A8A49B] max-w-md mx-auto font-light">
                  Your project brief has been formatted and transferred to WhatsApp. Tap Send in your WhatsApp chat to connect with our engineering team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-xs font-bold text-[#141512] dark:text-[#F5F0E7] hover:bg-[#F7F5EF] dark:hover:bg-[#121310] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#141512] dark:text-[#F5F0E7] mb-2">
                    Send a Project Brief
                  </h3>
                  <p className="text-xs text-[#5A564F] dark:text-[#A8A49B] font-light">
                    Fill in your project requirements and receive a structured scope breakdown.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Reddy"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] border ${
                        errors.name ? 'border-red-500' : 'border-black/5 dark:border-white/10'
                      } text-[#141512] dark:text-[#F5F0E7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A46A]`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                      Business or Brand Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Saffron Bistro"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] border ${
                        errors.business ? 'border-red-500' : 'border-black/5 dark:border-white/10'
                      } text-[#141512] dark:text-[#F5F0E7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A46A]`}
                    />
                    {errors.business && <p className="text-red-500 text-xs mt-1">{errors.business}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] border ${
                        errors.phone ? 'border-red-500' : 'border-black/5 dark:border-white/10'
                      } text-[#141512] dark:text-[#F5F0E7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A46A]`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                      Trade / Business Category *
                    </label>
                    <select
                      value={form.tradeCategory}
                      onChange={(e) => setForm({ ...form, tradeCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] border border-black/5 dark:border-white/10 text-[#141512] dark:text-[#F5F0E7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A46A]"
                    >
                      <option>Luxury Salon & Spa</option>
                      <option>Heritage Restaurant & Dining</option>
                      <option>Designer Fashion Boutique</option>
                      <option>Architectural Furniture Showroom</option>
                      <option>Advanced Dental & Healthcare</option>
                      <option>High-Performance Athletic Gym</option>
                      <option>Luxury Real Estate & Villas</option>
                      <option>Supercar Detailing & PPF Studio</option>
                      <option>Cinematic Wedding Photography</option>
                      <option>Premier Coaching & Test Prep</option>
                      <option>Other Trade (Custom Website)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                    Send Inquiry To Line:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, contactLine: 'line1' })}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all text-left ${
                        form.contactLine === 'line1'
                          ? 'border-[#C6A46A] bg-[#C6A46A]/10 text-[#141512] dark:text-[#F5F0E7]'
                          : 'border-black/5 dark:border-white/10 bg-[#F7F5EF] dark:bg-[#121310] text-[#8F8B82]'
                      }`}
                    >
                      <span className="block font-mono text-[10px] text-[#C6A46A]">LINE 1</span>
                      <span>{PHONE_DISPLAY_1}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, contactLine: 'line2' })}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all text-left ${
                        form.contactLine === 'line2'
                          ? 'border-[#C6A46A] bg-[#C6A46A]/10 text-[#141512] dark:text-[#F5F0E7]'
                          : 'border-black/5 dark:border-white/10 bg-[#F7F5EF] dark:bg-[#121310] text-[#8F8B82]'
                      }`}
                    >
                      <span className="block font-mono text-[10px] text-[#C6A46A]">LINE 2</span>
                      <span>{PHONE_DISPLAY_2}</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B82] mb-2">
                    Project Vision & Goals *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe what your business offers, key features needed (online menu, booking slots, lookbook, doctor credentials), and your target launch date..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#F7F5EF] dark:bg-[#121310] border ${
                      errors.message ? 'border-red-500' : 'border-black/5 dark:border-white/10'
                    } text-[#141512] dark:text-[#F5F0E7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A46A] resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#C6A46A]/20 transition-all hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-[#8F8B82]">
                  🔒 Your communication is direct with our engineers. Zero spam or third-party sharing.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
