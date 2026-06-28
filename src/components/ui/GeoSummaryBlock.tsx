import React from 'react';

type GeoSummaryBlockProps = {
  summary: string;
};

export default function GeoSummaryBlock({ summary }: GeoSummaryBlockProps) {
  if (!summary) return null;

  return (
    <div className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Location Context</h3>
          <p className="text-gray-600 leading-relaxed font-medium">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
