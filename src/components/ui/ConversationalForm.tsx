"use client";

import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowRight, MessageSquare, Search, MapPin, Building2, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function ConversationalForm() {
  const [activeTab, setActiveTab] = useState<'finder' | 'expert'>('finder');
  const [step, setStep] = useState(1);

  // Quick Finder state
  const [location, setLocation] = useState('');
  const [workspaceType, setWorkspaceType] = useState('');
  const [teamSize, setTeamSize] = useState('');

  const locations = ['Kochi', 'Trivandrum', 'Calicut', 'Coimbatore'];
  const types = ['Coworking Space', 'Private Office', 'Managed Office', 'Virtual Office'];
  const sizes = ['1-4 people', '5-10 people', '11-20 people', '21+ people'];

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden w-full max-w-lg mx-auto">
      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        <button
          onClick={() => { setActiveTab('finder'); setStep(1); }}
          className={`flex-1 py-4 px-6 text-[13px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
            activeTab === 'finder' 
              ? 'text-navy border-b-2 border-navy bg-white' 
              : 'text-navy/40 hover:text-navy/70 hover:bg-gray-50/50 bg-gray-50/30'
          }`}
        >
          <Search className="w-4 h-4" /> Quick Finder
        </button>
        <button
          onClick={() => setActiveTab('expert')}
          className={`flex-1 py-4 px-6 text-[13px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
            activeTab === 'expert' 
              ? 'text-navy border-b-2 border-navy bg-white' 
              : 'text-navy/40 hover:text-navy/70 hover:bg-gray-50/50 bg-gray-50/30'
          }`}
        >
          <MessageSquare className="w-4 h-4" /> Talk to Expert
        </button>
      </div>

      {/* Content */}
      <div className="p-8 min-h-[420px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {activeTab === 'finder' ? (
            <motion.div
              key="finder"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2 tracking-tight">Find your perfect space.</h3>
                <p className="text-navy/60 text-[15px]">Tell us what you need, and we'll match you with the best options.</p>
              </div>

              {step === 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <label className="text-[15px] font-bold text-navy/90 flex items-center gap-2 justify-center mb-6">
                    <MapPin className="w-5 h-5 text-accent" /> Where do you want to work?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {locations.map(loc => (
                      <button
                        key={loc}
                        onClick={() => { setLocation(loc); setStep(2); }}
                        className={`p-4 text-[15px] font-semibold border rounded-xl transition-all text-center hover:-translate-y-0.5 ${
                          location === loc 
                            ? 'border-navy bg-navy text-white shadow-md' 
                            : 'border-gray-200 text-navy hover:border-navy/30 hover:bg-gray-50 hover:shadow-sm'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <label className="text-[15px] font-bold text-navy/90 flex items-center gap-2 justify-center mb-6">
                    <Building2 className="w-5 h-5 text-accent" /> What type of space?
                  </label>
                  <div className="flex flex-col gap-3">
                    {types.map(type => (
                      <button
                        key={type}
                        onClick={() => { setWorkspaceType(type); setStep(3); }}
                        className={`p-4 text-[15px] font-semibold border rounded-xl transition-all text-left flex justify-between items-center hover:-translate-x-1 ${
                          workspaceType === type 
                            ? 'border-navy bg-navy/5 text-navy shadow-sm' 
                            : 'border-gray-200 text-navy/80 hover:border-navy/30 hover:bg-gray-50'
                        }`}
                      >
                        {type}
                        <ArrowRight className={`w-4 h-4 ${workspaceType === type ? 'opacity-100 text-accent' : 'opacity-40'}`} />
                      </button>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <button onClick={() => setStep(1)} className="text-[13px] font-medium text-navy/50 hover:text-navy underline decoration-navy/20 underline-offset-4 transition-colors">Back</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <label className="text-[15px] font-bold text-navy/90 flex items-center gap-2 justify-center mb-6">
                    <Users className="w-5 h-5 text-accent" /> For how many people?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setTeamSize(size)}
                        className={`p-4 text-[15px] font-semibold border rounded-xl transition-all text-center hover:-translate-y-0.5 ${
                          teamSize === size 
                            ? 'border-navy bg-navy/5 text-navy shadow-sm ring-1 ring-navy' 
                            : 'border-gray-200 text-navy/80 hover:border-navy/30 hover:bg-gray-50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  
                  <div className="pt-8 mt-2 flex flex-col items-center gap-4">
                    <Button 
                      variant="primary" 
                      href={teamSize ? `/locations?city=${location.toLowerCase()}&type=${workspaceType.toLowerCase().replace(' ', '-')}` : undefined}
                      className="w-full justify-center py-4 text-[16px]"
                    >
                      Show Matches
                    </Button>
                    <button onClick={() => setStep(2)} className="text-[13px] font-medium text-navy/50 hover:text-navy underline decoration-navy/20 underline-offset-4 transition-colors">Back</button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="expert"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2 tracking-tight">Let's talk workspaces.</h3>
                <p className="text-navy/60 text-[15px]">Need a custom solution or enterprise deal? Our experts respond within 30 minutes.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Full Name" aria-label="Full Name" className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl text-[15px] font-medium focus:outline-none focus:border-navy focus:bg-white focus:ring-1 focus:ring-navy transition-all text-navy placeholder:text-navy/30" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input type="email" placeholder="Work Email" aria-label="Work Email" className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl text-[15px] font-medium focus:outline-none focus:border-navy focus:bg-white focus:ring-1 focus:ring-navy transition-all text-navy placeholder:text-navy/30" />
                  <input type="tel" placeholder="Phone Number" aria-label="Phone Number" className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl text-[15px] font-medium focus:outline-none focus:border-navy focus:bg-white focus:ring-1 focus:ring-navy transition-all text-navy placeholder:text-navy/30" />
                </div>
                <div>
                  <textarea placeholder="Tell us about your requirement..." aria-label="Tell us about your requirement" rows={3} className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl text-[15px] font-medium focus:outline-none focus:border-navy focus:bg-white focus:ring-1 focus:ring-navy transition-all text-navy placeholder:text-navy/30 resize-none"></textarea>
                </div>
                <Button variant="primary" className="w-full justify-center py-4 mt-2 text-[16px]">
                  Request Callback
                </Button>
                <p className="text-center text-[13px] font-medium text-navy/50 mt-4 flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Our experts are online
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
