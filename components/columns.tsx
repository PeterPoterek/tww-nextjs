"use client";

import { ColumnDef } from "@tanstack/react-table";

export type GalleryImage = {
  id: string;
  fileName: string;
  url: string;
  createdAt: string;
};

export const columns: ColumnDef<GalleryImage>[] = [
  {
    accessorKey: "url",
    header: "Url",
  },
  {
    accessorKey: "fileName",
    header: "Nazwa",
  },
  {
    accessorKey: "createdAt",
    header: "Data",
  },
];
