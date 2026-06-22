import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import LeadForm from '@/components/LeadForm';
import { CheckCircle, MapPin } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Virtual Office in Kerala - Premium Business Address | WeeSpaces',
  description: 'Get a premium Virtual Office in Kerala for company registration, GST compliance, and mail handling. Access business addresses in Kochi, Trivandrum, Calicut, and Coimbatore.',
  alternates: {
    canonical: '/virtual-office-in-kerala',
  },
};

const faqs = [
  {
    question: "What is a Virtual Office?",
    answer: "A virtual office provides your business with a premium professional address for registration and correspondence, without the need to rent physical workspace. It includes mail handling, receptionist support, and access to meeting rooms on demand."
  },
  {
    question: "Can I use the Virtual Office for GST registration in Kerala?",
    answer: "Yes! Our virtual office plans provide all the necessary legal documentation, including NOCs and rental agreements, required for you to successfully register for GST in Kerala."
  },
  {
    question: "Which cities in Kerala do you provide Virtual Offices?",
    answer: "We offer premium virtual office addresses in Kochi (Ernakulam), Trivandrum, and Calicut. We also have locations in Coimbatore, Tamil Nadu."
  },
  {
    question: "How do you handle my company's mail?",
    answer: "Our dedicated front desk team receives your mail, courier packages, and official government correspondence. We store it securely and notify you immediately. You can collect it or have it forwarded to your location."
  }
];

export default function VirtualOfficeKeralaPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-navy-dark border-b border-white/10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium <span className="text-accent">Virtual Office</span> in Kerala
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Get a prestigious business address in Kochi, Trivandrum, or Calicut for company registration, GST compliance, and mail handling — without the high cost of a physical office.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#pricing" className="bg-accent text-navy font-bold py-3 px-8 rounded-xl hover:bg-accent-hover transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(242,156,31,0.3)]">
                View Pricing
              </Link>
              <Link href="#contact" className="border border-white/20 text-white font-bold py-3 px-8 rounded-xl hover:bg-white/5 transition-all w-full sm:w-auto">
                Talk to an Expert
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Virtual Office?</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          <MouseGlowCard className="glass rounded-3xl p-8 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">GST & Company Registration</h3>
            <p className="text-white/70 text-sm">
              We provide all compliant documentation, including NOC and lease agreements, to ensure smooth processing of your GST and company incorporation.
            </p>
          </MouseGlowCard>
          <MouseGlowCard className="glass rounded-3xl p-8 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
              <span className="material-symbols-outlined">mark_email_read</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Mail & Courier Handling</h3>
            <p className="text-white/70 text-sm">
              Never miss important correspondence. Our professional front desk receives and safely stores your mail, notifying you instantly upon arrival.
            </p>
          </MouseGlowCard>
          <MouseGlowCard className="glass rounded-3xl p-8 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
              <span className="material-symbols-outlined">meeting_room</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Access to Meeting Rooms</h3>
            <p className="text-white/70 text-sm">
              Need to meet a client? Virtual office members get exclusive discounted access to our premium, fully-equipped meeting rooms across all locations.
            </p>
          </MouseGlowCard>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prime Addresses Across Kerala</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Choose a prestigious commercial location that best represents your brand.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-2xl border border-white/10 flex items-start gap-4">
               <MapPin className="w-8 h-8 text-accent shrink-0 mt-1" />
               <div>
                  <h4 className="font-bold text-lg mb-1">Kochi (Ernakulam)</h4>
                  <p className="text-sm text-white/60">MG Road, Ravipuram</p>
               </div>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/10 flex items-start gap-4">
               <MapPin className="w-8 h-8 text-accent shrink-0 mt-1" />
               <div>
                  <h4 className="font-bold text-lg mb-1">Trivandrum</h4>
                  <p className="text-sm text-white/60">Pattom, near Technopark</p>
               </div>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/10 flex items-start gap-4">
               <MapPin className="w-8 h-8 text-accent shrink-0 mt-1" />
               <div>
                  <h4 className="font-bold text-lg mb-1">Calicut</h4>
                  <p className="text-sm text-white/60">East Nadakkave, near Cyberpark</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Form */}
      <section id="pricing" className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <ScrollReveal direction="up">
          <h2 className="text-3xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <div className="glass p-8 rounded-2xl border border-accent/20 bg-accent/5">
             <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-6">
                <div>
                   <h3 className="text-2xl font-bold">Virtual Office Plan</h3>
                   <p className="text-white/60 text-sm mt-1">Perfect for registration & mailing</p>
                </div>
                <div className="text-right">
                   <span className="text-sm text-white/50 uppercase tracking-wider block">Starting</span>
                   <span className="text-4xl font-bold text-accent">₹10,000<span className="text-lg text-white/50">/yr</span></span>
                </div>
             </div>
             <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Premium Business Address</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Mail & Courier Management</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> NOC & Agreement for GST</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Receptionist Support</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Discounted Meeting Rooms</li>
             </ul>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2} id="contact" className="glass p-8 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center">Get Your Virtual Office</h3>
          <LeadForm />
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        </ScrollReveal>
        <FAQAccordion faqs={faqs} />
      </section>
    </div>
  );
}
