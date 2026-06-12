export const APP = {
  NAME: 'Doxa',
  DEFAULT_TITLE: 'ChatBot',
  USER: {
    NAME: 'Mohamed',
    ROLE: 'Admin',
    INITIALS: 'M',
  },
} as const;

export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  AI_LOG: '/ai-log',
  CLIENT_LOG: '/client-log',
  SETTINGS: '/settings',
} as const;

export const PAGINATION = {
  PAGE_SIZE: 10,
} as const;

export const AUTH = {
  CREDENTIALS: {
    EMAIL: 'admin@doxa.com',
    PASSWORD: 'admin123',
  },
} as const;

export const CHAT = {
  SIMULATION_DELAY: 1000,
  WELCOME_MESSAGE: 'Welcome Agent 007',
  WELCOME_SUBTITLE: 'start by describing the troubleshoot and let the chat take over!',
  EMPTY_MESSAGE: 'This is a simulated AI response. In a real implementation, this would connect to an AI service.',
  PLACEHOLDER: 'Ask AI assistant',
} as const;

export const CLIENT_LOG = {
  TYPES: ['Technical', 'Billing', 'Inquiry'] as const,
  FEEDBACK_OPTIONS: ['Highly Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'] as const,
} as const;
