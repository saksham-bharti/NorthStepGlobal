import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import TrustIndicators from './components/TrustIndicators';
import CTASection from './components/CTASection';

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
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section - First impression with dual pathways */}
          <HeroSection />
          
          {/* Trust Indicators - Social proof and metrics */}
          <TrustIndicators />
          
          {/* CTA Section - Multiple engagement options */}
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;