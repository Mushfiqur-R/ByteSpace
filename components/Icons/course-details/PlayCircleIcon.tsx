import type { SVGProps } from "react";

export type PlayCircleIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

export const PlayCircleIcon = ({
  size = 72,
  className,
  ...props
}: PlayCircleIconProps) => {
  return (
    <svg
      viewBox="0 0 72 72"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className ?? ""}`}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M36 6C19.44 6 6 19.44 6 36C6 52.56 19.44 66 36 66C52.56 66 66 52.56 66 36C66 19.44 52.56 6 36 6ZM30 49.5V22.5L48 36L30 49.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default PlayCircleIcon;