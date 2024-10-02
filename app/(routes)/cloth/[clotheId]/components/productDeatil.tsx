"use client";

import React from 'react'
import { ChevronLeft, ChevronRight, Heart, Truck, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

const ProductDeatil = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className=" hidden md:flex flex-col mt-4 gap-2 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                src="https://utfs.io/f/bea20373-2165-45c9-99a7-0990dd87d37e-5z4hwj.jpg"
                alt={`Thumbnail ${i}`}
                width={80}
                height={80}
                className="w-full h-auto"
              />
            ))}
          </div>
        {/* Left column - Image gallery */}
        <div className="md:w-2/3">
          <div className="relative">
          <Image
            src="https://utfs.io/f/bea20373-2165-45c9-99a7-0990dd87d37e-5z4hwj.jpg"
            alt="Nike Women's Pro 365 3 Inch Short"
            width={300}
            height={300}
            className="w-full h-auto"
          />
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="flex mt-4 gap-2 overflow-x-auto md:hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                src="https://utfs.io/f/bea20373-2165-45c9-99a7-0990dd87d37e-5z4hwj.jpg"
                alt={`Thumbnail ${i}`}
                width={80}
                height={80}
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>

        {/* Right column - Product details */}
        <div className="md:w-1/3">
          <div className="flex justify-between items-center">
            <img src="https://utfs.io/f/bea20373-2165-45c9-99a7-0990dd87d37e-5z4hwj.jpg" alt="Nike logo" className="h-6" />
            <Heart className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold mt-4">Womens Pro 365 3 Inch Short</h1>
          <p className="text-gray-600">Iron Grey / White</p>
          <div className="mt-4">
            <span className="text-2xl font-bold">£22.99</span>
            <span className="ml-2 text-gray-500 line-through">RRP £27.99</span>
          </div>
          <div className="mt-4">
          <p className="font-semibold">Colors</p>
            <ul className="flex items-center gap-3 my-2">
              <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
                <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </li>
              <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
              <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
                <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </li>
            </ul> 
            <p className="font-semibold">Size</p>
            <div className="flex gap-2 mt-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button key={size} className="border border-gray-300 px-3 py-1 rounded">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button className="w-full bg-green-500 text-white py-3 rounded mt-6 flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Add to bag
          </button>
          <div className="mt-6">
            <p className="flex items-center text-green-600">
              <Truck className="w-5 h-5 mr-2" />
              FREE UK Standard Delivery on all orders over £70
            </p>
          </div>
        </div>
      </div>
  )
}

export default ProductDeatil