import { useState, useCallback } from 'react';
import type { ClientLogEntry } from '../../../core/types/client-log';

const initialLogs: ClientLogEntry[] = [
  { clientId: 'ID-9921', type: 'Technical', specificTroubleshoot: 'AI Model latency in chat interface', callDuration: '08:45', feedback: 'Highly Satisfied' },
  { clientId: 'ID-4432', type: 'Billing', specificTroubleshoot: 'Subscription plan upgrade issue', callDuration: '04:12', feedback: 'Neutral' },
  { clientId: 'ID-4432', type: 'Billing', specificTroubleshoot: 'Subscription plan upgrade issue', callDuration: '04:12', feedback: 'Neutral' },
  { clientId: 'ID-9921', type: 'Technical', specificTroubleshoot: 'AI Model latency in chat interface', callDuration: '08:45', feedback: 'Highly Satisfied' },
  { clientId: 'ID-4432', type: 'Billing', specificTroubleshoot: 'Subscription plan upgrade issue', callDuration: '04:12', feedback: 'Neutral' },
  { clientId: 'ID-4432', type: 'Billing', specificTroubleshoot: 'Subscription plan upgrade issue', callDuration: '04:12', feedback: 'Neutral' },
];

export function useClientLogs() {
  const [logs, setLogs] = useState<ClientLogEntry[]>(initialLogs);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addLog = useCallback((entry: Omit<ClientLogEntry, 'timestamp'>) => {
    setLogs((prev) => [
      ...prev,
      { ...entry, timestamp: new Date().toISOString() },
    ]);
  }, []);

  return { logs, addLog, isFormOpen, setIsFormOpen };
}
