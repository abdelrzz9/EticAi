import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout.tsx';
import LoginPage from './pages/loginPage.tsx';  
import ChatBotPage from './pages/ChatBot.tsx'; 
import ClientLogPage from './pages/ClientLogPage.tsx';
import AILogPage from './pages/AILogPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
     <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
  
    <Route path="/login" element={<LoginPage />} />
  
    <Route path="/" element={<Layout />}>
    <Route path="chatbot" element={<ChatBotPage />} />
    <Route path="client-log" element={<ClientLogPage />} />
    <Route path="ai-log" element={<AILogPage />} />
    </Route>
  </Routes>
    </Router>
  );
};

export default App;