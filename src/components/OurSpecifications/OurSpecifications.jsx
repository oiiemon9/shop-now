import { ClockFading, Headset, Send } from 'lucide-react';
import React from 'react';

export default function OurSpecifications() {
  return (
    <div className="max-w-[1340px] mx-auto px-2 mt-24">
      <h3 className="text-2xl font-bold">Our Specifications</h3>

      <p className="text-gray-500 text-sm max-w-96">
        We provide clear and accurate product details to help you make better
        buying decisions.
      </p>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="border border-green-200 bg-green-100/20 rounded px-4 py-10 flex flex-col justify-center items-center gap-2 relative">
          <h2 className="font-bold">7 Days easy Return</h2>
          <p className="text-gray-600 text-center">
            Return your product within 7 days with a simple, hassle-free
            process.
          </p>
          <div className="p-2 bg-green-600 rounded text-white absolute -top-5">
            <ClockFading />
          </div>
        </div>
        <div className="border border-purple-200 bg-purple-100/20 rounded px-4 py-10 flex flex-col justify-center items-center gap-2 relative">
          <h2 className="font-bold">Free Shipping</h2>
          <p className="text-gray-600 text-center">
            Enjoy fast and hassle-free delivery on all your orders.
          </p>
          <div className="p-2 bg-purple-600 rounded text-white absolute -top-5">
            <Send />
          </div>
        </div>

        <div className="border border-blue-200 bg-blue-100/20 rounded px-4 py-10 flex flex-col justify-center items-center gap-2 relative">
          <h2 className="font-bold">24/7 Customer Support</h2>
          <p className="text-gray-600 text-center">
            Our support team is available around the clock to assist you anytime
            you need help.
          </p>
          <div className="p-2 bg-blue-600 rounded text-white absolute -top-5">
            <Headset />
          </div>
        </div>
      </div>
    </div>
  );
}
