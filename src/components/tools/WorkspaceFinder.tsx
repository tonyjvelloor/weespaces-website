'use client';

import { useState } from 'react';
import { useCustomerJourney } from '@/hooks/useCustomerJourney';
import { ArrowRight, ArrowLeft, CheckCircle, Briefcase, Building2, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

export default function WorkspaceFinder() {
  const { updateJourney, logEvent } = useCustomerJourney();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    teamSize: '',
    preferredCity: '',
    needGST: '',
    needMeetingRooms: '',
    expectedGrowth: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recommendation, setRecommendation] = useState<{service: string, reason: string} | null>(null);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const calculateRecommendation = () => {
    let service = 'Private Office';
    let reason = 'Based on your team size and requirements, a Private Office offers the best mix of privacy, security, and dedicated infrastructure.';

    if (formData.teamSize === '1-4') {
      if (formData.needGST === 'Yes') {
        service = 'Virtual Office';
        reason = `Since your team is very small but you need GST registration in ${formData.preferredCity}, a Virtual Office is the most cost-effective legal address solution.`;
      } else {
        service = 'Dedicated Desk Coworking';
        reason = `For a team of ${formData.teamSize}, dedicated coworking desks provide maximum flexibility without overhead costs.`;
      }
    } else if (formData.teamSize === '50+') {
      service = 'Custom Enterprise Office';
      reason = `With a team of 50+, our Enterprise Managed Office solution will allow you to customize your floor plan, IT infrastructure, and branding while avoiding capital expenditure.`;
    } else if (formData.expectedGrowth === 'Fast') {
      service = 'Managed Office';
      reason = `Since you expect rapid growth, a Managed Office will allow you to scale up seat counts instantly without moving facilities.`;
    }

    setRecommendation({ service, reason });
  };

  const handleRecommendationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save to journey state
    updateJourney({ 
      finderCompleted: true, 
      preferredCity: formData.preferredCity,
      serviceInterest: recommendation?.service
    });
    
    // Log event
    await logEvent('finder_completed', {
      city: formData.preferredCity,
      service: recommendation?.service,
      team_size: formData.teamSize
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
          session_id: 'finder', // ideally pulled from useCustomerJourney
          teamSize: parseInt(formData.teamSize) || 1,
          budget: formData.budget,
          timeline: formData.timeline,
          preferredCity: formData.preferredCity,
          serviceInterest: recommendation?.service,
          source: 'Workspace Finder Quiz'
        })
      });
      setStep(10); // Success screen
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold text-navy mb-6">What best describes your business?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Startup / Early Stage', 'SME / Established Business', 'Freelancer / Independent', 'Enterprise / GCC'].map(opt => (
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
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold text-navy mb-6">What is your current team size?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {['1-4', '5-15', '16-49', '50+'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => { setFormData({...formData, teamSize: opt}); handleNext(); }}
                  className="p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-accent hover:bg-accent/5 transition-all font-bold text-navy"
                >
                  {opt} Members
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold text-navy mb-6">Which city are you expanding in?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Kochi', 'Coimbatore', 'Trivandrum', 'Calicut'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => { setFormData({...formData, preferredCity: opt}); handleNext(); }}
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
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold text-navy mb-6">Do you need a GST or Company Registration address?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Yes', 'No'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => { setFormData({...formData, needGST: opt}); handleNext(); }}
                  className="p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-accent hover:bg-accent/5 transition-all font-bold text-navy"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold text-navy mb-6">How often do you need professional meeting rooms?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Daily', 'Weekly', 'Occasionally (Monthly)', 'Rarely'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => { setFormData({...formData, needMeetingRooms: opt}); handleNext(); }}
                  className="p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-accent hover:bg-accent/5 transition-all font-bold text-navy"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold text-navy mb-6">What is your expected team growth over the next 12 months?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Stable (No major changes)', 'Moderate (Adding a few roles)', 'Fast (Doubling in size)', 'Unsure'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => { setFormData({...formData, expectedGrowth: opt}); handleNext(); }}
                  className="p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-accent hover:bg-accent/5 transition-all font-bold text-navy"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl font-bold text-navy mb-6">What is your target move-in timeline?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {['ASAP', '< 1 Month', '1-3 Months', 'Just researching'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => { setFormData({...formData, timeline: opt}); calculateRecommendation(); handleNext(); }}
                  className="p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-accent hover:bg-accent/5 transition-all font-bold text-navy"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 text-center">
            <h2 className="text-3xl font-black text-navy mb-2">Analyzing your needs...</h2>
            <p className="text-gray-600 mb-8">We are identifying the perfect workspace solution in {formData.preferredCity}.</p>
            
            <div className="max-w-xl mx-auto bg-navy text-white rounded-3xl p-8 shadow-2xl border border-white/10 text-left relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[40px]"></div>
               <div className="relative z-10">
                  <div className="text-accent text-sm font-bold uppercase tracking-wider mb-2">Recommended Solution</div>
                  <h3 className="text-4xl font-black mb-4">{recommendation?.service}</h3>
                  <div className="bg-white/10 border border-white/10 rounded-xl p-4 mb-6">
                     <p className="text-white/80 leading-relaxed font-medium">"{recommendation?.reason}"</p>
                  </div>
                  
                  <h4 className="font-bold text-lg mb-4">Complete your profile to see availability and pricing:</h4>
                  <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-4">
                     <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:border-accent" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                     <div className="grid grid-cols-2 gap-4">
                       <input required type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:border-accent" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                       <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:border-accent" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                     </div>
                     <button type="button" onClick={handleRecommendationSubmit} disabled={isSubmitting || !formData.name || !formData.email || !formData.phone} className="w-full bg-accent text-navy font-bold py-4 rounded-xl shadow-lg hover:bg-accent-hover transition-all disabled:opacity-50 mt-4 flex items-center justify-center gap-2">
                        {isSubmitting ? 'Processing...' : 'Get Pricing & Availability'} <ArrowRight className="w-5 h-5" />
                     </button>
                  </form>
               </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="text-center py-12 animate-in fade-in zoom-in-95">
             <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
             </div>
             <h2 className="text-3xl font-black text-navy mb-4">Request Received!</h2>
             <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
                Thank you, {formData.name}. Our workspace advisor specializing in <strong>{recommendation?.service}s</strong> in {formData.preferredCity} will contact you shortly with availability and pricing options.
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
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden">
       {/* Progress Bar */}
       {step < 8 && (
          <div className="bg-gray-50 border-b border-gray-100 p-4 flex items-center gap-4">
             {step > 1 && (
               <button onClick={handleBack} className="text-gray-400 hover:text-navy transition-colors">
                  <ArrowLeft className="w-5 h-5" />
               </button>
             )}
             <div className="flex-grow">
               <div className="h-2 bg-gray-200 rounded-full w-full overflow-hidden">
                 <div className="h-full bg-accent transition-all duration-500 ease-out" style={{ width: `${(step / 7) * 100}%` }}></div>
               </div>
             </div>
             <span className="text-sm font-bold text-gray-400">Step {step} of 7</span>
          </div>
       )}
       
       <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
          {renderStepContent()}
       </div>
    </div>
  );
}
