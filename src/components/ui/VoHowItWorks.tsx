import ScrollReveal from './ScrollReveal';

export default function VoHowItWorks() {
  const steps = [
    { num: "01", title: "Choose a Location", desc: "Select from our premium branches in Kochi, Coimbatore, Trivandrum, or Calicut." },
    { num: "02", title: "Select Your Plan", desc: "Choose Starter, Professional, or Premium based on your business needs." },
    { num: "03", title: "Submit KYC Documents", desc: "Upload your ID, address proof, and company details via our secure portal." },
    { num: "04", title: "Sign the Agreement", desc: "Digitally sign the rental agreement and receive your NOC and utility bills." },
    { num: "05", title: "Apply for GST / MCA", desc: "Use your new premium business address to register your company and get your GSTIN." },
  ];

  return (
    <div className="py-20 relative">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Get your legally compliant business address operational in as little as 48 hours.</p>
        </div>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-navy/5 via-accent to-navy/5 -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-white border-[3px] border-gray-100 shadow-xl flex items-center justify-center mb-6 group-hover:border-accent transition-colors relative">
                  <span className="text-xl font-black text-navy">{step.num}</span>
                </div>
                <h3 className="font-bold text-navy mb-2 text-lg">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
