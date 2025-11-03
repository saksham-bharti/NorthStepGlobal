import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
// Removed CTA Button usage per new header spec

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Industries', path: '/industries-we-serve', icon: 'Building2' },
    { name: 'Contact Us', path: '/contact', icon: 'Mail' },
  ];

  const servicesItems = [
    { name: 'Executive Search', path: '/services/ExecutiveSearch' },
    { name: 'Senior & Mid Level Hiring', path: '/services/SeniorHiring' },
    { name: 'International Hiring', path: '/services/International' },
    { name: 'RPO', path: '/services/RPO' },
    { name: 'GCC Hiring', path: '/services/GCCHiring' },
  ];

  const isActivePath = (path) => location?.pathname === path;
  const isInServices = location?.pathname?.startsWith('/services/');
  const isHomeActive = location?.pathname === '/homepage' || location?.pathname === '/';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 lg:h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group"
            onClick={closeMobileMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-elevation rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/assets/images/Logo.png" 
                  alt="Description" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div>
              <h1 className="text-xs sm:text-sm md:text-base font-bold leading-tight sm:leading-none text-foreground">
                NorthStep
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-bold leading-tight sm:leading-none text-foreground -mt-0 sm:-mt-0.5 md:-mt-1">
                Global
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1">
            {/* Home */}
            <Link
              to="/homepage"
              className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 elevation-hover whitespace-nowrap inline-flex items-center gap-2 ${
                isHomeActive
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'text-foreground hover:text-primary hover:bg-muted'
              }`}
            >
              <Icon name="Home" size={16} />
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 elevation-hover inline-flex items-center gap-2 whitespace-nowrap ${
                isInServices ? 'bg-primary text-primary-foreground shadow-brand' : 'text-foreground hover:text-primary hover:bg-muted'
              }`}>
                <span>Services</span>
                <Icon name="ChevronDown" size={16} />
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute left-0 top-full w-56 rounded-lg border border-border bg-white shadow-lg py-2">
                {servicesItems.map((svc) => (
                  <Link
                    key={svc.path}
                    to={svc.path}
                    className={`block px-4 py-2 text-sm rounded-md transition-colors ${
                      isActivePath(svc.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted hover:text-primary'
                    }`}
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries */}
            <Link
              to="/industries-we-serve"
              className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 elevation-hover whitespace-nowrap inline-flex items-center gap-2 ${
                isActivePath('/industries-we-serve')
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'text-foreground hover:text-primary hover:bg-muted'
              }`}
            >
              <Icon name="Building2" size={16} />
              Industries
            </Link>

            {/* Success Stories */}
            <Link
              to="/contact"
              className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 elevation-hover whitespace-nowrap inline-flex items-center gap-2 ${
                isActivePath('/contact')
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'text-foreground hover:text-primary hover:bg-muted'
              }`}
            >
              <Icon name="Mail" size={16} />
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? 'X' : 'Menu'} 
              size={24} 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-brand'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}

              {/* Services (mobile) */}
              <div className="pt-2">
                <div className="px-4 py-2 text-xs uppercase tracking-wide text-muted-foreground">Services</div>
                <div className="space-y-1">
                  {servicesItems.map((svc) => (
                    <Link
                      key={svc.path}
                      to={svc.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActivePath(svc.path)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:text-primary hover:bg-muted'
                      }`}
                    >
                      <Icon name="ArrowRight" size={18} />
                      <span>{svc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile CTA removed per new spec */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;