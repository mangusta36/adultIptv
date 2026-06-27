"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function pageHref(baseUrl: string, searchParams: URLSearchParams, page: number): string {
  const params = new URLSearchParams(searchParams.toString());
  params.set("page", page.toString());
  return `${baseUrl}?${params.toString()}`;
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2 mt-12"
    >
      {currentPage > 1 ? (
        <Button variant="ghost" size="sm" asChild>
          <Link href={pageHref(baseUrl, searchParams, currentPage - 1)}>
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Link>
        </Button>
      ) : (
        <Button variant="ghost" size="sm" disabled>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "ghost"}
          size="sm"
          className="w-9 h-9 p-0"
          asChild
        >
          <Link href={pageHref(baseUrl, searchParams, page)}>{page}</Link>
        </Button>
      ))}

      {currentPage < totalPages ? (
        <Button variant="ghost" size="sm" asChild>
          <Link href={pageHref(baseUrl, searchParams, currentPage + 1)}>
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      ) : (
        <Button variant="ghost" size="sm" disabled>
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      )}
    </nav>
  );
}
