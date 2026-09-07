import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { homepageFAQs } from '@/data/faqs';
import { constructMetadata } from '@/utils/metadata';
import QuickFinder from '@/components/QuickFinder';
import DesignCostCalculator from '@/components/DesignCostCalculator';
import FAQAccordion from '@/components/FAQAccordion';
import { Phone, CalendarCheck } from 'lucide-react';

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Coworking Spaces, Managed Offices & Virtual Offices in Kerala & Tamil Nadu | WeeSpaces",
    description: "Discover premium coworking spaces, managed offices, private cabins and virtual offices across Kochi, Trivandrum, Calicut and Coimbatore. Flexible plans, enterprise-ready infrastructure and instant availability.",
    canonicalPath: "/"
  }),
  alternates: {
    canonical: "https://www.weespaces.in/"
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.weespaces.in/#organization",
        "name": "WeeSpaces",
        "url": "https://www.weespaces.in",
        "logo": "https://www.weespaces.in/images/weespaces-logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/weespaces",
          "https://www.instagram.com/weespaces"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.weespaces.in/#website",
        "url": "https://www.weespaces.in",
        "name": "WeeSpaces",
        "publisher": {
          "@id": "https://www.weespaces.in/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.weespaces.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "xpath": [
            "/html/head/title",
            "/html/head/meta[@name='description']/@content"
          ]
        }
      },
      {
        "@type": "ServiceAreaBusiness",
        "name": "WeeSpaces South India",
        "url": "https://www.weespaces.in",
        "areaServed": [
          {
            "@type": "State",
            "name": "Kerala"
          },
          {
            "@type": "City",
            "name": "Coimbatore"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.weespaces.in/"
          }
        ]
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homepageFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-col w-full">

<section className="relative w-full bg-surface overflow-hidden pb-space-3xl pt-space-xl">

<div className="absolute top-0 right-0 w-[550px] h-[550px] bg-surface-container rounded-full blur-3xl opacity-60 pointer-events-none -mr-32 -mt-20"></div>
<div className="absolute top-1/2 left-0 w-[420px] h-[420px] bg-secondary-fixed/40 rounded-full blur-3xl opacity-40 pointer-events-none -ml-28"></div>
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">

<div className="flex flex-wrap items-center gap-space-xs mb-space-lg">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-high text-on-surface font-label-caps text-label-caps uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          Established 2018
        </span>
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
          Multiple Kerala &amp; TN Locations
        </span>
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
          Fully Managed Offices
        </span>
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
          Startups • Freelancers • Growing Teams
        </span>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl items-center">

<div className="lg:col-span-7 flex flex-col">
<p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-space-xs font-bold">
            South India's Premier Managed Workspace Network
          </p>
<h1 className="font-display-hero text-display-hero text-on-surface mb-space-md tracking-tight">
            Flexible Coworking Spaces, Managed Offices &amp; Virtual Offices in Kerala &amp; Tamil Nadu
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-space-xl max-w-xl">
            Move into fully furnished workspaces in <strong className="font-semibold text-on-surface">Kochi, Calicut, Trivandrum &amp; Coimbatore</strong> without deposits, setup costs, or long-term commitments.
          </p>

<div className="flex flex-wrap items-center gap-space-md mb-space-xl">
<a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-secondary hover:bg-accent-orange-hover text-on-secondary font-label-lg text-label-lg rounded-xl transition-all shadow-md hover:shadow-xl" href="#quick-finder">
<span>Find Workspace</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg rounded-xl transition-all" href="#cost-calculator">
<span className="material-symbols-outlined text-[20px] text-secondary">calculate</span>
<span>Calculate CapEx Savings</span>
</a>
</div>

<div className="flex items-center gap-space-md pt-space-xs">
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Quick Explore:</span>
<div className="flex items-center gap-space-sm text-body-sm font-body-sm text-on-surface">
<a className="hover:text-secondary underline decoration-surface-dim underline-offset-4 transition-colors" href="#locations">Locations</a>
<span className="text-outline-variant">•</span>
<a className="hover:text-secondary underline decoration-surface-dim underline-offset-4 transition-colors" href="#solutions">Virtual Office</a>
<span className="text-outline-variant">•</span>
<a className="hover:text-secondary underline decoration-surface-dim underline-offset-4 transition-colors" href="#pricing">Pricing Plans</a>
<span className="text-outline-variant">•</span>
<a className="hover:text-secondary underline decoration-surface-dim underline-offset-4 transition-colors" href="tel:+919207189111">Direct Support</a>
</div>
</div>
</div>

<div className="lg:col-span-5" id="quick-finder">
<QuickFinder />
</div>
</div>
</div>

<div className="mt-space-2xl pt-space-xl bg-surface-card rounded-2xl p-space-lg shadow-sm grid grid-cols-2 md:grid-cols-4 gap-space-lg">
<div className="flex flex-col items-center sm:items-start text-center sm:text-left">
<span className="font-display-hero text-headline-xl text-on-surface font-bold tracking-tight">4</span>
<span className="font-headline-sm text-headline-sm text-secondary font-semibold">Premium Locations</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Kochi, Calicut, Trivandrum, CBE</span>
</div>
<div className="flex flex-col items-center sm:items-start text-center sm:text-left">
<span className="font-display-hero text-headline-xl text-on-surface font-bold tracking-tight">50K+</span>
<span className="font-headline-sm text-headline-sm text-secondary font-semibold">Sq. Ft. Managed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Enterprise ergonomic infrastructure</span>
</div>
<div className="flex flex-col items-center sm:items-start text-center sm:text-left">
<span className="font-display-hero text-headline-xl text-on-surface font-bold tracking-tight">100%</span>
<span className="font-headline-sm text-headline-sm text-secondary font-semibold">Plug &amp; Play</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Walk in &amp; start working instantly</span>
</div>
<div className="flex flex-col items-center sm:items-start text-center sm:text-left">
<span className="font-display-hero text-headline-xl text-on-surface font-bold tracking-tight">0</span>
<span className="font-headline-sm text-headline-sm text-secondary font-semibold">Setup Costs</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Zero capex, interior or broker fees</span>
</div>
</div>
</section>

<section className="w-full bg-surface-canvas py-space-3xl">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">

<div className="text-center max-w-3xl mx-auto mb-space-2xl">
<span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase tracking-wider font-bold inline-block mb-space-xs">
          The Workspace Paradigm Shift
        </span>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight mb-space-xs">
          Setting Up An Office Shouldn't Take Months
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Skip the heavy deposits, interior investments, and administrative headaches. See how modern regional leaders bypass traditional lease friction.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl items-stretch">

<div className="bg-surface-card rounded-2xl p-space-xl flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-error-container/40 rounded-full blur-xl pointer-events-none"></div>
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-error font-bold">The Slow Way</span>
<span className="px-space-xs py-space-2xs bg-error-container text-on-error-container rounded font-label-md text-label-md">3 to 6 Months Delay</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-md">Traditional Office</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
              Heavy capital expenditure locked in non-recoverable fit-outs and inflexible agreements.
            </p>
<ul className="flex flex-col gap-space-md">
<li className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-error-container text-error flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">close</span>
</div>
<div>
<h4 className="font-headline-sm text-body-lg font-bold text-on-surface">₹5L+ interior investment</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Architects, contractors, partition glass, paint, and unexpected delays.</p>
</div>
</li>
<li className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-error-container text-error flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">close</span>
</div>
<div>
<h4 className="font-headline-sm text-body-lg font-bold text-on-surface">Long rental agreements</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Strict 3-5 year lock-in periods with penalty clauses restricting team agility.</p>
</div>
</li>
<li className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-error-container text-error flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">close</span>
</div>
<div>
<h4 className="font-headline-sm text-body-lg font-bold text-on-surface">Furniture purchase</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Expensive desks, ergonomic chairs, credenzas, and asset depreciation.</p>
</div>
</li>
<li className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-error-container text-error flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">close</span>
</div>
<div>
<h4 className="font-headline-sm text-body-lg font-bold text-on-surface">Internet &amp; utilities setup</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Multiple telecom vendor negotiations, UPS power backups, and air conditioning maintenance.</p>
</div>
</li>
<li className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-error-container text-error flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">close</span>
</div>
<div>
<h4 className="font-headline-sm text-body-lg font-bold text-on-surface">Daily admin management</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Pantry restocking, deep cleaning, security staff, and broken billing disputes.</p>
</div>
</li>
</ul>
</div>
<div className="mt-space-xl pt-space-md bg-surface-container-low rounded-xl p-space-md text-center">
<span className="font-body-sm text-body-sm text-error font-medium">Outcome: Months wasted, massive non-liquid capital drained</span>
</div>
</div>

<div className="bg-surface-navy text-on-primary rounded-2xl p-space-xl flex flex-col justify-between shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl pointer-events-none"></div>
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-accent-warm-gold font-bold">The WeeSpaces Advantage</span>
<span className="px-space-xs py-space-2xs bg-secondary text-on-secondary rounded font-label-md text-label-md font-bold">Immediate 24-Hour Move In</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-primary font-bold mb-space-md">WeeSpaces Managed</h3>
<p className="font-body-md text-body-md text-text-on-dark-muted mb-space-lg">
              Turnkey, hospitality-driven workspaces with total financial and operational flexibility.
            </p>
<ul className="flex flex-col gap-space-md">
<li className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-success-teal text-on-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div>
<h4 className="font-headline-sm text-body-lg font-bold text-on-primary">Walk in tomorrow</h4>
<p className="font-body-sm text-body-sm text-text-on-dark-muted">Fully operational workspace ready for your team within 24 hours of sign-up.</p>
</div>
</li>
<li className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-success-teal text-on-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div>
<h4 className="font-headline-sm text-body-lg font-bold text-on-primary">Fully furnished &amp; designed</h4>
<p className="font-body-sm text-body-sm text-text-on-dark-muted">Hospitality-grade acoustics, ergonomic seating, dedicated power, and private phone booths.</p>
</div>
</li>
<li className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-success-teal text-on-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div>
<h4 className="font-headline-sm text-body-lg font-bold text-on-primary">Flexible scaling (up or down)</h4>
<p className="font-body-sm text-body-sm text-text-on-dark-muted">Scale from 2 desks to a 50-seat dedicated private suite with zero penalty friction.</p>
</div>
</li>
<li className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-success-teal text-on-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div>
<h4 className="font-headline-sm text-body-lg font-bold text-on-primary">Zero internet setup required</h4>
<p className="font-body-sm text-body-sm text-text-on-dark-muted">Dual redundant enterprise fiber lines with failover, backup power generators &amp; IT desks.</p>
</div>
</li>
<li className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-success-teal text-on-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div>
<h4 className="font-headline-sm text-body-lg font-bold text-on-primary">One simple predictable monthly invoice</h4>
<p className="font-body-sm text-body-sm text-text-on-dark-muted">Utilities, AC, deep cleaning, security, artisanal coffee, and meeting rooms bundled cleanly.</p>
</div>
</li>
</ul>
</div>
<div className="mt-space-xl pt-space-md bg-surface-navy-muted rounded-xl p-space-md text-center">
<span className="font-body-sm text-body-sm text-accent-warm-gold font-semibold">Outcome: Zero capital locked. Team starts building immediately.</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-3xl" id="cost-calculator">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<DesignCostCalculator />
</div>
</section>

<section className="w-full bg-surface py-space-3xl" id="solutions">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
<div>
<span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase tracking-wider font-bold inline-block mb-space-xs">
            Workspace Solutions
          </span>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
            Find a Workspace That Fits You
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mt-space-2xs">
            Tailored environments built for maximum productivity, privacy, and uninterrupted expansion.
          </p>
</div>
<a className="inline-flex items-center gap-space-xs text-secondary font-label-lg text-label-lg hover:text-accent-orange-hover font-semibold transition-colors" href="#pricing">
<span>Compare All Plans</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">

<div className="bg-surface-card rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-all">
<span className="material-symbols-outlined text-[24px]">person</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-2xs">Just Me</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Freelancers &amp; remote professionals. Flexible high-speed connectivity with community perks.
            </p>
<ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>Hot desk &amp; open lounge access</span>
</li>
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>High-speed enterprise WiFi</span>
</li>
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>Unlimited specialty tea &amp; coffee</span>
</li>
</ul>
</div>
<a className="w-full py-space-xs text-center rounded-lg bg-surface-container hover:bg-secondary hover:text-on-secondary text-on-surface font-label-lg text-label-lg transition-all" href="#pricing">
            Find My Desk
          </a>
</div>

<div className="bg-surface-card rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 bg-secondary text-on-secondary px-space-xs py-1 rounded-bl font-label-caps text-[10px] uppercase font-bold tracking-wider">
            Popular
          </div>
<div>
<div className="w-12 h-12 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-all">
<span className="material-symbols-outlined text-[24px]">groups</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-2xs">Growing Team</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Startups and SMEs (2–20 people). Private lockable cabins with dedicated team dynamics.
            </p>
<ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>Lockable private office suite</span>
</li>
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>Free monthly boardroom credits</span>
</li>
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>Custom team signage &amp; branding</span>
</li>
</ul>
</div>
<a className="w-full py-space-xs text-center rounded-lg bg-secondary text-on-secondary hover:bg-accent-orange-hover font-label-lg text-label-lg transition-all shadow-sm" href="#pricing">
            Explore Team Offices
          </a>
</div>

<div className="bg-surface-card rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-all">
<span className="material-symbols-outlined text-[24px]">domain</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-2xs">Established</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Enterprise and corporate (20+ employees). Turnkey managed regional headquarters and GCCs.
            </p>
<ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>Custom IT architecture &amp; VLAN</span>
</li>
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>Dedicated wings &amp; biometric doors</span>
</li>
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>Consolidated multi-city invoicing</span>
</li>
</ul>
</div>
<a className="w-full py-space-xs text-center rounded-lg bg-surface-container hover:bg-secondary hover:text-on-secondary text-on-surface font-label-lg text-label-lg transition-all" href="tel:+919207189111">
            Get Live Availability
          </a>
</div>

<div className="bg-surface-card rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-all">
<span className="material-symbols-outlined text-[24px]">mark_email_read</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-2xs">Virtual Business</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Registered office solutions for GST registration, ROC paperwork, and mail handling.
            </p>
<ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>Compliant NOC &amp; Rent Agreement</span>
</li>
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>Courier reception &amp; forwarding</span>
</li>
<li className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px] text-success-teal">check_circle</span>
<span>Monthly conference room credits</span>
</li>
</ul>
</div>
<a className="w-full py-space-xs text-center rounded-lg bg-surface-container hover:bg-secondary hover:text-on-secondary text-on-surface font-label-lg text-label-lg transition-all" href="#quick-finder">
            Setup Virtual Office
          </a>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-canvas py-space-3xl" id="locations">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="text-center max-w-2xl mx-auto mb-space-2xl">
