import React from 'react';
import Icon from '../../../components/AppIcon';
import { useIntersectionObserver } from '../../../utils/useIntersectionObserver';

const TrustIndicators = () => {
  const [sectionRef, sectionInView] = useIntersectionObserver();

  const clientLogos = [
    { name: 'Building Material' },
    { name: 'Real Estate' },
    { name: 'Infrastructure & Transport' },
    { name: 'BFSI' },
    { name: 'IT services' },
    { name: 'Pharmaceuticals' },
    { name: 'Manufacturing & Production' },
    { name: 'Healthcare & Life sciences' },
    { name: 'Professional services' }
  ];

  return (
    <section ref={sectionRef} className="py-6 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-secondary rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-accent rounded-full animate-pulse-slow delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        {/* Client Logos Carousel */}
        <div className="mb-0">
          <h3 className={`text-center text-lg sm:text-xl font-semibold text-foreground mb-8 transition-all duration-1000 ${
            sectionInView ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}>
            Comprehensive End-to-End Recruitment Solutions Across Industries
          </h3>
          <div className={`overflow-hidden transition-all duration-1000 delay-300 ${
            sectionInView ? 'animate-fade-in-delay' : 'opacity-0'
          }`}>
            <div className="flex animate-scroll space-x-12 items-center hover:pause py-4">
              {[...clientLogos, ...clientLogos]?.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-32 h-16 bg-card rounded-lg border border-border flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-brand-hover group-hover:border-primary/50 ${
                    sectionInView ? 'animate-stagger-fade-in' : 'opacity-0'
                  }`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 rounded flex items-center justify-center group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300">
                      <span className="text-sm font-medium text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">
                        {client?.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustIndicators;