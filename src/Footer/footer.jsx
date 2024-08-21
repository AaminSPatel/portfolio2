import React from 'react';
//import './Footer.css'; // Include your CSS file for additional styles
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaTelegram, FaYoutube, FaSnapchat } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-teal-900 text-gray-100 pt-6">
      {/* Wave Effect */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden">
      <svg
        className=" w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#4f4ff5"
          fillOpacity="1"
          d=""
        >
          <animate
            attributeName="d"
            values="
               "
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      </div>
      
      {/* Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="mb-6 md:mb-0 flex text-xl">
              <a href="https://facebook.com" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="Facebook">
                <FaFacebookF/>
              </a>
              <a href="https://instagram.com" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="Instagram">
                <FaInstagram/>
              </a>
              <a href="https://telegram.org" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="Telegram">
                <FaTelegram/>
              </a>
              <a href="https://linkedin.com" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="LinkedIn">
                <FaLinkedinIn/>
              </a>
              <a href="https://youtube.com" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="YouTube">
                <FaYoutube/>
              </a>
              <a href="https://snapchat.com" className="mx-2 text-gray-100 hover:text-teal-400 transition-colors duration-300" aria-label="Snapchat">
                <FaSnapchat/>
              </a>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-sm">
              <p>&copy; {new Date().getFullYear()}<a href="https://aaminspatel.github.io/portfolio1/" className='cursor-pointer hover:text-teal-400 hover:text-lg' target="_blank" rel="noopener noreferrer"> Aamin Patel </a>. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