<span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase tracking-wider font-bold inline-block mb-space-xs">
          Regional Network Footprint
        </span>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight mb-space-2xs">
          Prime Locations Across South India
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Strategically located hubs offering seamless connectivity and premium business addresses in top tech corridors.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">

<div className="bg-surface-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col">
<div className="relative h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern glass exterior of an IT park in Kakkanad Kochi near Infopark under bright daylight, clean architecture, palm trees, warm Kerala sunlight, professional photography, crisp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVUQAYFEy72X3IGqRnRDII5smUQQsukXvS9fDPMNo58Up4gwkYaK2S7PXS2Ca-zYBRixRmtLvav3z4cu-1a3dYrM14N6TaRKh8aD0-mowleTt2fa8-pLyBIe9GLBEUalxuNoUg6zGEiU4KZanJ6nx719KjQq5iji941N_gRjS86bKtUCTOODEkk5mp4RM44EOeq25qI49tednJspvnfOTW8TVsDAkeTmX-CtUF02-aa28-eUSno2uPKA"/>
<div className="absolute top-3 left-3 bg-surface-navy/90 text-on-primary backdrop-blur px-space-xs py-1 rounded font-label-caps text-label-caps uppercase tracking-wider">
              Kerala Tech Capital
            </div>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-2xs">
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">Kochi</h3>
<span className="w-2.5 h-2.5 rounded-full bg-success-teal" title="Ready Occupancy"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                Infopark, Kakkanad, Panampilly Nagar, MG Road &amp; Kalamassery.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-md text-[11px] text-on-surface-variant">Infopark Phase 1</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-md text-[11px] text-on-surface-variant">Metro Corridor</span>
</div>
</div>
<a className="w-full py-space-xs text-center rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary font-label-lg text-label-lg text-on-surface transition-all flex items-center justify-center gap-1" href="tel:+919207189111">
<span>View Hub Details</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>

