import type { HTMLAttributes } from "react";
import type { CourseDetails, CoursePageContent } from "@/components/interfaces";

/**
 * `HTMLAttributes` already declares an RDFa `content: string`, which clashes with
 * the page content object below — so that key is omitted before `content` is
 * added back with its own type.
 */
export interface CourseSidebarProps extends Omit<HTMLAttributes<HTMLElement>, "content"> {
  course: CourseDetails;
  content: CoursePageContent;
}

/**
 * Purchase card beside the tabs: curriculum preview, price plus the "This course
 * include" list and the author block. A server component — the include icons
 * come straight from `content.includes`, so no state is involved.
 */
export const CourseSidebar = ({
  course,
  content,
  className = "",
  ...props
}: CourseSidebarProps) => {
  const { lessons, moreLessons, lessonsSummary, includes, instructor, enrollNote } = content;

  return (
    <aside
      className={`flex w-full flex-col gap-6 rounded-3xl border border-line bg-white p-6 lg:p-8 xl:p-10 ${className}`}
      {...props}
    >
      {/* Curriculum preview */}
      <div className="flex flex-col gap-6">
        <h2 className="font-poppins text-[20px] leading-[1.2] tracking-[-0.2px]">{lessonsSummary}</h2>
        <ol className="flex flex-col gap-3">
          {lessons.map(({ no, title, duration }) => (
            <li key={no} className="flex items-start justify-between gap-4 sm:gap-6">
              <span className="flex gap-2 font-medium leading-[1.2]">
                <span className="w-6 shrink-0">{no}</span>
                <span className="max-w-[198px]">{title}</span>
              </span>
              <span className="whitespace-nowrap leading-[1.6] text-royal">{duration}</span>
            </li>
          ))}
          {moreLessons > 0 ? (
            <li className="leading-[1.6] text-slate">{moreLessons} more videos</li>
          ) : null}
        </ol>
      </div>

      {/* Price and the enroll call to action */}
      <div className="flex flex-col gap-6">
        <p className="leading-[1.6] text-slate">{enrollNote}</p>
        <p className="flex items-end">
          <span className="font-poppins text-[30px] leading-[1.2] tracking-[-0.36px] text-royal sm:text-[36px]">
            {course.price}
          </span>
          <span className="leading-[1.6] text-slate">{course.priceType ?? "/lifetime"}</span>
        </p>
        <button
          type="button"
          className="w-full cursor-pointer rounded-3xl bg-lime px-6 py-3 text-[18px] font-medium leading-[1.2] transition hover:brightness-95"
        >
          Enroll Now
        </button>
      </div>

      {/* What the enrollment unlocks */}
      <div className="flex flex-col gap-6">
        <h3 className="font-poppins text-[20px] leading-[1.2] tracking-[-0.2px]">This course include</h3>
        <ul className="flex flex-col gap-3">
          {includes.map(({ id, label, Icon, iconProps }) => (
            <li key={id} className="flex items-start gap-2 leading-[1.6] text-slate">
              <Icon className="mt-0.5 size-6 text-royal" {...(iconProps ?? {})} />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <hr className="w-full border-t border-line" />

      {/* Author */}
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-3">
          <img
            src={instructor.avatarUrl}
            alt={instructor.name}
            width={52}
            height={52}
            loading="lazy"
            className="size-[52px] shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="text-[18px] font-medium leading-[1.2]">{instructor.name}</p>
            <p className="leading-[1.6] text-slate">{instructor.role}</p>
          </div>
        </div>
        <p className="leading-[1.6] text-slate">{instructor.blurb}</p>
        <a
          href="#"
          className="rounded-3xl border border-line px-4 py-2 font-medium leading-[1.2] text-slate transition hover:bg-mist"
        >
          See Full Profile
        </a>
      </div>
    </aside>
  );
};

export default CourseSidebar;
