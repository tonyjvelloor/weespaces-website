import ScrollReveal from './ScrollReveal';

export default function VoDocumentChecklist() {
  const documents = [
    { name: "No Objection Certificate (NOC)", icon: "assignment_turned_in", desc: "Signed by property owner for GST/MCA" },
    { name: "Rental Agreement", icon: "contract", desc: "Legally drafted and notarized (if required)" },
    { name: "Utility Bill", icon: "receipt_long", desc: "Recent electricity/tax receipt for address proof" },
    { name: "Signage & Board", icon: "storefront", desc: "Company name board displayed at the entrance" },
    { name: "GST Verification Support", icon: "verified_user", desc: "On-site support during physical GST inspections" },
  ];

  return (
    <div className="bg-navy-light/10 p-8 md:p-12 rounded-3xl border border-navy/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[60px] -mt-10 -mr-10"></div>
      
      <ScrollReveal>
        <h3 className="text-3xl font-bold text-navy mb-4">Complete Documentation Transparency</h3>
        <p className="text-gray-600 mb-10 max-w-2xl">
          We understand that government registrations require precise paperwork. When you sign up for a WeeSpaces Virtual Office, you receive a complete legal docket.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {documents.map((doc, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:border-accent/50 transition-colors h-full">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-accent">{doc.icon}</span>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg mb-1">{doc.name}</h4>
                <p className="text-gray-500 text-sm">{doc.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
