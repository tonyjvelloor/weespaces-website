import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import NAPBlock from '@/components/NAPBlock';
import Link from 'next/link';
import { branchData } from '@/data/branches';
import {
  MapPin,
  Mail,
  Phone,
  Building2,
  Users,
  FileCheck,
  BadgeCheck,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Virtual Office in India | GST Registration Address | WeeSpaces',
  description:
    'Get a premium virtual office address in Kochi, Trivandrum, Calicut & Coimbatore for GST registration, company registration, and mail handling. Plans from ₹10,000/year.',
  keywords: [
    'virtual office India',
    'virtual office address India',
    'virtual office for GST registration',
    'virtual office Kerala',
    'virtual office Kochi',
    'virtual office Trivandrum',
    'virtual office Calicut',
    'virtual office Coimbatore',
    'GST registration address India',
    'company registration address India',
    'business address India',
    'virtual office plan India',
  ],
  alternates: {
    canonical: 'https://www.weespaces.in/virtual-office',
  },
  openGraph: {
    title: 'Virtual Office in India | GST Registration Address | WeeSpaces',
    description:
      'Premium virtual office addresses across Kerala & Tamil Nadu. Use our address for GST, company registration & mail handling. Starting ₹10,000/year.',
    url: 'https://www.weespaces.in/virtual-office',
    images: [
      {
        url: '/images/branches/kochi/reception.jpg',
        width: 1200,
        height: 630,
        alt: 'WeeSpaces Virtual Office – Premium Business Address in India',
      },
    ],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces – Virtual Office India',
  url: 'https://www.weespaces.in/virtual-office',
  telephone: '+919207189111',
  priceRange: '₹10,000/year',
  areaServed: ['Kochi', 'Trivandrum', 'Kozhikode', 'Coimbatore'],
  description:
    'Virtual office addresses across Kerala and Tamil Nadu for GST registration, company registration, and mail handling.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.weespaces.in/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Virtual Office India',
      item: 'https://www.weespaces.in/virtual-office',
    },
  ],
};

