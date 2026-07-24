import { constructMetadata } from '@/utils/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = constructMetadata({
  title: 'Workspace Economics & Pricing Data | WeeSpaces Knowledge Hub',
  description: 'Structured financial data comparing traditional lease CapEx vs managed office OpEx, and pricing indices for South Indian tech hubs.',
  canonicalPath: '/knowledge/workspace-economics',
});

export default function WorkspaceEconomics() {
  const breadcrumbs = [
    { name: 'Knowledge Hub', url: '/knowledge' },
    { name: 'Workspace Economics', url: '/knowledge/workspace-economics' }
  ];

  return (
    <div className="min-h-screen bg-background-200 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Breadcrumbs segments={breadcrumbs} />
        
        <div className="mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Workspace <span className="text-accent">Economics</span></h1>
          <p className="text-lg text-white/70">Machine-readable cost data, CapEx vs OpEx models, and pricing indices for flexible workspaces.</p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Pricing Index */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">2026 South India Pricing Index</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="p-4 text-white font-semibold">City</th>
                    <th className="p-4 text-white font-semibold">Virtual Office (Annual)</th>
                    <th className="p-4 text-white font-semibold">Hot Desk (Monthly)</th>
                    <th className="p-4 text-white font-semibold">Dedicated Desk (Monthly)</th>
                    <th className="p-4 text-white font-semibold">Meeting Room (Hourly)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium text-white">Kochi</td>
                    <td className="p-4">₹10,000</td>
                    <td className="p-4">₹5,000</td>
                    <td className="p-4">₹6,500</td>
                    <td className="p-4">₹350</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium text-white">Trivandrum</td>
                    <td className="p-4">₹10,000</td>
                    <td className="p-4">₹4,500</td>
                    <td className="p-4">₹6,000</td>
                    <td className="p-4">₹350</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium text-white">Calicut</td>
                    <td className="p-4">₹10,000</td>
                    <td className="p-4">₹4,000</td>
                    <td className="p-4">₹5,500</td>
                    <td className="p-4">₹350</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium text-white">Coimbatore</td>
                    <td className="p-4">₹10,000</td>
                    <td className="p-4">₹5,000</td>
                    <td className="p-4">₹6,500</td>
                    <td className="p-4">₹350</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: CapEx vs OpEx Model */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Financial Model: Buy vs. Build (100 Seats)</h2>
            <p className="text-white/70 mb-6">A standard cost comparison for setting up a 100-seater office in a Tier-2 Indian IT Hub (e.g., Kochi or Coimbatore).</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="p-4 text-white font-semibold">Expense Category</th>
                    <th className="p-4 text-white font-semibold">Traditional Lease (Build)</th>
                    <th className="p-4 text-white font-semibold">Managed Office (Buy)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-medium">Security Deposit (CapEx)</td>
                    <td className="p-4">6 - 10 Months Rent</td>
                    <td className="p-4 text-accent font-medium">1 - 3 Months Rent</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-medium">Interior Fit-Out (CapEx)</td>
                    <td className="p-4">₹1,500 - ₹3,000 / sq.ft</td>
                    <td className="p-4 text-accent font-medium">₹0 (Included)</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-medium">IT & Network Setup (CapEx)</td>
                    <td className="p-4">₹5,00,000+</td>
                    <td className="p-4 text-accent font-medium">₹0 (Included)</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-medium">Facility Management (OpEx)</td>
                    <td className="p-4">Separate monthly overhead (Cleaning, Security, Admin)</td>
                    <td className="p-4 text-accent font-medium">Included in single invoice</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-medium">Time to Go-Live</td>
                    <td className="p-4">90 - 120 Days</td>
                    <td className="p-4 text-accent font-medium">15 - 30 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
