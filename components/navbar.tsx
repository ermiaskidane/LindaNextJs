"use client"

import { useState } from "react";
import SideBar from "./sidebar";
import Backdrop from "./backdrop";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ShoppingBag, User } from "lucide-react";
import useLoginModal from "@/hooks/use-login-modal";
// import { UserButton, useAuth } from "@clerk/nextjs";
import { useCurrentUser } from "@/hooks/use-current-user";
import { UserButton } from "./auth/user-button";
import { useRouter } from "next/navigation";

const Navigation = () => {
  // const { userId } = useAuth();
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  // we can call this cz the auth is from next-auth/react for client component
  const user = useCurrentUser();
  const router = useRouter()

  const storeModal = useLoginModal();

  // console.log("open", open)
  // console.log("show", show)

  return ( 
  <header>
    <div className="navigation">
      <div className="navigation__logo w-full flex justify-between items-center md:justify-normal md:w-fit">
        <h2 className="grow">Linda Shop</h2>

        <div className="cursor-pointer md:hidden" >
        {user ? (
            <UserButton/>
          ): (
            <User onClick={storeModal.onOpen}/>
          )}
        </div>
      </div>

      

      <div className="navigation__search">
        <form action="#" className="navigation__search--box">
          <input
            type="text"
            name="search"
            placeholder="Search Your clothes here..."
            autoComplete="off"
          />
          <button type="submit">
            <svg>
              <use xlinkHref={`Sprite.svg#icon-magnifying-glass`} />
            </svg>
          </button>
        </form>
      </div>
      <div className="navigation__cart">
        {/* navigation__cart--items */}
        <div className="flex justify-between gap-2">
          <div className="cursor-pointer hidden md:block"  >
          {user ? (
            <UserButton/>
          ): (
            <User onClick={storeModal.onOpen} />
            // <User onClick={() => router.push('/authmy-auto/login')}/>
          )}
          </div>

          <div className="svg--bag cursor-pointer self-center">
          <ShoppingBag />
            {/* <svg>
              <use xlinkHref={`Sprite.svg#icon-shopping-bag`} />
            </svg> */}
          </div>
          {/* <div className="svg--bag">
            <svg>
              <use xlinkHref={`Sprite.svg#icon-shopping-bag`} />
            </svg>
          </div>

          <span>Shopping Cart</span>
          <span>0 items / $0.00</span> */}
        </div>
      </div>
    </div>
    <nav className="Nav">
      <div className="Nav__menu">
        <div className="Nav__menu--burger"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
         >
          <h3>
            <svg>
              <use xlinkHref={`Sprite.svg#icon-menu`} />
            </svg>
            <span>ALL CATEGORIES</span>
          </h3>
        </div>
        <label
          htmlFor="navi-toggle"
          className={cn("Nav__button hidden", open  && "show")}
        >
          <ul id="navi-toggle">
            <li className="Nav__detail--home">
              <Link href="/">
                <svg className="svg--icon">
                  <use xlinkHref={`Sprite.svg#icon-home`} />
                </svg>
                <span className="categories">Home</span>
                <svg>
                  <use xlinkHref={`Sprite.svg#icon-chevron-small-right`} />
                </svg>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/listclothes">
                <svg className="svg--icon">
                  <use xlinkHref={`Sprite.svg#icon-gift`} />
                </svg>
                <span className="categories">Dresses</span>
                <svg>
                  <use xlinkHref={`Sprite.svg#icon-chevron-small-right`} />
                </svg>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/">
                <svg className="svg--icon">
                  <use xlinkHref={`Sprite.svg#icon-suitcase`} />
                </svg>
                <span className="categories">Tops</span>
                <svg>
                  <use xlinkHref={`Sprite.svg#icon-chevron-small-right`} />
                </svg>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/">
                <svg className="svg--icon">
                  <use xlinkHref={`Sprite.svg#icon-camera`} />
                </svg>
                <span className="categories">ETHINIC WEAR</span>
                <svg>
                  <use xlinkHref={`Sprite.svg#icon-chevron-small-right`} />
                </svg>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/">
                <svg className="svg--icon">
                  <use xlinkHref={`Sprite.svg#icon-bed`} />
                </svg>
                <span className="categories">Party Wear</span>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/">
                <svg className="svg--icon">
                  <use xlinkHref={`Sprite.svg#icon-child`} />
                </svg>
                <span className="categories">Wester wear</span>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/blog">
                <svg className="svg--icon">
                  <use xlinkHref={`Sprite.svg#icon-bubbles2`} />
                </svg>
                <span className="categories">Blog</span>
              </Link>
            </li>
          </ul>
        </label>

        {/* ##### the mobile version ######## */}
        {/* {modal} */}
        {open && (
              <>
                <SideBar openHandler={() => setOpen((prevOpen) => !prevOpen)} />
                <Backdrop open={() => setOpen((prevOpen) => !prevOpen)} />
              </>
        )}
      </div>
      <div className="Nav__header">
        <div className="Nav__header--content">
          <div className="Nav__header--item">
            <h3>Free Shipping Worldwide</h3>
          </div>
          <span className="seperator">/</span>
          <div className="Nav__header--item">
            <h3>money back guarantee</h3>
          </div>
          <span className="seperator">/</span>
          <div className="Nav__header--item">
            <h3>instagram LindaShop</h3>
          </div>
        </div>
        <div className="Nav__header--bag">
        <ShoppingBag onClick={() => setShow((prevShow) => !prevShow)}/>
          {/* <svg 
          onClick={() => setShow((prevShow) => !prevShow)}
          >
            <use xlinkHref={`Sprite.svg#icon-shopping-bag`} />
          </svg> */}
          {/* {show} */}
          {show && (
            <div className="Nav__header--trolley">
              <svg>
                <use xlinkHref={`Sprite.svg#icon-shopping-bag`} />
              </svg>
              <p>Your Shopping Cart is Empty</p>
            </div>
          )}
        </div>
      </div>
      <div className="Nav__offer">
        <div className="Nav__offer--item">
          <h3>Some Offer</h3>
        </div>
      </div>
    </nav>
  </header> );
}
 
export default Navigation;