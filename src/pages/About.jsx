// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative h-64 mb-12 rounded-lg overflow-hidden">
        <img 
          src="/assets/images/pexels-equalstock-20356777.jpg"
          alt="About Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl font-bold text-white absolute bottom-8 left-8">
          About Us
        </h1>
      </div>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              Shop for Change is a fair trade organization committed to empowering farmers and artisans
              across rural India through sustainable market access and fair trade practices.
            </p>
            <p className="text-gray-700">
              Our journey began with a simple idea: to create lasting change through trade, not aid.
              Today, we're proud to work with thousands of rural artisans and farmers.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/assets/images/pexels-alex-jaison-1690209427-29039798.jpg"
              alt="Rural Artisans"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To create sustainable livelihoods for rural communities through fair trade and
              market linkages, while promoting environmental conservation.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              A world where rural communities thrive through fair trade, sustainable practices,
              and dignified livelihoods.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Fair Trade</h3>
            <p className="text-gray-700">Ensuring equitable compensation and transparent practices</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-700">Promoting environmentally conscious practices</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Community Empowerment</h3>
            <p className="text-gray-700">Building strong, self-reliant communities</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/assets/images/pexels-equalstock-20344342.jpg"
              alt="Our Journey"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Since our establishment in 2009, Shop for Change has been working tirelessly to
              bridge the gap between rural producers and urban markets.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>2009: Organization founded</li>
              <li>2015: Reached 10,000 farmers</li>
              <li>2018: Launched digital literacy program</li>
              <li>2020: Established climate action initiative</li>
              <li>2023: Impacted 50,000+ lives</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;