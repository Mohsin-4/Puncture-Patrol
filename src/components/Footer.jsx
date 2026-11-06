import React from "react";
import Logo from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  ChevronRight
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Emergency Mobile Tyre Fitting", href: "#services" },
    { name: "Mobile Puncture Repair", href: "#services" },
    { name: "Flat Tyre Replacement", href: "#services" },
    { name: "Car Tyre Replacement", href: "#services" },
    { name: "Van & Fleet Tyre Fitting", href: "#services" },
    { name: "Roadside Tyre Assistance", href: "#services" },
  ];

  const areas = [
    "Glasgow",
    "Edinburgh",
    "Paisley",
    "Stirling",
    "Falkirk",
    "Dundee",
    "Aberdeen",
    "Perth",
    "Ayr",
    "Motherwell",
    "East Kilbride",
    "Dunfermline"
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Our Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Puncture Patrol", href: "#why-choose-us" },
    { name: "Areas Covered", href: "#areas-covered" },
    { name: "Customer Reviews", href: "#reviews" },
    { name: "Book Mobile Service", href: "#booking-form" },
  ];

  return (
    <footer id="contact" className="bg-navy-950 text-white pt-16 pb-12 border-t-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo light={true} />

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Scotland&apos;s trusted 24/7 mobile tyre fitting and puncture repair service. We bring brand new tyres and certified fitting equipment directly to your home, workplace, or roadside location.
            </p>

            <div className="flex items-center gap-2 text-xs text-coral font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4 text-coral" />
              <span>Open 24 Hours • 7 Days A Week • 365 Days A Year</span>
            </div>

            {/* Social Media SVG Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Follow Puncture Patrol on Facebook"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-coral text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Follow Puncture Patrol on Instagram"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-coral text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#twitter"
                aria-label="Follow Puncture Patrol on X"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-coral text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="Connect with Puncture Patrol on LinkedIn"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-coral text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Mobile Tyre Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {services.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="hover:text-coral transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-coral" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="hover:text-coral transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-coral" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Scottish Dispatch Hub
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-[11px]">24/7 Emergency Dispatch:</div>
                  <a href="tel:07700900824" className="font-bold text-white hover:text-coral transition-colors">
                    07700 900 824
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-[11px]">Office Enquiries / Booking:</div>
                  <a href="tel:01415550199" className="font-bold text-white hover:text-coral transition-colors">
                    0141 555 0199
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-[11px]">Email Dispatch:</div>
                  <a href="mailto:dispatch@puncturepatrol.co.uk" className="text-slate-200 hover:text-coral transition-colors">
                    dispatch@puncturepatrol.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-[11px]">Central Hub:</div>
                  <span className="text-slate-200">
                    Central Scotland Mobile Network, Glasgow & Edinburgh Corridors
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scottish Areas Covered Tag Cloud */}
        <div className="py-8 border-b border-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Primary Scottish Coverage Locations:
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {areas.map((area, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded bg-navy-900 border border-slate-800 text-slate-300 hover:border-coral transition-colors"
              >
                {area} Mobile Tyre Fitting
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Puncture Patrol Scotland. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookie Settings</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
