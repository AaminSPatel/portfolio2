import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      })
      .catch((error) => {
        setStatus('Failed to send message.');
        console.error('Error sending email:', error);
      });
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-teal-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition-colors duration-300"
            >
              Send
            </button>
            {status && <p className="mt-4 text-lg">{status}</p>}
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="w-full md:w-1/2 bg-teal-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-teal-500 text-xl mr-3" />
            <p>Your Location</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-teal-500 text-xl mr-3" />
            <p>your-email@example.com</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-teal-500 text-xl mr-3" />
            <p>+1234567890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
