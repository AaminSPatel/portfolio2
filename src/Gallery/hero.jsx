import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.getElementById('parallax');
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.4 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="parallax"
      className="relative flex items-center justify-center h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url('./bg6.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black flex justify-center items-center bg-opacity-50">
        <h1 className="relative text-white text-5xl font-bold text-center z-10">
        Hi,This is  <span className='text-red-500'>Aamin Patel</span>
      </h1>
      </div>
      
    </section>
  );
};

export default Hero;
