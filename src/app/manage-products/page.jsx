'use client';
import useAxios from '@/Hook/useAxios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function page() {
  const [loading, setLoading] = useState(false);
  const [myProducts, setMyProducts] = useState([]);
  const { data: session } = useSession();
  const axiosInstance = useAxios();

  useEffect(() => {
    const myProductsFind = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(
          `/my-products?email=${session?.user?.email}`
        );
        setMyProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    myProductsFind();
  }, [session]);

  const handelDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const productDelete = async () => {
          try {
            const res = await axiosInstance.delete(`/my-products?id=${id}`);
            if (res.data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Product has been deleted.',
                icon: 'success',
              });

              const remainingProducts = myProducts.filter(
                (product) => id !== product._id
              );
              setMyProducts(remainingProducts);
            }
          } catch (error) {
            console.log(error);
          }
        };

        productDelete();
      }
    });
  };

  return (
    <div className="max-w-[1340px] mx-auto px-2">
      <div className="mt-10">
        <h4 className="text-2xl font-semibold">
          <span className="text-purple-400">My </span> Products
        </h4>
        {loading ? (
          <div className="flex flex-col mt-10">
            <div className="overflow-x-auto">
              <div className="min-w-full inline-block align-middle">
                <div className="bg-white dark:bg-base-200 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-base-300">
                      <tr>
                        <th className="ps-6 py-3 text-start">
                          <span className="text-xs font-semibold uppercase text-gray-400">
                            Title
                          </span>
                        </th>
                        <th className="px-6 py-3 text-start">
                          <span className="text-xs font-semibold uppercase text-gray-400">
                            Rating
                          </span>
                        </th>
                        <th className="px-6 py-3 text-start">
                          <span className="text-xs font-semibold uppercase text-gray-400">
                            Review
                          </span>
                        </th>
                        <th className="px-6 py-3 text-start">
                          <span className="text-xs font-semibold uppercase text-gray-400">
                            Price
                          </span>
                        </th>
                        <th className="px-6 py-3 text-end">
                          <span className="text-xs font-semibold uppercase text-gray-400">
                            Action
                          </span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {[...Array(4)].map((_, i) => (
                        <tr key={i}>
                          <td className="ps-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="skeleton h-12 w-12 rounded-full"></div>
                              <div>
                                <div className="skeleton h-3 w-24 mb-2"></div>
                                <div className="skeleton h-3 w-16"></div>
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <div className="skeleton h-3 w-24"></div>
                          </td>

                          <td className="px-6 py-4">
                            <div className="skeleton h-5 w-20 rounded-full"></div>
                          </td>

                          <td className="px-6 py-4 text-end">
                            <div className="flex gap-2 justify-end">
                              <div className="skeleton h-8 w-16 rounded-xl"></div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : myProducts.length === 0 ? (
          <p className="text-center text-2xl font-bold text-gray-500/90">
            Your Products Not Found
          </p>
        ) : (
          <div className="flex flex-col mt-10">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
              <div className="min-w-full inline-block align-middle">
                <div className="bg-white dark:bg-base-200 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xs overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-base-300">
                      <tr>
                        <th
                          scope="col"
                          className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                        >
                          <div className="flex items-center gap-x-2 ms-6">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-white">
                              Title
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-white">
                              Rating
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-white text-nowrap">
                              Review
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center  gap-x-2">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-white">
                              Price
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center justify-end gap-x-2">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-white">
                              Action
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {myProducts.map((product) => (
                        <tr key={product._id}>
                          <td className="size-px whitespace-nowrap">
                            <div className="ms-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div className="flex items-center gap-x-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-18">
                                    <img
                                      className="h-full w-full object-contain"
                                      src={product.image}
                                    />
                                  </div>
                                </div>
                                <div className="grow">
                                  <span className="block text-sm font-semibold text-gray-800 dark:text-white">
                                    {product.title}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="h-px w-72 whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-white">
                                {product.rating}
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-72 whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-white">
                                {product.review}
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-72 whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-white">
                                ${product.price}
                              </span>
                            </div>
                          </td>

                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-1.5 flex gap-2 justify-end ">
                              <Link
                                href={`/products/${product._id}`}
                                className="btn border border-purple-600 hover:bg-purple-600  text-purple-600 hover:text-white rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer px-3 py-1"
                              >
                                View
                              </Link>
                              <button
                                onClick={() => handelDelete(product._id)}
                                className="btn border border-rose-600 hover:bg-rose-600  text-rose-600 hover:text-white rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer px-1 py-1"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
