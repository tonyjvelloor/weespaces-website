"use client";

import { useEffect, useState } from "react";

export default function TourBookingWidget({ branch = "trivandrum" }: { branch?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load Calendly script dynamically
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (!mounted) return <div className="h-[650px] w-full flex flex-col gap-4 items-center justify-center glass rounded-3xl animate-pulse"><div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div><div className="text-white/50 text-sm">Loading Tour Scheduler...</div></div>;

  // Uses a central Calendly account, passing the branch parameter
  const url = `https://calendly.com/weespaces/tour?backgroundColor=06163A&textColor=ffffff&primaryColor=F29C1F&branch=${branch}`;

  return (
    <div className="w-full glass rounded-3xl overflow-hidden shadow-2xl glow p-2 border border-white/10">
      <div 
        className="calendly-inline-widget" 
        data-url={url} 
        style={{ minWidth: "320px", height: "650px" }} 
      />
    </div>
  );
}
