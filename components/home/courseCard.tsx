import * as React from "react";
import StarIcon from "../Icons/home/StarIcon";
import DifficultyIcon from "../Icons/home/DifficultyIcon";
import type { Course } from "../interfaces";

export interface CourseCardProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "id">,
    Course {
  onSelect?: () => void;
}


const MAX_AVATARS = 4;

const pluralize = (count: number, singular: string) =>
  `${count} ${singular}${count === 1 ? "" : "s"}`;


 
export const CourseCard = ({
  id,
  title,
  instructor,
  lessons,
  duration,
  comments,
  difficulty,
  price,
  priceType = "/lifetime",
  rating,
  categoryId,
  image,
  imageAlt = "",
  learners = [],
  onSelect,
  className = "",
  ...props
}: CourseCardProps) => {
  const badges = [pluralize(lessons, "Lesson"), duration, pluralize(comments, "Comment")];
  /** Learners that don't fit in the avatar row, e.g. 6 learners -> "+2". */
  const hiddenLearners = Math.max(learners.length - MAX_AVATARS, 0);

  return (
    <article
      {...props}
      id={id}
      data-category={categoryId}
      className={`flex w-full max-w-[373px] flex-col gap-4 rounded-[24px] border border-[#CED0D3] bg-white p-4 ${className}`}
    >
      {/* Cover image + information badges */}
      <div className="relative h-[195px] w-full overflow-hidden rounded-[12px] bg-[#F5F5F6]">
        <img src={image} alt={imageAlt} loading="lazy" className="size-full object-cover" />

        <ul className="absolute inset-x-3 bottom-3 flex flex-wrap gap-3">
          {badges.map((badge) => (
            <li
              key={badge}
              className="rounded-[24px] bg-[#F6F6F6]/60 px-3 py-1.5 font-satoshi text-[12px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px]"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>

      {/* Title, instructor and rating */}
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="truncate font-poppins text-[20px] font-semibold leading-[120%] text-black">
              {onSelect ? (
                <button
                  type="button"
                  onClick={onSelect}
                  className="block w-full cursor-pointer truncate text-left outline-hidden focus-visible:underline"
                >
                  {title}
                </button>
              ) : (
                title
              )}
            </h3>
            <p className="font-satoshi text-[12px] font-normal leading-[160%] text-[#4F4F4F]">
              by {instructor}
            </p>
          </div>

          <p className="flex shrink-0 items-center gap-1 font-satoshi text-[18px] font-normal leading-[160%] text-[#4F4F4F]">
            {rating.toFixed(1)}
            <StarIcon className="text-[#CED0D3]" />
          </p>
        </div>

        {/* Difficulty chip + learner avatars */}
        <div className="flex items-center gap-3">
          <p className="flex h-8 shrink-0 items-center justify-center gap-1 rounded-[24px] bg-[#F5F5F6] px-3 font-satoshi text-[12px] font-medium leading-[120%] text-[#4B4C53]">
            <DifficultyIcon className="size-4 shrink-0" />
            {difficulty}
          </p>

          {learners.length > 0 ? (
            <div className="flex items-center -space-x-2">
              {learners.slice(0, MAX_AVATARS).map(({ id, name, avatarUrl }) =>
                avatarUrl ? (
                  <img
                    key={id}
                    src={avatarUrl}
                    alt={name}
                    loading="lazy"
                    className="size-8 shrink-0 rounded-full border-2 border-white object-cover"
                  />
                ) : (
                  <span
                    key={id}
                    aria-hidden="true"
                    className="size-8 shrink-0 rounded-full border-2 border-white bg-[#CED0D3]"
                  />
                ),
              )}

              {hiddenLearners > 0 ? (
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] font-satoshi text-[12px] font-medium leading-[120%] text-[#242528]">
                  {hiddenLearners}+
                </span>
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Price */}
        <p className="mt-auto flex items-end gap-0.5">
          <span className="font-poppins text-[20px] font-semibold leading-[120%] text-[#003BE2]">
            {price}
          </span>
          <span className="font-satoshi text-[12px] font-normal leading-[160%] text-[#4F4F4F]">
            {priceType}
          </span>
        </p>
      </div>
    </article>
  );
};

export default CourseCard;