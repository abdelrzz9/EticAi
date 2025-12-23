import React from 'react';
import '../Stayle/ClinetLogs.css';
import type { ClientLogEntry } from "./types/loge";




const ClientLog: React.FC = () => {
  
  const logData: ClientLogEntry[] = [
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
    
  ];

  return (
    <div className="dashboard-wrapper">
     
      <aside className="sidebar-area">Sidebar Element</aside>

      <div className="main-layout">
        <header className="header-area">Header Element</header>

        <section className="content-container">
        
          <div className="action-bar">
            
            <div className="filter-options">

              <button className="btn-secondary">Filter By</button>
              <button className="btn-secondary">Sort By: Relevance</button>
              
            </div>
            <button className="btn-primary">Add a Call Session</button>
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
    </div>
  );
};

export default ClientLog;