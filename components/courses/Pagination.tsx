"use client";

import type { HTMLAttributes } from "react";
import ChevronLeftIcon from "@/components/Icons/courses/ChevronLeftIcon";
import ChevronRightIcon from "@/components/Icons/courses/ChevronRightIcon";

const ARROW =
  "flex h-12 w-14 shrink-0 cursor-pointer items-center justify-center rounded-[24px] border border-[#CED0D3] bg-white transition-colors hover:border-[#242528] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#CED0D3]";

const PAGE_NUMBER =
  "cursor-pointer font-poppins text-[20px] font-semibold leading-[28px] tracking-[-0.01em] transition-colors";

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  /**
   * Pages that actually hold courses. The strip renders exactly this many
   * numbers, so a single page of results shows only "1".
   */
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

/** Numbered pagination strip under the courses grid. */
export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  className = "",
  ...props
}: PaginationProps) => {
  const pageCount = Math.max(totalPages, 1);
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const goTo = (page: number) => {
    const next = Math.min(Math.max(page, 1), pageCount);
    if (next === currentPage) return;
    onPageChange(next);
  };

  return (
    <nav
      aria-label="Course pages"
      className={`mt-12 flex w-full items-center justify-center gap-6 ${className}`}
      {...props}
    >
      <button
        type="button"
        aria-label="Previous page"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${ARROW} text-[#4B4C53]`}
      >
        <ChevronLeftIcon className="size-6" />
      </button>

      {pages.map((page) => {
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            aria-label={`Page ${page}`}
            aria-current={isActive ? "page" : undefined}
            onClick={() => goTo(page)}
            className={`${PAGE_NUMBER} ${
              isActive ? "text-[#242528]" : "text-[#CED0D3] hover:text-[#242528]"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        aria-label="Next page"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === pageCount}
        className={`${ARROW} text-[#242528]`}
      >
        <ChevronRightIcon className="size-6" />
      </button>
    </nav>
  );
};

export default Pagination;
