// import { Size } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getStyles = async (): Promise<any[]> => {
  const res = await fetch(URL);
  
  return res.json();
};

export default getStyles;