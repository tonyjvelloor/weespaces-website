import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import LeadForm from '@/components/LeadForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dedicated Desk in Coimbatore | WeeSpaces',
  description: 'Rent a dedicated desk in Coimbatore. Fully furnished coworking space with high-speed internet, meeting room access, and 24/7 security.',
};

export default function DedicatedDeskCoimbatorePage() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WeeSpaces Dedicated Desk Coimbatore",
    "image": "https://www.weespaces.in/images/branches/coimbatore/exterior-tall.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vidyanagar 3rd Street, Vidya Nagar, Civil Aerodrome Post, Kalapatti",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641014",
      "addressCountry": "IN"
    },
    "url": "https://www.weespaces.in/dedicated-desk-coimbatore",
    "telephone": "+919999999999"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-navy-dark border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/90 to-navy-dark/90 bg-[length:200%_200%] animate-mesh mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] -mr-[20vw] -mt-[10vw] pointer-events-none animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)] mb-8">
                <span className="material-symbols-outlined text-[16px]">desk</span>
                Dedicated Desk Rental Coimbatore
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your Own Desk.<br/>
                <span className="text-accent">No Distractions.</span>
              </h1>
              <p className="text-lg text-white/70 mb-10 max-w-xl">
                Lock in your personal workspace in Coimbatore's premium coworking hub. Leave your monitors and belongings securely at your desk every day while enjoying all the perks of a fully managed office.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/book-tour" className="bg-accent text-navy font-bold py-3 px-8 rounded-xl hover:bg-accent-hover transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(242,156,31,0.3)] text-center">
                  Book a Tour
                </Link>
                <Link href="#features" className="border border-white/20 text-white font-bold py-3 px-8 rounded-xl hover:bg-white/5 transition-all w-full sm:w-auto text-center">
                  View Amenities
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
              <Image 
                src="/images/branches/calicut/workspace2.jpg" 
                alt="Dedicated desk workspace in Coimbatore"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose a <span className="text-accent">Dedicated Desk</span>?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Perfect for freelancers, remote workers, and growing teams who need a consistent, professional workspace.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <MouseGlowCard className="glass rounded-3xl p-8 h-full border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-3xl">chair_alt</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Reserved Workspace</h3>
              <p className="text-white/70 leading-relaxed">
                Your desk is yours alone. Set up your dual monitors, ergonomic chair, and personal items, and they'll be exactly where you left them the next day.
              </p>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <MouseGlowCard className="glass rounded-3xl p-8 h-full border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-3xl">wifi</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Internet</h3>
              <p className="text-white/70 leading-relaxed">
                Experience zero downtime with our dual-ISP leased line connections, ensuring your zoom calls and large uploads never drop.
              </p>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <MouseGlowCard className="glass rounded-3xl p-8 h-full border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-3xl">meeting_room</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Meeting Room Credits</h3>
              <p className="text-white/70 leading-relaxed">
                Each dedicated desk comes with complimentary credits to book our premium, soundproofed meeting rooms for client pitches and team huddles.
              </p>
            </MouseGlowCard>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-24 border-t border-white/10 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your workspace?</h2>
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Stop working from coffee shops. Join a vibrant community of professionals at WeeSpaces Coimbatore. Fill out the form to schedule a tour and claim your dedicated desk.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-accent">check_circle</span>
                  24/7 Access to your desk
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-accent">check_circle</span>
                  Unlimited Tea & Coffee
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-accent">check_circle</span>
                  Printing & Scanning Facilities
                </li>
              </ul>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="bg-navy-light/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-6">Claim Your Desk</h3>
                <LeadForm branch="coimbatore" source="Dedicated Desk Coimbatore SEO Page" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
