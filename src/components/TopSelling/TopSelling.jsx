'use client';
import React, { Suspense, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

import useAxios from '@/Hook/useAxios';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import TopSellingMap from './TopSellingMap';
const axiosInstance = useAxios();

const dataPromise = axiosInstance.get('/top-selling');

export default function TopSelling() {
  return (
    <div className="mt-24">
      <div>
        <h3 className="text-2xl font-bold">Top Selling</h3>
        <div className="flex gap-5">
          <p className="text-gray-500 text-sm">Showing 4 of 12 products</p>
          <button className="text-green-600 cursor-pointer hover:underline">
            View more
          </button>
        </div>
        <Suspense fallback={<p>loading...</p>}>
          <TopSellingMap dataPromise={dataPromise}></TopSellingMap>
        </Suspense>
      </div>
    </div>
  );
}
