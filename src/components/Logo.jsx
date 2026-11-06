import React from "react";

export default function Logo({ light = false, className = "" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Badge Icon */}
      <div className="relative flex-shrink-0 w-11 h-11 rounded-xl bg-navy-800 border-2 border-coral flex items-center justify-center shadow-md overflow-hidden">
        {/* Background stylized tyre tread lines */}
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,#fff,#fff_2px,transparent_2px,transparent_6px)]" />
        
        {/* Tyre & Shield Graphic */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6 text-white relative z-10"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Outer Tyre Circle */}
          <circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4.5" stroke="#E6534B" strokeWidth="2" />
          <path d="M12 3v4.5" stroke="#E6534B" strokeWidth="2" />
          <path d="M12 16.5V21" stroke="#E6534B" strokeWidth="2" />
          <path d="M3 12h4.5" stroke="#E6534B" strokeWidth="2" />
          <path d="M16.5 12H21" stroke="#E6534B" strokeWidth="2" />
        </svg>

        {/* Small 24/7 pulse indicator */}
        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-coral animate-ping" />
        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-coral" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black text-xl tracking-tight uppercase ${light ? 'text-white' : 'text-navy-800'}`}>
            Puncture
          </span>
          <span className="font-black text-xl tracking-tight uppercase text-coral">
            Patrol
          </span>
        </div>
        <span className={`text-[10px] font-semibold tracking-wider uppercase mt-1 ${light ? 'text-blue-200' : 'text-surface-muted'}`}>
          24/7 Mobile Tyre Service Scotland
        </span>
      </div>
    </div>
  );
}

