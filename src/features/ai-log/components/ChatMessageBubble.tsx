import type { ChatMessage } from '../../../core/types/ai-log';

interface ChatMessageProps {
  message: ChatMessage;
}

export function ChatMessageBubble({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user';

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-[slideIn_0.3s_ease-out]`}
    >
      <div
        className={`max-w-[85%] md:max-w-[70%] px-4 py-3 rounded-2xl leading-relaxed text-white ${
          isUser
            ? 'bg-blue-500/40 rounded-br-sm'
            : 'bg-white/10 rounded-bl-sm'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
