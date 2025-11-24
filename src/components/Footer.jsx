import {
  AtSign,
  Facebook,
  Instagram,
  Linkedin,
  MapPinCheckInside,
  Phone,
  X,
} from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-44 max-w-[1340px] mx-auto px-2">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <h1 className="text-3xl font-extrabold text-purple-600 mb-3">
            Shop<span className="text-gray-800">NOW</span>
          </h1>
          <p className="text-sm text-gray-500">
            ShopNow is your trusted online store for the latest and
            highest-quality electronics. We are committed to offering the best
            products at unbeatable prices, backed by excellent customer service.
            Thank you for choosing us for all your electronic needs!
          </p>

          <div className="flex space-x-4 mt-6">
            <a className="p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white transition">
              <Facebook />
            </a>
            <a className="p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white transition">
              {' '}
              <X />
            </a>
            <a className="p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white transition">
              <Instagram />
            </a>
            <a className="p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white transition">
              <Linkedin />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-4">PRODUCTS</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Earphones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Headphones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Smartphones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Laptops
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-4">WEBSITE?</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Become Plus Member
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Create Your Store
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-4">CONTACT</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <AtSign />
              <span>shop@now.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone />
              <span>+1-212-456-7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPinCheckInside />
              <span>794 Francisco, 94102</span>
            </li>
          </ul>
        </div>
      </div>

      <div className=" border-t border-gray-200 mt-12 py-6 text-sm text-gray-500 text-center">
        Copyright 2025 © ShopNow All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
