import React from 'react';
import Icon from '../AppIcon';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const pathname = location?.pathname || '';

  const quickLinks = [
    { name: 'Home', path: '/homepage' },
    { name: 'Industries', path: '/industries-we-serve' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'Executive Search', path: '/services/ExecutiveSearch' },
    { name: 'Senior & Mid Level Hiring', path: '/services/SeniorHiring' },
    { name: 'International Hiring', path: '/services/International' },
    { name: 'RPO Solutions', path: '/services/RPO' },
    { name: 'GCC Hiring', path: '/services/GCCHiring' },
  ];

  const isHomeActive = pathname === '/homepage' || pathname === '/';
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-elevation rounded-lg flex items-center justify-center">
                <img
                  src="/assets/images/Logo.png"
                  alt="NorthStep"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm md:text-base font-bold leading-tight sm:leading-none">NorthStep</h3>
                <p className="text-xs sm:text-sm md:text-base font-bold leading-tight sm:leading-none -mt-0 sm:-mt-0.5 md:-mt-1 text-background/80">Global</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Strategic talent partnerships that transform careers and organizations. Your next step north starts here.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/northstep-global-7b1274397/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-background/60 hover:text-background">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="https://www.instagram.com/northstepglobal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-background/60 hover:text-background">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="https://www.youtube.com/@northstep" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-background/60 hover:text-background">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => {
                const isActive = l.path === '/homepage' ? isHomeActive : pathname === l.path;
                return (
                  <li key={l.path}>
                    {isActive ? (
                      <span aria-current="page" className="text-background/60 cursor-default">
                        {l.name}
                      </span>
                    ) : (
                      <Link to={l.path} className="text-background/80 hover:text-primary transition-colors">
                        {l.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-sm font-semibold mb-2">Services</h5>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {servicesLinks.map((l) => {
                const isActive = pathname.startsWith(l.path);
                return isActive ? (
                  <span key={l.path} aria-current="page" className="text-background/60 cursor-default">
                    {l.name}
                  </span>
                ) : (
                  <Link key={l.path} to={l.path} className="text-background/80 hover:text-primary transition-colors">
                    {l.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>+91 98711 59600</li>
              <li>contact@northstep.com</li>
              <li> Noida, Uttar Pradesh </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-background/60">© {new Date()?.getFullYear()} NorthStep Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;