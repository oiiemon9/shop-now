'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

const Map = dynamic(() => import('../../components/Map/Map'), {
  ssr: false,
});

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white text-center px-2">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Welcome to ShopNow — your trusted destination for premium electronics
          at unbeatable prices.
        </p>
      </section>

      <section className="max-w-[1340px] mx-auto py-16 px-2 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-purple-600">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At ShopNow, our mission is simple — to make technology accessible to
            everyone. We believe in delivering high‑quality electronics that
            improve your lifestyle, enhance productivity, and bring joy to
            everyday experiences. With a focus on innovation, quality, and
            trust, we aim to be the most reliable tech brand in Bangladesh.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Mission"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-[1340px] px-2 mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-8">
            Why Choose ShopNow?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                We provide authentic and high‑quality electronic products that
                last long and perform better.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                We ensure fast, safe, and reliable delivery across Bangladesh so
                your products reach on time.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Our dedicated support team is always ready to assist you with
                any questions or issues.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">
                Get premium electronics at the most competitive and affordable
                prices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-16">
        <div className="max-w-[1340px] px-2 mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-8">
            Our Warehouse
          </h2>

          <Map></Map>
        </div>
      </section>

      <section className="py-20 bg-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join the Future of Smart Shopping
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Discover high‑quality electronics, fast delivery, and exceptional
          support — all in one place.
        </p>
        <Link
          href="/products"
          className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow hover:shadow-lg transition"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
}
