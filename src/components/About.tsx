"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#1c1e22]">
      <SectionHeading
        number="04"
        tag="PERSPECTIVE"
        title="A LITTLE ABOUT ME"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Editorial Bio Statement */}
        <div className="lg:col-span-8 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#f4f4f5] leading-relaxed"
          >
            I&apos;m Muhammad Munir Akromin, a Product Designer with a background in UI/UX,
            branding, illustration, animation and visual design.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-[#a1a1aa] font-light leading-relaxed max-w-3xl"
          >
            I enjoy exploring how visual design and digital products can work together to create
            experiences that are clear, useful and engaging.
          </motion.p>
        </div>

        {/* Supporting Design Philosophy Aside */}
        <div className="lg:col-span-4 border-l border-[#1c1e22] pl-8 space-y-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#71717a] uppercase block mb-1">
              FOCUS
            </span>
            <p className="text-sm font-mono text-[#d4d4d8]">
              Product Design &amp; Digital Interfaces
            </p>
          </div>

          <div>
            <span className="text-xs font-mono tracking-widest text-[#71717a] uppercase block mb-1">
              DISCIPLINES
            </span>
            <p className="text-sm font-mono text-[#d4d4d8] leading-relaxed">
              UI/UX · Design Systems · 2D/3D Illustration · Motion
            </p>
          </div>

          <div>
            <span className="text-xs font-mono tracking-widest text-[#71717a] uppercase block mb-1">
              LOCATION
            </span>
            <p className="text-sm font-mono text-[#d4d4d8]">
              Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
