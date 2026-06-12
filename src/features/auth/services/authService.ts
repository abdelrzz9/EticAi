import { AUTH, APP } from '../../../core/constants/app';
import type { AuthUser, LoginCredentials } from '../../../core/types/auth';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthUser> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (
      credentials.email === AUTH.CREDENTIALS.EMAIL &&
      credentials.password === AUTH.CREDENTIALS.PASSWORD
    ) {
      const user: AuthUser = {
        name: APP.USER.NAME,
        email: credentials.email,
        role: APP.USER.ROLE,
        initials: APP.USER.INITIALS,
      };
      sessionStorage.setItem('user', JSON.stringify(user));
      return user;
    }

    throw new Error('Invalid email or password');
  },

  async logout(): Promise<void> {
    sessionStorage.removeItem('user');
  },

  getStoredUser(): AuthUser | null {
    const stored = sessionStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  },
};
