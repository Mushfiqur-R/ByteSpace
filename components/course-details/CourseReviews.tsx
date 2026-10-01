"use client";

import { useState } from "react";
import StarIcon from "@/components/Icons/home/StarIcon";
import type { CourseReviewsContent } from "@/components/interfaces";

/** Tab section heading — the same 20/24 "Poppins SemiBold" the other tabs use. */
const SectionTitle = ({ children }: { children: string }) => (
  <h2 className="font-poppins text-[20px] leading-[1.2] tracking-[-0.2px]">{children}</h2>
);

/** Star rows to draw and to filter by, best first — Figma's 5 → 1 pills. */
const STARS = [5, 4, 3, 2, 1] as const;

type RatingFilter = "all" | (typeof STARS)[number];

/** Five stars with `value` of them filled — the summary card and every review. */
const Stars = ({ value }: { value: number }) => (
  <span role="img" aria-label={`Rated ${value} out of 5`} className="flex items-center gap-1">
    {STARS.map((star) => (
      <StarIcon
        key={star}
        filled={star <= value}
        className={star <= value ? "size-4 text-lime" : "size-4 text-line"}
      />
    ))}
  </span>
);

/** One bar of the Ratings card. */
const Bar = ({ percent }: { percent: number }) => (
  <div className="h-2 w-full rounded-3xl bg-mist">
    <div className="h-2 rounded-3xl bg-lime" style={{ width: `${percent}%` }} />
  </div>
);

/** Same pill as the tab row above, so the filters read as one control group. */
const pillClass = (active: boolean) =>
  `flex cursor-pointer items-center gap-1 rounded-3xl px-4 py-2.5 text-[16px] leading-[1.2] font-medium transition sm:py-3 sm:text-[18px] ${
    active ? "bg-lime text-ink" : "bg-mist text-slate hover:bg-line/60"
  }`;

/**
 * The Reviews tab: Figma's "What Learners Are Saying", the Ratings summary card,
 * the rating filter pills and the review cards. The filter is the only state, so
 * the tab island only hands over plain data.
 */
export const CourseReviews = ({
  intro,
  average,
  total,
  breakdown,
  reviews,
}: CourseReviewsContent) => {
  const [filter, setFilter] = useState<RatingFilter>("all");
  const visible = filter === "all" ? reviews : reviews.filter(({ rating }) => rating === filter);

  return (
    <>
      <div className="flex flex-col gap-6">
        <SectionTitle>What Learners Are Saying</SectionTitle>
        <p className="leading-[1.6] text-slate">{intro}</p>
      </div>

      <div className="flex flex-col items-center gap-6 rounded-2xl border border-line bg-white p-6 backdrop-blur-[10px] sm:flex-row sm:p-10">
        <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-lime px-10 py-10">
          <span className="text-sm font-medium leading-[1.2] text-ink">Ratings</span>
          <span className="font-poppins text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
            {average.toFixed(1)}
          </span>
        </div>
        <div className="flex w-full flex-1 flex-col gap-1">
          {breakdown.map(({ stars, count }) => (
            <div key={stars} className="flex items-center gap-4">
              <div className="flex-1">
                <Bar percent={total > 0 ? (count / total) * 100 : 0} />
              </div>
              <Stars value={stars} />
              <span className="w-10 text-right text-base leading-[1.6] text-slate">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <SectionTitle>Individual Reviews:</SectionTitle>
        <div role="group" aria-label="Filter reviews by rating" className="flex flex-wrap gap-4">
          <button
            type="button"
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
            className={pillClass(filter === "all")}
          >
            All rating
          </button>
          {STARS.map((star) => (
            <button
              key={star}
              type="button"
              aria-pressed={filter === star}
              onClick={() => setFilter(star)}
              className={pillClass(filter === star)}
            >
              <StarIcon filled className="size-4" />
              {star}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-line p-10 text-center text-slate">
            No reviews with this rating yet.
          </p>
        ) : (
          visible.map((review) => (
            <article
              key={review.id}
              className="flex flex-col gap-6 rounded-3xl border border-line p-6 sm:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatarUrl}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="size-[52px] rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-lg font-medium leading-[1.2] text-ink">{review.name}</span>
                      <span className="text-base leading-[1.6] text-slate">{review.role}</span>
                    </div>
                  </div>
                  <Stars value={review.rating} />
                </div>
                <span className="shrink-0 text-base leading-[1.6] text-slate">{review.date}</span>
              </div>
              <p className="leading-[1.6] text-slate">{review.text}</p>
            </article>
          ))
        )}
      </div>
    </>
  );
};

export default CourseReviews;
