import React, { use } from 'react';
import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Link from 'next/link';

export default function AllProductsGrid({ dataPromise }) {
  const { data } = use(dataPromise);
  return (
    <div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.map((product) => (
          <Link
            href={`/products/${product._id}`}
            key={product._id}
            className="card bg-base-100 "
          >
            <figure className="aspect-[1/1] bg-gray-100 p-6">
              <img
                src={product.image}
                className="w-full h-full object-contain"
              />
            </figure>

            <div className="p-4 flex justify-between w-full">
              <div>
                {' '}
                <h2 className="font-semibold">{product.title}</h2>
                <Rating
                  style={{ maxWidth: 80 }}
                  value={product.rating}
                  itemStyles={{
                    itemShapes: ThinRoundedStar,
                    activeFillColor: '#9810fa',
                    inactiveFillColor: '#e9d4ff',
                  }}
                  readOnly
                />
              </div>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
      {data.length === 0 || !data ? (
        <p className="text-center text-2xl font-semibold text-gray-600">
          Products not found
        </p>
      ) : (
        ''
      )}
    </div>
  );
}
