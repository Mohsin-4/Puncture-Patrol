import React from "react";
import { Phone, Calendar, ShieldAlert, ArrowRight, Zap } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="relative bg-navy-800 text-white py-16 sm:py-20 overflow-hidden border-t-4 border-b-4 border-coral">
      {/* Pattern & glow accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E6534B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-coral/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral/20 border border-coral text-coral-200 text-xs font-black uppercase tracking-wider mb-6">
          <Zap className="w-4 h-4 text-coral animate-pulse" />
          <span>24/7 Scottish Roadside & Driveway Response</span>
        </div>

        {/* Headings */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Stranded With a Flat Tyre?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Don&apos;t let a tyre problem ruin your journey. Contact Puncture Patrol for 24/7 mobile tyre assistance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="tel:07700900824"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-coral hover:bg-coral-600 text-white font-extrabold text-lg shadow-coral-glow transition-all duration-200 flex items-center justify-center gap-3 border-2 border-coral"
          >
            <Phone className="w-5 h-5 animate-bounce" />
            <span>Call Now: 07700 900 824</span>
          </a>

          <a
            href="#booking-form"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-950 text-white font-bold text-lg border-2 border-slate-600 hover:border-white transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5 text-coral" />
            <span>Book Online</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Bottom reassurance */}
        <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
          <span>• Average 30–60 Min Response</span>
          <span>• All Major Tyres In Stock</span>
          <span>• No Towing Required</span>
          <span>• Contactless Card Payments Accepted Roadside</span>
        </div>

      </div>
    </section>
  );
}

