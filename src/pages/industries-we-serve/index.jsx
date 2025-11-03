import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import IndustryHero from './components/IndustryHero';
import IndustryGrid from './components/IndustryGrid';


const IndustriesWeServe = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Serve - NorthStep Global | Specialized Talent Solutions</title>
        <meta 
          name="description" 
          content="Discover NorthStep's specialized recruitment expertise across technology, healthcare, finance, manufacturing, and more. Industry-specific consultants with proven track records." 
        />
        <meta name="keywords" content="industry recruitment, specialized hiring, technology recruiting, healthcare staffing, financial services talent, manufacturing recruitment" />
        <meta property="og:title" content="Industries We Serve - NorthStep Global" />
        <meta property="og:description" content="Specialized recruitment expertise across key sectors with dedicated consultant teams and industry intelligence." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/industries-we-serve" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <IndustryHero />
          <IndustryGrid />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndustriesWeServe;