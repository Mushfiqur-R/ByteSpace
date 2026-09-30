import * as React from "react";

export interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Category label shown below the icon disc */
  name: string;
  /** Icon element — always passed in from the category data array */
  icon: React.ReactNode;
}

/**
 * Square category tile used by `CategoriesSection`.
 *
 * Visual spec: 167x167 card, 1px #CED0D3 border, 24px radius, a 60x60 lime
 * disc holding a ~36x36 icon, then the category name.
 *
 * The icon is never hardcoded here: it comes through props, so replacing the
 * artwork only means changing the `icon` value in `components/data/data.tsx`.
 */
export const CategoryCard = ({
  name,
  icon,
  className = "",
  ...props
}: CategoryCardProps) => (
  <div
    {...props}
    className={`flex aspect-square w-full max-w-[167px] flex-col items-center justify-center gap-3 rounded-[24px] border border-[#CED0D3] bg-white p-4 ${className}`}
  >
    {/* Icon disc — text color drives the icon because the SVGs use currentColor */}
    <span
      aria-hidden="true"
      className="flex size-[60px] shrink-0 items-center justify-center rounded-[40px] bg-[#D4FB20] text-[#242528]"
    >
      {icon}
    </span>

    <span className="text-center font-satoshi text-[18px] font-medium leading-[120%] text-[#242528] sm:text-[20px]">
      {name}
    </span>
  </div>
);

export default CategoryCard;
