import { Link } from 'react-router-dom'
import { Zap, MapPin, Phone } from 'lucide-react'
import { getWhatsAppUrl, WA_MESSAGES, PHONE_DISPLAY, PHONE_NUMBER } from '../lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">PIXORA</span>
                <span className="text-xl font-black tracking-tight text-indigo-400"> DIGITAL</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-500">
              Your Business Deserves a Better Digital Presence. We build stunning, modern websites for every type of business.
            </p>
            <div className="flex items-center gap-2 text-sm mb-3">
              <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span>Hyderabad, Telangana, India</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">{PHONE_DISPLAY}</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">What We Build</h3>
            <ul className="space-y-2.5 text-sm">
              {['Salon Websites', 'Restaurant Websites', 'Clothing Store Websites', 'Gym Websites', 'Real Estate Websites', 'Dental Clinic Websites', 'Photography Websites'].map(item => (
                <li key={item}>
                  <Link to="/industries" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Work', href: '/our-work' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Features', href: '/features' },
                { label: 'Contact', href: '/contact' },
                { label: 'Industries', href: '/industries' },
              ].map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <p className="text-sm mb-4 text-slate-500">Ready to build your website? Reach out via WhatsApp for a quick response.</p>
            <a
              href={getWhatsAppUrl(WA_MESSAGES.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors mb-6"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>

            {/* Social (placeholder) */}
            <div>
              <p className="text-xs text-slate-600 mb-3">Follow us (coming soon)</p>
              <div className="flex items-center gap-3">
                {['IG', 'FB', 'X', 'YT'].map((label, i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 cursor-not-allowed opacity-60">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-600">
            © {year} PIXORA DIGITAL. Hyderabad, Telangana, India.
          </p>
          <p className="text-slate-700 text-xs">
            This is a demo website. All industry previews are sample designs.
          </p>
        </div>
      </div>
    </footer>
  )
}
