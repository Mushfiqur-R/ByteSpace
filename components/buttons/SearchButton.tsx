import type { ButtonHTMLAttributes } from "react";

type SearchButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export const SearchButton = ({
  label = "Search",
  className = "",
  type = "button",
  ...props
}: SearchButtonProps) => (
  <button
    type={type}
    className={`flex h-[46px] flex-none items-center justify-center gap-2 rounded-[24px] bg-[#D4FB20] px-6 py-3 font-satoshi text-[18px] font-medium leading-[120%] text-[#242528] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  >
    {label}
  </button>
);