<div className="bg-surface-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col">
<div className="relative h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High-tech corporate campus at Technopark Trivandrum with landscaped greenery, modern glass facade office buildings, sunny blue sky, premium enterprise aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9_Rv-gm8isAxrMDICH-6MU8e0vKkIJRyVlIK9C34R_UMmXogfpGRRgclH7oiKEHpKYxd8dAivXsamA0DaDPy_4yeJ-rMbSCy_4m9L5Ljgtehi4QwxLSqX0mmDaRXvs_PEIjasGSN6tS4uSiN9vZmcWbab-ro3BexUZ0F9jSQOcYCY8Hm2ZA1JtGtsB_M_lcRrhBGJ0GbaaCNTuoY833xtALUiFLN8PHPPt6pMIePy0LPOm_RUmSHRwg"/>
<div className="absolute top-3 left-3 bg-surface-navy/90 text-on-primary backdrop-blur px-space-xs py-1 rounded font-label-caps text-label-caps uppercase tracking-wider">
              Capital IT Corridor
            </div>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-2xs">
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">Trivandrum</h3>
<span className="w-2.5 h-2.5 rounded-full bg-success-teal" title="Ready Occupancy"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                Technopark Phase 1, 2, 3, Kazhakkoottam, Kowdiar &amp; Statue.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-md text-[11px] text-on-surface-variant">Technopark Adjacent</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-md text-[11px] text-on-surface-variant">Airport Route</span>
</div>
</div>
<a className="w-full py-space-xs text-center rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary font-label-lg text-label-lg text-on-surface transition-all flex items-center justify-center gap-1" href="tel:+919207189111">
<span>View Hub Details</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>

