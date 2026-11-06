import React from "react";
import { PhoneCall, MapPin, Truck, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Call Us",
      subtitle: "Contact our 24/7 team",
      description:
        "Phone our 24/7 Scottish hotline or submit a quick booking. Describe your tyre issue, vehicle model, and tyre size if known.",
      icon: PhoneCall,
      highlight: "24/7 Phone Support",
    },
    {
      step: "02",
      title: "Share Your Location",
      subtitle: "Tell us where you are stranded",
      description:
        "Provide your postcode, street name, motorway marker, or what3words address. We immediately dispatch the closest mobile van.",
      icon: MapPin,
      highlight: "Postcode or what3words",
    },
    {
      step: "03",
      title: "We Come to You",
      subtitle: "Professional mobile fitting",
      description:
        "Our certified technician arrives fully equipped with replacement tyres, fitting gear, and balancing tools to get you back on the road safely.",
      icon: Truck,
      highlight: "Fitted in 20-30 mins",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-surface-light border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Simple & Stress-Free Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-800 tracking-tight">
            How Puncture Patrol Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-muted leading-relaxed">
            No garage queues, no towing charges, no hassle. Three simple steps to get you back on the road safely anywhere in Scotland.
          </p>
        </div>

        {/* 3 Steps Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl p-8 border-2 border-gray-200/90 shadow-sm hover:shadow-card hover:border-coral transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Number Watermark / Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-navy-800 text-white flex items-center justify-center group-hover:bg-coral transition-colors shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-black text-gray-200 group-hover:text-coral/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="text-xs font-bold text-coral uppercase tracking-wider mb-1">
                    Step {item.step} • {item.subtitle}
                  </div>
                  <h3 className="text-2xl font-black text-navy-800 mb-3 group-hover:text-coral transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-surface-muted leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer Pill */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-navy-800 bg-navy-50 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                  <span className="text-xs font-semibold text-coral flex items-center gap-1">
                    <span>Quick & Easy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scottish Motorway & Roadside Safety Box */}
        <div className="mt-12 bg-navy-800 text-white rounded-2xl p-6 sm:p-8 border-2 border-coral/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-coral flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Motorway or Hard Shoulder Emergency? Stay Safe While Waiting
              </h4>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                If stranded on a motorway (like the M8, M74, or M90), turn on your hazard lights, exit the vehicle via the left passenger doors, and stand safely behind the roadside safety barrier while our patrol van is en route.
              </p>
            </div>
          </div>

          <a
            href="tel:07700900824"
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-coral hover:bg-coral-600 text-white font-extrabold text-sm text-center shadow-coral-glow transition-colors whitespace-nowrap flex-shrink-0"
          >
            Emergency Call: 07700 900 824
          </a>
        </div>

      </div>
    </section>
  );
}

