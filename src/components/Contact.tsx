"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { socialLinks } from "@/data/socialLinks";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-40 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#1c1e22]">
      {/* Editorial Meta */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase">
          /05 — GET IN TOUCH
        </span>
        <div className="h-[1px] w-8 bg-[#27272a]" />
        <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase">
          OPEN TO WORK
        </span>
      </div>

      {/* Dramatic Headline */}
      <div className="overflow-hidden mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-[-0.04em] text-[#f4f4f5] leading-[0.9] uppercase"
        >
          LET&apos;S BUILD
          <br />
          <span className="text-[#a1a1aa]">SOMETHING</span>
          <br />
          MEANINGFUL.
        </motion.h2>
      </div>

      {/* Supporting Description & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-8 border-t border-[#1c1e22]">
        <div className="lg:col-span-6 space-y-6">
          <p className="text-lg sm:text-xl text-[#a1a1aa] font-light leading-relaxed max-w-lg">
            Have a project, product or idea that needs thoughtful design? Let&apos;s collaborate to
            craft clean, functional, and visually engaging digital experiences.
          </p>

          {/* Direct Email Address with Copy Utility */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${socialLinks.email}`}
              className="font-mono text-lg sm:text-2xl text-[#f4f4f5] hover:text-white underline underline-offset-8 decoration-[#3f3f46] hover:decoration-white transition-all duration-200"
              data-cursor="EMAIL ↗"
            >
              {socialLinks.email}
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#27272a] bg-[#121316] text-xs font-mono text-[#a1a1aa] hover:text-white hover:border-[#3f3f46] transition-colors"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Action Buttons & Major Social Typography */}
        <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center lg:justify-end gap-6">
          <MagneticButton strength={0.25} data-cursor="SEND ↗">
            <a
              href={`mailto:${socialLinks.email}`}
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[#f4f4f5] text-[#090a0c] font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-xl shadow-white/5"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Large Typographic Social Links */}
      <div className="mt-16 md:mt-24 pt-8 border-t border-[#1c1e22] grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "LINKEDIN", url: socialLinks.linkedin, meta: "Career & Connections" },
          { label: "DRIBBBLE", url: socialLinks.dribbble, meta: "UI & Visual Design" },
          { label: "BEHANCE", url: socialLinks.behance, meta: "Case Studies & Creative" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-xl border border-[#1e2025] bg-[#0c0d10] hover:border-[#3f3f46] hover:bg-[#121418] transition-all duration-300"
            data-cursor="VISIT ↗"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-[#71717a] tracking-wider uppercase">
                {item.meta}
              </span>
              <ArrowUpRight
                size={16}
                className="text-[#71717a] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f4f5] group-hover:text-white">
              {item.label}
            </h4>
          </a>
        ))}
      </div>
    </section>
  );
}
