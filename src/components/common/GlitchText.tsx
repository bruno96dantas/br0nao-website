import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ children, className = '' }) => {
  const { darkMode } = useContext(ThemeContext);
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  return (
    <span 
      className={`relative inline-block ${className} font-orbitron`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      <span className={`${isGlitching ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
        {children}
      </span>
      
      {isGlitching && (
        <>
          <span className={`absolute top-0 left-0 ${darkMode ? 'text-magenta-neon' : 'text-dark-purple'} transform translate-x-[1px] translate-y-[-1px]`}>
            {children}
          </span>
          <span className={`absolute top-0 left-0 ${darkMode ? 'text-green-neon' : 'text-dark-green'} transform translate-x-[-1px] translate-y-[1px]`}>
            {children}
          </span>
        </>
      )}
    </span>
  );
};