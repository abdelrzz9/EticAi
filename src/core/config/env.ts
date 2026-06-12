export const env = {
  APP_NAME: import.meta.env.VITE_APP_NAME ?? 'Doxa',
  APP_DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION ?? 'EticAI - Customer Support Intelligence',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000/api',
  AUTH_TOKEN_KEY: import.meta.env.VITE_AUTH_TOKEN_KEY ?? 'auth_token',
  DEFAULT_PAGE_SIZE: Number(import.meta.env.VITE_DEFAULT_PAGE_SIZE) || 10,
  CHAT_SIMULATION_DELAY: Number(import.meta.env.VITE_CHAT_SIMULATION_DELAY) || 1000,
} as const;
