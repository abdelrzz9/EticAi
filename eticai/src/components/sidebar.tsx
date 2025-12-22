import React from 'react';
import { LayoutDashboard, Users, Plus, Settings, LogOut } from 'lucide-react';
import logoImage from '../assets/logo.png';

export default function DoxaSidebar() {
  const [activeItem, setActiveItem] = React.useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'client-log', label: 'Client Log', icon: Users },
    { id: 'ai-log', label: 'AI Log', icon: Plus },
  ];

  const styles = {

    container: {
      margin: 0,
      padding: 0,
      height: '100vh',
      width: '210px',
      backgroundColor: '#0a0a2e',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column' as const,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    logoSection: {
      padding: '19px',
      borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    logoImage: {
      width: '32px',
      height: '32px',
      objectFit: 'contain' as const,
    },
    waveIcon: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '2px',
    },
    waveRow: {
      display: 'flex',
      gap: '2px',
    },
    waveDot: {
      width: '4px',
      height: '12px',
      backgroundColor: '#3b82f6',
      borderRadius: '9999px',
    },
    logoText: {
      fontSize: '20px',
      fontWeight: '600',
      marginLeft: '4px',
    },
    nav: {
      flex: 1,
      padding: '16px',
    },
    menuList: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '4px',
    },
    menuButton: (isActive: boolean) => ({
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 16px',
      borderRadius: '8px',
      backgroundColor: isActive ? '#2563eb' : 'transparent',
      color: isActive ? '#ffffff' : '#d1d5db',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.2s ease',
      textAlign: 'left' as const,
    }),
    bottomSection: {
      padding: '16px',
      borderTop: '1px solid rgba(59, 130, 246, 0.2)',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '12px',
    },
    userCard: {
      backgroundColor: '#2563eb',
      borderRadius: '8px',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    avatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#3b82f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: '600',
    },
    userName: {
      fontSize: '14px',
      fontWeight: '500',
    },
    bottomButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 16px',
      borderRadius: '8px',
      backgroundColor: 'transparent',
      color: '#d1d5db',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.2s ease',
      textAlign: 'left' as const,
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    if (!button.dataset.active) {
      button.style.backgroundColor = 'rgba(37, 99, 235, 0.2)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    if (!button.dataset.active) {
      button.style.backgroundColor = 'transparent';
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoSection}>
        <div style={styles.logoContainer}>
          <img 
            src= {logoImage} 
            alt="Doxa Logo" 
            style={styles.logoImage}
          />
          
          <span style={styles.logoText}>Doxa</span>
        </div>
      </div>

      <nav style={styles.nav}>
        <div style={styles.menuList}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={styles.menuButton(isActive)}
                data-active={isActive || undefined}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div style={styles.bottomSection}>

        <div style={styles.userCard}>
          <div style={styles.avatar}>
            M
          </div>
          <span style={styles.userName}>Mohamed</span>
        </div>


        <button 
          style={styles.bottomButton}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Settings size={16} />
          <span>Settings</span>
        </button>
        
        <button 
          style={styles.bottomButton}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}