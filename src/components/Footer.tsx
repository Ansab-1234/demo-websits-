import { Link } from 'react-router-dom'
import { MapPin, Phone, MessageSquare, ArrowUpRight } from 'lucide-react'
import {
  getWhatsAppUrl,
  WA_MESSAGES,
  PHONE_DISPLAY_1,
  PHONE_NUMBER_1,
  PHONE_DISPLAY_2,
  PHONE_NUMBER_2,
  WHATSAPP_NUMBER_1,
  WHATSAPP_NUMBER_2,
} from '../lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0C0D0B] text-[#A8A49B] border-t border-white/10 selection:bg-[#C6A46A] selection:text-[#10110F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F5F0E7] text-[#10110F] flex items-center justify-center font-black text-sm tracking-tighter shadow-md">
                P<span className="text-[#C6A46A] text-[10px]">●</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-[#F5F0E7] leading-none">
                  PIXORA DIGITAL
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#C6A46A] uppercase mt-0.5">
                  HYDERABAD, INDIA
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#A8A49B] max-w-sm leading-relaxed mb-6 font-light">
              Digital Experiences That Move Businesses Forward. A dedicated Hyderabad web engineering studio crafting bespoke, high-converting digital platforms for ambitious businesses.
            </p>
            <div className="space-y-3 text-xs text-[#A8A49B]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A46A] flex-shrink-0" aria-hidden="true" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              
              {/* Contact 1 */}
              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#C6A46A] flex-shrink-0" aria-hidden="true" />
                <div className="flex items-center gap-2">
                  <a href={`tel:${PHONE_NUMBER_1}`} className="text-[#F5F0E7] hover:text-[#C6A46A] font-semibold transition-colors">
                    {PHONE_DISPLAY_1}
                  </a>
                  <span className="text-white/20">|</span>
                  <a
                    href={getWhatsAppUrl(WA_MESSAGES.default, WHATSAPP_NUMBER_1)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Contact 2 */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C6A46A] flex-shrink-0" aria-hidden="true" />
                <div className="flex items-center gap-2">
                  <a href={`tel:${PHONE_NUMBER_2}`} className="text-[#F5F0E7] hover:text-[#C6A46A] font-semibold transition-colors">
                    {PHONE_DISPLAY_2}
                  </a>
                  <span className="text-white/20">|</span>
                  <a
                    href={getWhatsAppUrl(WA_MESSAGES.default, WHATSAPP_NUMBER_2)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#F5F0E7] uppercase mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Home', href: '/' },
                { label: 'Experiences Lab', href: '/experiences' },
                { label: 'Industries We Build', href: '/industries' },
                { label: 'Services', href: '/services' },
                { label: 'Live Demos & Work', href: '/our-work' },
                { label: 'Our Process', href: '/process' },
                { label: 'Pricing Packages', href: '/pricing' },
                { label: 'About Our Team', href: '/about' },
                { label: 'Contact & Inquiry', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-[#F5F0E7] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Previews */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#F5F0E7] uppercase mb-4">Bespoke Previews</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Luxury Salon', href: '/preview/salon' },
                { label: 'Heritage Restaurant', href: '/preview/restaurant' },
                { label: 'Designer Clothing', href: '/preview/clothing' },
                { label: 'Advanced Dental', href: '/preview/dental' },
                { label: 'Performance Gym', href: '/preview/gym' },
                { label: 'Architectural Furniture', href: '/preview/furniture' },
                { label: 'Luxury Real Estate', href: '/preview/real-estate' },
                { label: 'Auto Detailing Lab', href: '/preview/automobile' },
                { label: 'Darkroom Photography', href: '/preview/photography' },
                { label: 'Education Academy', href: '/preview/education' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-[#F5F0E7] transition-colors inline-flex items-center gap-1 group">
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A8A49B] group-hover:text-[#C6A46A] transition-colors" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct WhatsApp Callout */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#F5F0E7] uppercase mb-4">Direct Connect</h4>
            <p className="text-xs text-[#A8A49B] mb-4 leading-relaxed">
              Have questions about your project timeline or need a personalized consultation? Connect with us directly.
            </p>
            <div className="space-y-2.5">
              <a
                href={getWhatsAppUrl(WA_MESSAGES.default, WHATSAPP_NUMBER_1)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold rounded-xl transition-all shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                <span>WhatsApp Line 1</span>
              </a>
              <a
                href={getWhatsAppUrl(WA_MESSAGES.default, WHATSAPP_NUMBER_2)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 text-[#F5F0E7] border border-white/10 text-xs font-semibold rounded-xl transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                <span>WhatsApp Line 2</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A49B]">
          <p>© {currentYear} PIXORA DIGITAL • Hyderabad, Telangana, India. All rights reserved.</p>
          <p className="text-[#8F8B82] text-[11px] font-mono">
            Designed & Developed by PIXORA DIGITAL
          </p>
        </div>
      </div>
    </footer>
  )
}
