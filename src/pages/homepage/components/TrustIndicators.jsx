import React from 'react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      className="py-6 bg-background"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Client Logos Carousel */}
        <div className="mb-0">
          <motion.h3
            className="text-center text-heading-lg text-foreground mb-8"
            variants={itemVariants}
          >
            Comprehensive End-to-End Recruitment Solutions Across Industries
          </motion.h3>
          <motion.div
            className="overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="flex animate-scroll space-x-12 items-center"
              whileHover={{ animationPlayState: "paused" }}
              transition={{ duration: 0.3 }}
            >
              {[...clientLogos, ...clientLogos]?.map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 group"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-32 h-16 bg-card rounded-lg border border-border flex items-center justify-center p-4 group-hover:shadow-lg transition-all duration-300">
                    <div className="w-full h-full bg-muted rounded flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300">
                      <span className="text-ui-xs font-medium text-muted-foreground text-center group-hover:text-primary transition-colors duration-300">
                        {client?.name}
                      </span>
                    </div>
                  </div>
                  {client?.industry && (
                    <div className="text-center mt-2">
                      <span className="text-ui-xs text-muted-foreground">
                        {client?.industry}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
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
    </motion.section>
  );
};

export default TrustIndicators;