"use client"

import { cn } from "@/lib/utils";
import { Image as Images, Product, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface CardProps {
  products: (Product & { images: Images[] })[]
  paddingBottom?: boolean
}

const Card: React.FC<CardProps>  = ({products, paddingBottom}) => {

  // console.log("dfdsfs", products)
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-4">
      {products.map((product, i) => (
        <div key={i} className=" p-1 relative group">
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
                  <svg className=" w-5 h-5 hover:fill-white">
                    <use xlinkHref={`Sprite.svg#icon-circle-with-plus`} />
                  </svg>
                </button>
                <button className="bg-white text-blue-500 p-2 rounded-full hover:bg-light-blue-1 hover:text-white transition-colors duration-700">
                  <svg className=" w-5 h-5 hover:fill-white">
                    <use xlinkHref={`Sprite.svg#icon-heart`} />
                  </svg>
                </button>
                <button className="bg-white text-blue-500 p-2 rounded-full hover:bg-light-blue-1 hover:text-white transition-colors duration-700">
                  <svg className=" w-5 h-5 hover:fill-white">
                    <use xlinkHref={`Sprite.svg#icon-star`} />
                  </svg>
                </button>
            </div>
        </div>

        <div className="text-center">
          <h3 className="text-sm mt-2 w-full">Riot Jeans Casual Roll-up...</h3>
          <div className="flex justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  <svg className=" w-4 h-4 fill-slate-300">
                    <use xlinkHref="Sprite.svg#icon-star" />
                  </svg>
                </span>
              ))}
          </div>
          <p className="font-bold mt-1 ">$100.00</p>
          <button className="border text-gray-800  text-xs md:text-sm px-4 py-1 mt-2 hover:bg-light-blue-1 hover:text-white transition-colors duration-300">ADD TO CART</button>
       </div>
       </div>
      ))}
    </div>
   );
}
 
export default Card;