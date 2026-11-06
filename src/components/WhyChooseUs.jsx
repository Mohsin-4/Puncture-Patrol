import React from "react";
import {
  Clock,
  Car,
  Award,
  ShieldCheck,
  MapPin,
  Check,
  X,
  Sparkles,
  Zap
} from "lucide-react";

export default function WhyChooseUs() {
  const highlights = [
    {
      title: "24/7 Emergency Availability",
      description: "Punctures don't wait for business hours. Our Scottish dispatch centre and mobile units operate around the clock, 365 days a year.",
      icon: Clock,
    },
    {
      title: "Convenient Mobile Service",
      description: "We come directly to your driveway, workplace car park, or motorway breakdown location. No waiting rooms, no wasted time.",
      icon: Car,
    },
    {
      title: "Professional Assistance",
      description: "Our certified mobile technicians use the latest hydraulic bead breakers, laser wheel balancers, and torque calibrated wrenches.",
      icon: Award,
    },
    {
      title: "Reliable Tyre Solutions",
      description: "We stock budget, mid-range, and premium tyres (Michelin, Pirelli, Continental, Goodyear) with transparent, upfront pricing.",
      icon: ShieldCheck,
    },
    {
      title: "Home, Workplace & Roadside Support",
      description: "Whether you need urgent emergency recovery or scheduled replacement while working at the office, we adapt to your schedule.",
      icon: MapPin,
    },
  ];

  const comparisons = [
    { feature: "Convenience", us: "We come directly to your location", them: "You must drive or tow car to a garage" },
    { feature: "Opening Hours", us: "24 Hours / 7 Days / 365 Days a Year", them: "Standard 8:30am - 5:30pm (Closed Sundays)" },
    { feature: "Towing / Recovery Fees", us: "£0 (Zero towing fees needed)", them: "£120 - £250+ tow truck recovery charge" },
    { feature: "Wheel Balancing & Disposal", us: "Included with every mobile tyre fitting", them: "Frequently added as surprise extra fees" },
    { feature: "Locking Wheel Nut Help", us: "Specialist mobile extraction tools carried", them: "May require booking auto-locksmith separately" },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-50 border border-coral-200 text-coral text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Smarter Way to Change Tyres</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-800 tracking-tight">
            Why Choose Puncture Patrol?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-muted leading-relaxed">
            We are dedicated to removing the stress, downtime, and danger of flat tyres for drivers across Scotland. Here is what sets our mobile service apart.
          </p>
        </div>

        {/* 5 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-surface-light rounded-2xl p-6 border-2 border-gray-200 hover:border-coral transition-all duration-300 shadow-sm hover:shadow-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-800 text-white flex items-center justify-center mb-4 group-hover:bg-coral transition-colors shadow">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-coral transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-surface-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* 6th Card: Emergency Guarantee Banner */}
          <div className="bg-navy-800 rounded-2xl p-6 text-white border-2 border-coral flex flex-col justify-between shadow-lg">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-coral text-white text-xs font-black uppercase mb-3">
                Scottish Reliability
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Rapid Emergency Dispatch
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                When you call Puncture Patrol, you speak directly with local Scottish dispatch operators who immediately locate the nearest patrol van to you.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between">
              <span className="text-xs font-semibold text-coral-200">Local & Trusted</span>
              <span className="text-xs font-bold text-white">Call 24/7</span>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison: Us vs Traditional Garage */}
        <div className="bg-surface-light rounded-3xl p-6 sm:p-10 border-2 border-gray-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-black text-navy-800">
              Puncture Patrol vs Traditional Garage
            </h3>
            <p className="text-sm text-surface-muted mt-2">
              See why thousands of Scottish drivers switch to our mobile on-demand tyre solution.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="py-4 px-4 font-bold text-navy-800 w-1/3">Feature</th>
                  <th className="py-4 px-4 font-black text-coral bg-coral-50/70 rounded-t-xl w-1/3 text-center sm:text-left">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-coral" />
                      <span>Puncture Patrol (Mobile)</span>
                    </span>
                  </th>
                  <th className="py-4 px-4 font-semibold text-surface-muted w-1/3">
                    Traditional Static Garage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisons.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                    <td className="py-4 px-4 font-bold text-navy-800">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 bg-coral-50/40 text-navy-900 font-semibold">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span>{row.us}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-surface-muted">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>{row.them}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

