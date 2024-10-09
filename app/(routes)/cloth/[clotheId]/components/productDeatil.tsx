"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import CustomizeProduct from "./customizeProduct";
import { data } from "@/lib/data";

interface ProductDeatilProps {
  product: typeof data[0];
  category: any[];
  colors: any[]
  sizes: any[]
}

const ProductDetail: React.FC<ProductDeatilProps>  = ({
  product,
  category,
  colors,
  sizes
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const images = [
  //   "https://utfs.io/f/bea20373-2165-45c9-99a7-0990dd87d37e-5z4hwj.jpg",
  //   "https://utfs.io/f/bea20373-2165-45c9-99a7-0990dd87d37e-5z4hwj.jpg",
  //   "https://utfs.io/f/bea20373-2165-45c9-99a7-0990dd87d37e-5z4hwj.jpg",
  //   "https://utfs.io/f/bea20373-2165-45c9-99a7-0990dd87d37e-5z4hwj.jpg",
  //   "https://utfs.io/f/bea20373-2165-45c9-99a7-0990dd87d37e-5z4hwj.jpg"
  // ];

  // Handle previous button click
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  // Handle next button click
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Thumbnails on the left */}
      <div className="hidden md:flex flex-col mt-4 gap-1 overflow-x-auto">
        {product.images.map((image, index) => (
          <div key={index} className="relative p-1">
            <Image
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className={`w-full h-auto cursor-pointer object-cover ${
                currentImageIndex === index ? "ring-2 ring-[#0084c1fb]" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          </div>
        ))}
      </div>

      {/* Main Image with sliding effect */}
      <div className="md:w-2/3">
        <div className="relative overflow-hidden "> 
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }} // Sliding based on index
          >
            {product.images.map((image, index) => (
              <div key={index} className="min-w-full">
                <Image
                  src={image.url}
                  alt={`Nike Women's Pro 365 3 Inch Short ${index}`}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2"
            onClick={handlePrevClick}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2"
            onClick={handleNextClick}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Thumbnails */}
        <div className="flex mt-4 gap-2 p-1 overflow-x-auto md:hidden">
          {product.images.map((image, index) => (
            <Image
              key={index}
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className={`w-full h-auto cursor-pointer ${
                currentImageIndex === index ? "ring-2 ring-[#0084c1fb]" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Right column - Product details */}
      <div className="md:w-1/3">
        <CustomizeProduct product={product} category={category} colors={colors} sizes={sizes}/>
      </div>
    </div>
  );
};

export default ProductDetail;
