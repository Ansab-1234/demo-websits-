import { ArrowRight, MapPin, Zap } from 'lucide-react'
import { getWhatsAppUrl, WA_MESSAGES, PHONE_DISPLAY, PHONE_NUMBER } from '../lib/constants'

const values = [
  { icon: '🎯', title: 'Business-Focused', desc: 'Every decision we make is driven by what will help your business attract more customers online.' },
  { icon: '📱', title: 'Mobile-First', desc: 'We design for phones first because that\'s where most of your customers are browsing from.' },
  { icon: '✨', title: 'Quality-Driven', desc: 'We don\'t cut corners. Every website we build is tested, refined, and delivered to a high standard.' },
  { icon: '🤝', title: 'Honest & Transparent', desc: 'Clear pricing, honest timelines, and genuine advice — no overpromising.' },
  { icon: '⚡', title: 'Fast Delivery', desc: 'We work efficiently without sacrificing quality, so your business gets online sooner.' },
  { icon: '🌐', title: 'Long-Term Support', desc: 'We\'re available after launch to help with updates, changes, and questions.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Hyderabad, Telangana, India
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              PIXORA DIGITAL
            </span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            A Hyderabad-based website development team helping local businesses build a strong digital presence.
          </p>
        </div>
      </div>

      {/* About content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                We are a Hyderabad-based website development team dedicated to helping local businesses establish a strong digital presence through modern, professional, and user-friendly websites.
              </p>
              <p>
                Our focus is simple: create websites that look impressive, work smoothly, and make it easier for customers to connect with businesses.
              </p>
              <p>
                Whether you run a salon, a restaurant, a clothing store, a clinic, a gym, or any other type of business — we understand that your website needs to reflect your brand, attract the right customers, and make it easy for them to take action.
              </p>
              <p>
                We don't use generic templates. Every website we build is designed specifically for your business, your audience, and your goals.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl(WA_MESSAGES.contactTeam)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 transition-all"
              >
                Contact Our Team <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                Call: {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Visual card */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-black text-slate-900 dark:text-white text-xl">PIXORA DIGITAL</p>
                <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">Web Development Team</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              "Your Business Deserves a Better Digital Presence."
            </p>
            <div className="space-y-3">
              {[
                { label: 'Location', value: 'Hyderabad, Telangana, India' },
                { label: 'Speciality', value: 'Business Websites' },
                { label: 'Industries', value: '18+ Business Types' },
                { label: 'Contact', value: PHONE_DISPLAY },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-indigo-100 dark:border-indigo-900/50 last:border-0">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</span>
                  <span className="text-sm text-slate-900 dark:text-white font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3 text-center">Our Approach</h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12">The principles behind every website we build.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-black mb-4">Let's Build Something Together</h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
            Ready to take your business online? We'd love to discuss your project.
          </p>
          <a
            href={getWhatsAppUrl(WA_MESSAGES.startWebsite)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all"
          >
            Start My Website <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
