'use client';

import { useState, useEffect } from 'react';
import { BarChart3, Users, Target, Activity, MapPin, Building2, TrendingUp, DollarSign } from 'lucide-react';

export default function RevenueDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/dashboard');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center text-navy font-bold text-2xl">Loading Revenue OS...</div>;
  if (!data) return <div className="min-h-screen bg-gray-50 flex items-center justify-center text-red-500 font-bold text-2xl">Failed to load data.</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
       <div className="max-w-7xl mx-auto">
          <header className="mb-12 flex justify-between items-end">
             <div>
                <h1 className="text-4xl font-black text-navy mb-2">Revenue & Authority OS</h1>
                <p className="text-gray-500 font-medium">Real-time Marketing, Sales, and Operational metrics.</p>
             </div>
             <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm font-bold text-sm text-gray-700">
                Last Updated: Just now
             </div>
          </header>

          {/* ACQUISITION */}
          <section className="mb-12">
             <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-navy">Acquisition & Marketing</h2>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <KpiCard label="Organic Sessions" value={data.acquisition.organicSessions.toLocaleString()} growth={data.acquisition.organicGrowth} />
                <KpiCard label="Paid Sessions" value={data.acquisition.paidSessions.toLocaleString()} growth={data.acquisition.paidGrowth} />
                <KpiCard label="Avg. CPC" value={data.acquisition.cpc} />
                <KpiCard label="Blended CTR" value={data.acquisition.ctr} />
                <KpiCard label="Cost Per Lead" value={data.acquisition.costPerLead} highlight />
             </div>
          </section>

          {/* ENGAGEMENT */}
          <section className="mb-12">
             <div className="flex items-center gap-3 mb-6">
                <Activity className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-navy">Tool Engagement & Qualification</h2>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <KpiCard label="Calculator Completions" value={data.engagement.calculatorCompletions} growth={data.engagement.calculatorGrowth} />
                <KpiCard label="Finder Completions" value={data.engagement.finderCompletions} />
                <KpiCard label="GST Checker Completions" value={data.engagement.gstCheckerCompletions} />
                <KpiCard label="Avg. Session Time" value={data.engagement.avgSessionTime} />
             </div>
          </section>

          {/* SALES */}
          <section className="mb-12">
             <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-navy">Sales Pipeline</h2>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <KpiCard label="Virtual Office Leads" value={data.sales.virtualOfficeLeads} growth={data.sales.voLeadGrowth} />
                <KpiCard label="Enterprise Leads" value={data.sales.enterpriseLeads} growth={data.sales.enterpriseGrowth} highlight />
                <KpiCard label="Tours Booked" value={data.sales.toursBooked} />
                <KpiCard label="Tours Completed" value={data.sales.toursCompleted} />
                <KpiCard label="Lead to Close Rate" value={data.sales.closeRate} />
             </div>
          </section>

          {/* BUSINESS / REVENUE */}
          <section className="mb-12">
             <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-navy">Business Operations</h2>
             </div>
             
             <div className="grid md:grid-cols-4 gap-4 mb-8">
                <KpiCard label="Total Seats Sold" value={data.business.seatsSold.toLocaleString()} />
                <KpiCard label="Portfolio Occupancy" value={data.business.occupancy} />
                <KpiCard label="Monthly Recurring Revenue" value={data.business.revenueMonthly} growth={data.business.revenueGrowth} highlight />
             </div>

             <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                   <h3 className="font-bold text-navy mb-6 flex items-center gap-2"><MapPin className="w-5 h-5 text-gray-400" /> Revenue by Location</h3>
                   <div className="space-y-4">
                      {data.business.revenueByLocation.map((loc: any, i: number) => (
                         <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <div>
                               <div className="font-bold text-navy">{loc.city}</div>
                               <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Occupancy: {loc.occupancy}</div>
                            </div>
                            <div className="font-black text-xl text-green-600">{loc.revenue}</div>
                         </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                   <h3 className="font-bold text-navy mb-6 flex items-center gap-2"><Building2 className="w-5 h-5 text-gray-400" /> Revenue by Service</h3>
                   <div className="space-y-4">
                      {data.business.revenueByService.map((svc: any, i: number) => (
                         <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <div className="font-bold text-navy">{svc.service}</div>
                            <div className="flex items-center gap-4">
                               <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div className="h-full bg-accent" style={{ width: `${svc.percentage}%` }}></div>
                               </div>
                               <div className="font-black text-gray-900 w-12 text-right">{svc.percentage}%</div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </section>
       </div>
    </div>
  );
}

function KpiCard({ label, value, growth, highlight }: { label: string, value: string | number, growth?: string, highlight?: boolean }) {
   return (
      <div className={`p-6 rounded-2xl border ${highlight ? 'bg-navy text-white border-navy shadow-lg' : 'bg-white text-navy border-gray-200 shadow-sm'} flex flex-col justify-between`}>
         <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${highlight ? 'text-white/60' : 'text-gray-500'}`}>{label}</div>
         <div className="flex items-end justify-between">
            <div className={`text-3xl font-black ${highlight && typeof value === 'string' && value.includes('₹') ? 'text-accent' : ''}`}>{value}</div>
            {growth && (
               <div className={`text-sm font-bold flex items-center gap-1 ${growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {growth.startsWith('+') ? <TrendingUp className="w-4 h-4" /> : null}
                  {growth}
               </div>
            )}
         </div>
      </div>
   );
}
