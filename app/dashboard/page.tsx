import { auth } from "../auth";
import SignOut from "@/components/sign-out";
import { redirect } from "next/navigation";
import Upload from "@/components/upload";
import prisma from "@/lib/db";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { formatDate } from "@/lib/utils";

const page = async () => {
  const session = await auth();

  console.log(session);

  if (!session) redirect("/login");

  const gallery = await prisma.galleryImage.findMany();
  console.log(gallery);

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
            {gallery.map(({ id, fileName, url, createdAt }) => (
              <li key={id} className="flex items-center gap-1 ">
                <Image src={url} alt="image" width={75} height={75} />
                <span>{fileName}</span>
                <span>{formatDate(createdAt)}</span>
                <Button>X</Button>
              </li>
            ))}
          </ul>

          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
