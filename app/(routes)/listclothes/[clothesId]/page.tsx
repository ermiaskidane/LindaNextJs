import { db } from "@/lib/db";
import ClothForm from "./components/cloth-form";

const ListCloth = async({ params} : {
  params: {clothesId: string}
}) => {

  const product = await db.product.findUnique({
    where: {
      id: params.clothesId
    },
    include: {
      images: true,
    }
  })

  const categories = await db.category.findMany();

  const sizes = await db.size.findMany();

  const colors = await db.color.findMany();
  // console.log("product", categories)
  // console.log("params.clothesId", params.clothesId)
  // params.clothesId
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ClothForm 
          categories={categories} 
          colors={colors}
          sizes={sizes}
          initialData={product}
        />
      </div>
    </div>
  );
}
 
export default ListCloth;