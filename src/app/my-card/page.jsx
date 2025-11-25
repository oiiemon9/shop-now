'use client';
import useAxios from '@/Hook/useAxios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export default function MyCard() {
  const [myCard, setMyCard] = useState([]);
  const { data: session } = useSession();
  const axiosInstance = useAxios();

  useEffect(() => {
    const myCardData = async () => {
      try {
        const res = await axiosInstance(
          `/my-cart?email=${session?.user?.email}`
        );
        if (res.data) {
          setMyCard(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    myCardData();
  }, [session]);

  const handelDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this product from your cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosInstance.delete(`/my-cart?id=${id}`);
          if (res.data.deletedCount) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your cart product has been deleted.',
              icon: 'success',
            });
            const newCart = myCard.filter((cart) => cart._id !== id);
            setMyCard(newCart);
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
    });
  };

  return (
    <div className="max-w-[1340px] mx-auto px-2 mt-10">
      <h3 className="text-2xl font-bold">My Cart</h3>
      <div className="flex gap-5">
        <p className="text-gray-500 text-sm">items in your cart</p>
        <Link
          href="/products"
          className="text-purple-600 cursor-pointer hover:underline"
        >
          Add more
        </Link>
      </div>
      {myCard.length === 0 ? (
        <h2 className="text-center mt-10 text-2xl font-medium text-gray-600">
          Cart data not found
        </h2>
      ) : (
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
          <div className="overflow-x-auto col-span-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="text-nowrap">
                {myCard.map((product) => (
                  <TableRow
                    key={product._id}
                    product={product}
                    setMyCard={setMyCard}
                    myCard={myCard}
                    handelDelete={handelDelete}
                  ></TableRow>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-span-3 lg:col-span-1 border p-4 rounded-2xl border-gray-300 w-full max-w-sm bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>

            {/* Payment Method */}
            <p className="text-gray-600 text-sm mb-2">Payment Method</p>

            <div className="flex flex-col gap-2 mb-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked />
                <span>Stripe Payment</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                <span>Sslcommerz</span>
              </label>
            </div>

            <hr className="my-4 text-gray-300" />

            {/* Address */}
            <p className="text-gray-600 text-sm mb-1">Address</p>
            <div className="mt-2 space-y-3">
              <input
                type="text"
                className="py-1.5 sm:py-2 px-3 pe-11 block w-full shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600"
                placeholder="Product Title"
                defaultValue="794 Francisco, 94102"
              />
            </div>

            <hr className="my-4 text-gray-300" />

            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal:</span>
              <span className="font-medium">
                ${myCard.reduce((sum, cart) => sum + cart.totalPrice, 0)}
              </span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="text-gray-700">Shipping:</span>
              <span className="font-medium">$5</span>
            </div>

            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-gray-700 text-white px-4 rounded-lg hover:bg-gray-800">
                Apply
              </button>
            </div>

            <hr className="my-4 text-gray-300 border-dashed" />

            <div className="flex justify-between text-lg font-semibold mb-6">
              <span>Total:</span>
              <span>
                ${myCard.reduce((sum, cart) => sum + cart.totalPrice, 0) + 5}
              </span>
            </div>

            <button className="w-full bg-purple-800 text-white py-3 rounded-lg font-medium hover:bg-purple-900">
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// {
//     "_id": "69247509448dee8690ef5b1d",
//     "productId": "6923d5e1530fa06e5dc96765",
//     "userEmail": "oiiemon9@gmail.com",
//     "price": 165,
//     "quantity": 1,
//     "totalPrice": 165,
//     "productObjectId": "6923d5e1530fa06e5dc96765",
//     "productDetails": {
//         "_id": "6923d5e1530fa06e5dc96765",
//         "title": "Apple Watch",
//         "price": 165,
//         "image": "https://i.ibb.co.com/DP8h2Njh/download-41-removebg-preview.png",
//         "sortDescription": "A stylish smartwatch that tracks your health, monitors workouts, and keeps you connected—all day long.",
//         "fullDescription": "The Apple Watch is a cutting-edge smartwatch designed to keep you connected, healthy, and active throughout your day. Combining sleek design with powerful technology, it seamlessly integrates with your iPhone and other Apple devices to deliver notifications, apps, and essential features right on your wrist.\n\nHealth & Fitness Tracking\nApple Watch offers comprehensive health monitoring, including heart rate tracking, ECG, blood oxygen measurement, sleep analysis, and activity tracking. It motivates you to stay active with personalized workout routines, step counting, calories burned, and real-time progress updates.\n\nStay Connected\nReceive calls, texts, emails, and app notifications instantly without reaching for your phone. With built-in cellular options on some models, you can stay connected even when your phone isn’t nearby. Voice commands via Siri make it easy to control your watch hands-free.\n\nAdvanced Features\n\nGPS for precise location tracking\n\nMusic and podcast streaming on the go\n\nApple Pay for quick, secure payments\n\nWater resistance for swimming and outdoor activities\n\nCustomizable watch faces and bands to match your style\n\nSeamless Integration\nApple Watch works flawlessly with the iOS ecosystem, syncing your calendar, reminders, maps, and more. It supports a wide range of third-party apps, making it a versatile companion for productivity, entertainment, and health.\n\nElegant Design\nAvailable in multiple sizes, finishes, and bands, Apple Watch offers a premium look and feel. Its bright, always-on Retina display ensures clear visibility in any light, and the durable materials keep it protected during everyday wear.",
//         "rating": 5,
//         "review": 65,
//         "sellerEmail": "oiiemon9@gmail.com",
//         "createAt": "2025-11-24T03:49:53.243Z"
//     }
// }
