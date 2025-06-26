// filepath: /Users/jamesprice/Developer/GitHub-Repos/Portfoliov2/client/src/pages/Technologies.jsx
import React, { useState, useEffect } from "react";
import './styles/Technologies.scss';
import blob from "../images/blob/blob.svg";

const Technologies = () => {
  const [filter, setFilter] = useState('all');
  const [animatedItems, setAnimatedItems] = useState([]);

  // Sample tech stack data with reliable icon URLs
  const techStack = [
    { name: 'JavaScript', category: 'frontend', level: 90, experience: '2 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'React', category: 'frontend', level: 85, experience: '1,5 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'HTML/CSS', category: 'frontend', level: 95, experience: '3 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'Tailwind CSS', category: 'frontend', level: 70, experience: '1 year', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Python', category: 'backend', level: 65, experience: '3 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'MongoDB', category: 'database', level: 70, experience: '2 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    { name: 'SQL', category: 'database', level: 80, experience: '2 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'},
    // { name: 'Docker', category: 'devops', level: 60, experience: '2 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
    { name: 'Azure', category: 'devops', level: 65, experience: '0.5 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg' },
    { name: 'Git', category: 'tools', level: 75, experience: '2.5 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'TypeScript', category: 'frontend', level: 65, experience: '1 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    // { name: 'Redux', category: 'frontend', level: 80, experience: '3 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' },
    { name: 'Node.js', category: 'backend', level: 80, experience: '2 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', category: 'backend', level: 75, experience: '2 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
    // { name: 'GraphQL', category: 'backend', level: 65, experience: '2 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg' },
    { name: 'Figma', category: 'design', level: 50, experience: '1.5 years', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' }
  ];

  const categories = [...new Set(techStack.map(tech => tech.category))];

  useEffect(() => {
    // Animate items on load and when filter changes
    const timer = setTimeout(() => {
      setAnimatedItems(techStack.filter(tech =>
        filter === 'all' || tech.category === filter
      ).map(tech => tech.name));
    }, 100);

    return () => clearTimeout(timer);
  }, [filter]);

  const handleFilterChange = (category) => {
    setAnimatedItems([]);
    setFilter(category);
  };

  return (
    <div className="technologies-container">
      <div className="blob-background">
        <div className="tech-blob">
          <img src={blob} alt="Decorative blob" />
        </div>
        <div className="tech-blob">
          <img src={blob} alt="Decorative blob" />
        </div>
      </div>

      <h1>My Technology Stack</h1>
      <p className="intro">
        As a developer, I've worked with a wide range of technologies across different domains.
        Below are the key tools and frameworks I've mastered throughout my journey,
        showcasing both my proficiency level and years of experience with each technology.
      </p>

      <div className="tech-categories">
        <button
          className={`category-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${filter === category ? 'active' : ''}`}
            onClick={() => handleFilterChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="tech-grid">
        {techStack
          .filter(tech => filter === 'all' || tech.category === filter)
          .map(tech => (
            <div
              key={tech.name}
              className={`tech-card ${animatedItems.includes(tech.name) ? 'animate-in' : ''}`}
            >
              <div className="tech-header">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="tech-icon"
                />
                <h3 className="tech-name">{tech.name}</h3>
              </div>

              <div className="tech-details">
                <div className="skill-level">
                  <span className="level-label">Proficiency</span>
                  <div className="level-indicator">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`star ${star <= Math.round(tech.level/20) ? 'filled' : 'empty'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="experience-badge">
                  {tech.experience}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Technologies;
