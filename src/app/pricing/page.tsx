"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TourBookingWidget from '@/components/TourBookingWidget';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { CheckCircle } from 'lucide-react';
import { branchData } from '@/data/branches';

const branches = [
  { id: 'all', name: 'Compare All', isNew: false },
  { id: 'trivandrum', name: 'Trivandrum', isNew: false },
  { id: 'ernakulam', name: 'Ernakulam', isNew: false },
  { id: 'calicut', name: 'Calicut', isNew: false },
  { id: 'coimbatore', name: 'Coimbatore', isNew: true },
];

// Remove duplicated pricingData and use branchData directly

export default function PricingPage() {
  const [activeBranch, setActiveBranch] = useState('trivandrum');
  
  const currentPricing = activeBranch !== 'all' ? branchData[activeBranch].pricing : null;

  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-white/70 text-lg">Choose your preferred location to see tailored plans for individuals, startups, and enterprise teams.</p>
        </ScrollReveal>

        {/* Branch Selector */}
        <div className="text-center md:hidden text-white/40 text-xs mb-2 flex items-center justify-center gap-2">
           <span className="text-accent">←</span> Swipe to change location <span className="text-accent">→</span>
        </div>
        <ScrollReveal direction="up" delay={0.1} className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-4 mb-16 pb-4 px-2">
          {branches.map(branch => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(branch.id)}
              className={`whitespace-nowrap shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2
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

        {/* Branch Image Showcase */}
        {activeBranch !== 'all' && (
          <ScrollReveal direction="up" delay={0.2} className="mb-16">
            <div className="grid grid-cols-3 gap-4 md:gap-6 h-48 md:h-80 max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden glass border border-white/10 hidden md:block">
                <Image src="/images/branches/kochi/workspace1.jpg" alt="Workspace" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative rounded-2xl overflow-hidden glass border border-accent/20 col-span-3 md:col-span-1 shadow-[0_0_30px_rgba(242,156,31,0.1)]">
                <Image src="/images/branches/kochi/workspace2.jpg" alt="Private Cabin" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative rounded-2xl overflow-hidden glass border border-white/10 hidden md:block">
                <Image src="/images/branches/trivandrum/image3.jpg" alt="Conference Room" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </ScrollReveal>
        )}

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

        {/* WhatsApp CTA */}
        <ScrollReveal direction="up" delay={0.4} className="mb-24 flex justify-center">
           <a href="https://wa.me/919207189111" target="_blank" rel="noopener noreferrer" className="glass bg-[#25D366]/10 border-[#25D366]/30 hover:bg-[#25D366]/20 border rounded-full px-8 py-4 flex items-center gap-3 transition-all hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span className="text-white font-bold">Not sure which plan? <span className="text-[#25D366]">Chat with us on WhatsApp</span></span>
           </a>
        </ScrollReveal>

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
