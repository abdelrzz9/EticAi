import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../core/constants/app';
import { authService } from '../../features/auth/services/authService';
import type { ReactNode } from 'react';

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const user = authService.getStoredUser();
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return <>{children}</>;
}
