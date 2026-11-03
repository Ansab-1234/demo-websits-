import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Layout from './components/Layout'

// Lazy load pages for fast load times and optimized code splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'))
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'))
const OurWorkPage = lazy(() => import('./pages/OurWorkPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Industry Preview Pages
const SalonPreview = lazy(() => import('./pages/previews/SalonPreview'))
const RestaurantPreview = lazy(() => import('./pages/previews/RestaurantPreview'))
const ClothingPreview = lazy(() => import('./pages/previews/ClothingPreview'))
const FurniturePreview = lazy(() => import('./pages/previews/FurniturePreview'))
const DentalPreview = lazy(() => import('./pages/previews/DentalPreview'))
const GymPreview = lazy(() => import('./pages/previews/GymPreview'))
const RealEstatePreview = lazy(() => import('./pages/previews/RealEstatePreview'))
const AutomobilePreview = lazy(() => import('./pages/previews/AutomobilePreview'))
const PhotographyPreview = lazy(() => import('./pages/previews/PhotographyPreview'))
const EducationPreview = lazy(() => import('./pages/previews/EducationPreview'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
      <div className="w-10 h-10 border-3 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin" />
      <span className="text-xs font-semibold text-slate-400">Loading experience...</span>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main site pages with layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          
          {/* Industry preview pages (standalone) */}
          <Route path="/preview/salon" element={<SalonPreview />} />
          <Route path="/preview/restaurant" element={<RestaurantPreview />} />
          <Route path="/preview/clothing" element={<ClothingPreview />} />
          <Route path="/preview/furniture" element={<FurniturePreview />} />
          <Route path="/preview/dental" element={<DentalPreview />} />
          <Route path="/preview/gym" element={<GymPreview />} />
          <Route path="/preview/real-estate" element={<RealEstatePreview />} />
          <Route path="/preview/automobile" element={<AutomobilePreview />} />
          <Route path="/preview/photography" element={<PhotographyPreview />} />
          <Route path="/preview/education" element={<EducationPreview />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}
