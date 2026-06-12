import { useState } from 'react';
import { CHAT } from '../../../core/constants/app';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="px-4 md:px-10 pb-6 md:pb-8 flex justify-center">
      <div className="w-full max-w-2xl relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-1 transition-all duration-300 focus-within:border-blue-400/50 focus-within:shadow-lg focus-within:shadow-blue-500/20">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={CHAT.PLACEHOLDER}
          disabled={isLoading}
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 text-base py-3"
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="w-11 h-11 rounded-full bg-blue-500/40 flex items-center justify-center text-white cursor-pointer transition-all duration-300 flex-shrink-0 hover:bg-blue-500/60 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 2L11 13M22 2L15 22L11 13M22 2L2 8L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
