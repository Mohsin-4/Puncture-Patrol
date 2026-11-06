"use client";

import React, { useState } from "react";
import { servicesData } from "../data/servicesData";
import {
  AlertTriangle,
  Wrench,
  RotateCw,
  Car,
  Truck,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  X,
  Phone,
  Calendar,
  Clock,
  Sparkles
} from "lucide-react";

export default function Services({ onSelectService }) {
  const [activeModal, setActiveModal] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "AlertTriangle":
        return AlertTriangle;
      case "Wrench":
        return Wrench;
      case "RotateCw":
        return RotateCw;
      case "Car":
        return Car;
      case "Truck":
        return Truck;
      case "ShieldAlert":
        return ShieldAlert;
      default:
        return Wrench;
    }
  };

  const handleBookService = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const formElement = document.querySelector("#booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-50 border border-coral-200 text-coral text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Mobile Tyre Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-800 tracking-tight">
            Our Mobile Tyre Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-muted leading-relaxed">
            Professional roadside and on-site tyre care brought directly to you anywhere in Scotland. Whether an urgent motorway puncture or scheduled driveway fitting, we have you covered.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="group relative bg-surface-light rounded-2xl p-7 border-2 border-gray-200/90 hover:border-coral transition-all duration-300 shadow-sm hover:shadow-card hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-navy-800 text-white flex items-center justify-center group-hover:bg-coral transition-colors shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-navy-100 text-navy-800 group-hover:bg-coral-100 group-hover:text-coral transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-coral transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-surface-muted leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Feature Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-navy-800/90 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModal(service)}
                    className="text-xs font-bold text-navy-800 hover:text-coral transition-colors flex items-center gap-1 focus:outline-none"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleBookService(service.title)}
                    className="px-3.5 py-2 rounded-lg bg-navy-800 hover:bg-coral text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal for "Learn More" details */}
        {activeModal && (
          <div className="fixed inset-0 z-50 bg-navy-950/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border-2 border-navy-800 animate-in fade-in zoom-in-95 duration-150">
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-navy-800 hover:bg-gray-100 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-coral-100 text-coral text-xs font-bold uppercase">
                  {activeModal.badge}
                </div>

                <h3 className="text-2xl font-black text-navy-800">
                  {activeModal.title}
                </h3>

                <p className="text-sm text-surface-muted leading-relaxed">
                  {activeModal.fullDescription}
                </p>

                <div className="bg-surface-light rounded-xl p-4 border border-gray-200 space-y-2">
                  <div className="text-xs font-bold text-navy-800 uppercase tracking-wider">
                    Service Specifications:
                  </div>
                  <ul className="space-y-1.5 text-xs text-navy-800">
                    {activeModal.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-navy-50 border border-navy-100">
                    <span className="text-surface-muted block font-medium">Turnaround:</span>
                    <strong className="text-navy-800 font-bold">{activeModal.turnaround}</strong>
                  </div>
                  <div className="p-3 rounded-lg bg-coral-50 border border-coral-100">
                    <span className="text-surface-muted block font-medium">Ideal For:</span>
                    <strong className="text-coral-700 font-bold">{activeModal.idealFor}</strong>
                  </div>
                </div>

                {/* Modal CTA buttons */}
                <div className="pt-3 flex gap-3">
                  <a
                    href="tel:07700900824"
                    className="flex-1 py-3 px-4 rounded-xl bg-coral hover:bg-coral-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 24/7 Dispatch</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      const svc = activeModal.title;
                      setActiveModal(null);
                      handleBookService(svc);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl border-2 border-navy-800 text-navy-800 font-bold text-sm text-center hover:bg-navy-800 hover:text-white transition-colors"
                  >
                    Select in Form
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

