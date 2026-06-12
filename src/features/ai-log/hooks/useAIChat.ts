import { useState, useCallback } from 'react';
import type { ChatMessage } from '../../../core/types/ai-log';
import { env } from '../../../core/config/env';
import { CHAT } from '../../../core/constants/app';

let messageId = 0;

export function useAIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback((text: string) => {
    const userMsg: ChatMessage = {
      id: `msg-${++messageId}`,
      text,
      sender: 'user',
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: `msg-${++messageId}`,
        text: CHAT.EMPTY_MESSAGE,
        sender: 'ai',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsLoading(false);
    }, env.CHAT_SIMULATION_DELAY);
  }, []);

  return { messages, sendMessage, isLoading };
}
