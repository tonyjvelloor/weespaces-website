import React from 'react';
import { Check } from 'lucide-react';

interface WorkspaceHighlightsProps {
  highlights: string[];
  className?: string;
  columns?: 1 | 2;
}

export function WorkspaceHighlights({ highlights, className = '', columns = 2 }: WorkspaceHighlightsProps) {
  const gridClasses = columns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1';

  return (
    <ul className={`grid gap-3 ${gridClasses} ${className}`}>
      {highlights.map((highlight, idx) => (
        <li key={idx} className="flex items-center gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-navy" strokeWidth={3} />
          </div>
          <span className="text-body text-navy/80 font-medium">{highlight}</span>
        </li>
      ))}
    </ul>
  );
}
