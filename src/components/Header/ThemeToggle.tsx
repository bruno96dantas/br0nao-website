import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
        darkMode ? 'bg-green-neon/20' : 'bg-dark-green/20'
      }`}
      aria-label="Toggle theme"
    >
      <span
        className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-300 transform ${
          darkMode ? 'translate-x-6 bg-green-neon' : 'translate-x-0 bg-dark-green'
        }`}
      />
      <span className={`absolute left-1 text-xs ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}>
        {darkMode ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;