import { create } from "zustand";
import { GalleryImage } from "@prisma/client";

type GalleryStore = {
  allImages: GalleryImage[];
  currentPage: number;
  imagesPerPage: number;
  setAllImages: (images: GalleryImage[]) => void;
  setCurrentPage: (page: number) => void;
  getCurrentPageImages: () => GalleryImage[];
  getTotalPages: () => number;
};

const useGalleryStore = create<GalleryStore>((set, get) => ({
  allImages: [],
  currentPage: 1,
  imagesPerPage: 9,
  setAllImages: (images) => set({ allImages: images }),
  setCurrentPage: (page) => set({ currentPage: page }),
  getCurrentPageImages: () => {
    const { allImages, currentPage, imagesPerPage } = get();
    const startIndex = (currentPage - 1) * imagesPerPage;
    return allImages.slice(startIndex, startIndex + imagesPerPage);
  },
  getTotalPages: () => {
    const { allImages, imagesPerPage } = get();
    return Math.ceil(allImages.length / imagesPerPage);
  },
}));

export default useGalleryStore;
