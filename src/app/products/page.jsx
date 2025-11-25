'use client';
import { getServerSession } from 'next-auth';
import React, { Suspense, use, useState } from 'react';
import authOptions from '../api/auth/option';
import { redirect } from 'next/navigation';
import useAxios from '@/Hook/useAxios';
import AllProductsGrid from './AllProductsGrid';
import LoaderCom from './LoaderCom';
import { useForm } from 'react-hook-form';
import { Search } from 'lucide-react';
import { SearchContext } from '@/Context/SearchProvider';

export default function Shop() {
  const { register, handleSubmit } = useForm();
  const { searchText, setSearchText } = use(SearchContext);

  console.log(searchText);

  const axiosInstance = useAxios();
  const dataPromise = axiosInstance.get(`/all-products?search=${searchText}`);

  const handelSearch = async (data) => {
    const { search } = data;
    const searchValue = search.trim();
    setSearchText(searchValue);
  };
  return (
    <div className="max-w-[1340px] mx-auto px-2 mt-10">
      <div className="flex flex-col sm:flex-row gap-5 justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold">All Products</h3>
          {searchText && (
            <p>
              <span className="font-bold">Search:</span> {searchText}{' '}
            </p>
          )}
        </div>
        <form
          onSubmit={handleSubmit(handelSearch)}
          className=" flex md:hidden  items-center rounded-full border border-gray-300 bg-purple-100/20 overflow-hidden max-w-xs w-full p-1 px-2"
        >
          <input
            type="search"
            placeholder="Search..."
            {...register('search')}
            defaultValue={searchText}
            className=" w-full  text-gray-700 outline-none placeholder:text-sm"
          />
          <button type="submit" className="btn btn-sm rounded-full">
            <Search size={15} />
          </button>
        </form>
      </div>

      <Suspense fallback={<LoaderCom></LoaderCom>}>
        <AllProductsGrid dataPromise={dataPromise}></AllProductsGrid>
      </Suspense>
    </div>
  );
}
