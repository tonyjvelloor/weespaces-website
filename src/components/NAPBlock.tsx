"use client";

import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

interface NAPBlockProps {
  name: string;
  address: string;
  phone?: string;
  mapUrl: string;
  hours?: string;
}

export default function NAPBlock({
  name,
  address,
  phone = '+91 92071 89111',
  mapUrl,
  hours = 'Mon–Sat: 8:00 AM – 8:00 PM',
}: NAPBlockProps) {
  const fireEvent = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'location_view', { event_category: 'engagement', event_label: name });
    }
  };

  return (
    <div
      className="bg-navy-light/20 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Hidden schema fields */}
      <meta itemProp="name" content={name} />
      <meta itemProp="telephone" content={phone} />
      <meta itemProp="address" content={address} />

      {/* Icon column */}
      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
        <MapPin className="w-6 h-6 text-accent" />
      </div>

      {/* Info */}
      <div className="flex-1 space-y-3">
        <h3 className="text-lg font-bold text-white" itemProp="name">{name}</h3>

        {/* Address */}
        <div className="flex items-start gap-3 text-white/70 text-sm">
          <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          <address
            className="not-italic leading-relaxed"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            {address}
          </address>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 text-white/70 text-sm">
          <Phone className="w-4 h-4 text-accent shrink-0" />
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="hover:text-accent transition-colors font-medium"
            itemProp="telephone"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_call', { event_category: 'engagement', event_label: name });
              }
            }}
          >
            {phone}
          </a>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-3 text-white/70 text-sm">
          <Clock className="w-4 h-4 text-accent shrink-0" />
          <span itemProp="openingHours" content={hours}>{hours}</span>
        </div>
      </div>

      {/* Directions CTA */}
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={fireEvent}
        className="flex-shrink-0 flex items-center gap-2 bg-transparent border border-accent text-accent hover:bg-accent hover:text-navy font-bold py-3 px-6 rounded-xl transition-all text-sm whitespace-nowrap"
      >
        <Navigation className="w-4 h-4" />
        Get Directions
      </a>
    </div>
  );
}
