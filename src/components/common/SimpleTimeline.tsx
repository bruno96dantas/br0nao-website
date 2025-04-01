import React from "react";

interface TimelineProps {
  items: {
    title: string;
    description: string;
    date: string;
    company?: string;
  }[];
  darkMode: boolean;
}

export const SimpleTimeline: React.FC<TimelineProps> = ({
  items,
  darkMode,
}) => {
  console.log("Timeline component rendering with", items.length, "items");
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className={`absolute left-8 top-6 bottom-6 w-1 ${darkMode ? "bg-cyan-500/30" : "bg-purple-500/30"} hidden md:block`} />
      
      {items.map((item, index) => (
        <div 
          key={index}
          className={`${darkMode ? "bg-gray-900/80 border border-cyan-500/30" : "bg-white border border-purple-500/30"} p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] relative mb-8`}
        >
          <div className={`absolute -left-3 top-6 w-6 h-6 rounded-full ${darkMode ? "bg-cyan-400" : "bg-purple-600"} hidden md:block`} />
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className={`text-xl font-bold ${darkMode ? "text-cyan-400" : "text-purple-600"} cyberpunk-font`}>
              {item.title}
            </h3>
            <div className={`text-sm ${darkMode ? "text-pink-400" : "text-indigo-500"} mt-2 md:mt-0 cyberpunk-font`}>
              {item.date}
            </div>
          </div>
          <h4 className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"} mb-3`}>
            {item.company}
          </h4>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} cyberpunk-text`}>
            {item.description}
          </p>
          <div className={`absolute top-0 right-0 w-20 h-1 ${darkMode ? "bg-cyan-500" : "bg-purple-600"}`} />
          <div className={`absolute top-0 right-0 w-1 h-20 ${darkMode ? "bg-cyan-500" : "bg-purple-600"}`} />
        </div>
      ))}
    </div>
  );
};