import React from 'react';
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react';
import { Badge } from './Badge';

type AvailabilityStatus = 'available' | 'limited' | 'soon' | 'enterprise';

interface AvailabilityPanelProps {
  status: AvailabilityStatus;
  moveInDate: string;
  suitableFor: string;
  lastUpdated: string;
  className?: string;
}

export function AvailabilityPanel({
  status,
  moveInDate,
  suitableFor,
  lastUpdated,
  className = ''
}: AvailabilityPanelProps) {
  
  const statusConfig = {
    available: { label: 'Available Today', variant: 'available' as const },
    limited: { label: 'Limited Availability', variant: 'premium' as const },
    soon: { label: 'Opening Soon', variant: 'virtual' as const },
    enterprise: { label: 'Enterprise Enquiry', variant: 'enterprise' as const }
  };
  
  const config = statusConfig[status];

  return (
    <div className={`bg-navy/5 rounded-[24px] p-6 lg:p-8 ${className}`}>
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-navy/10">
        <div>
          <span className="text-sm font-bold tracking-wider text-navy/50 uppercase block mb-2">Current Status</span>
          <Badge variant={config.variant}>{config.label}</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2 text-navy/60">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Move-in Date</span>
          </div>
          <span className="text-body text-navy font-semibold">{moveInDate}</span>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2 text-navy/60">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Suitable For</span>
          </div>
          <span className="text-body text-navy font-semibold">{suitableFor}</span>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2 text-navy/60">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Last Updated</span>
          </div>
          <span className="text-body text-navy font-semibold">{lastUpdated}</span>
        </div>
      </div>
    </div>
  );
}
