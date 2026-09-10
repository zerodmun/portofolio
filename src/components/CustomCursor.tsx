"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device has fine pointer (mouse/trackpad)
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(pointer: fine)");
      setIsTouch(!mediaQuery.matches);

      const handleMediaChange = (e: MediaQueryListEvent) => {
        setIsTouch(!e.matches);
      };

      mediaQuery.addEventListener("change", handleMediaChange);

      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
      };

      const handleMouseEnter = () => {
        setIsVisible(true);
      };

      // Add listeners to interactive elements
      const handleElementHover = (e: MouseEvent) => {
        const target = (e.target as HTMLElement)?.closest("[data-cursor]");
        if (target) {
          const actionText = target.getAttribute("data-cursor") || "OPEN ↗";
          setCursorText(actionText);
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(false);
        }
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseover", handleElementHover, { passive: true });
      document.body.addEventListener("mouseleave", handleMouseLeave);
      document.body.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        mediaQuery.removeEventListener("change", handleMediaChange);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseover", handleElementHover);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
        document.body.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [mouseX, mouseY, isVisible]);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        animate={{
          width: isHovered ? 84 : 10,
          height: isHovered ? 84 : 10,
          backgroundColor: isHovered ? "rgba(244, 244, 245, 0.95)" : "rgba(244, 244, 245, 0.8)",
          color: isHovered ? "#090a0c" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
        className="rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl shadow-black/40 overflow-hidden"
      >
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-[10px] font-mono font-bold tracking-widest uppercase select-none text-center leading-none"
          >
            {cursorText || "OPEN ↗"}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
