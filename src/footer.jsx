import React from 'react';
import './Footer.css'; // Include your CSS file for additional styles

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-100 pt-16">
      {/* Wave Effect */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden">
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1a202c"
            fillOpacity="1"
            d="M0,64L30,90.7C60,117,120,171,180,197.3C240,224,300,224,360,192C420,160,480,96,540,64C600,32,660,32,720,64C780,96,840,160,900,170.7C960,181,1020,139,1080,122.7C1140,107,1200,117,1260,144C1320,171,1380,213,1410,234.7L1440,256V320H1410C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
          />
        </svg>
      </div>
      
      {/* Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="mb-6 md:mb-0">
              <a href="https://facebook.com" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://telegram.org" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="Telegram">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://linkedin.com" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://snapchat.com" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="Snapchat">
                <i className="fab fa-snapchat-ghost"></i>
              </a>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-sm">
              <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
