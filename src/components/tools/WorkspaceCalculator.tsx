'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, Building2, CheckCircle } from 'lucide-react';

const CITIES = [
  { id: 'kochi', name: 'Kochi', rentPerSqFt: 65, weeSpacesPerSeat: 7500 },
  { id: 'coimbatore', name: 'Coimbatore', rentPerSqFt: 70, weeSpacesPerSeat: 8000 },
  { id: 'trivandrum', name: 'Trivandrum', rentPerSqFt: 60, weeSpacesPerSeat: 7000 },
  { id: 'calicut', name: 'Calicut', rentPerSqFt: 50, weeSpacesPerSeat: 6500 },
];

export default function WorkspaceCalculator() {
  const [teamSize, setTeamSize] = useState<number>(20);
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);

  // Constants
  const sqFtPerPerson = 70;
  const totalSqFt = teamSize * sqFtPerPerson;
  
  // Traditional Office Monthly (OpEx)
  const tradRent = totalSqFt * selectedCity.rentPerSqFt;
  const tradElectricity = teamSize * 800;
  const tradInternet = 5000 + (teamSize * 100);
  const tradMaintenance = totalSqFt * 10;
  const tradHousekeeping = teamSize * 500;
  const tradSecurity = 15000; // Fixed per office

  const tradMonthlyOpEx = tradRent + tradElectricity + tradInternet + tradMaintenance + tradHousekeeping + tradSecurity;
  
  // Traditional Office Upfront (CapEx & Deposit)
  const tradFitOut = totalSqFt * 1500; // ₹1500 per sq ft for interiors
  const tradFurniture = teamSize * 25000;
  const tradDeposit = tradRent * 6; // 6 months deposit
  const tradCapEx = tradFitOut + tradFurniture + tradDeposit;

  // WeeSpaces Monthly
  const weeMonthly = teamSize * selectedCity.weeSpacesPerSeat;
  const weeDeposit = weeMonthly * 2; // 2 months deposit
  
  // 3-Year Projection
  const months = 36;
  const trad3YearTotal = (tradMonthlyOpEx * months) + tradFitOut + tradFurniture; // Exclude deposit from sunk cost, but it's locked capital
  const wee3YearTotal = weeMonthly * months;

  const savings = trad3YearTotal - wee3YearTotal;
  const savingsPercent = Math.round((savings / trad3YearTotal) * 100);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden">
      <div className="p-8 lg:p-10 bg-navy text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Calculator className="w-8 h-8 text-accent" />
            Workspace Savings Calculator
          </h2>
          <p className="text-white/70">Estimate your 3-year OpEx and CapEx savings.</p>
        </div>
        <div className="flex gap-4">
           <div className="flex flex-col">
             <label className="text-sm font-bold text-white/50 mb-1 uppercase tracking-wider">Team Size</label>
             <input 
               type="number" 
               min="5" 
               max="500" 
               value={teamSize} 
               onChange={(e) => setTeamSize(Number(e.target.value))}
               className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white font-bold w-32 focus:outline-none focus:border-accent"
             />
           </div>
           <div className="flex flex-col">
             <label className="text-sm font-bold text-white/50 mb-1 uppercase tracking-wider">Location</label>
             <select 
               value={selectedCity.id}
               onChange={(e) => setSelectedCity(CITIES.find(c => c.id === e.target.value) || CITIES[0])}
               className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white font-bold w-40 focus:outline-none focus:border-accent appearance-none"
             >
               {CITIES.map(c => <option key={c.id} value={c.id} className="text-gray-900">{c.name}</option>)}
             </select>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
         {/* Breakdown Column */}
         <div className="p-8 lg:p-10 border-r border-gray-100 bg-gray-50/50">
            <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-4">Monthly Operational Breakdown</h3>
            
            <div className="space-y-4 mb-8">
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Office Rent (~{formatCurrency(selectedCity.rentPerSqFt)}/sq.ft)</span>
                  <span className="font-bold text-gray-900">{formatCurrency(tradRent)}</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Electricity & HVAC</span>
                  <span className="font-bold text-gray-900">{formatCurrency(tradElectricity)}</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Enterprise Internet</span>
                  <span className="font-bold text-gray-900">{formatCurrency(tradInternet)}</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Facility Maintenance</span>
                  <span className="font-bold text-gray-900">{formatCurrency(tradMaintenance)}</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Housekeeping & Pantry</span>
                  <span className="font-bold text-gray-900">{formatCurrency(tradHousekeeping)}</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">24/7 Security</span>
                  <span className="font-bold text-gray-900">{formatCurrency(tradSecurity)}</span>
               </div>
            </div>

            <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-4">Upfront Capital Expenditure (CapEx)</h3>
            
            <div className="space-y-4">
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Interior Fit-out & Networking</span>
                  <span className="font-bold text-gray-900">{formatCurrency(tradFitOut)}</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Ergonomic Furniture</span>
                  <span className="font-bold text-gray-900">{formatCurrency(tradFurniture)}</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Security Deposit (Locked Capital)</span>
                  <span className="font-bold text-gray-900">{formatCurrency(tradDeposit)}</span>
               </div>
            </div>
         </div>

         {/* Results Column */}
         <div className="p-8 lg:p-10 flex flex-col">
            <div className="flex items-center gap-2 mb-8">
               <span className="px-3 py-1 bg-accent/10 text-accent font-bold text-xs uppercase tracking-wider rounded-full">3-Year Projection</span>
            </div>

            <div className="space-y-6 flex-grow">
               <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex justify-between items-center">
                  <div>
                     <div className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">Traditional Office</div>
                     <div className="text-3xl font-bold text-gray-900">{formatCurrency(trad3YearTotal)}</div>
                  </div>
                  <Building2 className="w-8 h-8 text-gray-300" />
               </div>

               <div className="bg-navy rounded-2xl p-6 border border-navy shadow-lg flex justify-between items-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[40px]"></div>
                  <div className="relative z-10">
                     <div className="text-accent text-sm font-bold uppercase tracking-wider mb-1">WeeSpaces (All-Inclusive)</div>
                     <div className="text-3xl font-bold text-white">{formatCurrency(wee3YearTotal)}</div>
                  </div>
                  <CheckCircle className="w-8 h-8 text-accent relative z-10" />
               </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
               <div className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Total Estimated Savings</div>
               <div className="text-4xl md:text-5xl font-black text-green-600 mb-2">
                  {formatCurrency(savings)}
               </div>
               <p className="text-green-700 font-medium">You save approximately {savingsPercent}% by avoiding CapEx and operational overhead.</p>
               
               <button className="w-full mt-8 bg-accent text-navy font-bold py-4 rounded-xl shadow-lg hover:shadow-accent/40 transition-all flex items-center justify-center gap-2">
                  Get a Detailed Proposal <ArrowRight className="w-5 h-5" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
