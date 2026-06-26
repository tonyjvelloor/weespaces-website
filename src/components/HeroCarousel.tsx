"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const heroImages = [
  { src: '/images/branches/trivandrum/image1.jpg', alt: 'Premium coworking space in Trivandrum - WeeSpaces' },
  { src: '/images/branches/kochi/workspace1.jpg', alt: 'Private office space in Kochi for startups' },
  { src: '/images/branches/calicut/workspace1.jpg', alt: 'Shared office space in Calicut' },
  { src: '/images/branches/trivandrum/image3.jpg', alt: 'Managed workspace near IT Hub Trivandrum' }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // We are removing the auto-play functionality to align with best practices (anti-pattern fix)
  // which improves LCP and accessibility.

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-navy-dark">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={heroImages[currentIndex].src} 
            alt={heroImages[currentIndex].alt} 
            fill sizes="100vw" 
            className="object-cover object-center" 
            priority={true}
            fetchPriority="high"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/60 to-navy-dark/90 mix-blend-multiply"></div>
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] -mr-[20vw] -mt-[10vw] pointer-events-none animate-pulse"></div>
    </div>
  );
}
