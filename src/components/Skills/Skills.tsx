import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { InfiniteMovingCards } from '../common/InfiniteMovingCards';
import SkillCard from './SkillCard';
import SkillGrid from './SkillGrid';
import SkillModal from './SkillModal';
import { SkillProps } from '../../types';

const Skills: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedSkill, setSelectedSkill] = useState<SkillProps | null>(null);
  const [showGrid, setShowGrid] = useState(false);
  
  const skills: SkillProps[] = [
    { 
      name: 'React', 
      icon: 'fab fa-react', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      description: 'A JavaScript library for building user interfaces, particularly single-page applications.',
      type: 'frontend',
      experience: 'Over 3 years of experience building complex applications with React, Redux, and React Router.'
    },
    { 
      name: 'TypeScript', 
      icon: 'fab fa-js-square', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
      description: 'A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
      type: 'frontend',
      experience: '2+ years using TypeScript in production applications, creating type-safe code and interfaces.'
    },
    { 
      name: 'HTML5', 
      icon: 'fab fa-html5', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
      description: 'The latest evolution of the standard that defines HTML, including new elements and APIs.',
      type: 'frontend',
      experience: '5+ years of experience with semantic HTML, accessibility, and modern web standards.'
    },
    { 
      name: 'CSS3', 
      icon: 'fab fa-css3-alt', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
      description: 'The latest evolution of the Cascading Style Sheets language, with new features like flexbox and grid.',
      type: 'frontend',
      experience: 'Expert in responsive design, animations, and modern CSS frameworks like Tailwind CSS.'
    },
    { 
      name: 'Node.js', 
      icon: 'fab fa-node-js', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
      type: 'backend',
      experience: '2 years building RESTful APIs, microservices, and server-side applications with Express.js.'
    },
    { 
      name: 'Git', 
      icon: 'fab fa-git-alt', 
      image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      description: 'A distributed version control system for tracking changes in source code during software development.',
      type: 'devops',
      experience: 'Daily use of Git for version control, branching strategies, and collaborative development.'
    },
    { 
      name: 'UI/UX', 
      icon: 'fas fa-paint-brush', 
      image: 'https://cdn-icons-png.flaticon.com/512/5692/5692284.png',
      description: 'The process of designing user interfaces and experiences that are intuitive, efficient, and enjoyable.',
      type: 'design',
      experience: 'Created wireframes, prototypes, and user flows for multiple web and mobile applications.'
    },
    { 
      name: 'Responsive', 
      icon: 'fas fa-mobile-alt', 
      image: 'https://cdn-icons-png.flaticon.com/512/2920/2920329.png',
      description: 'Design approach that makes web pages render well on a variety of devices and window or screen sizes.',
      type: 'frontend',
      experience: 'Implemented mobile-first designs and responsive layouts for dozens of websites and applications.'
    },
    { 
      name: 'MongoDB', 
      icon: 'fas fa-database', 
      image: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png',
      description: 'A NoSQL database that uses JSON-like documents with optional schemas.',
      type: 'database',
      experience: 'Built and maintained several applications using MongoDB as the primary database.'
    },
    { 
      name: 'Docker', 
      icon: 'fab fa-docker', 
      image: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
      description: 'A platform for developing, shipping, and running applications in containers.',
      type: 'devops',
      experience: 'Created and managed Docker containers for development and production environments.'
    }
  ];

  // Create skill cards for the infinite scroller
  const skillCards = skills.map((skill, index) => (
    <SkillCard
      key={index}
      name={skill.name}
      icon={skill.icon}
      image={skill.image}
      description={skill.description}
      type={skill.type}
      experience={skill.experience}
    />
  ));

  const toggleGrid = () => {
    setShowGrid(!showGrid);
  };

  return (
    <section id="skills" className={`py-16 md:py-24 ${darkMode ? 'bg-dark-bg/80' : 'bg-light-bg/80'} transition-colors duration-300 relative overflow-hidden`}>
      {/* Cyberpunk decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-neon to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-magenta-neon to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron ${darkMode ? 'text-green-neon' : 'text-dark-green'} relative inline-block mx-auto`}>
          <span className="relative z-10">TECH_SKILLS</span>
          <span className={`absolute -bottom-2 left-0 w-full h-1 ${darkMode ? 'bg-magenta-neon' : 'bg-dark-purple'}`}></span>
        </h2>
        
        <div className="flex justify-between items-center mb-10">
          <p className={`max-w-2xl font-jetbrains ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
            Explore my technical skills and expertise. Click on any card to see more details.
          </p>
          
          <button 
            onClick={toggleGrid}
            className={`px-4 py-2 rounded-md text-sm font-jetbrains ${
              darkMode 
                ? 'bg-dark-bg border border-green-neon text-green-neon hover:bg-green-neon/10' 
                : 'bg-light-bg border border-dark-green text-dark-green hover:bg-dark-green/10'
            } transition-colors duration-300 flex items-center`}
          >
            <i className={`fas ${showGrid ? 'fa-th-large' : 'fa-list'} mr-2`}></i>
            {showGrid ? 'Show Cards' : 'Quick View'}
          </button>
        </div>
        
        {!showGrid && (
          <div className="mb-8 -mx-4 py-4">
            <InfiniteMovingCards
              items={skillCards}
              direction="left"
              speed="slow"
              pauseOnHover={true}
              className="py-4"
            />
          </div>
        )}
        
        {showGrid && (
          <SkillGrid 
            skills={skills} 
            onSkillClick={(skill) => setSelectedSkill(skill)} 
          />
        )}
        
        {/* Cyberpunk decorative element - just keeping the divider without the button */}
        <div className={`w-full h-px my-8 ${darkMode ? 'bg-green-neon/30' : 'bg-dark-green/30'} relative`}>
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px ${darkMode ? 'bg-magenta-neon' : 'bg-dark-purple'}`}></div>
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${darkMode ? 'bg-green-neon' : 'bg-dark-green'}`}></div>
        </div>
      </div>
      
      {/* Skill Modal */}
      {selectedSkill && (
        <SkillModal 
          skill={selectedSkill} 
          onClose={() => setSelectedSkill(null)} 
        />
      )}
    </section>
  );
};

export default Skills;