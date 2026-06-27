'use client';

import { useState } from 'react';
import { virtualOfficePlans } from '@/data/pricing';
import ScrollReveal from './ScrollReveal';

export default function InteractivePlanSelector() {
  const [needsGst, setNeedsGst] = useState(false);
  const [needsIncorporation, setNeedsIncorporation] = useState(false);
  const [needsMail, setNeedsMail] = useState(false);
  const [needsMeeting, setNeedsMeeting] = useState(false);
  const [city, setCity] = useState('');

  // Determine Recommended Plan
  let recommendedPlanId = 'starter';
  if (needsMeeting || (needsMail && needsIncorporation)) {
    recommendedPlanId = 'premium'; // Assuming premium offers priority meeting rooms and mail forwarding
  }
  if (needsIncorporation || needsMail) {
    if (recommendedPlanId !== 'premium') recommendedPlanId = 'professional';
  }
  
  if (needsMeeting && !needsIncorporation && !needsMail) {
    recommendedPlanId = 'professional'; // Base meeting room credits are in Professional
  }

  // If user explicitly wants Premium level features, it should push to Premium, but simple logic for now:
  if (needsMeeting) {
     recommendedPlanId = 'professional';
     // Actually Premium is for businesses needing mail handling & meeting access
  }
  if (needsMeeting && needsMail) {
     recommendedPlanId = 'premium';
  }

  const recommendedPlan = virtualOfficePlans.find(p => p.id === recommendedPlanId) || virtualOfficePlans[0];

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto -mt-10 relative z-20">
      <h2 className="text-3xl font-bold text-navy mb-8 text-center">Find Your Perfect Virtual Office</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Questions */}
        <div className="space-y-6">
          <p className="text-gray-500 font-medium mb-4">What do you need? (Select all that apply)</p>
          
          <label className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl cursor-pointer hover:border-accent/50 transition-colors bg-gray-50/50">
            <input type="checkbox" className="w-5 h-5 text-accent rounded focus:ring-accent" checked={needsGst} onChange={(e) => setNeedsGst(e.target.checked)} />
            <span className="font-bold text-navy">GST Registration</span>
          </label>

          <label className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl cursor-pointer hover:border-accent/50 transition-colors bg-gray-50/50">
            <input type="checkbox" className="w-5 h-5 text-accent rounded focus:ring-accent" checked={needsIncorporation} onChange={(e) => setNeedsIncorporation(e.target.checked)} />
            <span className="font-bold text-navy">Company Incorporation (Pvt Ltd / LLP)</span>
          </label>

          <label className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl cursor-pointer hover:border-accent/50 transition-colors bg-gray-50/50">
            <input type="checkbox" className="w-5 h-5 text-accent rounded focus:ring-accent" checked={needsMail} onChange={(e) => setNeedsMail(e.target.checked)} />
            <span className="font-bold text-navy">Mail Handling & Forwarding</span>
          </label>

          <label className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl cursor-pointer hover:border-accent/50 transition-colors bg-gray-50/50">
            <input type="checkbox" className="w-5 h-5 text-accent rounded focus:ring-accent" checked={needsMeeting} onChange={(e) => setNeedsMeeting(e.target.checked)} />
            <span className="font-bold text-navy">Meeting Room & Workspace Access</span>
          </label>

          <div className="mt-6">
            <label className="block text-gray-500 font-medium mb-2">Preferred City</label>
            <select 
              value={city} 
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none bg-white font-bold text-navy"
            >
              <option value="">Select a city...</option>
              <option value="Kochi">Kochi</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Trivandrum">Trivandrum</option>
              <option value="Calicut">Calicut</option>
            </select>
          </div>
        </div>

        {/* Right Column: Result */}
        <div className="bg-navy rounded-2xl p-8 text-center h-full flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[40px]"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-[40px]"></div>
          
          <div className="relative z-10">
            <p className="text-white/60 font-medium tracking-widest uppercase text-sm mb-4">Recommended Plan</p>
            <h3 className="text-4xl font-bold text-white mb-2">{recommendedPlan.name}</h3>
            {city && <p className="text-accent text-lg font-bold mb-6">in {city}</p>}
            {!city && <p className="text-accent text-lg font-bold mb-6">Select a city</p>}

            <div className="text-left bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
              <ul className="space-y-3">
                {recommendedPlan.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/80 text-sm">
                    <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('lead-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-accent text-navy font-bold py-4 px-6 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              Get My Virtual Office Quote
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-white/40 text-xs mt-4">Transparent pricing. No hidden fees.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
