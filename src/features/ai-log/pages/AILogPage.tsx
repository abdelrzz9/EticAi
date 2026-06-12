import { CHAT } from '../../../core/constants/app';
import { useAIChat } from '../hooks/useAIChat';
import { ChatMessageBubble } from '../components/ChatMessageBubble';
import { ChatInput } from '../components/ChatInput';

export function AILogPage() {
  const { messages, sendMessage, isLoading } = useAIChat();

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center text-center animate-[fadeIn_0.6s_ease-in]">
            <div className="mb-6 text-white animate-[sparkle_2s_ease-in-out_infinite]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white">{CHAT.WELCOME_MESSAGE}</h2>
            <p className="text-base text-white/70 mt-3">{CHAT.WELCOME_SUBTITLE}</p>
          </div>
        ) : (
          <div className="w-full max-w-2xl flex flex-col gap-4 pb-6">
            {messages.map((msg) => (
              <ChatMessageBubble key={msg.id} message={msg} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 text-white/70 text-sm">
                  Thinking...
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
