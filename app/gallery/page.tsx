export const revalidate = 60;

import GalleryContainer from "@/components/gallery/gallery-container";
import prisma from "@/lib/db";
import { Suspense } from "react";
import Loading from "../loading";

const GalleryPage = async () => {
  const galleryData = await prisma.galleryImage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mt-20 pb-[6.5rem]">
      <Suspense fallback={<Loading />}>
        <GalleryContainer initialGalleryImages={galleryData} />
      </Suspense>
    </div>
  );
};

export default GalleryPage;
