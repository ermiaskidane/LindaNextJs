import getOrders from '@/actions/get-order';
import React from 'react'

interface ProductReviewProps {
  searchParams: {
    orderId: string;
    email: string;
  }
}

const ProductReview = async({searchParams}:ProductReviewProps) => {
  console.log("searchparams", searchParams)

  const orders = await getOrders({ 
    orderId: searchParams.orderId,
  });

  console.log("orders", orders)
  return (
    <div>ProductReview</div>
  )
}

export default ProductReview