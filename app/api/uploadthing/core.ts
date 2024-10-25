// import { auth } from "@/auth";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing()

const handleAuth = async () => {
  const session = await auth()

  if (!session?.userId) throw new Error("Unauthorized")
  console.log("fsds", session.userId)

  // Transform User object into a generic object
  const userRecord: Record<string, unknown> = {
    id: session.userId,
  }

  return  userRecord
}

export const ourFileRouter = {
  clothesImage: f({ image: {maxFileSize: "8MB", maxFileCount: 8}})
    // .middleware(() => {}),
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
