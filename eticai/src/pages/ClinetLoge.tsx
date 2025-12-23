import React, { useState } from 'react';
import '../styles/ClinetLogs.css';
import type { ClientLogEntry } from "./types/loge";
import { X } from 'lucide-react';

interface ClientFormData {
  clientId: string;
  type: 'Technical' | 'Billing' | 'Inquiry';
  specificTroubleshoot: string;
  callDuration: string;
  feedback: string;
}

const ClientLog: React.FC = () => {
  const [logData, setLogData] = useState<ClientLogEntry[]>([
    {
      clientId: "ID-9921",
      type: "Technical",
      specificTroubleshoot: "AI Model latency in chat interface",
      callDuration: "08:45",
      feedback: "Highly Satisfied"
    },
    {
      clientId: "ID-4432",
      type: "Billing",
      specificTroubleshoot: "Subscription plan upgrade issue",
      callDuration: "04:12",
      feedback: "Neutral"
    },
    {
      clientId: "ID-4432",
      type: "Billing",
      specificTroubleshoot: "Subscription plan upgrade issue",
      callDuration: "04:12",
      feedback: "Neutral"
    },
    {
      clientId: "ID-9921",
      type: "Technical",
      specificTroubleshoot: "AI Model latency in chat interface",
      callDuration: "08:45",
      feedback: "Highly Satisfied"
    },
    {
      clientId: "ID-4432",
      type: "Billing",
      specificTroubleshoot: "Subscription plan upgrade issue",
      callDuration: "04:12",
      feedback: "Neutral"
    },
    {
      clientId: "ID-4432",
      type: "Billing",
      specificTroubleshoot: "Subscription plan upgrade issue",
      callDuration: "04:12",
      feedback: "Neutral"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<ClientFormData>({
    clientId: '',
    type: 'Technical',
    specificTroubleshoot: '',
    callDuration: '',
    feedback: 'Neutral'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.clientId || !formData.specificTroubleshoot) {
      alert('Please fill in all required fields');
      return;
    }

    const newEntry: ClientLogEntry = {
      clientId: formData.clientId,
      type: formData.type,
      specificTroubleshoot: formData.specificTroubleshoot,
      callDuration: formData.callDuration,
      feedback: formData.feedback
    };

    setLogData([...logData, newEntry]);
    setFormData({
      clientId: '',
      type: 'Technical',
      specificTroubleshoot: '',
      callDuration: '',
      feedback: 'Neutral'
    });
    setShowForm(false);
  };

  return (
    <div className="client-log-container">
      <div className="main-layout">

        {/* TABLE SECTION AT BOTTOM */}
        <section className="content-container">
          <div className="action-bar">
            
            <div className="filter-options">
              <button className="btn-secondary">Filter By</button>
              <button className="btn-secondary">Sort By: Relevance</button>
            </div>
            <button 
              className="btn-primary"
              onClick={() => setShowForm(true)}
            >
              Add a Call Session
            </button>
          </div>
          <hr className="custom-hr" />

          <div className="table-container">
            <table className="log-table">
              <thead>
                <tr>
                  <th>Client ID</th>
                  <th>Type</th>
                  <th>Specific Troubleshoot</th>
                  <th>Call Duration</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {logData.map((log, index) => (
                  <tr key={index}>
                    <td className="client-id">{log.clientId}</td>
                    <td>{log.type}</td>
                    <td>{log.specificTroubleshoot}</td>
                    <td>{log.callDuration}</td>
                    <td>{log.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Call Session</h2>
              <button 
                className="modal-close-btn"
                onClick={() => setShowForm(false)}
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="client-form">
              <div className="form-group">
                <label htmlFor="clientId">Client ID *</label>
                <input
                  type="text"
                  id="clientId"
                  name="clientId"
                  value={formData.clientId}
                  onChange={handleInputChange}
                  placeholder="Enter Client ID"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">Type *</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Technical">Technical</option>
                  <option value="Billing">Billing</option>
                  <option value="Inquiry">Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="specificTroubleshoot">Specific Troubleshoot *</label>
                <input
                  type="text"
                  id="specificTroubleshoot"
                  name="specificTroubleshoot"
                  value={formData.specificTroubleshoot}
                  onChange={handleInputChange}
                  placeholder="Describe the issue"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="callDuration">Call Duration</label>
                <input
                  type="text"
                  id="callDuration"
                  name="callDuration"
                  value={formData.callDuration}
                  onChange={handleInputChange}
                  placeholder="e.g., 08:45"
                />
              </div>

              <div className="form-group">
                <label htmlFor="feedback">Feedback</label>
                <select
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                >
                  <option value="Highly Satisfied">Highly Satisfied</option>
                  <option value="Satisfied">Satisfied</option>
                  <option value="Neutral">Neutral</option>
                  <option value="Unsatisfied">Unsatisfied</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit">Submit</button>
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientLog;