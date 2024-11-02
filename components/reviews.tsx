


import { Product, Review } from "@/types";
import { User } from "lucide-react";
import Image from "next/image";
 
const Reviews = async ({ product }: { product: Product & { reviews: Review[]}}) => {

  if (!product.reviews || product.reviews.length === 0) {
    return <h1>There is no review for this product.</h1>
  }
  return product.reviews.map((review: any) => (
    <div className="flex flex-col  gap-4" key={review.id}>
      {/* USER */}
      <div className="flex items-center gap-4 font-medium">
        <User/>
        {/* <Image
          src="/images/tamara-bellis-8.jpg"
          alt=""
          width={32}
          height={32}
          //  note: cz of the parent element override width and height of image/ nextjs 
          // I had to rewrite tailwind css in the className
          className="rounded-full h-[32px] w-[32px]"
        /> */}
        <span>{review.name}</span>
      </div>
      {/* STARS */}
      <div className="flex gap-2">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          <svg
            className={`w-4 h-4 ${
              index < review.rating ? "fill-yellow-500" : "fill-slate-300"
            }`}
          >
            <use xlinkHref="/sprite.svg#icon-star" />
          </svg>
        </span>
      ))}
      </div>
      {/* DESC */}
      {review.comment && <p>{review.comment}</p>}
      <div className="">
        {/* {review.media.map((media: any) => (
          <Image
            src={media.url}
            key={media.id}
            alt=""
            width={100}
            height={50}
            className="object-cover"
          />
        ))} */}
      </div>
    </div>
  ));
};

export default Reviews;
// import Image from "next/image";

// const Reviews = async ({ productId }: { productId: string }) => {
//   const reviewRes = await fetch(
//     `https://api.fera.ai/v3/public/reviews?product.id=${productId}&public_key=${process.env.NEXT_PUBLIC_FERA_ID}`
//   );
//   const reviews = await reviewRes.json();

//   return reviews.data.map((review: any) => (
//     <div className="flex flex-col  gap-4" key={review.id}>
//       {/* USER */}
//       <div className="flex items-center gap-4 font-medium">
//         <Image
//           src={review.customer.avatar_url}
//           alt=""
//           width={32}
//           height={32}
//           className="rounded-full"
//         />
//         <span>{review.customer.display_name}</span>
//       </div>
//       {/* STARS */}
//       <div className="flex gap-2">
//         {Array.from({ length: review.rating }).map((_, index) => (
//           <Image src="/images/star.png" alt="" key={index} width={16} height={16} />
//         ))}
//       </div>
//       {/* DESC */}
//       {review.heading && <p>{review.heading}</p>}
//       {review.body && <p>{review.body}</p>}
//       <div className="">
//         {review.media.map((media: any) => (
//           <Image
//             src={media.url}
//             key={media.id}
//             alt=""
//             width={100}
//             height={50}
//             className="object-cover"
//           />
//         ))}
//       </div>
//     </div>
//   ));
// };

// export default Reviews;
