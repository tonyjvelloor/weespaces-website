"use client";

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { AnimatePresence, motion } from 'framer-motion';

const amenities = [
  { icon: 'chair', text: 'Comfortable workstations', image: '/images/branches/kochi/workspace1.jpg' },
  { icon: 'bolt', text: 'Ready-to-use setup', image: '/images/branches/calicut/workspace2.jpg' },
  { icon: 'meeting_room', text: 'Meeting & Conference Rooms', image: '/images/branches/kochi/workspace4.jpg' },
  { icon: 'key', text: '24/7 access (holidays incl.)', image: '/images/branches/kochi/reception.jpg' },
  { icon: 'coffee', text: 'Unlimited tea & coffee', image: '/images/branches/trivandrum/image4.jpg' },
  { icon: 'local_parking', text: 'Spacious Parking', image: '/images/branches/trivandrum/image2.jpg' }
];

export default function InteractiveAmenities() {
  const [activeImage, setActiveImage] = useState(amenities[0].image);

  return (
    <div className="grid md:grid-cols-12 gap-8 mb-20">
      <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {amenities.map((amenity, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
                <div 
                  onMouseEnter={() => setActiveImage(amenity.image)}
                  className="cursor-pointer"
                >
                  <MouseGlowCard className={`glass border rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 ${activeImage === amenity.image ? 'border-accent shadow-[0_0_15px_rgba(242,156,31,0.2)]' : 'border-white/10'}`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${activeImage === amenity.image ? 'bg-accent text-navy' : 'bg-accent/10 text-accent'}`}>
                          <span className="material-symbols-outlined">{amenity.icon}</span>
                      </div>
                      <span className={`font-medium transition-colors ${activeImage === amenity.image ? 'text-white' : 'text-white/70'}`}>{amenity.text}</span>
                  </MouseGlowCard>
                </div>
            </ScrollReveal>
          ))}
      </div>
      
      <ScrollReveal direction="left" delay={0.3} className="md:col-span-5 relative rounded-3xl overflow-hidden group border border-white/10 shadow-lg min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image 
                src={activeImage} 
                alt="Premium Coworking Hub Amenities" 
                fill 
                className="object-cover" 
                unoptimized 
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent pointer-events-none"></div>
      </ScrollReveal>
    </div>
  );
}
