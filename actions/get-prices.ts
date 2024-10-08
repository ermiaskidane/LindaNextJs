// import { Size } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/prices`;

const getPrices = async (): Promise<any[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getPrices;