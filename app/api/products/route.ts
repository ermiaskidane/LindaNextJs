// import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Forward the request to your backend API
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

  const res = await fetch(apiUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    return NextResponse.error(); // Handle error
  }

  const data = await res.json();

  // console.log("dfdsgdf",data)

  // Return the response to your frontend
  return NextResponse.json(data);
}


// export async function POST(
//   req: Request,
// ) {
//   try {
//     // const session = await auth();

//     // console.log("session", session)

//     const body = await req.json();

//     const { name, price, quantity, categoryId, colorId, sizeId, images, description, isFeatured, isArchived } = body;

//     // console.log("product", body)

//     // we cant check isFeatured, isArchived cz they are boolean mean could be false
//     // if (!session) {
//     //   return new NextResponse("Unauthenticated", { status: 403 });
//     // }

//     if (!name) {
//       return new NextResponse("Name is required", { status: 400 });
//     }

//     // if (!images || !images.length) {
//     //   return new NextResponse("Images are required", { status: 400 });
//     // }

//     if (!price) {
//       return new NextResponse("Price is required", { status: 400 });
//     }

//     if (!quantity) {
//       return new NextResponse("Quantity is required", { status: 400 });
//     }

//     if (!categoryId) {
//       return new NextResponse("Category id is required", { status: 400 });
//     }

//     if (!colorId) {
//       return new NextResponse("Color id is required", { status: 400 });
//     }

//     if (!sizeId) {
//       return new NextResponse("Size id is required", { status: 400 });
//     }

//     if (!description) {
//       return new NextResponse("Description id is required", { status: 400 });
//     }

//     if (!images || !images.length) {
//       return new NextResponse("Images are required", { status: 400 });
//     }


//     const UserAdmin = await db.user.findFirst({
//       where: {
//         id: session.user?.id,
//       }
//     })

//     // console.log("dsjsf", UserAdmin)

//     if (UserAdmin?.role !== "ADMIN"){
//       return new NextResponse("Unauthorized", { status: 405 });
//     }

//     const product = await db.product.create({
//       data: {
//         name,
//         price,
//         quantity,
//         isFeatured,
//         isArchived,
//         categoryId,
//         colorId,
//         sizeId,
//         description,
//         // storeId: params.storeId,
//         images: {
//           createMany: {
//             data: [
//               ...images.map((image: { url: string }) => image),
//             ],
//           },
//         },
//       },
//     });
  
//     return NextResponse.json(product);
//   } catch (error) {
//     console.log('[PRODUCTS_POST]', error);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };
