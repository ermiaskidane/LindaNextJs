import React from 'react'
import ReviewForm from './components/reviewForm';
import getOrders from '@/actions/get-order';
interface ProductReviewProps {
  searchParams: {
    orderId: string;
    email: string;
  }
}

const ProductReview = async({ searchParams }: ProductReviewProps) => {
  const orders = await getOrders({ 
    orderId: searchParams.orderId,
  });

  console.log("orders", orders)
  return (
    <div className="max-w-md my-6 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8 w-2/3 mx-auto">
        <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-1">Product Review</div>
        <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Share your thoughts</h2>
        <p className="mt-2 text-muted-foreground">Your feedback helps us improve our products and services.</p>
        <ReviewForm searchParams={searchParams} orders={orders}/>
      </div>
    </div>
  )
}

export default ProductReview