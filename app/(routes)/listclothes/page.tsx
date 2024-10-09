import SortDropDown from "@/components/Filteration/sortDropDown";
import Card from "@/components/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import getProducts from "@/actions/get-products";
import { filterData } from "@/lib/filterData";
import FilterDropDown from "@/components/Filteration/filterDropDown";

// const Image1 = [
//   "/images/fashion-1.jpg",
//   "/images/fashion-3.jpg",
//   "/images/fashion-4.jpg",
//   "/images/fashion-9.webp",
//   "/images/fashion-3.jpg",
//   "/images/fashion-6.jpg",
//   "/images/fashion-9.webp",
//   "/images/fashion-10.webp",
//   "/images/fashion-14.webp",
//   "/images/fashion-5.jpg",
//   "/images/fashion-9.webp",
//   "/images/fashion-4.jpg"
// ]

interface ListClothesProps {
  searchParams: {
    brandId: string;
    categoryId: string;
    colorId: string;
    priceId_max: string;
    priceId_min: string;
    sizeId: string;
    styleId: string;
  }
}

const ListClothes: React.FC<ListClothesProps>  = async({searchParams}) => {

  console.log("dddd", searchParams)
  const user = auth()

  // const productss = await getProducts({ isFeatured: true });
  const filtrated = await filterData();
  //  console.log("@@@@@@@@@@@@@@@", filtrated)
  const products = await getProducts({ 
    categoryId: searchParams.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
    min_price: searchParams.priceId_min,
    max_price: searchParams.priceId_max
  });
  // console.log("@@@@@@@@@@@@@@@", products)

  // const products = await db.product.findMany({
  //   include: {
  //     images: true
  //   }
  // });
  
  return (
    <div className="flex flex-col">
      <div className="flex mt-2">
        <div className="grow text-center border-r-2 border-neutral-500">
            <SortDropDown/>
        </div>
        <div className="grow text-center">
          <div className="flex justify-center gap-2 cursor-pointer">
            <FilterDropDown filter={filtrated} />
          </div>
        </div>
      </div>
      
      <Separator className="my-4 h-[1px] bg-neutral-300" />
      <div className="px-4">
        {/* <ProductHeading admin={user}/> */}
        {/* <Card products={products} admin={user} paddingBottom/> */}
        <Card products={products} paddingBottom/>
      </div>
    </div>
  );
}
 
export default ListClothes;