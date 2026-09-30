import * as React from "react";

export interface ByteLogoProps extends Omit<React.SVGProps<SVGSVGElement>, "fill"> {
  size?: number | string;
  color?: string;
  title?: string;
}

/** Original viewBox is 29 x 32 */
const ASPECT_RATIO = 29 / 32;

export const ByteLogo = React.forwardRef<SVGSVGElement, ByteLogoProps>(
  ({ size = 32, color = "#D4FB20", title = "Byte", style, ...props }, ref) => {
    const height = size;
    const width =
      typeof size === "number" ? Math.round(size * ASPECT_RATIO * 100) / 100 : `calc(${size} * ${ASPECT_RATIO})`;

    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox="0 0 29 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role={title ? "img" : "presentation"}
        aria-hidden={title ? undefined : true}
        style={style}
        {...props}
      >
        {title ? <title>{title}</title> : null}
        <path
          d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
          fill={color}
        />
        <path
          d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
          fill={color}
        />
        <path
          d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

ByteLogo.displayName = "ByteLogo";

export default ByteLogo;