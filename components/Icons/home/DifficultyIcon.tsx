import type { SVGProps } from "react";

/** Signal-bars mark used inside the course card's difficulty chip. */
export const DifficultyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M5 20V15M12 20V9M19 20V4"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

export default DifficultyIcon;
