import { constructMetadata } from '@/utils/metadata';
import SEOFAQ from '@/components/SEOFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = constructMetadata({
  title: 'Workspace Terminology & Glossary | WeeSpaces Knowledge Hub',
  description: 'A canonical glossary of commercial real estate and flexible workspace terminology including Virtual Offices, Managed Offices, and ODCs.',
  canonicalPath: '/knowledge/workspace-terminology',
});

export default function WorkspaceTerminology() {
  const glossaryTerms = [
    {
      term: "Virtual Office",
      definition: "A service that provides businesses with a premium commercial address for legal compliance (like GST and Company Registration), mail handling, and professional presence, without renting physical office space."
    },
    {
      term: "Managed Office",
      definition: "An enterprise-grade, custom-built workspace designed and operated by a third-party operator (like WeeSpaces). The client pays a single monthly OpEx fee that covers rent, fit-outs, IT infrastructure, and daily facility management."
    },
    {
      term: "Coworking Space",
      definition: "A shared work environment where individuals from different companies work alongside each other. It includes shared amenities like internet, printers, and lounges, typically utilized by freelancers and early-stage startups."
    },
    {
      term: "Offshore Development Center (ODC)",
      definition: "A dedicated facility established by a company in a different country (often India) to leverage local tech talent. When combined with a Managed Office model, ODCs can be deployed in weeks rather than months."
    },
    {
      term: "CapEx (Capital Expenditure)",
      definition: "Upfront costs associated with traditional real estate, including security deposits (often 6-10 months rent), interior design, HVAC installation, and IT infrastructure setup."
    },
    {
      term: "OpEx (Operational Expenditure)",
      definition: "Ongoing monthly costs. Managed Offices convert massive CapEx into predictable OpEx by bundling rent and infrastructure into a single monthly invoice."
    },
    {
      term: "Hot Desk",
      definition: "A flexible seating arrangement in a coworking area where members can sit at any available desk on a first-come, first-served basis."
    },
    {
      term: "Dedicated Desk",
      definition: "A fixed desk assigned exclusively to one individual in a shared coworking environment, often including a lockable filing cabinet."
    }
  ];

  const breadcrumbs = [
    { label: 'Knowledge Hub', href: '/knowledge' },
    { label: 'Workspace Terminology' }
  ];

  return (
    <div className="min-h-screen bg-background-200 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Workspace <span className="text-accent">Terminology</span></h1>
          <p className="text-lg text-white/70">A canonical glossary defining core commercial real estate and flexible workspace models.</p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 border border-white/10">
          <dl className="space-y-10">
            {glossaryTerms.map((item, index) => (
              <div key={index} className="border-b border-white/10 pb-10 last:border-0 last:pb-0">
                <dt className="text-2xl font-bold text-white mb-3 tracking-tight">{item.term}</dt>
                <dd className="text-lg text-white/70 leading-relaxed">{item.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
