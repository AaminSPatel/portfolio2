import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling

const Header = () => {
  return (
    <header className="relative bg-teal-700  text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-semibold text-yellow-400">Aamin Patel</h1>
        <nav className="flex space-x-6">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-300 transition-colors"
          >
            About Me
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-300 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-300 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
 {/* SVG Wave Effect */}
    {/*  
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-24"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L30,101.3C60,139,120,213,180,234.7C240,256,300,224,360,202.7C420,181,480,171,540,154.7C600,139,660,117,720,106.7C780,96,840,96,900,106.7C960,117,1020,139,1080,133.3C1140,128,1200,96,1260,74.7C1320,53,1380,43,1410,37.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </header>
  );
};

export default Header;
