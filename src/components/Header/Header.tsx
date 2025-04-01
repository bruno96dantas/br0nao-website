import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { GlitchText } from '../common/GlitchText';

const Header: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState<string>('home');
  
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full ${darkMode ? 'bg-dark-bg border-b border-green-neon/30' : 'bg-light-bg border-b border-dark-green/30'} shadow-glow z-10 transition-colors duration-300`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className={`text-xl font-bold ${darkMode ? 'text-green-neon' : 'text-dark-green'} font-orbitron`}>
          <GlitchText>CYBER_PORTFOLIO</GlitchText>
        </a>
        <div className="hidden md:flex space-x-6">
          {[
            { id: 'home', label: 'HOME' },
            { id: 'sobre', label: 'ABOUT' },
            { id: 'carreira', label: 'CAREER' },
            { id: 'skills', label: 'SKILLS' },
            { id: 'graduacoes', label: 'EDU' }
          ].map((section) => (
            <button 
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`${activeSection === section.id ? 
                (darkMode ? 'text-green-neon border-b-2 border-green-neon' : 'text-dark-green border-b-2 border-dark-green') : 
                (darkMode ? 'text-dark-text' : 'text-light-text')} 
                ${darkMode ? 'hover:text-green-neon' : 'hover:text-dark-green'} font-orbitron transition-colors duration-300`}
            >
              {section.label}_
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;