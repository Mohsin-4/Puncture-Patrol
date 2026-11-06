import React from "react";
import { Clock, MapPin, ShieldAlert, Award, ThumbsUp, Wrench, CheckCircle } from "lucide-react";

export default function TrustIndicators() {
  const trustItems = [
    {
      id: "available-247",
      title: "Available 24/7",
      highlight: "Day & Night Dispatch",
      description: "Round-the-clock emergency callouts 365 days a year across Scotland. No bank holiday closures.",
      icon: Clock,
      stats: "24/7/365",
    },
    {
      id: "mobile-service",
      title: "Mobile Service at Your Location",
      highlight: "Home, Work or Roadside",
      description: "No towing trucks or garage queues. Our self-contained mobile workshops come directly to you.",
      icon: MapPin,
      stats: "100% Mobile",
    },
    {
      id: "emergency-assistance",
      title: "Emergency Tyre Assistance",
      highlight: "Rapid 30–60 Min Arrival",
      description: "Priority dispatch for dangerous motorway hard shoulders, trunk roads, and unlit rural routes.",
      icon: ShieldAlert,
      stats: "30-60m Avg.",
    },
    {
      id: "professional-fitting",
      title: "Professional Tyre Fitting",
      highlight: "Certified Technicians",
      description: "Latest pneumatic mounting machines, computerized dynamic balancing, and calibrated torque checks.",
      icon: Award,
      stats: "BSAU159 Standard",
    },
  ];

  return (
    <section className="bg-surface-light py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white p-6 rounded-2xl border-2 border-gray-200/80 hover:border-coral transition-all duration-300 shadow-sm hover:shadow-card hover:-translate-y-1"
              >
                {/* Header of card with icon and stat badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-coral-50 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-navy-800 group-hover:text-coral transition-colors" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-navy-100 text-navy-800 group-hover:bg-coral-100 group-hover:text-coral transition-colors">
                    {item.stats}
                  </span>
                </div>

                {/* Title and subtitle */}
                <h3 className="text-lg font-bold text-navy-800 group-hover:text-coral transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-coral uppercase tracking-wider mt-0.5 mb-2">
                  {item.highlight}
                </div>

                {/* Description */}
                <p className="text-sm text-surface-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick credibility bar */}
        <div className="mt-8 pt-6 border-t border-gray-200/70 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-surface-muted">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-coral" />
            <span>Fully Insured & Roadside Recovery Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-coral" />
            <span>All Premium, Mid-Range & Budget Tyres Available</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-coral" />
            <span>Locking Wheel Nut Removal Tooling on Board</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-coral" />
            <span>Eco-Friendly Old Tyre Disposal & Recycling</span>
          </div>
        </div>

      </div>
    </section>
  );
}

