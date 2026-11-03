import { useState } from 'react'
import { Phone, MapPin, Clock, Star, Check, ChevronDown, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const WA_URL = 'https://wa.me/918121507323'

const services = [
  { name: 'Haircut & Styling', price: '₹300 – ₹800', duration: '30-60 min', icon: '✂️' },
  { name: 'Hair Color', price: '₹800 – ₹2500', duration: '90-120 min', icon: '🎨' },
  { name: 'Facial Treatment', price: '₹500 – ₹1500', duration: '45-60 min', icon: '✨' },
  { name: 'Bridal Makeup', price: '₹3000 – ₹8000', duration: '3-4 hrs', icon: '💄' },
  { name: 'Hair Spa', price: '₹400 – ₹1200', duration: '60 min', icon: '🌿' },
  { name: 'Threading & Waxing', price: '₹50 – ₹400', duration: '15-30 min', icon: '🧵' },
]

const team = [
  { name: 'Priya Sharma', role: 'Senior Stylist & Makeup Artist', exp: '8 years experience', emoji: '👩' },
  { name: 'Anita Reddy', role: 'Hair Color Specialist', exp: '6 years experience', emoji: '👩🏽' },
  { name: 'Kavitha Rao', role: 'Skin & Beauty Expert', exp: '5 years experience', emoji: '👩🏾' },
]

const reviews = [
  { name: 'Meera K.', rating: 5, text: 'Amazing bridal makeup! Looked absolutely stunning on my wedding day. The team was so professional and understood exactly what I wanted.' },
  { name: 'Sunita P.', rating: 5, text: 'Best salon in the area! Priya did a wonderful job with my hair color. Will definitely come back.' },
  { name: 'Rahul M.', rating: 5, text: 'Brought my wife here for an anniversary special treatment — she loved every bit of it. Highly recommended!' },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=400&fit=crop',
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-purple-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="text-slate-800 font-medium text-sm pr-4">{q}</span>
        <ChevronDown className={`w-4 h-4 text-purple-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-4 text-slate-600 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

export default function SalonPreview() {
  const [activeTab, setActiveTab] = useState('services')

  return (
    <div className="min-h-screen bg-white">
      {/* Preview banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-2 text-xs font-medium">
        📌 This is a sample salon website demo by PIXORA DIGITAL — 
        <a href={`${WA_URL}?text=I want a salon website like this demo`} target="_blank" rel="noopener noreferrer" className="underline ml-1">
          Get one for your business
        </a>
        <Link to="/" className="ml-3 opacity-70 hover:opacity-100 inline-flex items-center gap-1">
          <ArrowLeft className="w-3 h-3" /> Back to PIXORA
        </Link>
      </div>

      {/* Salon Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-purple-700">✨ Glamour Studio</h1>
            <p className="text-xs text-slate-500">Premium Salon & Beauty</p>
          </div>
          <a
            href={`${WA_URL}?text=Hi! I'd like to book an appointment at Glamour Studio. Please share availability.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-900 via-fuchsia-900 to-pink-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-purple-300 text-sm font-medium mb-3 tracking-widest uppercase">Premium Salon in Hyderabad</p>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            Where Beauty<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">Meets Artistry.</span>
          </h2>
          <p className="text-purple-200 text-lg mb-8 max-w-xl mx-auto">
            Expert hair styling, bridal makeup, skin care and beauty treatments. Trusted by over 500+ happy clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${WA_URL}?text=Hi! I'd like to book a salon appointment. Please share available slots.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-purple-700 font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all"
            >
              Book via WhatsApp
            </a>
            <a href="#services" className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Quick info */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10 mb-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <Clock className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <p className="font-semibold text-slate-800 text-sm">Mon–Sat</p>
            <p className="text-slate-500 text-xs">9:00 AM – 8:00 PM</p>
          </div>
          <div>
            <MapPin className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <p className="font-semibold text-slate-800 text-sm">Banjara Hills</p>
            <p className="text-slate-500 text-xs">Hyderabad, Telangana</p>
          </div>
          <div>
            <Phone className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <p className="font-semibold text-slate-800 text-sm">+91 81215 07323</p>
            <a href="tel:+918121507323" className="text-purple-500 text-xs hover:underline">Call Now</a>
          </div>
          <div>
            <Star className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <p className="font-semibold text-slate-800 text-sm">4.9 ★ Rating</p>
            <p className="text-slate-500 text-xs">500+ Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Our Services</h2>
          <p className="text-slate-500">Professional beauty treatments tailored to you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.name} className="bg-purple-50 border border-purple-100 rounded-2xl p-5 hover:border-purple-300 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-slate-900 mb-1">{s.name}</h3>
              <p className="text-purple-600 font-semibold text-sm mb-1">{s.price}</p>
              <p className="text-slate-400 text-xs mb-4">⏱ {s.duration}</p>
              <a
                href={`${WA_URL}?text=Hi! I'd like to book ${s.name} at Glamour Studio. Please share availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors"
              >
                Book this service →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Our Gallery</h2>
            <p className="text-slate-500">Transformations that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Meet Our Team</h2>
          <p className="text-slate-500">Expert artists dedicated to making you look your best</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((t) => (
            <div key={t.name} className="text-center p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all">
              <div className="text-6xl mb-4">{t.emoji}</div>
              <h3 className="font-bold text-slate-900 mb-1">{t.name}</h3>
              <p className="text-purple-600 text-sm font-medium mb-1">{t.role}</p>
              <p className="text-slate-400 text-xs">{t.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Customer Reviews</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-600 text-sm italic mb-4">"{r.text}"</p>
                <p className="font-bold text-slate-900 text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">FAQs</h2>
        <div className="bg-white border border-purple-100 rounded-2xl px-6 py-2">
          {[
            { q: 'Do I need to book an appointment?', a: 'Walk-ins are welcome but we recommend booking to avoid waiting. You can book via WhatsApp for instant confirmation.' },
            { q: 'Do you offer bridal packages?', a: 'Yes! We offer comprehensive bridal packages including trial sessions, day-of services, and group bookings for the bridal party.' },
            { q: 'What products do you use?', a: 'We use premium, professional-grade products from trusted international brands to ensure the best results and hair health.' },
          ].map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to Look Your Best?</h2>
        <p className="text-purple-200 mb-8">Book your appointment today — slots fill up fast!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${WA_URL}?text=Hi! I'd like to book a salon appointment at Glamour Studio.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-purple-700 font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all"
          >
            Book via WhatsApp
          </a>
          <a href="tel:+918121507323" className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all">
            Call: +91 81215 07323
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p className="mb-2">✨ Glamour Studio — Premium Salon & Beauty, Hyderabad</p>
        <p className="text-slate-600 text-xs">This is a sample demo website by <Link to="/" className="text-indigo-400 hover:underline">PIXORA DIGITAL</Link>. Not a real business.</p>
      </footer>

      {/* WhatsApp Float */}
      <a
        href={`${WA_URL}?text=Hi! I'd like to book an appointment at Glamour Studio.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/40 hover:scale-110 transition-all"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
