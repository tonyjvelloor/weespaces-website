import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import { MapPin, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coworking Space Saravanampatti, Coimbatore | WeeSpaces',
  description: 'Managed workspace in Saravanampatti, the IT corridor of Coimbatore. State-of-the-art facilities for growing tech companies.',
};

export default function SEOPage() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WeeSpaces Coworking Space Saravanampatti",
    "image": "https://www.weespaces.in/images/branches/coimbatore/exterior-tall.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vidyanagar 3rd Street, Vidya Nagar, Civil Aerodrome Post, Kalapatti",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641014",
      "addressCountry": "IN"
    },
    "url": "https://www.weespaces.in/coworking-space-saravanampatti",
    "telephone": "+919999999999"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-24 pb-20">
      <section className="relative py-20 overflow-hidden bg-navy-dark border-b border-white/10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-8">
              <MapPin className="w-4 h-4" />
              Location Spotlight
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Coworking Space <span className="text-accent">Saravanampatti, Coimbatore</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Managed workspace in Saravanampatti, the IT corridor of Coimbatore. State-of-the-art facilities for growing tech companies. Join the WeeSpaces community and scale your business without the overhead of traditional office leases.
            </p>
            <Link href="/book-tour" className="bg-accent text-navy font-bold py-3 px-8 rounded-xl hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(242,156,31,0.3)]">
              Book a Tour
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <h2 className="text-3xl font-bold mb-6">Why choose WeeSpaces Saravanampatti, Coimbatore?</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> Enterprise-grade High Speed WiFi
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> Fully furnished, ergonomic workspaces
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> 24/7 Security and Access Control
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> Unlimited Tea & Coffee
            </li>
          </ul>
        </ScrollReveal>
        <ScrollReveal direction="right" className="bg-navy-light/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-6">Reserve your space</h3>
          <LeadForm branch="coimbatore" source="SEO: saravanampatti" />
        </ScrollReveal>
      </section>
    </div>
    </>
  );
}
