export const theme = {
  colors: {
    bg: {
      dark: '#090a1f',
      darker: '#050614',
      gradient: 'linear-gradient(135deg, #0f1129 0%, #060714 100%)',
    },
    accent: {
      cyan: '#00f2ff',
      blue: '#2563eb',
      darkBlue: '#2d33ff',
    },
    text: {
      main: '#ffffff',
      muted: '#8b8ea1',
    },
    border: {
      light: 'rgba(255, 255, 255, 0.1)',
    },
    card: {
      bg: 'rgba(255, 255, 255, 0.03)',
    },
    feedback: {
      positive: '#22c55e',
      neutral: '#f59e0b',
      negative: '#ef4444',
    },
    status: {
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },
  spacing: {
    sidebar: '210px',
    header: '70px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;
