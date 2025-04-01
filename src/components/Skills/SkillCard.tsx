import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { SkillProps } from '../../types';

interface SkillCardProps {
  skill: SkillProps;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={`${darkMode ? 'bg-gray-800 border border-cyan-500/30' : 'bg-white border border-purple-500/30'} p-6 rounded-lg transition-all duration-300 hover:shadow-neon relative overflow-hidden group`}>
      <div className={`absolute inset-0 ${darkMode ? 'bg-cyan-500/5' : 'bg-purple-500/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className="flex items-center mb-4 relative z-10">
        <div className={`w-12 h-12 ${darkMode ? 'bg-cyan-500/20' : 'bg-purple-500/20'} rounded-lg flex items-center justify-center mr-4`}>
          <i className={`${skill.icon} text-2xl ${darkMode ? 'text-cyan-400' : 'text-purple-600'}`}></i>
        </div>
        <h3 className={`text-xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'} cyberpunk-font`}>{skill.name}</h3>
      </div>
      <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5 mb-1 overflow-hidden`}>
        <div 
          className={`${darkMode ? 'bg-cyan-500' : 'bg-purple-600'} h-2.5 rounded-full cyberpunk-progress`} 
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
      <div className="flex justify-between">
        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} cyberpunk-font`}>PROFICIENCY</span>
        <span className={`text-xs ${darkMode ? 'text-cyan-400' : 'text-purple-600'} cyberpunk-font`}>{skill.proficiency}%</span>
      </div>
    </div>
  );
};

export default SkillCard;