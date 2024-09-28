"use client";


// On Production Chnage the querystring arguement to Id intead of name
import qs from "query-string";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { brand, categories, color, size } from "@/lib/data";
import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useRouter, useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
// import { Slider, Switch } from 'antd';

interface FilterScrollProps {
  title: string;
  valueKey: string;
  // filter?: typeof categories | typeof color | typeof size | typeof brand
  filter?: any
}

function valuetext(value: number) {
  return `${value}°C`;
}

const FilterScroll = ({filter, title, valueKey}: FilterScrollProps) => {

  const [value, setValue] = useState<number[]>([20, 37]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  // console.log("selectedValue", selectedValue)
  console.log("filter", filter) 

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    updateUrlParams(newValue as number[]);
  };


  const onClick = (id: string) => {
    // console.log("id", id)
    const current = qs.parse(searchParams.toString())

    const query = {
      ...current,
      [valueKey]: id
    }

    if(current[valueKey] === id) {
      query[valueKey] = null
    }

    // make the url
    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, {skipNull: true})

    router.push(url);
  }

  // query string for the price range
  const updateUrlParams = (range: number[]) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [`${valueKey}_min`]: range[0].toString(),
      [`${valueKey}_max`]: range[1].toString(),
    };
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url);
  };

  return (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="py-3">{title}</AccordionTrigger>
              <AccordionContent>
                {title !== "Price" ? (
                  <ScrollArea className="h-40 w-full ml-2 ">
                      {filter?.map((filt: any, i:number) => (
                        <ul className=" cursor-pointer" key={i}>
                          <li className="pb-2 px-2 flex justify-between" onClick={() => onClick(filt.id)}>
                            {filt.name}
                            {/* check mark only if the selected value matches with the filt.name */}
                            {selectedValue === filt.id && (
                              <span className={cn("inline-block",
                                selectedValue ===  filt.id && 'text-[#0084c1fb]',
                              )}>
                                <Check />
                              </span>
                            )}
                          </li>
                          {/* <Separator className="bg-blue-200" /> */}
                        </ul>
                      ))}
                    </ScrollArea>
                ): (
                  // <Slider defaultValue={[10, 90]} max={100} step={2} />
                  // https://mui.com/material-ui/react-slider/
                  <div className="flex justify-between items-center py-10">
                    <p>£0</p>
                    <Slider
                      getAriaLabel={() => 'Price range'}
                      value={value}
                      max={500}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      className="mx-2"
                    />
                    <p>£500</p>
                  </div>
                  // <div className="price-range-container">
                  //   <label htmlFor="price-range">Price Range:</label>
                  //   <input type="range" id="price-range" name="price-range" min="0" max="100" />
                  //   <span className="min-price">$0</span>
                  //   <span className="max-price">$100</span>
                  // </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
   );
}
 
export default FilterScroll;