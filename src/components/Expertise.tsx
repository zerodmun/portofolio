"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { expertiseItems } from "@/data/expertise";

export default function Expertise() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="expertise" className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#1c1e22]">
      <SectionHeading
        number="01"
        tag="CAPABILITIES"
        title="WHAT I DO"
        description="Crafting purposeful digital solutions through systems thinking, aesthetic rigor, and user-centered craft."
      />

      <div className="flex flex-col divide-y divide-[#1c1e22] border-y border-[#1c1e22]">
        {expertiseItems.map((item, idx) => {
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={item.number}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative py-8 sm:py-10 md:py-12 transition-colors duration-300 cursor-default"
              data-cursor="EXP"
            >
              {/* Subtle background highlight on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-[#14161a]/60 via-[#101215]/40 to-transparent transition-opacity duration-300 -z-10 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                {/* Numbered Tag */}
                <div className="md:col-span-2 flex items-center gap-3">
                  <span
                    className={`font-mono text-sm md:text-base font-semibold tracking-wider transition-colors duration-300 ${
                      isHovered ? "text-emerald-400" : "text-[#52525b]"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span className="text-[#3f3f46]">—</span>
                </div>

                {/* Capability Title */}
                <div className="md:col-span-5">
                  <motion.h3
                    animate={{ x: isHovered ? 8 : 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f4f4f5] group-hover:text-white transition-colors"
                  >
                    {item.title}
                  </motion.h3>
                </div>

                {/* Capability Description & Tags */}
                <div className="md:col-span-5 flex flex-col justify-between gap-4">
                  <p
                    className={`text-sm sm:text-base transition-colors duration-300 leading-relaxed ${
                      isHovered ? "text-[#e4e4e7]" : "text-[#71717a]"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.focus.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] font-mono tracking-wide px-2.5 py-1 rounded transition-colors duration-300 ${
                          isHovered
                            ? "bg-[#1f2228] text-[#a1a1aa] border border-[#2e323b]"
                            : "bg-[#121316] text-[#52525b] border border-[#1c1e22]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
