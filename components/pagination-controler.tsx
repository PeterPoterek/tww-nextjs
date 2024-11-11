"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FC } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationControler: FC<PaginationControlsProps> = ({ hasNextPage, hasPrevPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? 1;
  const per_page = searchParams.get("per_page") ?? 5;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <button disabled={!hasPrevPage}>
            <PaginationPrevious
              href="#"
              onClick={() => {
                router.push(`dashboard/?page=${Number(page) - 1}&per_page=${per_page}`);
              }}
            />
          </button>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{page}</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <button disabled={!hasNextPage}>
            <PaginationNext
              href="#"
              onClick={() => {
                router.push(`dashboard/?page=${Number(page) + 1}&per_page=${per_page}`);
              }}
            />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControler;