<div className="bg-surface-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col">
<div className="relative h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="State-of-the-art coworking interior in Cyberpark Calicut with warm wooden accents, modern minimalist workstations, lush indoor plants, soft interior natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKiXz8eB2GRa2-ZWfL4tI3iauQPuebp87g-aZ0tqSSNimDGzwEQQNm0TOp_-FMhBoUGD5CoKIpbHIPbNcKM-rZSeQStiG4XdaSigLHfPL7nUfxMwrRAZq4dFVgpZ-DomI2vJg1WkfNb1O3lWfVKYgWziWLEzfxt_ZHWgSZ2KjulSfwXdXsck33-871PX7yu1NgEiy3nDOojyhRDMOFMMdGKhQb5Uqu1qTy88ofxgc4wQIY0HD8ugg1Rg"/>
<div className="absolute top-3 left-3 bg-surface-navy/90 text-on-primary backdrop-blur px-space-xs py-1 rounded font-label-caps text-label-caps uppercase tracking-wider">
              North Kerala Hub
            </div>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-2xs">
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">Calicut</h3>
<span className="w-2.5 h-2.5 rounded-full bg-success-teal" title="Ready Occupancy"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                Cyberpark, UL CyberPark, HiLite Business Park &amp; Mavoor Road.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-md text-[11px] text-on-surface-variant">Cyberpark Zone</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-md text-[11px] text-on-surface-variant">Bypass Access</span>
</div>
</div>
<a className="w-full py-space-xs text-center rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary font-label-lg text-label-lg text-on-surface transition-all flex items-center justify-center gap-1" href="tel:+919207189111">
<span>View Hub Details</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>

