import FilterDropDown from "@/components/Filteration/filterDropDown";
import SortDropDown from "@/components/Filteration/sortDropDown";
import Card from "@/components/card";
import Menu from "@/components/menu";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown, ListFilter, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ProductHeading from "./components/ProductHeading";
import { getSession } from "next-auth/react";
import { auth } from "@/auth";
import { db } from "@/lib/db";

const Image1 = [
  "/images/fashion-1.jpg",
  "/images/fashion-3.jpg",
  "/images/fashion-4.jpg",
  "/images/fashion-9.webp",
  "/images/fashion-3.jpg",
  "/images/fashion-6.jpg",
  "/images/fashion-9.webp",
  "/images/fashion-10.webp",
  "/images/fashion-14.webp",
  "/images/fashion-5.jpg",
  "/images/fashion-9.webp",
  "/images/fashion-4.jpg"
]

const ListClothes = async() => {

  const session = await auth()
  const AdminUser = session?.user

  console.log("dksjbsf", AdminUser)

  const products = await db.product.findMany({
    include: {
      images: true
    }
  });

  // console.log("products", products)
  
  return ( 
    <div className="flex flex-col">
      <div className="flex mt-2">
        <div className="grow text-center border-r-2 border-neutral-500">
            <SortDropDown/>
        </div>
        <div className="grow text-center">
          <div className="flex justify-center gap-2 cursor-pointer">
            <FilterDropDown/>
          </div>
        </div>
      </div>
      
      <Separator className="my-4 h-[1px] bg-neutral-300" />
      <div className="px-4">
        <ProductHeading admin={AdminUser}/>
        {/* <Card Images={Image1} paddingBottom/> */}
        <Card products={products} admin={AdminUser} paddingBottom/>
      </div>
    </div>
  );
}
 
export default ListClothes;