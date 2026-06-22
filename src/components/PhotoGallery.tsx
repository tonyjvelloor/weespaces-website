"use client";

import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/images/branches/trivandrum/image1.jpg', title: 'Trivandrum', location: 'Trivandrum', colSpan: 'md:col-span-8', rowSpan: 'md:row-span-2' },
  { src: '/images/branches/kochi/workspace2.jpg', title: 'Ernakulam', location: 'Ernakulam', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { src: '/images/branches/calicut/workspace1.jpg', title: 'Calicut', location: 'Calicut', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { src: '/images/branches/coimbatore/exterior-tall.jpg', title: 'Coimbatore Exterior', location: 'Coimbatore', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-2' },
  { src: '/images/branches/kochi/reception.jpg', title: 'Welcoming Receptions', location: 'Ernakulam', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { src: '/images/branches/coimbatore/amenity1.jpg', title: 'Coimbatore Workspace', location: 'Coimbatore', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { src: '/images/branches/calicut/workspace2.jpg', title: 'Productive Desks', location: 'Calicut', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { src: '/images/branches/trivandrum/image4.jpg', title: 'Collaborative Areas', location: 'Trivandrum', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
];

const locations = ['All', 'Trivandrum', 'Ernakulam', 'Calicut', 'Coimbatore'];

export default function PhotoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeLocation, setActiveLocation] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeLocation === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.location === activeLocation);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') setLightboxIndex(null);
    if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
    if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxIndex, filteredImages]);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
      <ScrollReveal direction="up" className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Explore Our <span className="text-accent">Spaces</span></h2>
          <p className="text-xl text-white/70 relative z-10">A glimpse into our functional workspaces designed for productivity.</p>
          
          <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 mt-8 px-2 pb-4">
            {locations.map(loc => (
              <button 
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`shrink-0 whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-colors ${activeLocation === loc ? 'bg-accent text-navy' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
              >
                {loc}
              </button>
            ))}
          </div>
      </ScrollReveal>

      <div className="flex overflow-x-auto no-scrollbar md:grid md:grid-cols-12 gap-4 md:auto-rows-[250px] pb-4 px-2 -mx-2 md:mx-0 snap-x snap-mandatory">
        {filteredImages.map((image, index) => (
          <ScrollReveal 
            key={image.src} 
            delay={index * 0.05} 
            className={`relative rounded-xl overflow-hidden group cursor-pointer shrink-0 w-[85vw] h-[250px] md:w-auto md:h-auto snap-center ${activeLocation === 'All' ? `${image.colSpan} ${image.rowSpan}` : 'md:col-span-4 md:row-span-1'}`}
            onClick={() => setLightboxIndex(index)}
          >
            <div 
              className="absolute inset-0 w-full h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image 
                src={image.src} 
                alt={image.title} 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className={`object-cover transition-transform duration-700 ease-in-out ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`} 
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

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 backdrop-blur-sm">
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length)}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <div className="relative w-[90vw] max-w-5xl h-[80vh]">
            <Image 
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-navy/80 to-transparent text-center">
              <h3 className="text-white font-bold text-2xl">{filteredImages[lightboxIndex].title}</h3>
              <p className="text-accent mt-2">{filteredImages[lightboxIndex].location}</p>
            </div>
          </div>

          <button 
            className="absolute right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setLightboxIndex((prev) => (prev! + 1) % filteredImages.length)}
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}
    </section>
  );
}
