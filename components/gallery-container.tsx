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

export default function GalleryContainer({ galleryImages, currentPage, totalPages }: GalleryContainerProps) {
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handlePageChange = (page: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", page.toString());
    window.location.href = url.toString();
  };

  return (
    <div className="flex flex-col items-center">
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10 max-w-[1128px] w-full">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative overflow-hidden rounded-md cursor-pointer"
            onClick={() => {
              setOpen(true);
              setLightboxIndex(index);
            }}
          >
            <GalleryImage src={image.url} alt={image.fileName || `Image ${index + 1}`} isGridImage={true} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 gap-2">
        <Button variant="outline" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous page">
          Poprzednia
        </Button>
        <span>
          Strona {currentPage} z {totalPages}
        </span>
        <Button variant="outline" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next page">
          Następna
        </Button>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages.map((image) => ({ src: image.url, alt: image.fileName }))}
        plugins={[Zoom]}
        index={lightboxIndex}
        render={{
          slide: ({ slide }) => (
            <div className="flex items-center justify-center w-full h-full">
              <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
                <GalleryImage src={slide.src} alt={slide.alt || ""} isGridImage={false} />
              </div>
            </div>
          ),
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
        carousel={{
          padding: 0,
          spacing: 0,
        }}
      />
    </div>
  );
}
