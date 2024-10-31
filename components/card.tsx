"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Products, Review } from "@/types";

interface CardProps {
  products: Products[];
  paddingBottom?: boolean;
}

const Card: React.FC<CardProps> = ({ products, paddingBottom }) => {
  // Helper function to calculate the average rating
  const calculateAverageRating = (reviews: Review[]) => {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-4">
      {products.map((product, i) => {
        const averageRating = calculateAverageRating(product.reviews);
        const roundedAverageRating = Math.round(averageRating); // Round to nearest whole number for star display

        return (
          <div key={i} className="p-1 relative group">
            <div className="relative overflow-hidden">
              <Link href={`/cloth/${product.id}`}>
                <Image
                  src={product.images[0].url!}
                  alt="item"
                  width={500}
                  height={500}
                  className="w-full h-90 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-blue-500 p-2 rounded-full hover:bg-light-blue-1 hover:text-white transition-colors duration-700">
                  <svg className="w-5 h-5 hover:fill-white">
                    <use xlinkHref={`/sprite.svg#icon-circle-with-plus`} />
                  </svg>
                </button>
                <button className="bg-white text-blue-500 p-2 rounded-full hover:bg-light-blue-1 hover:text-white transition-colors duration-700">
                  <svg className="w-5 h-5 hover:fill-white">
                    <use xlinkHref={`/sprite.svg#icon-heart`} />
                  </svg>
                </button>
                <button className="bg-white text-blue-500 p-2 rounded-full hover:bg-light-blue-1 hover:text-white transition-colors duration-700">
                  <svg className="w-5 h-5 hover:fill-white">
                    <use xlinkHref={`/sprite.svg#icon-star`} />
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-sm mt-2 w-full">{product.name}</h3>
              {/* <h1>Average Rating: {averageRating.toFixed(1)}</h1> */}
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>
                    <svg
                      className={`w-4 h-4 ${
                        index < roundedAverageRating ? "fill-yellow-500" : "fill-slate-300"
                      }`}
                    >
                      <use xlinkHref="/sprite.svg#icon-star" />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="font-bold mt-1">£{product.price}</p>
              <Link href={`/cloth/${product.id}`}>
                <Button size="xs" className="border bg-transparent text-gray-800 text-xs md:text-sm mt-2 hover:bg-light-blue-1 hover:text-white transition-colors duration-300">
                  ADD TO CART
                </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
