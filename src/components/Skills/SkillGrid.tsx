import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { SkillProps } from '../../types';

interface SkillGridProps {
  skills: SkillProps[];
  onSkillClick: (skill: SkillProps) => void;
}

const SkillGrid: React.FC<SkillGridProps> = ({ skills, onSkillClick }) => {
  const { darkMode } = useContext(ThemeContext);
  const [filter, setFilter] = useState<string>('all');
  
  const skillTypes = ['all', ...Array.from(new Set(skills.map(skill => skill.type)))];
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.type === filter);

  return (
    <div className="mt-12">
      <h3 className={`text-xl font-orbitron text-center mb-6 ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}>
        QUICK_ACCESS
      </h3>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {skillTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-md text-sm font-jetbrains transition-colors duration-300 ${
              filter === type
                ? darkMode
                  ? 'bg-green-neon text-dark-bg'
                  : 'bg-dark-green text-light-bg'
                : darkMode
                ? 'bg-dark-bg border border-green-neon/50 text-green-neon hover:bg-green-neon/10'
                : 'bg-light-bg border border-dark-green/50 text-dark-green hover:bg-dark-green/10'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Grid of Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            onClick={() => onSkillClick(skill)}
            className={`p-3 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              darkMode
                ? 'bg-dark-bg border border-green-neon/30 hover:border-green-neon'
                : 'bg-light-bg border border-dark-green/30 hover:border-dark-green'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${
                darkMode
                  ? 'bg-dark-bg/50 border border-green-neon/50'
                  : 'bg-light-bg/50 border border-dark-green/50'
              }`}>
                <i className={`${skill.icon} text-xl ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}></i>
              </div>
              <span className={`text-sm font-jetbrains ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;