import React from 'react';
import Icon from '../../../components/AppIcon';
import { useIntersectionObserver } from '../../../utils/useIntersectionObserver';

const IndustryHero = () => {
  const [heroRef, heroInView] = useIntersectionObserver();

  return (
    <section ref={heroRef} className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 text-primary transition-all duration-1000 ${
            heroInView ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}>
            <Icon name="Building2" size={16} />
            <span className="text-sm font-medium">Industry Expertise</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-brand-hero font-bold mb-6 leading-tight text-foreground transition-all duration-1000 delay-300 ${
            heroInView ? 'animate-slide-up-delay' : 'opacity-0 translate-y-8'
          }`}>
            Industries We Serve
          </h1>

          <p className={`text-brand-subheading transition-all duration-1000 delay-500 ${
            heroInView ? 'animate-slide-up-delay' : 'opacity-0 translate-y-8'
          }`}>
            Specialized recruitment expertise across key sectors with deep industry knowledge,
            proven track records, and dedicated consultant teams for each vertical.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;