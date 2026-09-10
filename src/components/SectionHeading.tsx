"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  number,
  tag,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-24 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {number && (
          <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase">
            /{number}
          </span>
        )}
        {tag && (
          <span className="font-mono text-xs tracking-widest text-[#a1a1aa] uppercase px-2 py-0.5 rounded border border-[#27272a] bg-[#121316]">
            {tag}
          </span>
        )}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#f4f4f5] uppercase"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base sm:text-lg text-[#a1a1aa] max-w-xl font-normal leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
