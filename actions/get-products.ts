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
  const queryParams: Record<string, any> = {};
  
  if (query.colorId) queryParams.colorId = query.colorId;
  if (query.sizeId) queryParams.sizeId = query.sizeId;
  if (query.min_price) queryParams.min_price = query.min_price;
  if (query.max_price) queryParams.max_price = query.max_price;
  if (query.categoryId) queryParams.categoryId = query.categoryId;
  if (query.isFeatured !== undefined) queryParams.isFeatured = query.isFeatured;
  
  const url = qs.stringifyUrl({
    url: URL,
    query: queryParams,
  });

  const res = await fetch(url);
  return res.json();
};

// const getProducts = async (query: Query): Promise<any[]> => {
//   const url = qs.stringifyUrl({
//     url: URL,
//     query: { 
//       colorId: query.colorId,
//       sizeId: query.sizeId,
//       min_price: query.min_price,
//       max_price: query.max_price,
//       categoryId: query.categoryId,
//       isFeatured: query.isFeatured,
//     },
//   });

//   const res = await fetch(url);

//   return res.json();
// };

export default getProducts;