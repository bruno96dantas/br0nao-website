import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface SkillCardProps {
  name: string;
  icon: string;
  image: string;
  description: string;
  type: string;
  experience: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  icon,
  image,
  description,
  type,
  experience
}) => {
  const { darkMode } = useContext(ThemeContext);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    if (!isExpanded) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

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
    
    return types[type] || types.default;
  };

  const typeColor = getTypeColor();
  
  // Calculate a level based on the type (just for visual effect)
  const level = Math.floor(Math.random() * 5) + 5; // Random level between 5-9

  return (
    <div 
      className={`relative ${isExpanded ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/70' : 'w-64 h-96'}`}
      onClick={isExpanded ? () => setIsExpanded(false) : undefined}
    >
      <div 
        className={`
          ${isExpanded ? 'w-[90%] max-w-md h-auto' : 'w-64 h-96'} 
          relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 transform
          ${isFlipped ? 'rotate-y-180' : ''}
          ${isExpanded ? 'scale-100' : 'hover:scale-105'}
        `}
        onClick={isExpanded ? undefined : handleCardClick}
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        {/* Card Front */}
        <div 
          className={`absolute inset-0 ${isFlipped ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500
            ${darkMode ? 'bg-dark-bg border-2 border-green-neon' : 'bg-light-bg border-2 border-dark-green'}
            rounded-xl overflow-hidden`}
        >
          {/* Card Header */}
          <div className={`h-12 bg-gradient-to-r ${darkMode ? typeColor.dark : typeColor.light} flex items-center justify-between px-4`}>
            <span className="font-orbitron text-white font-bold">{name}</span>
            <span className="font-orbitron text-white text-sm">LVL {level}</span>
          </div>
          
          {/* Card Image */}
          <div className="h-48 flex items-center justify-center p-2 relative">
            <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-dark-bg/0 to-dark-bg/80' : 'from-light-bg/0 to-light-bg/80'}`}></div>
            <img 
              src={image || `https://placehold.co/200x200?text=${name}`} 
              alt={name} 
              className="max-h-full max-w-full object-contain relative z-10"
            />
          </div>
          
          {/* Card Stats */}
          <div className="p-4">
            <div className="flex items-center mb-2">
              <i className={`${icon} text-xl mr-2 ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}></i>
              <span className={`font-jetbrains ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>{type.toUpperCase()}</span>
            </div>
            
            <div className={`text-xs font-jetbrains mt-4 ${darkMode ? 'text-dark-text/70' : 'text-light-text/70'}`}>
              Tap card to see details
            </div>
          </div>
          
          {/* Card Footer */}
          <div className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r ${darkMode ? typeColor.dark : typeColor.light} flex items-center justify-center`}>
            <span className="font-orbitron text-white text-xs">TECH SKILL CARD</span>
          </div>
        </div>
        
        {/* Card Back */}
        <div 
          className={`absolute inset-0 ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500
            ${darkMode ? 'bg-dark-bg border-2 border-magenta-neon' : 'bg-light-bg border-2 border-dark-purple'}
            rounded-xl overflow-hidden rotate-y-180`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Card Header */}
          <div className={`h-12 bg-gradient-to-r ${darkMode ? 'from-magenta-neon to-green-neon/70' : 'from-dark-purple to-dark-green/70'} flex items-center justify-between px-4`}>
            <span className="font-orbitron text-white font-bold">{name}</span>
            <button 
              onClick={handleExpandClick}
              className={`w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-dark-bg text-green-neon' : 'bg-light-bg text-dark-green'}`}
            >
              <i className="fas fa-expand-alt text-xs"></i>
            </button>
          </div>
          
          {/* Card Content */}
          <div className="p-4 h-[calc(100%-4rem)]">
            <h3 className={`text-lg font-orbitron mb-2 ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}>Description</h3>
            <p className={`text-sm font-jetbrains mb-4 ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
              {description}
            </p>
            
            <h3 className={`text-lg font-orbitron mb-2 ${darkMode ? 'text-green-neon' : 'text-dark-green'}`}>Experience</h3>
            <p className={`text-sm font-jetbrains ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
              {experience}
            </p>
            
            <div className={`absolute bottom-4 left-4 right-4 text-xs font-jetbrains ${darkMode ? 'text-dark-text/70' : 'text-light-text/70'} text-center`}>
              Tap card to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;