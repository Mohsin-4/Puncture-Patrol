"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Phone, Clock, MapPin, Menu, X, ChevronRight, ShieldCheck, Zap } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Areas Covered", href: "#areas-covered" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Emergency Info Bar */}
      <div className="bg-navy-950 text-white text-xs border-b border-navy-700/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          {/* Status & Coverage */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-400">Vans Active on Patrol</span>
              <span className="text-gray-400 hidden sm:inline">• Central Scotland & Major Motorways</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-coral" />
              <span>Avg. 30–60 Min Response</span>
            </div>
          </div>

          {/* Hotline & Action */}
          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden lg:inline text-gray-300">
              Need urgent roadside assistance?
            </span>
            <a
              href="tel:07700900824"
              className="inline-flex items-center gap-1.5 font-bold text-coral hover:text-coral-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>07700 900 824</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100"
            : "bg-white py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="focus:outline-none"
            >
              <Logo />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-semibold text-surface-dark hover:text-coral transition-colors duration-150 py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#booking-form"
                onClick={(e) => handleLinkClick(e, "#booking-form")}
                className="px-4 py-2.5 rounded-lg border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white text-sm font-bold transition-all duration-200"
              >
                Book Online
              </a>
              <a
                href="tel:07700900824"
                className="relative group px-5 py-2.5 rounded-lg bg-coral hover:bg-coral-600 text-white text-sm font-bold shadow-md hover:shadow-coral-glow transition-all duration-200 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <Phone className="w-4 h-4" />
                <span>Call Now 24/7</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-lg text-navy-800 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-coral" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-lg px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-surface-dark hover:bg-navy-50 hover:text-coral transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="tel:07700900824"
                className="w-full py-3.5 px-4 rounded-xl bg-coral hover:bg-coral-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span>Call 24/7 Hotline: 07700 900 824</span>
              </a>
              <a
                href="#booking-form"
                onClick={(e) => handleLinkClick(e, "#booking-form")}
                className="w-full py-3 px-4 rounded-xl border-2 border-navy-800 text-navy-800 font-bold text-center hover:bg-navy-50"
              >
                Request Booking Online
              </a>
            </div>

            <div className="mt-4 p-3 bg-navy-50 rounded-lg flex items-center gap-2 text-xs text-navy-800">
              <ShieldCheck className="w-4 h-4 text-coral flex-shrink-0" />
              <span>Covering Glasgow, Edinburgh, Stirling, Dundee & all Central Scotland.</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

