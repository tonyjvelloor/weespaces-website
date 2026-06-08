"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  onClick?: () => void;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  onClick,
}: ScrollRevealProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom premium easing curve
        delay: delay,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
