'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import { Button } from "./ui/button"
import { Products } from "@/types"

export default function ChatGPTCarousel({products, arrow}: {products: Products[], arrow: boolean}) {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      carousel.classList.add('active')
      startX = e.pageX - carousel.offsetLeft
      scrollLeft = carousel.scrollLeft
    }

    const onMouseLeave = () => {
      isDown = false
      carousel.classList.remove('active')
    }

    const onMouseUp = () => {
      isDown = false
      carousel.classList.remove('active')
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - carousel.offsetLeft
      const walk = (x - startX) * 2
      carousel.scrollLeft = scrollLeft - walk
    }

    carousel.addEventListener('mousedown', onMouseDown)
    carousel.addEventListener('mouseleave', onMouseLeave)
    carousel.addEventListener('mouseup', onMouseUp)
    carousel.addEventListener('mousemove', onMouseMove)

    return () => {
      carousel.removeEventListener('mousedown', onMouseDown)
      carousel.removeEventListener('mouseleave', onMouseLeave)
      carousel.removeEventListener('mouseup', onMouseUp)
      carousel.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
      <Carousel className="w-full">
        <div className="flex  items-center">
          {arrow && (
            <div className="flex  space-x-2">
              <CarouselPrevious className="relative inset-y-3 md:inset-y-5 translate-x-0 translate-y-0 h-8 w-8 dark:bg-none text-gray-700 dark:text-gray-300 ">
                <ChevronLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="relative inset-y-3 md:inset-y-5 translate-x-4 translate-y-0 h-8 w-8 dark:bg-none text-gray-700 dark:text-gray-300 ">
                <ChevronRight className="h-4 w-4" />
              </CarouselNext>
            </div>
          )}
        </div>
        <CarouselContent ref={carouselRef} className="cursor-grab active:cursor-grabbing mt-5">
          {products.map((item, index) => (
              <CarouselItem key={index} className="flex flex-col relative group basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                <div className="relative overflow-hidden ">
                  <Link href={`/cloth/${item.id}`}>
                    <Image 
                          src={item.images[0].url!} 
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
                  <h3 className="text-sm mt-2 w-full">{item.name}</h3>
                  <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          <svg className=" w-4 h-4 fill-slate-300">
                            <use xlinkHref="Sprite.svg#icon-star" />
                          </svg>
                        </span>
                      ))}
                  </div>
                  <p className="font-bold mt-1 ">£{item.price}</p>
                  <Link href={`/cloth/${item.id}`}>
                    <Button size="xs" className="border bg-transparent text-gray-800  text-xs md:text-sm  mt-2 hover:bg-light-blue-1 hover:text-white transition-colors duration-300">ADD TO CART</Button>
                  </Link>
                </div>
              </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
  )
}