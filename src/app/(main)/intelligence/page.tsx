import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { FileText, TrendingUp, DollarSign, Building, Download, BarChart2, Briefcase, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = constructMetadata({
  title: 'Workspace Intelligence Center | Market Research & Data',
  description: 'Access exclusive research, commercial rent reports, and workspace trends across South India. Primary data for enterprises, startups, and journalists.',
  canonicalPath: '/intelligence',
});

const reports = [
  {
    title: 'The 2026 South India Workspace Index',
    category: 'Market Research',
    description: 'A comprehensive analysis of coworking and managed office demand across Kochi, Coimbatore, Trivandrum, and Calicut.',
    icon: <BarChart2 className="w-8 h-8 text-accent" />,
    date: 'July 2026',
    featured: true
  },
  {
    title: 'Commercial Rent vs. Managed Office Report',
    category: 'Cost Analysis',
    description: 'Data-driven breakdown of CapEx and OpEx for traditional commercial leases vs. enterprise managed offices in Tier-2 IT hubs.',
    icon: <DollarSign className="w-8 h-8 text-accent" />,
    date: 'June 2026',
    featured: true
  },
  {
    title: 'Startup Office Setup Costs 2026',
    category: 'Startup Trends',
    description: 'A financial guide for early-stage startups mapping out essential infrastructure costs in Kerala and Tamil Nadu.',
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    date: 'May 2026'
  },
  {
    title: 'The Post-Pandemic Hybrid Work Demand',
    category: 'Office Demand',
    description: 'Survey results from 500+ SMEs on their transition to hybrid models and flexible workspace adoption.',
    icon: <Briefcase className="w-8 h-8 text-accent" />,
    date: 'April 2026'
  },
  {
    title: 'IT & GCC Infrastructure Requirements',
    category: 'Industry Standards',
    description: 'Detailed specifications required by Global Capability Centers (GCCs) moving to Tier-2 cities.',
    icon: <Building className="w-8 h-8 text-accent" />,
    date: 'March 2026'
  },
  {
    title: 'Energy & Sustainability in Modern Workspaces',
    category: 'ESG Trends',
    description: 'How modern coworking spaces reduce the carbon footprint per employee through shared high-efficiency resources.',
    icon: <Zap className="w-8 h-8 text-accent" />,
    date: 'February 2026'
  }
];

export default function WorkspaceIntelligenceCenter() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent via-navy to-navy"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-sm mb-6 uppercase tracking-wider">
              Research & Reports
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
              Workspace Intelligence Center
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Data, market research, and deep-dive analyses on commercial real estate, startup trends, and the future of work in South India. 
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. PRESS CITE CALLOUT */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
               <FileText className="w-6 h-6 text-accent" />
             </div>
             <div>
                <h3 className="font-bold text-navy text-lg">For Journalists & Publications</h3>
                <p className="text-gray-500 text-sm">All original data and charts are free to cite. Please credit "WeeSpaces Workspace Intelligence Center" with a link.</p>
             </div>
           </div>
           <button className="px-6 py-3 bg-navy text-white rounded-lg font-bold text-sm hover:bg-navy/90 transition-colors whitespace-nowrap">
             Contact Press Team
           </button>
        </div>
      </section>

      {/* 3. FEATURED REPORTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
             <h2 className="text-3xl font-bold text-navy mb-10">Featured Reports</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
             {reports.filter(r => r.featured).map((report, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                   <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        {report.icon}
                     </div>
                     <div className="text-accent text-sm font-bold tracking-wider uppercase mb-4">{report.category}</div>
                     <h3 className="text-2xl font-bold text-navy mb-4 pr-12">{report.title}</h3>
                     <p className="text-gray-600 mb-8 flex-grow">{report.description}</p>
                     <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm font-bold text-gray-400">{report.date}</span>
                        <Link href="#" className="flex items-center gap-2 text-navy font-bold hover:text-accent transition-colors">
                          <Download className="w-5 h-5" /> Download PDF
                        </Link>
                     </div>
                   </div>
                </ScrollReveal>
             ))}
          </div>

          {/* 4. ALL RESEARCH */}
          <ScrollReveal>
             <h2 className="text-2xl font-bold text-navy mb-8">Latest Insights</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
             {reports.filter(r => !r.featured).map((report, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
                     <div className="text-accent text-xs font-bold tracking-wider uppercase mb-3">{report.category}</div>
                     <h3 className="text-lg font-bold text-navy mb-3 line-clamp-2">{report.title}</h3>
                     <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">{report.description}</p>
                     <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <span className="text-xs font-medium text-gray-400">{report.date}</span>
                        <Link href="#" className="text-accent font-bold text-sm hover:underline">
                          Read Report
                        </Link>
                     </div>
                   </div>
                </ScrollReveal>
             ))}
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER / ALERT CTA */}
      <section className="py-20 bg-navy text-white text-center">
         <div className="max-w-2xl mx-auto px-6">
            <ScrollReveal>
               <h2 className="text-3xl font-bold mb-4">Get the latest workspace data.</h2>
               <p className="text-white/70 mb-8">Subscribe to receive quarterly intelligence reports directly to your inbox. No spam, just high-value data.</p>
               <form className="flex flex-col sm:flex-row gap-3 justify-center">
                  <input type="email" placeholder="Enter your work email" className="px-6 py-4 rounded-xl text-gray-900 w-full sm:w-auto flex-grow outline-none focus:ring-2 focus:ring-accent" />
                  <button type="button" className="px-8 py-4 bg-accent text-navy font-bold rounded-xl hover:bg-accent-hover transition-colors">
                     Subscribe
                  </button>
               </form>
            </ScrollReveal>
         </div>
      </section>
    </div>
  );
}
