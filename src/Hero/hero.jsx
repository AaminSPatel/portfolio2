// src/HeroSection.js

import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax');
      const scrollPosition = window.scrollY;
      parallax.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="parallax absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(./bg5.jpg)' }}>
        <div className="flex items-center justify-center h-full w-full bg-black bg-opacity-40">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Your Name</h1>
            <p className="text-xl mb-2">Passionate about Web Development</p>
            <p className="text-lg">"Crafting seamless digital experiences"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
