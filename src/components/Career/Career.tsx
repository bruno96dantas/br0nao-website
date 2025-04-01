import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Timeline } from '../common/Timeline';

const Career: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const careerItems = [
    {
      title: "SENIOR_FRONTEND_DEV",
      company: "COMPANY_XYZ",
      date: "2020.01 - PRESENT",
      description: "Responsável pelo desenvolvimento de interfaces de usuário responsivas e acessíveis. Implementação de novas funcionalidades e manutenção de sistemas existentes. Colaboração com equipes de design e back-end para entregar produtos de alta qualidade."
    },
    {
      title: "WEB_DEVELOPER",
      company: "COMPANY_ABC",
      date: "2017.03 - 2019.12",
      description: "Desenvolvimento de websites e aplicações web utilizando HTML, CSS e JavaScript. Implementação de designs responsivos e otimização de performance. Trabalho em equipe para entregar projetos dentro dos prazos estabelecidos."
    },
    {
      title: "JUNIOR_DEVELOPER",
      company: "STARTUP_DEF",
      date: "2015.06 - 2017.02",
      description: "Desenvolvimento de componentes front-end para aplicações web. Participação em projetos de inovação e aprendizado de novas tecnologias. Colaboração em equipes ágeis com metodologia Scrum."
    }
  ];

  return (
    <section id="carreira" className={`py-16 md:py-24 ${darkMode ? 'bg-dark-bg/80' : 'bg-light-bg/80'} transition-colors duration-300 relative`}>
      {/* Cyberpunk decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-neon to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-magenta-neon to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron ${darkMode ? 'text-green-neon' : 'text-dark-green'} relative inline-block mx-auto`}>
          <span className="relative z-10">CAREER_PATH</span>
          <span className={`absolute -bottom-2 left-0 w-full h-1 ${darkMode ? 'bg-magenta-neon' : 'bg-dark-purple'}`}></span>
        </h2>
        
        <Timeline items={careerItems} darkMode={darkMode} />
      </div>
    </section>
  );
};

export default Career;