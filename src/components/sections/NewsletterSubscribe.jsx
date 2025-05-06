// src/components/sections/NewsletterSubscribe.jsx
import React, { useState } from 'react';
import { useLocalStorage } from '../../utils/localStorage';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useLocalStorage('newsletter-subscribed', false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    // Store subscription in localStorage
    setSubscribed(true);
    setMessage('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <section className="bg-green-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-8">
            Subscribe to our newsletter for updates on our impact and opportunities to get involved.
          </p>
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-full text-black flex-grow max-w-md"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black px-8 py-2 rounded-full font-semibold hover:bg-yellow-400"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block">
              {message}
            </div>
          )}
          {message && !subscribed && (
            <p className="mt-4 text-red-200">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;