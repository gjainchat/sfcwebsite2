// src/pages/Programs.jsx
import React from 'react';

const Programs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative h-64 mb-12 rounded-lg overflow-hidden">
        <img 
          src="/assets/images/pexels-equalstock-20344363.jpg"
          alt="Programs Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl font-bold text-white absolute bottom-8 left-8">
          Our Programs
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/assets/images/pexels-equalstock-20515625.jpg"
            alt="Market Linkage"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Market Linkage</h2>
            <p className="text-gray-700 mb-4">
              Connecting farmers and artisans directly to markets, ensuring fair prices and
              sustainable income streams.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Direct market access</li>
              <li>Fair price negotiations</li>
              <li>Quality control support</li>
              <li>Supply chain optimization</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/assets/images/pexels-equalstock-20356777.jpg"
            alt="Climate Action"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Climate Action</h2>
            <p className="text-gray-700 mb-4">
              Promoting sustainable farming practices and environmental conservation through
              tree plantations and soil conservation.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Tree plantation drives</li>
              <li>Vetiver cultivation</li>
              <li>Organic farming training</li>
              <li>Water conservation</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/assets/images/pexels-equalstock-20344348.jpg"
            alt="AI Literacy"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">AI Literacy</h2>
            <p className="text-gray-700 mb-4">
              Bridging the digital divide by providing AI and technology education to rural
              communities.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Basic computer skills</li>
              <li>AI awareness workshops</li>
              <li>Digital marketing training</li>
              <li>Online marketplace education</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/assets/images/pexels-alex-jaison-1690209427-29039798.jpg"
            alt="Women's Entrepreneurship"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Women's Entrepreneurship</h2>
            <p className="text-gray-700 mb-4">
              Empowering women through skill development, financial literacy, and
              entrepreneurship opportunities.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Business skills training</li>
              <li>Microfinance support</li>
              <li>Leadership development</li>
              <li>Market exposure visits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;