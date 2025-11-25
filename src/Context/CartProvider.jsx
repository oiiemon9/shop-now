'use client';

import useAxios from '@/Hook/useAxios';
import { useSession } from 'next-auth/react';
import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const axiosInstance = useAxios();
  const { data: session } = useSession();

  useEffect(() => {
    const cart = async () => {
      try {
        const res = await axiosInstance.get(
          `/my-cart/count?email=${session?.user?.email}`
        );
        setCartCount(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    cart();
  }, [session]);
  const cartInfo = {
    cartCount,
    setCartCount,
  };
  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;
