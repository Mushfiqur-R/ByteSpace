import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "ghost" | "badge";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * One reusable button for the whole creator profile page (and anywhere else
 * that needs the same pill), so the look lives in a single place instead of
 * being repeated as raw classes at every call site.
 *
 * Passing `href` swaps the `<button>` for a `next/link`, which is how the
 * course sidebar's "See Full Profile" renders.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** When set the button renders as a `next/link` instead of a `<button>`. */
  href?: string;
  children: ReactNode;
}

const BASE =
  "inline-flex shrink-0 cursor-pointer items-center justify-center font-satoshi font-medium leading-[120%] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50";

const VARIANTS: Record<ButtonVariant, string> = {
  /* Solid brand lime — the main call to action, e.g. "Follow". */
  primary: "rounded-3xl bg-lime text-ink hover:brightness-95",
  /* Quiet outlined pill on light surfaces, e.g. "See Full Profile". */
  outline: "rounded-3xl border border-line bg-white text-slate hover:bg-mist",
  /* Frosted pill that survives a coloured band, e.g. on the royal hero. */
  ghost: "rounded-3xl bg-white/15 text-white backdrop-blur-[20px] hover:bg-white/25",
  /* Compact label that sits inline with a heading, e.g. "Popular". */
  badge: "rounded-full bg-lime text-ink",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "h-8 gap-1 px-3 text-[14px]",
  md: "h-11 gap-2 px-6 text-[16px]",
  lg: "h-12 gap-2 px-6 text-[18px]",
};

export const Button = ({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  /* The badge carries its own compact sizing, so `size` only shapes the pills. */
  const classes = `${BASE} ${VARIANTS[variant]} ${variant === "badge" ? "" : SIZES[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
