"use client";

import React from "react";
import { socialLinks } from "@/data/socialLinks";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1c1e22] bg-[#07080a] py-16 px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-left font-mono text-sm md:text-base font-bold tracking-widest uppercase text-[#f4f4f5] hover:text-white transition-colors"
              data-cursor="BACK TO TOP ↑"
            >
              MUNIR AKROMIN
            </button>
            <p className="text-xs font-mono text-[#71717a] mt-1 tracking-wider uppercase">
              PRODUCT DESIGN · UI/UX · VISUAL DESIGN
            </p>
          </div>

          {/* Social Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono tracking-widest uppercase">
            <a
              href={socialLinks.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1aa] hover:text-white transition-colors"
              data-cursor="DRIBBBLE ↗"
            >
              Dribbble
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1aa] hover:text-white transition-colors"
              data-cursor="LINKEDIN ↗"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1aa] hover:text-white transition-colors"
              data-cursor="BEHANCE ↗"
            >
              Behance
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-[#a1a1aa] hover:text-white transition-colors"
              data-cursor="EMAIL ↗"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 border-t border-[#16181d] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#52525b]">
          <p>© 2026 Muhammad Munir Akromin. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>DESIGNED &amp; ENGINEERED FOR PERFORMANCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
