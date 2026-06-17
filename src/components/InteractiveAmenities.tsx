"use client";

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { AnimatePresence, motion } from 'framer-motion';

import { Armchair, Zap, Users, Key, Coffee, Car } from 'lucide-react';

const amenities = [
  { icon: <Armchair className="w-6 h-6" />, text: 'Comfortable workstations', image: '/images/branches/kochi/workspace1.jpg', image2: '/images/branches/kochi/workspace2.jpg' },
  { icon: <Zap className="w-6 h-6" />, text: 'Ready-to-use setup', image: '/images/branches/calicut/workspace2.jpg', image2: '/images/branches/calicut/workspace1.jpg' },
  { icon: <Users className="w-6 h-6" />, text: 'Meeting & Conference Rooms', image: '/images/branches/kochi/workspace4.jpg', image2: '/images/branches/trivandrum/image4.jpg' },
  { icon: <Key className="w-6 h-6" />, text: '24/7 access (holidays incl.)', image: '/images/branches/kochi/reception.jpg', image2: '/images/branches/calicut/workspace1.jpg' },
  { icon: <Coffee className="w-6 h-6" />, text: 'Unlimited tea & coffee', image: '/images/branches/trivandrum/image4.jpg', image2: '/images/branches/kochi/workspace1.jpg' },
  { icon: <Car className="w-6 h-6" />, text: 'Spacious Parking', image: '/images/branches/trivandrum/image2.jpg', image2: '/images/branches/trivandrum/image1.jpg' }
];

export default function InteractiveAmenities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAmenity = amenities[activeIndex];

  return (
    <div className="grid md:grid-cols-12 gap-8 mb-20">
      <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {amenities.map((amenity, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
                <div 
                  onMouseEnter={() => setActiveIndex(i)}
                  className="cursor-pointer"
                >
                  <MouseGlowCard className={`glass border rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 ${activeIndex === i ? 'border-accent shadow-[0_0_15px_rgba(242,156,31,0.2)]' : 'border-white/10'}`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${activeIndex === i ? 'bg-accent text-navy' : 'bg-accent/10 text-accent'}`}>
                          {amenity.icon}
                      </div>
                      <span className={`font-medium transition-colors ${activeIndex === i ? 'text-white' : 'text-white/70'}`}>{amenity.text}</span>
                  </MouseGlowCard>
                </div>
            </ScrollReveal>
          ))}
      </div>
      
      <ScrollReveal direction="left" delay={0.3} className="md:col-span-5 grid grid-rows-1 md:grid-rows-2 gap-4 h-[350px] md:h-[600px]">
          <div className="relative rounded-3xl overflow-hidden group border border-white/10 shadow-lg h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAmenity.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={activeAmenity.image} 
                    alt="Premium Coworking Hub Amenities" 
                    fill 
                    className="object-cover" 
                    unoptimized 
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent pointer-events-none"></div>
          </div>
          <div className="relative rounded-3xl overflow-hidden group border border-white/10 shadow-lg h-full hidden md:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAmenity.image2}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={activeAmenity.image2} 
                    alt="Premium Coworking Hub Amenities" 
                    fill 
                    className="object-cover" 
                    unoptimized 
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent pointer-events-none"></div>
          </div>
      </ScrollReveal>
    </div>
  );
}
