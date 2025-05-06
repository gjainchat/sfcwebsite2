// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/sections/Hero';
import ImpactMetrics from '../components/sections/ImpactMetrics';
import FocusAreas from '../components/sections/FocusAreas';
import SuccessStories from '../components/sections/SuccessStories';
import NewsletterSubscribe from '../components/sections/NewsletterSubscribe';

const Home = () => {
  return (
    <div>
      <Hero />
      <ImpactMetrics />
      <FocusAreas />
      <SuccessStories />
      <NewsletterSubscribe />
    </div>
  );
};

export default Home;