// src/components/sections/ImpactMetrics.jsx
import React, { useEffect, useState } from 'react';

const CounterAnimation = ({ endValue, duration, icon, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(endValue * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1">{count}</div>
      <div className="text-gray-600">{text}</div>
    </div>
  );
};

const ImpactMetrics = () => {
  const metrics = [
    { icon: "🌳", count: 65000, text: "Trees Planted" },
    { icon: "👩‍🌾", count: 50000, text: "Lives Impacted" },
    { icon: "🧵", count: 800, text: "Tribal Families Empowered" },
    { icon: "🏫", count: 5, text: "Libraries Established" },
    { icon: "🛒", count: 30, text: "Average Increase in Farmer Incomes" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {metrics.map((metric, index) => (
            <CounterAnimation
              key={index}
              endValue={metric.count}
              duration={2000}
              icon={metric.icon}
              text={metric.text}
            />
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600 italic">
          Driving sustainable rural transformation across India
        </p>
      </div>
    </section>
  );
};

export default ImpactMetrics;