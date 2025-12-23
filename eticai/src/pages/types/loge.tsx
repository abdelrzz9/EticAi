export interface ClientLogEntry {
  clientId: string;
  type: 'Technical' | 'Billing' | 'Inquiry';
  specificTroubleshoot: string;
  callDuration: string;
  feedback: string;
}
