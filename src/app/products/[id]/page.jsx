'use client';
import useAxios from '@/Hook/useAxios';
import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Clipboard, CreditCard, Earth, Handshake } from 'lucide-react';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';
import Tab from './Tab';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { CartContext } from '@/Context/CartProvider';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

export default function page({ params }) {
  const { id } = React.use(params);
  const { data: session } = useSession();
  const axiosInstance = useAxios();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { cartCount, setCartCount } = use(CartContext);

  console.log(session?.user.email);

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

  const handelAddToCart = async (id) => {
    const productInfo = {
      productId: id,
      userEmail: session.user.email,
      price: product.price,
      quantity: 1,
      totalPrice: product.price,
    };
    try {
      const res = await axiosInstance.post('/card', productInfo);
      console.log(res);
      if (res.data.insertedId) {
        toast.success('Product successfully added to cart');
        const newCount = cartCount + 1;
        setCartCount(newCount);
      }
      if (res.data.message) {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center ">
        <Lottie
          animationData={require('../../../../public/LoadingAnimationBlue.json')}
          loop={true}
          style={{ width: '150px', height: '150px', color: '#fff' }}
        ></Lottie>
      </div>
    );
  }

  const animationContainer = {
    initial: {},
    hover: {},
  };

  const imageAnimation = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

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
            <div className="grid grid-cols-1 lg:grid-cols-2   items-center gap-18">
              <div className="flex flex-col-reverse sm:flex-row gap-5">
                <motion.button
                  variants={animationContainer}
                  initial="initial"
                  whileHover="hover"
                  className="flex max-w-24 w-full h-24 border border-gray-300 p-2 bg-gray-100 cursor-pointer overflow-hidden"
                >
                  <motion.img
                    variants={imageAnimation}
                    className="h-full w-full object-contain"
                    src={product?.image}
                    alt=""
                  />
                </motion.button>
                <motion.div
                  variants={animationContainer}
                  initial
                  whileHover="hover"
                  className=" aspect-[1/1] bg-gray-100 overflow-hidden"
                >
                  <motion.img
                    variants={imageAnimation}
                    className="h-full w-full object-contain p-4"
                    src={product?.image}
                    alt=""
                  />
                </motion.div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">{product.title}</h2>
                <div className="flex items-center gap-2">
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
                  <span className="text-sm text-gray-600">
                    {product.review} Reviews
                  </span>
                </div>
                <h2 className="text-2xl font-bold">${product.price}</h2>
                <p className="text-gray-600 flex gap-1 text-sm">
                  {product.sortDescription}
                </p>
                <button
                  onClick={() => handelAddToCart(product._id)}
                  className="btn bg-purple-600 text-white rounded-full"
                >
                  Add To Cart
                </button>
                <div className="w-full border-b border-gray-300"></div>
                <p className="flex gap-2 text-gray-600">
                  <Earth />
                  Free shipping worldwide
                </p>
                <p className="flex gap-2 text-gray-600">
                  <CreditCard />
                  100% Secured Payment
                </p>
                <p className="flex gap-2 text-gray-600">
                  <Handshake />
                  Trusted by top brands
                </p>
              </div>
            </div>
          </div>
          <Tab product={product}></Tab>
        </div>
      )}
    </div>
  );
}
