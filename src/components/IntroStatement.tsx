"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const statementText =
  "I turn ideas into clear, functional and visually engaging digital experiences.";

function WordSpan({
  word,
  progress,
  range,
}: {
  word: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.28em] last:mr-0 transition-colors will-change-transform"
    >
      {word}
    </motion.span>
  );
}

export default function IntroStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const words = statementText.split(" ");

  return (
    <section
      ref={containerRef}
      className="py-28 md:py-44 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#1c1e22]"
    >
      <div className="max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase">
            /PHILOSOPHY
          </span>
          <div className="h-[1px] w-8 bg-[#27272a]" />
          <span className="font-mono text-xs tracking-widest text-[#a1a1aa] uppercase">
            STATEMENT
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f4f4f5] leading-[1.12]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <WordSpan
                key={i}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </h2>
      </div>
    </section>
  );
}
