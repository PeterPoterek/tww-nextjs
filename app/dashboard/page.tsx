import { auth } from "../auth";
import SignOut from "@/components/sign-out";
import { redirect } from "next/navigation";
import Upload from "@/components/upload";
import prisma from "@/lib/db";
import Image from "next/image";

import { formatDate } from "@/lib/utils";
import PaginationControler from "@/components/pagination-controler";
import RemoveEntryButton from "@/components/remove-entry-button";
import { UTApi } from "uploadthing/server";

const page = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const session = await auth();
  console.log(await session);

  if (!session) redirect("/login");

  const gallery = await prisma.galleryImage.findMany();
  console.log(gallery);

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
    <div>
      <div className="flex flex-col justify-center items-center max-w-3xl gap-5 ">
        <div>
          Current user: <p className="font-bold">{session?.user?.name}</p>
          <SignOut />
        </div>

        <div>
          <Upload />
        </div>

        <div>
          <ul className="flex flex-col gap-5 p-5 justify-center items-center ">
            {entries.map(({ id, fileName, url, createdAt }) => (
              <li key={id} className="flex items-center gap-1 ">
                <Image src={url} alt="image" width={75} height={75} />
                <span>{fileName}</span>
                <span>{formatDate(createdAt)}</span>
                <RemoveEntryButton id={id} fileName={fileName} removeEntry={removeEntry} />
              </li>
            ))}
          </ul>

          <div>
            <PaginationControler hasNextPage={end < gallery.length} hasPrevPage={start > 0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
