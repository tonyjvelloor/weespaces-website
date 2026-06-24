"use client";

import { useState } from 'react';
import { Building2, Users, IndianRupee, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function OfficeCalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [city, setCity] = useState('kochi');

  // Basic estimation logic
  // Assume 50 sq ft per person
  const sqFtPerPerson = 50;
  const totalSqFt = teamSize * sqFtPerPerson;

  const cityRentRates: Record<string, number> = {
    kochi: 60,
    trivandrum: 55,
    calicut: 50,
    coimbatore: 55,
  };

  const rentPerSqFt = cityRentRates[city] || 60;
  const monthlyRent = totalSqFt * rentPerSqFt;

  // Traditional costs
  const deposit = monthlyRent * 6; // 6 months deposit
  const interior = totalSqFt * 2000; // ₹2000 per sq ft for fitouts
  const furniture = teamSize * 15000; // ₹15k per workstation
  const setup = 25000; // Internet, wiring, basic setup
  
  const totalCapex = deposit + interior + furniture + setup;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div id="calculator" className="bg-navy-dark border border-white/10 rounded-3xl p-6 lg:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 relative z-10">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-white">Office Setup <span className="text-accent">Cost Calculator</span></h3>
          <p className="text-white/70 mb-8">See exactly how much capital you are tying up in a traditional office lease vs keeping it in your business.</p>

          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-white/80 mb-3 uppercase tracking-wider">
                <Users className="w-4 h-4 text-accent" /> Team Size: {teamSize} people
              </label>
              <input 
                type="range" 
                min="2" 
                max="50" 
                value={teamSize} 
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full accent-accent bg-white/10 rounded-lg h-2 appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-white/50 mt-2">
                <span>2</span>
                <span>50+</span>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-white/80 mb-3 uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-accent" /> Select City
              </label>
              <div className="grid grid-cols-2 gap-3">
                {Object.keys(cityRentRates).map((c) => (
                  <button 
                    key={c}
                    onClick={() => setCity(c)}
                    className={`py-3 px-4 rounded-xl text-sm font-bold transition-all border ${city === c ? 'bg-accent text-navy border-accent shadow-[0_0_15px_rgba(242,156,31,0.3)]' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
                  >
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy rounded-2xl p-6 lg:p-8 border border-white/5 relative">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <IndianRupee className="w-5 h-5 text-red-400" /> Traditional Office Setup Costs
          </h4>
          
          <ul className="space-y-4 mb-8">
            <li className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-white/60">6-Month Deposit</span>
              <span className="font-bold text-white">{formatCurrency(deposit)}</span>
            </li>
            <li className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-white/60">Interior Fit-outs</span>
              <span className="font-bold text-white">{formatCurrency(interior)}</span>
            </li>
            <li className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-white/60">Furniture</span>
              <span className="font-bold text-white">{formatCurrency(furniture)}</span>
            </li>
            <li className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-white/60">IT & Setup</span>
              <span className="font-bold text-white">{formatCurrency(setup)}</span>
            </li>
          </ul>

          <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 mb-6 text-center">
            <p className="text-sm text-accent font-bold uppercase tracking-wider mb-1">Estimated CapEx Savings with WeeSpaces</p>
            <p className="text-4xl font-black text-white">{formatCurrency(totalCapex)}</p>
            <p className="text-xs text-white/50 mt-2">*Excludes monthly recurring maintenance and utility savings</p>
          </div>

          <Link href="/pricing" className="w-full bg-white text-navy py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            Show Workspace Options <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
