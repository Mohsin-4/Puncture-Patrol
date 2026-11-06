"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustIndicators from "../components/TrustIndicators";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import TyreSizeGuide from "../components/TyreSizeGuide";
import AreasCovered from "../components/AreasCovered";
import CustomerReviews from "../components/CustomerReviews";
import BookingForm from "../components/BookingForm";
import EmergencyCTA from "../components/EmergencyCTA";
import Footer from "../components/Footer";
import EmergencyFloatingBar from "../components/EmergencyFloatingBar";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState("");

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Sticky Header & Emergency Dispatch Bar */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust Indicators Section */}
        <TrustIndicators />

        {/* 4. Our Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 5. How It Works Section */}
        <HowItWorks />

        {/* 6. Why Choose Puncture Patrol Section */}
        <WhyChooseUs />

        {/* 7. Interactive Tyre Size Sidewall Decoding Guide */}
        <TyreSizeGuide />

        {/* 8. Areas We Cover Section */}
        <AreasCovered />

        {/* 9. Customer Testimonials Section */}
        <CustomerReviews />

        {/* 10. Interactive Booking Form Section */}
        <BookingForm selectedServiceFromParent={selectedService} />

        {/* 11. Full-Width Emergency CTA Section */}
        <EmergencyCTA />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Mobile Floating Emergency Contact Bar */}
      <EmergencyFloatingBar />
    </div>
  );
}

