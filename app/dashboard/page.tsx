import { auth } from "../auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import Image from "next/image";

import { formatDate } from "@/lib/utils";
import PaginationControler from "@/components/pagination-controler";
import RemoveEntryButton from "@/components/remove-entry-button";
import { UTApi } from "uploadthing/server";
import UserCard from "@/components/user-card";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns";
import { format } from "date-fns";

const page = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const session = await auth();
  console.log(await session);

  if (!session) redirect("/login");

  const gallery = await prisma.galleryImage.findMany();
  const formattedGallery = gallery.map((image) => ({
    ...image,
    createdAt: format(image.createdAt, "dd.MM.yy"),
    fileName: image.fileName.length > 20 ? `${image.fileName.slice(0, 20)}...` : image.fileName,
  }));

  const page = (await searchParams["page"]) ?? 1;
  const per_page = (await searchParams["per_page"]) ?? 5;

  const entries = await prisma.galleryImage.findMany({
    skip: (Number(page) - 1) * Number(per_page),
    take: Number(per_page),
  });

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  entries.map((result) => {
    console.log(result.fileName);
  });

  const removeEntry = async (id: string) => {
    "use server";
    const utapi = new UTApi();

    try {
      const entry = await prisma.galleryImage.delete({
        where: { id },
      });
      const key = entry.url.slice(18);

      await utapi.deleteFiles(key);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center max-w-3xl gap-5 ">
        <UserCard username={session?.user?.name as string} />

        <DataTable columns={columns} data={formattedGallery} />
      </div>
    </div>
  );
};

export default page;
