"use client";

import { useEffect, useState } from "react";

export default function TourBookingWidget({ branch = "trivandrum" }: { branch?: string }) {
  const url = `https://calendly.com/weespaces/tour?backgroundColor=06163A&textColor=ffffff&primaryColor=F29C1F&branch=${branch}`;

  return (
    <div className="w-full glass rounded-3xl overflow-hidden shadow-2xl glow p-2 border border-white/10 relative h-[650px]">
      {/* Fallback loading state that sits behind the iframe */}
      <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center -z-10">
         <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
         <div className="text-white/50 text-sm">Loading Tour Scheduler...</div>
      </div>
      
      <iframe 
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        title="WeeSpaces Tour Booking"
        style={{ minWidth: "320px", height: "100%", background: "transparent" }}
      ></iframe>
    </div>
  );
}
