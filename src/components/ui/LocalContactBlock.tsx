import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function LocalContactBlock({ contactInfo, cityName }: { contactInfo: any, cityName: string }) {
  if (!contactInfo) return null;

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 border-b border-white/10" id="contact">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Visit Us in {cityName}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Drop by for a coffee and a tour of our premium workspace. Our community managers are available to help you find the perfect setup.</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Contact Details Card */}
        <ScrollReveal direction="left">
          <div className="glass rounded-2xl p-8 border border-white/10 h-full flex flex-col justify-center bg-navy-dark text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-accent/20 transition-colors"></div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Registered Address</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Office Timings</h4>
                  <p className="text-white/70 text-sm">{contactInfo.timings}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <a href={`tel:${contactInfo.phone.replace(/\\s+/g, '')}`} className="text-white/70 text-sm hover:text-accent transition-colors">{contactInfo.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-white/70 text-sm hover:text-accent transition-colors">{contactInfo.email}</a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-2 text-white/40 text-xs font-mono relative z-10">
              <Navigation className="w-4 h-4" />
              GPS Coordinates: {contactInfo.coordinates.lat}, {contactInfo.coordinates.lng}
            </div>
          </div>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal direction="right">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl h-full min-h-[400px] relative bg-gray-100">
            <iframe 
              src={contactInfo.mapIframe} 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', inset: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`WeeSpaces ${cityName} Location Map`}
            ></iframe>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
