"use client";

import { useState } from "react";
import Link from "next/link";

export default function DesignCostCalculator() {
  const [teamSize, setTeamSize] = useState<number>(10);
  const [city, setCity] = useState<string>("Kochi");

  const cities = ["Kochi", "Trivandrum", "Calicut", "Coimbatore"];
  
  const cityMultipliers: Record<string, number> = {
    "Kochi": 1.0,
    "Trivandrum": 1.05,
    "Calicut": 0.9,
    "Coimbatore": 0.95
  };

  const multiplier = cityMultipliers[city] || 1.0;
  
  // 50 sqft per person
  const sqft = teamSize * 50;
  
  // Rent ~₹60/sqft -> Deposit = 6 months
  const deposit = Math.round(sqft * 60 * 6 * multiplier);
  
  // Interior ~₹2000/sqft
  const interior = Math.round(sqft * 2000 * multiplier);
  
  // Furniture ~₹15000/person
  const furniture = Math.round(teamSize * 15000 * multiplier);
  
  // IT ~₹2500/person
  const itSetup = Math.round(teamSize * 2500 * multiplier);
  
  const totalSavings = deposit + interior + furniture + itSetup;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="bg-surface-navy text-on-primary rounded-3xl p-space-xl lg:p-space-2xl shadow-xl relative overflow-hidden">
      {/* Subtle Vector Grid Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Left Controls & Title */}
        <div className="lg:col-span-6 flex flex-col">
          <span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-navy-muted text-accent-warm-gold font-label-caps text-label-caps uppercase tracking-wider font-bold mb-space-sm w-max">
            Real-Time Capex Comparison
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-primary font-bold tracking-tight mb-space-xs">
            Office Setup Cost Calculator
          </h2>
          <p className="font-body-md text-body-md text-text-on-dark-muted mb-space-xl">
            See exactly how much capital you are tying up in a traditional office lease vs keeping it in your business.
          </p>
          
          {/* Interactive Sliders / Inputs */}
          <div className="flex flex-col gap-space-lg bg-surface-navy-muted/60 p-space-lg rounded-2xl">
            
            {/* Team Size Slider */}
            <div>
              <div className="flex items-center justify-between mb-space-2xs">
                <span className="font-label-lg text-label-lg text-on-primary font-semibold">Team Size</span>
                <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                  {teamSize} {teamSize === 100 ? "100+ Enterprise" : "people"}
                </span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="100" 
                step="5" 
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-border-navy rounded-lg appearance-none cursor-pointer accent-secondary" 
              />
              <div className="flex justify-between font-body-sm text-body-sm text-text-on-dark-muted mt-space-2xs">
                <span>5 members</span>
                <span>50 members</span>
                <span>100+ Enterprise</span>
              </div>
            </div>
            
            {/* City Selector */}
            <div>
              <span className="block font-label-caps text-label-caps uppercase tracking-wider text-text-on-dark-muted mb-space-2xs">
                Select Target City
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-2xs">
                {cities.map((c) => (
                  <button 
                    key={c}
                    type="button" 
                    onClick={() => setCity(c)}
                    className={`py-space-xs px-space-2xs rounded-lg text-center font-label-md text-label-md transition-all ${
                      city === c 
                        ? "bg-secondary text-on-secondary font-bold" 
                        : "bg-surface-navy text-text-on-dark-muted hover:text-on-primary"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Calculation Result & Breakdown Display */}
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          {/* Breakdown Grid */}
          <div className="bg-surface-navy-muted rounded-2xl p-space-lg">
            <h3 className="font-label-caps text-label-caps uppercase tracking-wider text-text-on-dark-muted mb-space-md font-bold">
              Traditional Office Setup Costs (Sunk CapEx)
            </h3>
            <div className="grid grid-cols-2 gap-space-md font-body-md text-body-md">
              <div className="bg-surface-navy/70 p-space-sm rounded-xl">
                <span className="block font-body-sm text-body-sm text-text-on-dark-muted">6-Month Deposit</span>
                <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
                  {formatCurrency(deposit)}
                </span>
              </div>
              <div className="bg-surface-navy/70 p-space-sm rounded-xl">
                <span className="block font-body-sm text-body-sm text-text-on-dark-muted">Interior Fit-outs</span>
                <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
                  {formatCurrency(interior)}
                </span>
              </div>
              <div className="bg-surface-navy/70 p-space-sm rounded-xl">
                <span className="block font-body-sm text-body-sm text-text-on-dark-muted">Furniture & Seating</span>
                <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
                  {formatCurrency(furniture)}
                </span>
              </div>
              <div className="bg-surface-navy/70 p-space-sm rounded-xl">
                <span className="block font-body-sm text-body-sm text-text-on-dark-muted">IT & Setup Cabling</span>
                <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
                  {formatCurrency(itSetup)}
                </span>
              </div>
            </div>
          </div>
          
          {/* Total Savings Hero Card */}
          <div className="bg-gradient-to-r from-secondary-container to-secondary p-space-lg rounded-2xl text-on-primary shadow-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-primary/90 font-bold block mb-1">
                Estimated CapEx Savings with WeeSpaces
              </span>
              <span className="font-display-hero text-display-hero text-on-primary font-bold tracking-tight block">
                {formatCurrency(totalSavings)}
              </span>
              <span className="font-body-sm text-body-sm text-on-primary/80">
                *Excludes monthly recurring maintenance and utility savings
              </span>
            </div>
            <Link 
              href="/pricing"
              className="shrink-0 px-space-md py-space-sm bg-surface-navy hover:bg-surface-navy-muted text-on-primary font-label-lg text-label-lg rounded-xl transition-all text-center"
            >
              Show Workspace Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
