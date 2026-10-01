
import type { SVGProps } from "react";

export type VideoIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

export const VideoIcon = ({
  size = 24,
  className,
  ...props
}: VideoIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className ?? ""}`}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g id="Style=Outlined">
        <path
          id="Vector"
          d="M15 8V16H5V8H15ZM16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5V7C17 6.45 16.55 6 16 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default VideoIcon;