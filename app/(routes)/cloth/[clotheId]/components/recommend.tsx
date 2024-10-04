"use clients"; 
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

const Recommend = () => {
  return (
    <div className="mx-auto px-4 mt-12">
      <h2 className="text-xl mb-4 font-semibold ">You may also like...</h2>
      {/* max-w-7xl */}
      <Carousel className="w-full ">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/5">
            <div className="p-1">
              <Card className="space-y-4 text-center">
              <Image src="https://utfs.io/f/caa9e711-ce03-4a81-bcdd-9a9e32a979ac-5z4hwi.jpg" alt="Nike Womens Pro Indy Plunge Sports Bra"
                      width={80}
                      height={80}
                      className="w-full h-auto rounded-lg" />
                    <h3 className="font-bold">Nike Womens Pro Indy Plunge Sports Bra</h3>
                    <p className="text-red-600 font-bold">£14.99 <span className="text-gray-500 font-normal">RRP £27.99</span></p>
                {/* <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent> */}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        {/* <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">You may also like...</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            //  Product cards 
            {[
              { id: 1, name: "Nike Womens Pro Indy Plunge Sports Bra", price: "£34.99", rrp: "£44.99", image: "https://utfs.io/f/caa9e711-ce03-4a81-bcdd-9a9e32a979ac-5z4hwi.jpg" },
              { id: 2, name: "Montirex Womens Icon Contrast Legging", price: "£27.99", rrp: "£34.99", image: "https://utfs.io/f/caa9e711-ce03-4a81-bcdd-9a9e32a979ac-5z4hwi.jpg" },
              { id: 3, name: "Zavetti Canada Womens Bellucci 2.0 Crop Jacket", price: "£49.99", rrp: "£109.99", image: "https://utfs.io/f/caa9e711-ce03-4a81-bcdd-9a9e32a979ac-5z4hwi.jpg" },
              { id: 4, name: "Nike Womens Phoenix Oversized Fleece Pants", price: "£39.99", rrp: "£54.99", image: "https://utfs.io/f/caa9e711-ce03-4a81-bcdd-9a9e32a979ac-5z4hwi.jpg" },
              { id: 5, name: "Nike Womens Dri-FIT Pro Short Sleeve Top", price: "£14.99", rrp: "£27.99", image: "https://utfs.io/f/caa9e711-ce03-4a81-bcdd-9a9e32a979ac-5z4hwi.jpg" },
            ].map((product, index) => (
              <div className="flex-shrink-0 w-48">
                    <Image src={product.image} alt={product.name}
                      width={80}
                      height={80}
                      className="w-full h-auto rounded-lg" />
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-red-600 font-bold">{product.price} <span className="text-gray-500 font-normal">RRP {product.rrp}</span></p>
                </div>
            ))}
          </div>
        </section> */}
      </div>
  )
}

export default Recommend