import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from '../components/Header/ThemeToggle';

const Navbar: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-dark-bg/90 backdrop-blur-sm' : 'bg-light-bg/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className={`text-xl font-bold font-orbitron ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}>
              CYBER_<span className={darkMode ? 'text-magenta-neon' : 'text-dark-purple'}>PORTFOLIO</span>
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#sobre" 
              className={`font-jetbrains text-sm ${darkMode ? 'text-dark-text hover:text-green-neon' : 'text-light-text hover:text-dark-green'} transition-colors duration-300`}
            >
              SOBRE_MIM
            </a>
            <a 
              href="#carreira" 
              className={`font-jetbrains text-sm ${darkMode ? 'text-dark-text hover:text-green-neon' : 'text-light-text hover:text-dark-green'} transition-colors duration-300`}
            >
              CARREIRA
            </a>
            <a 
              href="#skills" 
              className={`font-jetbrains text-sm ${darkMode ? 'text-dark-text hover:text-green-neon' : 'text-light-text hover:text-dark-green'} transition-colors duration-300`}
            >
              SKILLS
            </a>
            <a 
              href="#graduacoes" 
              className={`font-jetbrains text-sm ${darkMode ? 'text-dark-text hover:text-green-neon' : 'text-light-text hover:text-dark-green'} transition-colors duration-300`}
            >
              EDUCAÇÃO
            </a>
            <a 
              href="#contato" 
              className={`font-jetbrains text-sm ${darkMode ? 'text-dark-text hover:text-green-neon' : 'text-light-text hover:text-dark-green'} transition-colors duration-300`}
            >
              CONTATO
            </a>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className={`ml-4 p-2 rounded-md ${darkMode ? 'text-green-neon hover:bg-dark-bg/50' : 'text-dark-green hover:bg-light-bg/50'}`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-60 mt-4' : 'max-h-0'}`}>
          <div className={`flex flex-col space-y-4 py-2 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <a 
              href="#sobre" 
              className={`font-jetbrains text-sm ${darkMode ? 'text-dark-text hover:text-green-neon' : 'text-light-text hover:text-dark-green'} transition-colors duration-300`}
              onClick={() => setIsOpen(false)}
            >
              SOBRE_MIM
            </a>
            <a 
              href="#carreira" 
              className={`font-jetbrains text-sm ${darkMode ? 'text-dark-text hover:text-green-neon' : 'text-light-text hover:text-dark-green'} transition-colors duration-300`}
              onClick={() => setIsOpen(false)}
            >
              CARREIRA
            </a>
            <a 
              href="#skills" 
              className={`font-jetbrains text-sm ${darkMode ? 'text-dark-text hover:text-green-neon' : 'text-light-text hover:text-dark-green'} transition-colors duration-300`}
              onClick={() => setIsOpen(false)}
            >
              SKILLS
            </a>
            <a 
              href="#graduacoes" 
              className={`font-jetbrains text-sm ${darkMode ? 'text-dark-text hover:text-green-neon' : 'text-light-text hover:text-dark-green'} transition-colors duration-300`}
              onClick={() => setIsOpen(false)}
            >
              EDUCAÇÃO
            </a>
            <a 
              href="#contato" 
              className={`font-jetbrains text-sm ${darkMode ? 'text-dark-text hover:text-green-neon' : 'text-light-text hover:text-dark-green'} transition-colors duration-300`}
              onClick={() => setIsOpen(false)}
            >
              CONTATO
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom line */}
      <div className={`h-px w-full ${darkMode ? 'bg-green-neon/30' : 'bg-dark-green/30'}`}></div>
    </nav>
  );
};

export default Navbar;