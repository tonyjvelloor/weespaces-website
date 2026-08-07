import React from 'react';
import Image from 'next/image';

interface Stat {
  value: string;
  label: string;
}

interface TrustStripProps {
  stats: Stat[];
  logos: { src: string; alt: string }[];
  className?: string;
}

export function TrustStrip({ stats, logos, className = '' }: TrustStripProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Layer 1: The Numbers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col border-l-2 border-accent/30 pl-6 py-2">
            <span className="text-display text-navy mb-2">{stat.value}</span>
            <span className="text-sm font-bold tracking-[0.15em] uppercase text-navy/50">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-200 mb-12"></div>

      {/* Layer 2: The Logos */}
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {logos.map((logo, idx) => (
          <div key={idx} className="relative w-32 h-12">
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              fill 
              className="object-contain"
            />
          </div>
        ))}
      </div>
      
      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-200 mt-12"></div>
    </div>
  );
}
