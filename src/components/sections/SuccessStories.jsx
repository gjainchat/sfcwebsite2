// src/components/sections/SuccessStories.jsx
import React, { useState } from 'react';

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      name: "Lakshmi",
      role: "Artisan",
      story: "Through Shop for Change, I've increased my income by 40% and can now send my children to school.",
      image: "/assets/images/pexels-equalstock-20515625.jpg"
    },
    {
      name: "Rajesh",
      role: "Farmer",
      story: "The sustainable farming practices I learned have doubled my crop yield while protecting the environment.",
      image: "/assets/images/pexels-equalstock-20344342.jpg"
    },
    {
      name: "Priya",
      role: "Community Leader",
      story: "Our village has transformed since partnering with Shop for Change. We now have a library and digital center.",
      image: "/assets/images/pexels-equalstock-20344363.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              ←
            </button>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
                    <img
                      src={stories[currentSlide].image}
                      alt={stories[currentSlide].name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-lg mb-4">{stories[currentSlide].story}</p>
                  <div className="font-semibold">{stories[currentSlide].name}</div>
                  <div className="text-gray-600">{stories[currentSlide].role}</div>
                </div>
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              →
            </button>
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;