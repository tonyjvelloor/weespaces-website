import React from 'react';

interface AnswerBlockProps {
  question: string;
  children: React.ReactNode;
}

export default function AnswerBlock({ question, children }: AnswerBlockProps) {
  return (
    <div className="bg-white/5 border-l-4 border-accent p-6 rounded-r-xl my-8 ai-answer-block" data-answer-engine="true">
      <h3 className="text-xl font-bold mb-2 !mt-0">{question}</h3>
      <div className="!mb-0 text-white/90">
        {children}
      </div>
    </div>
  );
}
