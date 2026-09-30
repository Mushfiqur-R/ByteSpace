"use client";

import * as React from "react";
import CourseCard from "@/components/home/courseCard";
import { CourseCategoryTabs } from "@/components/home/CourseCategoryTabs";
import { COURSES, COURSE_CATEGORIES } from "@/components/data/data";
import type { Course, CourseCategory } from "@/components/interfaces";


const FEATURED_ID = "featured";

export interface CourseSectionProps extends React.HTMLAttributes<HTMLElement> {
  courses?: Course[];
  categories?: CourseCategory[];
  heading?: string;
  description?: string;
}

export const CourseSection = ({
  courses = COURSES,
  categories = COURSE_CATEGORIES,
  heading = "Discover Your Passion, Build Your Skills",
  description = "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
  className = "",
  ...props
}: CourseSectionProps) => {
  const [activeId, setActiveId] = React.useState(FEATURED_ID);

  const isFeatured = activeId === FEATURED_ID;
  const visibleCourses = isFeatured
    ? courses
    : courses.filter(({ categoryId }) => categoryId === activeId);
  const activeLabel = categories.find(({ id }) => id === activeId)?.label ?? "";

  return (
    <section
      aria-labelledby="course-section-heading"
      className={`w-full bg-white ${className}`}
      {...props}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Heading + description */}
        <div className="flex flex-col items-center text-center">
          <h2
            id="course-section-heading"
            className="max-w-[588px] font-poppins text-[32px] font-semibold leading-[120%] tracking-[-0.01em] text-[#040819] sm:text-[38px] lg:text-[44px]"
          >
            {heading}
          </h2>
          <p className="mt-4 max-w-[917px] font-satoshi text-[16px] font-normal leading-[160%] text-[#82868E] sm:text-[18px]">
            {description}
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-7">
          <CourseCategoryTabs
            categories={categories}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>

        {/* Course grid */}
        {visibleCourses.length > 0 ? (
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleCourses.map((course) => (
              <li key={course.id} className="flex w-full justify-center">
                <CourseCard {...course} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-12 text-center font-satoshi text-[16px] font-normal leading-[160%] text-[#82868E]">
            No {activeLabel} courses yet — new courses are on the way.
          </p>
        )}
      </div>
    </section>
  );
};

export default CourseSection;
