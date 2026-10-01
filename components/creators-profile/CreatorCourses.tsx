"use client";

import { useState } from "react";
import type { HTMLAttributes } from "react";
import { FilterBar } from "@/components/courses/FilterBar";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { Pagination } from "@/components/courses/Pagination";
import type { Course } from "@/components/interfaces";

/** Cards per page — two full rows of the three-column desktop grid. */
const PER_PAGE = 6;

export interface CreatorCoursesProps extends HTMLAttributes<HTMLDivElement> {
  courses: Course[];
}

/**
 * The filter row plus the creator's course grid. Reuses the exact `FilterBar`,
 * `CourseGrid` and `Pagination` the courses page already ships — kept in one
 * client component so the page count can follow the result set without turning
 * the page itself into a client component.
 */
export const CreatorCourses = ({ courses, className = "", ...props }: CreatorCoursesProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(courses.length / PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const visibleCourses = courses.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  return (
    <div className={`w-full bg-white ${className}`} {...props}>
      <FilterBar />

      <div className="px-6 pt-10 pb-16 sm:px-10 lg:pt-12 lg:pb-20">
        <CourseGrid courses={visibleCourses} />

        <Pagination
          totalPages={totalPages}
          currentPage={safePage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CreatorCourses;
