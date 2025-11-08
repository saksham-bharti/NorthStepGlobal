import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  const contactMethods = [
    {
      method: 'Phone',
      value: '+91 98711 59600',
      icon: 'Phone',
      description: 'Speak directly with our team',
      link: 'tel:+919871159600'
    },
    {
      method: 'Email',
      value: 'contact@north-step.com',
      icon: 'Mail',
      description: 'Send us your questions',
      link: 'mailto:contact@north-step.com'
    },
    {
      method: 'Office',
      value:  'CoWorkZen 6th Floor, Alphathum, Tower C, Sector 90, Noida, Uttar Pradesh 201304',
      icon: 'MapPin',
      description: 'Visit our headquarters',
      link: 'https://maps.google.com?q=28.5132195,77.4079183'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      className="py-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Contact Information */}
        <motion.div
          className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-center mb-8"
            variants={itemVariants}
          >
            <h3 className="text-heading-xl text-foreground mb-2">
              Get in Touch
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactMethods?.map((contact, index) => (
              <motion.a
                key={index}
                href={contact?.link}
                target={contact?.method === 'Office' ? '_blank' : '_self'}
                rel={contact?.method === 'Office' ? 'noopener noreferrer' : undefined}
                className="text-center group cursor-pointer block"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-elevation-subtle rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  variants={pulseVariants}
                  animate="pulse"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <Icon name={contact?.icon} size={24} className="text-primary" />
                </motion.div>
                <h4 className="text-ui-lg font-semibold text-foreground mb-1">
                  {contact?.method}
                </h4>
                <p className="text-ui-md text-primary font-medium mb-2 group-hover:underline transition-all duration-200">
                  {contact?.value}
                </p>
                <p className="text-body-sm text-muted-foreground">
                  {contact?.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Emergency Contact */}
          <motion.div
            className="mt-8 pt-8 border-t border-border text-center"
            variants={itemVariants}
          >
            <motion.a
              href="tel:+919871159600"
              className="inline-flex items-center space-x-2 bg-warning/10 px-4 py-2 rounded-full hover:bg-warning/20 transition-all duration-300 cursor-pointer group"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(245, 158, 11, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                variants={pulseVariants}
                animate="pulse"
              >
                <Icon name="Clock" size={16} className="text-warning" />
              </motion.div>
              <span className="text-ui-sm font-medium text-warning group-hover:underline">
                Urgent Hiring Needs? Call us 24/7 at +91 98711 59600
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="mt-10 text-center"
          variants={itemVariants}
        >
          <div className="max-w-2xl mx-auto">
            <motion.p
              className="text-lg text-foreground font-medium mb-4"
              variants={itemVariants}
            >
              "Your next breakthrough is just one conversation away."
            </motion.p>
            <motion.p
              className="text-muted-foreground"
              variants={itemVariants}
            >
              Join the thousands of professionals and companies who have transformed their futures with NorthStep.
              Let's discuss how we can help you achieve your goals.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;