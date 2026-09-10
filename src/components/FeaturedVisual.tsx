"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FeaturedVisual() {
  const [activeTab, setActiveTab] = useState<"system" | "geometry" | "typographic">("system");

  return (
    <section className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#1c1e22]">
      {/* Studio Section Meta */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase">
              /CREATIVE IDENTITY
            </span>
            <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase px-2 py-0.5 rounded border border-emerald-900/60 bg-emerald-950/30">
              STUDIO EXPLORATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f4f4f5] uppercase">
            DESIGN SYSTEM & SPATIAL GEOMETRY
          </h2>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-2 p-1 rounded-lg bg-[#121316] border border-[#27272a] self-start md:self-auto">
          {(["system", "geometry", "typographic"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setActiveTab(mode)}
              className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                activeTab === mode
                  ? "bg-[#27272a] text-[#f4f4f5] font-semibold"
                  : "text-[#71717a] hover:text-[#d4d4d8]"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Abstract Design Studio Presentation Canvas */}
      <div className="relative rounded-2xl border border-[#27272a] bg-[#0c0d10] p-6 sm:p-10 md:p-16 overflow-hidden group">
        {/* Background Grid Lines */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3f3f46 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        {/* Studio Technical Metadata Overlay */}
        <div className="relative z-10 flex flex-wrap justify-between items-center text-[11px] font-mono text-[#71717a] tracking-widest uppercase mb-12 border-b border-[#1c1e22] pb-4">
          <div className="flex items-center gap-6">
            <span>GRID: 8PT FLUID</span>
            <span>RATIO: 1.618 φ</span>
            <span className="hidden sm:inline">WORKSPACE: MMA STUDIO</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>RENDER ENGINE: ACTIVE</span>
          </div>
        </div>

        {/* Generative Visual Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px]">
          {/* Left Diagram / Abstract Wireframe */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <svg
              viewBox="0 0 600 340"
              className="w-full h-auto max-w-xl text-[#27272a]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer boundary guides */}
              <rect x="20" y="20" width="560" height="300" rx="8" stroke="#1f2228" strokeWidth="1.5" strokeDasharray="4 4" />
              
              {/* Modular layout frames */}
              <rect x="50" y="50" width="220" height="150" rx="6" stroke="#2b2f38" strokeWidth="1.5" fill="#121418" fillOpacity="0.4" />
              <rect x="290" y="50" width="260" height="80" rx="6" stroke="#2b2f38" strokeWidth="1.5" fill="#121418" fillOpacity="0.3" />
              <rect x="290" y="145" width="260" height="145" rx="6" stroke="#2b2f38" strokeWidth="1.5" fill="#121418" fillOpacity="0.4" />
              <rect x="50" y="215" width="220" height="75" rx="6" stroke="#2b2f38" strokeWidth="1.5" fill="#121418" fillOpacity="0.3" />

              {/* Dynamic Bezier Curve / Visual Accent */}
              <path
                d="M 60 170 C 180 60, 320 280, 530 90"
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray="6 3"
                opacity="0.8"
              />
              
              {/* Coordinate Points */}
              <circle cx="60" cy="170" r="4" fill="#10b981" />
              <circle cx="250" cy="175" r="3" fill="#f4f4f5" />
              <circle cx="395" cy="195" r="3" fill="#f4f4f5" />
              <circle cx="530" cy="90" r="4" fill="#10b981" />

              {/* Grid Crosshairs */}
              <path d="M 290 40 L 290 60 M 280 50 L 300 50" stroke="#52525b" strokeWidth="1" />
              <path d="M 50 205 L 50 225 M 40 215 L 60 215" stroke="#52525b" strokeWidth="1" />
              <path d="M 540 280 L 560 280 M 550 270 L 550 290" stroke="#52525b" strokeWidth="1" />

              {/* Technical annotations inside diagram */}
              <text x="70" y="80" fill="#71717a" fontSize="10" fontFamily="monospace" letterSpacing="2">COMP_01 // ATOM</text>
              <text x="310" y="80" fill="#71717a" fontSize="10" fontFamily="monospace" letterSpacing="2">FLOW_MAP // LINEAR</text>
              <text x="310" y="175" fill="#71717a" fontSize="10" fontFamily="monospace" letterSpacing="2">HIERARCHY // SYSTEM</text>
              <text x="70" y="245" fill="#71717a" fontSize="10" fontFamily="monospace" letterSpacing="2">SURFACE // TOKEN</text>
            </svg>
          </div>

          {/* Right Typography & Design Spec */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
                {activeTab === "system"
                  ? "MODULAR DESIGN ARCHITECTURE"
                  : activeTab === "geometry"
                  ? "SPATIAL PROPORTIONS & RATIOS"
                  : "EDITORIAL TYPOGRAPHY HIERARCHY"}
              </span>
              <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed">
                {activeTab === "system"
                  ? "Balancing systematic consistency with expressive visual details. Digital interfaces structured around atomic tokens, scalable components, and predictable interaction models."
                  : activeTab === "geometry"
                  ? "Derived from geometric grids and intentional negative space. Establishing optical rhythm that lets key product messages breathe effortlessly across all viewport dimensions."
                  : "Typography as the architectural backbone of visual communication. Pairing strict functional contrast with modern editorial weight and high-impact typographic presence."}
              </p>
            </div>

            {/* Spec Attributes */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1c1e22]">
              <div>
                <span className="block text-[11px] font-mono text-[#52525b] uppercase">FRAMEWORK</span>
                <span className="text-xs font-mono text-[#d4d4d8] uppercase">COMPONENT DRIVEN</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono text-[#52525b] uppercase">CORE METRIC</span>
                <span className="text-xs font-mono text-[#d4d4d8] uppercase">COGNITIVE CLARITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
