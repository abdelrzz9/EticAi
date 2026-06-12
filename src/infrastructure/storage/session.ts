import { env } from '../../core/config/env';

export const storage = {
  getToken: (): string | null => {
    return sessionStorage.getItem(env.AUTH_TOKEN_KEY);
  },

  setToken: (token: string): void => {
    sessionStorage.setItem(env.AUTH_TOKEN_KEY, token);
  },

  removeToken: (): void => {
    sessionStorage.removeItem(env.AUTH_TOKEN_KEY);
  },

  isAuthenticated: (): boolean => {
    return !!storage.getToken();
  },
};
