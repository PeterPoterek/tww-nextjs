"use client";

import { GalleryImage as GalleryImageTypes } from "@prisma/client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import GalleryImage from "./gallery-image";

type GalleryContainerProps = {
  galleryImages: GalleryImageTypes[];
};

const GalleryContainer = ({ galleryImages }: GalleryContainerProps) => {
  const [open, setOpen] = useState(false);

  const fixedWidth = 360;
  const fixedHeight = 268;

  const slides = galleryImages.map((image) => ({
    src: image.url,
    alt: image.fileName,
    width: fixedWidth,
    height: fixedHeight,
  }));

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-4 pt-10 max-w-[1128px]	">
        {galleryImages.map((image, index) => (
          <button key={index} onClick={() => setOpen(true)} className="relative overflow-hidden rounded-md">
            <img
              src={image.url}
              alt={image.fileName || `Image ${index + 1}`}
              className="object-cover w-full h-full"
              style={{ width: fixedWidth, height: fixedHeight }}
            />
          </button>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom]}
        render={{
          slide: (props) => <GalleryImage {...props} isGridImage={false} />,
        }}
      />
    </div>
  );
};

export default GalleryContainer;
