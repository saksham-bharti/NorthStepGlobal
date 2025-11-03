import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <>
      {/* Top hero: image only (no text) */}
      <section className="relative bg-background">
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
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content: badge, paragraph, metrics, CTAs */}
            <div className="space-y-8">
              <h1 className="text-brand-hero">
                Build Exceptional Teams with
                <span className="text-brand-primary"> Strategic </span>
                Talent Partnership
              </h1>
              <p className="text-brand-subheading max-w-xl">
                Where exceptional talent meets visionary companies. We don't just fill positions – we create career trajectories and organizational success stories that define industries.
              </p>
            </div>

            {/* Right Visual */}
            <div className="relative animate-slide-up">
              <div className="relative">
                {/* Main Visual Container */}
                <div className="bg-card rounded-2xl p-8 shadow-2xl border border-border">
                  <div className="space-y-6">
                    {/* Success Story Preview */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-elevation rounded-full flex items-center justify-center">
                        <Icon name="Trophy" size={24} className="text-primary" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Latest Success</h3>
                        <p className="text-sm text-muted-foreground">Senior Developer → Tech Lead</p>
                      </div>
                    </div>

                    {/* Progress Indicators */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Profile Match</span>
                        <span className="text-sm font-medium text-success">98%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-elevation h-2 rounded-full w-[98%]"></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Interview Success</span>
                        <span className="text-sm font-medium text-success">100%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white border border-border rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Icon name="ArrowUp" size={24} className="text-primary" strokeWidth={2.5} />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <Icon name="Star" size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;