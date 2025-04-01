import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import WavyBackground from '../common/WavyBackground';

const Hero: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  // Cores personalizadas para o tema cyberpunk
  const darkModeColors = [
    "#00ffa3", // verde neon
    "#ff00aa", // magenta neon
    "#0066ff", // azul neon
    "#9900ff", // roxo neon
    "#00ccff", // ciano neon
  ];
  
  const lightModeColors = [
    "#006644", // verde escuro
    "#660044", // magenta escuro
    "#003399", // azul escuro
    "#440088", // roxo escuro
    "#0088aa", // ciano escuro
  ];

  return (
    <WavyBackground 
      colors={darkMode ? darkModeColors : lightModeColors}
      backgroundFill={darkMode ? "rgba(10, 10, 20, 0.8)" : "rgba(240, 240, 250, 0.8)"}
      waveWidth={100}
      blur={10}
      speed="slow"
      waveOpacity={darkMode ? 0.5 : 0.3}
      containerClassName="min-h-screen"
      className="max-w-7xl mx-auto px-6 w-full"
    >
      <div className="flex flex-col items-center md:items-start">
        {/* Glitch effect for title */}
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-orbitron glitch-text ${
          darkMode ? 'text-green-neon' : 'text-dark-green'
        }`} data-text="CYBER_DEV">
          CYBER_<span className={darkMode ? 'text-magenta-neon' : 'text-dark-purple'}>DEV</span>
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 font-jetbrains max-w-2xl text-center md:text-left ${
          darkMode ? 'text-dark-text' : 'text-light-text'
        }`}>
          Desenvolvedor Full Stack especializado em criar experiências digitais imersivas e interfaces futuristas.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a 
            href="#contato" 
            className={`px-6 py-3 rounded-md font-jetbrains text-sm transition-all duration-300 ${
              darkMode 
                ? 'bg-green-neon text-dark-bg hover:bg-green-neon/80 hover:shadow-glow-green' 
                : 'bg-dark-green text-light-bg hover:bg-dark-green/80 hover:shadow-md'
            }`}
          >
            INICIAR_CONEXÃO
          </a>
          <a 
            href="#sobre" 
            className={`px-6 py-3 rounded-md font-jetbrains text-sm border transition-all duration-300 ${
              darkMode 
                ? 'border-magenta-neon text-magenta-neon hover:bg-magenta-neon/10 hover:shadow-glow-magenta' 
                : 'border-dark-purple text-dark-purple hover:bg-dark-purple/10 hover:shadow-md'
            }`}
          >
            EXPLORAR_PERFIL
          </a>
        </div>
        
        {/* Tech stack icons */}
        <div className={`mt-16 grid grid-cols-5 gap-6 max-w-xs mx-auto md:mx-0 ${
          darkMode ? 'text-dark-text' : 'text-light-text'
        }`}>
          <i className="fab fa-react text-3xl hover:text-blue-400 transition-colors duration-300"></i>
          <i className="fab fa-js-square text-3xl hover:text-yellow-400 transition-colors duration-300"></i>
          <i className="fab fa-node-js text-3xl hover:text-green-500 transition-colors duration-300"></i>
          <i className="fab fa-html5 text-3xl hover:text-orange-500 transition-colors duration-300"></i>
          <i className="fab fa-css3-alt text-3xl hover:text-blue-500 transition-colors duration-300"></i>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className={`w-32 h-32 border-2 rounded-full ${darkMode ? 'border-green-neon/20' : 'border-dark-green/20'} animate-pulse-slow`}></div>
      </div>
      <div className="absolute top-20 left-10 hidden md:block">
        <div className={`w-16 h-16 border rounded-md ${darkMode ? 'border-magenta-neon/20' : 'border-dark-purple/20'} animate-float`}></div>
      </div>
    </WavyBackground>
  );
};

export default Hero;