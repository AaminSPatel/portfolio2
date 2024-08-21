import React, { useState } from 'react';
//import './SkillsSection.css'; // Ensure this CSS file contains styles for both light and dark themes

const skills = [
  { name: 'Video Editing', icon: '🎬', rating: 4 },
  { name: 'Photo Editing', icon: '📷', rating: 5 },
  { name: 'Graphic Design', icon: '🎨', rating: 4 },
  { name: 'Photography', icon: '📸', rating: 5 },
  { name: 'Adobe Premiere Pro', icon: '🎞️', rating: 4 },
  { name: 'Photoshop', icon: '🖼️', rating: 5 },
  { name: 'Illustrator', icon: '✏️', rating: 4 },
  { name: 'Lightroom', icon: '🌅', rating: 4 },
];

const SkillsSection = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
    document.body.classList.toggle('dark-theme', !darkTheme);
  };

  return (
    <section className="skills-section">
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
      <div className="skills-container">
        {skills.map(skill => (
          <div key={skill.name} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-rating">
              {'⭐'.repeat(skill.rating)}{'★'.repeat(5 - skill.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
