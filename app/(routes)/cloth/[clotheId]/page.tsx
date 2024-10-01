"use client";

import Image from "next/image"
// import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { ChevronLeft, ChevronRight, Heart, Truck, ShoppingBag } from 'lucide-react';
import { Suspense } from "react"
import Reviews from "@/components/reviews"
const Cloth = () => {

  const product = {
    id: '65cf9b7aa4e7c8104dd58ed0',
    name: 'black jersay',
    price: 25,
    description: 'quality clothes for hanging out',
    quantity: 10,
    isFeatured: true,
    isArchived: true,
    sizeId: '65cba68f230ca7119303f858',
    colorId: '65cba68f230ca7119303f85d',
    categoryId: '65cba68f230ca7119303f84b',
    createdAt: new Date('2024-02-16T17:29:30.000Z'),
    updatedAt: new Date('2024-02-17T14:14:34.000Z'),
    images: [
      {
        id: '65d0bf4a02e67bafae95e97b',
        productId: '65cf9b7aa4e7c8104dd58ed0',
        url: 'https://utfs.io/f/70fb3fc0-735c-4ec5-bb22-d4a94f7a8f5b-5z4hwk.jpg',
        createdAt: new Date('2024-02-17T14:14:34.000Z'),
        updatedAt: new Date('2024-02-17T14:14:34.000Z')
      },
      {
        id: '65d0bf4a02e67bafae95e97c',
        productId: '65cf9b7aa4e7c8104dd58ed0',
        url: 'https://utfs.io/f/948197f5-a995-4c0f-8a8d-c44da3d86418-5z4hwj.jpg',
        createdAt: new Date('2024-02-17T14:14:34.000Z'),
        updatedAt: new Date('2024-02-17T14:14:34.000Z')
      }
    ]
  }
  return (
    <div className="px-4 mx-auto py-8">
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

      <div className="mx-auto px-4">
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">You may also like...</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Product cards */}
            {[
              { id: 1, name: "Nike Womens Pro Indy Plunge Sports Bra", price: "£34.99", rrp: "£44.99", image: "https://utfs.io/f/caa9e711-ce03-4a81-bcdd-9a9e32a979ac-5z4hwi.jpg" },
              { id: 2, name: "Montirex Womens Icon Contrast Legging", price: "£27.99", rrp: "£34.99", image: "https://utfs.io/f/caa9e711-ce03-4a81-bcdd-9a9e32a979ac-5z4hwi.jpg" },
              { id: 3, name: "Zavetti Canada Womens Bellucci 2.0 Crop Jacket", price: "£49.99", rrp: "£109.99", image: "https://utfs.io/f/caa9e711-ce03-4a81-bcdd-9a9e32a979ac-5z4hwi.jpg" },
              { id: 4, name: "Nike Womens Phoenix Oversized Fleece Pants", price: "£39.99", rrp: "£54.99", image: "https://utfs.io/f/caa9e711-ce03-4a81-bcdd-9a9e32a979ac-5z4hwi.jpg" },
              { id: 5, name: "Nike Womens Dri-FIT Pro Short Sleeve Top", price: "£14.99", rrp: "£27.99", image: "https://utfs.io/f/caa9e711-ce03-4a81-bcdd-9a9e32a979ac-5z4hwi.jpg" },
            ].map((product, index) => (
              <div className="flex-shrink-0 w-48">
                    {/* <img src={image} alt={description} className="w-full h-60 object-cover mb-2" /> */}
                    <Image src={product.image} alt={product.name}
                      width={80}
                      height={80}
                      className="w-full h-auto rounded-lg" />
                    <h3 className="font-bold">{product.name}</h3>
                    {/* <p className="text-sm text-gray-600 mb-1">{description}</p> */}
                    <p className="text-red-600 font-bold">{product.price} <span className="text-gray-500 font-normal">RRP {product.rrp}</span></p>
                </div>
            ))}
          </div>
        </section>
      </div>
      
      <div className="py-4">
        <h1 className="font-bold text-2xl py-2">User Reviews</h1>
        <Suspense fallback="Loading...">
          <Reviews productId="3fb6a3c8-988b-8755-04bd-5c59ae0b18ea" />
        </Suspense>
      </div>
    </div>
  );
}
 
export default Cloth;