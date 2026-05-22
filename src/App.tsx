/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Fleet from './components/Fleet';
import BookingForm from './components/BookingForm';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import LegalModals from './components/LegalModals';
import SEODirectory from './components/SEODirectory';

export default function App() {
  const [selectedVehicleId, setSelectedVehicleId] = useState('');
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  const handleSelectVehicle = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
  };

  const handleOpenLegal = (type: 'privacy' | 'terms' | 'refund') => {
    setActiveLegalModal(type);
  };

  return (
    <div className="min-h-screen bg-luxury-navy text-white selection:bg-luxury-gold selection:text-luxury-navy font-sans antialiased overflow-x-hidden">
      
      {/* Premium Ambient Background Accents */}
      <div className="absolute top-0 right-0 left-0 h-[600px] bg-gradient-to-b from-luxury-navy-light/10 to-transparent pointer-events-none z-0" />

      {/* Modern Fixed Navbar */}
      <Navbar />

      {/* Brand Hero Welcome Section */}
      <Hero />

      {/* Fleet Showcase Cards & Filtering */}
      <Fleet onSelectVehicle={handleSelectVehicle} />

      {/* Brand Core Strengths / Features */}
      <Features />

      {/* Interactive Booking Calculator & Request Flow */}
      <BookingForm selectedVehicleId={selectedVehicleId} onOpenLegal={handleOpenLegal} />

      {/* Why Choose Us & Saudi Coverage */}
      <WhyChooseUs />

      {/* Company Corporate About Us */}
      <AboutUs />

      {/* Customer Feedback & Client Reviews */}
      <Testimonials />

      {/* Accordion FAQs & Terms */}
      <FAQ />

      {/* Structured SEO Index & Directory Mapping for Saudi Regions (500+ SEO variations) */}
      <SEODirectory />

      {/* Sitemap & Contact Block Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Floating Speed Dials (Call & WhatsApp) */}
      <FloatingActions />

      {/* Legal Info Compliance Modals (Google Ads required) */}
      <LegalModals activeModal={activeLegalModal} onClose={() => setActiveLegalModal(null)} />

    </div>
  );
}
