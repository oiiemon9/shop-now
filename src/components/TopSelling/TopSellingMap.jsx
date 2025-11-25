import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import React, { use } from 'react';

export default function TopSellingMap({ dataPromise }) {
  const { data } = use(dataPromise);

  const containerVariants = {
    initial: {},
    hover: {},
  };

  const imgVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const buttonVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {data?.map((product) => (
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileHover="hover"
          key={product._id}
          className="relative"
        >
          <Link href={`/products/${product._id}`} className="card bg-base-100 ">
            <figure className="aspect-[1/1] bg-gray-100 p-6 overflow-hidden ">
              <motion.img
                variants={imgVariants}
                src={product.image}
                className="w-full h-full object-contain"
              />
            </figure>

            <div className="p-4 flex justify-between w-full">
              <div>
                {' '}
                <h2 className="font-semibold ">{product.title}</h2>
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
              </div>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </Link>
          <motion.button
            variants={buttonVariants}
            className="cursor-pointer absolute top-5 left-5 z-10"
          >
            <Heart className="text-gray-600" />
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}
