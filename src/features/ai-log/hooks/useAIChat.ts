import { useState, useCallback, useRef, useEffect } from 'react';
import type { ChatMessage } from '../../../core/types/ai-log';
import { env } from '../../../core/config/env';

let messageId = 0;

const AI_RESPONSES = [
  'I understand you\'re experiencing an issue. Let me help you troubleshoot that step by step.',
  'Thank you for the details. Based on what you\'ve described, this appears to be a common configuration issue.',
  'I\'ve analyzed the problem. Here\'s a recommended solution: first, try clearing the cache and restarting the service.',
  'That\'s a great question! Let me look into the system logs to find more information about this issue.',
  'I\'ve escalated this to our senior support team. They will get back to you within 24 hours.',
  'Here are the steps to resolve this: 1) Restart the application 2) Clear temporary files 3) Update to the latest version.',
  'The issue you\'re describing could be related to network connectivity. Can you check your connection status?',
  'I\'ve documented this case and generated a report. You can access it from the dashboard.',
];

export function useAIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

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
      const randomResponse = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];
      const aiMsg: ChatMessage = {
        id: `msg-${++messageId}`,
        text: randomResponse,
        sender: 'ai',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsLoading(false);
    }, env.CHAT_SIMULATION_DELAY);
  }, []);

  return { messages, sendMessage, isLoading, scrollRef };
}
