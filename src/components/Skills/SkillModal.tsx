import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { SkillProps } from '../../types';

interface SkillModalProps {
  skill: SkillProps | null;
  onClose: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose }) => {
  const { darkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);
  
  if (!skill) return null;
  
  const getTypeColor = () => {
    const types: Record<string, { light: string, dark: string }> = {
      frontend: { light: 'from-red-500 to-orange-500', dark: 'from-red-600 to-orange-600' },
      backend: { light: 'from-blue-500 to-cyan-500', dark: 'from-blue-600 to-cyan-600' },
      design: { light: 'from-purple-500 to-pink-500', dark: 'from-purple-600 to-pink-600' },
      database: { light: 'from-green-500 to-emerald-500', dark: 'from-green-600 to-emerald-600' },
      devops: { light: 'from-yellow-500 to-amber-500', dark: 'from-yellow-600 to-amber-600' },
      mobile: { light: 'from-indigo-500 to-violet-500', dark: 'from-indigo-600 to-violet-600' },
      default: { light: 'from-gray-500 to-slate-500', dark: 'from-gray-600 to-slate-600' }
    };
    
    return types[skill.type] || types.default;
  };
  
  const typeColor = getTypeColor();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <div 
        className={`w-full max-w-2xl rounded-xl overflow-hidden ${
          darkMode ? 'bg-dark-bg border-2 border-green-neon' : 'bg-light-bg border-2 border-dark-green'
        } animate-fadeIn`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`h-16 bg-gradient-to-r ${darkMode ? typeColor.dark : typeColor.light} flex items-center justify-between px-6`}>
          <div className="flex items-center">
            <i className={`${skill.icon} text-2xl mr-3 text-white`}></i>
            <h3 className="font-orbitron text-xl text-white">{skill.name}</h3>
          </div>
          <button 
            onClick={onClose}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-dark-bg text-green-neon hover:text-white' : 'bg-light-bg text-dark-green hover:text-black'
            } transition-colors duration-300`}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex justify-center">
              <div className={`w-full max-w-[200px] h-[200px] rounded-lg overflow-hidden border-2 ${
                darkMode ? 'border-green-neon/30' : 'border-dark-green/30'
              } p-2 flex items-center justify-center`}>
                <img 
                  src={skill.image} 
                  alt={skill.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="mb-4">
                <h4 className={`text-lg font-orbitron mb-2 ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}>
                  Description
                </h4>
                <p className={`font-jetbrains ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
                  {skill.description}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className={`text-lg font-orbitron mb-2 ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}>
                  Experience
                </h4>
                <p className={`font-jetbrains ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
                  {skill.experience}
                </p>
              </div>
              
              <div className="flex items-center mt-6">
                <span className={`px-4 py-1 rounded-full text-sm ${
                  darkMode 
                    ? 'bg-dark-bg border border-green-neon text-green-neon' 
                    : 'bg-light-bg border border-dark-green text-dark-green'
                }`}>
                  {skill.type.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal Footer */}
        <div className={`px-6 py-4 border-t ${darkMode ? 'border-green-neon/30' : 'border-dark-green/30'} flex justify-end`}>
          <button 
            onClick={onClose}
            className={`px-4 py-2 rounded-md font-jetbrains text-sm ${
              darkMode 
                ? 'bg-green-neon text-dark-bg hover:bg-green-neon/90' 
                : 'bg-dark-green text-light-bg hover:bg-dark-green/90'
            } transition-colors duration-300`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;