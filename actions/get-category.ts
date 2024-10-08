// import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (): Promise<any> => {
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getCategory;