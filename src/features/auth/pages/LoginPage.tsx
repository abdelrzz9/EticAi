import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES, LOGIN } from '../../../core/constants/app';
import { useAuth } from '../hooks/useAuth';
import { authService } from '../services/authService';
import sideimg from '../../../assets/sideimage.png';
import { APP } from '../../../core/constants/app';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authService.getStoredUser()) {
      navigate(ROUTES.DASHBOARD, { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    login({ email, password });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="hidden md:block md:w-1/2 lg:w-3/5">
        <img
          src={sideimg}
          alt={`${APP.NAME} illustration`}
          className="h-screen w-full object-cover"
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-50 min-h-screen md:min-h-0">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark text-left">
              {LOGIN.TITLE}
            </h2>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="emailInput"
                className="text-sm font-bold text-gray-700 ml-1"
              >
                {LOGIN.EMAIL_LABEL}
              </label>
              <input
                id="emailInput"
                type="email"
                placeholder={LOGIN.EMAIL_PLACEHOLDER}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base focus:outline-none focus:border-accent-blue transition-colors"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="passwordInput"
                className="text-sm font-bold text-gray-700 ml-1"
              >
                {LOGIN.PASSWORD_LABEL}
              </label>
              <input
                id="passwordInput"
                type="password"
                placeholder={LOGIN.PASSWORD_PLACEHOLDER}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base focus:outline-none focus:border-accent-blue transition-colors"
                required
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 ml-1 px-3 py-2 bg-red-50 border-l-4 border-red-500 rounded">
                {error}
              </p>
            )}

            <p className="text-sm text-gray-500 ml-1">
              <button
                type="button"
                onClick={() => alert('Password reset functionality coming soon.')}
                className="hover:underline bg-transparent border-none p-0 text-gray-500 cursor-pointer inline"
              >
                {LOGIN.FORGOT_PASSWORD}
              </button>
            </p>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-lg bg-accent-navy text-white font-bold text-base cursor-pointer transition-all duration-300 hover:bg-accent-navy-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? LOGIN.SUBMITTING_TEXT : LOGIN.SUBMIT_TEXT}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
