import useCart from '@/hooks/use-cart';
import { data } from '@/lib/data';
import { ShoppingBag } from 'lucide-react';
import React, {useState} from 'react'

interface AddQuantityProps {
  product: typeof data[0];
  selectedSize: string | null;
  selectedColor: string | null;
}


const AddQuantity: React.FC<AddQuantityProps> = ({ product, selectedSize, selectedColor }) => {

  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);

  // quantity of the product
  const stockNumber = product.quantity
 

  const {addItem} = useCart()

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleAddToBag = () => {
    if (!selectedSize || !selectedColor) {
      setError('Please select both size and color.');
      return;
    }

    setError(null); // Clear error if both are selected
    addItem({ ...product, size: selectedSize, color: selectedColor, quantity });
  };
  return (
    <div className="flex flex-col gap-4">
    <h4 className="font-medium">Choose a Quantity</h4>
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
          <button
            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
            onClick={() => handleQuantity("d")}
            disabled={quantity===1}
          >
            -
          </button>
          {quantity}
          <button
            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
            onClick={() => handleQuantity("i")}
            disabled={quantity===stockNumber}
          >
            +
          </button>
        </div>
        {stockNumber < 1 ? (
          <div className="text-xs">Product is out of stock</div>
        ) : (
          <div className="text-xs">
            Only <span className="text-orange-500">{stockNumber} items</span>{" "}
            left!
            <br /> {"Don't"} miss it
          </div>
        )}
      </div>
    </div>
    <button
        onClick={handleAddToBag}
        className={`w-full bg-green-500 text-white py-3 rounded mt-6 flex items-center justify-center ${
          (!selectedSize || !selectedColor) ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={!selectedSize || !selectedColor}
      >
        <ShoppingBag className="w-5 h-5 mr-2" />
        Add to bag
      </button>
    {/* <button 
      onClick={() => addItem(product)}
      className="w-full bg-green-500 text-white py-3 rounded mt-6 flex items-center justify-center"
    >
      <ShoppingBag className="w-5 h-5 mr-2" />
      Add to bag
    </button> */}
  </div>
  )
}

export default AddQuantity