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


const FilterDropDown = () => {
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
        </div>
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