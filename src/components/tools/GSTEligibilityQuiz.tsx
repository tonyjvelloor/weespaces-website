'use client';

import React, { useState } from 'react';
import { CheckCircle, ArrowRight, FileText, CheckSquare, Building, FileCheck } from 'lucide-react';

type Step = 'business-type' | 'location' | 'inventory' | 'result';

export default function GSTEligibilityQuiz() {
  const [currentStep, setCurrentStep] = useState<Step>('business-type');
  
  // State for selections
  const [businessType, setBusinessType] = useState('');
  const [location, setLocation] = useState('');
  const [holdsInventory, setHoldsInventory] = useState(false);

  const handleBusinessType = (type: string) => {
    setBusinessType(type);
    setCurrentStep('location');
  };

  const handleLocation = (loc: string) => {
    setLocation(loc);
    setCurrentStep('inventory');
  };

  const handleInventory = (holds: boolean) => {
    setHoldsInventory(holds);
    setCurrentStep('result');
  };

  const getChecklist = () => {
    const list = [
      'Company PAN Card',
      'Authorized Signatory Aadhaar Card & PAN',
      'Bank Statement / Cancelled Cheque'
    ];

    if (businessType === 'Private Limited Company' || businessType === 'LLP' || businessType === 'OPC') {
      list.push('Certificate of Incorporation (COI)');
      list.push('Board Resolution appointing Authorized Signatory');
    } else if (businessType === 'Partnership') {
      list.push('Partnership Deed');
    }

    if (holdsInventory) {
      list.push('Details of Godown / Warehouse (if applicable)');
    }

    // Virtual office mandatory docs
    list.push('No Objection Certificate (NOC) from Workspace Provider');
    list.push('Notarized Rental Agreement');
    list.push('Latest Electricity Bill of the Premises');

    return list;
  };

  const resetQuiz = () => {
    setCurrentStep('business-type');
    setBusinessType('');
    setLocation('');
    setHoldsInventory(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden max-w-3xl mx-auto my-12">
      <div className="bg-navy p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <FileCheck className="w-6 h-6 text-accent" />
          GST Registration Checklist Generator
        </h3>
        <p className="text-white/80 text-sm">Answer 3 quick questions to get your personalized document checklist.</p>
      </div>

      <div className="p-8">
        {/* Step Indicators */}
        {currentStep !== 'result' && (
          <div className="flex justify-between mb-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -z-10 -translate-y-1/2"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep === 'business-type' ? 'bg-accent text-navy' : 'bg-gray-200 text-gray-500'}`}>1</div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep === 'location' ? 'bg-accent text-navy' : 'bg-gray-200 text-gray-500'}`}>2</div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep === 'inventory' ? 'bg-accent text-navy' : 'bg-gray-200 text-gray-500'}`}>3</div>
          </div>
        )}

        {currentStep === 'business-type' && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <h4 className="text-xl font-bold text-navy mb-6 text-center">What is your entity type?</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Proprietorship', 'Partnership', 'LLP', 'Private Limited Company', 'OPC'].map((type) => (
                <button
                  key={type}
                  onClick={() => handleBusinessType(type)}
                  className="p-4 rounded-xl border-2 border-gray-100 hover:border-accent hover:bg-accent/5 font-bold text-gray-700 transition-all text-left flex items-center justify-between group"
                >
                  {type}
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 'location' && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <h4 className="text-xl font-bold text-navy mb-6 text-center">Which state are you registering in?</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Kerala', 'Tamil Nadu', 'Karnataka', 'Other'].map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocation(loc)}
                  className="p-4 rounded-xl border-2 border-gray-100 hover:border-accent hover:bg-accent/5 font-bold text-gray-700 transition-all text-left flex items-center justify-between group"
                >
                  {loc}
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors" />
                </button>
              ))}
            </div>
            <button onClick={() => setCurrentStep('business-type')} className="mt-6 text-sm text-gray-500 hover:text-navy underline block text-center w-full">Back</button>
          </div>
        )}

        {currentStep === 'inventory' && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <h4 className="text-xl font-bold text-navy mb-6 text-center">Do you hold physical inventory (e.g., E-commerce seller)?</h4>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <button
                onClick={() => handleInventory(true)}
                className="p-4 rounded-xl border-2 border-gray-100 hover:border-accent hover:bg-accent/5 font-bold text-gray-700 transition-all text-center"
              >
                Yes, I sell physical goods
              </button>
              <button
                onClick={() => handleInventory(false)}
                className="p-4 rounded-xl border-2 border-gray-100 hover:border-accent hover:bg-accent/5 font-bold text-gray-700 transition-all text-center"
              >
                No, I provide services only
              </button>
            </div>
            <button onClick={() => setCurrentStep('location')} className="mt-6 text-sm text-gray-500 hover:text-navy underline block text-center w-full">Back</button>
          </div>
        )}

        {currentStep === 'result' && (
          <div className="animate-in fade-in zoom-in-95">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <CheckSquare className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-navy">Your Checklist is Ready</h4>
              <p className="text-gray-600 mt-2">
                For a <strong>{businessType}</strong> in <strong>{location}</strong> {holdsInventory ? '(with inventory)' : '(services only)'}.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
              <ul className="space-y-4">
                {getChecklist().map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${item.includes('Provided by us') || item.includes('NOC') || item.includes('Rental') || item.includes('Electricity Bill') ? 'text-accent' : 'text-gray-400'}`} />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/10 border border-accent rounded-xl p-6 text-center">
              <h5 className="font-bold text-navy text-lg mb-2">Missing the NOC & Rental Agreement?</h5>
              <p className="text-gray-700 mb-6 text-sm">WeeSpaces provides 100% compliant documentation within 24 hours.</p>
              <a href="#book-tour" className="inline-block bg-accent text-navy font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg">
                Get Your Virtual Office Address Now
              </a>
            </div>

            <button onClick={resetQuiz} className="mt-6 text-sm text-gray-500 hover:text-navy underline block text-center w-full">Start Over</button>
          </div>
        )}
      </div>
    </div>
  );
}
