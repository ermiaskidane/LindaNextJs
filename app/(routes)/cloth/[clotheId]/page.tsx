
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

  const product = await getProduct(params.clotheId);
  console.log("@@@@@@@@@@@@@@@@@", product)


  // Note  that get the category of the selected product so it can list 
  // the size and color of the same category
  const category = await getProducts({
    categoryId: product.categoryId
  })

  const colors = await getColors()
  const sizes = await getSizes()

  return (
    <div className="px-4 mx-auto py-8">
      <ProductDeatil product={product} category={category} colors={colors} sizes={sizes}/>
      <Recommend product={category}/>
      <div className="py-5">
        <h1 className="font-bold py-4 text-2xl ">User Reviews</h1>
        <Suspense fallback="Loading...">
          {/* <Reviews productId="3fb6a3c8-988b-8755-04bd-5c59ae0b18ea" /> */}
          <Reviews product={product} />
        </Suspense>
      </div>
    </div>
  );
}
 
export default Cloth;