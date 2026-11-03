import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Star, Zap, Globe, Shield, ChevronDown } from 'lucide-react'
import { getWhatsAppUrl, WA_MESSAGES, INDUSTRIES, PHONE_NUMBER, PHONE_DISPLAY } from '../lib/constants'

// ─── Hero Section ───────────────────────────────────────────────────────────

function HeroSection() {
  const [currentStyle, setCurrentStyle] = useState(0)
  const styles = ['Salon', 'Restaurant', 'Clothing Store', 'Dental Clinic', 'Gym', 'Real Estate']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyle((prev) => (prev + 1) % styles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Hyderabad's Premium Web Development Team
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Your Business.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Your Website.
              </span>{' '}
              Your Digital Identity.
            </h1>

            <p className="text-lg text-slate-400 mb-6 max-w-lg leading-relaxed">
              We create stunning, fast, mobile-friendly websites that help businesses showcase their products, attract customers and grow online.
            </p>

            {/* Animated industry switcher */}
            <div className="flex items-center gap-3 mb-10">
              <span className="text-slate-500 text-sm">Built for:</span>
              <div className="px-3 py-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold min-w-[140px] transition-all duration-500">
                {styles[currentStyle]}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl(WA_MESSAGES.getMyWebsite)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-200 hover:-translate-y-1 text-lg"
              >
                Build My Website
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/industries"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl transition-all duration-200 hover:-translate-y-1 text-lg"
              >
                Explore Live Demo
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>18+ Industry Types</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Mobile-First Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>WhatsApp Integration</span>
              </div>
            </div>
          </div>

          {/* Right: Website mockup showcase */}
          <div className="relative hidden lg:block">
            {/* Desktop browser mockup */}
            <div className="relative z-10 bg-slate-800 rounded-2xl shadow-2xl shadow-slate-900/80 border border-slate-700 overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-900 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 mx-4 h-6 rounded bg-slate-700 flex items-center px-3">
                  <span className="text-slate-400 text-xs">pixoradigital.in/your-business</span>
                </div>
              </div>
              {/* Mock website content */}
              <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-6 h-64">
                <div className="h-4 w-1/3 bg-white/20 rounded mb-4" />
                <div className="h-8 w-2/3 bg-white/30 rounded mb-3" />
                <div className="h-3 w-3/4 bg-white/15 rounded mb-2" />
                <div className="h-3 w-1/2 bg-white/15 rounded mb-6" />
                <div className="flex gap-3">
                  <div className="h-9 w-28 bg-indigo-500/60 rounded-xl" />
                  <div className="h-9 w-28 bg-white/10 rounded-xl border border-white/20" />
                </div>
              </div>
            </div>

            {/* Mobile mockup */}
            <div className="absolute -right-4 -bottom-8 z-20 w-36 bg-slate-800 rounded-2xl shadow-2xl shadow-slate-900/80 border border-slate-700 overflow-hidden">
              <div className="flex items-center justify-center py-2 bg-slate-900 border-b border-slate-700">
                <div className="w-10 h-1.5 bg-slate-700 rounded-full" />
              </div>
              <div className="bg-gradient-to-b from-purple-900 to-slate-900 p-3 h-48">
                <div className="h-3 w-2/3 bg-white/20 rounded mb-3" />
                <div className="h-5 w-full bg-white/25 rounded mb-2" />
                <div className="h-2 w-full bg-white/10 rounded mb-1" />
                <div className="h-2 w-3/4 bg-white/10 rounded mb-4" />
                <div className="h-7 w-full bg-indigo-500/60 rounded-lg" />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-8 top-1/4 bg-white dark:bg-slate-800 rounded-xl shadow-xl px-3 py-2 border border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-green-600" />
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Mobile Ready</span>
            </div>
            <div className="absolute -left-4 bottom-1/3 bg-white dark:bg-slate-800 rounded-xl shadow-xl px-3 py-2 border border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Premium Design</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

// ─── Industry Cards Section ──────────────────────────────────────────────────

function IndustriesSection() {
  const featured = INDUSTRIES.slice(0, 6)

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
            <Globe className="w-4 h-4" />
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
            One Team. Websites for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Every Industry.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            From salons to showrooms, gyms to galleries — we build custom websites tailored to your exact business type and brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((industry) => (
            <Link
              key={industry.id}
              to={industry.previewUrl}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-50 group-hover:opacity-60 transition-opacity`} />
                <div className="absolute top-4 left-4 text-3xl">{industry.icon}</div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-semibold">
                  View Demo
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            View All 18 Industries
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Customize Section ───────────────────────────────────────────────────────

function CustomizeSection() {
  const [form, setForm] = useState({
    businessName: '',
    category: '',
    services: '',
    city: '',
    phone: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    'Salon & Beauty', 'Restaurant & Cafe', 'Clothing Store', 'Furniture Store',
    'Dental Clinic', 'Gym & Fitness', 'Real Estate', 'Automobile',
    'Photography', 'Education & Coaching', 'Electronics', 'Travel & Hotels',
    'Bakery', 'Pet Clinic', 'Home Services', 'Other',
  ]

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.businessName.trim()) newErrors.businessName = 'Business name is required'
    if (!form.category) newErrors.category = 'Please select a category'
    if (!form.services.trim()) newErrors.services = 'Please describe your services'
    if (!form.city.trim()) newErrors.city = 'City is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) newErrors.phone = 'Enter a valid 10-digit number'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const message = `Hello PIXORA DIGITAL! I'm interested in getting a website built for my business.\n\n*Business Details:*\n• Business Name: ${form.businessName}\n• Category: ${form.category}\n• Services/Products: ${form.services}\n• City: ${form.city}\n• Phone: ${form.phone}\n\nPlease share the details and pricing for my custom website.`
    const url = getWhatsAppUrl(message)
    window.open(url, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">WhatsApp Opened!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Your enquiry details have been prepared. Please send the message on WhatsApp to connect with our team. We'll get back to you shortly.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ businessName: '', category: '', services: '', city: '', phone: '' }) }}
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="customize" className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6">
              ✨ Customize Your Website
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6">
              Imagine Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Business Here.
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Fill in your business details and we'll create a custom website proposal tailored specifically for you. No generic templates — just a website that truly represents your business.
            </p>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              {[
                'Custom design matching your brand',
                'Content tailored to your services',
                'Mobile-first and SEO-ready',
                'WhatsApp and phone integration',
                'Fast delivery and easy updates',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Request My Custom Website</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Business Name *
                </label>
                <input
                  type="text"
                  value={form.businessName}
                  onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                  placeholder="e.g. Glamour Salon, Spice Garden..."
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border ${errors.businessName ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'} text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                />
                {errors.businessName && <p className="mt-1 text-xs text-red-500">{errors.businessName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Business Category *
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border ${errors.category ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'} text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                >
                  <option value="">Select your industry...</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Services / Products *
                </label>
                <textarea
                  value={form.services}
                  onChange={(e) => setForm({ ...form, services: e.target.value })}
                  placeholder="Describe what you offer..."
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border ${errors.services ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'} text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none`}
                />
                {errors.services && <p className="mt-1 text-xs text-red-500">{errors.services}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    City *
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="e.g. Hyderabad"
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border ${errors.city ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'} text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  />
                  {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="10-digit number"
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border ${errors.phone ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'} text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Request My Custom Website
              </button>
              <p className="text-xs text-slate-500 text-center">
                This will open WhatsApp with your details pre-filled. No automatic website is generated — our team will review your enquiry and contact you.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Features Highlight ──────────────────────────────────────────────────────

function FeaturesHighlight() {
  const features = [
    { icon: '📱', title: 'Mobile-First', desc: 'Looks perfect on every screen' },
    { icon: '⚡', title: 'Fast Loading', desc: 'Optimized for speed' },
    { icon: '💬', title: 'WhatsApp', desc: 'Direct customer contact' },
    { icon: '🔍', title: 'SEO Ready', desc: 'Found on Google' },
    { icon: '🌙', title: 'Dark Mode', desc: 'Modern viewing experience' },
    { icon: '🗺️', title: 'Google Maps', desc: 'Easy to find you' },
  ]

  return (
    <section className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Every Website Includes
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Professional features built into every website we deliver.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center hover:border-indigo-500/40 hover:bg-slate-800 transition-all duration-200 group"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <p className="text-white font-semibold text-sm mb-1 group-hover:text-indigo-400 transition-colors">{f.title}</p>
              <p className="text-slate-500 text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            See all features <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Our Work Preview ─────────────────────────────────────────────────────────

function OurWorkPreview() {
  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
            See Our Work
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Real projects we've built for businesses like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Salon Project Card */}
          <div className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-56 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="h-2 bg-white/30 rounded mb-2 w-3/4" />
                  <div className="h-4 bg-white/40 rounded mb-2" />
                  <div className="h-2 bg-white/20 rounded w-2/3" />
                </div>
              </div>
              <div className="absolute top-4 left-4 text-xs font-semibold px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30">
                Live Demo
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">Salon</span>
                <span className="text-xs text-slate-500">Demo Project</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Salon Website Demo</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                A complete salon website with services, gallery, team profiles, appointment booking and WhatsApp integration.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://salon-2-five.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  View Live Demo ↗
                </a>
                <Link
                  to="/preview/salon"
                  className="flex-1 text-center py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Preview Here
                </Link>
              </div>
            </div>
          </div>

          {/* General preview card */}
          <div className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-56 bg-gradient-to-br from-indigo-600 to-cyan-600 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center gap-3">
                {INDUSTRIES.slice(0, 3).map((ind) => (
                  <div key={ind.id} className="w-20 bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center">
                    <div className="text-2xl mb-1">{ind.icon}</div>
                    <div className="h-1.5 bg-white/30 rounded w-full" />
                  </div>
                ))}
              </div>
              <div className="absolute top-4 left-4 text-xs font-semibold px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30">
                18+ Industries
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">Demo</span>
                <span className="text-xs text-slate-500">Multiple Industries</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Industry Preview Collection</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Explore 10+ live industry previews — restaurants, gyms, clothing stores, dental clinics and more.
              </p>
              <Link
                to="/industries"
                className="block text-center py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
              >
                Explore All Industries
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
          >
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Pricing Preview ──────────────────────────────────────────────────────────

function PricingPreview() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
          Starting from ₹5,000 — no hidden charges, no surprises.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {[
            { name: 'Starter', price: '₹5,000', desc: 'Perfect for starting out', featured: false },
            { name: 'Professional', price: '₹9,000', desc: 'For growing businesses', featured: true },
            { name: 'Premium', price: '₹15,000', desc: 'Complete digital presence', featured: false },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-2xl ${plan.featured ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/30' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}
            >
              <p className={`text-sm font-semibold mb-2 ${plan.featured ? 'text-indigo-200' : 'text-slate-500 dark:text-slate-400'}`}>{plan.name}</p>
              <p className={`text-3xl font-black mb-1 ${plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{plan.price}</p>
              <p className={`text-xs mb-1 ${plan.featured ? 'text-indigo-200' : 'text-slate-400'}`}>onwards</p>
              <p className={`text-sm ${plan.featured ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'}`}>{plan.desc}</p>
            </div>
          ))}
        </div>
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5"
        >
          See Full Pricing Details <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}

// ─── CTA Section ─────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
          Ready to Build Your Website?
        </h2>
        <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
          One Business. One Powerful Digital Experience. Let's create something amazing for your business today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={getWhatsAppUrl(WA_MESSAGES.freeConsultation)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 text-lg"
          >
            Request a Free Consultation
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-200 text-lg"
          >
            Call Us: {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Main HomePage Export ─────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <FeaturesHighlight />
      <CustomizeSection />
      <OurWorkPreview />
      <PricingPreview />
      <CTASection />
    </>
  )
}
