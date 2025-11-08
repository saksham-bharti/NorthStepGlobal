import React from 'react';
import Icon from '../../../components/AppIcon';

const IndustryHero = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 north-arrow-bg opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8 pb-2 lg:pb-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6 text-primary">
            <Icon name="Building2" size={20} className="text-primary" />
            <span className="text-sm font-medium">Industry Expertise</span>
          </div>
          
          <h1 className="text-brand-hero mb-6">
            Industries We Serve
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed">
            Specialized recruitment expertise across key sectors with deep industry knowledge, 
            proven track records, and dedicated consultant teams for each vertical.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;