import GalleryContainer from "@/components/gallery-container";
import prisma from "@/lib/db";

const page = async () => {
  const gallery = await prisma.galleryImage.findMany();

  return (
    <>
      <GalleryContainer galleryImages={gallery} />
    </>
  );
};

export default page;
