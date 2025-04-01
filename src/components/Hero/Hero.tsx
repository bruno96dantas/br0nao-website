import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { GlitchText } from '../common/GlitchText';

const Hero: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative ${darkMode ? 'bg-hero-pattern-dark' : 'bg-hero-pattern-light'} transition-colors duration-300`}>
      <div className="absolute inset-0 grid-lines opacity-20"></div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 font-orbitron ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}>
            <GlitchText>NOME_SOBRENOME</GlitchText>
          </h1>
          
          <div className={`h-1 w-24 ${darkMode ? 'bg-magenta-neon' : 'bg-dark-purple'} mb-6`}></div>
          
          <h2 className={`text-xl md:text-2xl mb-8 font-jetbrains ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
            FRONTEND_DEVELOPER | UI/UX_DESIGNER | TECH_ENTHUSIAST
          </h2>
          
          <p className={`max-w-2xl mb-10 font-jetbrains ${darkMode ? 'text-dark-text/80' : 'text-light-text/80'}`}>
            Desenvolvedor front-end apaixonado por criar interfaces interativas e responsivas. 
            Especializado em React, TypeScript e design de UI/UX. 
            Sempre em busca de novos desafios e aprendizados.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="#sobre" 
              className={`px-6 py-3 rounded-md ${darkMode ? 'bg-green-neon text-dark-bg' : 'bg-dark-green text-light-bg'} font-orbitron transition-transform duration-300 hover:scale-[1.05] cyberpunk-button`}
            >
              CONHEÇA_MEU_TRABALHO
            </a>
            <a 
              href="#contato" 
              className={`px-6 py-3 rounded-md ${darkMode ? 'bg-transparent border border-magenta-neon text-magenta-neon' : 'bg-transparent border border-dark-purple text-dark-purple'} font-orbitron transition-transform duration-300 hover:scale-[1.05] cyberpunk-button`}
            >
              CONTATO
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i className={`fas fa-chevron-down text-2xl ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}></i>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className={`absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 ${darkMode ? 'border-green-neon' : 'border-dark-green'} opacity-50`}></div>
      <div className={`absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 ${darkMode ? 'border-magenta-neon' : 'border-dark-purple'} opacity-50`}></div>
    </section>
  );
};

export default Hero;