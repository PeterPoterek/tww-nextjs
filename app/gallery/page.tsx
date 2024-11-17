import GalleryContainer from "@/components/gallery-container";
import prisma from "@/lib/db";

const page = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = parseInt((await searchParams.page) || "1", 10);
  const pageSize = 9;

  const totalImages = await prisma.galleryImage.count();

  const gallery = await prisma.galleryImage.findMany({
    orderBy: {
      createdAt: "desc",
    },
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  });

  const totalPages = Math.ceil(totalImages / pageSize);

  return (
    <div>
      <GalleryContainer galleryImages={gallery} currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default page;
