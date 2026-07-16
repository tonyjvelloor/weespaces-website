"use client";

import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, Building2 } from 'lucide-react';
import { track, EventNames, TrackingStorage } from '@/lib/tracking';
import { buildWhatsAppMessage, PageContext } from '@/utils/whatsappIntent';

interface WhatsAppGateProps {
  isOpen: boolean;
  onClose: () => void;
  context: PageContext;
  pageUrl: string;
}

export default function WhatsAppGate({ isOpen, onClose, context, pageUrl }: WhatsAppGateProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: context.city || 'Kochi',
    service: context.service || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      track.cta(EventNames.WHATSAPP_GATE_VIEW, window.location.href, { context });
    } else {
      setHasStarted(false);
      setError('');
    }
  }, [isOpen, context]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (!hasStarted) {
      setHasStarted(true);
      track.cta(EventNames.WHATSAPP_GATE_START, window.location.href, { context });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const redirectToWhatsApp = (useData: boolean = true) => {
    // Save to session storage so we don't ask again this session
    try {
      sessionStorage.setItem('weespaces_whatsapp_gated', 'true');
    } catch {}

    const message = buildWhatsAppMessage({
      name: useData ? formData.name : undefined,
      service: useData ? formData.service : context.service,
      city: useData ? formData.city : context.city,
      timeline: 'Immediate',
      pageUrl
    });

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/919207189111?text=${encodedMessage}`;
    
    track.cta(EventNames.WHATSAPP_REDIRECT, waUrl, { context, skipped: !useData });
    window.open(waUrl, '_blank');
    onClose();
  };

  const handleSkip = () => {
    track.cta(EventNames.WHATSAPP_GATE_SKIP, window.location.href, { context });
    redirectToWhatsApp(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    
    if (!phoneRegex.test(cleanPhone)) {
      setError('Please enter a valid 10-digit mobile number.');
      setIsSubmitting(false);
      return;
    }

    try {
      const source = `WhatsApp Gate - ${formData.service || context.service || 'Unknown'} - URL: ${pageUrl}`;
      const phoneRaw = formData.phone;
      const phone = phoneRaw ? '+91' + phoneRaw : undefined;

      // Add full tracking attribution payload
      const attribution = track.getAttributionPayload ? track.getAttributionPayload({}) : {};

      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: formData.name, 
          phone, 
          source, 
          location: formData.city,
          requirement: formData.service || context.service || 'WhatsApp Inquiry',
          pageUrl,
          attribution
        })
      });

      track.cta(EventNames.WHATSAPP_GATE_SUBMIT, window.location.href, { context });
      
      // Redirect to WA on success
      redirectToWhatsApp(true);

    } catch (err) {
      console.error(err);
      // Even if API fails, we still let them chat to not block them
      redirectToWhatsApp(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl w-full max-w-md relative z-10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-[#25D366] p-6 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <MessageCircle className="w-8 h-8 text-[#25D366]" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Need Faster Support?</h2>
          <p className="text-white/90 text-sm">We'll connect you directly to the right workspace specialist for your needs.</p>
        </div>

        {/* Body */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Service Selection (Optional based on intent) */}
            {!context.service && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">What do you need?</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#25D366]/20 focus:border-[#25D366] transition-all outline-none text-navy"
                >
                  <option value="" disabled>Select Workspace Type</option>
                  <option value="Virtual Office">Virtual Office</option>
                  <option value="Coworking">Coworking Space</option>
                  <option value="Private Office">Private Office</option>
                  <option value="Meeting Room">Meeting Room</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#25D366]/20 focus:border-[#25D366] transition-all outline-none text-navy"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+91</span>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="10-digit mobile number"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#25D366]/20 focus:border-[#25D366] transition-all outline-none text-navy"
                />
              </div>
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>

            {/* City (Hide if already known) */}
            {!context.city && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
                <select 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#25D366]/20 focus:border-[#25D366] transition-all outline-none text-navy"
                >
                  <option value="Kochi">Kochi</option>
                  <option value="Trivandrum">Trivandrum</option>
                  <option value="Calicut">Calicut</option>
                  <option value="Coimbatore">Coimbatore</option>
                </select>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2 shadow-lg shadow-[#25D366]/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Continue to WhatsApp <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Soft Gate: Skip Option */}
          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <button 
              onClick={handleSkip}
              className="text-gray-500 hover:text-gray-800 text-sm font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-gray-400 transition-colors"
            >
              Skip & Open WhatsApp directly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
