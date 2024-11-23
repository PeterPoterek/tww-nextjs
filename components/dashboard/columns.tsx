"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Image from "next/image";
import { deleteGalleryImage } from "@/app/actions";

export type GalleryImage = {
  id: string;
  fileName: string;
  url: string;
  createdAt: string;
};

export const columns: ColumnDef<GalleryImage>[] = [
  {
    accessorKey: "url",
    header: "Zdjęcie",
    cell: ({ row, table }) => {
      const url = row.getValue("url") as string;
      const fileName = row.getValue("fileName") as string;

      const isFirstPage = table.getState().pagination.pageIndex === 0;

      return (
        <div className="w-20 h-20 relative">
          <Image
            src={url}
            alt={fileName}
            fill
            style={{ objectFit: "cover" }}
            className={`rounded-md transition-opacity duration-300 `}
            priority={isFirstPage}
            sizes="80px"
          />
        </div>
      );
    },
  },

  {
    accessorKey: "fileName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nazwa
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Akcje</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                const url = row.getValue("url") as string;
                window.open(url);
              }}
            >
              Otworz w nowej karcie
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault();
                  }}
                >
                  Usuń
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Potwierdź usunięcie</AlertDialogTitle>
                  <AlertDialogDescription>
                    Czy na pewno chcesz usunąć ten obraz? Tej operacji nie można
                    cofnąć.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Anuluj</AlertDialogCancel>

                  <AlertDialogAction
                    onClick={async () => {
                      const id = row.original.id;
                      try {
                        await deleteGalleryImage(id);
                        window.location.reload();
                      } catch (error) {
                        console.error("Error deleting image:", error);
                      }
                    }}
                  >
                    Usuń
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
