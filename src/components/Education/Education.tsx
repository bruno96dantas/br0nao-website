import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const Education: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const educations: Education[] = [
    {
      degree: 'MESTRADO_EM_CIÊNCIA_DA_COMPUTAÇÃO',
      institution: 'UNIVERSIDADE XYZ',
      period: '2018 - 2020',
      description: 'Pesquisa em Inteligência Artificial e Aprendizado de Máquina. Desenvolvimento de algoritmos para reconhecimento de padrões em grandes conjuntos de dados.'
    },
    {
      degree: 'BACHARELADO_EM_CIÊNCIA_DA_COMPUTAÇÃO',
      institution: 'UNIVERSIDADE ABC',
      period: '2014 - 2018',
      description: 'Formação em desenvolvimento de software, estruturas de dados, algoritmos e sistemas operacionais. Projeto de conclusão focado em desenvolvimento web.'
    },
    {
      degree: 'CURSO_TÉCNICO_EM_INFORMÁTICA',
      institution: 'ESCOLA TÉCNICA DEF',
      period: '2012 - 2014',
      description: 'Fundamentos de programação, redes de computadores e manutenção de hardware. Introdução ao desenvolvimento web e banco de dados.'
    }
  ];

  return (
    <section id="graduacoes" className={`py-16 md:py-24 ${darkMode ? 'bg-dark-bg/90' : 'bg-light-bg/90'} transition-colors duration-300 relative`}>
      {/* Cyberpunk decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-neon to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron ${darkMode ? 'text-green-neon' : 'text-dark-green'} relative inline-block mx-auto`}>
          <span className="relative z-10">EDUCAÇÃO</span>
          <span className={`absolute -bottom-2 left-0 w-full h-1 ${darkMode ? 'bg-magenta-neon' : 'bg-dark-purple'}`}></span>
        </h2>
        
        <div className="space-y-8">
          {educations.map((education, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg ${darkMode ? 'bg-dark-bg border border-green-neon/30' : 'bg-light-bg border border-dark-green/30'} transition-transform duration-300 hover:scale-[1.02] relative`}
            >
              <div className={`absolute top-0 right-0 w-20 h-1 ${darkMode ? 'bg-green-neon' : 'bg-dark-green'}`}></div>
              <div className={`absolute top-0 right-0 w-1 h-20 ${darkMode ? 'bg-green-neon' : 'bg-dark-green'}`}></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className={`text-xl font-bold font-orbitron ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}>
                  {education.degree}
                </h3>
                <div className={`text-sm ${darkMode ? 'text-magenta-neon' : 'text-dark-purple'} mt-2 md:mt-0 font-orbitron`}>
                  {education.period}
                </div>
              </div>
              
              <h4 className={`text-lg ${darkMode ? 'text-dark-text' : 'text-light-text'} mb-3 font-jetbrains`}>
                {education.institution}
              </h4>
              
              <p className={`${darkMode ? 'text-dark-text/80' : 'text-light-text/80'} font-jetbrains`}>
                {education.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;