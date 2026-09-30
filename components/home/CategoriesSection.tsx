import * as React from "react";
import CategoryCard from "@/components/home/CategoryCard";
import { data as CATEGORY_DATA } from "@/components/data/data";
import type { Category } from "@/components/interfaces";

export interface CategoriesSectionProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Cards to render — defaults to the category data array */
  categories?: Category[];
  heading?: string;
  description?: string;
}

/**
 * "Explore Diverse Learning Paths" section.
 *
 * Renders the heading block plus one `CategoryCard` per entry of the category
 * data array (no per-card markup is duplicated). The grid is responsive:
 * 2 columns on phones, 3 on tablets and all 6 in a single row on desktop,
 * where the cards reach their full 167px size.
 */
export const CategoriesSection = ({
  categories = CATEGORY_DATA,
  heading = "Explore Diverse Learning Paths at Bytespace",
  description = "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
  className = "",
  ...props
}: CategoriesSectionProps) => (
  <section
    aria-labelledby="categories-section-heading"
    className={`w-full bg-white ${className}`}
    {...props}
  >
    <div className="mx-auto w-full max-w-[1250px] px-6 py-8 sm:px-8 sm:py-5 lg:py-5">
      {/* Heading + description (16px apart, centered) */}
      <div className="flex flex-col items-center text-center">
        <h2
          id="categories-section-heading"
          className="max-w-[792px] font-poppins text-[28px] font-semibold leading-[120%] tracking-[-0.01em] text-[#040819] sm:text-[32px] lg:text-[36px]"
        >
          {heading}
        </h2>
        <p className="mt-4 max-w-[917px] font-satoshi text-[16px] font-normal leading-[160%] text-[#82868E] sm:text-[18px]">
          {description}
        </p>
      </div>

      {/* Category cards */}
      <ul className="mt-10 grid grid-cols-2 gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-8 xl:grid-cols-6 xl:gap-10">
        {categories.map(({ id, name, icon }) => (
          <li key={id} className="flex justify-center">
            <CategoryCard name={name} icon={icon} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CategoriesSection;
