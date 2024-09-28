import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getSizes from "@/actions/get-sizes";

export const filterData = async() => {
  const categories = await getCategory();
  const colors = await getColors();
  const sizes = await getSizes();
  // const prices = await getPrices();
  return { categories, colors, sizes };
}