"use client";

import ProductModal from "@/components/modal/product-modal";
import { Plus } from "lucide-react";
import { Session } from "next-auth";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

interface ProductHeadingProps {
  admin?: Session["user"] & { role?: "ADMIN" | "USER" }; 
}

const ProductHeading: React.FC<ProductHeadingProps> = ({admin}) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false);

  const OpenModal = (admin: Session["user"] & { role?: "ADMIN" | "USER" }) => {
    if (!admin || admin.role !== "ADMIN") {
      return null
    }

    setOpen(true)
  }

  const onSubmit = async (data: any) => {
    console.log("productHeading", data)
  }


  return (
    <>
    <ProductModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={onSubmit}
        loading={loading}
      />
      <div className="flex justify-between">
        <h3 className="font-medium text-l">Products Found (200)</h3>
          <div className="flex justify-between items-center ">

            {admin?.role === "ADMIN" && (
              <p 
              className="font-bold !mb-0 text-[#0084c1fb] cursor-pointer"
              // onClick={() => OpenModal(admin!)}
              // as mongodb has to check through ObjectIDwhich has hex string with 12 bytes I used a random number insted of string 
              onClick={() => router.push(`/listclothes/6512c326f323f44d75c5414d`)} 
              ><Plus className='inline w-5 h-5 -translate-y-0.5'/> Add Products</p>
            )}
          </div>
      </div>
    </>
  );
}
 
export default ProductHeading;