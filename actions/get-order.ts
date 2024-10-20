import { Order } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/orders`;

interface Query {
  orderId?: string;
}

const getOrders = async (query: Query): Promise<Order> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      orderId: query.orderId,
    },
  });
  const res = await fetch(url);

  return res.json();
};

export default getOrders;