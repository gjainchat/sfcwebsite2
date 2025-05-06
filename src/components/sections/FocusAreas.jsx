// src/components/sections/FocusAreas.jsx
import React from 'react';

const FocusAreas = () => {
  const areas = [
    {
      icon: "🛒",
      title: "Market Linkage",
      description: "Connecting farmers directly to consumers"
    },
    {
      icon: "🌿",
      title: "Climate Action",
      description: "Greening rural India with tree plantations and vetiver bunds"
    },
    {
      icon: "👩‍👩‍👧‍👦",
      title: "Livelihood Development",
      description: "Building sustainable incomes for rural communities"
    },
    {
      icon: "📱",
      title: "Technology for Impact",
      description: "AI literacy, digital education, smart farming"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;