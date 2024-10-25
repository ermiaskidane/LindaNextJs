export interface Product {
  id: string;
  storeId: string;
  categoryId: string;
  category: Category;
  name: string;
  price: string;
  quantity: number;
  isFeatured: boolean;
  size: Size;
  sizeId: string;
  color: Color;
  colorId: string;
  images: Image[]
};

export interface Products extends Product {
  category: Category;
  size: Size;
  color: Color;
}
 
export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};

export interface Size {
  id: string;
  name: string;
  value: string;
};

export interface Color {
  id: string;
  name: string;
  value: string;
};

export interface Order {
  id: string;
  isPaid: boolean;
  phone: string;
  address: string;
  orderItems: OrderItem[]
}

export interface OrderItem {
  id: string;
  quantity: string;
  orderId: string;
  productId: string;
  product: Product
}