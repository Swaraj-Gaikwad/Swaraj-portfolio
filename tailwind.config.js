/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      primary: '#0f172a',
      secondary: '#1e293b',
      accent: '#00d9ff',
      cyan: {
        300: '#06b6d4',
        400: '#06b6d4',
        500: '#0ea5e9',
      },
      gray: {
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
      },
      blue: {
        600: '#2563eb',
      },
      pink: {
        400: '#f472b6',
        500: '#ec4899',
      },
      purple: {
        400: '#d8b4fe',
        500: '#a855f7',
      },
      yellow: {
        400: '#facc15',
      },
      neon: {
        cyan: '#00d9ff',
        pink: '#ff006e',
        purple: '#9d4edd',
      }
    },
    extend: {
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(15, 23, 42, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 217, 255, 0.5)',
        'glow-pink': '0 0 20px rgba(255, 0, 110, 0.5)',
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      }
    },
  },
  plugins: [],
}
