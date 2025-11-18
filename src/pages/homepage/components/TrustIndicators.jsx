import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {

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
    <section className="py-6 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Client Logos Carousel */}
        <div className="mb-0">
          <h3 className="text-center text-lg sm:text-xl font-semibold text-foreground mb-8">
            Comprehensive End-to-End Recruitment Solutions Across Industries
          </h3>
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {[...clientLogos, ...clientLogos]?.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="w-32 h-16 bg-card rounded-lg border border-border flex items-center justify-center p-4 group-hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-full bg-muted rounded flex items-center justify-center">
                      <span className="text-sm font-medium text-muted-foreground text-center">
                        {client?.name}
                      </span>
                    </div>
                  </div>
                  {client?.industry && (
                    <div className="text-center mt-2">
                      <span className="text-[14px] text-muted-foreground">
                        {client?.industry}
                      </span>
                    </div>
                  )}
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
      `}</style>
    </section>
  );
};

export default TrustIndicators;