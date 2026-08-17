"use client";

import React, { useState, useMemo } from 'react';
import { calculatorConfig } from '@/data/calculator';
import { IndianRupee, MapPin, Users, Building, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function VirtualOfficeCalculator() {
  const [citySlug, setCitySlug] = useState(calculatorConfig.cities[0].slug);
  const [teamSize, setTeamSize] = useState(5);
  const [tier, setTier] = useState<'standard' | 'premium'>('standard');

  const selectedCity = useMemo(() => 
    calculatorConfig.cities.find(c => c.slug === citySlug) || calculatorConfig.cities[0], 
  [citySlug]);

  const calculations = useMemo(() => {
    const sqft = calculatorConfig.sqftPerPerson * teamSize;
    const rent = sqft * (tier === 'premium' ? selectedCity.pricePerSqftPremium : selectedCity.pricePerSqftStandard);
    const electricity = sqft * selectedCity.electricityPerSqft;
    const maintenance = sqft * selectedCity.maintenancePerSqft;
    const internet = selectedCity.internetMonthly;
    const adminStaff = selectedCity.adminStaffMonthly;

    const physicalMonthlyCost = rent + electricity + maintenance + internet + adminStaff;
    const physicalYearlyCost = physicalMonthlyCost * 12;
    const deposit = rent * selectedCity.depositMonths;

    const voYearlyCost = calculatorConfig.virtualOfficeYearlyCost;
    const savingsYearly = physicalYearlyCost - voYearlyCost;

    return {
      sqft,
      rent,
      electricity,
      maintenance,
      internet,
      adminStaff,
      physicalMonthlyCost,
      physicalYearlyCost,
      deposit,
      voYearlyCost,
      savingsYearly
    };
  }, [selectedCity, teamSize, tier]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-12">
        {/* Left: Inputs */}
        <div className="lg:col-span-5 bg-gray-50 p-8 md:p-10 border-r border-gray-100">
          <h2 className="text-2xl font-bold text-navy mb-8">Calculate Your Costs</h2>
          
          <div className="space-y-8">
            {/* City Selection */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" /> Select City
              </label>
              <div className="grid grid-cols-2 gap-3">
                {calculatorConfig.cities.map(city => (
                  <button
                    key={city.slug}
                    onClick={() => setCitySlug(city.slug)}
                    className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                      citySlug === city.slug 
                        ? 'bg-navy text-white border-navy shadow-md' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent'
                    }`}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Team Size Slider */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center justify-between">
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-accent" /> Team Size</span>
                <span className="text-navy bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm">{teamSize} People</span>
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>1</span>
                <span>50</span>
              </div>
            </div>

            {/* Office Standard */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <Building className="w-4 h-4 text-accent" /> Office Quality
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTier('standard')}
                  className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                    tier === 'standard' 
                      ? 'bg-navy text-white border-navy shadow-md' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent'
                  }`}
                >
                  Standard
                </button>
                <button
                  onClick={() => setTier('premium')}
                  className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    tier === 'premium' 
                      ? 'bg-navy text-white border-navy shadow-md' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent'
                  }`}
                >
                  Premium <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded uppercase">CBD</span>
                </button>
              </div>
            </div>
            
            <div className="bg-blue-50 text-blue-800 text-sm p-4 rounded-xl flex gap-3 items-start border border-blue-100">
               <HelpCircle className="w-5 h-5 shrink-0 mt-0.5 text-blue-600" />
               <p>This calculator estimates physical office costs based on local market rates ({calculations.sqft} sq.ft required for {teamSize} people).</p>
            </div>
          </div>
        </div>

        {/* Right: Results */}
        <div className="lg:col-span-7 p-8 md:p-10 flex flex-col h-full bg-white relative overflow-hidden">
          {/* Background graphic */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

          <h2 className="text-2xl font-bold text-navy mb-8 relative z-10">Estimated Yearly Costs</h2>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-10 relative z-10">
            {/* Physical Office Card */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Physical Office</div>
              <div className="text-3xl font-black text-gray-800 mb-6">{formatCurrency(calculations.physicalYearlyCost)}</div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-gray-600">
                  <span>Rent (Yearly)</span>
                  <span className="font-medium text-gray-800">{formatCurrency(calculations.rent * 12)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Electricity & Maint.</span>
                  <span className="font-medium text-gray-800">{formatCurrency((calculations.electricity + calculations.maintenance) * 12)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Internet & Admin</span>
                  <span className="font-medium text-gray-800">{formatCurrency((calculations.internet + calculations.adminStaff) * 12)}</span>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-200 flex justify-between items-center text-gray-500 text-xs">
                  <span>+ Security Deposit</span>
                  <span className="font-bold">{formatCurrency(calculations.deposit)}</span>
                </div>
              </div>
            </div>

            {/* Virtual Office Card */}
            <div className="bg-navy rounded-2xl p-6 border border-navy shadow-xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full pointer-events-none"></div>
              <div className="text-sm font-bold text-accent uppercase tracking-wider mb-2">WeeSpaces Virtual Office</div>
              <div className="text-3xl font-black text-white mb-6">{formatCurrency(calculations.voYearlyCost)}</div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-white/80">
                  <span>Subscription</span>
                  <span className="font-medium text-white">{formatCurrency(calculations.voYearlyCost)}</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span>Electricity & Maint.</span>
                  <span className="font-medium text-white">₹0</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span>Internet & Admin</span>
                  <span className="font-medium text-white">₹0</span>
                </div>
                <div className="pt-3 mt-3 border-t border-white/20 flex justify-between items-center text-white/60 text-xs">
                  <span>+ Security Deposit</span>
                  <span className="font-bold">₹0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="mt-auto bg-green-50 border border-green-200 rounded-2xl p-6 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
               <div className="text-green-700 font-bold mb-1">Your Total Savings</div>
               <div className="text-3xl md:text-4xl font-black text-green-600 flex items-center gap-2">
                 <IndianRupee className="w-8 h-8" />
                 {formatCurrency(calculations.savingsYearly).replace('₹', '')} <span className="text-xl">/ year</span>
               </div>
            </div>
            <Link 
              href={`/virtual-office/${selectedCity.slug}`}
              className="bg-green-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg shrink-0"
            >
              Get Virtual Office <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
