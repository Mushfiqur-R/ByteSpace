import type { InputHTMLAttributes } from "react";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = ({
  placeholder = "Course, topic, creator",
  className = "",
  type = "text",
  ...props
}: SearchInputProps) => (
  <div
    className={`flex h-[52px] w-full min-w-0 flex-1 items-center gap-2 rounded-[24px] bg-white px-6 py-3 ${className}`}
  >
    {/* search icon */}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-none text-[#82868E]"
      aria-hidden="true"
    >
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M15.5 15.5L20 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>

    {/* input */}
    <input
      type={type}
      placeholder={placeholder}
      className="w-full min-w-0 bg-transparent font-satoshi text-[18px] font-normal leading-[160%] text-[#242528] outline-none placeholder:text-[#82868E]"
      {...props}
    />
  </div>
);