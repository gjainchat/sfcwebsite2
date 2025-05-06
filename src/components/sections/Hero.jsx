// src/components/sections/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/pexels-equalstock-20344348.jpg')",
          filter: "brightness(0.7)"
        }}
      ></div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Fighting Poverty via Trade, Not Aid
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Empowering farmers and artisans through sustainable market access and fair trade
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/get-involved"
              className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors inline-block text-center"
            >
              Join the Movement
            </Link>
            <Link
              to="/get-involved"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-green-800 transition-colors inline-block text-center"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;