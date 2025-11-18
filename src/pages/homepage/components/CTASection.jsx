import React from 'react';
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
      value:  'Sector 90, Noida, Uttar Pradesh 201304',
      icon: 'MapPin',
      description: 'Visit our headquarters',
      link: 'https://maps.google.com?q=28.5132195,77.4079183'
    }
  ];

  return (
    <section className="py-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Contact Information */}
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div className="text-center mb-0">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
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
                className="text-center group cursor-pointer block"
              >
                <div className="w-16 h-16 bg-gradient-elevation-subtle rounded-xl flex items-center justify-center mx-auto mb-4-2 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={contact?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {contact?.method}
                </h4>
                <p className="text-[17px] text-primary font-medium mb-2 group-hover:underline transition-all duration-200">
                  {contact?.value}
                </p>
                <p className="text-[17px] text-muted-foreground leading-relaxed">
                  {contact?.description}
                </p>
              </a>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <a
              href="tel:+919871159600"
              className="inline-flex items-center space-x-2 bg-warning/10 px-4 py-2 rounded-full hover:bg-warning/20 transition-all duration-300 cursor-pointer group"
            >
              <Icon name="Clock" size={16} className="text-warning" />
              <span className="text-[16px] font-medium text-warning group-hover:underline">
                Urgent Hiring Needs? Call us 24/7 at +91 98711 59600
              </span>
            </a>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-10 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl font-semibold text-foreground mb-4">
              "Your next breakthrough is just one conversation away."
            </p>
            <p className="text-lg text-muted-foreground">
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