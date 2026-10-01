"use client";

import { useState } from "react";
import type { HTMLAttributes } from "react";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { Pagination } from "@/components/courses/Pagination";
import { CourseCategoryTabs } from "@/components/home/CourseCategoryTabs";
import { COURSE_PAGE_CATEGORIES, COURSE_PAGE_COURSES } from "@/components/data/data";
import type { Course, CourseCategory } from "@/components/interfaces";

const FEATURED_ID = "featured";

/** Cards per page — 2 full rows of the 3-column desktop grid. */
const PER_PAGE = 6;

export interface CoursesCatalogProps extends HTMLAttributes<HTMLDivElement> {
  categories?: CourseCategory[];
  courses?: Course[];
}


export const CoursesCatalog = ({
  categories = COURSE_PAGE_CATEGORIES,
  courses = COURSE_PAGE_COURSES,
  className = "",
  ...props
}: CoursesCatalogProps) => {
  const [activeId, setActiveId] = useState(FEATURED_ID);
  const [currentPage, setCurrentPage] = useState(1);

  const matchingCourses =
    activeId === FEATURED_ID
      ? courses
      : courses.filter(({ categoryId }) => categoryId === activeId);

  /** One page per PER_PAGE chunk of the current result set. */
  const totalPages = Math.max(1, Math.ceil(matchingCourses.length / PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const visibleCourses = matchingCourses.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const selectCategory = (id: string) => {
    setActiveId(id);
    setCurrentPage(1);
  };

  return (
    <div
      className={`w-full bg-white px-6 pt-10 pb-16 sm:px-10 lg:pt-12 lg:pb-20 ${className}`}
      {...props}
    >
      <div className="mx-auto w-full max-w-[1201px]">
        <CourseCategoryTabs
          categories={categories}
          activeId={activeId}
          onSelect={selectCategory}
        />
      </div>

      <CourseGrid courses={visibleCourses} className="mt-12" />

      <Pagination
        totalPages={totalPages}
        currentPage={safePage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CoursesCatalog;
