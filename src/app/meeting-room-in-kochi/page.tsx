import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import LeadForm from '@/components/LeadForm';
import { CheckCircle, MapPin, Monitor, Wifi, Coffee, Video } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Meeting Rooms & Conference Halls in Kochi | WeeSpaces',
  description: 'Book premium meeting rooms and conference halls in Kochi (Ernakulam). Equipped with high-speed Wi-Fi, smart TVs, video conferencing, and whiteboards. Ideal for client meetings, interviews, and team workshops.',
  alternates: {
    canonical: '/meeting-room-in-kochi',
  },
};

const faqs = [
  {
    question: "Can I book a meeting room if I am not a WeeSpaces member?",
    answer: "Yes, our meeting rooms and conference halls in Kochi are available for booking by the hour or day to both members and non-members."
  },
  {
    question: "What equipment is included in the meeting rooms?",
    answer: "Our meeting rooms come equipped with high-speed Wi-Fi, smart TVs/projectors for presentations, whiteboards with markers, and ergonomic seating."
  },
  {
    question: "Is tea and coffee provided during the meeting?",
    answer: "Yes, access to our pantry with unlimited tea, coffee, and filtered water is included with your meeting room booking."
  },
  {
    question: "How do I book a meeting room?",
    answer: "You can book a meeting room by filling out the inquiry form on this page or contacting us directly via WhatsApp or phone. We will confirm availability instantly."
  }
];

export default function MeetingRoomKochiPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-navy-dark border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image src="/images/branches/trivandrum/image3.jpg" alt="Meeting Room in Kochi" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="max-w-2xl">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-8">
                <span className="material-symbols-outlined text-[16px]">meeting_room</span>
                MG Road, Ernakulam
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Professional <span className="text-accent">Meeting Rooms</span> in Kochi
              </h1>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Make the right impression. Book premium, fully-equipped meeting rooms and conference halls by the hour or day in the heart of Ernakulam.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="#contact" className="bg-accent text-navy font-bold py-4 px-8 rounded-xl hover:bg-accent-hover transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(242,156,31,0.3)] text-center">
                  Check Availability
                </Link>
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-accent" /> Hourly & Daily Rates
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Equipped for Productivity</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Everything you need to host successful client pitches, team stand-ups, or interviews.</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-4 gap-8">
          <ScrollReveal direction="up" delay={0.1} className="glass p-8 rounded-2xl border border-white/10">
            <Monitor className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Smart Displays</h3>
            <p className="text-white/60 text-sm">Large screen TVs and wireless casting for seamless presentations.</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2} className="glass p-8 rounded-2xl border border-white/10">
            <Wifi className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Fast Internet</h3>
            <p className="text-white/60 text-sm">Enterprise-grade Wi-Fi to ensure smooth video calls and browsing.</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3} className="glass p-8 rounded-2xl border border-white/10">
            <Video className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">A/V Setup</h3>
            <p className="text-white/60 text-sm">Whiteboards, markers, and audio-conferencing equipment available.</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4} className="glass p-8 rounded-2xl border border-white/10">
            <Coffee className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Beverages</h3>
            <p className="text-white/60 text-sm">Complimentary tea, coffee, and water for you and your guests.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
           <div>
              <ScrollReveal direction="up">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Ideal Spaces For Every Need</h2>
                 <p className="text-white/70 mb-8">Whether it's a quick one-on-one or a board meeting, our spaces adapt to you.</p>
                 <ul className="space-y-4 text-white/80">
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Client Pitches & Presentations</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Team Brainstorming Sessions</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Job Interviews & Appraisals</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Board Meetings</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent" /> Workshops & Training</li>
                 </ul>
              </ScrollReveal>
           </div>
           <div className="relative h-96 rounded-2xl overflow-hidden hidden md:block border border-white/10">
              <Image src="/images/branches/kochi/workspace4.jpg" alt="Meeting Room Setup" fill className="object-cover" />
           </div>
        </div>
      </section>

      {/* Form */}
      <section id="contact" className="py-24 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="up">
          <h2 className="text-3xl font-bold mb-6">Book Your Meeting Room</h2>
          <p className="text-white/70 mb-8">
            Fill out the form with your date and time preferences, and our team will confirm your booking instantly.
          </p>
          <div className="glass p-6 rounded-2xl border border-white/10 bg-navy-light/30">
            <h4 className="font-bold mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-accent"/> Ernakulam Hub</h4>
            <p className="text-sm text-white/60">4th floor, Palal Tower, Mahatma Gandhi Rd, Ravipuram, Perumanoor, Kochi, Ernakulam, Kerala 682016</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2} className="glass p-8 rounded-2xl border border-white/10">
          <LeadForm branch="Ernakulam" />
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
