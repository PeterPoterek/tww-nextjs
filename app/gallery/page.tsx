import GalleryContainer from "@/components/gallery-container";
import prisma from "@/lib/db";

const GalleryPage = async () => {
  const galleryData = await prisma.galleryImage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <GalleryContainer initialGalleryImages={galleryData} />
    </div>
  );
};

export default GalleryPage;
