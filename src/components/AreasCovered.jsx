"use client";

import React, { useState } from "react";
import { scottishCoverageHubs, majorCorridors } from "../data/areasData";
import {
  MapPin,
  Search,
  Clock,
  Compass,
  CheckCircle,
  Phone,
  Shield,
  Navigation
} from "lucide-react";

export default function AreasCovered() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  // Flatten all hubs for search filtering
  const allHubs = scottishCoverageHubs.flatMap((r) =>
    r.hubs.map((h) => ({ ...h, region: r.region }))
  );

  const filteredHubs = allHubs.filter((hub) => {
    const matchesSearch =
      hub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hub.postcodes.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hub.region.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion =
      selectedRegion === "all" || hub.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <section id="areas-covered" className="py-20 bg-surface-light border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-coral" />
            <span>Scottish Operational Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-800 tracking-tight">
            Areas We Cover Across Scotland
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-muted leading-relaxed">
            Puncture Patrol provides reliable 24/7 mobile tyre fitting and emergency assistance across major Scottish cities, towns, and motorway corridors.
          </p>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-gray-200 shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search your Scottish town, city, or postcode (e.g. Glasgow, EH, FK)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none text-sm text-navy-800 transition-all"
              />
            </div>

            {/* Region Filter Selector */}
            <div className="md:col-span-6 flex flex-wrap gap-2 justify-start md:justify-end">
              <button
                type="button"
                onClick={() => setSelectedRegion("all")}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedRegion === "all"
                    ? "bg-navy-800 text-white"
                    : "bg-gray-100 text-surface-muted hover:bg-gray-200"
                }`}
              >
                All Scotland
              </button>
              {scottishCoverageHubs.map((reg) => (
                <button
                  key={reg.region}
                  type="button"
                  onClick={() => setSelectedRegion(reg.region)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    selectedRegion === reg.region
                      ? "bg-navy-800 text-white"
                      : "bg-gray-100 text-surface-muted hover:bg-gray-200"
                  }`}
                >
                  {reg.region.split("&")[0].trim()}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredHubs.length > 0 ? (
            filteredHubs.map((hub, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border-2 border-gray-200 hover:border-coral transition-all duration-200 shadow-sm hover:shadow-card group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-coral group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-navy-800 group-hover:text-coral transition-colors">
                      {hub.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {hub.status}
                  </span>
                </div>

                <div className="text-xs text-surface-muted mb-3">
                  <span className="font-semibold text-navy-800">Postcodes:</span> {hub.postcodes}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
                  <span className="text-surface-muted flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-coral" />
                    <span>Response Time:</span>
                  </span>
                  <strong className="text-navy-800 font-bold">{hub.responseTime}</strong>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-white p-8 rounded-2xl text-center border-2 border-dashed border-gray-300">
              <Navigation className="w-10 h-10 text-coral mx-auto mb-2" />
              <h4 className="text-lg font-bold text-navy-800">
                Location Not Found in Quick Search
              </h4>
              <p className="text-sm text-surface-muted mt-1 max-w-md mx-auto">
                Don&apos;t worry! We cover adjacent Scottish areas and rural roads on request. Contact our dispatch operator directly to verify live availability.
              </p>
              <div className="mt-4">
                <a
                  href="tel:07700900824"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-coral text-white text-xs font-bold shadow-md hover:bg-coral-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Dispatch: 07700 900 824</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Scottish Motorway Corridors Ribbon */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-coral">
                Motorway & Trunk Road Response
              </div>
              <h3 className="text-xl font-black text-navy-800">
                Key Scottish Corridors Under Active Mobile Patrol
              </h3>
            </div>
            <span className="text-xs font-semibold text-surface-muted bg-gray-100 px-3 py-1.5 rounded-lg">
              Priority Roadside Dispatch
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {majorCorridors.map((c, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-surface-light border border-gray-200 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-navy-800 text-white flex items-center justify-center font-black text-xs flex-shrink-0">
                  {c.name.split(" ")[0]}
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-800">{c.name}</div>
                  <div className="text-[11px] text-surface-muted mt-0.5">{c.segment}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-surface-muted">
            <Shield className="w-4 h-4 text-coral flex-shrink-0" />
            <span>
              <strong>Note on Coverage:</strong> Confirmed primary dispatch operations center around the Scottish Central Belt and key urban hubs. Outer Scottish Highlands and Islands covered by special arrangement.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

