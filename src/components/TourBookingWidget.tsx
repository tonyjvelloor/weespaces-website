"use client";

import { useState } from "react";

export default function TourBookingWidget({ branch = "trivandrum" }: { branch?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const url = `https://calendly.com/weespaces/tour?backgroundColor=06163A&textColor=ffffff&primaryColor=F29C1F&branch=${branch}`;

  return (
    <div className="w-full glass rounded-xl overflow-hidden shadow-2xl glow p-2 border border-white/10 relative h-[650px]">
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col p-6 gap-4 animate-pulse bg-navy-dark/80 z-10">
          <div className="h-10 bg-white/10 rounded-md w-1/3 mx-auto mb-6"></div>
          <div className="flex gap-6 h-full">
            <div className="w-1/3 flex flex-col gap-4 border-r border-white/10 pr-6">
              <div className="h-6 bg-white/10 rounded w-1/2"></div>
              <div className="h-4 bg-white/10 rounded w-3/4"></div>
              <div className="h-4 bg-white/10 rounded w-5/6"></div>
            </div>
            <div className="w-2/3 grid grid-cols-7 grid-rows-6 gap-2">
              {[...Array(42)].map((_, i) => (
                <div key={i} className="bg-white/5 rounded-md"></div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <iframe 
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        title="WeeSpaces Tour Booking"
        onLoad={() => setIsLoaded(true)}
        style={{ minWidth: "320px", height: "100%", background: "transparent" }}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      ></iframe>
    </div>
  );
}
