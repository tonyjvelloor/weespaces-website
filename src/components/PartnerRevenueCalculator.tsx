'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, Building2, Users, Globe, ArrowRight } from 'lucide-react';

type TierKey = 'standard' | 'premium' | 'luxury';

const TIERS: Record<
  TierKey,
  {
    name: string;
    ownerShare: number;
    weeShare: number;
    tagline: string;
    badge: string;
  }
> = {
  standard: {
    name: 'Standard Centre',
    ownerShare: 60,
    weeShare: 40,
    tagline: 'Functional ready-to-move commercial spaces',
    badge: '60% Owner / 40% Wee Spaces',
  },
  premium: {
    name: 'Premium Centre',
    ownerShare: 65,
    weeShare: 35,
    tagline: 'Modern Grade-A interiors, cabins & meeting suites',
    badge: '65% Owner / 35% Wee Spaces',
  },
  luxury: {
    name: 'Luxury Centre',
    ownerShare: 70,
    weeShare: 30,
    tagline: 'Flagship executive lounges & prime commercial hubs',
    badge: '70% Owner / 30% Wee Spaces',
  },
};

function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PartnerRevenueCalculator() {
  const [tier, setTier] = useState<TierKey>('premium');
  const [seats, setSeats] = useState<number>(50);
  const [occupancy, setOccupancy] = useState<number>(80);
  const [seatPrice, setSeatPrice] = useState<number>(4000);
  const [voClients, setVoClients] = useState<number>(50);

  const selectedTier = TIERS[tier];
  const ownerPct = selectedTier.ownerShare / 100;
  const weePct = selectedTier.weeShare / 100;

  // Coworking math
  const occupiedSeats = Math.round((seats * occupancy) / 100);
  const monthlySeatGross = occupiedSeats * seatPrice;
  const annualSeatGross = monthlySeatGross * 12;

  // Virtual Office math (₹9,000/client/year per proposal)
  const annualVoGross = voClients * 9000;
  const monthlyVoEquivalent = annualVoGross / 12;

  // Combined totals
  const totalMonthlyGross = monthlySeatGross + monthlyVoEquivalent;
  const totalAnnualGross = annualSeatGross + annualVoGross;

  const ownerMonthlyShare = totalMonthlyGross * ownerPct;
  const ownerAnnualShare = totalAnnualGross * ownerPct;
  const owner3YearShare = ownerAnnualShare * 3;
  const weeAnnualShare = totalAnnualGross * weePct;

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-6 sm:px-10 py-6 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Interactive Partner Revenue Calculator
            </h3>
            <p className="text-sm text-white/70">
              Estimate your monthly &amp; 3-year income based on Net Eligible Collections
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-white/10 text-accent px-3.5 py-1.5 rounded-full text-xs font-bold border border-white/15 self-start sm:self-center">
          <TrendingUp className="w-3.5 h-3.5" /> Live Proposal Model
        </span>
      </div>

      <div className="grid lg:grid-cols-12">
        {/* Left Controls */}
        <div className="lg:col-span-7 p-6 sm:p-10 space-y-7 border-b lg:border-b-0 lg:border-r border-slate-200">
          {/* Tier Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              1. Select Centre Category (Revenue-Share Tier)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(Object.keys(TIERS) as TierKey[]).map((key) => {
                const t = TIERS[key];
                const active = tier === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTier(key)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                      active
                        ? 'border-navy bg-navy text-white shadow-lg'
                        : 'border-slate-200 bg-slate-50 text-navy hover:border-navy/40'
                    }`}
                  >
                    <div className="text-sm font-black">{t.name}</div>
                    <div className={`text-lg font-black mt-1 ${active ? 'text-accent' : 'text-navy'}`}>
                      {t.ownerShare}% Owner
                    </div>
                    <div className={`text-[11px] mt-0.5 ${active ? 'text-white/70' : 'text-slate-500'}`}>
                      {t.weeShare}% Wee Spaces
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Seats Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-navy flex items-center gap-2">
                <Building2 className="w-4 h-4 text-accent" /> Total Seat Capacity
              </label>
              <span className="bg-slate-100 text-navy font-black px-3 py-1 rounded-lg text-sm">
                {seats} Seats
              </span>
            </div>
            <input
              type="range"
              min={20}
              max={150}
              step={5}
              value={seats}
              onChange={(e) => setSeats(Number(e.target.value))}
              className="w-full accent-navy h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
              <span>20 Seats</span>
              <span>50 Seats (Proposal Base)</span>
              <span>150 Seats</span>
            </div>
          </div>

          {/* Occupancy Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-navy flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" /> Average Occupancy
              </label>
              <span className="bg-slate-100 text-navy font-black px-3 py-1 rounded-lg text-sm">
                {occupancy}% ({occupiedSeats} Occupied)
              </span>
            </div>
            <input
              type="range"
              min={40}
              max={100}
              step={5}
              value={occupancy}
              onChange={(e) => setOccupancy(Number(e.target.value))}
              className="w-full accent-navy h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
              <span>40%</span>
              <span>60% (Yr 1 Avg)</span>
              <span>85% (Yr 3 Avg)</span>
              <span>100%</span>
            </div>
          </div>

          {/* Seat Price & VO Clients */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-navy">Avg. Seat Price / Mo</label>
                <span className="bg-slate-100 text-navy font-black px-2.5 py-1 rounded-lg text-xs">
                  {formatINR(seatPrice)}
                </span>
              </div>
              <input
                type="range"
                min={3500}
                max={6500}
                step={500}
                value={seatPrice}
                onChange={(e) => setSeatPrice(Number(e.target.value))}
                className="w-full accent-navy h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                <span>₹3,500</span>
                <span>₹4,000 (Base)</span>
                <span>₹6,500</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-navy flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-accent" /> Virtual Office Clients
                </label>
                <span className="bg-slate-100 text-navy font-black px-2.5 py-1 rounded-lg text-xs">
                  {voClients} Clients
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={voClients}
                onChange={(e) => setVoClients(Number(e.target.value))}
                className="w-full accent-navy h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                <span>0</span>
                <span>50 Clients</span>
                <span>100 Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Estimated Owner Monthly Share ({selectedTier.ownerShare}%)
            </div>
            <div className="text-4xl sm:text-5xl font-black text-navy tracking-tight">
              {formatINR(ownerMonthlyShare)}
              <span className="text-base font-bold text-slate-400"> / mo</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="text-[11px] font-bold uppercase text-slate-400">Your Annual Share</div>
                <div className="text-xl font-black text-emerald-700 mt-1">{formatINR(ownerAnnualShare)}</div>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="text-[11px] font-bold uppercase text-slate-400">3-Year Cumulative</div>
                <div className="text-xl font-black text-navy mt-1">{formatINR(owner3YearShare)}</div>
              </div>
            </div>

            <div className="mt-6 space-y-2.5 text-sm border-t border-slate-200 pt-5">
              <div className="flex justify-between">
                <span className="text-slate-600">Annual Coworking Collections</span>
                <span className="font-bold text-navy">{formatINR(annualSeatGross)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Annual Virtual Office Upside (₹9k/yr)</span>
                <span className="font-bold text-emerald-700">+{formatINR(annualVoGross)}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2.5">
                <span className="text-slate-600 font-semibold">Total Annual Project Revenue</span>
                <span className="font-black text-navy">{formatINR(totalAnnualGross)}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Wee Spaces Operator Share ({selectedTier.weeShare}%)</span>
                <span className="font-semibold">{formatINR(weeAnnualShare)} / yr</span>
              </div>
            </div>
          </div>

          <div className="mt-7">
            <a
              href="#partner-form"
              className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white font-black py-4 px-6 rounded-xl transition-all shadow-lg"
            >
              Lock In Your Property Assessment <ArrowRight className="w-4 h-4 text-accent" />
            </a>
            <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
              *Illustrative commercial planning model on Net Eligible Collections (excluding GST, refunds &amp; refundable security deposits, prior to applicable TDS). Recommended marketing budget of ₹5,000/month funded separately by property owner. Final pricing varies by city and property grade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
