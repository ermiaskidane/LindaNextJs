"use client"

import { cn } from "@/lib/utils";
import { Image, Product, User } from "@prisma/client";
import { Edit } from "lucide-react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";


interface CardProps {
  products: (Product & { images: Image[] })[]
  admin?: Session["user"] & { role?: "ADMIN" | "USER" }; 
  // Images: string[]
  paddingBottom?: boolean
}

const Card: React.FC<CardProps>  = ({products, admin, paddingBottom}) => {
  const router = useRouter()

  console.log("dfdsfs", products)
  return ( 
    <div className="menu__newProduct--options">
      <ul className="newProduct__options--lists newProducts--grid">
        {products.map((product, i) => (
          <li className={cn("options__lists--item", paddingBottom && "pb-8")} key={product.id}>
          <div className="options__list--wrapper">
            <figure className="options__lists--img relative">
              {admin?.role === "ADMIN" && (
              <div className="absolute top-1 right-2 z-50 bg-white p-2 rounded-full" onClick={() => router.push(`/listclothes/${product.id}`)}>
                <Edit className=" text-[#0084c1fb] rounded hover:scale-110" />
              </div>
             )} 
              <img src={product.images[0].url!} alt="item" />
            </figure>
            <div className="options__lists--info">
              <div className="options__lists--grid">
                <div className="icon__option icon--displace">
                  <span>
                    <svg>
                      <use xlinkHref={`Sprite.svg#icon-circle-with-plus`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`Sprite.svg#icon-heart`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`Sprite.svg#icon-star`} />
                    </svg>
                  </span>
                </div>
                <a href="#">Riot Jeans Casual Roll-up...</a>
                <div className="rating--box">
                  <span>
                    <svg>
                      <use xlinkHref={`Sprite.svg#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`Sprite.svg#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`Sprite.svg#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`Sprite.svg#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`Sprite.svg#icon-star`} />
                    </svg>
                  </span>
                </div>
                <div className="options__price">
                  <p>$100.00</p>
                </div>
                <div className="action__button">
                  <button type="button" className="button__cart">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        ))}
        

        {/* // <li className="options__lists--item">
        //   <div className="options__list--wrapper">
        //     <figure className="options__lists--img">
        //       <img src={Fashion8} alt="item" />
        //     </figure>
        //     <div className="options__lists--info">
        //       <div className="options__lists--grid">
        //         <div className="icon__option icon--displace">
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-circle-with-plus`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-heart`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //         </div>
        //         <a href="#">United Colors Of Benetto...</a>
        //         <div className="rating--box">
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //         </div>
        //         <div className="options__price">
        //           <p>$120.00</p>
        //         </div>
        //         <div className="action__button">
        //           <button type="button" className="button__cart">
        //             add to cart
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </li>
        // <li className="options__lists--item">
        //   <div className="options__list--wrapper">
        //     <figure className="options__lists--img">
        //       <img src={Fashion3} alt="item" />
        //     </figure>
        //     <div className="options__lists--info">
        //       <div className="options__lists--grid">
        //         <div className="icon__option icon--displace">
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-circle-with-plus`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-heart`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //         </div>
        //         <a href="#">casual sleeveless solid...</a>
        //         <div className="rating--box">
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //         </div>
        //         <div className="options__price">
        //           <p>$149.99</p>
        //         </div>
        //         <div className="action__button">
        //           <button type="button" className="button__cart">
        //             add to cart
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </li>
        // <li className="options__lists--item">
        //   <div className="options__list--wrapper">
        //     <figure className="options__lists--img">
        //       <img src={Fashion4} alt="item" />
        //     </figure>
        //     <div className="options__lists--info">
        //       <div className="options__lists--grid">
        //         <div className="icon__option icon--displace">
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-circle-with-plus`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-heart`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //         </div>
        //         <a href="#">Annabelle By Pantaloons...</a>
        //         <div className="rating--box">
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //           <span>
        //             <svg>
        //               <use xlinkHref={`Sprite.svg#icon-star`} />
        //             </svg>
        //           </span>
        //         </div>
        //         <div className="options__price">
        //           <p>$199.00</p>
        //         </div>
        //         <div className="action__button">
        //           <button type="button" className="button__cart">
        //             add to cart
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </li> */}
      </ul>
    </div>
   );
}
 
export default Card;