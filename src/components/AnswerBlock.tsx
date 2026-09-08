import React from 'react';

interface AnswerBlockProps {
  question: string;
  children: React.ReactNode;
}

export default function AnswerBlock({ question, children }: AnswerBlockProps) {
  return (
    <div className="bg-surface-container-high border-l-4 border-secondary p-space-lg rounded-r-xl my-space-lg ai-answer-block" data-answer-engine="true">
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-secondary text-sm">bolt</span>
        <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary font-bold">Quick Answer</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-sm !mt-0">{question}</h3>
      <div className="font-body-md text-body-md text-on-surface-variant !mb-0">
        {children}
      </div>
    </div>
  );
}
