"use client"

import { useState } from "react";
import SideBar from "./sidebar";
import Backdrop from "./backdrop";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton 
} from '@clerk/nextjs'
import { useRouter } from "next/navigation";
import CartModal from "./cartModal";
import useCart from "@/hooks/use-cart";

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartOpenMobile, setIsCartOpenMobile] = useState(false);

  const cart = useCart()

  // we can call this cz the auth is from next-auth/react for client component
  // const user = useCurrentUser();
  const router = useRouter()

  // console.log("open", open)
  // console.log("show", show)

  return ( 
  <header>
    <div className="navigation">
      <div className="navigation__logo w-full flex justify-between items-center md:justify-normal md:w-fit">
        <h2 className="grow">Linda Shop</h2>

        <div className="cursor-pointer md:hidden" >
        <SignedOut>
            <SignInButton>
              <button className="font-medium hover:text-primary block transition dark:hover:text-white  sm:text-base">sign in</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
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
              <use xlinkHref={`/sprite.svg#icon-magnifying-glass`} />
            </svg>
          </button>
        </form>
      </div>
      <div className="navigation__cart">
        {/* navigation__cart--items */}
        <div className="flex justify-between items-center gap-2">
          <div className="cursor-pointer hidden md:block"  >
          <SignedOut>
            <SignInButton>
              <button className="font-medium text-base">sign in</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>

          <div 
            className="svg--bag cursor-pointer self-center relative"
            onClick={() => setIsCartOpen((prev) => !prev)}
            >
              <ShoppingBag  className="p-2 text-white bg-[#0084c1fb] rounded-full"/>
            {cart.items.length !== 0 && (
              <span className=" absolute -top-2 left-3 text-base text-center font-bold align-middle rounded-full !w-6 h-6 bg-red-500 text-green-400">
                {cart.items.length}
              </span>
            )}
          </div>
          {isCartOpen && <CartModal />}
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
              <use xlinkHref={`/sprite.svg#icon-menu`} />
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
                  <use xlinkHref={`/sprite.svg#icon-home`} />
                </svg>
                <span className="categories">Home</span>
                <svg>
                  <use xlinkHref={`/sprite.svg#icon-chevron-small-right`} />
                </svg>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/listclothes">
                <svg className="svg--icon">
                  <use xlinkHref={`/sprite.svg#icon-gift`} />
                </svg>
                <span className="categories">Dresses</span>
                <svg>
                  <use xlinkHref={`/sprite.svg#icon-chevron-small-right`} />
                </svg>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/">
                <svg className="svg--icon">
                  <use xlinkHref={`/sprite.svg#icon-suitcase`} />
                </svg>
                <span className="categories">Tops</span>
                <svg>
                  <use xlinkHref={`/sprite.svg#icon-chevron-small-right`} />
                </svg>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/">
                <svg className="svg--icon">
                  <use xlinkHref={`/sprite.svg#icon-camera`} />
                </svg>
                <span className="categories">ETHINIC WEAR</span>
                <svg>
                  <use xlinkHref={`/sprite.svg#icon-chevron-small-right`} />
                </svg>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/">
                <svg className="svg--icon">
                  <use xlinkHref={`/sprite.svg#icon-bed`} />
                </svg>
                <span className="categories">Party Wear</span>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/">
                <svg className="svg--icon">
                  <use xlinkHref={`/sprite.svg#icon-child`} />
                </svg>
                <span className="categories">Wester wear</span>
              </Link>
            </li>
            <li className="Nav__detail--home">
              <Link href="/blog">
                <svg className="svg--icon">
                  <use xlinkHref={`/sprite.svg#icon-bubbles2`} />
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
        <div className="Nav__header--bag relative ">
        <ShoppingBag className="p-1 text-[#0084c1fb] bg-[#0084c1fb] rounded-full" onClick={() => setIsCartOpenMobile((prev) => !prev)}/>
          {cart.items.length !== 0 && (
            <span className=" absolute -top-2 left-3 text-sm text-center align-middle rounded-full w-5 h-5 bg-red-500 text-green-400">
              {cart.items.length}
            </span>
          )}
        {isCartOpenMobile && <CartModal />}
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