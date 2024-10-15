"use client";

import useCart from "@/hooks/use-cart";
import Currency from "@/lib/currency";
import Image from "next/image";
// import { useCartStore } from "@/hooks/useCartStore";
// import { media as wixMedia } from "@wix/sdk";
// import { useWixClient } from "@/hooks/useWixClient";
// import { currentCart } from "@wix/ecom";

const CartModal = () => {
  // TEMPORARY
  // const cartItems = true;

  // const wixClient = useWixClient();
  // const { cart, isLoading, removeItem } = useCartStore();
  const {items, removeItem, isLoading} = useCart()

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  console.log("dfds", totalPrice)

  console.log("dsd", items)

  // const handleCheckout = async () => {
  //   try {
  //     const checkout =
  //     // of all the 12 enum channels we go with "WEB"(https://dev.wix.com/docs/sdk/backend-modules/ecom/current-cart/create-checkout-from-current-cart)
  //       await wixClient.currentCart.createCheckoutFromCurrentCart({
  //         channelType: currentCart.ChannelType.WEB,
  //       });

  //     const { redirectSession } =
  //       await wixClient.redirects.createRedirectSession({
  //         ecomCheckout: { checkoutId: checkout.checkoutId },
  //         callbacks: {
  //           postFlowUrl: window.location.origin,
  //           thankYouPageUrl: `${window.location.origin}/success`,
  //         },
  //       });

  //     if (redirectSession?.fullUrl) {
  //       window.location.href = redirectSession.fullUrl;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 md:top-16 right-0 flex flex-col gap-6 z-20">
      {!items ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl text-black font-semibold">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {items.map((item) => (
              <div className="flex gap-4" key={item.id}>
                {item.images && (
                  <Image
                    src={item.images[0].url}
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                )}
                <div className="flex flex-col justify-between w-full">
                  {/* TOP */}
                  <div className="">
                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="text-black font-semibold">
                        {item.name}
                      </h3>
                      <div className="p-1 text-black bg-gray-100 rounded-sm flex items-center gap-2">
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-xs text-green-500">
                            {item.quantity} x{" "}
                          </div>
                        )}
                        £{item.price}
                      </div>
                    </div>
                    {/* DESC */}
                    <div className="text-sm text-gray-500">
                      {item.name.slice(0, 5)} / {item.color.name}
                      {/* Available */}
                    </div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 !text-sm">Qty. {item.quantity}</span>
                    <span
                      className="text-blue-500 text-right"
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(item.id, item.sizeId)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              {/* @ts-ignore */}
              <Currency value={totalPrice} />
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 text-black">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                // disabled={isLoading}
                // onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;