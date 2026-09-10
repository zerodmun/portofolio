"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { externalPortfolios } from "@/data/socialLinks";

export default function DesignWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#1c1e22]">
      <SectionHeading
        number="03"
        tag="PORTFOLIO GATEWAYS"
        title="EXPLORE MY WORK"
        description="A collection of UI/UX, product design, branding, illustration and visual experiments."
      />

      {/* Large Horizontal Interactive Gateways */}
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {externalPortfolios.map((item, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <motion.a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative block w-full rounded-2xl border border-[#27272a] bg-[#0c0d10] p-8 sm:p-10 md:p-14 overflow-hidden transition-all duration-300 hover:border-[#3f3f46]"
              data-cursor={`OPEN ${item.label}`}
            >
              {/* Subtle dynamic background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-[#181a20] via-[#121418] to-transparent transition-opacity duration-300 pointer-events-none ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  {/* Category Tag */}
                  <span className="inline-block text-[11px] font-mono tracking-widest text-[#71717a] uppercase group-hover:text-emerald-400 transition-colors">
                    {item.tag}
                  </span>

                  {/* Large Dominant Platform Title */}
                  <motion.h3
                    animate={{ x: isHovered ? 12 : 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#f4f4f5] group-hover:text-white transition-colors"
                  >
                    {item.label}
                  </motion.h3>

                  {/* Secondary Description */}
                  <p
                    className={`text-base sm:text-lg transition-colors duration-300 ${
                      isHovered ? "text-[#e4e4e7]" : "text-[#71717a]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Massive Animated Arrow Element */}
                <div className="self-end md:self-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border border-[#27272a] bg-[#121316] flex items-center justify-center group-hover:border-white group-hover:bg-[#f4f4f5] transition-all duration-300">
                    <ArrowUpRight
                      className="w-6 h-6 sm:w-8 sm:h-8 text-[#a1a1aa] group-hover:text-[#090a0c] transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
