import GalleryContainer from "@/components/gallery-container";
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
    <div>
      <Suspense fallback={<Loading />}>
        <GalleryContainer initialGalleryImages={galleryData} />
      </Suspense>
    </div>
  );
};

export default GalleryPage;
