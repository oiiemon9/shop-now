import { AtSign } from 'lucide-react';
import React from 'react';

export default function ContactUs() {
  return (
    <div className=" bg-white text-gray-800">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions or need support? We're here to help! Reach out to us
          anytime.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-[1340px] mx-auto py-16 px-2 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-purple-600">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you have a question about products, orders, or anything
            else, our team is ready to answer all your questions.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <AtSign className="text-purple-600" />
              <span>shop@now.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92V21a2 2 0 01-2.18 2A19.79 19.79 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.12.81.38 1.59.78 2.32a2 2 0 01-.45 2.11L10 11.66a16 16 0 007.37 7.37l1.51-1.51a2 2 0 012.11-.45c.73.4 1.51.66 2.32.78a2 2 0 011.72 2z"></path>
              </svg>
              <span>+1-212-456-7890</span>
            </div>

            <div className="flex items-center space-x-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>794 Francisco, 94102</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-50 p-10 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-purple-600 text-center mb-6">
            Send Us a Message
          </h2>

          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
