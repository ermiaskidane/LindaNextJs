"use client"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SlidersHorizontal } from "lucide-react";
import FilterScroll from "./filterScroll";
import { brand, categories, color, size } from "@/lib/data";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getSizes from "@/actions/get-sizes";

interface FilterProps {
  filter: any
};

const FilterDropDown: React.FC<FilterProps> = ({
  filter
}) => {
  console.log("@@~~~~@@@~~~~~~", filter)
  // const categorys = await getCategory();
  // const colors = await getColors();
  // const sizes = await getSizes();
  // // const prices = await getPrices();
  // const searchParams = useSearchParams();

  // const router = useRouter();

  // this is to submit the selected options from user
  // const onClick = (id: string) => {
  //   const current = qs.parse(searchParams.toString());

  //   console.log(current)
  //   const query = {
  //     ...current,
  //     [valueKey]: id
  //   };

  //   // if current key matches with Id remove from query
  //   if (current[valueKey] === id) {
  //     query[valueKey] = null;
  //   }

  //   // make the url
  //   const url = qs.stringifyUrl({
  //     url: window.location.href,
  //     query,
  //   }, { skipNull: true });

  //   router.push(url);
  // }

  return (
    <Sheet>
      <SheetTrigger asChild>
      <div className="font-medium"> <SlidersHorizontal className="inline-block mr-1"/>Filter</div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Products</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <ScrollArea className="h-full w-full ">
        <div className="grid gap-2 py-1 font-medium">
          <div className="grid">
            {/*  */}
            <FilterScroll filter={filter.categories} valueKey="categoryId" title="Category"/>
          </div>
          <div className="grid">
            <FilterScroll filter={filter.sizes} valueKey="sizeId" title="Size"/>
          </div>
          <div className="grid">
            <FilterScroll filter={filter.colors} valueKey="colorId" title="Color"/>
          </div>
          {/* <div className="grid">
            <FilterScroll filter={categories} valueKey="styleId" title="Style"/>
          </div>
          <div className="grid">
            <FilterScroll filter={brand}  valueKey="brandId" title="Brand"/>
          </div> */}
          <div className="grid">
            <FilterScroll valueKey="priceId" title="Price"/>
          </div>
        </div>
          {/* ##########################################################
                      this the demo data
            ################################################### */}
        {/* <div className="grid gap-2 py-1 font-medium">
          <div className="grid">
            <FilterScroll filter={categories} valueKey="categoryId" title="Category"/>
          </div>
          <div className="grid">
            <FilterScroll filter={size} valueKey="sizeId" title="Size"/>
          </div>
          <div className="grid">
            <FilterScroll filter={color} valueKey="colorId" title="Color"/>
          </div>
          <div className="grid">
            <FilterScroll filter={categories} valueKey="styleId" title="Style"/>
          </div>
          <div className="grid">
            <FilterScroll filter={brand}  valueKey="brandId" title="Brand"/>
          </div>
          <div className="grid">
            <FilterScroll valueKey="priceId" title="Price"/>
          </div>
        </div> */}
        </ScrollArea>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
 
export default FilterDropDown;