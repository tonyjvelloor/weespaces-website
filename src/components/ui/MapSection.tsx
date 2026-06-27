"use client";

import React from 'react';
import { realWeeSpacesAddresses } from '@/utils/mapResolver';
import { MapPin, Navigation } from 'lucide-react';

export default function MapSection({ currentCity }: { currentCity: string }) {
  // Normalize city string (converts "ernakulam" or "kochi" to our key)
  const normalizedCity = currentCity?.toLowerCase() === 'ernakulam' ? 'kochi' : currentCity?.toLowerCase();
  
  // Resolve data; default to kochi if none matched
  const activeLocation = realWeeSpacesAddresses[normalizedCity] || realWeeSpacesAddresses.kochi;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-8">
      <div className="p-6 md:p-8 bg-gray-50 border-b border-gray-100">
        <h3 className="text-xl font-bold text-navy flex items-center gap-2 mb-3">
          <MapPin className="w-5 h-5 text-accent" />
          Visit Our Actual Facility in This Region
        </h3>
        <p className="text-gray-600 font-medium leading-relaxed">
          While this virtual address serves this sector, our local physical offices and meeting rooms are at:
          <br/>
          <strong className="text-navy mt-2 block">{activeLocation.address}</strong>
        </p>
      </div>
      
      {/* Absolute Embed URL - Fixes 404 Render Issues */}
      <div className="w-full aspect-video md:aspect-[21/9] bg-gray-200 relative">
        <iframe
          src={activeLocation.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, position: 'absolute', inset: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`WeeSpaces ${normalizedCity} Real Location Map`}
        ></iframe>
      </div>

      <div className="p-6 flex justify-center bg-white">
        {/* Strict Absolute Link - Eliminates Dynamic 404 Links */}
        <a 
          href={activeLocation.directionsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-navy font-bold py-4 px-8 rounded-xl transition-all shadow-sm hover:shadow-md"
        >
          <Navigation className="w-5 h-5" />
          Get Directions to Our Location
        </a>
      </div>
    </div>
  );
}
