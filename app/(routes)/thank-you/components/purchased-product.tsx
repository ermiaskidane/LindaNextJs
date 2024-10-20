"use client"

import Currency from '@/lib/currency'
import { Order, OrderItem } from '@/types'
import Image from 'next/image'
import React from 'react'

interface PurchasedProductProps {
  items: OrderItem
  order: Order
}

const PurchasedProduct: React.FC<PurchasedProductProps> = ({
  items, order
}) => {
  return (
    <>
       <li
        // key={product.id}
        className='flex space-x-6 py-3'>
        <div className='relative h-16 w-16'>
            <Image
              fill
              src={items.product.images[0].url}
              // src="/images/fashion-1.jpg"
              alt={`${items.product.name} image`}
              className='flex-none rounded-md bg-gray-100 object-cover object-center'
            />
        </div>

        <div className='flex-auto flex flex-col justify-between'>
          <div className='space-y-1'>
            <h3 className='text-lg text-gray-900'>
              {items.product.name}
            </h3>
            </div>
        </div>

        <p className='flex-none font-medium text-gray-900 flex'>
          <span className=''>{items.quantity} *</span><Currency value={items.product.price}/>
        </p>
      </li>
    </>
  )
}

export default PurchasedProduct