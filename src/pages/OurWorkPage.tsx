import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { getWhatsAppUrl, WA_MESSAGES } from '../lib/constants'

const projects = [
  {
    title: 'Salon Website Demo',
    category: 'Salon & Beauty',
    description: 'A complete salon business website featuring services with pricing, team profiles, Instagram-style gallery, WhatsApp appointment booking, customer reviews, opening hours and location map.',
    features: ['Services & Pricing', 'Team Profiles', 'Photo Gallery', 'WhatsApp Booking', 'Customer Reviews', 'Google Maps'],
    gradient: 'from-purple-600 to-pink-600',
    emoji: '💇',
    liveUrl: 'https://salon-2-five.vercel.app',
    previewUrl: '/preview/salon',
    label: 'Live Demo',
    tag: 'Demo Project',
  },
  {
    title: 'Restaurant Website Demo',
    category: 'Restaurant & Cafe',
    description: 'A premium restaurant website with digital menu, food photo gallery, popular dishes section, table reservation enquiry, WhatsApp ordering, and operating hours.',
    features: ['Digital Menu', 'Food Gallery', 'Popular Dishes', 'WhatsApp Order', 'Reservation Form', 'Location & Hours'],
    gradient: 'from-orange-600 to-red-600',
    emoji: '🍽️',
    liveUrl: null,
    previewUrl: '/preview/restaurant',
    label: 'Preview',
    tag: 'Demo Design',
  },
  {
    title: 'Clothing Store Demo',
    category: 'Fashion & Clothing',
    description: 'An elegant clothing boutique website with product catalogue, category filters, new arrivals, product detail views, WhatsApp ordering and seasonal offers.',
    features: ['Product Catalogue', 'Category Filters', 'New Arrivals', 'WhatsApp Order', 'Product Details', 'Offers Section'],
    gradient: 'from-pink-600 to-rose-600',
    emoji: '👗',
    liveUrl: null,
    previewUrl: '/preview/clothing',
    label: 'Preview',
    tag: 'Demo Design',
  },
  {
    title: 'Dental Clinic Demo',
    category: 'Healthcare & Dental',
    description: 'A professional dental clinic website with treatment listings, doctor profiles, appointment enquiry form, clinic timings and patient testimonials.',
    features: ['Treatments', 'Doctor Profiles', 'Appointments', 'Testimonials', 'Clinic Timings', 'Contact'],
    gradient: 'from-cyan-600 to-blue-600',
    emoji: '🦷',
    liveUrl: null,
    previewUrl: '/preview/dental',
    label: 'Preview',
    tag: 'Demo Design',
  },
  {
    title: 'Gym & Fitness Demo',
    category: 'Gym & Fitness',
    description: 'A high-energy gym website with membership plans, trainer profiles, facilities showcase, transformation gallery and trial session booking.',
    features: ['Membership Plans', 'Trainer Profiles', 'Facilities', 'Transformations', 'Trial Booking', 'WhatsApp'],
    gradient: 'from-green-600 to-emerald-600',
    emoji: '💪',
    liveUrl: null,
    previewUrl: '/preview/gym',
    label: 'Preview',
    tag: 'Demo Design',
  },
  {
    title: 'Real Estate Demo',
    category: 'Real Estate',
    description: 'A premium real estate website with property listings, detailed property pages with specs, photo galleries, location information and enquiry forms.',
    features: ['Property Listings', 'Property Details', 'Photo Galleries', 'Enquiry Forms', 'Location Info', 'Filters'],
    gradient: 'from-blue-600 to-indigo-600',
    emoji: '🏠',
    liveUrl: null,
    previewUrl: '/preview/real-estate',
    label: 'Preview',
    tag: 'Demo Design',
  },
]

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Work.
            </span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Sample websites and live demos that showcase the quality and variety of websites we create for different businesses.
          </p>
          <p className="text-slate-600 text-sm mt-4">
            ℹ️ All previews are honest demo designs. No client names or results have been invented.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:shadow-indigo-500/10 transition-all duration-300"
            >
              {/* Card header */}
              <div className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <span className="text-6xl filter drop-shadow-2xl">{project.emoji}</span>
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/30">
                  {project.tag}
                </div>
                {project.liveUrl && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                    ● Live
                  </div>
                )}
              </div>

              {/* Card content */}
              <div className="p-7">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature) => (
                    <span key={feature} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-3">
                  <Link
                    to={project.previewUrl}
                    className="flex-1 text-center py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                  >
                    View Preview
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-black mb-4">Ready to see what we can build for you?</h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
            Every business deserves a website that represents it perfectly. Let's create yours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={getWhatsAppUrl(WA_MESSAGES.discusProject)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all"
            >
              Discuss My Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 hover:-translate-y-1 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
