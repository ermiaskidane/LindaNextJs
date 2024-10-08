
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

  const product = {
    id: '65cf9b7aa4e7c8104dd58ed0',
    name: 'black jersay',
    price: 25,
    description: 'quality clothes for hanging out',
    quantity: 10,
    isFeatured: true,
    isArchived: true,
    sizeId: '65cba68f230ca7119303f858',
    colorId: '65cba68f230ca7119303f85d',
    categoryId: '65cba68f230ca7119303f84b',
    createdAt: new Date('2024-02-16T17:29:30.000Z'),
    updatedAt: new Date('2024-02-17T14:14:34.000Z'),
    images: [
      {
        id: '65d0bf4a02e67bafae95e97b',
        productId: '65cf9b7aa4e7c8104dd58ed0',
        url: 'https://utfs.io/f/70fb3fc0-735c-4ec5-bb22-d4a94f7a8f5b-5z4hwk.jpg',
        createdAt: new Date('2024-02-17T14:14:34.000Z'),
        updatedAt: new Date('2024-02-17T14:14:34.000Z')
      },
      {
        id: '65d0bf4a02e67bafae95e97c',
        productId: '65cf9b7aa4e7c8104dd58ed0',
        url: 'https://utfs.io/f/948197f5-a995-4c0f-8a8d-c44da3d86418-5z4hwj.jpg',
        createdAt: new Date('2024-02-17T14:14:34.000Z'),
        updatedAt: new Date('2024-02-17T14:14:34.000Z')
      }
    ]
  }
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