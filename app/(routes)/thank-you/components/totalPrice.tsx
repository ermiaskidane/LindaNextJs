"use client"

import Currency from '@/lib/currency'
import React from 'react'

interface TotalPriceProps {
  orderTotal:  number
}

const TotalPrice: React.FC<TotalPriceProps> = ({orderTotal}) => {

  console.log(typeof orderTotal)
  return (
    <div className='space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-muted-foreground'>
      <div className='flex justify-between'>
        <p>Subtotal</p>
        <p className='text-gray-900'>
          <Currency value={orderTotal} />

          {/* {formatter.format(orderTotal)} */}
        </p>
      </div>

      <div className='flex justify-between'>
        <p>Transaction Fee</p>
        <p className='text-gray-900'>
        <Currency value="1" />
          {/* {formatter.format(1)} */}
        </p>
      </div>

      <div className='flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900'>
        <p className='text-base'>Total</p>
        <p className='text-base'>
        <Currency value={orderTotal + 1} />
          {/* {formatter.format(orderTotal + 1)} */}
        </p>
      </div>
    </div>
  )
}

export default TotalPrice