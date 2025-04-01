/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode
        'dark-bg': '#0c0c0c',
        'dark-text': '#e0e0e0',
        'green-neon': '#00ff41',
        'magenta-neon': '#ff00ff',
        
        // Light mode
        'light-bg': '#f0f0f0',
        'light-text': '#121212',
        'dark-green': '#008f11',
        'dark-purple': '#b100b1',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'scroll-left': 'scroll-left var(--duration, 20s) linear infinite',
        'scroll-right': 'scroll-right var(--duration, 20s) linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      boxShadow: {
        'neon-green': '0 0 10px rgba(0, 255, 65, 0.5)',
        'neon-magenta': '0 0 10px rgba(255, 0, 255, 0.5)',
        'neon-dark-green': '0 0 10px rgba(0, 143, 17, 0.5)',
        'neon-dark-purple': '0 0 10px rgba(177, 0, 177, 0.5)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};