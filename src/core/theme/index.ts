export const theme = {
  colors: {
    bg: {
      dark: '#090a1f',
      darker: '#050614',
      sidebar: '#0a0a2e',
      gradient: 'linear-gradient(135deg, #0f1129 0%, #060714 100%)',
    },
    accent: {
      cyan: '#00f2ff',
      blue: '#2563eb',
      darkBlue: '#2d33ff',
      navy: '#030861',
      navyHover: '#030a93',
    },
    text: {
      main: '#ffffff',
      muted: '#8b8ea1',
      dark: '#01054E',
    },
    border: {
      light: 'rgba(255, 255, 255, 0.1)',
      blue: 'rgba(59, 130, 246, 0.2)',
      input: 'rgba(193, 213, 245, 1)',
    },
    card: {
      bg: 'rgba(255, 255, 255, 0.03)',
      glass: 'rgba(255, 255, 255, 0.16)',
    },
    header: {
      gradientFrom: '#1f395e',
      gradientVia: '#2f5567',
      gradientTo: '#0a0a2e',
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
    headerMobile: '64px',
    sidebarMobile: '260px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
} as const;
