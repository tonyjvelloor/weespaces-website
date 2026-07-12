import { Metadata } from 'next';
import { getCaseStudyBySlug, getAllCaseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import { ArrowRight, Building2, Target, Lightbulb, TrendingUp, Clock, Quote } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return { title: 'Case Study Not Found' };

  return {
    title: `${study.clientName} Workspace Case Study | WeeSpaces`,
    description: study.summary,
  };
}

export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. HERO - EXECUTIVE SUMMARY */}
      <section className="pt-32 pb-24 bg-navy text-white relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent via-navy to-navy"></div>
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <ScrollReveal>
               <div className="flex flex-wrap items-center gap-3 mb-6">
                 <span className="px-3 py-1 bg-accent/20 text-accent font-bold text-xs uppercase tracking-wider rounded-full border border-accent/30">
                   {study.industry}
                 </span>
                 <span className="px-3 py-1 bg-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-full border border-white/20">
                   {study.location}
                 </span>
               </div>
               <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  {study.clientName}
               </h1>
               <p className="text-xl text-white/80 font-light mb-12">
                  {study.summary}
               </p>
               
               <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/10">
                  {study.metrics.map((metric, i) => (
                    <div key={i}>
                       <div className="text-3xl md:text-4xl font-black text-accent mb-1">{metric.value}</div>
                       <div className="text-sm font-bold text-white/50 uppercase tracking-wider">{metric.label}</div>
                    </div>
                  ))}
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* 2. THE STORY */}
      <section className="py-24 bg-white">
         <div className="max-w-4xl mx-auto px-6 space-y-20">
            {/* Challenge */}
            <ScrollReveal className="flex flex-col md:flex-row gap-8">
               <div className="md:w-1/3 shrink-0">
                  <div className="flex items-center gap-3 text-navy font-bold text-xl border-b-2 border-accent inline-flex pb-2">
                     <Target className="w-6 h-6 text-accent" />
                     The Challenge
                  </div>
               </div>
               <div className="md:w-2/3">
                  <p className="text-gray-700 text-lg leading-relaxed">{study.challenge}</p>
               </div>
            </ScrollReveal>

            {/* Solution */}
            <ScrollReveal className="flex flex-col md:flex-row gap-8">
               <div className="md:w-1/3 shrink-0">
                  <div className="flex items-center gap-3 text-navy font-bold text-xl border-b-2 border-accent inline-flex pb-2">
                     <Lightbulb className="w-6 h-6 text-accent" />
                     The Solution
                  </div>
               </div>
               <div className="md:w-2/3">
                  <p className="text-gray-700 text-lg leading-relaxed">{study.solution}</p>
               </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal className="flex flex-col md:flex-row gap-8">
               <div className="md:w-1/3 shrink-0">
                  <div className="flex items-center gap-3 text-navy font-bold text-xl border-b-2 border-accent inline-flex pb-2">
                     <Clock className="w-6 h-6 text-accent" />
                     Deployment Timeline
                  </div>
               </div>
               <div className="md:w-2/3">
                  <p className="text-gray-700 text-lg leading-relaxed font-bold">{study.timeline}</p>
               </div>
            </ScrollReveal>

            {/* Impact */}
            <ScrollReveal className="flex flex-col md:flex-row gap-8">
               <div className="md:w-1/3 shrink-0">
                  <div className="flex items-center gap-3 text-navy font-bold text-xl border-b-2 border-accent inline-flex pb-2">
                     <TrendingUp className="w-6 h-6 text-accent" />
                     Business Impact
                  </div>
               </div>
               <div className="md:w-2/3">
                  <p className="text-gray-700 text-lg leading-relaxed">{study.impact}</p>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* 3. TESTIMONIAL */}
      <section className="py-24 bg-accent text-navy">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
               <Quote className="w-16 h-16 text-navy/20 mx-auto mb-8" />
               <p className="text-2xl md:text-4xl font-bold leading-snug mb-10">"{study.testimonial.quote}"</p>
               <div className="font-black text-xl uppercase tracking-wider">{study.testimonial.author}</div>
               <div className="font-bold text-navy/70">{study.testimonial.role}</div>
            </ScrollReveal>
         </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
               <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Build your enterprise hub without the CapEx risk.</h2>
               <p className="text-gray-600 text-lg mb-8">Talk to our Enterprise Strategy team to learn how we can design, build, and manage a custom office for your expanding workforce.</p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/calculator" className="bg-navy text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy/90 transition-all text-center">
                     Calculate Your Savings
                  </Link>
                  <Link href="/enterprise-office" className="bg-gray-200 text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition-all text-center">
                     View Enterprise Solutions
                  </Link>
               </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
               <LeadForm 
                  source={`Case Study: ${study.clientName}`}
                  title="Schedule a Strategy Consultation"
               />
            </ScrollReveal>
         </div>
      </section>
    </div>
  );
}
