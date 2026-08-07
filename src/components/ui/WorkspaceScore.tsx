import React from 'react';
import { Star } from 'lucide-react';

interface ScoreCategory {
  name: string;
  score: 1 | 2 | 3 | 4 | 5;
}

interface WorkspaceScoreProps {
  overallScore: number;
  categories: ScoreCategory[];
  className?: string;
  variant?: 'compact' | 'detailed';
}

export function WorkspaceScore({ overallScore, categories, className = '', variant = 'detailed' }: WorkspaceScoreProps) {
  const renderStars = (score: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`w-3.5 h-3.5 ${i < score ? 'fill-accent text-accent' : 'fill-gray-100 text-gray-200'}`} 
      />
    ));
  };

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1.5 bg-navy/5 text-navy px-2 py-1 rounded-[8px] font-bold text-sm ${className}`}>
        <Star className="w-4 h-4 fill-accent text-accent" />
        {overallScore.toFixed(1)}
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-[24px] p-6 border border-gray-100 shadow-soft ${className}`}>
      <div className="flex items-end gap-3 mb-6 pb-6 border-b border-gray-100">
        <div className="text-display leading-none text-navy">{overallScore.toFixed(1)}</div>
        <div className="text-sm font-bold text-navy/50 uppercase tracking-wider mb-2">Workspace<br/>Score</div>
      </div>
      
      <div className="space-y-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <span className="text-sm font-medium text-navy/80">{cat.name}</span>
            <div className="flex items-center gap-1">
              {renderStars(cat.score)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
