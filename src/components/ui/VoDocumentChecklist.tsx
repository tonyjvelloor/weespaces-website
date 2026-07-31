import ScrollReveal from './ScrollReveal';
import { Download } from 'lucide-react';

export default function VoDocumentChecklist() {
  const youProvide = [
    { name: "Directors' KYC", icon: "badge", desc: "PAN and Aadhar card copies of all directors/partners." },
    { name: "Company Details", icon: "corporate_fare", desc: "Certificate of Incorporation (if already registered) or proposed name." },
    { name: "Passport Photo", icon: "account_box", desc: "Recent passport-sized photographs." },
  ];

  const weProvide = [
    { name: "No Objection Certificate", icon: "assignment_turned_in", desc: "Signed NOC from the property owner." },
    { name: "Rental Agreement", icon: "contract", desc: "Legally drafted and notarized agreement." },
    { name: "Utility Bill", icon: "receipt_long", desc: "Recent electricity or tax receipt." },
    { name: "Signage & Board", icon: "storefront", desc: "Company name displayed at our entrance." },
    { name: "Inspection Support", icon: "verified_user", desc: "On-site support during physical GST inspections." },
  ];

  return (
    <div className="bg-navy-light/10 p-8 md:p-12 rounded-3xl border border-navy/5 relative overflow-hidden mt-20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[60px] -mt-10 -mr-10"></div>
      
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h3 className="text-3xl font-bold text-navy mb-4">Required Documents for GST</h3>
            <p className="text-gray-600 max-w-2xl">
              Complete documentation transparency. Here is exactly what you need to provide, and what we deliver for your GST and MCA registration.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-accent text-navy px-6 py-3 rounded-xl font-bold hover:bg-accent/90 transition-colors shrink-0">
            <Download className="w-5 h-5" />
            Download PDF Checklist
          </button>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 relative z-10">
        <div>
          <ScrollReveal delay={0.1}>
            <h4 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-4">What You Provide</h4>
            <div className="space-y-4">
              {youProvide.map((doc, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-gray-500">{doc.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-navy">{doc.name}</h5>
                    <p className="text-gray-500 text-sm">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div>
          <ScrollReveal delay={0.2}>
            <h4 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-4">What We Deliver</h4>
            <div className="space-y-4">
              {weProvide.map((doc, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-accent/20 shadow-sm flex items-start gap-4 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 ml-2">
                    <span className="material-symbols-outlined text-accent">{doc.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-navy">{doc.name}</h5>
                    <p className="text-gray-500 text-sm">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
