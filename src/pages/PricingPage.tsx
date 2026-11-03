import { Check, X, ArrowRight } from 'lucide-react'
import { getWhatsAppUrl, WA_MESSAGES } from '../lib/constants'

const plans = [
  {
    name: 'Starter',
    price: '₹5,000',
    suffix: 'onwards',
    description: 'Perfect for small businesses getting started with their online presence.',
    highlight: false,
    badge: null,
    color: 'border-slate-200 dark:border-slate-700',
    btnClass: 'border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
    includes: [
      'Professional website design',
      'Mobile responsive layout',
      'Business info pages (Home, About, Contact)',
      'WhatsApp floating button',
      'Click-to-call button',
      'Basic SEO setup',
      'Google Maps integration',
      'Social media links',
    ],
    excludes: [
      'Product/service catalogue',
      'Image gallery section',
      'Advanced animations',
      'Admin functionality',
    ],
  },
  {
    name: 'Professional',
    price: '₹9,000',
    suffix: 'onwards',
    description: 'Ideal for businesses that need a complete, feature-rich website.',
    highlight: true,
    badge: 'Most Popular',
    color: 'border-indigo-500',
    btnClass: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40',
    includes: [
      'Everything in Starter',
      'Premium UI/UX design',
      'Product or service catalogue',
      'Image gallery section',
      'SEO optimization basics',
      'Contact form with validation',
      'Testimonials section',
      'FAQ section',
      'Up to 8 pages',
    ],
    excludes: [
      'Advanced custom interactions',
      'Admin panel/dashboard',
    ],
  },
  {
    name: 'Premium',
    price: '₹15,000',
    suffix: 'onwards',
    description: 'For businesses that want an exceptional, fully custom digital experience.',
    highlight: false,
    badge: 'Best Value',
    color: 'border-purple-500 dark:border-purple-400',
    btnClass: 'border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20',
    includes: [
      'Everything in Professional',
      'Advanced animations & transitions',
      'Custom sections built to brief',
      'Admin functionality (where agreed)',
      'Advanced customization',
      'Priority support during build',
      'Up to 15+ pages',
      'Performance optimization',
      'Detailed testing & QA',
    ],
    excludes: [],
  },
]

const faqs = [
  {
    q: 'What is the final price of my website?',
    a: 'The prices listed are starting points. The final cost depends on your specific requirements — number of pages, features needed, complexity of design, and any third-party integrations. We\'ll give you a clear quote after understanding your project.',
  },
  {
    q: 'Are domain and hosting included?',
    a: 'Domain registration and web hosting are not included in the base price and will be additional costs. We can help you choose the right hosting plan and domain name for your business.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Timelines vary based on the package and project complexity. Starter projects typically take 5-7 days, Professional projects 10-14 days, and Premium projects 2-4 weeks. We\'ll confirm the timeline before starting.',
  },
  {
    q: 'Can I update the website after it\'s built?',
    a: 'Yes. We can discuss ongoing maintenance and update support. Minor content changes can often be handled via WhatsApp for a small fee or as part of a maintenance plan.',
  },
  {
    q: 'Do you offer payment in installments?',
    a: 'Yes, we typically work with a 50% advance and 50% on delivery model. For larger projects, we can discuss a suitable payment structure.',
  },
  {
    q: 'What if I need something not in any package?',
    a: 'That\'s completely fine. Contact us with your requirements and we\'ll create a custom quote that fits your exact needs.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-slate-900 dark:text-white font-medium pr-4">{q}</span>
        <span className={`text-indigo-600 dark:text-indigo-400 text-xl transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="pb-5 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
          {a}
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Simple,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Transparent Pricing.
            </span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your business and budget.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-slate-900 rounded-3xl border-2 ${plan.color} p-8 ${plan.highlight ? 'shadow-2xl shadow-indigo-500/20 -translate-y-4' : ''} transition-all duration-300`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-bold rounded-full text-white ${plan.highlight ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-purple-600'}`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{plan.suffix}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
                {plan.excludes.map((item) => (
                  <div key={item} className="flex items-start gap-3 opacity-40">
                    <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-slate-400" />
                    </div>
                    <span className="text-sm text-slate-400 line-through">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppUrl(`Hello! I'm interested in the ${plan.name} website package (${plan.price} onwards). Can you share more details?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${plan.btnClass}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-3xl mx-auto bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 text-center">
          <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
            <strong>Please note:</strong> All prices are starting points. Final pricing depends on your specific project requirements. Domain registration, web hosting, and third-party service costs may be additional.
          </p>
        </div>

        {/* Custom Quote */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
            Need a Custom Quote?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Every project is different. Tell us what you need and we'll provide a clear, honest quote.
          </p>
          <a
            href={getWhatsAppUrl(WA_MESSAGES.getQuote)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 transition-all"
          >
            Get a Custom Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl px-8 py-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
