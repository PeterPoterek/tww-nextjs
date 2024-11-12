"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

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
    cell: ({ row }) => {
      const url = row.getValue("url") as string;
      const fileName = row.getValue("fileName") as string;
      return (
        <div className="w-20 h-20 relative">
          <Image src={url} alt={fileName} fill style={{ objectFit: "cover" }} className="rounded-md" />
        </div>
      );
    },
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
