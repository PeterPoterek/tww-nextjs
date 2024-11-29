"use client";

import { GalleryImage as GalleryImageType } from "@prisma/client";
import { useEffect, useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import GalleryImage from "./gallery-image";
import useGalleryStore from "@/app/store/galleryStore";
import GalleryButton from "./gallery-button";

type GalleryContainerProps = {
  initialGalleryImages: GalleryImageType[];
};

export default function GalleryContainer({
  initialGalleryImages,
}: GalleryContainerProps) {
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const {
    setAllImages,
    setCurrentPage,
    getCurrentPageImages,
    getTotalPages,
    currentPage,
  } = useGalleryStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAllImages(initialGalleryImages);
  }, [initialGalleryImages, setAllImages]);

  const currentImages = getCurrentPageImages();
  const totalPages = getTotalPages();

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center pt-[5rem] p-5"
    >
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 w-full max-w-[1128px] relative">
        {currentImages.map((image, index) => (
          <div
            key={image.id}
            className="aspect-square relative overflow-hidden rounded-md cursor-pointer"
            onClick={() => {
              setOpen(true);
              setLightboxIndex(index);
            }}
          >
            <GalleryImage
              src={image.url}
              alt={image.fileName || `Image ${index + 1}`}
              isGridImage={true}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-4 gap-4 w-full max-w-[1128px]">
        <span className="text-lg font-semibold mb-2 sm:hidden">
          Strona {currentPage} z {totalPages}
        </span>
        <div className="flex justify-center items-center gap-4 w-full sm:w-auto">
          <GalleryButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Poprzednia
          </GalleryButton>
          <span className="text-lg font-semibold hidden sm:inline-block whitespace-nowrap">
            Strona {currentPage} z {totalPages}
          </span>
          <GalleryButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Następna
          </GalleryButton>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={currentImages.map((image) => ({
          src: image.url,
          alt: image.fileName,
        }))}
        index={lightboxIndex}
        render={{
          slide: ({ slide }) => (
            <div className="flex items-center justify-center w-full h-full">
              <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
                <GalleryImage
                  src={slide.src}
                  alt={slide.alt || ""}
                  isGridImage={false}
                />
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
