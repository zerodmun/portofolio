"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/data/education";

export default function Education() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#1c1e22]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
        <div className="md:col-span-4">
          <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase block mb-2">
            /ACADEMIC FOUNDATION
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f4f5] uppercase">
            EDUCATION
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 p-6 sm:p-8 rounded-xl border border-[#1e2025] bg-[#0c0d10]"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#f4f4f5] tracking-tight">
              {educationData.institution}
            </h3>
            <p className="text-sm font-mono text-[#a1a1aa] mt-1">
              {educationData.field}
            </p>
          </div>
          <div className="sm:text-right">
            <span className="font-mono text-xs text-[#71717a] tracking-wider uppercase block">
              {educationData.period}
            </span>
            <span className="text-xs text-[#52525b] mt-0.5 block">
              {educationData.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
