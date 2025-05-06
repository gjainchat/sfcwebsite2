// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shop for Change</h3>
            <p className="text-sm">
              Fighting poverty via trade, not aid. Empowering farmers and artisans through sustainable market access.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-green-200">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-green-200">Programs</Link></li>
              <li><Link to="/impact" className="hover:text-green-200">Impact</Link></li>
              <li><Link to="/get-involved" className="hover:text-green-200">Get Involved</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm">Email: contact@shopforchange.org</p>
            <div className="flex space-x-4 mt-4">
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
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Certifications</h4>
            <ul className="text-sm space-y-1">
              <li>NGO Registration: 2009</li>
              <li>CIN: U7499MH2009NPL189443</li>
              <li>CSR Registration: CSR00007165</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-green-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shop for Change Fair Trade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;