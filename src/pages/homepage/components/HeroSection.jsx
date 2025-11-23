import React from 'react';
import Icon from '../../../components/AppIcon';
import { useIntersectionObserver } from '../../../utils/useIntersectionObserver';

const HeroSection = () => {
  const [heroRef, heroInView] = useIntersectionObserver();
  const [contentRef, contentInView] = useIntersectionObserver();

  return (
    <>
      {/* Top hero: image only (no text) */}
      <section ref={heroRef} className="relative bg-background pt-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className={`relative h-56 sm:h-72 md:h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden transition-all duration-1000 ${
            heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {/* Background Image with Parallax */}
            <img
              src="/assets/images/home_bg.png"
              alt="NorthStep background"
              className="w-full h-full object-cover object-center transition-transform duration-[2000ms] hover:scale-105"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-card/80 to-muted/85"></div>
            {/* Background Pattern */}
            <div className="absolute inset-0 north-arrow-bg opacity-20"></div>
            {/* Animated Background Elements */}
            <div
              className={`absolute top-20 left-10 w-32 h-32 bg-gradient-elevation rounded-full opacity-10 transition-all duration-1000 ${
                heroInView ? 'animate-float' : ''
              }`}
            ></div>
            <div
              className={`absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full opacity-20 transition-all duration-1000 delay-300 ${
                heroInView ? 'animate-float' : ''
              }`}
            ></div>
            <div
              className={`absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full opacity-15 transition-all duration-1000 delay-700 ${
                heroInView ? 'animate-float' : ''
              }`}
            ></div>

            {/* Floating particles */}
            {heroInView && (
              <>
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce-in"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-bounce-in delay-500"></div>
                <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-bounce-in delay-1000"></div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Content below the image */}
      <section ref={contentRef} className="bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-3xl sm:text-4xl lg:text-brand-hero font-bold mb-6 leading-tight text-foreground transition-all duration-1000 ${
              contentInView ? 'animate-slide-up' : 'opacity-0 translate-y-8'
            }`}>
              Build Exceptional Teams with
              <span className="text-brand-primary relative inline-block">
                Strategic
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 transition-transform duration-700 delay-500 animate-pulse-slow"></span>
              </span>
              Talent Partnership
            </h1>
            <p className={`text-brand-subheading max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              contentInView ? 'animate-slide-up-delay' : 'opacity-0 translate-y-8'
            }`}>
              Where exceptional talent meets visionary companies. We don't just fill positions; we create career trajectories and organizational success stories that define industries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;