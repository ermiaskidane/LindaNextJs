import { Heart, Truck } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import AddQuantity from './addQuantity';
import { Category, Color, Product, Products, Size } from '@/types';

interface CustomizeProductProps {
  product: Product;
  category: Products[];
  colors: Color[];
  sizes: Size[];
}

const CustomizeProduct: React.FC<CustomizeProductProps> = ({
  product,
  category,
  colors,
  sizes,
}) => {
  // 1. State to store selected size and color IDs
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // console.log("Available Sizes:", sizes);

  // 2. Create a mapping from size ID to size value
  const sizeIdToValue = useMemo(() => {
    const mapping: { [id: string]: string } = {};
    sizes.forEach((size) => {
      mapping[size.id] = size.value;
    });
    return mapping;
  }, [sizes]);

  // 3. Define available colors for each size using useMemo
  const colorAvailability = useMemo(() => {
    const availability: { [key: string]: Set<string> } = {};

    category.forEach((item) => {
      const sizeValue = item.size.value;
      const size = sizes.find((s) => s.value === sizeValue);
      if (!size) return; // Skip if size not found

      const sizeId = size.id;
      const colorName = item.color.name.trim().toLowerCase(); // Normalize to lowercase for consistent comparison

      if (!availability[sizeId]) {
        availability[sizeId] = new Set();
      }
      availability[sizeId].add(colorName);
    });

    // Get all color names from the colors prop, normalized to lowercase
    const allColorNames = colors.map((color) => color.name.trim().toLowerCase());

    const availabilityArray: { [key: string]: string[] } = {};

    sizes.forEach((size) => {
      if (availability[size.id] && availability[size.id].size > 0) {
        // If specific colors are defined for the size, use them
        availabilityArray[size.id] = Array.from(availability[size.id]);
      } else {
        // If no specific colors, disable all colors by setting to empty array
        availabilityArray[size.id] = [];
      }
    });

    return availabilityArray;
  }, [category, sizes, colors]);

  // 4. Function to get available colors based on selected size ID
  const getAvailableColors = (sizeId: string | null) => {
    if (!sizeId) return colors.map((color) => color.name.trim().toLowerCase()); // If no size selected, enable all colors
    return colorAvailability[sizeId] || []; // Return available colors or empty array if none
  };

  // 5. Handle size selection
  const handleSizeSelection = (size: any) => {
    const availableColors = getAvailableColors(size.id);

    if (selectedColor) {
      // Find the color object based on selectedColor ID
      const selectedColorObj = colors.find((color) => color.id === selectedColor);
      if (selectedColorObj && !availableColors.includes(selectedColorObj.name.trim().toLowerCase())) {
        setSelectedColor(null); // Reset color if it's not available for the new size
      }
    }

    setSelectedSize(size.id);
  };

  return (
    <>
      {/* Header with Logo and Heart Icon */}
      <div className="flex justify-between items-center">
        <img
          src="https://utfs.io/f/bea20373-2165-45c9-99a7-0990dd87d37e-5z4hwj.jpg"
          alt="Nike logo"
          className="h-6"
        />
        <Heart className="w-6 h-6" />
      </div>

      {/* Product Title and Description */}
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600">{product.name.slice(0, 5)} / {product.color.name}</p>

      {/* Pricing Information */}
      <div className="mt-4">
        <span className="text-2xl font-bold">£{product.price}</span>
        <span className="ml-2 text-gray-500 line-through">RRP £270.99</span>
      </div>

      {/* Size Selection */}
      <div className="mt-4">
        <p className="font-semibold">Size</p>
        <div className="flex gap-2 mt-2">
          {sizes.map((size: any) => (
            <button
              key={size.id}
              onClick={() => handleSizeSelection(size)}
              className={`border border-gray-300 px-3 py-1 rounded ${
                selectedSize === size.id ? 'bg-gray-300' : ''
              }`}
            >
              {size.value.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="mt-4">
        <p className="font-semibold">Colors</p>
        <ul className="flex items-center gap-3 my-2">
          {colors.map((color) => {
            const availableColors = getAvailableColors(selectedSize);
            const colorNameLower = color.name.trim().toLowerCase();
            const isDisabled = selectedSize ? !availableColors.includes(colorNameLower) : false;

            return (
              <li
                key={color.id}
                className={`w-8 h-8 rounded-full ring-1 ring-gray-300 relative ${
                  isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => !isDisabled && setSelectedColor(color.id)}
              >
                {/* Selected Color Indicator */}
                {selectedColor === color.id && (
                  <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
                {/* Disabled Overlay */}
                {isDisabled && (
                  <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Quantity Selection Component */}
      <AddQuantity product={product} selectedSize={selectedSize} selectedColor={selectedColor} />

      {/* Delivery Information */}
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