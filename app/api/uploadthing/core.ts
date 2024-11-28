import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@/app/auth";
import prisma from "@/lib/db";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 10 } })
    .middleware(async ({}) => {
      const session = await auth();

      if (!session || !session.user) {
        throw new UploadThingError("Unauthorized");
      }

      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);

      try {
        const newImage = await prisma.galleryImage.create({
          data: {
            url: file.url as string,
            userId: metadata.userId as string,
            fileName: file.name as string,
          },
        });

        console.log(
          "Image record successfully created in the database",
          newImage,
        );
      } catch (error) {
        console.error("Error saving image record to the database:", error);
      }

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
