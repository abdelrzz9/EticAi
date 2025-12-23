import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

interface DoxaHeaderProps {
  title: string;
}

export default function DoxaHeader({ title }: DoxaHeaderProps) {
  const styles = {
    header: {
      height: '70px',
      backgroundImage: 'linear-gradient(to left, #1f395e 1% , #2f5567 9% , #0a0a2e 87%)',
      borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      boxSizing: 'border-box' as const,
    },
    title: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#ffffff',
      margin: 0,
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    searchContainer: {
      position: 'relative' as const,
      display: 'flex',
      alignItems: 'center',
    },
    searchInput: {
      width: '280px',
      height: '40px',
      paddingLeft: '40px',
      paddingRight: '16px',
      border: '1px solid rgba(193, 213, 245, 1)',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
      color: '#ffffff',
      transition: 'all 0.2s ease',
      backdropFilter: 'blur(15px)'
    },
    searchIcon: {
      position: 'absolute' as const,
      left: '12px',
      color: '#6b7280',
      pointerEvents: 'none' as const,
    },
    iconButton: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
      display: 'flex',
      border: '1px solid rgba(193, 213, 245, 1)',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      position: 'relative' as const,
    },
    notificationBadge: {
      position: 'absolute' as const,
      top: '8px',
      right: '8px',
      width: '8px',
      height: '8px',
      backgroundColor: '#ef4444',
      borderRadius: '50%',
      border: '2px solid #ffffff',
    },
    userSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
      padding: '8px 12px',
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      border: 'none',
      backgroundColor: 'transparent',
    },
    userAvatar: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      backgroundColor: '#2563eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: '600',
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'flex-start',
    },
    userName: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#ffffff',
      lineHeight: '1.2',
    },
    userRole: {
      fontSize: '12px',
      color: '#9ca3af',
      lineHeight: '1.2',
    },
  };

  const handleSearchFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = 'rgba(15, 17, 41, 0.8)';
  };

  const handleSearchBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
    e.target.style.backgroundColor = '#797dae4d';
  };

  const handleIconButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#797dae4d';
  };


  const handleUserSectionHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
  };


  return (
    <header style={styles.header}>
      
      <h1 style={styles.title}>{title}</h1>

      <div style={styles.rightSection}>


        <div style={styles.searchContainer}>
          <Search size={18} style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search..."
            style={styles.searchInput}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
        </div>

        <button
          style={styles.iconButton}
          onMouseEnter={handleIconButtonHover}
        >
          <Bell size={20} color="#d1d5db" />
          <div style={styles.notificationBadge}></div>
        </button>

        <button
          style={styles.userSection}
          onMouseEnter={handleUserSectionHover}
        >
          <div style={styles.userAvatar}>M</div>
          <div style={styles.userInfo}>
            <span style={styles.userName}>Mohamed</span>
            <span style={styles.userRole}>Admin</span>
          </div>
          <ChevronDown size={16} color="#9ca3af" />
        </button>
      </div>
    </header>
  );
}