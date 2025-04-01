import React, { useEffect, useRef, useState } from "react";

interface TimelineProps {
  items: {
    title: string;
    description: string;
    date: string;
    company?: string;
  }[];
  darkMode: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  darkMode,
}) => {
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(items.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setIsVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      itemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className={`absolute left-8 top-6 bottom-6 w-1 ${darkMode ? "bg-green-neon/30" : "bg-dark-green/30"} hidden md:block`} />
      
      {items.map((item, index) => (
        <div 
          key={index}
          ref={el => itemRefs.current[index] = el}
          className={`${darkMode ? "bg-dark-bg/80 border border-green-neon/30" : "bg-light-bg/80 border border-dark-green/30"} 
            p-6 rounded-lg shadow-lg transition-all duration-700 relative mb-8 ml-12 md:ml-0
            ${isVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <div 
            className={`absolute -left-3 top-6 w-6 h-6 rounded-full ${darkMode ? "bg-green-neon" : "bg-dark-green"} hidden md:block
              transition-transform duration-500 ${isVisible[index] ? 'scale-100' : 'scale-0'}`}
            style={{ transitionDelay: `${index * 200 + 300}ms` }}
          />
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className={`text-xl font-bold ${darkMode ? "text-green-neon" : "text-dark-green"} font-orbitron`}>
              {item.title}
            </h3>
            <div className={`text-sm ${darkMode ? "text-magenta-neon" : "text-dark-purple"} mt-2 md:mt-0 font-orbitron`}>
              {item.date}
            </div>
          </div>
          <h4 className={`text-lg ${darkMode ? "text-dark-text" : "text-light-text"} mb-3 font-jetbrains`}>
            {item.company}
          </h4>
          <p className={`${darkMode ? "text-dark-text/80" : "text-light-text/80"} font-jetbrains`}>
            {item.description}
          </p>
          <div 
            className={`absolute top-0 right-0 h-1 ${darkMode ? "bg-green-neon" : "bg-dark-green"} transition-all duration-500`}
            style={{ 
              width: isVisible[index] ? '5rem' : '0',
              transitionDelay: `${index * 200 + 400}ms`
            }}
          />
          <div 
            className={`absolute top-0 right-0 w-1 ${darkMode ? "bg-green-neon" : "bg-dark-green"} transition-all duration-500`}
            style={{ 
              height: isVisible[index] ? '5rem' : '0',
              transitionDelay: `${index * 200 + 500}ms`
            }}
          />
        </div>
      ))}
    </div>
  );
};