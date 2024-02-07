import { cn } from "@/lib/utils";

interface CardProps {
  Images: string[]
  paddingBottom?: boolean
}

// type ImageKeys = 'Fashion12' | 'Fashion5' | 'Fashion8' | 'Fashion4';

// interface CardProps {
//   Images: Record<ImageKeys, string>;
// }
const Card: React.FC<CardProps>  = ({Images, paddingBottom}) => {
  return ( 
    <div className="menu__newProduct--options">
      <ul className="newProduct__options--lists newProducts--grid">
        {Images.map((img, i) => (
          <li className={cn("options__lists--item", paddingBottom && "pb-8")} key={i}>
          <div className="options__list--wrapper">
            <figure className="options__lists--img">
              <img src={img} alt="item" />
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