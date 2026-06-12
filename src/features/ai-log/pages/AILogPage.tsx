import { CHAT } from '../../../core/constants/app';
import { useAIChat } from '../hooks/useAIChat';
import { ChatMessageBubble } from '../components/ChatMessageBubble';
import { ChatInput } from '../components/ChatInput';
import { Sparkles } from 'lucide-react';

export function AILogPage() {
  const { messages, sendMessage, isLoading, scrollRef } = useAIChat();

  return (
    <div className="flex flex-col h-full">
      <div
        ref={scrollRef}
        className="flex-1 flex flex-col items-center px-4 py-6 overflow-y-auto"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center animate-[fadeIn_0.6s_ease-in]">
            <div className="mb-6 text-white animate-[sparkle_2s_ease-in-out_infinite]">
              <Sparkles size={48} />
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white">{CHAT.WELCOME_MESSAGE}</h2>
            <p className="text-sm md:text-base text-white/70 mt-3 max-w-md">
              {CHAT.WELCOME_SUBTITLE}
            </p>
          </div>
        ) : (
          <div className="w-full max-w-2xl flex flex-col gap-4 pb-6">
            {messages.map((msg) => (
              <ChatMessageBubble key={msg.id} message={msg} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 text-white/70 text-sm">
                  {CHAT.THINKING}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  );
}
