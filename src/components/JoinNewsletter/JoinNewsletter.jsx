import React from 'react';

export default function JoinNewsletter() {
  return (
    <div className="max-w-[1340px] mx-auto px-2 mt-24">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold">Join Newsletter</h3>

        <p className="text-gray-500 text-sm max-w-96 text-center">
          Subscribe to get the latest updates, exclusive offers, and product
          news straight to your inbox.
        </p>
        <div className="mt-10 flex justify-center w-full">
          <form className="flex rounded-full border border-gray-300 bg-purple-100/20 overflow-hidden max-w-2xl w-full p-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className=" w-full px-6 py-3 text-gray-700 outline-none"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-3 py-1 sm:px-6 sm:py-3 font-semibold rounded-full hover:bg-purple-700 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
