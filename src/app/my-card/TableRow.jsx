import React, { useEffect, useState } from 'react';

export default function TableRow({ product, myCard, setMyCard }) {
  const [num, setNum] = useState(product.quantity);
  let oldProduct = product;
  useEffect(() => {
    const priceUpdate = () => {
      oldProduct.quantity = num;
      oldProduct.totalPrice = oldProduct.price * num;
      const newData = myCard.map((cart) =>
        cart._id === oldProduct._id ? oldProduct : cart
      );
      setMyCard(newData);
    };
    priceUpdate();
  }, [num]);
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-4 border border-gray-200 w-fit">
          <button
            onClick={() => {
              if (num > 1) {
                setNum(num - 1);
              }
            }}
            className="btn btn-sm bg-white border-none"
          >
            −
          </button>
          <p>{num}</p>

          <button
            onClick={() => {
              setNum(num + 1);
            }}
            className="btn btn-sm bg-white border-none"
          >
            +
          </button>
        </div>
      </td>
      <td>${product.totalPrice}</td>
      <td>
        <button className="btn">Remove</button>
      </td>
    </tr>
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