<div className="bg-surface-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col">
<div className="relative h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Contemporary commercial building at Avinashi Road Coimbatore near Tidel Park, sleek architectural facade with glass and steel, midday sunlight, business district ambiance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArhNvJwLdvJuR6sfMMKIQ_Ezp1PSoFiVsAzYjj72q3ror1y-6x8OhSJl4fGR1vdR3WE1pgZvxCCdYw3ct5bBpyQ0_onIXbGO-eL3num1b-tXaE0VFaaTNTKfkg2yXvg8VRzB0l2TmZx3eUJXUd0koE0ECeqouu9wAs8XcMXW8rmbl3x553YsFXtf21eycQIce1fzgIorERMADVT93edvXSkxveGDT88gnh0gJd3KdS0p3In4b5j9Tv1A"/>
<div className="absolute top-3 left-3 bg-secondary text-on-secondary px-space-xs py-1 rounded font-label-caps text-label-caps uppercase tracking-wider font-bold">
              New Hub • Tamil Nadu
            </div>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-2xs">
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">Coimbatore</h3>
<span className="w-2.5 h-2.5 rounded-full bg-success-teal" title="Ready Occupancy"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                Peelamedu, Avinashi Road, RS Puram, SITRA &amp; Tidel Park Area.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-md text-[11px] text-on-surface-variant">Tidel Park Area</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-md text-[11px] text-on-surface-variant">Avinashi Arterial</span>
</div>
</div>
<a className="w-full py-space-xs text-center rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary font-label-lg text-label-lg text-on-surface transition-all flex items-center justify-center gap-1" href="tel:+919207189111">
<span>View Hub Details</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-3xl">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="max-w-2xl mb-space-2xl">
<span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase tracking-wider font-bold inline-block mb-space-xs">
          Engineered for Flow
        </span>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
          Workspace Amenities
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-space-2xs">
          Take a peek inside our functional, hospitable, and ready-to-use regional office environments.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[26px]">chair</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-2xs">Comfortable workstations</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Ergonomic lumbar support chairs, spacious bespoke oak tables, and dedicated cable trays.
            </p>
</div>
</div>
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[26px]">bolt</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-2xs">Ready-to-use setup</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Plug in and power your laptop instantly. 100% generator backup ensures uninterrupted workflow.
            </p>
</div>
</div>
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[26px]">meeting_room</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-2xs">Meeting &amp; Conference Rooms</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              High-definition conferencing displays, glass boards, and privacy-treated soundproofing.
            </p>
</div>
</div>
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[26px]">alarm_on</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-2xs">24/7 access (holidays incl.)</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Biometric access cards allow your distributed engineering teams to ship code on their own time zones.
            </p>
</div>
</div>
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[26px]">coffee</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-2xs">Unlimited tea &amp; coffee</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Freshly brewed artisanal estate coffee, herbal infusions, and filtered drinking water stations.
            </p>
</div>
</div>
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[26px]">local_parking</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-2xs">Spacious Parking</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Ample secure two-wheeler and four-wheeler reserved parking spaces at all regional centers.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-canvas py-space-3xl">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="bg-surface-navy rounded-3xl p-space-xl lg:p-space-2xl text-on-primary shadow-xl relative overflow-hidden">
<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
<div className="lg:col-span-8 flex flex-col">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-navy-muted text-accent-warm-gold font-label-caps text-label-caps uppercase tracking-wider font-bold mb-space-md w-max">
              Mission Driven Since 2018
            </span>
<h2 className="font-headline-xl text-headline-xl text-on-primary font-bold tracking-tight mb-space-md">
              Built From Kerala. Built For Kerala's Entrepreneurs.
            </h2>
<p className="font-body-lg text-body-lg text-text-on-dark-muted mb-space-md leading-relaxed">
              "Founded in 2018, WeeSpaces was born out of a genuine need. We realized that setting up an office in Kerala meant heavy deposits, rigid leases, and constant operational headaches—distractions that entrepreneurs simply don't need."
            </p>
