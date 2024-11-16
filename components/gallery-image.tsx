"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { isImageSlide, isImageFitCover, SlideImage } from "yet-another-react-lightbox";

type GalleryImageProps = {
  slide: SlideImage;
  offset: number;
  rect: {
    width: number;
    height: number;
  };
  isGridImage: boolean;
};

export default function GalleryImage({ slide, offset, rect, isGridImage }: GalleryImageProps) {
  if (!isImageSlide(slide) || !slide.width || !slide.height) {
    return null;
  }

  const cover = isImageFitCover(slide, "contain");

  const width = !cover ? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width)) : rect.width;

  const height = !cover ? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height)) : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      {isGridImage && <Skeleton className="absolute inset-0" />}
      <Image
        src={slide.src}
        alt={slide.alt || ""}
        fill
        draggable={false}
        loading="lazy"
        style={{
          objectFit: cover ? "cover" : "contain",
          cursor: offset === 0 ? "pointer" : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
}
