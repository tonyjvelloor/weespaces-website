import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Calendar, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You | WeeSpaces',
  description: 'Thank you for your interest in WeeSpaces.',
  robots: { index: false, follow: false }, // Prevent search engines from indexing the thank you page
};

export default function ThankYouPage() {
  return (
    <div className="bg-navy min-h-screen font-sans pb-24 pt-24">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        
        <div className="bg-navy-light/50 border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden mt-12">
           {/* Background glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8">
                 <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Request Received!
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
                Thank you for your interest in WeeSpaces. Our workspace expert will call you shortly to discuss your requirements and schedule a personalized tour.
              </p>

              <div className="grid md:grid-cols-2 gap-6 w-full mb-12">
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                    <Phone className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Expect a Call</h3>
                    <p className="text-sm text-white/60">We usually respond within 30 minutes during business hours.</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                    <Calendar className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Tour Preparation</h3>
                    <p className="text-sm text-white/60">Think about your team's specific requirements (parking, IT needs, etc).</p>
                 </div>
              </div>

              <Link href="/" className="inline-flex items-center gap-2 text-accent font-bold hover:text-white transition-colors group">
                 Return to Homepage
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
        </div>

      </div>
    </div>
  );
}
