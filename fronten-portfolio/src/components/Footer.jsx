import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Designed and Developed by Pavan Kumar Kuruva
        </p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            &copy; 2024 Pavan Kumar Kuruv. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/PavanKumar529"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <AiFillGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/pavan-kumar529/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300"
          >
            <AiFillLinkedin className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/pavan_kumar_kuruva/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition-colors duration-300"
          >
            <AiFillInstagram className="text-2xl" />
          </a>
          <a
            href="mailto:pavankumarkuruva529@gmail.com"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            <AiFillMail className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
