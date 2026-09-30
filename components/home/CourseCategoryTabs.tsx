"use client";

import * as React from "react";
import type { CourseCategory } from "@/components/interfaces";

export interface CourseCategoryTabsProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> {
  categories: CourseCategory[];
  /** `id` of the currently selected category */
  activeId: string;
  onSelect: (id: string) => void;
}

/**
 * How many chips stay visible while the strip is collapsed.
 * Phones keep the strip to one short block; wider screens follow the design,
 * where the last row ends with the "+ More" button.
 */
const MOBILE_VISIBLE = 6;
const DESKTOP_VISIBLE = 18;

const CHIP =
  "shrink-0 cursor-pointer rounded-full px-4 py-3 font-satoshi text-[15px] font-medium leading-[120%] transition-colors sm:px-5 sm:text-[16px]";

export const CourseCategoryTabs = ({
  categories,
  activeId,
  onSelect,
  className = "",
  ...props
}: CourseCategoryTabsProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  /**
   * The extra chips are hidden with responsive classes (instead of slicing the
   * array) so the collapse point can differ per breakpoint without JS.
   */
  const visibility = (index: number) => {
    if (isExpanded) return "";
    if (index >= DESKTOP_VISIBLE) return "hidden";
    if (index >= MOBILE_VISIBLE) return "hidden sm:inline-flex";
    return "";
  };

  const hasHiddenChips = categories.length > MOBILE_VISIBLE;

  return (
    <nav
      aria-label="Course categories"
      className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${className}`}
      {...props}
    >
      {categories.map(({ id, label }, index) => {
        const isActive = id === activeId;

        return (
          <button
            key={id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(id)}
            className={`${CHIP} ${visibility(index)} ${
              isActive
                ? "bg-brand-lime text-shuttle-gray-950"
                : "bg-brand-white text-[#4B4C53] hover:bg-[#EBEBEC]"
            }`}
          >
            {label}
          </button>
        );
      })}

      {hasHiddenChips && (
        <button
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((previous) => !previous)}
          className={`${CHIP} bg-transparent text-brand-blue hover:opacity-80`}
        >
          {isExpanded ? "− Less" : "+ More"}
        </button>
      )}
    </nav>
  );
};

export default CourseCategoryTabs;
