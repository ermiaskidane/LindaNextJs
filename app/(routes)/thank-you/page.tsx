import Image from 'next/image'
import { cookies } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { db } from '@/lib/db'
import { Product, User } from '@prisma/client'
import PurchasedProduct from './components/purchased-product'
import TotalPrice from './components/totalPrice'
import PaymentStatus from './components/paymentStatus'
import getOrders from '@/actions/get-order'

interface PageProps {
  searchParams: {
    orderId: string | undefined
  }
}

const ThankYouPage = async ({
  searchParams,
}: PageProps) => {
 
  const Order = await getOrders({ 
    orderId: searchParams.orderId
  });

  // console.log("sDFSfsd", Order)

  const orderTotal = Order.orderItems.reduce((total, item) => {
    // Convert price and quantity to numbers before performing arithmetic
    const price = Number(item.product.price); // or parseFloat(item.product.price) if it's a decimal
    const quantity = Number(item.quantity);   
      return total + (price * quantity)
  }, 0)


  return (
    <main className='relative lg:min-h-full'>
      <div className='hidden lg:block h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12'>
        <Image
          fill
          src="https://utfs.io/f/b0bacf69-28d0-4955-97bb-01f2a9c20967-orxhi2.webp"
          className='h-full w-full object-cover object-center'
          alt='thank you for your order'
        />
      </div>

      <div className='pl-4'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20 xl:gap-x-24'>
          <div className='lg:col-start-2'>
            <p className='text-sm font-medium text-blue-600'>
              Order successful
            </p>
            <h1 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Thanks for ordering
            </h1>
            {Order.isPaid ? (
              <p className='mt-2 text-base text-muted-foreground'>
                Your order was processed and your assets are
                available to download below. We&apos;ve sent
                your receipt and order details to{' '}
                {/* {typeof order.user !== 'string' ? (
                  <span className='font-medium text-gray-900'>
                    {order.email}
                  </span>
                ) : null} */}
                .
              </p>
            ) : (
              <p className='mt-2 text-base text-muted-foreground'>
                We appreciate your order, and we&apos;re
                currently processing it. So hang tight and
                we&apos;ll send you confirmation very soon!
              </p>
            )}

            <div className='mt-16 text-sm font-medium'>
              <div className='text-muted-foreground'>
                Order nr.
              </div>
              <div className='mt-2 text-gray-900'>
                {Order.id}
              </div>

              <ul className='mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-muted-foreground'>
                {(Order.orderItems).map(
                  (items) => (
                    <PurchasedProduct key={items.id} items={items} order={Order} />
                  )
                )}
              </ul>

              <TotalPrice orderTotal={orderTotal}/>

              <PaymentStatus
                isPaid={Order.isPaid}
                orderEmail={Order.address}
                orderId={Order.id}
              />

              <div className='mt-16 border-t border-gray-200 py-6 text-right'>
                <Link
                  href='/listclothes'
                  className='text-sm font-medium text-blue-600 hover:text-blue-500'>
                  Continue shopping &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ThankYouPage
