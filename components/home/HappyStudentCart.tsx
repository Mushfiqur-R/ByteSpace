import * as React from "react";
import StarIcon from "../Icons/home/StarIcon";

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
}

export interface HappyStudentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stats: HappyStudentStats;
  /** Card heading (default "Happy Students") */
  title?: string;
}

const MAX_AVATARS = 7;

const compactNumber = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export const HappyStudentCard = ({
  stats,
  title = "Happy Students",
  className,
  ...props
}: HappyStudentCardProps) => {
  const { rating, reviewCount, studentCount, students = [] } = stats;

  return (
    <div
      className={`flex w-fit flex-col justify-center gap-2 rounded-2xl bg-white p-4 backdrop-blur-md ${className ?? ""}`}
      {...props}
    >
      <div className="flex flex-col">
        <p className="text-label-m text-shuttle-gray-950">{title}</p>
        <p className="flex items-center gap-1 text-body-xs text-shuttle-gray-950">
          <span>
            {rating.toFixed(1)} ({reviewCount})
          </span>
          <StarIcon filled width={16} height={16} className="text-electric-lime-400" />
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
              className="size-10.75 shrink-0 rounded-full object-cover"
            />
          ) : (
            <span key={id} className="size-10.75 shrink-0 rounded-full bg-shuttle-gray-200" />
          ),
        )}
        <span className="flex size-10.75 shrink-0 items-center justify-center rounded-full bg-electric-lime-400 text-xs font-bold leading-normal text-shuttle-gray-950">
          {compactNumber.format(studentCount)}+
        </span>
      </div>
    </div>
  );
};

export default HappyStudentCard;