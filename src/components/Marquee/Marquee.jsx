'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function MarqueeCom() {
  return (
    <div className="mt-24">
      <Marquee autoFill={true} pauseOnHover={true} gradient>
        <button className="mr-5 rounded-lg bg-purple-100 py-2 px-4 text-sm text-gray-600 cursor-pointer hover:bg-purple-200">
          Smartphones
        </button>
        <button className="mr-5 rounded-lg bg-purple-100 py-2 px-4 text-sm text-gray-600 cursor-pointer hover:bg-purple-200">
          Laptops
        </button>
        <button className="mr-5 rounded-lg bg-purple-100 py-2 px-4 text-sm text-gray-600 cursor-pointer hover:bg-purple-200">
          Tablets
        </button>
        <button className="mr-5 rounded-lg bg-purple-100 py-2 px-4 text-sm text-gray-600 cursor-pointer hover:bg-purple-200">
          Desktop Computers
        </button>
        <button className="mr-5 rounded-lg bg-purple-100 py-2 px-4 text-sm text-gray-600 cursor-pointer hover:bg-purple-200">
          Smart watches
        </button>
        <button className="mr-5 rounded-lg bg-purple-100 py-2 px-4 text-sm text-gray-600 cursor-pointer hover:bg-purple-200">
          Cameras
        </button>
        <button className="mr-5 rounded-lg bg-purple-100 py-2 px-4 text-sm text-gray-600 cursor-pointer hover:bg-purple-200">
          Headphones
        </button>
        <button className="mr-5 rounded-lg bg-purple-100 py-2 px-4 text-sm text-gray-600 cursor-pointer hover:bg-purple-200">
          Speakers
        </button>
        <button className="mr-5 rounded-lg bg-purple-100 py-2 px-4 text-sm text-gray-600 cursor-pointer hover:bg-purple-200">
          Monitors
        </button>
        <button className="mr-5 rounded-lg bg-purple-100 py-2 px-4 text-sm text-gray-600 cursor-pointer hover:bg-purple-200">
          Printers
        </button>
        <button className="mr-5 rounded-lg bg-purple-100 py-2 px-4 text-sm text-gray-600 cursor-pointer hover:bg-purple-200">
          Smart Home Devices
        </button>
      </Marquee>
    </div>
  );
}
