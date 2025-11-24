import React from 'react';

export default function LoaderCom() {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="card bg-base-100 animate-pulse">
          <figure className="aspect-[1/1] bg-gray-200 p-6">
            <div className="w-full h-full bg-gray-300 rounded-md" />
          </figure>

          <div className="p-4 flex justify-between w-full">
            <div className="space-y-2 flex-1">
              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>{' '}
              {/* For Rating placeholder */}
            </div>
            <div className="h-5 bg-gray-300 rounded w-12"></div>{' '}
            {/* Price placeholder */}
          </div>
        </div>
      ))}
    </div>
  );
}
