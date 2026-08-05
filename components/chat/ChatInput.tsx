"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { Send, CornerDownLeft } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input);
      setInput("");
      // Reset height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative flex items-end gap-2 bg-slate-900 rounded-xl border border-white/10 focus-within:border-violet-500/50 focus-within:ring-1 focus-within:ring-violet-500/50 transition-all duration-200">
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          // Auto-resize
          e.target.style.height = "auto";
          e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
        }}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything about my portfolio..."
        disabled={disabled}
        className="flex-1 max-h-[120px] bg-transparent text-sm text-white placeholder:text-slate-500 resize-none py-3 px-4 focus:outline-none scrollbar-thin"
        rows={1}
      />
      <div className="p-2 shrink-0 flex flex-col justify-end">
        <button
          onClick={handleSend}
          disabled={!input.trim() || disabled}
          className="p-1.5 rounded-lg bg-violet-600 text-white disabled:opacity-50 disabled:bg-slate-700 transition-colors hover:bg-violet-500 group"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      
      {/* Desktop hint */}
      <div className="hidden sm:flex absolute right-14 bottom-3 items-center gap-1 text-[10px] text-slate-500 select-none pointer-events-none">
        <span>Press</span>
        <kbd className="px-1 py-0.5 rounded bg-white/10 border border-white/5 font-sans flex items-center">
          <CornerDownLeft className="w-2.5 h-2.5" />
        </kbd>
        <span>to send</span>
      </div>
    </div>
  );
}
