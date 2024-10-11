"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Coffee, Sofa, Wifi } from 'lucide-react'
import Image from 'next/image'
import ServicesSection from './components/services'
import Home from './components/services'

export default function RemappingService() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: 'PROFESSIONAL',
      subtitle: 'REMAPPING',
      description: 'We offer remapping for around 90% of vehicles. This includes extra Power or Economy. DPF and EGR Reprogramming and Solutions for the vehicle\'s ADBlue system.',
      image: '/images/garage/garage3.jpg?height=600&width=1200',
    },
    {
      title: 'EXPERT',
      subtitle: 'DIAGNOSTICS',
      description: 'Our state-of-the-art diagnostic equipment can identify issues in your vehicle quickly and accurately, saving you time and money.',
      image: '/images/garage/garage4.jpg?height=600&width=1200',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
  <>
  <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 flex items-center justify-end">
              <div className="w-full md:w-1/2 px-4 md:px-8 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">{slide.title}</h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-orange-500 mb-4">{slide.subtitle}</h3>
                <p className="text-sm md:text-base mb-6">{slide.description}</p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors flex items-center">
                  View Service
                  <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>

    <div className="mx-auto px-4 py-8">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <div className="aspect-w-16 h-full aspect-h-9 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5453690319307!2d-0.2203214316747949!3d51.48718692801315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f3ee84ced85%3A0x57831dd7b6c971b9!2s12%20Bramber%20Rd%2C%20London%20W14%209PB%2C%20UK!5e0!3m2!1sen!2sus!4v1697145786750!5m2!1sen!2sus" 
            className="w-full h-full rounded-lg shadow-md"
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">My Car Garage</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6"></div>
          <p className="mb-4">
            With more than 20 years of experience in the field (20 Mechanical and 12 in remapping
            and advance diagnostics), we know our industry like the back of our hands. There's no
            challenge too big or too small, and we dedicate our utmost energy to every customer,
            large or small.
          </p>
          <p className="mb-8 font-bold">
            We are fully equipped to tackle any mechanical repair, from fitting a new bulb to
            replacing an entire engine.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full mb-2">
                <Sofa className="w-8 h-8 text-orange-500" />
              </div>
              <span className="text-sm">Comfortable Waiting Area</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full mb-2">
                <Coffee className="w-8 h-8 text-orange-500" />
              </div>
              <span className="text-sm">Complimentary Beverages</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full mb-2">
                <Wifi className="w-8 h-8 text-orange-500" />
              </div>
              <span className="text-sm">Free WiFi Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ServicesSection/>
    {/* <Home/> */}
  
  </>
  )
}

