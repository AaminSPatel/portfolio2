// src/Footer.js

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 relative">
      {/* SVG background */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M0,0 L100,0 L100,100 L0,100 Z"
          fill="#11f827"
          animate={{
            d: [
              "M0,0 L100,0 L100,100 L0,100 Z",
              "M10,0 L90,0 L90,100 L10,100 Z",
              "M20,0 L80,0 L80,100 L20,100 Z",
              "M30,0 L70,0 L70,100 L30,100 Z",
              "M0,0 L100,0 L100,100 L0,100 Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
        />
      </svg>

      <div className="relative container mx-auto flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-6 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-2xl hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="text-2xl hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-2xl hover:text-gray-400 transition duration-300" />
            </a>
          </div>
          <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
