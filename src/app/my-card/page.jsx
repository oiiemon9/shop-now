'use client';
import useAxios from '@/Hook/useAxios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

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

  console.log(myCard);
  return (
    <div className="max-w-[1340px] mx-auto px-2 mt-10">
      <h3 className="text-2xl font-bold">My Card</h3>
      <div className="flex gap-5">
        <p className="text-gray-500 text-sm">items in your cart</p>
        <Link
          href="/products"
          className="text-purple-600 cursor-pointer hover:underline"
        >
          Add more
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-10">
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
            <tbody>
              {myCard.map((product) => (
                <TableRow
                  key={product._id}
                  product={product}
                  setMyCard={setMyCard}
                  myCard={myCard}
                ></TableRow>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border">
          {myCard.map((cart, i) => (
            <p key={i}>{cart.totalPrice}</p>
          ))}
        </div>
      </div>
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
