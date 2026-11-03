import { useState } from 'react'
import { Check, MapPin, Phone, MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY, PHONE_NUMBER } from '../lib/constants'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.business.trim()) e.business = 'Business name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const msg = `Hello PIXORA DIGITAL!\n\n*Contact Enquiry:*\n• Name: ${form.name}\n• Business: ${form.business}\n• Phone: ${form.phone}\n\n*Message:*\n${form.message}`
    window.open(getWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Touch.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Ready to start your website project? Reach out and we'll get back to you quickly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-8">Contact Details</h2>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">WhatsApp</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{PHONE_DISPLAY}</p>
                  <a
                    href={getWhatsAppUrl("Hello! I'd like to discuss a website project with you.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400 hover:underline"
                  >
                    Open WhatsApp Chat →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Phone</p>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <p className="text-slate-500 dark:text-slate-500 text-xs mt-1">Tap to call directly</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Location</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Hyderabad, Telangana, India</p>
                  <p className="text-slate-500 dark:text-slate-500 text-xs mt-1">We work with clients across India</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.0163741271!2d78.24323129999999!3d17.4126517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699990000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hyderabad, Telangana, India"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">WhatsApp Opened!</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Your message details have been prepared. Please send the WhatsApp message to connect with us.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', business: '', phone: '', message: '' }) }}
                  className="px-6 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: 'name', label: 'Your Name *', type: 'text', placeholder: 'Your full name' },
                    { id: 'business', label: 'Business Name *', type: 'text', placeholder: 'Your business name' },
                    { id: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
                      <input
                        type={type}
                        value={form[id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                        placeholder={placeholder}
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border ${errors[id] ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'} text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                      />
                      {errors[id] && <p className="mt-1 text-xs text-red-500">{errors[id]}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your business and what you're looking for..."
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border ${errors.message ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'} text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    This will open WhatsApp with your message pre-filled.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
