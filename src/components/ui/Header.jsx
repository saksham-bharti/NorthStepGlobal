import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 lg:h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link
            to="/homepage"
            className="flex items-center space-x-3 group"
            onClick={closeMobileMenu}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-elevation rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.img
                  src="/assets/images/Logo.png"
                  alt="Description"
                  className="w-full h-full object-cover rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h1
                className="text-xs sm:text-sm md:text-base font-bold leading-tight sm:leading-none text-foreground"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                NorthStep
              </motion.h1>
              <motion.p
                className="text-xs sm:text-sm md:text-base font-bold leading-tight sm:leading-none text-foreground -mt-0 sm:-mt-0.5 md:-mt-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Global
              </motion.p>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden lg:flex items-center justify-end space-x-1 flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

            {/* Services Dropdown */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 elevation-hover inline-flex items-center gap-2 whitespace-nowrap ${
                  isInServices ? 'bg-primary text-primary-foreground shadow-brand' : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Services</span>
                <motion.div
                  animate={{ rotate: isInServices ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="ChevronDown" size={16} />
                </motion.div>
              </motion.button>
              <motion.div
                className="absolute left-0 top-full w-56 rounded-lg border border-border bg-white shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 0, y: -10, scale: 0.95 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {servicesItems.map((svc, index) => (
                  <motion.div
                    key={svc.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={svc.path}
                      className={`block px-4 py-2 text-sm rounded-md transition-colors ${
                        isActivePath(svc.path)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                      }`}
                    >
                      {svc.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Industries */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/industries-we-serve"
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 elevation-hover whitespace-nowrap inline-flex items-center gap-2 ${
                  isActivePath('/industries-we-serve')
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="Building2" size={16} />
                </motion.div>
                Industries
              </Link>
            </motion.div>

            {/* Contact us */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/contact"
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 elevation-hover whitespace-nowrap inline-flex items-center gap-2 ${
                  isActivePath('/contact')
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="Mail" size={16} />
                </motion.div>
                Contact Us
              </Link>
            </motion.div>

            {/* Home */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/homepage"
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 elevation-hover whitespace-nowrap inline-flex items-center gap-2 ${
                  isHomeActive
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="Home" size={16} />
                </motion.div>
                Home
              </Link>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon
                name={isMobileMenuOpen ? 'X' : 'Menu'}
                size={24}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-border bg-white overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.nav
                className="px-4 py-4 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navigationItems?.map((item, index) => (
                  <motion.div
                    key={item?.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item?.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActivePath(item?.path)
                          ? 'bg-primary text-primary-foreground shadow-brand'
                          : 'text-foreground hover:text-primary hover:bg-muted'
                      }`}
                    >
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon name={item?.icon} size={20} />
                      </motion.div>
                      <span>{item?.name}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Services (mobile) */}
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="px-4 py-2 text-xs uppercase tracking-wide text-muted-foreground">Services</div>
                  <div className="space-y-1">
                    {servicesItems.map((svc, index) => (
                      <motion.div
                        key={svc.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                      >
                        <Link
                          to={svc.path}
                          onClick={closeMobileMenu}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                            isActivePath(svc.path)
                              ? 'bg-primary text-primary-foreground'
                              : 'text-foreground hover:text-primary hover:bg-muted'
                          }`}
                        >
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon name="ArrowRight" size={18} />
                          </motion.div>
                          <span>{svc.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Mobile CTA removed per new spec */}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </motion.header>
    );
  };

export default Header;