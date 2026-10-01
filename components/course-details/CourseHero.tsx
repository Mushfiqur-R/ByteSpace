import type { HTMLAttributes } from "react";
import ShareIcon from "@/components/Icons/course-details/ShareIcon";
import type { CourseDetails } from "@/components/interfaces";

export interface CourseHeroProps extends HTMLAttributes<HTMLElement> {
  course: CourseDetails;
}

/**
 * Heading block of the course details page. Sits on the royal hero band, so the
 * section itself is transparent — the page supplies the width/padding wrapper.
 * Stats carry icon components (see `components/data/courseDetails.ts`).
 */
export const CourseHero = ({ course, className = "", ...props }: CourseHeroProps) => {
  return (
    <section
      className={`flex flex-col gap-6 pt-[52px] pb-12 md:flex-row md:items-start md:justify-between ${className}`}
      {...props}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 font-poppins text-white">
          <h1 className="text-[28px] font-bold leading-[1.2] tracking-[-0.36px] md:text-[40px]">{course.title}</h1>
          <p className="text-[20px] font-semibold leading-[1.2] tracking-[-0.2px]">{course.subtitle}</p>
        </div>
        <p className="text-[18px] font-medium leading-[1.2] text-frost">
          by <span className="text-lime">{course.author}</span>
        </p>
        <ul className="flex flex-wrap gap-4">
          {course.stats.map(({ id, label, Icon, iconProps }) => (
            <li key={id} className="flex items-center gap-2 rounded-3xl bg-white px-6 py-2 font-medium leading-[1.2]">
              <Icon className="size-6" {...(iconProps ?? {})} />
              {label}
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="flex items-center gap-2 self-start rounded-3xl bg-lime px-6 py-2 font-medium leading-6 transition hover:brightness-95"
      >
        <ShareIcon className="size-6" />
        Share
      </button>
    </section>
  );
};

export default CourseHero;
