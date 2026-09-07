"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuickFinder() {
  const router = useRouter();
  const [city, setCity] = useState("Kochi");
  const [spaceType, setSpaceType] = useState("dedicated-desk");
  const [teamSize, setTeamSize] = useState("2-10");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate based on selections
    if (spaceType === 'virtual-office') {
      router.push('/virtual-office');
    } else {
      router.push(`/coworking-space/${city.toLowerCase()}`);
    }
  };

  const cities = ["Kochi", "Trivandrum", "Calicut", "Coimbatore"];
  const teamSizes = ["1", "2-10", "10-50", "50+"];

  return (
    <div className="bg-surface-card rounded-2xl p-space-lg shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
      
      {/* Card Header */}
      <div className="flex items-center justify-between pb-space-md mb-space-md bg-surface-container-lowest">
        <div>
          <span className="inline-block px-space-xs py-space-2xs rounded bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase font-bold tracking-wider mb-space-2xs">
            Instant Match Engine
          </span>
          <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Find your perfect space.</h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined">explore</span>
        </div>
      </div>
      
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Tell us what you need, and we'll instantly match you with ready-to-use regional hubs.
      </p>

      {/* Quick Finder Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
        
        {/* 1. City Select */}
        <div>
          <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-space-2xs">
            Where do you want to work?
          </label>
          <div className="grid grid-cols-2 gap-space-2xs">
            {cities.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCity(c)}
                className={`py-space-xs px-space-sm rounded-lg text-left font-label-lg text-label-lg transition-all flex items-center justify-between ${
                  city === c
                    ? "bg-surface-navy text-on-primary"
                    : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                }`}
              >
                <span>{c}</span>
                <span className={`material-symbols-outlined text-[16px] ${city === c ? "text-secondary" : "opacity-0"}`}>
                  check_circle
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Workspace Type */}
        <div>
          <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-space-2xs">
            Space Type
          </label>
          <select
            value={spaceType}
            onChange={(e) => setSpaceType(e.target.value)}
            className="w-full h-12 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-card transition-all cursor-pointer"
          >
            <option value="hot-desk">Hot Desk (Freelancers & Mobile)</option>
            <option value="dedicated-desk">Dedicated Workstation (24/7 Access)</option>
            <option value="private-office">Private Lockable Office (Teams)</option>
            <option value="virtual-office">Virtual Office (GST & ROC Registration)</option>
          </select>
        </div>

        {/* 3. Team Size Selector */}
        <div>
          <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-space-2xs">
            Team Size
          </label>
          <div className="grid grid-cols-4 gap-space-2xs">
            {teamSizes.map((ts) => (
              <button
                key={ts}
                type="button"
                onClick={() => setTeamSize(ts)}
                className={`py-space-xs rounded-lg text-center font-label-lg text-label-lg transition-all ${
                  teamSize === ts
                    ? "bg-surface-navy text-on-primary"
                    : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                }`}
              >
                {ts}
              </button>
            ))}
          </div>
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          className="w-full mt-space-xs py-space-md px-space-lg bg-secondary hover:bg-accent-orange-hover text-on-secondary font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-space-xs transition-all shadow-md"
        >
          <span>Explore Matching Spaces</span>
          <span className="material-symbols-outlined text-[18px]">search</span>
        </button>
        
        <div className="flex items-center justify-center gap-space-2xs text-center font-body-sm text-body-sm text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-success-teal"></span>
          <span>Immediate occupancy available across all 4 hubs</span>
        </div>
      </form>
    </div>
  );
}
