import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

import { constructMetadata } from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: "Book a Workspace Tour | WeeSpaces",
  description: "Find your perfect workspace in Kerala and Tamil Nadu. Schedule a free tour of our premium coworking spaces and private offices.",
  canonicalPath: "/book-tour"
});

export default function BookTourPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-navy-dark relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's find your <span className="text-accent">perfect workspace.</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-lg">
              Whether you need a dedicated desk for yourself or a private office for a 50-person team, we have you covered.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-accent/10 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Zero Setup Costs</h3>
                  <p className="text-white/60 text-sm">Move in instantly without heavy deposits or interior investments.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-accent/10 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Fully Managed</h3>
                  <p className="text-white/60 text-sm">We handle internet, maintenance, and housekeeping. You focus on work.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-accent/10 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Scale Anytime</h3>
                  <p className="text-white/60 text-sm">Highly flexible agreements allow you to add or remove seats as you grow.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 max-w-md">
                <div className="flex -space-x-4">
                    <Image src="/images/founder_sankesh.jpg" alt="Member" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-navy object-cover" />
                    <div className="w-10 h-10 rounded-full border-2 border-navy bg-accent flex items-center justify-center text-navy font-bold text-xs shadow-lg z-10">+500</div>
                </div>
                <p className="text-sm text-white/80 font-medium">Join 500+ professionals already working at WeeSpaces.</p>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <LeadForm />
          </div>

        </div>
      </div>
    </div>
  );
}