<p className="font-body-lg text-body-lg text-text-on-dark-muted mb-space-lg leading-relaxed">
              "Our mission is to provide premium, fully-managed workspaces that let you focus entirely on your growth. Whether you are a freelancer or a 100-person enterprise, we have built a community where your business can thrive from day one."
            </p>
<div className="flex items-center gap-space-md pt-space-xs">
<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-bold text-headline-sm">
                SS
              </div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">Sankesh Sreenivas</h3>
<p className="font-body-sm text-body-sm text-accent-warm-gold">Founder, WeeSpaces</p>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-surface-navy-muted/70 p-space-lg rounded-2xl flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs text-accent-warm-gold">
<span className="material-symbols-outlined text-[28px]">verified</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider font-bold">7+ Years of Regional Excellence</span>
</div>
<p className="font-body-sm text-body-sm text-text-on-dark-muted">
              From Kakkanad to Coimbatore, over 500+ tech ventures, consultants, and enterprise branches have launched within the WeeSpaces ecosystem.
            </p>
<div className="pt-space-xs flex items-center justify-between font-label-md text-label-md text-on-primary/80">
<span>GST Compliant</span>
<span>•</span>
<span>ROC Registered</span>
<span>•</span>
<span>ISO Grade IT</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-3xl">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="text-center max-w-2xl mx-auto mb-space-2xl">
<span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase tracking-wider font-bold inline-block mb-space-xs">
          Validated Impact
        </span>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight mb-space-2xs">
          Trusted by Growing Teams
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Join a vibrant community of startups, freelancers, and established companies flourishing across South India.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-sm rounded-xl">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-error font-bold block mb-1">The Problem</span>
<p className="font-body-sm text-body-sm text-on-surface-variant italic">"Traditional office required huge deposits and long lock-ins."</p>
</div>

<div className="bg-surface-container p-space-sm rounded-xl">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-success-teal font-bold block mb-1">The Result</span>
<p className="font-body-md text-body-md text-on-surface font-semibold">"Scaled the team seamlessly without changing offices."</p>
</div>
</div>
<div className="flex items-center gap-space-sm mt-space-lg pt-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed text-secondary font-bold flex items-center justify-center shrink-0">
              R
            </div>
<div>
<h4 className="font-headline-sm text-body-md font-bold text-on-surface">Rahul M.</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Founder, SaaS Startup, Kochi</p>
</div>
</div>
</div>

<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-sm rounded-xl">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-error font-bold block mb-1">The Problem</span>
<p className="font-body-sm text-body-sm text-on-surface-variant italic">"Working from noisy cafes killed team productivity."</p>
</div>

<div className="bg-surface-container p-space-sm rounded-xl">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-success-teal font-bold block mb-1">The Result</span>
<p className="font-body-md text-body-md text-on-surface font-semibold">"Launched new products faster after moving into dedicated office."</p>
</div>
</div>
<div className="flex items-center gap-space-sm mt-space-lg pt-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface font-bold flex items-center justify-center shrink-0">
              A
            </div>
<div>
<h4 className="font-headline-sm text-body-md font-bold text-on-surface">Anjali P.</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Marketing Director, Creative Agency, Calicut</p>
</div>
</div>
</div>

<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-sm rounded-xl">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-error font-bold block mb-1">The Problem</span>
<p className="font-body-sm text-body-sm text-on-surface-variant italic">"Losing clients due to unprofessional meeting spots."</p>
</div>

<div className="bg-surface-container p-space-sm rounded-xl">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-success-teal font-bold block mb-1">The Result</span>
<p className="font-body-md text-body-md text-on-surface font-semibold">"Closed 3 enterprise deals using the premium boardroom."</p>
</div>
</div>
<div className="flex items-center gap-space-sm mt-space-lg pt-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-navy text-on-primary font-bold flex items-center justify-center shrink-0">
              V
            </div>
<div>
<h4 className="font-headline-sm text-body-md font-bold text-on-surface">Vikram S.</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Operations Head, Logistics Firm, Trivandrum</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-canvas py-space-3xl" id="pricing">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="text-center max-w-2xl mx-auto mb-space-2xl">
<span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase tracking-wider font-bold inline-block mb-space-xs">
          Transparent Pricing
        </span>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight mb-space-2xs">
          Flexible Pricing Plans
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Find the right workspace plan tailored for your team size and operational runway.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">

<div className="bg-surface-card rounded-2xl p-space-xl flex flex-col justify-between shadow-sm hover:shadow-lg transition-all">
<div>
<div className="mb-space-md">
<span className="px-space-xs py-space-2xs rounded bg-surface-container text-on-surface font-label-caps text-label-caps uppercase font-bold tracking-wider">
                Individual Freedom
              </span>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-space-2xs">Hot Desk</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Flexible seating in our dynamic open coworking area.</p>
