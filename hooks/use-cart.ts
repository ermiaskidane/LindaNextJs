import { create } from "zustand";
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware";
import { Products } from "@/types";
// import { CartProduct } from "@/type";

export interface Product {
  id: string;
  storeId: string;
  name: string;
  description: string;
  categoryId: string;
  price: number;
  quantity : number;
  isFeatured: Boolean;
  isArchived: Boolean;
  sizeId: string;
  colorId: string;
  imageUrl: string[];
  // stripeId: string;
  // priceId: string;
  // serverId: string;
  // userId: string;
  createdAt: Date;
  updatedAt: Date;
  // sizes: ProductSize[];
}

interface CartStore {
  items:  Products[];
  isLoading: boolean;
  addItem: (data:  Products) => void;
  removeItem: (id: string, sizeId: string) => void;  
  removeAll: () => void;
}


const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    isLoading: true,
    addItem: (data: Products) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id && item.sizeId === data.sizeId);

      console.log("~~~~~~~~~~~", currentItems, data)
      
      if (existingItem) {
        return toast('Item already in cart.');
      }

      // set({ items: [...get().items, data] });
      // toast.success('Item added to cart.');

      set({ items: [...currentItems, data], isLoading: false });
      toast.success('Item added to cart.');
    },
    // Takes an additional sizeId argument to remove the correct size variant of the item from the cart.
    removeItem: (id: string, sizeId: string) => {
      set({ items: get().items.filter((item) => !(item.id === id && item.sizeId === sizeId)), isLoading: false });
      toast.success('Item removed from cart.');
    },
    removeAll: () => set({ items: [] }),
  }), {
    name: 'LindaProduct-storage',
    storage: createJSONStorage(() => localStorage)
  }))

  export default useCart;
