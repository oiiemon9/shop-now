import React from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

export default function LatestProducts() {
  return (
    <div className="mt-24">
      <div>
        <h3 className="text-2xl font-bold">Latest products</h3>
        <div className="flex gap-5">
          <p className="text-gray-500 text-sm">Showing 4 of 12 products</p>
          <button className="text-green-600 cursor-pointer hover:underline">
            View more
          </button>
        </div>
        <div className="mt-10 grid grid-cols-4 gap-10">
          <div className="card bg-base-100 shadow-sm">
            <figure className="aspect-[1/1] bg-gray-100 p-4">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                className="w-full h-full object-contain"
                alt="Shoes"
              />
            </figure>

            <div className="p-4 flex justify-between w-full">
              <div>
                {' '}
                <h2 className="font-semibold">Card Title</h2>
                <Rating style={{ maxWidth: 80 }} value={3} readOnly />
              </div>
              <p className="text-gray-600">$150</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
