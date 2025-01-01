'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; 
import { FormEvent } from 'react'; 

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Form submit handler
  const handleSubmit = (e: FormEvent) => { 
    e.preventDefault();
    alert('Form Submitted');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 bg-purple-300 py-12">
          <div className="max-w-3xl mx-auto p-5 bg-pink-200 rounded-lg shadow-lg">
            

            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-purple-900 mb-4">Contact Us</h1>
              <p className="text-lg text-gray-700 mb-8">Feel free to reach out to us for any inquiries!</p>
              
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <FaEnvelope className="text-3xl text-purple-600 mb-2" />
                  <p>Email: support@vLog.com</p>
                </div>
                <div className="text-center">
                  <FaPhoneAlt className="text-3xl text-purple-600 mb-2" />
                  <p>Phone: +1 234 567 890</p>
                </div>
                <div className="text-center">
                  <FaMapMarkerAlt className="text-3xl text-purple-600 mb-2" />
                  <p>Address: 123 Comforty St, Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                    placeholder="Your Message"
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-400 text-white py-3 rounded-md hover:bg-pink-600 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
