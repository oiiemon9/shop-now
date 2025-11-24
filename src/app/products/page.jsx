'use client';
import { getServerSession } from 'next-auth';
import React, { Suspense } from 'react';
import authOptions from '../api/auth/option';
import { redirect } from 'next/navigation';
import useAxios from '@/Hook/useAxios';
import AllProductsGrid from './AllProductsGrid';

const axiosInstance = useAxios();

const dataPromise = axiosInstance.get('/all-products');

export default function Shop() {
  return (
    <div className="max-w-[1340px] mx-auto px-2 mt-10">
      <h4 className="text-2xl font-semibold">
        <span className="text-purple-400">All </span> Product
      </h4>
      <Suspense fallback={<p>Loading...</p>}>
        <AllProductsGrid dataPromise={dataPromise}></AllProductsGrid>
      </Suspense>
    </div>
  );
}
