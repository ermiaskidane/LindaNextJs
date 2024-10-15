
import { Suspense } from "react"
import Reviews from "@/components/reviews"
import ProductDeatil from "./components/productDeatil";
import Recommend from "./components/recommend";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import getColors from "@/actions/get-colors";
import getSizes from "@/actions/get-sizes";

const Cloth = async({
  params
}: {
  params: { clotheId: string}
}) => {

  const productsss = await getProduct(params.clotheId);
  // console.log("@@@@@@@@@@@@@@@@@", productsss)


  // Note  that get the category of the selected product so it can list 
  // the size and color of the same category
  const category = await getProducts({
    categoryId: productsss.categoryId
  })

  const colors = await getColors()
  const sizes = await getSizes()

  // console.log("><><><><><", colors)
  // console.log("~~@~@~@~@~@~@~@", sizes)
  // console.log(">>>>>>>", category)

  return (
    <div className="px-4 mx-auto py-8">
      <ProductDeatil product={productsss} category={category} colors={colors} sizes={sizes}/>
      <Recommend/>
      <div className="py-4">
        <h1 className="font-bold py-2 text-2xl ">User Reviews</h1>
        <Suspense fallback="Loading...">
          <Reviews productId="3fb6a3c8-988b-8755-04bd-5c59ae0b18ea" />
        </Suspense>
      </div>
    </div>
  );
}
 
export default Cloth;