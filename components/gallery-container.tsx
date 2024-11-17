"use client";

import { GalleryImage as GalleryImageTypes } from "@prisma/client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { Button } from "@/components/ui/button";
import GalleryImage from "./gallery-image";

type GalleryContainerProps = {
  galleryImages: GalleryImageTypes[];
  currentPage: number;
  totalPages: number;
};

const GalleryContainer = ({ galleryImages, currentPage, totalPages }: GalleryContainerProps) => {
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0); // Track which image is opened in lightbox

  const fixedWidth = 360;
  const fixedHeight = 268;

  const slides = galleryImages.map((image) => ({
    src: image.url,
    alt: image.fileName,
    width: fixedWidth,
    height: fixedHeight,
  }));

  const handlePageChange = (page: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", page.toString());
    window.location.href = url.toString();
  };

  return (
    <div className="flex flex-col items-center">
      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4 pt-10 max-w-[1128px]">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setOpen(true);
              setLightboxIndex(index);
            }}
            className="relative overflow-hidden rounded-md"
          >
            <img
              src={image.url}
              alt={image.fileName || `Image ${index + 1}`}
              className="object-cover w-full h-full"
              style={{ width: fixedWidth, height: fixedHeight }}
            />
          </button>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 gap-2">
        <Button variant="outline" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Poprzednia
        </Button>
        <span>
          Strona {currentPage} z {totalPages}
        </span>
        <Button variant="outline" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Następna
        </Button>
      </div>

      {/* Lightbox */}
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
