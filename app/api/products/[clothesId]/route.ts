// import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { clothesId: string, } }
) {
  try {
    // const session = await auth();

    // console.log("session", session)

    const body = await req.json();

    const { name, price, quantity, categoryId, images, colorId, sizeId, isFeatured, isArchived, description } = body;

    console.log("product", body)

    // if (!session) {
    //   return new NextResponse("Unauthenticated", { status: 403 });
    // }

    if (!params.clothesId) {
      return new NextResponse("Product id is required", { status: 400 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!quantity) {
      return new NextResponse("Quantity is required", { status: 400 });
    }

    if (!images || !images.length) {
      return new NextResponse("Images are required", { status: 400 });
    }

    if (!price) {
      return new NextResponse("Price is required", { status: 400 });
    }

    if (!categoryId) {
      return new NextResponse("Category id is required", { status: 400 });
    }

    if (!colorId) {
      return new NextResponse("Color id is required", { status: 400 });
    }

    if (!sizeId) {
      return new NextResponse("Size id is required", { status: 400 });
    }

    if (!description) {
      return new NextResponse("Description id is required", { status: 400 });
    }

    const UserAdmin = await db.user.findFirst({
      where: {
        id: session.user?.id,
      }
    })

    if (UserAdmin?.role !== "ADMIN"){
      return new NextResponse("Unauthorized", { status: 405 });
    }

    // console.log("dds", images)

    // // here to update the images we have to delete them first 
    // await db.product.update({
    //   where: {
    //     id: params.clothesId
    //   },
    //   data: {
    //     name,
    //     price,
    //     quantity,
    //     categoryId,
    //     colorId,
    //     sizeId,
    //     description,
    //     images: {
    //       deleteMany: {},
    //     },
    //     isFeatured,
    //     isArchived,
    //   },
    // });

    // Combine deletion and creation of images into a single update call
    const updatedProduct = await db.product.update({
      where: {
        id: params.clothesId
      },
      data: {
        name,
        price,
        quantity,
        categoryId,
        colorId,
        sizeId,
        description,
        images: {
          deleteMany: {}, // Delete existing images
          createMany: {
            data: [
              ...images.map((image: { url: string }) => image),
            ],   // Add new images
          },
        },
        isFeatured,
        isArchived,
      },
    });

    // const product = await db.product.update({
    //   where: {
    //     id: params.clothesId
    //   },
    //   data: {
    //     images: {
    //       createMany: {
    //         data: [
    //           ...images.map((image: { url: string }) => image),
    //         ],
    //       },
    //     },
    //   },
    // })
  
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.log('[PRODUCT_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};