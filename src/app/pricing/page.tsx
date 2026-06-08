"use client";

import { useState } from 'react';
import Link from 'next/link';
import TourBookingWidget from '@/components/TourBookingWidget';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { CheckCircle } from 'lucide-react';

const branches = [
  { id: 'all', name: 'Compare All', isNew: false },
  { id: 'trivandrum', name: 'Trivandrum', isNew: false },
  { id: 'ernakulam', name: 'Ernakulam', isNew: false },
  { id: 'calicut', name: 'Calicut', isNew: false },
  { id: 'coimbatore', name: 'Coimbatore', isNew: true },
];

const pricingData = {
  trivandrum: {
    hotDesk: '₹4,500/mo',
    dedicatedDesk: '₹6,000/mo',
    privateCabin: '₹18,000/mo',
    virtualOffice: '₹10,000/yr',
  },
  ernakulam: {
    hotDesk: '₹5,000/mo',
    dedicatedDesk: '₹6,500/mo',
    privateCabin: '₹20,000/mo',
    virtualOffice: '₹10,000/yr',
  },
  calicut: {
    hotDesk: '₹4,000/mo',
    dedicatedDesk: '₹5,500/mo',
    privateCabin: '₹16,000/mo',
    virtualOffice: '₹10,000/yr',
  },
  coimbatore: {
    hotDesk: '₹5,000/mo',
    dedicatedDesk: '₹6,500/mo',
    privateCabin: '₹22,000/mo',
    virtualOffice: '₹10,000/yr',
  }
};

