"use client";

const SUGGESTED_QUESTIONS = [
  "Tell me about yourself.",
  "Show your projects.",
  "What technologies do you know?",
  "Explain your internship.",
  "Download resume.",
  "Contact information."
];

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

export default function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="mt-auto pt-6 w-full">
      <div className="flex flex-wrap justify-center gap-2">
        {SUGGESTED_QUESTIONS.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/30 transition-colors text-left"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
