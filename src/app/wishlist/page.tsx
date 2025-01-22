'use client'
import Image from 'next/image';
import React, { useState } from 'react';

import { FaTrashAlt } from 'react-icons/fa';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([
    {
      _id: '1',
      name: 'Product 1',
      description: 'This is product 1 description.',
      price: 30,
      imageUrl: '/jeans1.jpg',
    },
    {
      _id: '2',
      name: 'Product 2',
      description: 'This is product 2 description.',
      price: 50,
      imageUrl: '/formal1.jpg',
    },
  ]);

  // Remove item from wishlist
  const handleRemove = (id: string) => {
    setWishlist(wishlist.filter((item) => item._id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <div className="text-center text-xl text-gray-500">Your wishlist is empty!</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
              <Image src={item.imageUrl} alt={item.name} fill className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                <p className="text-xl font-semibold text-gray-900 mt-2">${item.price}</p>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="mt-4 flex items-center text-red-500 hover:text-red-700 text-sm"
                >
                  <FaTrashAlt className="mr-2" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
