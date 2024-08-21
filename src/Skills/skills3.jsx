import React, { useState } from 'react';
import { FaVideo, FaCamera, FaPaintBrush, FaPhotoVideo, FaStar } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobelightroom, SiAdobepremierepro } from 'react-icons/si';

const skills = [
  { name: 'Video Editing', icon: <FaVideo />, rating: 4 },
  { name: 'Photo Editing', icon: <FaCamera />, rating: 5 },
  { name: 'Graphic Design', icon: <FaPaintBrush />, rating: 4 },
  { name: 'Photography', icon: <FaPhotoVideo />, rating: 5 },
  { name: 'Adobe Premiere Pro', icon: <SiAdobepremierepro />, rating: 4 },
  { name: 'Photoshop', icon: <SiAdobephotoshop />, rating: 5 },
  { name: 'Illustrator', icon: <SiAdobeillustrator />, rating: 4 },
  { name: 'Lightroom', icon: <SiAdobelightroom />, rating: 4 },
];

const SkillsSection = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
    document.documentElement.classList.toggle('dark', !darkTheme);
  };

  return (
    <section className="py-8 px-4">
      <button
        className="px-4 py-2 mb-8 bg-indigo-600 text-white rounded-md transition-colors duration-300 hover:bg-indigo-500"
        onClick={toggleTheme}
      >
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="p-6 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <div className="text-xl font-bold mb-2">{skill.name}</div>
            <div className="text-yellow-500 flex">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < skill.rating ? 'text-yellow-500' : 'text-black'}
              />
            ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
