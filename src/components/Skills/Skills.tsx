import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

const Skills: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const skills: Skill[] = [
    { name: 'React', icon: 'fab fa-react', proficiency: 90 },
    { name: 'TypeScript', icon: 'fab fa-js-square', proficiency: 85 },
    { name: 'HTML5', icon: 'fab fa-html5', proficiency: 95 },
    { name: 'CSS3', icon: 'fab fa-css3-alt', proficiency: 90 },
    { name: 'Node.js', icon: 'fab fa-node-js', proficiency: 75 },
    { name: 'Git', icon: 'fab fa-git-alt', proficiency: 85 },
    { name: 'UI/UX', icon: 'fas fa-paint-brush', proficiency: 80 },
    { name: 'Responsive', icon: 'fas fa-mobile-alt', proficiency: 90 }
  ];

  return (
    <section id="skills" className={`py-16 md:py-24 ${darkMode ? 'bg-dark-bg/80' : 'bg-light-bg/80'} transition-colors duration-300 relative`}>
      {/* Cyberpunk decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-neon to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-magenta-neon to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron ${darkMode ? 'text-green-neon' : 'text-dark-green'} relative inline-block mx-auto`}>
          <span className="relative z-10">TECH_SKILLS</span>
          <span className={`absolute -bottom-2 left-0 w-full h-1 ${darkMode ? 'bg-magenta-neon' : 'bg-dark-purple'}`}></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg ${darkMode ? 'bg-dark-bg border border-green-neon/30' : 'bg-light-bg border border-dark-green/30'} transition-transform duration-300 hover:scale-[1.02] relative group`}
            >
              <div className={`absolute top-0 right-0 w-16 h-1 ${darkMode ? 'bg-green-neon' : 'bg-dark-green'}`}></div>
              <div className={`absolute top-0 right-0 w-1 h-16 ${darkMode ? 'bg-green-neon' : 'bg-dark-green'}`}></div>
              
              <div className="flex items-center mb-4">
                <i className={`${skill.icon} text-3xl mr-4 ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}></i>
                <h3 className={`text-xl font-bold font-orbitron ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>{skill.name}</h3>
              </div>
              
              <div className={`w-full h-2 ${darkMode ? 'bg-dark-bg/50' : 'bg-light-bg/50'} rounded-full overflow-hidden`}>
                <div 
                  className={`h-full ${darkMode ? 'bg-green-neon' : 'bg-dark-green'} transition-all duration-1000 ease-out`} 
                  style={{ width: `${skill.proficiency}%`, transitionDelay: `${index * 100}ms` }}
                ></div>
              </div>
              
              <div className={`mt-2 text-right font-jetbrains ${darkMode ? 'text-magenta-neon' : 'text-dark-purple'}`}>
                {skill.proficiency}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;