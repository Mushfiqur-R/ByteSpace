import * as React from "react";

/** Props accepted by every logo mark in `components/Icons` (see ReactLogo / NextjsLogo). */
export type PartnerLogoIcon = React.ComponentType<{ className?: string }>;

export interface Partner {
  id: string;
  /** Used as the wordmark text (or the image alt text) */
  name: string;
  /** Path or URL of the logo image (SVG/PNG). Used when `Icon` is not provided. */
  logoUrl?: string;
  /** Already-made logo component from `components/Icons` rendered as the mark. */
  Icon?: PartnerLogoIcon;
}

export interface LogoPartnerProps extends React.HTMLAttributes<HTMLElement> {
  partners: Partner[];
}

export const LogoPartner = ({ partners, className, ...props }: LogoPartnerProps) => {
  if (partners.length === 0) return null;

  return (
    <section
      aria-label="Our partners"
      className={`w-full bg-shuttle-gray-50 ${className ?? ""}`}
      {...props}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 lg:justify-between lg:gap-x-0">
          {partners.map(({ id, name, logoUrl, Icon }) => (
            <li
              key={id}
              className="flex shrink-0 items-center gap-2.5 sm:gap-3"
            >
              {Icon ? (
                <>
                  <Icon className="h-8 w-8 shrink-0 sm:h-9 sm:w-9 lg:h-10 lg:w-10" />
                  <span className="font-satoshi text-[16px] font-bold leading-[120%] text-[#82868E] sm:text-[18px] lg:text-[20px]">
                    {name}
                  </span>
                </>
              ) : logoUrl ? (
                <img
                  src={logoUrl}
                  alt={name}
                  loading="lazy"
                  className="h-8 w-auto sm:h-9 lg:h-10"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogoPartner;