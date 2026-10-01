import * as React from "react";
import type { Course } from "../interfaces";

export interface CourseCardProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "id">,
    Course {
  onSelect?: () => void;
}


const MAX_AVATARS = 4;

const pluralize = (count: number, singular: string) =>
  `${count} ${singular}${count === 1 ? "" : "s"}`;


const splitPrice = (price: string) => {
  const match = /^(\D*)(.*)$/.exec(price);
  return { currency: match?.[1] ?? "", amount: match?.[2] ?? "" };
};
export const CourseCard = ({
  id,
  title,
  instructor,
  lessons,
  duration,
  comments,
  difficulty,
  difficultyIcon,
  price,
  priceType = "/lifetime",
  rating,
  ratingIcon,
  categoryId,
  image,
  imageAlt = "",
  learners = [],
  moreAvatarUrl,
  onSelect,
  className = "",
  ...props
}: CourseCardProps) => {
  const badges = [pluralize(lessons, "Lesson"), duration, pluralize(comments, "Comment")];
  /** Learners that don't fit in the avatar row, e.g. 6 learners -> "2+". */
  const hiddenLearners = Math.max(learners.length - MAX_AVATARS, 0);
  const { currency, amount } = splitPrice(price);

  return (
    <article
      {...props}
      id={id}
      data-category={categoryId}
      className={`flex h-[384px] w-full max-w-[373px] flex-col gap-[21px] overflow-hidden rounded-[24px] border border-[#CED0D3] bg-white px-[15px] pt-[15px] pb-[11px] ${className}`}
    >
      {/* Cover image + information badges */}
      <div className="relative h-[195px] w-full shrink-0 overflow-hidden rounded-[12px] bg-[#443131]">
        <img src={image} alt={imageAlt} loading="lazy" className="size-full object-cover" />

        <ul className="absolute bottom-[13px] left-3 flex gap-3">
          {badges.map((badge) => (
            <li
              key={badge}
              className="rounded-full bg-[#F6F6F6]/60 px-3 py-1.5 font-satoshi text-[12px] leading-[20px] font-medium whitespace-nowrap text-muted backdrop-blur-[4px]"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>

      {/* Title, instructor and rating */}
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="truncate font-poppins text-[20px] leading-[28px] font-semibold tracking-[-0.2px] text-black">
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
            <p className="font-satoshi text-[12px] leading-[20px] text-muted">
              by <span className="text-brand">{instructor}</span>
            </p>
          </div>

          <p className="flex shrink-0 items-center font-satoshi text-[18px] leading-[28px] font-medium text-muted">
            <span>{rating.toFixed(1)}&nbsp;</span>
            {ratingIcon ? (
              <img src={ratingIcon} alt="" aria-hidden="true" loading="lazy" className="size-6" />
            ) : null}
          </p>
        </div>

        {/* Difficulty chip + learner avatars */}
        <div className="flex items-center gap-3">
          <p className="flex shrink-0 items-center gap-1 rounded-full bg-[#F5F5F6] px-3 py-1.5 font-satoshi text-[12px] leading-[20px] font-medium text-body">
            {difficultyIcon ? (
              <img src={difficultyIcon} alt="" aria-hidden="true" loading="lazy" className="size-5 shrink-0" />
            ) : null}
            {difficulty}
          </p>

          {learners.length > 0 ? (
            <div className="flex items-center -space-x-2">
              {learners.slice(0, MAX_AVATARS).map(({ id: learnerId, name, avatarUrl }) =>
                avatarUrl ? (
                  <img
                    key={learnerId}
                    src={avatarUrl}
                    alt={name}
                    loading="lazy"
                    className="size-8 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span key={learnerId} aria-hidden="true" className="size-8 shrink-0 rounded-full bg-[#CED0D3]" />
                ),
              )}

              {hiddenLearners > 0 ? (
                moreAvatarUrl ? (
                  <span className="relative size-8 shrink-0">
                    <img src={moreAvatarUrl} alt="" aria-hidden="true" loading="lazy" className="size-8" />
                    <span className="absolute inset-0 grid place-items-center font-satoshi text-[12px]  font-medium text-white">
                      {hiddenLearners}+
                    </span>
                  </span>
                ) : (
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lime font-satoshi text-[12px] font-medium text-shuttle-gray-950">
                    {hiddenLearners}+
                  </span>
                )
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Price */}
        <p className="flex items-end">
          <span className="text-[20px] leading-[28px] tracking-[-0.2px] text-brand">
            {currency ? <span className="font-poppins font-medium">{currency}</span> : null}
            <span className="font-poppins font-semibold">{amount}</span>
          </span>
          <span className="font-satoshi text-[12px] leading-[20px] text-muted">{priceType}</span>
        </p>
      </div>
    </article>
  );
};

export default CourseCard;