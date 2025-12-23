// ClientLogForm.tsx
import React, { useState } from 'react';
import '../styles/clientUesrForm.css';

interface ClientFormData {
  clientId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  idNumber: string;
  clientType: 'particular' | 'company';
  troubleshootType: string[];
}

const ClientLogForm: React.FC = () => {
  const [formData, setFormData] = useState<ClientFormData>({
    clientId: '12698',
    fullName: '',
    email: '',
    phoneNumber: '',
    idNumber: '',
    clientType: 'particular',
    troubleshootType: []
  });

  const clientIds = ['12698', '12699'];
  const troubleshootOptions = [
    'Billing',
    'Technical Issues',
    'Complaint',
    'Product Information'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      troubleshootType: checked
        ? [...prev.troubleshootType, value]
        : prev.troubleshootType.filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    // Here you would typically send data to your backend
  };

  const handleLogout = () => {
    console.log('User logged out');
    alert('Logged out successfully');
  };

  return (
    <div className="client-log-container">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">Doxa</h1>
        <button 
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <main className="form-container">
        <div className="form-header">
          <h2>Client Log</h2>
          <div className="client-id-section">
            <h3>Client ID</h3>
            <div className="client-id-tags">
              {clientIds.map(id => (
                <span 
                  key={id}
                  className={`client-id-tag ${formData.clientId === id ? 'active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, clientId: id }))}
                >
                  #{id}
                </span>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="client-form">
          {/* Client's Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Client's Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Type here"
              required
            />
          </div>

          {/* Client's Email */}
          <div className="form-group">
            <label htmlFor="email">Client's Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Type here"
              required
            />
          </div>

          {/* Client's Phone Number */}
          <div className="form-group">
            <label htmlFor="phoneNumber">Client's Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Type here"
              required
            />
          </div>

          {/* Client's ID Number */}
          <div className="form-group">
            <label htmlFor="idNumber">Client's ID Number</label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleInputChange}
              placeholder="Type here"
              required
            />
          </div>

          {/* Type of Client */}
          <div className="form-group">
            <label>Type of Client</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="clientType"
                  value="particular"
                  checked={formData.clientType === 'particular'}
                  onChange={handleInputChange}
                />
                <span>Particular</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="clientType"
                  value="company"
                  checked={formData.clientType === 'company'}
                  onChange={handleInputChange}
                />
                <span>Company</span>
              </label>
            </div>
          </div>

          {/* Type of Troubleshoot */}
          <div className="form-group">
            <label>Type of Troubleshoot</label>
            <div className="checkbox-group">
              {troubleshootOptions.map(option => (
                <label key={option} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={option.toLowerCase().replace(' ', '-')}
                    checked={formData.troubleshootType.includes(option.toLowerCase().replace(' ', '-'))}
                    onChange={handleCheckboxChange}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Submit Form
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ClientLogForm;