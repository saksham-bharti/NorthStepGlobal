import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import IndustriesWeServe from './pages/industries-we-serve';
import ContactPage from './pages/contact';
import Homepage from './pages/homepage';
import ExecutiveSearch from './pages/services/ExecutiveSearch';
import SeniorHiring from './pages/services/SeniorHiring';
import International from './pages/services/International';
import RPO from './pages/services/RPO';
import GCCHiring from './pages/services/GCCHiring';

// Animated routes component
const AnimatedRoutes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 0.98
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen"
      >
        <RouterRoutes location={location}>
          {/* Define your route here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/industries-we-serve" element={<IndustriesWeServe />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Service Pages */}
          <Route path="/services/ExecutiveSearch" element={<ExecutiveSearch />} />
          <Route path="/services/SeniorHiring" element={<SeniorHiring />} />
          <Route path="/services/International" element={<International />} />
          <Route path="/services/RPO" element={<RPO />} />
          <Route path="/services/GCCHiring" element={<GCCHiring />} />

          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </motion.div>
    </AnimatePresence>
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <AnimatedRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;