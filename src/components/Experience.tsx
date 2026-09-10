"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#1c1e22]">
      <SectionHeading
        number="02"
        tag="CAREER HISTORY"
        title="EXPERIENCE"
        description="A timeline of product, interface, and visual design roles across technology companies and creative studios."
      />

      {/* Editorial Vertical Timeline */}
      <div className="space-y-0 divide-y divide-[#1c1e22] border-y border-[#1c1e22]">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
          >
            {/* Period & Status Column */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {exp.isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    CURRENT
                  </span>
                )}
                <span className="font-mono text-xs text-[#71717a] tracking-wider uppercase">
                  {exp.period}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f4f5] mt-1 group-hover:text-white transition-colors">
                {exp.company}
              </h3>
            </div>

            {/* Role & Responsibilities Column */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#71717a] uppercase block mb-1">
                  ROLE
                </span>
                <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f4f4f5]">
                  {exp.role}
                </h4>
              </div>

              <div>
                <span className="text-xs font-mono tracking-widest text-[#71717a] uppercase block mb-3">
                  RESPONSIBILITIES & SCOPE
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {exp.responsibilities.map((resp) => (
                    <span
                      key={resp}
                      className="text-xs sm:text-sm font-normal text-[#d4d4d8] bg-[#121316] border border-[#27272a] px-3 py-1.5 rounded-md hover:border-[#3f3f46] hover:bg-[#181a1f] transition-all duration-200"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
