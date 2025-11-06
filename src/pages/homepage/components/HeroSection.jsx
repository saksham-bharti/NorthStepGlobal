import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <>
      {/* Top hero: image only (no text) */}
      <section className="relative bg-background pt-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="relative h-56 sm:h-72 md:h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden">
            {/* Background Image */}
            <img
              src="/assets/images/home_bg.png"
              alt="NorthStep background"
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-card/80 to-muted/85"></div>
            {/* Background Pattern */}
            <div className="absolute inset-0 north-arrow-bg opacity-20"></div>
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-elevation rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full opacity-15 animate-pulse delay-500"></div>
          </div>
        </div>
      </section>

      {/* Content below the image */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-brand-hero font-bold mb-6 leading-tight">
              Build Exceptional Teams with
              <span className="text-brand-primary"> Strategic </span>
              Talent Partnership
            </h1>
            <p className="text-brand-subheading max-w-3xl mx-auto">
              Where exceptional talent meets visionary companies. We don't just fill positions; we create career trajectories and organizational success stories that define industries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;