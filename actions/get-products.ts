// import { Product } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;
 
interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  min_price?: string;
  max_price?: string;
  isFeatured?: boolean;
}


const getProducts = async (query: Query): Promise<any[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      colorId: query.colorId,
      sizeId: query.sizeId,
      min_price: query.min_price,
      max_price: query.max_price,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;