"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Users, Wifi, Zap, Building2, Train, TrainFront, PhoneCall, ChevronRight, CheckCircle2, ChevronLeft } from 'lucide-react';

interface LocationCardProps {
  id: string;
  name: string;
  address: string;
  heroImage: string;
  galleryImages: string[];
  pricing: {
    marketingPrice?: string;
    hotDesk: string;
    dedicatedDesk: string;
    privateOffice: string;
    virtualOffice: string;
  };
  inventory: any; // Using any for quick integration, ideally properly typed
}

export default function LocationCard({ id, name, address, heroImage, galleryImages, pricing, inventory }: LocationCardProps) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const images = galleryImages && galleryImages.length > 0 ? galleryImages : [heroImage];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const seoUrl = `/coworking-space/${id === 'ernakulam' ? 'kochi' : id}`;

  return (
    <div className="bg-navy rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-white/10 hover:border-accent/30 transition-all flex flex-col relative group h-full">
      
      {/* "Available Today" Badge */}
      <div className="absolute top-4 left-4 z-10 bg-green-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        Available Today: {inventory?.availability?.privateOffices > 0 ? `${inventory.availability.privateOffices} Cabins, ` : ''} {inventory?.availability?.dedicatedDesks} Seats
      </div>

      {/* Image Carousel */}
      <div className="relative h-64 w-full bg-navy-light overflow-hidden">
        <Link href={seoUrl} className="block w-full h-full">
          <Image 
            src={images[currentImageIdx]} 
            alt={`WeeSpaces ${name} Workspace`} 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </Link>
        
        {/* Carousel Controls */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIdx ? 'bg-white w-3' : 'bg-white/40'}`} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        
        {/* Header & Pricing */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white"><Link href={seoUrl} className="hover:text-accent transition-colors">WeeSpaces {name}</Link></h2>
            <p className="text-white/60 text-sm flex items-start gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              <span className="line-clamp-1">{address}</span>
            </p>
          </div>
          <div className="text-right flex-shrink-0 ml-4">
            <p className="text-xs text-white/50 uppercase tracking-wider mb-0.5">Starting at</p>
            <p className="text-xl font-bold text-accent">{pricing.hotDesk.replace('/mo', '')}</p>
            <p className="text-xs text-white/50">/ month</p>
          </div>
        </div>

        {/* Zillow-Style Transparency Data Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Wifi className="w-4 h-4 text-accent" />
            <span>{inventory?.metrics?.internetSpeed || "High Speed WiFi"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <TrainFront className="w-4 h-4 text-accent" />
            <span className="truncate" title={inventory?.commute?.nearestTransit?.time}>{inventory?.commute?.nearestTransit?.time || "Near Transit"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Zap className="w-4 h-4 text-accent" />
            <span>{inventory?.metrics?.powerBackup || "Power Backup"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Users className="w-4 h-4 text-accent" />
            <span>{inventory?.metrics?.capacity || "100+"} Capacity</span>
          </div>
        </div>

        {/* Office Score & Demand */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
              <span className="text-green-400 font-bold">{inventory?.scores?.overall || "9.5"}</span>
            </div>
            <div>
              <p className="text-xs text-white/50 font-medium uppercase tracking-wider">Office Score</p>
              <div className="flex text-accent">
                {/* 5 stars */}
                {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
            </div>
          </div>
          {inventory?.demand && (
             <div className="text-right">
                <span className="text-xs text-white/50 block">Live Demand</span>
                <span className="text-xs text-accent font-medium truncate max-w-[140px] block" title={inventory.demand}>{inventory.demand}</span>
             </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link href={seoUrl} className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-xl flex items-center justify-center transition-colors text-sm text-center">
            View Pricing & Plans
          </Link>
          <Link href={`/book-tour?location=${id}`} className="bg-accent hover:bg-accent-light text-navy font-bold py-3 rounded-xl flex items-center justify-center transition-all text-sm text-center shadow-[0_0_15px_rgba(255,215,0,0.2)]">
            Check Availability
          </Link>
        </div>
      </div>
    </div>
  );
}
