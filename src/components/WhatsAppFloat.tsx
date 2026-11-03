import { useState } from 'react'
import { X, MessageSquare, Send } from 'lucide-react'
import { getWhatsAppUrl, WA_MESSAGES } from '../lib/constants'

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Expanded Quick Message Card */}
      {showTooltip && (
        <div className="bg-white dark:bg-[#11131C] rounded-2xl shadow-2xl p-5 w-72 sm:w-80 border border-slate-200 dark:border-slate-800 mb-1 pointer-events-auto animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between mb-3.5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  P
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-white dark:border-[#11131C] rounded-full" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">PIXORA DIGITAL</p>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available on WhatsApp
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
            Need a custom website for your business in Hyderabad? Let's discuss your timeline and quote.
          </p>
          <a
            href={getWhatsAppUrl(WA_MESSAGES.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md"
          >
            <span>Start WhatsApp Chat</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-900/30 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 pointer-events-auto focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Chat on WhatsApp with PIXORA DIGITAL"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  )
}
