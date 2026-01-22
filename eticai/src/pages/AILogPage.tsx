import React, { useState } from 'react';
import '../styles/ChatBot.css';

type Message = { text: string; sender: 'user' | 'ai' };

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    setMessages(prev => [...prev, { text: trimmed, sender: 'user' }]);
    setMessage('');

    // Simulate AI Response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'This is a simulated AI response. In a real implementation, this would connect to an AI service.',
        sender: 'ai',
      }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{ paddingBottom: "70px" }} className="dashboard-container">


      {/* Main Content */}
      <main className="main-content">
        {/* Chat Area */}
        <div className="chat-container">
          {messages.length === 0 ? (
            <div className="empty-state">
              <div className="sparkle-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h2 className="empty-title">Welcome Agent 007</h2>
              <p className="empty-subtitle">start by describing the troubleshoot and let the chat take over!</p>
            </div>
          ) : (
            <div className="messages-list">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <div className="message-content">{msg.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="input-container">
          <div className="input-wrapper">
            <input
              type="text"
              className="chat-input"
              placeholder="Ask AI assistant"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="send-btn" onClick={handleSend}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 8L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;