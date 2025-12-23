import { Search, Bell, LayoutDashboard, BrainCircuit, History, Settings, LogOut, User, Sparkles, Filter } from 'lucide-react';
import '../Stayle/dashboard.css';

const Dashboard = () => {
  const tableData = [
    { id: "USR-001", gender: "Female", troubleshoot: "Network", duration: "12m", feedback: "Excellent" },
    { id: "USR-002", gender: "Male", troubleshoot: "Hardware", duration: "45m", feedback: "Fast" },
  ];

  return (
    <div className="dashboard-container">
        {/* SIDEBAR - Fixed navigation structure */}

      {/* MAIN CONTENT AREA - Now correctly filling the screen */}
      <div className="main-content">
        
        {/* HEADER - Fixed search and notification structure */}

        {/* MAIN SECTION */}
        <main className="main-section">
          {/* Images Section - Side by Side */}
         <Dashboard/>
         <Dashboard/>
          {/* Table Section */}
          <div className="table-section">
            <div className="table-header-row">
              <div className="table-title-section">
                <h3 className="section-title">Highest Customer Reviews</h3>
                <p className="section-subtitle">A detailed list of top-rated service interactions.</p>
              </div>
              <div className="table-filter-buttons">
                <button className="filter-btn">
                  <Filter size={16} />
                  Filter by Gender
                </button>
                <button className="filter-btn">
                  <Filter size={16} />
                  Filter by Issue
                </button>
              </div>
            </div>

            <div className="table-container">
              <table className="table">
                <thead className="table-header">
                  <tr>
                    <th>User ID</th>
                    <th>Gender</th>
                    <th>Specific Troubleshoot</th>
                    <th>Call Duration</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="table-user-id">{row.id}</td>
                      <td className="table-gender">{row.gender}</td>
                      <td className="table-troubleshoot">
                        <span className="troubleshoot-badge">
                          {row.troubleshoot}
                        </span>
                      </td>
                      <td className="table-duration">{row.duration}</td>
                      <td className="table-feedback">"{row.feedback}"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;