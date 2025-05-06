// src/components/layout/TopBar.jsx
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-green-800 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="mailto:contact@shopforchange.org" className="text-sm hover:text-green-200">
            contact@shopforchange.org
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-green-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-green-200" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-green-200" />
            </a>
          </div>
          <button className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-yellow-400">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;