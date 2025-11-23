import React from 'react';
import Icon from '../../../components/AppIcon';

const IndustryHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 text-primary">
            <Icon name="Building2" size={16} />
            <span className="text-sm font-medium">Industry Expertise</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-brand-hero font-bold mb-6 leading-tight text-foreground">
            Industries We Serve
          </h1>

          <p className="text-brand-subheading">
            Specialized recruitment expertise across key sectors with deep industry knowledge,
            proven track records, and dedicated consultant teams for each vertical.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;