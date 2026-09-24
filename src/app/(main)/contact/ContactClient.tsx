"use client";

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { track } from '@/lib/tracking';

function ContactForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan');
  const branchParam = searchParams.get('branch');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState("Private Cabin");
  const [selectedBranch, setSelectedBranch] = useState("Trivandrum");
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (planParam) {
      const formattedPlan = planParam
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setSelectedPlan(formattedPlan);
    }
    if (branchParam) {
      setSelectedBranch(branchParam.charAt(0).toUpperCase() + branchParam.slice(1));
    }
  }, [planParam, branchParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://weespaces.in/contact';
      const source = `Contact Page Enquiry - ${selectedPlan} (${selectedBranch})`;

      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          requirement: selectedPlan,
          location: selectedBranch,
          source,
          message,
          pageUrl,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit enquiry');
      }

      track.form('submit', { pageType: 'contact', pageSlug: '/contact', city: selectedBranch }, { name, phone, email, requirement: selectedPlan, message });

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again or call us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-500/10 border border-green-500/30 p-8 rounded-2xl text-center flex flex-col items-center justify-center min-h-[350px]">
        <span className="material-symbols-outlined text-green-400 text-6xl mb-4">check_circle</span>
        <h3 className="text-2xl font-bold text-white mb-2">Enquiry Submitted!</h3>
        <p className="text-white/70 text-base max-w-md">
          Thank you, <span className="text-accent font-semibold">{name}</span>. Our workspace team will contact you within 2–4 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setName('');
            setPhone('');
            setEmail('');
            setMessage('');
          }}
          className="mt-6 text-sm text-accent underline hover:text-accent-hover transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {errorMsg && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-4 rounded-xl text-sm font-medium">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-white/70 mb-2">Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-white/70 mb-2">Phone *</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
            placeholder="+91 92071 89111"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-bold text-white/70 mb-2">Email *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
          placeholder="john@company.com"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-white/70 mb-2">Service Type</label>
          <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
            <option>Private Cabin</option>
            <option>Dedicated Desk</option>
            <option>Hot Desk</option>
            <option>Virtual Office</option>
            <option>Conference Room</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-white/70 mb-2">Preferred Branch</label>
          <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)} className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
            <option>Trivandrum</option>
            <option>Ernakulam</option>
            <option>Calicut</option>
            <option>Coimbatore</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-white/70 mb-2">Message *</label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
          placeholder="How can we help you?"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent-hover text-navy font-bold py-4 rounded-xl transition-colors text-lg glow disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin"></span>
            Submitting...
          </>
        ) : (
          'Submit Enquiry'
        )}
      </button>
    </form>
  );
}

export default function ContactClient() {
  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Our Team</h1>
          <p className="text-white/70 text-lg">Reach out to us for enterprise solutions, bulk bookings, or general enquiries.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Form */}
          <ScrollReveal direction="right">
            <MouseGlowCard className="glass p-8 md:p-10 rounded-3xl h-full border border-white/10">
              <h2 className="text-2xl font-bold mb-8">Send an Enquiry</h2>
              <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div></div>}>
                <ContactForm />
              </Suspense>
            </MouseGlowCard>
          </ScrollReveal>

          {/* Contact Details */}
          <ScrollReveal direction="left" className="space-y-8 flex flex-col justify-center">
            <MouseGlowCard className="flex items-start gap-6 glass p-6 rounded-2xl border border-white/10">
              <div className="bg-accent/20 p-4 rounded-full">
                <span className="material-symbols-outlined text-accent text-3xl">call</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Call Us Directly</h3>
                <a href="tel:+919207189111" className="text-2xl font-heading text-white/90 hover:text-accent transition-colors block mb-1">+91 92071 89111</a>
                <a href="tel:+919207189222" className="text-2xl font-heading text-white/90 hover:text-accent transition-colors">+91 92071 89222</a>
              </div>
            </MouseGlowCard>

            <MouseGlowCard className="flex items-start gap-6 glass p-6 rounded-2xl border border-white/10">
              <div className="bg-accent/20 p-4 rounded-full">
                <span className="material-symbols-outlined text-accent text-3xl">mail</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <a href="mailto:corporate@weespaces.in" className="text-xl text-white/90 hover:text-accent transition-colors">corporate@weespaces.in</a>
              </div>
            </MouseGlowCard>

            <MouseGlowCard className="flex items-start gap-6 glass p-6 rounded-2xl border border-green-500/30 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
              <div className="bg-green-500/20 p-4 rounded-full">
                <span className="material-symbols-outlined text-green-500 text-3xl">chat</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">WhatsApp Support</h3>
                <p className="text-white/70 mb-3 text-sm">Get instant replies from our community managers.</p>
                <a href="https://api.whatsapp.com/send/?phone=919207189111" target="_blank" rel="noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm">
                  Chat on WhatsApp
                </a>
              </div>
            </MouseGlowCard>
          </ScrollReveal>
        </div>

        {/* 4 Branch Maps */}
        <ScrollReveal direction="up">
          <h2 className="text-3xl font-bold mb-10 text-center">Find Us Across 4 Locations</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1} className="glass p-4 rounded-3xl border border-white/10">
            <h3 className="text-lg font-bold mb-4 px-2">Trivandrum (Head Office)</h3>
            <div className="w-full h-64 bg-navy-dark rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 relative">
              <iframe src="https://maps.google.com/maps?q=1st%20Floor,%20Relcon%20Plaza,%20Pattom,%20Thiruvananthapuram,%20Kerala%20695004&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" frameBorder="0" allowFullScreen loading="lazy"></iframe>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="glass p-4 rounded-3xl border border-white/10">
            <h3 className="text-lg font-bold mb-4 px-2">Ernakulam</h3>
            <div className="w-full h-64 bg-navy-dark rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 relative">
              <iframe src="https://maps.google.com/maps?q=4th%20floor,%20Palal%20Tower,%20Mahatma%20Gandhi%20Rd,%20Ravipuram,%20Perumanoor,%20Kochi,%20Ernakulam,%20Kerala%20682016&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" frameBorder="0" allowFullScreen loading="lazy"></iframe>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="glass p-4 rounded-3xl border border-white/10">
            <h3 className="text-lg font-bold mb-4 px-2">Calicut</h3>
            <div className="w-full h-64 bg-navy-dark rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 relative">
              <iframe src="https://maps.google.com/maps?q=Door%20No.%202951%2FA,%20Neeloth%20Plaza,%20Holy%20Cross%20IMT%20Road,%20Wayanad%20Rd,%20Kozhikode,%20Kerala%20673001&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" frameBorder="0" allowFullScreen loading="lazy"></iframe>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="glass p-4 rounded-3xl border border-accent/30 shadow-[0_0_20px_rgba(242,156,31,0.15)]">
            <h3 className="text-lg font-bold mb-4 px-2 flex items-center gap-2">Coimbatore <span className="text-[10px] bg-accent text-navy px-2 py-0.5 rounded-full">NEW</span></h3>
            <div className="w-full h-64 bg-navy-dark rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 relative">
              <iframe src="https://maps.google.com/maps?q=Vidyanagar%203rd%20street,%20Civil%20Aerodrome%20Post,%20Kalapatti,%20Coimbatore,%20Tamil%20Nadu%20641014&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" frameBorder="0" allowFullScreen loading="lazy"></iframe>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
