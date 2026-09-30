"use client";

import { useState } from "react";
import type { HTMLAttributes } from "react";
import ChevronDownIcon from "@/components/Icons/courses/ChevronDownIcon";
import { SearchInput } from "@/components/SearchInput";
import { COURSE_PAGE_CATEGORIES } from "@/components/data/data";
import type { CourseCategory } from "@/components/interfaces";

export interface CoursesHeroProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  /** Options of the lime scope dropdown, e.g. `{ id, label }` pairs. */
  scopes?: CourseCategory[];
}

/** Label shown on the dropdown before the visitor picks a scope. */
const ALL_SCOPES = "Courses";

/**
 * Blue hero of `/courses`. The blue band and the grid pattern come from the
 * wrapper in `app/courses/page.tsx`, exactly like the home hero.
 */
export const CoursesHero = ({
  heading = "Find Your Next Course",
  scopes = COURSE_PAGE_CATEGORIES,
  className = "",
  ...props
}: CoursesHeroProps) => {
  const [scope, setScope] = useState(ALL_SCOPES);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      aria-labelledby="courses-hero-heading"
      className={`relative w-full pb-14 sm:pb-16 lg:pb-20 ${className}`}
      {...props}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 pt-10 text-center sm:px-8 sm:pt-14 lg:pt-16">
        <h1
          id="courses-hero-heading"
          className="mb-6 max-w-[935px] font-poppins text-[32px] font-semibold leading-[120%] tracking-[-0.01em] text-white sm:mb-8 sm:text-[48px] lg:mb-10 lg:text-[64px]"
        >
          {heading}
        </h1>

        <form
          role="search"
          onSubmit={(event) => event.preventDefault()}
          className="flex w-full max-w-[600px] flex-col items-stretch gap-3 sm:flex-row sm:items-center"
        >
          <SearchInput
            placeholder="Course, topic, creator"
            aria-label="Search courses"
            className="min-w-0 flex-1"
          />

          <div className="relative shrink-0">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isOpen}
              aria-label={`Search in: ${scope}`}
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-[46px] w-full cursor-pointer items-center justify-center gap-1 rounded-[24px] bg-[#D4FB20] px-6 py-3 font-satoshi text-[18px] font-medium leading-[120%] text-[#242528] transition-opacity hover:opacity-90 sm:w-auto"
            >
              {scope}
              <ChevronDownIcon
                className={`size-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && (
              <ul className="absolute left-0 top-[54px] z-30 max-h-[280px] w-full min-w-[200px] overflow-y-auto rounded-[16px] border border-[#CED0D3] bg-white py-2 text-left shadow-lg sm:w-[220px]">
                {scopes.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => {
                        setScope(label);
                        setIsOpen(false);
                      }}
                      className={`w-full cursor-pointer px-4 py-2 text-left font-satoshi text-[16px] font-medium leading-[120%] transition-colors hover:bg-[#F5F6F7] ${
                        scope === label ? "text-[#242528]" : "text-[#4B4C53]"
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default CoursesHero;