export default function PricingPage() {
  const [activeBranch, setActiveBranch] = useState('trivandrum');
  
  const currentPricing = activeBranch !== 'all' ? pricingData[activeBranch as keyof typeof pricingData] : null;

  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-white/70 text-lg">Choose your preferred location to see tailored plans for individuals, startups, and enterprise teams.</p>
        </ScrollReveal>

        {/* Branch Selector */}
        <ScrollReveal direction="up" delay={0.1} className="flex flex-wrap justify-center gap-4 mb-16">
          {branches.map(branch => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(branch.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2
                ${activeBranch === branch.id 
                  ? 'bg-accent text-navy glow' 
                  : 'glass text-white hover:bg-white/10'}`}
            >
              {branch.name}
              {branch.isNew && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeBranch === branch.id ? 'bg-navy/20 text-navy' : 'bg-accent/20 text-accent border border-accent/30'}`}>NEW</span>
              )}
            </button>
          ))}
        </ScrollReveal>

        {/* Pricing Cards or Comparison Table */}
        {activeBranch === 'all' ? (
          <ScrollReveal delay={0.1} className="mb-24 overflow-x-auto">
            <MouseGlowCard className="glass rounded-xl p-6 md:p-10 border border-white/10 w-full min-w-[800px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 font-bold text-lg">Workspace</th>
                    <th className="py-4 px-4 font-bold text-accent">Trivandrum</th>
                    <th className="py-4 px-4 font-bold text-accent">Ernakulam</th>
                    <th className="py-4 px-4 font-bold text-accent">Calicut</th>
                    <th className="py-4 px-4 font-bold text-accent">Coimbatore</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-bold">Hot Desk</td>
                    <td className="py-6 px-4">{pricingData.trivandrum.hotDesk}</td>
                    <td className="py-6 px-4">{pricingData.ernakulam.hotDesk}</td>
                    <td className="py-6 px-4">{pricingData.calicut.hotDesk}</td>
                    <td className="py-6 px-4">{pricingData.coimbatore.hotDesk}</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-bold">Dedicated Desk</td>
                    <td className="py-6 px-4">{pricingData.trivandrum.dedicatedDesk}</td>
                    <td className="py-6 px-4">{pricingData.ernakulam.dedicatedDesk}</td>
                    <td className="py-6 px-4">{pricingData.calicut.dedicatedDesk}</td>
                    <td className="py-6 px-4">{pricingData.coimbatore.dedicatedDesk}</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-bold">Private Cabin</td>
                    <td className="py-6 px-4">{pricingData.trivandrum.privateCabin}</td>
                    <td className="py-6 px-4">{pricingData.ernakulam.privateCabin}</td>
                    <td className="py-6 px-4">{pricingData.calicut.privateCabin}</td>
                    <td className="py-6 px-4">{pricingData.coimbatore.privateCabin}</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-bold">Virtual Office</td>
                    <td className="py-6 px-4">{pricingData.trivandrum.virtualOffice}</td>
                    <td className="py-6 px-4">{pricingData.ernakulam.virtualOffice}</td>
                    <td className="py-6 px-4">{pricingData.calicut.virtualOffice}</td>
                    <td className="py-6 px-4">{pricingData.coimbatore.virtualOffice}</td>
                  </tr>
                </tbody>
              </table>
            </MouseGlowCard>
          </ScrollReveal>
        ) : (
          currentPricing && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {/* Card 1 */}
              <ScrollReveal delay={0.1} className="h-full">
                <MouseGlowCard className="glass p-8 rounded-xl border-t-4 border-t-white/10 hover:border-t-accent transition-all flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2">Hot Desk</h3>
                  <p className="text-white/60 text-sm mb-6 h-10">Flexible seating in our premium open coworking area.</p>
                  <div className="text-3xl font-bold mb-6 text-accent">{currentPricing.hotDesk}</div>
                  <ul className="space-y-4 mb-8 text-sm text-white/80 flex-grow">
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> High-speed Wi-Fi</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Unlimited Tea/Coffee</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Lounge Access</li>
                  </ul>
                  <Link href={`/contact?plan=Hot Desk&branch=${activeBranch}`} className="block text-center w-full mt-auto py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors font-medium relative z-10">Select Plan</Link>
                </MouseGlowCard>
              </ScrollReveal>

              {/* Card 2 */}
              <ScrollReveal delay={0.2} className="h-full transform md:-translate-y-4">
                <MouseGlowCard className="glass p-8 rounded-xl border-t-4 border-t-accent glow relative flex flex-col h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-navy text-xs font-bold px-4 py-1 rounded-full shadow-lg z-20">MOST POPULAR</div>
                  <h3 className="text-xl font-bold mb-2">Dedicated Desk</h3>
                  <p className="text-white/60 text-sm mb-6 h-10">Your own fixed desk setup with lockable storage.</p>
                  <div className="text-3xl font-bold mb-6 text-accent">{currentPricing.dedicatedDesk}</div>
                  <ul className="space-y-4 mb-8 text-sm text-white/80 flex-grow">
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Everything in Hot Desk</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Fixed Personal Desk</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> 2hrs Conference Room</li>
                  </ul>
                  <Link href={`/contact?plan=Dedicated Desk&branch=${activeBranch}`} className="block text-center w-full mt-auto py-3 rounded-xl bg-accent hover:bg-accent-hover text-navy transition-colors font-bold relative z-10">Select Plan</Link>
                </MouseGlowCard>
              </ScrollReveal>

              {/* Card 3 */}
              <ScrollReveal delay={0.3} className="h-full">
                <MouseGlowCard className="glass p-8 rounded-xl border-t-4 border-t-white/10 hover:border-t-accent transition-all flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2">Private Cabin</h3>
                  <p className="text-white/60 text-sm mb-6 h-10">Secure, enclosed office space for your team.</p>
                  <div className="text-3xl font-bold mb-6 text-accent">{currentPricing.privateCabin}</div>
                  <ul className="space-y-4 mb-8 text-sm text-white/80 flex-grow">
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Fully Furnished</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Biometric Access</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> 5hrs Conference Room</li>
                  </ul>
                  <Link href={`/contact?plan=Private Cabin&branch=${activeBranch}`} className="block text-center w-full mt-auto py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors font-medium relative z-10">Select Plan</Link>
                </MouseGlowCard>
              </ScrollReveal>

              {/* Card 4 */}
              <ScrollReveal delay={0.4} className="h-full">
                <MouseGlowCard className="glass p-8 rounded-xl border-t-4 border-t-white/10 hover:border-t-accent transition-all flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2">Virtual Office</h3>
                  <p className="text-white/60 text-sm mb-6 h-10">Premium address for GST and business registration.</p>
                  <div className="text-3xl font-bold mb-6 text-accent">{currentPricing.virtualOffice}</div>
                  <ul className="space-y-4 mb-8 text-sm text-white/80 flex-grow">
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Prime Business Address</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Mail Handling</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> GST Registration Proof</li>
                  </ul>
                  <Link href={`/contact?plan=Virtual Office&branch=${activeBranch}`} className="block text-center w-full mt-auto py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors font-medium relative z-10">Select Plan</Link>
                </MouseGlowCard>
              </ScrollReveal>
            </div>
          )
        )}

        {/* Calendly Booking Widget Section */}
        <ScrollReveal direction="up" className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Not sure which plan fits?</h2>
            <p className="text-white/70">Book a free tour at our {branches.find(b => b.id === activeBranch)?.name} location and experience the space yourself.</p>
          </div>
          <MouseGlowCard className="glass rounded-3xl overflow-hidden border border-white/10">
            <TourBookingWidget branch={activeBranch} />
          </MouseGlowCard>
        </ScrollReveal>

      </div>
    </div>
  );
}
