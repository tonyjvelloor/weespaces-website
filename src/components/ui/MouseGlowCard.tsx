"use client";

import { useRef, useState } from "react";

export default function MouseGlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(242,156,31,0.2)] ${className}`}
    >
      {/* The Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(242, 156, 31, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Content wrapper to ensure it stays above the glow */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
