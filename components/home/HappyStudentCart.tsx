import type { HTMLAttributes } from "react";

/** One student avatar. */
export interface HappyStudentAvatar {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface HappyStudentStats {
  rating: number;
  reviewCount: number;
  studentCount: number;
  students?: HappyStudentAvatar[];
  /** Star drawn next to the rating, e.g. `/assets/home/eafcb.svg`. */
  starIcon?: string;
  /** Face used by the "+N" badge, e.g. `/assets/home/bf7f4.svg`. */
  moreAvatarUrl?: string;
}

export interface HappyStudentCardProps extends HTMLAttributes<HTMLDivElement> {
  stats: HappyStudentStats;
  /** Card heading (default "Happy Students") */
  title?: string;
}

const MAX_AVATARS = 7;

const compactNumber = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});

/**
 * "Happy Students" card. Its visuals follow the CoursesShowcase design, so the
 * hero and the showcase render the exact same card from `data.tsx` instead of
 * duplicating the markup. Width is left to the caller: the showcase pins it to
 * Figma's 258px, the hero lets it size to its content.
 */
export const HappyStudentCard = ({
  stats,
  title = "Happy Students",
  className = "",
  ...props
}: HappyStudentCardProps) => {
  const { rating, reviewCount, studentCount, students = [], starIcon, moreAvatarUrl } = stats;

  return (
    <div className={`flex flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px] ${className}`} {...props}>
      <div>
        <p className="font-satoshi text-[16px] leading-[24px] font-medium text-ink">{title}</p>
        <p className="flex items-center font-satoshi text-[10px] leading-[1.5] text-[#82868e]">
          <span className="font-bold text-ink">{rating.toFixed(1)}&nbsp;</span>({reviewCount})
          {starIcon ? <img alt="" src={starIcon} className="ml-[1.4px] h-[12.6px] w-[13.2px]" /> : null}
        </p>
      </div>

      <div className="flex items-center -space-x-4">
        {students.slice(0, MAX_AVATARS).map(({ id, name, avatarUrl }) =>
          avatarUrl ? (
            <img
              key={id}
              src={avatarUrl}
              alt={name}
              loading="lazy"
              className="size-[43px] shrink-0 rounded-full object-cover"
            />
          ) : (
            <span key={id} className="size-[43px] shrink-0 rounded-full bg-shuttle-gray-200" />
          ),
        )}
        <div className="relative size-[43px] shrink-0">
          {moreAvatarUrl ? (
            <img alt="" src={moreAvatarUrl} className="size-[43px]" />
          ) : (
            <span className="block size-[43px] rounded-full bg-electric-lime-400" />
          )}
          <span className="absolute top-[13px] left-3 font-satoshi text-[12px] leading-[1.5] font-bold text-ink">
            {compactNumber.format(studentCount)}+
          </span>
        </div>
      </div>
    </div>
  );
};

export default HappyStudentCard;