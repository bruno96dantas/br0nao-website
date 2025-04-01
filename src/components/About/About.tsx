import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const About: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <section id="sobre" className={`py-16 md:py-24 ${darkMode ? 'bg-dark-bg/90' : 'bg-light-bg/90'} transition-colors duration-300 relative`}>
      {/* Cyberpunk decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-neon to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron ${darkMode ? 'text-green-neon' : 'text-dark-green'} relative inline-block mx-auto`}>
          <span className="relative z-10">SOBRE_MIM</span>
          <span className={`absolute -bottom-2 left-0 w-full h-1 ${darkMode ? 'bg-magenta-neon' : 'bg-dark-purple'}`}></span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 relative">
            <div className={`absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 ${darkMode ? 'border-green-neon' : 'border-dark-green'} opacity-70`}></div>
            <div className={`absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 ${darkMode ? 'border-magenta-neon' : 'border-dark-purple'} opacity-70`}></div>
            
            <div className="relative overflow-hidden rounded-lg cyberpunk-image">
              <img 
                src="https://placehold.co/600x400" 
                alt="Profile" 
                className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-[1.03]"
              />
              <div className={`absolute inset-0 ${darkMode ? 'cyberpunk-overlay-dark' : 'cyberpunk-overlay-light'} opacity-30`}></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className={`mb-6 font-jetbrains ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
              Olá! Sou um desenvolvedor front-end apaixonado por criar interfaces interativas e responsivas. Com mais de 5 anos de experiência no desenvolvimento web, tenho trabalhado com as mais recentes tecnologias e frameworks para entregar produtos de alta qualidade.
            </p>
            
            <p className={`mb-6 font-jetbrains ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
              Minha jornada na programação começou durante a faculdade, onde descobri minha paixão por transformar ideias em código. Desde então, tenho me especializado em React, TypeScript e design de UI/UX, sempre buscando aprimorar minhas habilidades e acompanhar as tendências do mercado.
            </p>
            
            <p className={`mb-8 font-jetbrains ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
              Além do desenvolvimento, sou entusiasta de novas tecnologias, gosto de contribuir para projetos open source e compartilhar conhecimento com a comunidade.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className={`px-4 py-2 rounded-md ${darkMode ? 'bg-dark-bg border border-green-neon text-green-neon' : 'bg-light-bg border border-dark-green text-dark-green'} font-jetbrains`}>
                <i className="fas fa-code mr-2"></i>Front-end
              </div>
              <div className={`px-4 py-2 rounded-md ${darkMode ? 'bg-dark-bg border border-green-neon text-green-neon' : 'bg-light-bg border border-dark-green text-dark-green'} font-jetbrains`}>
                <i className="fas fa-paint-brush mr-2"></i>UI/UX
              </div>
              <div className={`px-4 py-2 rounded-md ${darkMode ? 'bg-dark-bg border border-green-neon text-green-neon' : 'bg-light-bg border border-dark-green text-dark-green'} font-jetbrains`}>
                <i className="fas fa-mobile-alt mr-2"></i>Responsive
              </div>
              <div className={`px-4 py-2 rounded-md ${darkMode ? 'bg-dark-bg border border-green-neon text-green-neon' : 'bg-light-bg border border-dark-green text-dark-green'} font-jetbrains`}>
                <i className="fas fa-server mr-2"></i>API Integration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;