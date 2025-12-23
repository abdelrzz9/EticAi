import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout.tsx';
import LoginPage from './pages/loginPage.tsx';  
import AILogPage from './pages/AILogPage.tsx';
import ClientLog from './pages/ClinetLoge.tsx';
import Dashboard from './pages/dashborde.tsx';  

const App: React.FC = () => {
  return (
    <Router>
     <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
  
    <Route path="/login" element={<LoginPage />} />
  
    <Route path="/" element={<Layout />}>
    <Route path="Dashboard" element={<Dashboard />} />
    <Route path="client-log" element={<ClientLog/>} />
    <Route path="ai-log" element={<AILogPage />} />
    </Route>
  </Routes>
    </Router>
  );
};

export default App;