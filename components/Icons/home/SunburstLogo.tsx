type SunburstLogoProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

/** One tapered ray, pointing up from the centre of the 40x40 viewBox. */
const RAY_PATH = "M20 0.75L21.25 12.605L18.75 12.605Z";
const RAY_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

export default function SunburstLogo({
  width = 40,
  height = 40,
  color = "#82868E",
  className,
}: SunburstLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g fill={color} fillRule="evenodd" clipRule="evenodd">
        {RAY_ANGLES.map((angle) => (
          <path
            key={angle}
            d={RAY_PATH}
            transform={`rotate(${angle} 20 20)`}
          />
        ))}
        {/* Hollow centre ring */}
        <path d="M27 20a7 7 0 1 1-14 0a7 7 0 1 1 14 0ZM24 20a4 4 0 1 0-8 0a4 4 0 1 0 8 0Z" />
      </g>
    </svg>
  );
}
