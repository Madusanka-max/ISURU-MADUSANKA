"use client";

import { useEffect, useRef } from "react";
import { X, Sparkles, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useChat } from "@/hooks/useChat";
import ChatMessageItem from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import LoadingIndicator from "./LoadingIndicator";

interface ChatWindowProps {
  onClose: () => void;
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const { messages, isLoading, error, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[400px] h-[600px] max-h-[calc(100vh-8rem)] z-50 glass-card rounded-2xl flex flex-col overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-900/20"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600/90 to-blue-600/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">PortfolioAI Assistant</h3>
            <p className="text-white/70 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Online
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin bg-slate-950/80">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
              <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center mb-4 border border-violet-500/20 glow-purple">
                <span className="text-2xl">👋</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Hi there!</h4>
              <p className="text-slate-400 text-sm mb-6 max-w-[250px]">
                I&apos;m Isuru&apos;s AI assistant. Ask me anything about his projects, skills, or experience!
              </p>
            </div>
            <SuggestedQuestions onSelect={sendMessage} />
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <ChatMessageItem key={msg.id} message={msg} />
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-2 max-w-[85%]">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <div className="bg-slate-800/80 rounded-2xl rounded-tl-sm px-4 py-3 border border-white/5">
                  <LoadingIndicator />
                </div>
              </div>
            )}
            
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-slate-950/90 border-t border-white/10 shrink-0">
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </motion.div>
  );
}
