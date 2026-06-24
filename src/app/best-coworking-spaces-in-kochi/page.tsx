import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { CheckCircle, MapPin, Star, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 5 Best Coworking Spaces in Kochi (2024 Guide) | WeeSpaces',
  description: 'Looking for the best coworking space in Kochi? Compare the top shared offices, hot desks, and private cabins on MG Road, Kakkanad, and Edappally.',
};

export default function BestCoworkingKochiPage() {
  const spaces = [
    {
      name: "1. WeeSpaces - MG Road",
      location: "Palal Tower, MG Road, Ernakulam",
      bestFor: "Startups, IT Companies, and Freelancers",
      price: "₹5,000/month",
      features: ["Premium CBD Location", "High-speed Wi-Fi", "Ergonomic Furniture", "Conference Rooms", "24/7 Access for Cabins"],
      description: "Located in the commercial heart of Kerala, WeeSpaces offers a premium coworking environment without the premium price tag. With a focus on community, high-end aesthetics, and zero setup costs, it's the top choice for growing teams.",
      isWeeSpaces: true
    },
    {
      name: "2. Innerspace Coworking",
      location: "Kakkanad",
      bestFor: "Independent Contractors",
      price: "₹6,000/month",
      features: ["Basic Amenities", "Cafeteria", "Meeting Rooms"],
      description: "A popular choice for those looking to be near Infopark. It offers decent amenities but is situated farther from the city center.",
      isWeeSpaces: false
    },
    {
      name: "3. Centre A",
      location: "MG Road, Ernakulam",
      bestFor: "Large Enterprises",
      price: "₹8,000/month",
      features: ["Luxury Fittings", "Valet Parking", "In-house Cafe"],
      description: "A high-end option offering luxury amenities. However, the pricing can be steep for startups and small teams.",
      isWeeSpaces: false
    },
    {
      name: "4. Dotspace",
      location: "Edappally",
      bestFor: "Freelancers",
      price: "₹5,500/month",
      features: ["Vibrant Community", "Event Space", "Flexible Plans"],
      description: "Known for its community events, Dotspace is great for networking, though it can get noisy during peak hours.",
      isWeeSpaces: false
    },
    {
      name: "5. B-Hub",
      location: "Kaloor",
      bestFor: "Students and Early-stage Startups",
      price: "₹4,500/month",
      features: ["Budget-friendly", "Library", "Basic Seating"],
      description: "A no-frills workspace ideal for those on a very tight budget, but lacking in premium corporate infrastructure.",
      isWeeSpaces: false
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-navy-dark min-h-screen">
      {/* Article Header */}
      <section className="container mx-auto px-6 max-w-4xl py-12">
        <ScrollReveal direction="up" className="text-center">
          <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-8">
            <span className="material-symbols-outlined text-[16px]">article</span>
            Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Top 5 Best Coworking Spaces in <span className="text-accent">Kochi</span> (2024 Guide)
          </h1>
          <div className="flex justify-center items-center gap-4 text-white/50 text-sm mb-10">
            <span>By WeeSpaces Editorial</span>
            <span>•</span>
            <span>Updated: June 2024</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="prose prose-invert prose-lg max-w-none">
          <p className="text-white/80 leading-relaxed text-lg">
            Kochi is rapidly emerging as a major hub for IT, startups, and remote workers. With the rise in demand for flexible office solutions, numerous coworking spaces have popped up across the city—from MG Road and Kakkanad to Edappally and Kaloor.
          </p>
          <p className="text-white/80 leading-relaxed text-lg mb-12">
            But how do you choose the right one? Whether you're a freelancer looking for a hot desk or a tech startup needing a private 15-seater cabin, we've ranked the best coworking spaces in Kochi based on location, amenities, pricing, and overall vibe.
          </p>
        </ScrollReveal>
      </section>

      {/* Rankings */}
      <section className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-12">
          {spaces.map((space, index) => (
            <ScrollReveal key={index} direction="up">
              <MouseGlowCard className={`glass p-8 md:p-10 rounded-3xl border transition-all ${space.isWeeSpaces ? 'border-accent/50 bg-accent/5 relative overflow-hidden' : 'border-white/10'}`}>
                {space.isWeeSpaces && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                )}
                
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                       <h2 className="text-2xl md:text-3xl font-bold text-white">{space.name}</h2>
                       {space.isWeeSpaces && <div className="bg-accent text-navy text-xs font-bold px-3 py-1 rounded-full shrink-0 ml-4">TOP PICK</div>}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-6">
                      <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {space.location}</div>
                      <div className="flex items-center gap-1"><Star className="w-4 h-4 text-accent" /> Best for: {space.bestFor}</div>
                    </div>

                    <p className="text-white/80 leading-relaxed mb-6">
                      {space.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-bold text-white mb-3">Key Features:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2 text-sm text-white/70">
                        {space.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 ${space.isWeeSpaces ? 'text-accent' : 'text-white/30'}`} /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className={`md:w-64 p-6 rounded-2xl flex flex-col justify-center items-center text-center shrink-0 ${space.isWeeSpaces ? 'bg-navy border border-accent/20' : 'bg-navy-light/50 border border-white/5'}`}>
                    <p className="text-sm text-white/50 uppercase tracking-wider font-bold mb-2">Starting From</p>
                    <p className={`text-3xl font-bold mb-4 ${space.isWeeSpaces ? 'text-accent' : 'text-white'}`}>{space.price}</p>
                    {space.isWeeSpaces && (
                      <Link href="/coworking-space-in-kochi" className="w-full bg-accent text-navy font-bold py-3 px-4 rounded-xl hover:bg-accent-hover transition-colors text-sm">
                        Book a Tour
                      </Link>
                    )}
                  </div>
                </div>
              </MouseGlowCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Conclusion CTA */}
      <section className="container mx-auto px-6 max-w-4xl py-20 mt-12">
        <ScrollReveal direction="up" className="glass p-12 rounded-3xl border border-accent/30 text-center relative overflow-hidden bg-navy-light/30">
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-full h-32 bg-accent/10 blur-[60px] pointer-events-none"></div>
          <h2 className="text-3xl font-bold mb-6 relative z-10">Why WeeSpaces is the #1 Choice in Kochi</h2>
          <p className="text-lg text-white/70 mb-8 relative z-10 max-w-2xl mx-auto">
            While Kakkanad is great for large IT parks, MG Road offers unmatched connectivity and prestige. WeeSpaces combines this prime CBD location with premium interiors, flexible terms, and competitive pricing.
          </p>
          <Link href="/coworking-space-in-kochi" className="inline-flex items-center gap-2 bg-accent text-navy font-bold py-4 px-8 rounded-xl hover:bg-accent-hover transition-all relative z-10 shadow-[0_0_20px_rgba(242,156,31,0.3)]">
            Explore WeeSpaces Kochi <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
