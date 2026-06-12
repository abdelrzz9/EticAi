import type { CLIENT_LOG } from '../constants/app';

export type LogType = (typeof CLIENT_LOG.TYPES)[number];
export type FeedbackType = (typeof CLIENT_LOG.FEEDBACK_OPTIONS)[number];

export interface ClientLogEntry {
  clientId: string;
  type: LogType;
  specificTroubleshoot: string;
  callDuration: string;
  feedback: string;
  timestamp?: string;
}

export interface ClientFormData {
  clientId: string;
  type: LogType;
  specificTroubleshoot: string;
  callDuration: string;
  feedback: string;
}
