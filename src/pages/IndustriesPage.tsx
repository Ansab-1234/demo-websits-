import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { INDUSTRIES } from '../lib/constants'

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            🏢 All Industries
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            One Team.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Websites for Every Industry.
            </span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Click any industry card to see a realistic preview of what we can build for that type of business.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.id}
              to={industry.previewUrl}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-40 group-hover:opacity-55 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 text-3xl filter drop-shadow-lg">{industry.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    View Demo
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                    Live Preview
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-black mb-4">Don't see your industry?</h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
            We build websites for any type of business. Contact us and we'll create something perfectly tailored for you.
          </p>
          <a
            href="https://wa.me/918121507323?text=Hello! I visited your website demo and I'm interested in creating a professional website for my business. Please share the details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all"
          >
            Discuss My Business
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
