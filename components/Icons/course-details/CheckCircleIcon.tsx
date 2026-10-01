import * as React from "react";

export type CheckCircleIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
};

export const CheckCircleIcon = ({
  size = 24,
  className,
  ...props
}: CheckCircleIconProps) => {
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
      <g id="Style=Filled">
        <path
          id="Vector"
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default CheckCircleIcon;