import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function ProductTab({ product }) {
  return (
    <div className="mt-24 max-w-4xl mx-auto px-4">
      <Tabs className="w-full">
        <TabList className="flex border-b border-gray-200 mb-8 overflow-x-auto scrollbar-hide">
          <Tab
            className="px-8 py-4 text-lg font-medium text-gray-600 cursor-pointer transition-all duration-300 border-b-4 border-transparent hover:text-purple-600 hover:border-purple-400 focus:outline-none"
            selectedClassName="text-purple-600  font-semibold"
          >
            Description
          </Tab>

          <Tab
            className="px-8 py-4 text-lg font-medium text-gray-600 cursor-pointer transition-all duration-300 border-b-4 border-transparent hover:text-purple-600 hover:border-purple-400 focus:outline-none"
            selectedClassName="text-purple-600  font-semibold"
          >
            Review
          </Tab>
        </TabList>

        <TabPanel>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Product Full Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Customer Review
            </h2>
            <div className="flex items-center gap-2 text-3xl font-bold text-purple-600 mb-2">
              {product.rating}{' '}
              <Rating
                style={{ maxWidth: 180 }}
                value={product.rating}
                itemStyles={{
                  itemShapes: ThinRoundedStar,
                  activeFillColor: '#9810fa',
                  inactiveFillColor: '#e9d4ff',
                }}
                readOnly
              />
            </div>
            <p className="text-gray-600 mb-6">
              Based on the opinions of {product.review} buyers
            </p>
            <div className="space-y-5">
              <div className="border-b border-gray-300 pb-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <p className="font-semibold">Rahim K.</p>
                    <p className="text-sm text-gray-500">2 day ago</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  I recently tried the Product and overall, I’m impressed by its
                  quality and performance. The build feels solid and durable,
                  which shows the brand’s attention to detail. Using it was
                  smooth and intuitive, with features that cater to both
                  beginners and experienced users.
                </p>
              </div>
              <div className="border-b border-gray-300 pb-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Akmol B.</p>
                    <p className="text-sm text-gray-500">3 day ago</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  This product truly stands out for its excellent quality and
                  reliable performance. From the moment you start using it,
                  you’ll notice the thoughtful design and attention to detail
                  that make everyday use smooth and enjoyable. It combines
                  durability with functionality, ensuring it meets a wide range
                  of needs effortlessly.
                </p>
              </div>
              <div className="border-b border-gray-300 pb-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    L
                  </div>
                  <div>
                    <p className="font-semibold">Lutfor R.</p>
                    <p className="text-sm text-gray-500">3 day ago</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  The features are well-implemented and deliver consistent
                  results, giving you great value for the price. Whether you’re
                  using it casually or for more demanding tasks, this product
                  performs impressively without any major drawbacks.
                </p>
              </div>
              <div className="border-b border-gray-300 pb-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    B
                  </div>
                  <div>
                    <p className="font-semibold">Bayzed K.</p>
                    <p className="text-sm text-gray-500">5 day ago</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  This product impresses with its solid build and user-friendly
                  design. It delivers consistent performance that you can rely
                  on every day. The quality feels premium, and the features are
                  thoughtfully designed to enhance your experience without any
                  unnecessary complications.
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
