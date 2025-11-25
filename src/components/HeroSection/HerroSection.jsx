'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

export default function HerroSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-10 mt-10">
      <div className="col-span-2 row-span-2 h-[260px] sm:h-[360px] md:h-[464px] bg-[url('https://i.ibb.co.com/HDKgwQVP/download-47.png')] bg-no-repeat bg-cover bg-bottom rounded-2xl p-4 sm:p-10 flex items-end">
        <div className="space-y-2 sm:space-y-5">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 320, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="bg-purple-200 rounded-full px-1 py-1 flex items-center w-fit text-sm gap-2 text-nowrap overflow-hidden"
          >
            <span className="bg-purple-600 text-white px-2 rounded-full">
              NEWS
            </span>
            <p className="text-purple-600">
              Free Shipping on Orders Above $20!{' '}
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
            className="text-xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-purple-800-500 to-indigo-400/80 text-transparent bg-clip-text text-shadow-lg"
          >
            Why Apple is the best <br /> place to buy Apple Watch.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
          >
            <p className="text-sm font-semibold">Starts From</p>
            <h4 className="text-2xl font-semibold">$165</h4>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
          >
            <Link
              href="/products/6923d5e1530fa06e5dc96765"
              className="btn bg-purple-600 text-white rounded-full px-10"
            >
              Buy Now
            </Link>
          </motion.button>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 row-span-1 bg-purple-200 p-4 rounded-2xl flex items-center justify-between">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
            className="text-4xl font-semibold bg-gradient-to-r from-purple-600 via-purple-800-500 to-indigo-400/80 text-transparent bg-clip-text"
          >
            Best <br /> Products
          </motion.h2>
          <motion.button whileHover="hover">
            <Link
              href="/products/6923d88f530fa06e5dc96769"
              className="cursor-pointer flex  text-sm items-center hover:text-purple-600 hover:underline transition-colors duration-200 "
            >
              View More{' '}
              <motion.span
                variants={{
                  initial: { x: 0 },
                  hover: { x: 10 },
                }}
              >
                <ChevronRight />
              </motion.span>
            </Link>
          </motion.button>
        </div>
        <div className="h-44 w-44">
          <img
            src="https://i.ibb.co.com/HpgF4YtL/download-45-removebg-preview.png"
            className="h-full w-full object-contain"
            alt=""
          />
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 row-span-1 bg-blue-200 p-4 rounded-2xl flex items-center justify-between">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
            className="text-4xl font-semibold bg-gradient-to-r from-blue-600 via-blue-800-500 to-indigo-400/80 text-transparent bg-clip-text"
          >
            Free <br /> Delivery
          </motion.h2>
          <motion.button whileHover="hover">
            <Link
              href="/products/6923d7f1530fa06e5dc96768"
              className="cursor-pointer flex  text-sm items-center hover:text-blue-600 hover:underline transition-colors duration-200 "
            >
              View More{' '}
              <motion.span
                variants={{
                  initial: { x: 0 },
                  hover: { x: 10 },
                }}
              >
                <ChevronRight />
              </motion.span>
            </Link>
          </motion.button>
        </div>
        <div className="h-44 w-44">
          <img
            src="https://i.ibb.co.com/q388rsHh/download-44-removebg-preview.png"
            className="h-full w-full object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
