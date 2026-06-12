import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../core/constants/app';
import type { LoginCredentials } from '../../../core/types/auth';
import { authService } from '../services/authService';

export function useAuth() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      setIsLoading(true);
      setError(null);

      try {
        await authService.login(credentials);
        navigate(ROUTES.DASHBOARD, { replace: true });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Login failed');
      } finally {
        setIsLoading(false);
      }
    },
    [navigate],
  );

  const logout = useCallback(() => {
    authService.logout();
    navigate(ROUTES.LOGIN, { replace: true });
  }, [navigate]);

  return { login, logout, error, isLoading };
}
