import React, { useState } from 'react';
import '../components/Contact.css'; // You can create a separate CSS file for the contact page if needed
import Footer from '../components/Footer'; // Import Footer

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the logic of sending the contact request to the server or API here
  };

  return (
    <>
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-xl">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-xl">Your Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-xl">Message</label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              SEND TO US
            </button>
          </div>
        </form>
      </div>
    </div>
    <div>
    <Footer />
  </div>
    </>
  );
};

export default Contact;
