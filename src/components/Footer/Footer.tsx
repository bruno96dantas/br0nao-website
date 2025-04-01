import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { GlitchText } from '../common/GlitchText';

const Footer: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/' }
  ];

  return (
    <footer id="contato" className={`py-12 ${darkMode ? 'bg-dark-bg' : 'bg-light-bg'} transition-colors duration-300 relative`}>
      {/* Cyberpunk decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-neon to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className={`text-2xl font-bold mb-4 font-orbitron ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}>
              <GlitchText>CONTATO</GlitchText>
            </h2>
            <p className={`mb-4 font-jetbrains ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
              Interessado em trabalhar juntos? Entre em contato!
            </p>
            <a 
              href="mailto:email@example.com" 
              className={`font-jetbrains ${darkMode ? 'text-green-neon hover:text-magenta-neon' : 'text-dark-green hover:text-dark-purple'} transition-colors duration-300`}
            >
              email@example.com
            </a>
          </div>
          
          <div>
            <h3 className={`text-xl font-bold mb-4 font-orbitron ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}>
              REDES_SOCIAIS
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'bg-dark-bg border border-green-neon text-green-neon hover:bg-green-neon hover:text-dark-bg' : 'bg-light-bg border border-dark-green text-dark-green hover:bg-dark-green hover:text-light-bg'} transition-colors duration-300`}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`mt-12 pt-6 border-t ${darkMode ? 'border-green-neon/30' : 'border-dark-green/30'} text-center`}>
          <p className={`font-jetbrains ${darkMode ? 'text-dark-text/70' : 'text-light-text/70'}`}>
            &copy; {new Date().getFullYear()} | Desenvolvido com <i className={`fas fa-heart ${darkMode ? 'text-magenta-neon' : 'text-dark-purple'}`}></i> | <span className={darkMode ? 'text-green-neon' : 'text-dark-green'}>CYBER_PORTFOLIO</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;