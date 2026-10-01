import VideoIcon from "@/components/Icons/course-details/VideoIcon";
import type { CourseLessonsContent } from "@/components/interfaces";
import { LearningProgressCard } from "@/components/home/LearningProgressCard";

/** Tab section heading — the same 20/24 "Poppins SemiBold" the other tabs use. */
const SectionTitle = ({ children }: { children: string }) => (
  <h2 className="font-poppins text-[20px] leading-[1.2] tracking-[-0.2px]">{children}</h2>
);

/**
 * The Lessons tab: Figma's "Explore the Modules", the module list, "Lesson
 * Content" and "Lesson Progress Tracking" with its card. Every value arrives as
 * plain data (`CourseLessonsContent`), so the tab island can hand it over
 * untouched — no icon components cross the client boundary.
 */
export const CourseLessons = ({
  overview,
  content,
  progressNote,
  progressPercent,
  modules,
}: CourseLessonsContent) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <SectionTitle>Explore the Modules</SectionTitle>
        <p className="leading-[1.6] text-slate">{overview}</p>
      </div>

      <div className="flex flex-col gap-6">
        <SectionTitle>Lesson List</SectionTitle>
        <ul className="flex flex-col gap-6">
          {modules.map(({ id, title, body }) => (
            <li key={id} className="flex items-center gap-[13px]">
              <span className="flex size-[72px] shrink-0 items-center justify-center rounded-3xl bg-lime">
                <VideoIcon className="size-6 text-ink" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-medium leading-[1.2] text-ink">{title}</h3>
                <p className="leading-[1.6] text-slate">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <SectionTitle>Lesson Content</SectionTitle>
        <p className="leading-[1.6] text-slate">{content}</p>
      </div>

      <div className="flex flex-col gap-6">
        <SectionTitle>Lesson Progress Tracking</SectionTitle>
        <p className="leading-[1.6] text-slate">{progressNote}</p>
        {/* `min-w-full` because the card's own width is fixed at 232px. */}
        <LearningProgressCard progress={progressPercent} className="min-w-full border border-line" />
      </div>
    </>
  );
};

export default CourseLessons;
