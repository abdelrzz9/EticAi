export const APP = {
  NAME: 'Doxa',
  DEFAULT_TITLE: 'ChatBot',
  SEARCH_PLACEHOLDER: 'Search...',
  USER: {
    NAME: 'Mohamed',
    ROLE: 'Admin',
    INITIALS: 'M',
  },
  SIDEBAR_WIDTH: 210,
  HEADER_HEIGHT: 70,
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
  STORAGE_KEY: 'user',
  LOGIN_DELAY: 500,
} as const;

export const CHAT = {
  SIMULATION_DELAY: 1000,
  WELCOME_MESSAGE: 'Welcome Agent 007',
  WELCOME_SUBTITLE: 'start by describing the troubleshoot and let the chat take over!',
  EMPTY_MESSAGE: 'This is a simulated AI response. In a real implementation, this would connect to an AI service.',
  PLACEHOLDER: 'Ask AI assistant',
  THINKING: 'Thinking...',
} as const;

export const LOGIN = {
  TITLE: 'Welcome Back!',
  EMAIL_LABEL: 'Email Address :',
  PASSWORD_LABEL: 'Password :',
  EMAIL_PLACEHOLDER: 'Email',
  PASSWORD_PLACEHOLDER: 'Password',
  FORGOT_PASSWORD: 'Forgot Password?',
  SUBMIT_TEXT: 'Log-In',
  SUBMITTING_TEXT: 'Signing in...',
  ERROR_EMPTY: 'Please fill in all fields',
} as const;

export const DASHBOARD = {
  STATS: [
    { label: 'Total Calls', value: '1,234', change: '+12%' },
    { label: 'Resolved', value: '1,120', change: '+8%' },
    { label: 'Avg. Duration', value: '12m', change: '-2%' },
    { label: 'Satisfaction', value: '94%', change: '+5%' },
  ] as const,
  TABLE_TITLE: 'Highest Customer Reviews',
  TABLE_SUBTITLE: 'A detailed list of top-rated service interactions.',
  FILTER_GENDER: 'Filter by Gender',
  FILTER_ISSUE: 'Filter by Issue',
} as const;

export const CLIENT_LOG = {
  TYPES: ['Technical', 'Billing', 'Inquiry'] as const,
  FEEDBACK_OPTIONS: ['Highly Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'] as const,
} as const;

export const CLIENT_LOG_PAGE = {
  FILTER_BY: 'Filter By',
  SORT_BY: 'Sort By: Relevance',
  ADD_SESSION: 'Add a Call Session',
  SUBMIT: 'Submit',
  CANCEL: 'Cancel',
  MODAL_TITLE: 'Add New Call Session',
  TABLE_HEADERS: ['Client ID', 'Type', 'Specific Troubleshoot', 'Call Duration', 'Feedback'] as const,
  FIELDS: {
    CLIENT_ID: 'Client ID *',
    TYPE: 'Type *',
    TROUBLESHOOT: 'Specific Troubleshoot *',
    DURATION: 'Call Duration',
    FEEDBACK: 'Feedback',
  },
  PLACEHOLDERS: {
    CLIENT_ID: 'Enter Client ID',
    TROUBLESHOOT: 'Describe the issue',
    DURATION: 'e.g., 08:45',
  },
} as const;

export const SIDEBAR = {
  MENU_ITEMS: [
    { id: 'dashboard', label: 'Dashboard', path: ROUTES.DASHBOARD },
    { id: 'client-log', label: 'Client Log', path: ROUTES.CLIENT_LOG },
    { id: 'ai-log', label: 'AI Log', path: ROUTES.AI_LOG },
  ] as const,
  SETTINGS: 'Settings',
  LOGOUT: 'Logout',
} as const;

export const SETTINGS_PAGE = {
  TITLE: 'Settings',
  DESCRIPTION: 'Application settings page. Configure your preferences here.',
  COMING_SOON: 'More settings options coming soon.',
} as const;
