import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';

import ScrollToTop from '@/components/ScrollToTop.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

import HomePage from '@/pages/HomePage.jsx';
import ServicesPage from '@/pages/ServicesPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';

// Service Detail Pages
import AviationConsultingPage from '@/pages/AviationConsultingPage.jsx';
import GroundHandlingPage from '@/pages/GroundHandlingPage.jsx';
import AircraftDealershipPage from '@/pages/AircraftDealershipPage.jsx';
import AviationTrainingPage from '@/pages/AviationTrainingPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="bottom-right" richColors />
      <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Services Routes */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/aviation-consulting" element={<AviationConsultingPage />} />
            <Route path="/services/ground-handling" element={<GroundHandlingPage />} />
            <Route path="/services/aircraft-dealership" element={<AircraftDealershipPage />} />
            {/* Audit & Assurance was merged into Aviation Consulting; keep old links working */}
            <Route path="/services/audit-assurance" element={<Navigate to="/services/aviation-consulting#audit-assurance" replace />} />
            <Route path="/services/aviation-training" element={<AviationTrainingPage />} />
            {/* Pickup Service was merged into Ground Handling; keep old links working */}
            <Route path="/services/pick-up-service" element={<Navigate to="/services/ground-handling" replace />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Catch-all 404 Route */}
            <Route path="*" element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-muted">
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h2>
                <p className="text-secondary mb-8">The requested page could not be located.</p>
                <a href="/" className="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-sm">
                  Return Home
                </a>
              </div>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;