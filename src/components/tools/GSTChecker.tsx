'use client';

import { useState } from 'react';
import { useCustomerJourney } from '@/hooks/useCustomerJourney';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import Link from 'next/link';

export default function GSTChecker() {
  const { updateJourney, logEvent } = useCustomerJourney();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    addressStatus: '',
    directorKYC: '',
    city: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);

  const getChecklist = () => {
    const list = [
      'PAN Card of the Business / Proprietor',
      'Aadhaar Card of Primary Authorized Signatory',
      'Passport Size Photograph',
    ];

    if (formData.businessType === 'Private Limited (Pvt Ltd)' || formData.businessType === 'LLP') {
      list.push('Certificate of Incorporation (COI)');
      list.push('Board Resolution Authorizing Signatory');
    } else if (formData.businessType === 'Partnership') {
      list.push('Partnership Deed');
    }

    if (formData.addressStatus === 'Working from home / No commercial lease') {
      list.push('Virtual Office Rental Agreement (Provided by WeeSpaces)');
      list.push('No Objection Certificate (NOC) from WeeSpaces');
      list.push('Utility Bill of the Workspace (Provided by WeeSpaces)');
    } else {
      list.push('Commercial Rental Agreement');
      list.push('Utility Bill of current office');
    }

    return list;
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save to journey state
    updateJourney({ 
      gstCheckerCompleted: true,
      preferredCity: formData.city || undefined
    });
    
    // Log event
    await logEvent('gst_checker_completed', {
      business_type: formData.businessType,
      city: formData.city
    });

    // Send to Lead Router API
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          session_id: 'gst_checker',
          serviceInterest: 'Virtual Office (GST)',
          preferredCity: formData.city,
          industry: formData.businessType,
          source: 'GST Checker Tool'
        })
      });
      setStep(6); // Success screen
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h3 className="text-2xl font-bold text-navy mb-6">What type of business are you registering?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Proprietorship', 'Private Limited (Pvt Ltd)', 'LLP', 'Partnership', 'Foreign Branch'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => { setFormData({...formData, businessType: opt}); handleNext(); }}
                  className="p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-accent hover:bg-accent/5 transition-all font-bold text-navy"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-2xl font-bold text-navy mb-6">Do you currently have a commercial lease agreement?</h3>
            <div className="flex flex-col gap-4">
              {['Working from home / No commercial lease', 'Yes, I have a commercial office lease'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => { setFormData({...formData, addressStatus: opt}); handleNext(); }}
                  className="p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-accent hover:bg-accent/5 transition-all font-bold text-navy"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-2xl font-bold text-navy mb-6">Which city are you registering in?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Kochi', 'Coimbatore', 'Trivandrum', 'Calicut'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => { setFormData({...formData, city: opt}); handleNext(); }}
                  className="p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-accent hover:bg-accent/5 transition-all font-bold text-navy"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
             <div className="text-center mb-8">
               <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-4" />
               <h2 className="text-3xl font-black text-navy mb-2">You are eligible for GST Registration!</h2>
               <p className="text-gray-600">Based on your answers, here is your personalized document checklist.</p>
             </div>

             <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mb-8">
                <ul className="space-y-4">
                   {getChecklist().map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                        <span className="text-navy font-bold">{item}</span>
                     </li>
                   ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-200">
                   <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Estimated Processing Time</p>
                   <p className="text-xl font-black text-navy">3-7 Working Days</p>
                </div>
             </div>

             <button 
                onClick={handleNext}
                className="w-full bg-accent text-navy font-bold py-4 rounded-xl shadow-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2"
             >
                Email me this Checklist <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        );
      case 5:
         return (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
               <h3 className="text-2xl font-bold text-navy mb-2">Where should we send the checklist?</h3>
               <p className="text-gray-600 mb-6">Enter your details to receive the PDF checklist and a quote for the Virtual Office address.</p>
               <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <input required type="text" placeholder="Full Name" className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-accent" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <input required type="email" placeholder="Work Email" className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-accent" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-accent" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  
                  <button type="submit" disabled={isSubmitting} className="w-full bg-navy text-white font-bold py-4 rounded-xl shadow-lg hover:bg-navy/90 transition-all disabled:opacity-50 mt-4 flex items-center justify-center gap-2">
                     {isSubmitting ? 'Sending...' : 'Send Checklist & Quote'} <Mail className="w-5 h-5" />
                  </button>
               </form>
            </div>
         );
      case 6:
        return (
          <div className="text-center py-12 animate-in fade-in zoom-in-95">
             <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
             </div>
             <h2 className="text-3xl font-black text-navy mb-4">Checklist Sent!</h2>
             <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
                Check your inbox at <strong>{formData.email}</strong>. One of our compliance experts will call you shortly to help generate your NOC and Rental Agreement.
             </p>
             <Link href="/" className="inline-flex items-center gap-2 text-accent font-bold bg-navy px-6 py-3 rounded-full hover:bg-navy/90 transition-colors">
               Return Home <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden max-w-3xl mx-auto">
       <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
          {renderStep()}
       </div>
    </div>
  );
}
