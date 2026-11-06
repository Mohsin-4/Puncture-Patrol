"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle, Info, ChevronRight } from "lucide-react";

export default function TyreSizeGuide() {
  const [selectedPart, setSelectedPart] = useState("width");

  const tyreParts = {
    width: {
      code: "205",
      title: "Tyre Width (mm)",
      description: "The width of the tyre in millimetres from sidewall to sidewall across the tread surface. Example: 205mm.",
      badge: "Width"
    },
    profile: {
      code: "55",
      title: "Profile / Aspect Ratio (%)",
      description: "The height of the tyre sidewall as a percentage of the width. In this example, the sidewall height is 55% of 205mm.",
      badge: "Profile"
    },
    construction: {
      code: "R",
      title: "Radial Construction",
      description: "'R' stands for Radial, which is the internal fabric ply construction standard used in almost all modern passenger vehicle tyres.",
      badge: "Type"
    },
    rim: {
      code: "16",
      title: "Rim Diameter (Inches)",
      description: "The diameter of the wheel rim that the tyre is engineered to fit, measured diagonally in inches. Example: 16 inches.",
      badge: "Diameter"
    },
    load: {
      code: "91",
      title: "Load Index",
      description: "A numerical code specifying the maximum load carrying capacity of the tyre at maximum safe inflation pressure (91 = 615 kg).",
      badge: "Capacity"
    },
    speed: {
      code: "V",
      title: "Speed Rating",
      description: "An alphabetical rating indicating the maximum legal speed the tyre is approved for (V = up to 149 mph / 240 km/h).",
      badge: "Speed"
    }
  };

  return (
    <section className="py-16 bg-navy-900 text-white border-b border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Context & Interactive Decoder */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800 border border-coral/40 text-coral text-xs font-bold uppercase tracking-wider">
              <Info className="w-3.5 h-3.5" />
              <span>Need Help Finding Your Tyre Size?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              How to Read Your Tyre Sidewall Markings
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When booking online or calling our 24/7 Scottish emergency dispatch, having your tyre size ensures we arrive with the exact tyre required. You can find this sequence stamped directly on the rubber outer wall of your tyre.
            </p>

            {/* Interactive Visual Tyre Code Banner */}
            <div className="bg-navy-950 p-4 sm:p-6 rounded-2xl border-2 border-slate-700 shadow-xl">
              <div className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider text-center">
                Click any section below to decode:
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-lg sm:text-2xl font-black font-mono">
                {/* 205 */}
                <button
                  type="button"
                  onClick={() => setSelectedPart("width")}
                  className={`px-3 py-2 rounded-xl transition-all ${
                    selectedPart === "width"
                      ? "bg-coral text-white scale-105 shadow-coral-glow"
                      : "bg-navy-800 text-slate-200 hover:bg-navy-700"
                  }`}
                >
                  205
                  <span className="block text-[10px] font-sans font-medium text-coral-100">Width</span>
                </button>

                <span className="text-slate-500 font-sans">/</span>

                {/* 55 */}
                <button
                  type="button"
                  onClick={() => setSelectedPart("profile")}
                  className={`px-3 py-2 rounded-xl transition-all ${
                    selectedPart === "profile"
                      ? "bg-coral text-white scale-105 shadow-coral-glow"
                      : "bg-navy-800 text-slate-200 hover:bg-navy-700"
                  }`}
                >
                  55
                  <span className="block text-[10px] font-sans font-medium text-coral-100">Profile</span>
                </button>

                {/* R */}
                <button
                  type="button"
                  onClick={() => setSelectedPart("construction")}
                  className={`px-3 py-2 rounded-xl transition-all ${
                    selectedPart === "construction"
                      ? "bg-coral text-white scale-105 shadow-coral-glow"
                      : "bg-navy-800 text-slate-200 hover:bg-navy-700"
                  }`}
                >
                  R
                  <span className="block text-[10px] font-sans font-medium text-coral-100">Type</span>
                </button>

                {/* 16 */}
                <button
                  type="button"
                  onClick={() => setSelectedPart("rim")}
                  className={`px-3 py-2 rounded-xl transition-all ${
                    selectedPart === "rim"
                      ? "bg-coral text-white scale-105 shadow-coral-glow"
                      : "bg-navy-800 text-slate-200 hover:bg-navy-700"
                  }`}
                >
                  16
                  <span className="block text-[10px] font-sans font-medium text-coral-100">Rim</span>
                </button>

                {/* 91 */}
                <button
                  type="button"
                  onClick={() => setSelectedPart("load")}
                  className={`px-3 py-2 rounded-xl transition-all ${
                    selectedPart === "load"
                      ? "bg-coral text-white scale-105 shadow-coral-glow"
                      : "bg-navy-800 text-slate-200 hover:bg-navy-700"
                  }`}
                >
                  91
                  <span className="block text-[10px] font-sans font-medium text-coral-100">Load</span>
                </button>

                {/* V */}
                <button
                  type="button"
                  onClick={() => setSelectedPart("speed")}
                  className={`px-3 py-2 rounded-xl transition-all ${
                    selectedPart === "speed"
                      ? "bg-coral text-white scale-105 shadow-coral-glow"
                      : "bg-navy-800 text-slate-200 hover:bg-navy-700"
                  }`}
                >
                  V
                  <span className="block text-[10px] font-sans font-medium text-coral-100">Speed</span>
                </button>
              </div>

              {/* Dynamic Description Box */}
              <div className="mt-5 p-4 rounded-xl bg-navy-900 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-coral font-bold text-base">
                    {tyreParts[selectedPart].title} ({tyreParts[selectedPart].code})
                  </h4>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-coral/20 text-coral">
                    {tyreParts[selectedPart].badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  {tyreParts[selectedPart].description}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Alternative Vehicle Reg Lookup Advice */}
          <div className="lg:col-span-5 bg-navy-800 p-6 sm:p-8 rounded-3xl border-2 border-slate-700 space-y-5">
            <div className="w-12 h-12 rounded-xl bg-coral flex items-center justify-center text-white">
              <HelpCircle className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white">
              Can&apos;t Read Your Tyre Sidewall?
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Don&apos;t worry if it&apos;s dark, raining, or the sidewall lettering has worn off. You can simply provide your <strong>UK Vehicle Registration Number</strong> when you call our dispatch desk.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                <span>Our DVLA registration database looks up OEM tyre specifications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                <span>We confirm alloy vs steel rim fitments before leaving the depot</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                <span>Technicians carry multiple options in the van just in case</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="tel:07700900824"
                className="w-full py-3.5 px-4 rounded-xl bg-coral hover:bg-coral-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-coral-glow transition-all"
              >
                <span>Call Hotline for Free Tyre Verification</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

