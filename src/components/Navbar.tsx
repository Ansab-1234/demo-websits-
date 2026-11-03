import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, ArrowUpRight, Sparkles } from 'lucide-react'
import { getWhatsAppUrl, WA_MESSAGES, NAV_LINKS } from '../lib/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pixora-theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('pixora-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('pixora-theme', 'light')
    }
  }, [dark])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBF9F5]/90 dark:bg-[#10110F]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Wordmark */}
          <Link to="/" className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#C6A46A] rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-[#141512] dark:bg-[#F5F0E7] text-[#F5F0E7] dark:text-[#10110F] flex items-center justify-center font-black text-sm tracking-tighter shadow-md group-hover:scale-105 transition-transform duration-200">
              P<span className="text-[#C6A46A] text-[10px]">●</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-[#141512] dark:text-[#F5F0E7] leading-none">
                PIXORA
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#8F8B82] dark:text-[#A8A49B] uppercase mt-0.5">
                DIGITAL • HYDERABAD
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#EFECE6]/80 dark:bg-[#191A17]/90 p-1.5 rounded-full border border-black/5 dark:border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    active
                      ? 'bg-white dark:bg-[#252622] text-[#141512] dark:text-[#F5F0E7] shadow-xs'
                      : 'text-[#6A665E] dark:text-[#A8A49B] hover:text-[#141512] dark:hover:text-[#F5F0E7]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] flex items-center justify-center hover:bg-[#EFECE6] dark:hover:bg-[#252622] transition-colors"
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <Sun className="w-4 h-4 text-[#C6A46A]" aria-hidden="true" /> : <Moon className="w-4 h-4 text-[#141512]" aria-hidden="true" />}
            </button>

            {/* Primary CTA */}
            <a
              href={getWhatsAppUrl("Hello PIXORA DIGITAL! I'd like to discuss a custom website for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] text-xs font-bold rounded-full shadow-md shadow-[#C6A46A]/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-4 h-4 text-[#C6A46A]" aria-hidden="true" /> : <Moon className="w-4 h-4 text-[#141512]" aria-hidden="true" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#191A17] text-[#141512] dark:text-[#F5F0E7] flex items-center justify-center"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#FBF9F5]/98 dark:bg-[#10110F]/98 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2 mb-6">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    active
                      ? 'bg-[#C6A46A]/10 text-[#C6A46A] dark:bg-[#C6A46A]/15 font-bold'
                      : 'text-[#5A564F] dark:text-[#A8A49B] hover:bg-[#EFECE6] dark:hover:bg-[#191A17]'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#C6A46A]" />}
                </Link>
              )
            })}
          </nav>
          <a
            href={getWhatsAppUrl("Hello PIXORA DIGITAL! I'd like to discuss a custom website for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#C6A46A] hover:bg-[#B39054] text-[#10110F] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  )
}