</div>
<div className="my-space-lg pb-space-md bg-surface-container-low p-space-md rounded-xl">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant block mb-1">Starts from</span>
<div className="flex items-baseline gap-1">
<span className="font-display-hero text-headline-xl text-on-surface font-bold">₹4,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ desk / month</span>
</div>
<span className="font-body-sm text-body-sm text-secondary font-medium block mt-1">Flexible plans for freelancers</span>
</div>
<ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface mb-space-xl">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-success-teal">check</span>
<span>Flexible any-desk access</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-success-teal">check</span>
<span>High-speed enterprise WiFi</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-success-teal">check</span>
<span>Unlimited specialty Tea / Coffee</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-success-teal">check</span>
<span>Community lounge access</span>
</li>
</ul>
</div>
<a className="w-full py-space-sm text-center rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-all" href="tel:+919207189111">
            Talk to a Workspace Expert
          </a>
</div>

<div className="bg-surface-navy text-on-primary rounded-2xl p-space-xl flex flex-col justify-between shadow-xl relative overflow-hidden scale-100 lg:-translate-y-2">

<div className="absolute top-0 right-0 bg-secondary text-on-secondary px-space-md py-1 rounded-bl-xl font-label-caps text-label-caps uppercase font-bold tracking-widest shadow-sm">
            Most Popular
          </div>
<div>
<div className="mb-space-md">
<span className="px-space-xs py-space-2xs rounded bg-surface-navy-muted text-accent-warm-gold font-label-caps text-label-caps uppercase font-bold tracking-wider">
                Dedicated Productivity
              </span>
<h3 className="font-headline-lg text-headline-lg text-on-primary font-bold mt-space-2xs">Dedicated Desk</h3>
<p className="font-body-sm text-body-sm text-text-on-dark-muted mt-1">Your own reserved desk in a shared secure space.</p>
</div>
<div className="my-space-lg pb-space-md bg-surface-navy-muted p-space-md rounded-xl">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-text-on-dark-muted block mb-1">Starts from</span>
<div className="flex items-baseline gap-1">
<span className="font-display-hero text-headline-xl text-on-primary font-bold">₹6,500</span>
<span className="font-body-sm text-body-sm text-text-on-dark-muted">/ desk / month</span>
</div>
<span className="font-body-sm text-body-sm text-accent-warm-gold font-medium block mt-1">Flexible plans for growing teams</span>
</div>
<ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-primary mb-space-xl">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-accent-warm-gold">check</span>
<span>Reserved dedicated desk</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-accent-warm-gold">check</span>
<span>Lockable storage cabinet included</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-accent-warm-gold">check</span>
<span>24/7 Biometric access (holidays incl.)</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-accent-warm-gold">check</span>
<span>Meeting room credits included</span>
</li>
</ul>
</div>
<a className="w-full py-space-sm text-center rounded-xl bg-secondary hover:bg-accent-orange-hover text-on-secondary font-label-lg text-label-lg transition-all shadow-md" href="tel:+919207189111">
            Get Live Availability
          </a>
</div>

<div className="bg-surface-card rounded-2xl p-space-xl flex flex-col justify-between shadow-sm hover:shadow-lg transition-all">
<div>
<div className="mb-space-md">
<span className="px-space-xs py-space-2xs rounded bg-surface-container text-on-surface font-label-caps text-label-caps uppercase font-bold tracking-wider">
                Full Team Privacy
              </span>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-space-2xs">Private Office</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Custom workspace solutions for teams of 2–100+ members.</p>
</div>
<div className="my-space-lg pb-space-md bg-surface-container-low p-space-md rounded-xl">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant block mb-1">Custom Quote</span>
<div className="flex items-baseline gap-1">
<span className="font-display-hero text-headline-xl text-on-surface font-bold">Custom</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ month</span>
</div>
<span className="font-body-sm text-body-sm text-secondary font-medium block mt-1">Built Around Your Team</span>
</div>
<ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface mb-space-xl">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-success-teal">check</span>
<span>Fully furnished private lockable office</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-success-teal">check</span>
<span>Custom branding &amp; interior options</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-success-teal">check</span>
<span>Free generous meeting room credits</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-success-teal">check</span>
<span>Dedicated VLAN &amp; IT assistance</span>
</li>
</ul>
</div>
<a className="w-full py-space-sm text-center rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-all" href="tel:+919207189111">
            Talk to a Workspace Expert
          </a>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-2xl">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="bg-surface-container-low rounded-2xl p-space-xl">
