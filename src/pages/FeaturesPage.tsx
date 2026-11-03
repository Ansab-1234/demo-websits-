import { Check } from 'lucide-react'
import { getWhatsAppUrl, WA_MESSAGES } from '../lib/constants'

const featureGroups = [
  {
    category: 'Design & UX',
    icon: '🎨',
    features: [
      { name: 'Mobile-First Responsive Design', desc: 'Perfect on phones, tablets and desktops — every pixel placed with care.' },
      { name: 'Dark & Light Mode', desc: 'Automatic or user-controlled theme switching for modern viewing.' },
      { name: 'Custom Brand Identity', desc: 'Colors, fonts, and visuals tailored to your specific business brand.' },
      { name: 'Smooth Animations', desc: 'Subtle, professional animations that enhance without distracting.' },
      { name: 'Premium Typography', desc: 'Beautiful font pairing and hierarchy for excellent readability.' },
      { name: 'Accessible Design', desc: 'Meets accessibility standards with proper contrast, ARIA labels and keyboard navigation.' },
    ],
  },
  {
    category: 'Business Features',
    icon: '💼',
    features: [
      { name: 'WhatsApp Integration', desc: 'Floating chat button, CTA buttons with pre-filled messages for instant enquiries.' },
      { name: 'Click-to-Call Button', desc: 'One tap to call your business directly from the website.' },
      { name: 'Google Maps Integration', desc: 'Embedded maps to help customers find your location easily.' },
      { name: 'Contact Forms', desc: 'Smart forms with full validation and clear success/error messages.' },
      { name: 'Service/Product Catalogue', desc: 'Clean, structured listings with images, descriptions, and pricing.' },
      { name: 'Image Galleries', desc: 'Beautiful masonry or grid galleries for showcasing your work.' },
    ],
  },
  {
    category: 'Performance & SEO',
    icon: '⚡',
    features: [
      { name: 'SEO-Optimized Structure', desc: 'Semantic HTML, proper headings, meta tags, and structured content.' },
      { name: 'Page Speed Optimization', desc: 'Lazy loading images, optimized assets, and minimal code bloat.' },
      { name: 'Open Graph Metadata', desc: 'Rich previews when your website is shared on social media.' },
      { name: 'Robots.txt & Sitemap', desc: 'Search engine crawling instructions for proper indexing.' },
      { name: 'Image Alt Text', desc: 'Descriptive alt text for all images for accessibility and SEO.' },
      { name: 'Clean URL Structure', desc: 'Human-readable, keyword-rich page URLs.' },
    ],
  },
  {
    category: 'User Experience',
    icon: '✨',
    features: [
      { name: 'Testimonials & Reviews', desc: 'Customer review sections to build trust with new visitors.' },
      { name: 'FAQ Accordion', desc: 'Expandable FAQ sections for answering common questions.' },
      { name: 'Social Media Links', desc: 'Instagram, Facebook, YouTube and other platform connections.' },
      { name: 'Custom 404 Page', desc: 'Branded error page with navigation back to the main site.' },
      { name: 'Smooth Navigation', desc: 'Fixed header with mobile hamburger menu and smooth scroll.' },
      { name: 'Loading States', desc: 'Proper loading indicators and skeleton screens where needed.' },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Everything Your Website{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Needs to Succeed.
            </span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Every website we build comes packed with professional features that help your business stand out and grow online.
          </p>
        </div>
      </div>

      {/* Feature Groups */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {featureGroups.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{group.icon}</span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">{group.category}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">{feature.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
            Want all these features in your website?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
            Contact us and let's build something amazing for your business.
          </p>
          <a
            href={getWhatsAppUrl(WA_MESSAGES.getMyWebsite)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 transition-all"
          >
            Get My Website Built
          </a>
        </div>
      </div>
    </div>
  )
}
