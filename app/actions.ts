"use server";

import { auth } from "./auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { UTApi } from "uploadthing/server";

export async function getGalleryImages() {
  const session = await auth();

  if (!session) redirect("/login");

  const gallery = await prisma.galleryImage.findMany();
  return gallery;
}

export async function deleteGalleryImage(id: string) {
  const session = await auth();
  const utapi = new UTApi();

  if (!session) redirect("/login");

  const deletedImage = await prisma.galleryImage.delete({
    where: {
      id: id,
    },
  });

  const key = deletedImage.url.slice(18);
  await utapi.deleteFiles(key);

  return deletedImage;
}
