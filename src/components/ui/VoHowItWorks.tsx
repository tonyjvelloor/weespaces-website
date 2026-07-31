import ScrollReveal from './ScrollReveal';
import { CalendarDays, CheckCircle, FileText, Briefcase, Landmark } from 'lucide-react';

export default function VoHowItWorks() {
  const steps = [
    { icon: Briefcase, title: "Choose Plan", desc: "Select your required business address and plan tier." },
    { icon: FileText, title: "Documents", desc: "Submit basic KYC (PAN, Aadhar, Company details)." },
    { icon: Landmark, title: "Agreement", desc: "Digitally sign the virtual office rental agreement." },
    { icon: CheckCircle, title: "GST Registration", desc: "Use the provided NOC & bills for GST filing." },
    { icon: CalendarDays, title: "Business Ready", desc: "Start receiving mail and using your premium address." },
  ];

  return (
    <div className="py-20 relative">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Step-by-Step Process & Timeline</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From choosing a plan to being fully GST compliant, we make the process seamless.</p>
        </div>
      </ScrollReveal>

      {/* Timeline Section */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-16">
          <h3 className="text-xl font-bold text-navy mb-8 text-center">Fast-Track Setup Timeline</h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
            <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
            
            <div className="bg-accent/10 p-6 rounded-xl border border-accent/20 z-10 w-full md:w-1/3 text-center">
              <span className="text-accent font-bold text-sm uppercase tracking-wider mb-2 block">Day 1</span>
              <h4 className="font-bold text-navy text-lg">Agreement</h4>
              <p className="text-sm text-gray-500 mt-2">Sign digital rental agreement.</p>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-xl border border-accent/20 z-10 w-full md:w-1/3 text-center">
              <span className="text-accent font-bold text-sm uppercase tracking-wider mb-2 block">Day 2</span>
              <h4 className="font-bold text-navy text-lg">Address Proof</h4>
              <p className="text-sm text-gray-500 mt-2">Receive NOC & Utility Bills.</p>
            </div>
            
            <div className="bg-navy p-6 rounded-xl border border-navy shadow-lg z-10 w-full md:w-1/3 text-center text-white">
              <span className="text-white/60 font-bold text-sm uppercase tracking-wider mb-2 block">Next Step</span>
              <h4 className="font-bold text-white text-lg">GST Filing</h4>
              <p className="text-sm text-white/80 mt-2">Submit to portal for approval.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto relative mt-16">
        <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-navy/5 via-accent to-navy/5 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-white border-[3px] border-gray-100 shadow-xl flex items-center justify-center mb-6 group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-navy group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy mb-2 text-lg">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
