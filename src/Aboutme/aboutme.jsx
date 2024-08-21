import React, { useState } from 'react';

const AboutMe = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section className="relative py-12 px-4 bg-gray-100 dark:bg-gray-800">
      {/* SVG Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,80C160,96,320,128,480,160C640,192,800,224,960,208C1120,192,1280,128,1360,96L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill="teal"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 mb-28 md:mb-0 flex justify-center">
          <div className="relative bg-sky-700 rounded-full scale-105 p-4">
            <img
              src="../user2.jpeg"
              alt="Main Image"
              className="rounded-full hover:scale-105 hover:border-none transition-all  hover:z-50 shadow-lg h-72 w-72 "
            />
            
          </div>
        </div>

        {/* About Me Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-cursive text-teal-600 dark:text-teal-300 mb-4">
            About Me
          </h2>
          <p className={`text-lg text-gray-700 dark:text-gray-300 ${showFullText ? '' : 'line-clamp-3'}`}>
            I am a passionate photo and video editor with over five years of experience in creating visually appealing and engaging content. My expertise lies in crafting high-quality visuals that capture the essence of the moment, whether it's a stunning photograph or an immersive video.
            <br />
            My journey started with a simple camera, and over the years, I've honed my skills to become proficient in various editing software. I am constantly exploring new techniques and trends to deliver the best results for my clients.
            <br />
            Beyond editing, I have a keen eye for photography and enjoy capturing moments that tell a story. My work reflects my dedication to the craft and my commitment to delivering excellence in every project.
            <br />
            {showFullText && (
              <>
                <br />
                Whether you need professional photo retouching, video editing, or creative photography services, I am here to bring your vision to life. Let's collaborate and create something extraordinary together.
                <br />
              </>
            )}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <button
              onClick={toggleText}
              className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition"
            >
              {showFullText ? 'Read Less' : 'Read More'}
            </button>
            <button
              onClick={() => window.open('/path/to/cv.pdf', '_blank')}
              className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition"
            >
              Download My CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
