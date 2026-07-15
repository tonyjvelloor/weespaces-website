import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, Users, Target } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

import { constructMetadata } from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: "Community & Ecosystem Partners | WeeSpaces",
  description: "WeeSpaces proudly partners with and supports the tech ecosystems across South India including KSUM, GTech, CODISSIA, and TiE.",
  canonicalPath: "/community"
});

const ecosystems = [
  {
    region: "Kerala",
    partners: [
      {
        name: "Kerala Startup Mission (KSUM)",
        description: "The central agency of the Government of Kerala for entrepreneurship development and incubation activities in Kerala.",
        url: "https://startupmission.kerala.gov.in/",
        focus: "Startups & Incubation",
      },
      {
        name: "GTech (Group of Technology Companies)",
        description: "The collaborative body of IT and ITeS companies in Kerala, driving the growth of the tech sector in Trivandrum, Kochi, and Calicut.",
        url: "https://gtechindia.org/",
        focus: "IT & ITeS Industry",
      },
      {
        name: "TiE Kerala",
        description: "Fostering entrepreneurship in Kerala through mentoring, networking, education, incubating, and funding.",
        url: "https://kerala.tie.org/",
        focus: "Entrepreneurship & Mentoring",
      }
    ]
  },
  {
    region: "Tamil Nadu (Coimbatore)",
    partners: [
      {
        name: "CODISSIA",
        description: "The Coimbatore District Small Industries Association, an ISO 9001:2015 organization empowering the micro, small and medium enterprises.",
        url: "https://www.codissia.com/",
        focus: "Manufacturing & MSME",
      },
      {
        name: "TiE Coimbatore",
        description: "Empowering Coimbatore's vibrant ecosystem of founders, manufacturers, and tech innovators.",
        url: "https://coimbatore.tie.org/",
        focus: "Networking & Funding",
      }
    ]
  }
];

export default function CommunityPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url(/images/pattern.svg)]"></div>
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Ecosystem</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              WeeSpaces is proud to support and integrate with the core organizations driving innovation, manufacturing, and technology across South India.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {ecosystems.map((eco, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-navy-dark mb-10 flex items-center gap-4">
                  {eco.region} Ecosystem
                  <div className="h-px bg-navy/10 flex-grow"></div>
                </h2>
              </ScrollReveal>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eco.partners.map((partner, pIdx) => (
                  <ScrollReveal key={pIdx} delay={pIdx * 100}>
                    <div className="bg-white rounded-2xl p-8 border border-navy/5 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col group">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-navy-dark mb-3">{partner.name}</h3>
                      <p className="text-navy/60 mb-6 flex-grow">{partner.description}</p>
                      
                      <div className="flex items-center gap-2 text-sm font-semibold text-navy/40 mb-6 uppercase tracking-wider">
                        <Target className="w-4 h-4" />
                        {partner.focus}
                      </div>

                      {/* SEO-Optimized Outbound Link */}
                      <a 
                        href={partner.url} 
                        target="_blank" 
                        rel="noopener noreferrer external"
                        className="inline-flex items-center gap-2 text-accent font-bold hover:text-navy transition-colors mt-auto"
                      >
                        Visit Official Site <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Partner With Us</h2>
            <p className="text-xl text-white/70 mb-10">
              Are you an incubator, chamber of commerce, or investor network? Let's collaborate to provide world-class infrastructure to your members.
            </p>
            <Link href="/contact" className="bg-accent text-navy-dark px-10 py-5 rounded-xl font-bold text-lg hover:bg-white transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_40px_rgba(56,189,248,0.3)] hover:shadow-[0_0_60px_rgba(56,189,248,0.5)] hover:-translate-y-1">
              Contact Partnership Team <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
