import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top hero: image only (no text) */}
      <section className="relative bg-background pt-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="relative h-56 sm:h-72 md:h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.006 }}   //image transition
            transition={{ duration: 0.3 }}
          >
            {/* Background Image */}
            <motion.img
              src="/assets/images/home_bg.png"
              alt="NorthStep background"
              className="w-full h-full object-cover object-center"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-card/80 to-muted/85"></div>
            {/* Background Pattern */}
            <div className="absolute inset-0 north-arrow-bg opacity-20"></div>
            {/* Animated Background Elements */}
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-elevation rounded-full opacity-10"
              variants={floatingVariants}
              animate="float"
              style={{ animationDelay: '0s' }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full opacity-20"
              variants={floatingVariants}
              animate="float"
              style={{ animationDelay: '1s' }}
            />
            <motion.div
              className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full opacity-15"
              variants={floatingVariants}
              animate="float"
              style={{ animationDelay: '2s' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Content below the image */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <motion.h1
              className="text-display-md sm:text-display-lg lg:text-display-xl text-foreground mb-8"
              variants={itemVariants}
            >
              Build Exceptional Teams with
              <motion.span
                className="text-primary"
                initial={{ backgroundSize: "0% 100%" }}
                animate={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{
                  background: "linear-gradient(90deg, currentColor, currentColor)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                {" "}Strategic{" "}
              </motion.span>
              Talent Partnership
            </motion.h1>
            <motion.p
              className="text-body-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Northstep Global is where unparalleled talent meets pioneering companies. We go beyond recruitment, crafting strategic appointments that propel organizational success and shape the future of entire industries.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
export default HeroSection;