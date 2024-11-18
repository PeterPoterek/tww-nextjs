"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

type GalleryImageProps = {
  src: string;
  alt: string;
  isGridImage: boolean;
  index?: number;
};

export default function GalleryImage({ src, alt, isGridImage, index }: GalleryImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && isGridImage && <Skeleton className="absolute inset-0 z-10" />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={isGridImage ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "100vw"}
        className={`object-contain ${isGridImage ? "object-cover" : ""}`}
        onLoad={() => setIsLoading(false)}
        priority={isGridImage && index === 0}
      />
    </>
  );
}
