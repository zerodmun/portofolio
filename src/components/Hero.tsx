"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  // Subtle interactive parallax for decorative background element
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const decorTranslateX = useTransform(smoothX, [-500, 500], [-18, 18]);
  const decorTranslateY = useTransform(smoothY, [-500, 500], [-18, 18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    mouseX.set(clientX - windowWidth / 2);
    mouseY.set(clientY - windowHeight / 2);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-32 md:pt-40 pb-12 md:pb-16 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle Editorial Geometry / Atmospheric Accent */}
      <motion.div
        style={{ x: decorTranslateX, y: decorTranslateY }}
        className="pointer-events-none absolute right-4 md:right-12 top-24 md:top-36 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-br from-emerald-500/10 via-zinc-800/10 to-transparent blur-3xl opacity-60"
        aria-hidden="true"
      />

      {/* Hero Header Meta */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-3.5 py-1 rounded-full border border-[#27272a] bg-[#121316]/70 backdrop-blur-md mb-8 md:mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-[11px] md:text-xs text-[#a1a1aa] tracking-widest uppercase">
            BASED IN INDONESIA · PRODUCT DESIGN · UI/UX
          </span>
        </motion.div>

        {/* Main Editorial Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[6.8rem] font-extrabold tracking-[-0.035em] text-[#f4f4f5] leading-[0.95] uppercase"
          >
            Muhammad
            <br />
            <span className="text-[#a1a1aa]">Munir Akromin</span>
          </motion.h1>
        </div>

        {/* Secondary Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 flex items-center gap-3"
        >
          <div className="h-[1px] w-8 md:w-12 bg-[#3f3f46]" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#f4f4f5]">
            Product Designer
          </h2>
        </motion.div>
      </div>

      {/* Hero Lower Content & CTAs */}
      <div className="relative z-10 mt-12 md:mt-24 pt-8 border-t border-[#1c1e22] grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        {/* Supporting Bio Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 lg:col-span-6"
        >
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] font-light leading-relaxed max-w-xl">
            I design digital products, interfaces and visual experiences with a focus on clarity,
            usability and thoughtful visual systems.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 lg:col-span-6 flex flex-wrap items-center gap-4 md:justify-end"
        >
          {/* Primary CTA */}
          <MagneticButton strength={0.3} data-cursor="EXPLORE ↗">
            <button
              type="button"
              onClick={() => handleScrollTo("work")}
              className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#f4f4f5] text-[#090a0c] font-semibold text-xs md:text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-lg shadow-white/5"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </MagneticButton>

          {/* Secondary CTA */}
          <MagneticButton strength={0.3} data-cursor="CONTACT ↗">
            <button
              type="button"
              onClick={() => handleScrollTo("contact")}
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-full border border-[#27272a] bg-[#121316] text-[#f4f4f5] font-semibold text-xs md:text-sm tracking-widest uppercase hover:border-[#52525b] hover:bg-[#18191d] transition-all duration-300"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight
                size={16}
                className="text-[#71717a] transition-transform duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
