"use client"

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown, ListFilter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"]

const Sort = [
  {name: "Most popular"},
  {name: "Alphabetical"},
  {name: "Price: Low - High"},
  {name: "Price: High - Low"},
]

const SortDropDown = () => {

  const [selectedSortIndex, setSelectedSortIndex] = useState<number | null>(null);

  const handleSortItemClick = (index: number) => {
    setSelectedSortIndex(index === selectedSortIndex ? null : index);
  };
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="font-medium"> <ArrowUpDown className="inline-block mr-1"/> Sort</div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
      {Sort.map((srt, i) => (
          <DropdownMenuCheckboxItem
          key={i}
          checked={i === selectedSortIndex}
          onCheckedChange={() => handleSortItemClick(i)}
        >
          {srt.name}
        </DropdownMenuCheckboxItem>
      ))}
      </DropdownMenuContent>
    </DropdownMenu>
   );
}
 
export default SortDropDown;