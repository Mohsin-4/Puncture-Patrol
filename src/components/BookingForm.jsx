"use client";

import React, { useState, useEffect } from "react";
import { servicesData } from "../data/servicesData";
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  User,
  Car,
  MapPin,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Send,
  Sparkles
} from "lucide-react";

export default function BookingForm({ selectedServiceFromParent }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    vehicleRegOrTyreSize: "",
    service: "Emergency Mobile Tyre Fitting",
    preferredDate: "",
    isUrgentNow: true,
    locationPostcode: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  // Sync with service card clicks
  useEffect(() => {
    if (selectedServiceFromParent) {
      setFormData((prev) => ({ ...prev, service: selectedServiceFromParent }));
    }
  }, [selectedServiceFromParent]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required for dispatch contact.";
    } else if (!/^[0-9+\s()-]{9,16}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid UK phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.vehicleRegOrTyreSize.trim()) {
      newErrors.vehicleRegOrTyreSize = "Please provide your registration plate or tyre size.";
    }

    if (!formData.isUrgentNow && !formData.preferredDate) {
      newErrors.preferredDate = "Please choose a preferred date or select urgent dispatch.";
    }

    if (!formData.locationPostcode.trim()) {
      newErrors.locationPostcode = "Please provide your location or postcode.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = `PP-SCOT-${Math.floor(10000 + Math.random() * 90000)}`;
      setBookingRef(randomRef);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      vehicleRegOrTyreSize: "",
      service: "Emergency Mobile Tyre Fitting",
      preferredDate: "",
      isUrgentNow: true,
      locationPostcode: "",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="booking-form" className="py-20 bg-surface-light border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-coral" />
            <span>Fast Mobile Tyre Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-800 tracking-tight">
            Book Mobile Tyre Service
          </h2>
          <p className="mt-3 text-base text-surface-muted max-w-xl mx-auto">
            Submit your details below and our Scottish dispatch team will confirm your technician&apos;s arrival time.
          </p>
        </div>

        {/* Immediate Emergency Notice Box */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-coral-50 border-2 border-coral/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-coral text-white flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy-900">
                Are you currently stranded roadside or need immediate emergency dispatch?
              </div>
              <div className="text-xs text-surface-muted">
                For urgent 30–60 minute roadside rescue, we recommend phoning directly.
              </div>
            </div>
          </div>
          <a
            href="tel:07700900824"
            className="px-5 py-2.5 rounded-xl bg-coral hover:bg-coral-600 text-white font-black text-xs uppercase tracking-wider whitespace-nowrap shadow-md transition-colors"
          >
            Call Now: 07700 900 824
          </a>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-gray-200 shadow-card relative">
          
          {isSuccess ? (
            /* Success Feedback State */
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-full bg-navy-100 text-navy-800 font-mono text-xs font-bold">
                  Reference: {bookingRef}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-navy-800">
                  Booking Request Received!
                </h3>
                <p className="text-sm text-surface-muted max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our Scottish dispatch coordinator has received your request for <strong>{formData.service}</strong> at <strong>{formData.locationPostcode}</strong>.
                </p>
              </div>

              {/* Summary Card */}
              <div className="max-w-md mx-auto bg-surface-light p-5 rounded-2xl border border-gray-200 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-surface-muted">Contact Phone:</span>
                  <span className="font-bold text-navy-800">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-surface-muted">Vehicle Reg / Tyre:</span>
                  <span className="font-bold text-navy-800 uppercase">{formData.vehicleRegOrTyreSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-surface-muted">Priority:</span>
                  <span className="font-bold text-coral">
                    {formData.isUrgentNow ? "Urgent (Next Available Van)" : formData.preferredDate}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-navy-50 rounded-xl text-xs text-navy-800 max-w-md mx-auto">
                <ShieldCheck className="w-4 h-4 text-coral inline mr-1" />
                Our dispatch controller will contact your phone within 5–10 minutes to verify tyre fitment and technician arrival window.
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:07700900824"
                  className="px-6 py-3 rounded-xl bg-coral hover:bg-coral-600 text-white font-bold text-sm shadow-md"
                >
                  Need to Add Details? Call Dispatch
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl border-2 border-navy-800 text-navy-800 font-bold text-sm hover:bg-navy-800 hover:text-white transition-colors"
                >
                  Submit Another Booking
                </button>
              </div>
            </div>
          ) : (
            /* Active Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                    Full Name <span className="text-coral">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Gordon Campbell"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-navy-900 outline-none transition-all ${
                        errors.fullName
                          ? "border-coral bg-coral-50/20"
                          : "border-gray-300 focus:border-navy-800 focus:ring-1 focus:ring-navy-800"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-coral font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-coral">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 07700 900 824"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-navy-900 outline-none transition-all ${
                        errors.phone
                          ? "border-coral bg-coral-50/20"
                          : "border-gray-300 focus:border-navy-800 focus:ring-1 focus:ring-navy-800"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-coral font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email Address & Vehicle Reg / Tyre Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                    Email Address <span className="text-coral">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. gordon@example.co.uk"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-navy-900 outline-none transition-all ${
                        errors.email
                          ? "border-coral bg-coral-50/20"
                          : "border-gray-300 focus:border-navy-800 focus:ring-1 focus:ring-navy-800"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-coral font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                    Vehicle Reg or Tyre Size <span className="text-coral">*</span>
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="vehicleRegOrTyreSize"
                      placeholder="e.g. SC68 ABC or 205/55 R16"
                      value={formData.vehicleRegOrTyreSize}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-navy-900 outline-none transition-all uppercase ${
                        errors.vehicleRegOrTyreSize
                          ? "border-coral bg-coral-50/20"
                          : "border-gray-300 focus:border-navy-800 focus:ring-1 focus:ring-navy-800"
                      }`}
                    />
                  </div>
                  {errors.vehicleRegOrTyreSize && (
                    <p className="mt-1.5 text-xs text-coral font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.vehicleRegOrTyreSize}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Required Service & Location / Postcode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                    Required Service <span className="text-coral">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-navy-800 focus:ring-1 focus:ring-navy-800 text-sm text-navy-900 outline-none transition-all bg-white"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                    Location or Postcode <span className="text-coral">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="locationPostcode"
                      placeholder="e.g. Glasgow G1 2DA or M8 J15"
                      value={formData.locationPostcode}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-navy-900 outline-none transition-all ${
                        errors.locationPostcode
                          ? "border-coral bg-coral-50/20"
                          : "border-gray-300 focus:border-navy-800 focus:ring-1 focus:ring-navy-800"
                      }`}
                    />
                  </div>
                  {errors.locationPostcode && (
                    <p className="mt-1.5 text-xs text-coral font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.locationPostcode}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Preferred Date / Urgency Toggle */}
              <div className="p-4 rounded-xl bg-surface-light border border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-navy-800 uppercase tracking-wider">
                    Timing / Preferred Date
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isUrgentNow"
                      checked={formData.isUrgentNow}
                      onChange={handleChange}
                      className="rounded text-coral focus:ring-coral w-4 h-4"
                    />
                    <span className="text-xs font-bold text-coral">
                      Urgent Dispatch (ASAP)
                    </span>
                  </label>
                </div>

                {!formData.isUrgentNow && (
                  <div className="relative animate-in fade-in duration-150">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm text-navy-900 outline-none focus:border-navy-800"
                    />
                    {errors.preferredDate && (
                      <p className="mt-1 text-xs text-coral font-medium">
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Row 5: Additional Message */}
              <div>
                <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                  Additional Message / Breakdown Details (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="Provide landmarks, wheel lock key location, specific tyre brand preference, or any other details..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-navy-800 focus:ring-1 focus:ring-navy-800 text-sm text-navy-900 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-coral hover:bg-coral-600 disabled:opacity-75 text-white font-extrabold text-base shadow-coral-glow transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Dispatch Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Mobile Tyre Booking</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-surface-muted text-center pt-2">
                <ShieldCheck className="w-4 h-4 text-coral flex-shrink-0" />
                <span>No advance online payment required. Pay safely roadside via card or cash once fitted.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}

