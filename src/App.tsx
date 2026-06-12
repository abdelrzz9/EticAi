import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from './shared/layouts/AuthLayout';
import { LoginPage } from './features/auth/pages/LoginPage';
import { DashboardPage } from './features/dashboard/pages/DashboardPage';
import { AILogPage } from './features/ai-log/pages/AILogPage';
import { ClientLogPage } from './features/client-log/pages/ClientLogPage';
import { SettingsPage } from './features/settings/pages/SettingsPage';
import { useClientLogs } from './features/client-log/hooks/useClientLogs';

function ClientLogWrapper() {
  const { logs, addLog, isFormOpen, setIsFormOpen } = useClientLogs();
  return (
    <ClientLogPage
      logs={logs}
      isFormOpen={isFormOpen}
      onFormOpen={() => setIsFormOpen(true)}
      onFormClose={() => setIsFormOpen(false)}
      onAddLog={addLog}
    />
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="ai-log" element={<AILogPage />} />
          <Route path="client-log" element={<ClientLogWrapper />} />
          <Route
            path="settings"
            element={<SettingsPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
