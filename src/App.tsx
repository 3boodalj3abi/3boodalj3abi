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

export default function App() {
  const [selectedVehicleId, setSelectedVehicleId] = useState('');

  const handleSelectVehicle = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
  };

  return (
    <div className="min-h-screen bg-luxury-navy text-white selection:bg-luxury-gold selection:text-luxury-navy font-sans antialiased overflow-x-hidden">
      
      {/* Premium Ambient Background Accents */}
      <div className="absolute top-0 right-0 left-0 h-[600px] bg-gradient-to-b from-luxury-navy-light/10 to-transparent pointer-events-none z-0" />

      {/* Modern Fixed Navbar */}
      <Navbar />

      {/* Brand Hero Welcome Section */}
      <Hero />

      {/* Brand Core Strengths / Features */}
      <Features />

      {/* Fleet Showcase Cards & Filtering */}
      <Fleet onSelectVehicle={handleSelectVehicle} />

      {/* Interactive Booking Calculator & Request Flow */}
      <BookingForm selectedVehicleId={selectedVehicleId} />

      {/* Why Choose Us & Saudi Coverage */}
      <WhyChooseUs />

      {/* Company Corporate About Us */}
      <AboutUs />

      {/* Customer Feedback & Client Reviews */}
      <Testimonials />

      {/* Accordion FAQs & Terms */}
      <FAQ />

      {/* Sitemap & Contact Block Footer */}
      <Footer />

      {/* Floating Speed Dials (Call & WhatsApp) */}
      <FloatingActions />

    </div>
  );
}
