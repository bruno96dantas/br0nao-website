import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Career from './components/Career/Career';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import './styles/globals.css';
import './styles/animations.css';

const AppContent: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-dark-bg' : 'light bg-light-bg'} transition-colors duration-300`}>
      {/* Cyberpunk Grid Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <Header />
      <Hero />
      <About />
      <Career />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;