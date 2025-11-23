'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelUpload = (data) => {
    const price = Number(data.price);
  };
  return (
    <div className="max-w-4xl px-4  mb-24 mt-10 sm:px-6 lg:px-8  mx-auto">
      <div className="bg-white dark:bg-base-200 rounded-xl shadow-xs p-4 sm:p-7 border border-gray-300 dark:border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-center text-2xl font-bold">
            <span className="text-green-600">Add Product</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit(handelUpload)}>
          <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <label className="inline-block text-sm font-medium">Title</label>

              <div className="mt-2 space-y-3">
                <input
                  type="text"
                  className="py-1.5 sm:py-2 px-3 pe-11 block w-full shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600"
                  placeholder="Product Title"
                  {...register('title', { required: true })}
                />
                {errors.title?.type === 'required' && (
                  <p className="text-rose-600 text-xs">Title is required</p>
                )}
              </div>
            </div>
            <div>
              <label className="inline-block text-sm font-medium">Price</label>

              <div className="mt-2 space-y-3">
                <input
                  type="text"
                  className="py-1.5 sm:py-2 px-3 pe-11 block w-full shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600 "
                  placeholder="Product price"
                  {...register('price', { required: true })}
                />
                {errors.title?.type === 'required' && (
                  <p className="text-rose-600 text-xs">Price is required</p>
                )}
              </div>
            </div>
            <div>
              <label className="inline-block text-sm font-medium">
                Image Url
              </label>

              <div className="mt-2 space-y-3">
                <input
                  type="text"
                  className="py-1.5 sm:py-2 px-3 pe-11 block w-full shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600 "
                  placeholder="Image Url"
                  {...register('image', { required: true })}
                />
                {errors.title?.type === 'required' && (
                  <p className="text-rose-600 text-xs">Image is required</p>
                )}
              </div>
            </div>
            <div>
              <label className="inline-block text-sm font-medium">
                Short description
              </label>

              <div className="mt-2 space-y-3">
                <input
                  type="text"
                  className="py-1.5 sm:py-2 px-3 pe-11 block w-full shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600"
                  placeholder="Short description"
                  {...register('sortDescription', { required: true })}
                />
                {errors.title?.type === 'required' && (
                  <p className="text-rose-600 text-xs">
                    Short description is required
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="inline-block text-sm font-medium">
                Full description
              </label>

              <div className="mt-2 space-y-3">
                <textarea
                  type="text"
                  className="py-1.5 sm:py-2 px-3 pe-11 block w-full shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600"
                  placeholder="Full description"
                  {...register('fullDescription', { required: true })}
                />
                {errors.title?.type === 'required' && (
                  <p className="text-rose-600 text-xs">
                    Full description is required
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              type="submit"
              className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              {/* {loader && (
                <span className="loading loading-spinner text-success"></span>
              )}{' '} */}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
