import React, { useState } from 'react';

// Define your skill list
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
    document.body.classList.toggle('dark', !darkTheme);
  };

  return (
    <section className={`p-4 ${darkTheme ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <button
        className="mb-4 px-4 py-2 bg-teal-400 text-white rounded-lg focus:outline-none transition-colors duration-300 hover:bg-teal-500"
        onClick={toggleTheme}
      >
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="p-4 bg-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <div className="text-xl mb-2">{skill.name}</div>
            <div className="flex">
              {'⭐'.repeat(skill.rating)}
              {'★'.repeat(5 - skill.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
