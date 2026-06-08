"use client";

import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useState } from 'react';

const galleryImages = [
  { src: '/images/branches/trivandrum/image1.jpg', title: 'Trivandrum', colSpan: 'md:col-span-8', rowSpan: 'md:row-span-2' },
  { src: '/images/branches/kochi/workspace2.jpg', title: 'Ernakulam', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { src: '/images/branches/calicut/workspace1.jpg', title: 'Calicut', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { src: '/images/branches/kochi/reception.jpg', title: 'Welcoming Receptions', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { src: '/images/branches/calicut/workspace2.jpg', title: 'Productive Desks', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { src: '/images/branches/trivandrum/image4.jpg', title: 'Collaborative Areas', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
];

export default function PhotoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
      <ScrollReveal direction="up" className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Explore Our <span className="text-accent">Spaces</span></h2>
          <p className="text-xl text-white/70 relative z-10">A glimpse into our functional workspaces designed for productivity.</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[250px]">
        {galleryImages.map((image, index) => (
          <ScrollReveal 
            key={index} 
            delay={index * 0.1} 
            className={`relative rounded-3xl overflow-hidden group ${image.colSpan} ${image.rowSpan}`}
          >
            <div 
              className="absolute inset-0 w-full h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image 
                src={image.src} 
                alt={image.title} 
                fill 
                className={`object-cover transition-transform duration-700 ease-in-out ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`} 
                unoptimized 
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent flex items-end p-8 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-70'}`}>
                <div className="transform transition-transform duration-300 translate-y-0">
                  <h3 className="text-white font-bold text-xl">{image.title}</h3>
                  <div className={`h-1 bg-accent mt-2 rounded-full transition-all duration-500 ease-out ${hoveredIndex === index ? 'w-12' : 'w-0'}`}></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
