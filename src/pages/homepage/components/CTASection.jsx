import React from 'react';
import Icon from '../../../components/AppIcon';
import { useIntersectionObserver } from '../../../utils/useIntersectionObserver';

const CTASection = () => {
  const [contactRef, contactInView] = useIntersectionObserver();
  const [messageRef, messageInView] = useIntersectionObserver();

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
      value:  'CoWorkZen 6th Floor, Tower C, Sector 90, Noida, Uttar Pradesh',
      icon: 'MapPin',
      description: 'Visit our office',
      link: 'https://maps.google.com?q=28.5132195,77.4079183'
    }
  ];

  return (
    <section className="py-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-float delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">

        {/* Contact Information */}
        <div ref={contactRef} className={`bg-card rounded-2xl p-6 shadow-lg border border-border transition-all duration-1000 ${
          contactInView ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}>
          <div className="text-center mb-0">
            <h3 className={`text-3xl lg:text-4xl font-bold text-foreground mb-2 transition-all duration-1000 delay-300 ${
              contactInView ? 'animate-slide-up' : 'opacity-0 translate-y-8'
            }`}>
              Get in Touch
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactMethods?.map((contact, index) => (
              <a
                key={index}
                href={contact?.link}
                target={contact?.method === 'Office' ? '_blank' : '_self'}
                rel={contact?.method === 'Office' ? 'noopener noreferrer' : undefined}
                className={`text-center group cursor-pointer block transition-all duration-1000 ${
                  contactInView ? 'animate-stagger-fade-in' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-elevation-subtle rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-brand">
                  <Icon name={contact?.icon} size={24} className="text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {contact?.method}
                </h4>
                <p className="text-[17px] text-primary font-medium mb-2 group-hover:underline group-hover:text-secondary transition-all duration-200">
                  {contact?.value}
                </p>
                <p className="text-[17px] text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {contact?.description}
                </p>

                {/* Hover effect underline */}
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out mx-auto mt-2"></div>
              </a>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className={`mt-8 pt-8 border-t border-border text-center transition-all duration-1000 delay-700 ${
            contactInView ? 'animate-fade-in-delay-2' : 'opacity-0'
          }`}>
            <a
              href="tel:+919871159600"
              className="group relative inline-flex items-center space-x-2 bg-warning/10 px-6 py-3 rounded-full hover:bg-warning/20 transition-all duration-300 cursor-pointer hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-warning/20 to-warning/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Icon name="Clock" size={16} className="text-warning relative z-10 animate-pulse-slow" />
              <span className="text-[16px] font-medium text-warning group-hover:underline relative z-10">
                Urgent Hiring Needs? Call us 24/7 at +91 98711 59600
              </span>
              <div className="absolute inset-0 rounded-full border-2 border-warning/30 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </a>
          </div>
        </div>

        {/* Final Message */}
        <div ref={messageRef} className={`mt-8 text-center transition-all duration-1000 delay-300 ${
          messageInView ? 'animate-slide-up' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <p className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 cursor-pointer">
                "Your next breakthrough is just one conversation away."
              </p>
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-700 ease-out mx-auto"></div>
            </div>
            <p className={`text-lg text-muted-foreground transition-all duration-1000 delay-500 ${
              messageInView ? 'animate-fade-in-delay' : 'opacity-0'
            }`}>
              Join the thousands of professionals and companies who have transformed their futures with NorthStep.
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;