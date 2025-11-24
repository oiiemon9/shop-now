'use client';
import useAxios from '@/Hook/useAxios';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function page({ params }) {
  const { id } = React.use(params);
  const axiosInstance = useAxios();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(product);
  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const res = await axiosInstance.get(`/product/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id, axiosInstance]);
  return (
    <div className="max-w-[1340px] mx-auto px-2 mt-10">
      {product && (
        <div>
          <div className="breadcrumbs text-sm">
            <ul className="text-gray-600">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>Electronics</li>
            </ul>
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-2  items-center gap-18">
              <div className="flex flex-col-reverse md:flex-row gap-5">
                <button className="flex max-w-24 w-full h-24 border border-gray-300 p-2 bg-gray-100 cursor-pointer">
                  <img
                    className="h-full w-full object-contain"
                    src={product?.image}
                    alt=""
                  />
                </button>
                <div className=" aspect-[1/1] bg-gray-100">
                  <img
                    className="h-full w-full object-contain p-4"
                    src={product?.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">{product.title}</h2>
                <div className="flex items-center gap-2">
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={product.rating}
                    readOnly
                  />
                  <span className="text-sm text-gray-600">
                    {product.review} Reviews
                  </span>
                </div>
                <h2 className="text-2xl">${product.price}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
