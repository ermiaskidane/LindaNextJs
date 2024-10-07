import { Heart, ShoppingBag, Truck } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import AddQuantity from './addQuantity';
import { data } from '@/lib/data';

interface CustomizeProductProps {
  product: any;
  category: any[];
  colors:any[];
  sizes: any[];
}

const CustomizeProduct: React.FC<CustomizeProductProps> = ({
  product,
  category,
  colors,
  sizes
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // console.log(">>>>>>>", colorAndSize)

 // Define available colors for each size using useMemo 
 // it recalculated only when colorAndSize changes
 const colorAvailability = useMemo(() => {

  //Set automatically ensures uniqueness(won't repeat color), which is more efficient than using includes for arrays
  const availability: { [key: string]: Set<string> } = {
    xl: new Set(),
    s: new Set(),
    m: new Set(),
    l: new Set(),
    xs: new Set(),
    default: new Set(["white", "black", "blue", "yellow"]),
  };

  category.forEach((item) => {
    const sizeKey = item.size.value;
    const colorName = item.color.name.trim();

    if (availability[sizeKey]) {
      availability[sizeKey].add(colorName);
    } else {
      availability[sizeKey] = new Set([colorName]);
    }
  });

  // Convert Sets to Arrays for easier usage in the component
  const availabilityArray: { [key: string]: string[] } = {
    xl: [],
    s: [],
    m: [],
    l: [],
    xs: [],
    default: ["white", "black", "blue", "yellow"],
  };

  Object.keys(availability).forEach((size) => {
    if (size !== 'default') {
      availabilityArray[size] = Array.from(availability[size]);
    }
  });

  return availabilityArray;
}, [category]);


console.log("@@@@@@@@@@@@@@", colorAvailability)

// Function to get available colors based on selected size
const getAvailableColors = (size: string | null) =>
  size ? colorAvailability[size] || colorAvailability.default : colorAvailability.default;

// Update selectedSize and reset selectedColor if not available for the new size
const handleSizeSelection = (size: any) => {
  const availableColors = getAvailableColors(size.value);
  
  if (selectedColor && !availableColors.includes(selectedColor)) {
    setSelectedColor(null); // Reset color if not available for the new size
  }

  setSelectedSize(size.value);
};

// const colors = [
//   { name: 'white', class: 'bg-white' },
//   { name: 'black', class: 'bg-black' },
//   { name: 'blue', class: 'bg-blue-500' },
//   { name: 'yellow', class: 'bg-yellow-500' },
// ];

  return (
    <>
      <div className="flex justify-between items-center">
        <img
          src="https://utfs.io/f/bea20373-2165-45c9-99a7-0990dd87d37e-5z4hwj.jpg"
          alt="Nike logo"
          className="h-6"
        />
        <Heart className="w-6 h-6" />
      </div>
      <h1 className="text-2xl font-bold mt-4">Womens Pro 365 3 Inch Short</h1>
      <p className="text-gray-600">Iron Grey / White</p>
      <div className="mt-4">
        <span className="text-2xl font-bold">£22.99</span>
        <span className="ml-2 text-gray-500 line-through">RRP £27.99</span>
      </div>

      <div className="mt-4">
        <p className="font-semibold">Size</p>
        <div className="flex gap-2 mt-2">
          {/* {["XS", "S", "M", "L", "XL"].map((size: string) => ( */}
          {sizes.map((size: any) => (
            <button
              key={size}
              // onClick={() => setSelectedSize(size)}
              onClick={() => handleSizeSelection(size)}
              className={`border border-gray-300 px-3 py-1 rounded ${selectedSize === size.value ? 'bg-gray-300' : ''}`}
            >
              {size.value.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="font-semibold">Colors</p>
        <ul className="flex items-center gap-3 my-2">
          {colors.map((color) => {
            const availableColors = getAvailableColors(selectedSize);
            const isDisabled = !availableColors.includes(color.name);

            return (
              <li
                key={color.name}
                className={`w-8 h-8 rounded-full ring-1 ring-gray-300 relative  ${
                  isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                }`}
                style={{backgroundColor:color.value}}
                onClick={() => !isDisabled && setSelectedColor(color.id)}
              >
                {selectedColor === color.id && (
                  <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
                {isDisabled && (
                  <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <AddQuantity product={product} selectedSize={selectedSize} selectedColor={selectedColor}/>

      <div className="mt-6">
        <p className="flex items-center text-green-600">
          <Truck className="w-5 h-5 mr-2" />
          FREE UK Standard Delivery on all orders over £100
        </p>
      </div>
    </>
  );
};

export default CustomizeProduct;
