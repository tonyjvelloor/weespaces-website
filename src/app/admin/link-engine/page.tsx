'use client';

import { useState, useEffect } from 'react';
import { Link as LinkIcon, AlertTriangle, CheckCircle2, TrendingUp, Sparkles, Activity } from 'lucide-react';
import Link from 'next/link';

export default function LinkEngineDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/link-engine');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Failed to fetch link engine data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <h1 className="min-h-screen bg-gray-50 flex items-center justify-center text-navy font-bold text-2xl">Loading Engine...</h1>;
  if (!data) return <div className="min-h-screen bg-gray-50 flex items-center justify-center text-red-500 font-bold text-2xl">Failed to load data.</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans text-gray-900">
       <div className="max-w-7xl mx-auto">
          <header className="mb-12 flex justify-between items-end">
             <div>
                <h1 className="text-4xl font-black text-navy mb-2 flex items-center gap-3">
                  <LinkIcon className="w-10 h-10 text-accent" />
                  Internal Link Scoring Engine
                </h1>
                <p className="text-gray-500 font-medium">Algorithmic distribution of PageRank based on Semantic Relevance & Commercial Value.</p>
             </div>
             <div className="flex gap-4">
                <Link href="/admin/dashboard" className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-700 font-bold shadow-sm hover:bg-gray-50">
                  &larr; Revenue OS
                </Link>
             </div>
          </header>

          {/* OVERVIEW STATS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
             <StatCard label="Total Indexed URLs" value={data.overview.totalInternalUrls} />
             <StatCard label="Total Internal Links" value={data.overview.totalInternalLinks.toLocaleString()} highlight />
             <StatCard label="Avg Authority Score" value={`${data.overview.averageAuthorityScore}/100`} />
             <StatCard label="Canonical URLs" value={data.overview.totalCanonicalUrls} />
             <StatCard label="Uncrawled/External" value={data.overview.uncrawledExternal.toLocaleString()} />
          </div>

          <div className="space-y-12">
             <EngineSection title="Tier 1 (Commercial & Landing Pages)" target="Target: 200–400 links" items={data.tier1} />
             <EngineSection title="Tier 2 (Comparison, Research, Knowledge)" target="Target: 50–150 links" items={data.tier2} />
             <EngineSection title="Tier 3 (Blogs)" target="Target: 20–50 links" items={data.tier3} />
          </div>
       </div>
    </div>
  );
}

function StatCard({ label, value, highlight }: { label: string, value: string | number, highlight?: boolean }) {
  return (
     <div className={`p-6 rounded-2xl border ${highlight ? 'bg-navy text-white border-navy shadow-lg' : 'bg-white text-navy border-gray-200 shadow-sm'} flex flex-col justify-between`}>
        <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${highlight ? 'text-white/60' : 'text-gray-500'}`}>{label}</div>
        <div className={`text-3xl font-black ${highlight ? 'text-accent' : ''}`}>{value}</div>
     </div>
  );
}

function EngineSection({ title, target, items }: { title: string, target: string, items: any[] }) {
  return (
    <section>
       <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
            <Activity className="w-5 h-5 text-accent" /> {title}
          </h2>
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-100">{target}</span>
       </div>
       <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
             <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
                   <tr>
                      <th className="p-4 font-bold">Page URL</th>
                      <th className="p-4 font-bold text-center">Links</th>
                      <th className="p-4 font-bold text-center">Semantic</th>
                      <th className="p-4 font-bold text-center">Commercial</th>
                      <th className="p-4 font-bold text-center">AI Citation</th>
                      <th className="p-4 font-bold text-center">Authority Score</th>
                      <th className="p-4 font-bold">Automated Recommendation</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                   {items.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                         <td className="p-4 font-medium text-navy">{item.url}</td>
                         <td className="p-4 text-center">
                            <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold ${item.internalLinks > 300 ? 'bg-red-50 text-red-700' : item.internalLinks < 15 ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'}`}>
                               {item.internalLinks}
                            </span>
                         </td>
                         <td className="p-4 text-center font-mono">{item.semanticRelevance}</td>
                         <td className="p-4 text-center font-mono">{item.commercialValue}</td>
                         <td className="p-4 text-center font-mono">
                            <span className="flex items-center justify-center gap-1">
                               <Sparkles className="w-3 h-3 text-purple-500" /> {item.aiCitationPotential}
                            </span>
                         </td>
                         <td className="p-4 text-center">
                            <span className={`font-black text-lg ${item.authorityScore > 80 ? 'text-green-600' : item.authorityScore > 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                               {item.authorityScore}
                            </span>
                         </td>
                         <td className="p-4">
                            <div className={`flex items-start gap-2 text-sm font-medium ${item.recommendation.includes('Prune') || item.recommendation.includes('Add') ? 'text-amber-700' : 'text-emerald-700'}`}>
                               {item.recommendation.includes('Prune') || item.recommendation.includes('Add') ? (
                                 <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                               ) : (
                                 <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                               )}
                               {item.recommendation}
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </section>
  );
}
