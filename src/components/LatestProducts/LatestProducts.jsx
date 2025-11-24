'use client';
import React, { Suspense, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

import useAxios from '@/Hook/useAxios';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import LatestProductsMap from './latestProductsMap';
import Link from 'next/link';
const axiosInstance = useAxios();

const dataPromise = axiosInstance.get('/latest-products');

export default function LatestProducts() {
  return (
    <div className="mt-24">
      <div>
        <h3 className="text-2xl font-bold">Latest products</h3>
        <div className="flex gap-5">
          <p className="text-gray-500 text-sm">Showing 4 of 15 products</p>
          <Link
            href="/products"
            className="text-purple-600 cursor-pointer hover:underline"
          >
            View more
          </Link>
        </div>
        <Suspense fallback={<p>loading...</p>}>
          <LatestProductsMap dataPromise={dataPromise}></LatestProductsMap>
        </Suspense>
      </div>
    </div>
  );
}
