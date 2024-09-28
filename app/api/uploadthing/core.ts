// import { auth } from "@/auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing()

const handleAuth = async () => {
  const session = await auth()

  if (!session?.user) throw new Error("Unauthorized")
  console.log("fsds", session.user)

  // Transform User object into a generic object
  const userRecord: Record<string, unknown> = {
    id: session.user.id,
  }

  return  userRecord
}

export const ourFileRouter = {
  clothesImage: f({ image: {maxFileSize: "8MB", maxFileCount: 8}})
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;