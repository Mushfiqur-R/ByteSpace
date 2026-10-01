import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { CourseHero } from "@/components/course-details/CourseHero";
import { CourseSidebar } from "@/components/course-details/CourseSidebar";
import { CourseTabs } from "@/components/course-details/CourseTabs";
import { CourseVideo } from "@/components/course-details/CourseVideo";
import {
  getAllCourseIds,
  getCourseById,
  getCoursePageContent,
} from "@/components/data/courseDetails";


type CourseDetailsPageProps = {
  params: Promise<{ id: string }>;
};

/** One pre-rendered page per course id from components/data/data.tsx. */
export function generateStaticParams(): { id: string }[] {
  return getAllCourseIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: CourseDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) return { title: "Course not found — ByteSpace" };

  return {
    title: `${course.title} — ByteSpace`,
    description: course.subtitle,
  };
}

export default async function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) notFound();

  const content = getCoursePageContent(course);

  return (
    <main className="relative isolate w-full overflow-x-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-[5] h-[960px] bg-royal hero-grid md:h-[930px] lg:h-[calc(66.5vw_+_91px)] xl:h-[903px]"
      />

      <Navbar />

      <div className="mx-auto max-w-[1200px] px-6 xl:px-0">
        <CourseHero course={course} />


        <div className="grid grid-cols-[minmax(0,720px)] gap-y-[62px] pb-[120px] lg:grid-cols-[minmax(0,720px)_412px] lg:justify-between lg:gap-x-10">
          <CourseVideo poster={content.videoPoster} posterAlt={content.videoPosterAlt} />

          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
            <CourseSidebar course={course} content={content} />
          </div>

          {/* <CourseTabs content={content.tabContent} /> */}
          <div className="pt-10 lg:pt-16">
          <CourseTabs content={content.tabContent} />
        </div>
        </div>
      </div>
    </main>
  );
}

