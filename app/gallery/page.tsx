import prisma from "@/lib/db";
import Image from "next/image";

const page = async () => {
  const gallery = await prisma.galleryImage.findMany();

  console.log(gallery);

  return (
    <ul className="flex gap-5 p-5 justify-center items-center">
      {gallery.map((image, index) => {
        return (
          <li key={index} className="w-80">
            <Image src={image.url} key={image.id} alt="image" width={500} height={350} />
          </li>
        );
      })}
    </ul>
  );
};

export default page;
