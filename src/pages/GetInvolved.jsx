// src/pages/GetInvolved.jsx
import React from 'react';
import { useLocalStorage } from '../utils/localStorage';

const GetInvolved = () => {
  const [volunteerCount, setVolunteerCount] = useLocalStorage('volunteer-count', 0);

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setVolunteerCount(prevCount => prevCount + 1);
    alert('Thank you for volunteering! We will contact you soon.');
    e.target.reset();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Get Involved</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Volunteer With Us</h2>
        <div className="bg-green-50 p-8 rounded-lg">
          <p className="text-gray-700 mb-6">
            Join our mission to create sustainable change in rural communities.
            We welcome volunteers who can contribute their skills and time.
          </p>
          <form onSubmit={handleVolunteerSubmit} className="max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded border"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded border"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Skills</label>
              <textarea
                className="w-full px-4 py-2 rounded border"
                rows="3"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Register as Volunteer
            </button>
          </form>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">CSR Partnership</h2>
        <div className="bg-blue-50 p-8 rounded-lg">
          <p className="text-gray-700 mb-4">
            Partner with us for your CSR initiatives. Our programs align with
            multiple SDGs and create measurable social impact.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Environment Conservation</li>
            <li>Rural Development</li>
            <li>Women Empowerment</li>
            <li>Digital Literacy</li>
          </ul>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Discuss Partnership
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Donate</h2>
        <div className="bg-yellow-50 p-8 rounded-lg">
          <p className="text-gray-700 mb-6">
            Support our mission with a donation. Every contribution helps us
            create sustainable impact in rural communities.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">₹1000</h3>
              <p className="text-gray-600">Plants 10 trees</p>
            </div>
            <div className="border p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">₹5000</h3>
              <p className="text-gray-600">Supports 1 farmer family</p>
            </div>
            <div className="border p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">₹10000</h3>
              <p className="text-gray-600">Establishes micro-enterprise</p>
            </div>
          </div>
          <button
            className="mt-8 bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400"
          >
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;