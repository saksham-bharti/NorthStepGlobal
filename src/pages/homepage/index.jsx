import React, { useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

// Lazy load components for better performance
const HeroSection = lazy(() => import('./components/HeroSection'));
const TrustIndicators = lazy(() => import('./components/TrustIndicators'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ServicesShowcase = lazy(() => import('./components/ServicesShowcase'));
const CTASection = lazy(() => import('./components/CTASection'));

// Loading component
const LoadingSection = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>NorthStep Global</title>
        <meta 
          name="description" 
          content="Transform your career or build exceptional teams with NorthStep Global. Strategic talent acquisition connecting ambitious professionals with visionary companies. 95% success rate, $25K average salary increase." 
        />
        <meta 
          name="keywords" 
          content="recruitment, talent acquisition, hiring, executive search, RPO, HR, time-to-hire, SLAs" 
        />
        <meta property="og:title" content="NorthStep Global - Your Next Step North" />
        <meta 
          property="og:description" 
          content="Strategic recruitment partner for hiring teams. Build exceptional teams with pre-vetted talent and predictable delivery." 
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/homepage" />

        {/* Preload critical resources */}
        <link rel="preload" href="/assets/images/Logo.png" as="image" />
        <link rel="preload" href="/assets/images/home_bg.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section - First impression with dual pathways */}
          <Suspense fallback={<LoadingSection />}>
            <HeroSection />
          </Suspense>

          {/* Trust Indicators - Social proof and metrics */}
          <Suspense fallback={<LoadingSection />}>
            <TrustIndicators />
          </Suspense>

          {/* About Section - Company overview */}
          <Suspense fallback={<LoadingSection />}>
            <AboutSection />
          </Suspense>

          {/* Services Showcase - Our offerings */}
          <Suspense fallback={<LoadingSection />}>
            <ServicesShowcase />
          </Suspense>

          {/* CTA Section - Multiple engagement options */}
          <Suspense fallback={<LoadingSection />}>
            <CTASection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;