"use client";

import React, { useState } from "react";
import {
  Phone,
  Calendar,
  Clock,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Zap,
  ArrowRight
} from "lucide-react";

export default function Hero() {
  const [showTyreHelp, setShowTyreHelp] = useState(false);

  const handleBookClick = (e) => {
    e.preventDefault();
    const form = document.querySelector("#booking-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-navy-800 text-white overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b-4 border-coral"
    >
      {/* Subtle modern patterned background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E6534B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-coral/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -mb-20 w-80 h-80 bg-navy-500/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Supporting text, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 24/7 Availability Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy-900/90 border border-coral/40 shadow-inner">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-80"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-coral"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-white">
                24/7 Emergency Dispatch Available Across Scotland
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
              24/7 Emergency Mobile Tyre Service{" "}
              <span className="text-coral underline decoration-coral/40 decoration-wavy underline-offset-8">
                Across Scotland
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Flat tyre? Puncture? Unexpected breakdown? Puncture Patrol brings professional mobile tyre fitting and repair directly to your location, whenever you need us.
            </p>

            {/* Quick trust bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0" />
                <span>Home, Workplace & Roadside Callouts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0" />
                <span>Average 30–60 Minute Rapid Arrival</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0" />
                <span>All Major Tyre Sizes & Brands in Stock</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0" />
                <span>Laser Wheel Balancing Included Free</span>
              </div>
            </div>

            {/* CTAs: Call Now & Book Online */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:07700900824"
                className="group px-7 py-4 rounded-xl bg-coral hover:bg-coral-600 text-white font-extrabold text-base sm:text-lg shadow-coral-glow hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 border-2 border-coral"
              >
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-semibold text-coral-100 uppercase tracking-wider leading-none">
                    Immediate Roadside Help
                  </div>
                  <div className="text-lg leading-tight">Call: 07700 900 824</div>
                </div>
              </a>

              <a
                href="#booking-form"
                onClick={handleBookClick}
                className="px-7 py-4 rounded-xl bg-navy-900/90 hover:bg-navy-950 text-white font-bold text-base sm:text-lg border-2 border-slate-600 hover:border-white transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-5 h-5 text-coral" />
                <span>Book Service Online</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Quick helper tip toggle */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowTyreHelp(!showTyreHelp)}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-coral transition-colors underline underline-offset-4"
              >
                <HelpCircle className="w-4 h-4 text-coral" />
                <span>Not sure what tyre size you need? Click for a 10-second guide</span>
              </button>

              {showTyreHelp && (
                <div className="mt-3 p-4 rounded-xl bg-navy-900/95 border border-coral/30 text-xs text-slate-200 shadow-xl space-y-2 animate-in fade-in duration-200">
                  <div className="font-bold text-coral text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>How to find your tyre size on the sidewall:</span>
                  </div>
                  <p>
                    Look for raised lettering on the outside tyre wall like:{" "}
                    <strong className="text-white bg-navy-800 px-2 py-0.5 rounded border border-coral/40 font-mono text-sm">
                      205 / 55 R16 91V
                    </strong>
                  </p>
                  <p className="text-slate-400">
                    • <strong>205</strong>: Tyre width (mm) &nbsp;|&nbsp;
                    • <strong>55</strong>: Profile aspect ratio &nbsp;|&nbsp;
                    • <strong>R16</strong>: Rim diameter in inches &nbsp;|&nbsp;
                    • <strong>91V</strong>: Load and speed index.
                  </p>
                  <p className="text-coral-200 font-medium">
                    Can&apos;t read it? Just tell our phone operator your vehicle registration plate and we will verify the exact tyre match!
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Visual Emergency Dispatch Card & Realistic Mobile Unit Graphic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card */}
              <div className="bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950 p-6 sm:p-7 rounded-2xl border-2 border-slate-700/80 shadow-2xl relative overflow-hidden">
                
                {/* Header of Dispatch Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Live Scottish Dispatch Grid
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-coral/20 text-coral font-bold uppercase border border-coral/30">
                    24/7 Standing By
                  </span>
                </div>

                {/* Dispatch metrics */}
                <div className="grid grid-cols-2 gap-3 my-5">
                  <div className="bg-navy-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <div className="text-[11px] text-slate-400 font-medium">Est. Arrival Time</div>
                    <div className="text-xl font-black text-white mt-0.5 flex items-center gap-1">
                      <Clock className="w-4 h-4 text-coral" />
                      <span>30–60 Min</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">Direct motorway & hub route</div>
                  </div>

                  <div className="bg-navy-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <div className="text-[11px] text-slate-400 font-medium">Active Coverage</div>
                    <div className="text-xl font-black text-white mt-0.5 flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-coral" />
                      <span>All Scotland</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">Glasgow, Edinburgh & beyond</div>
                  </div>
                </div>

                {/* Mobile Workshop Illustration / Spec Showcase */}
                <div className="bg-navy-800/50 rounded-xl p-4 border border-slate-700/60 space-y-3">
                  <div className="text-xs font-bold text-slate-200 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-coral" />
                    <span>Fully-Equipped Rapid Response Mobile Vans</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 flex-shrink-0" />
                      <span><strong>Onboard Pneumatics & Demounters:</strong> Zero wheel scratch guarantee</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 flex-shrink-0" />
                      <span><strong>Locking Wheel Nut Keys:</strong> Specialist extraction tooling carried</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 flex-shrink-0" />
                      <span><strong>Card Payment Terminals:</strong> Pay securely roadside via contactless or chip & PIN</span>
                    </div>
                  </div>
                </div>

                {/* Instant Hotline Callout Box */}
                <div className="mt-5 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">Emergency Roadside Coordinator</div>
                      <div className="text-base font-bold text-white">Instant Callout Line</div>
                    </div>
                    <a
                      href="tel:07700900824"
                      className="px-4 py-2 rounded-lg bg-coral hover:bg-coral-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Tap to Call</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Decorative badge floating outside */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white text-navy-800 px-4 py-3 rounded-xl shadow-2xl border-2 border-navy-800 items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-coral text-white flex items-center justify-center font-black">
                  100%
                </div>
                <div className="text-xs">
                  <div className="font-extrabold text-navy-800 uppercase">Mobile Convenience</div>
                  <div className="text-surface-muted font-medium">We come to you — No towing fees</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

