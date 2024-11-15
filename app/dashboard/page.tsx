import { auth } from "../auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { format } from "date-fns";
import UserCard from "@/components/user-card";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns";

import { getGalleryImages } from "../actions";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/login");

  const gallery = await getGalleryImages();

  const formattedGallery = gallery.map((image) => ({
    ...image,
    createdAt: format(image.createdAt, "dd.MM.yy"),
    fileName: image.fileName.length > 20 ? `${image.fileName.slice(0, 20)}...` : image.fileName,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <div>
          <UserCard username={session?.user?.name as string} />
        </div>
        <div>
          <DataTable columns={columns} data={formattedGallery} />
        </div>
      </div>
    </div>
  );
};

export default Page;