const faqs = [
  {
    question: 'Can I use a virtual office address for GST registration in India?',
    answer:
      'Yes. The GST department accepts virtual office addresses as the principal place of business, provided you submit a valid No-Objection Certificate (NOC) from the landlord and a rental/service agreement. WeeSpaces provides all necessary documentation with every virtual office plan.',
  },
  {
    question: 'What documents are required for virtual office GST registration?',
    answer:
      'You will need: (1) Service agreement / rental agreement from WeeSpaces, (2) NOC / Letter of Authorization from WeeSpaces, (3) Utility bill of the premises (provided by us), and (4) your own KYC documents (PAN, Aadhaar). Our team guides you through the entire process.',
  },
  {
    question: 'Is a virtual office address valid for company registration with MCA?',
    answer:
      'Absolutely. The Ministry of Corporate Affairs (MCA) accepts virtual office addresses for registering a Private Limited Company, LLP, or OPC. Our registered addresses in Kochi, Trivandrum, Calicut, and Coimbatore are fully compliant and documentation-ready.',
  },
  {
    question: 'What is the difference between a virtual office and a coworking space?',
    answer:
      'A virtual office gives you a prestigious business address, mail handling, and call answering — without requiring you to occupy a physical desk daily. A coworking space is a shared physical workspace you visit to work. WeeSpaces offers both, and virtual office members get pay-per-use access to our meeting rooms and hot desks.',
  },
  {
    question: 'How long does it take to activate my virtual office plan?',
    answer:
      'Activation is typically done within 24–48 working hours after agreement signing and payment. You will receive a welcome kit with your registered address proof, NOC, and utility documents, ready for GST and company registration.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const features = [
  {
    icon: Building2,
    title: 'Premium Business Address',
    desc: 'A prestigious registered address in prime commercial locations across Kerala & Tamil Nadu.',
  },
  {
    icon: FileCheck,
    title: 'GST Registration Support',
    desc: 'All documents (NOC, agreement, utility bill) required for seamless GST registration.',
  },
  {
    icon: Mail,
    title: 'Mail Handling & Forwarding',
    desc: 'All your business mail received, logged, scanned, and forwarded on your schedule.',
  },
  {
    icon: BadgeCheck,
    title: 'Company Registration Support',
    desc: 'MCA-compliant address proof for Private Ltd, LLP, OPC, and Sole Proprietorship registration.',
  },
  {
    icon: Users,
    title: 'Meeting Room Access',
    desc: 'Pay-per-use access to fully-equipped meeting rooms and conference halls across all branches.',
  },
  {
    icon: Phone,
    title: 'Call Answering Service',
    desc: 'Dedicated phone line with professional call answering and message forwarding in your company name.',
  },
];

const cityPricing = [
  {
    city: 'Kochi',
    branch: 'ernakulam',
    locality: 'MG Road, Ravipuram',
    highlight: 'Commercial Heart of Kerala',
    href: '/virtual-office-kochi-gst-registration',
  },
  {
    city: 'Trivandrum',
    branch: 'trivandrum',
    locality: 'Pattom, Near Technopark',
    highlight: "Kerala's IT Capital",
    href: '/virtual-office-trivandrum',
  },
  {
    city: 'Calicut',
    branch: 'calicut',
    locality: 'East Nadakkave, Near Cyberpark',
    highlight: 'Northern Kerala Hub',
    href: '/virtual-office-calicut',
  },
  {
    city: 'Coimbatore',
    branch: 'coimbatore',
    locality: 'Kalapatti, Near Tidel Park',
    highlight: 'Tamil Nadu Tech Hub',
    href: '/coworking-space-coimbatore',
  },
];

export default function VirtualOfficeIndia() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 justify-center overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <ScrollReveal direction="up" className="space-y-6 md:space-y-8 max-w-2xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/60">Virtual Office India</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-accent/20">
              🏢 Premium Virtual Office Plans
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Virtual Office in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                India
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-white/80">
                GST Registration Address
              </span>
            </h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg">
              <p className="text-white/90 leading-relaxed">
                Get a{' '}
                <strong className="text-accent">premium registered business address</strong> in
                Kochi, Trivandrum, Calicut, or Coimbatore — without renting physical space.
                Use our address for <strong>GST registration</strong>,{' '}
                <strong>company registration</strong>, mail handling, and more.
              </p>
            </div>

            {/* City pills */}
            <div className="flex flex-wrap gap-2">
              {['Kochi', 'Trivandrum', 'Calicut', 'Coimbatore'].map((city) => (
                <span
                  key={city}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full"
                >
                  <MapPin className="w-3 h-3 text-accent" />
                  {city}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-accent text-navy font-bold py-3 px-7 rounded-xl hover:bg-accent-hover transition-all glow text-sm"
              >
                View Pricing <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white font-bold py-3 px-7 rounded-xl hover:border-accent hover:text-accent transition-all text-sm"
              >
                What&apos;s Included
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md">
            <LeadForm branch="Virtual Office" />
          </ScrollReveal>
        </div>
      </section>

      {/* --- 4-CITY PRICING GRID --- */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
            City-Wise Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Virtual Office Pricing{' '}
            <span className="text-accent">Across India</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose your city. Get a premium address, documentation, and GST support — all included.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cityPricing.map((item, idx) => {
            const branch = branchData[item.branch];
            return (
              <ScrollReveal key={item.city} delay={idx * 0.1}>
                <MouseGlowCard className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.city}</h3>
                  <p className="text-white/50 text-sm mb-6 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    {item.locality}
                  </p>

                  <div className="mb-2">
                    <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-1">
                      Virtual Office
                    </p>
                    <p className="text-3xl font-bold text-accent">
                      {branch.pricing.virtualOffice.split('/')[0]}
                    </p>
                    <p className="text-white/40 text-sm">per year</p>
                  </div>

                  <ul className="space-y-2 text-sm text-white/70 mt-6 mb-8 flex-1">
                    {[
                      'Registered business address',
                      'GST registration docs',
                      'Mail handling',
                      'NOC & agreement',
                      'Meeting room access',
                    ].map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-accent shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={item.href}
                    className="mt-auto flex items-center justify-center gap-2 bg-accent text-navy font-bold py-3 px-6 rounded-xl hover:bg-accent-hover transition-all text-sm glow"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </MouseGlowCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* --- WHAT'S INCLUDED --- */}
      <section
        id="features"
        className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10"
      >
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
            Everything Included
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What You Get with a{' '}
            <span className="text-accent">WeeSpaces Virtual Office</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            More than just an address — a complete business presence, minus the overhead.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <ScrollReveal key={feat.title} delay={idx * 0.08}>
                <MouseGlowCard className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/20 transition-all h-full">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
                </MouseGlowCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* --- SEO EDITORIAL SECTION --- */}
      <section className="py-24 max-w-4xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose a Virtual Office in India for GST Registration?
          </h2>
          <p>
            For startups, freelancers, and businesses expanding into new cities, a{' '}
            <strong>virtual office in India</strong> is the most cost-effective way to establish a
            credible, compliant business presence. Whether you are registering for GST, incorporating
            a company under MCA, or simply need a premium{' '}
            <strong>virtual office address in India</strong>, WeeSpaces provides a fully
            documentation-ready solution across Kerala and Tamil Nadu.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Virtual Office for GST Registration — What You Need to Know
          </h3>
          <p>
            The Goods and Services Tax department requires every registered taxpayer to declare a
            principal place of business (PPOB). A{' '}
            <strong>virtual office for GST registration</strong> is legally valid provided the
            applicant submits a proper rental agreement and an NOC from the property owner.
            WeeSpaces issues both documents on official letterhead, ensuring a seamless approval
            with your jurisdictional GST officer.
          </p>
          <p>
            Our addresses in{' '}
            <strong>Kochi (MG Road, Ravipuram), Trivandrum (Pattom), Calicut (East
            Nadakkave)</strong>, and{' '}
            <strong>Coimbatore (Kalapatti, near Tidel Park)</strong> are registered commercial
            premises with all utility proofs, making them among the strongest{' '}
            <strong>virtual office addresses in India</strong> for GST compliance.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Virtual Office Kerala — The Smart Choice for Expanding Businesses
          </h3>
          <p>
            Kerala continues to be a top destination for IT companies, global delivery centers,
            and knowledge economy startups. With Technopark in Trivandrum, Infopark and Smart City
            in Kochi, and Cyberpark in Calicut, the demand for a{' '}
            <strong>virtual office in Kerala</strong> is growing rapidly. WeeSpaces covers all
            three major Kerala cities, giving you the flexibility to hold addresses in multiple
            cities simultaneously — ideal for multi-city GST registrations or creating a
            pan-Kerala business presence.
          </p>
        </ScrollReveal>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 max-w-4xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-white/70">
            Everything you need to know about virtual offices and GST registration in India.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <details className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group">
                <summary className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-lg cursor-pointer list-none">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-white/50 group-open:rotate-90 group-open:text-accent transition-transform duration-300 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- NAP BLOCK --- */}
      <section className="py-16 max-w-7xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">
            Our <span className="text-accent">Locations</span>
          </h2>
          <p className="text-white/60">
            Visit us or get in touch at any of our branches.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cityPricing.map((item, idx) => {
            const branch = branchData[item.branch];
            return (
              <ScrollReveal key={item.city} delay={idx * 0.1}>
                <NAPBlock
                  name={`WeeSpaces ${item.city}`}
                  address={branch.address}
                  mapUrl={branch.mapUrl}
                  hours="Mon–Sat: 8:00 AM – 8:00 PM | 24/7 access for members"
                />
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" delay={0.3} className="mt-12 text-center">
          <p className="text-white/50 text-sm mb-4">
            Ready to get your virtual office address?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-accent text-navy font-bold py-3 px-8 rounded-xl hover:bg-accent-hover transition-all glow text-sm"
          >
            Get Your Virtual Office Today <ArrowRight className="w-4 h-4" />
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
