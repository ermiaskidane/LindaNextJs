"use clients"; 
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import { Product } from '@/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Recommend = ({product}:{product: Product[]}) => {
  return (
  <div className="mx-auto px-4 mt-12">
    <h2 className="text-xl mb-4 font-semibold ">You may also like...</h2>
    {/* max-w-7xl */}
    <Carousel className="w-full ">
      <CarouselContent className="-ml-1">
        {product.map((item) => (
          <CarouselItem key={item.id} className="pl-1 basis-1/2 md:basis-1/5">
            {/* <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-4">
              <div  className=" p-1 relative group">
              <div className="relative overflow-hidden"> */}
          <Link href={`/cloth/${item.id}`}>
            <Image 
                  src={item.images[0].url!} 
                  alt="item"
                  width={500}
                  height={500}
                  className="w-full h-90 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
          </Link>
          <div className="text-center">
            <h3 className="text-sm mt-2 w-full">{item.name}</h3>
            <p className="font-bold mt-1 ">£{item.price}</p>
            <Link href={`/cloth/${item.id}`}>
              <Button size="xs" className="border bg-transparent text-gray-800  text-xs md:text-sm  mt-2 hover:bg-light-blue-1 hover:text-white transition-colors duration-300">ADD TO CART</Button>
            </Link>
          </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
  )
}

export default Recommend