<h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
          Premium Coworking Spaces in Kochi, Trivandrum &amp; Coimbatore
        </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          WeeSpaces is widely recognized as the best provider of managed offices and flexible workspaces across South India. Whether you are looking for a <a className="text-secondary font-semibold hover:underline" href="#locations">Coworking Space in Kochi</a>, a <a className="text-secondary font-semibold hover:underline" href="#locations">Coworking Space in Trivandrum</a>, or a <a className="text-secondary font-semibold hover:underline" href="#locations">Coworking Space in Coimbatore</a>, our premium facilities offer zero setup costs, enterprise-grade internet, and fully furnished environments. We are the top-rated choice for startups, IT firms, and remote teams seeking a physical or virtual office presence in Kerala and Tamil Nadu.
        </p>
</div>
</div>
</section>

<section className="w-full bg-surface-canvas py-space-3xl" id="faq">
<div className="max-w-[1000px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="text-center mb-space-2xl">
<span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase tracking-wider font-bold inline-block mb-space-xs">
          FAQ
        </span>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight mb-space-2xs">
          Everything You Need To Know About WeeSpaces
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Frequently asked questions about our coworking spaces and flexible managed office services.
        </p>
</div>
<div className="flex flex-col gap-space-md" id="faq-accordion-group">
<FAQAccordion faqs={homepageFAQs} />
</div>
</div>
</section>

<section className="w-full bg-surface-navy text-on-primary py-space-3xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-secondary/15 via-transparent to-surface-navy-muted pointer-events-none"></div>
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10 text-center">
<div className="max-w-3xl mx-auto flex flex-col items-center">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-navy-muted text-accent-warm-gold font-label-caps text-label-caps uppercase tracking-wider font-bold mb-space-md">
          Zero Delays • Instant Move-In
        </span>
<h2 className="font-display-hero text-headline-xl md:text-display-hero text-on-primary font-bold tracking-tight mb-space-md">
          Ready to upgrade your workspace?
        </h2>
<p className="font-body-lg text-body-lg text-text-on-dark-muted mb-space-xl max-w-xl">
          Schedule a personalized free tour or speak directly with our Kerala and Tamil Nadu workspace directors.
        </p>
<div className="flex flex-wrap items-center justify-center gap-space-md w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md bg-secondary hover:bg-accent-orange-hover text-on-secondary font-label-lg text-label-lg rounded-xl transition-all shadow-xl" href="tel:+919207189111">
<span className="material-symbols-outlined text-[20px]">call</span>
<span>Call +91 92071 89111</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md bg-surface-navy-muted hover:bg-surface-navy-muted/80 text-on-primary font-label-lg text-label-lg rounded-xl transition-all" href="https://wa.me/919207189111" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px] text-success-teal">chat</span>
<span>Connect on WhatsApp</span>
</a>
</div>
<div className="mt-space-lg flex items-center justify-center gap-space-md text-text-on-dark-muted font-body-sm text-body-sm">
<span>Infopark, Kochi</span>
<span>•</span>
<span>Technopark, Trivandrum</span>
<span>•</span>
<span>Cyberpark, Calicut</span>
<span>•</span>
<span>Peelamedu, Coimbatore</span>
</div>
</div>
</div>
</section>
</div>


      {/* AI Declaration & Local Authority Block */}
      <section className="py-16 border-t border-surface-dim bg-surface-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface-navy-muted/30 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="font-headline-lg text-headline-lg mb-6 text-on-primary text-center font-bold">
                  Premium Coworking Spaces in Kochi, Trivandrum & Coimbatore
              </h2>
              <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center">
                  <p className="text-text-on-dark-muted font-body-lg text-body-lg leading-relaxed">
                      WeeSpaces is widely recognized as the best provider of managed offices and flexible workspaces across South India. 
                      Whether you are looking for a <Link href="/coworking-space/kochi" className="text-accent-warm-gold hover:underline font-bold">Coworking Space in Kochi</Link>, 
                      a <Link href="/coworking-space/trivandrum" className="text-accent-warm-gold hover:underline font-bold">Coworking Space in Trivandrum</Link>, 
                      or a <Link href="/coworking-space/coimbatore" className="text-accent-warm-gold hover:underline font-bold">Coworking Space in Coimbatore</Link>, 
                      our premium facilities offer zero setup costs, enterprise-grade internet, and fully furnished environments. 
                      We are the top-rated choice for startups, IT firms, and remote teams seeking a physical or virtual office presence in Kerala and Tamil Nadu.
                  </p>
              </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <a href="tel:+919207189111" className="w-1/2 bg-surface-navy border-t border-r border-white/20 py-4 flex items-center justify-center gap-2 text-on-primary font-bold text-sm">
          <Phone className="w-4 h-4 text-secondary" /> Call
        </a>
        <Link href="/pricing" className="w-1/2 bg-secondary py-4 flex items-center justify-center gap-2 text-on-secondary font-bold text-sm">
          <CalendarCheck className="w-4 h-4" /> Schedule Tour
        </Link>
      </div>

    </>
  );
}
