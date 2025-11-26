'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { use } from 'react';
import { signOut } from 'next-auth/react';
import { CartContext } from '@/Context/CartProvider';
import { Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { redirect, usePathname } from 'next/navigation';
import useAxios from '@/Hook/useAxios';
import { SearchContext } from '@/Context/SearchProvider';

export default function Navbar() {
  const { data: session } = useSession();
  const { cartCount } = use(CartContext);
  const { searchText, setSearchText } = use(SearchContext);
  const axiosInstance = useAxios();
  const { register, handleSubmit } = useForm();
  const pathName = usePathname();

  const navLinks = (
    <>
      <li>
        <Link
          className={`${
            pathName === '/' && 'bg-purple-600 text-white'
          } rounded-full`}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathName === '/products' && 'bg-purple-600 text-white'
          } rounded-full`}
          href="/products"
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathName === '/about-us' && 'bg-purple-600 text-white'
          } rounded-full`}
          href="/about-us"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathName === '/contact-us' && 'bg-purple-600 text-white'
          } rounded-full`}
          href="/contact-us"
        >
          Contact Us
        </Link>
      </li>
    </>
  );

  const handelSearch = async (data) => {
    const { search } = data;
    const searchValue = search.trim();
    setSearchText(searchValue);
    redirect('/products');
  };
  return (
    <nav className=" bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-[1340px] mx-auto px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link href="/" className="text-xl font-extrabold text-purple-600">
            Shop<span className="text-gray-800">NOW</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {session?.user ? (
            <div className="space-x-2 flex">
              <div className="hidden md:flex justify-center w-full ">
                <form
                  onSubmit={handleSubmit(handelSearch)}
                  className="flex items-center rounded-full border border-gray-300 bg-purple-100/20 overflow-hidden max-w-2xl w-full p-1 px-2"
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
              <Link
                href="/my-card"
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {' '}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{' '}
                  </svg>
                  {cartCount > 0 && (
                    <span className=" absolute -right-4 h-5 w-5 -top-4 bg-red-600 text-white rounded-full flex justify-center items-center text-xs">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={session.user.image}
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <div className="flex flex-col items-center justify-center gap-1 mb-2 border-b border-gray-300 text-gray-600">
                    <div className="h-18 w-18">
                      <img src={session.user.image} alt="" />
                    </div>
                    <h2>{session.user.name}</h2>
                    <h2>{session.user?.email}</h2>
                  </div>
                  <li>
                    <Link href="/manage-products">Manage Products</Link>
                  </li>
                  <li>
                    <Link href="/add-product">Add Product</Link>
                  </li>
                  <li>
                    <button
                      className="bg-rose-600 text-white"
                      onClick={() => signOut()}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
