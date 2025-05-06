// src/pages/Contact.jsx
import React, { useState } from 'react';
import { useLocalStorage } from '../utils/localStorage';

const Contact = () => {
  const [submitted, setSubmitted] = useLocalStorage('contact-submitted', false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Store form data in localStorage
    localStorage.setItem('contact-form', JSON.stringify(formData));
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border"
              >
                <option value="">Select a subject</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="volunteer">Volunteering</option>
                <option value="donation">Donation Query</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 rounded border"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Office Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Head Office</h3>
              <p className="text-gray-700">
                123 Rural Development Road<br />
                Mumbai, Maharashtra 400001<br />
                India
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-700">
                Email: contact@shopforchange.org<br />
                Phone: +91 22 1234 5678
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-green-600">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-green-600">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-green-600">Facebook</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;