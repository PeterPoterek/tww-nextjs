import { GalleryImage } from "@prisma/client";
import Image from "next/image";

type GalleryContainerProps = {
  galleryImages: GalleryImage[];
};

const GalleryContainer = ({ galleryImages }: GalleryContainerProps) => {
  return (
    <ul className="flex gap-5 p-5 justify-center items-center">
      {galleryImages.map(({ id, url }) => (
        <li key={id} className="w-80">
          <Image src={url} alt="image" width={500} height={350} />
        </li>
      ))}
    </ul>
  );
};

export default GalleryContainer;
