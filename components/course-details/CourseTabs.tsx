"use client";

import { useState } from "react";
import type { HTMLAttributes, KeyboardEvent } from "react";
import CheckCircleIcon from "@/components/Icons/course-details/CheckCircleIcon";
import { CourseLessons } from "@/components/course-details/CourseLessons";
import { CourseReviews } from "@/components/course-details/CourseReviews";
import type { CourseTabContent } from "@/components/interfaces";

const TABS = [
  { id: "about", label: "About" },
  { id: "lessons", label: "Lessons" },
  { id: "reviews", label: "Reviews" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const tabDomId = (id: TabId) => `course-tab-${id}`;
const panelDomId = (id: TabId) => `course-panel-${id}`;

/** `content` is omitted for the same reason as `CourseSidebarProps` (RDFa attribute). */
export interface CourseTabsProps extends Omit<HTMLAttributes<HTMLElement>, "content"> {
  /** Plain values only — see `CourseTabContent` in components/interfaces.tsx. */
  content: CourseTabContent;
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className="font-poppins text-[20px] leading-[1.2] tracking-[-0.2px]">{children}</h2>;
}

function About({
  description,
  sneakPeek,
  keyPoints,
}: Pick<CourseTabContent, "description" | "sneakPeek" | "keyPoints">) {
  return (
    <>
      <div className="flex flex-col gap-6">
        <SectionTitle>Description</SectionTitle>
        <div className="flex flex-col gap-[25.6px] leading-[1.6] text-slate">
          {description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <SectionTitle>Sneak Peak</SectionTitle>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {sneakPeek.map(({ src, alt }) => (
            <img
              key={src}
              src={src}
              alt={alt}
              loading="lazy"
              className="aspect-[167/125] w-full rounded-2xl bg-[#d9d9d9] object-cover"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <SectionTitle>Key Points</SectionTitle>
        <ul className="flex flex-col gap-3">
          {keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 leading-[1.6] text-slate">
              <CheckCircleIcon className="mt-0.5 size-6 text-royal" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CourseTabs = ({ content, className = "", ...props }: CourseTabsProps) => {
  const [active, setActive] = useState<TabId>("about");

  /** Left/right arrows move between the tabs and take focus with them. */
  const moveFocus = (event: KeyboardEvent<HTMLButtonElement>, offset: number) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();

    const index = TABS.findIndex(({ id }) => id === active);
    const next = TABS[(index + offset + TABS.length) % TABS.length];
    if (!next) return;

    setActive(next.id);
    document.getElementById(tabDomId(next.id))?.focus();
  };

  return (
    <section
      className={`flex min-w-0 flex-col gap-8 md:flex-1 ${className}`}
      {...props}
    >
      <div role="tablist" aria-label="Course information" className="flex flex-wrap gap-3 sm:gap-4">
        {TABS.map(({ id, label }) => {
          const isActive = id === active;

          return (
            <button
              key={id}
              type="button"
              id={tabDomId(id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelDomId(id)}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(id)}
              onKeyDown={(event) => moveFocus(event, event.key === "ArrowLeft" ? -1 : 1)}
              className={`cursor-pointer rounded-3xl px-4 py-2.5 text-[16px] leading-[1.2] font-medium transition sm:py-3 sm:text-[18px] ${
                isActive ? "bg-lime text-ink" : "bg-mist text-slate hover:bg-line/60"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

<div className="min-h-[640px]">
      {TABS.map(({ id }) => (
        <div
          key={id}
          id={panelDomId(id)}
          role="tabpanel"
          aria-labelledby={tabDomId(id)}
          tabIndex={0}
          className={id === active ? "flex flex-col gap-10 outline-hidden" : "hidden"}
        >
          {id === "about" ? (
            <About
              description={content.description}
              sneakPeek={content.sneakPeek}
              keyPoints={content.keyPoints}
            />
          ) : null}
          {id === "lessons" ? <CourseLessons {...content.lessonsTab} /> : null}
          {id === "reviews" ? <CourseReviews {...content.reviewsTab} /> : null}
          
        </div>
      ))}
      </div>
    </section>
  );
};

export default CourseTabs;
