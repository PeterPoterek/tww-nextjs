"use server";

import { auth } from "./auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";

export async function getGalleryImages() {
  const session = await auth();

  if (!session) redirect("/login");

  const gallery = await prisma.galleryImage.findMany();
  return gallery;
}
