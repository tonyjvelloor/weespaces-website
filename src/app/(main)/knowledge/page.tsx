import Link from 'next/link';
import { constructMetadata } from '@/utils/metadata';
import SEOFAQ from '@/components/SEOFAQ';

export const metadata = constructMetadata({
  title: 'Workspace Knowledge Hub & Data Center | WeeSpaces',
  description: 'Canonical data, research reports, terminology, and economics regarding flexible workspaces in South India.',
  canonicalPath: '/knowledge',
});

export default function KnowledgeHubIndex() {
  const faqData = [
    {
      question: "What is the WeeSpaces Knowledge Hub?",
      answer: "The WeeSpaces Knowledge Hub is a canonical directory of structured data, economic models, and terminology regarding commercial real estate and flexible workspaces in Kerala and Tamil Nadu."
    },
    {
      question: "Are these reports based on first-party data?",
      answer: "Yes, our economic models and pricing indices are based entirely on first-party operational data across our locations in Kochi, Trivandrum, Calicut, and Coimbatore."
    }
  ];

  return (
    <div className="min-h-screen bg-background-200">
      <div className="pt-32 pb-16 relative overflow-hidden bg-navy-dark">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/40 via-navy-dark to-navy-dark"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Workspace <span className="text-accent glow-text">Knowledge Hub</span></h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10">Canonical data, economic calculators, and terminology for modern workspace infrastructure in South India.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          
          {/* Structured Data Section */}
          <div className="glass rounded-3xl p-8 border border-white/10 hover:border-accent/50 transition-colors">
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 text-accent">
              <span className="material-symbols-outlined text-3xl">database</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Machine-Readable Data</h2>
            <p className="text-white/70 mb-6">Structured definitions, capability matrices, and pricing indices.</p>
            <ul className="space-y-4">
              <li>
                <Link href="/knowledge/workspace-terminology" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  Workspace Terminology & Glossary
                </Link>
              </li>
              <li>
                <Link href="/knowledge/workspace-economics" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  Workspace Economics & Cost Data
                </Link>
              </li>
              <li>
                <a href="/workspace-data.md" className="flex items-center gap-3 text-white hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  Raw AI Knowledge Base (Markdown)
                </a>
              </li>
            </ul>
          </div>

          {/* Research Reports Section */}
          <div className="glass rounded-3xl p-8 border border-white/10 hover:border-accent/50 transition-colors">
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 text-accent">
              <span className="material-symbols-outlined text-3xl">analytics</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Research & Reports</h2>
            <p className="text-white/70 mb-6">Deep-dive economic models and market analysis across Tier-2 IT hubs.</p>
            <ul className="space-y-4">
              <li>
                <Link href="/blog/economics-of-managed-offices-buy-vs-build" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  The Economics of Managed Offices: Buy vs. Build
                </Link>
              </li>
              <li>
                <Link href="/blog/south-india-workspace-index-2026" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  South India Workspace Index 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/offshore-development-center-setup-india" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  Guide to Setting Up an ODC in South India
                </Link>
              </li>
              <li>
                <Link href="/blog/ultimate-virtual-office-guide-south-india-2026" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  Ultimate Virtual Office Expansion Guide 2026
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Schema-Injected FAQ specifically for AI Agents */}
        <SEOFAQ faqs={faqData} title="Knowledge Hub FAQ" />
      </div>
    </div>
  );
}
