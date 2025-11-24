'use client';
import { getServerSession } from 'next-auth';
import React, { Suspense } from 'react';
import authOptions from '../api/auth/option';
import { redirect } from 'next/navigation';
import useAxios from '@/Hook/useAxios';
import AllProductsGrid from './AllProductsGrid';
import LoaderCom from './LoaderCom';

const axiosInstance = useAxios();

const dataPromise = axiosInstance.get('/all-products');

export default function Shop() {
  return (
    <div className="max-w-[1340px] mx-auto px-2 mt-10">
      <h3 className="text-2xl font-bold">All Products</h3>

      <Suspense fallback={<>lo</>}>
        <AllProductsGrid dataPromise={dataPromise}></AllProductsGrid>
      </Suspense>
    </div>
  );
}
