import Link from 'next/link';
import React from 'react';

export default function HerroSection() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-10 mt-10">
      <div className="col-span-2 row-span-2 h-[430px] bg-[url('https://i.ibb.co.com/HDKgwQVP/download-47.png')] bg-no-repeat bg-cover bg-bottom rounded-2xl p-10 flex items-end">
        <div className="space-y-5">
          <div className="bg-purple-200 rounded-full px-1 py-1 flex items-center w-fit text-sm gap-2">
            <span className="bg-purple-600 text-white px-2 rounded-full">
              NEWS
            </span>
            <p className="text-purple-600">
              Free Shipping on Orders Above $20!{' '}
            </p>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-purple-800-500 to-indigo-400/80 inline-block text-transparent bg-clip-text text-shadow-lg">
            Why Apple is the best <br /> place to buy Apple Watch.
          </h1>
          <div>
            <p className="text-sm font-semibold">Starts From</p>
            <h4 className="text-2xl font-semibold">$165</h4>
          </div>
          <Link
            href="/products/6923d5e1530fa06e5dc96765"
            className="btn bg-purple-600 text-white rounded-full px-10"
          >
            Buy Now
          </Link>
        </div>
      </div>
      <div className="col-span-1 row-span-1 bg-amber-200"></div>

      <div className="col-span-1 row-span-1 bg-blue-100"></div>
    </div>
  );
}
