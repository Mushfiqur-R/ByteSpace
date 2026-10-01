import type { HTMLAttributes } from "react";
import Link from "next/link";
import CourseCard from "@/components/home/courseCard";
import type { Course } from "@/components/interfaces";

export interface CourseGridProps extends HTMLAttributes<HTMLUListElement> {
  courses: Course[];
}


export const CourseGrid = ({ courses, className = "", ...props }: CourseGridProps) => (
  <ul
    className={`mx-auto grid w-full max-w-[1201px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    {...props}
  >
    {courses.map((course) => (
      <li key={course.id} className="flex w-full justify-center">
        {/* The card itself is unchanged — the link is a wrapper around it. */}
        <Link href={`/courses/${course.id}`} className="block w-full max-w-[373px]">
          <CourseCard {...course} />
        </Link>
      </li>
    ))}
  </ul>
);

export default CourseGrid;
