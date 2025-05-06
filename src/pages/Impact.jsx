// src/pages/Impact.jsx
import React from 'react';
import ImpactMetrics from '../components/sections/ImpactMetrics';
import SuccessStories from '../components/sections/SuccessStories';

const Impact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Impact</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Impact Overview</h2>
        <p className="text-gray-700 mb-6">
          At Shop for Change, we measure our success through the positive changes
          we bring to rural communities across India. Our impact spans environmental
          conservation, economic empowerment, and social development.
        </p>
        <ImpactMetrics />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Impact Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Economic Impact</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>30% average increase in farmer incomes</li>
              <li>800+ tribal families supported</li>
              <li>50+ village enterprises established</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Environmental Impact</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>65,000 trees planted</li>
              <li>500+ acres under organic farming</li>
              <li>20+ water conservation projects</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Social Impact</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>5 libraries established</li>
              <li>1000+ women entrepreneurs</li>
              <li>30+ digital literacy centers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Success Stories</h2>
        <SuccessStories />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8">Recognition</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Awards</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>National Social Innovation Award 2022</li>
              <li>Best NGO for Rural Development 2021</li>
              <li>Environmental Excellence Award 2020</li>
            </ul>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Certifications</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>ISO 9001:2015 Certified</li>
              <li>Fair Trade Certified</li>
              <li>CSR Registration: CSR00007165</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;