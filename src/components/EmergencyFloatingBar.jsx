"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar, ShieldAlert } from "lucide-react";

export default function EmergencyFloatingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy-950/95 backdrop-blur-md border-t-2 border-coral p-3 shadow-2xl animate-in slide-in-from-bottom duration-200">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Call Hotline */}
        <a
          href="tel:07700900824"
          className="py-3 px-3 rounded-xl bg-coral hover:bg-coral-600 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-coral-glow transition-colors"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>Call 24/7</span>
        </a>

        {/* Book Service */}
        <a
          href="#booking-form"
          className="py-3 px-3 rounded-xl bg-white text-navy-800 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow transition-colors"
        >
          <Calendar className="w-4 h-4 text-coral" />
          <span>Book Van</span>
        </a>
      </div>
    </div>
  );
}

