"use client";
import * as React from "react";
import { useState } from "react";
import ByteLogo from "./Icons/nav/bytelogo";

export interface FooterItem {
  id: string;
  label: string;
  onClick?: () => void;
}

export interface FooterColumn {
  id: string;
  /** Kept in the DOM for screen readers only (hidden in the design) */
  heading?: string;
  items: FooterItem[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Link columns on the right */
  columns?: FooterColumn[];
  /** Privacy Policy, Terms of Service, etc. */
  legalLinks?: FooterItem[];
  /** Called with the entered email when the newsletter form is submitted */
  onSubscribe?: (email: string) => void;
  /** Called when the logo is clicked */
  onLogoClick?: () => void;
  /** Text on the lime button (default "Search", as in the design) */
  subscribeLabel?: string;
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    id: "browse",
    heading: "Browse",
    items: [
      { id: "featured-courses", label: "Featured Courses" },
      { id: "featured-categories", label: "Featured Categories" },
      { id: "business", label: "Business" },
      { id: "it", label: "IT" },
      { id: "design", label: "Design" },
    ],
  },
  {
    id: "topics",
    items: [
      { id: "development", label: "Development" },
      { id: "marketing", label: "Marketing" },
      { id: "photography", label: "Photography" },
      { id: "finance", label: "Finance" },
      { id: "sport", label: "Sport" },
    ],
  },
  {
    id: "platform",
    heading: "Platform",
    items: [
      { id: "become-a-creator", label: "Become a Creator" },
      { id: "affiliate-program", label: "Affiliate Program" },
      { id: "contact", label: "Contact" },
      { id: "help", label: "Help" },
      { id: "about", label: "About" },
    ],
  },
];

const DEFAULT_LEGAL_LINKS: FooterItem[] = [
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "terms-of-service", label: "Terms of Service" },
  { id: "cookies-settings", label: "Cookies Settings" },
];

export const Footer = ({
  columns = DEFAULT_COLUMNS,
  legalLinks = DEFAULT_LEGAL_LINKS,
  onSubscribe,
  onLogoClick,
  subscribeLabel = "Search",
  className = "",
  ...props
}: FooterProps) => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubscribe?.(email.trim());
  };

  return (
    <footer
      className={`w-full bg-white border-t border-[#CED0D3] px-6 sm:px-10 lg:px-[120px] pt-12 sm:pt-16 lg:pt-[71px] pb-12 text-[#242528] font-satoshi ${className}`}
      {...props}
    >
      <div className="mx-auto w-full max-w-[1200px] flex flex-col gap-16 sm:gap-20 lg:gap-[130px]">
        {/* Footer nav */}
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-[92px]">
          {/* Brand + newsletter */}
          <div className="w-full max-w-[528px] flex flex-col gap-10 sm:gap-12 lg:gap-[45px]">
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={onLogoClick}
                aria-label="ByteSpace home"
                className="flex h-[37px] w-fit items-center gap-2 cursor-pointer"
              >
                <ByteLogo size={32} />
                <span className="font-clash-display font-bold text-2xl leading-[30px]">ByteSpace</span>
              </button>
              <p className="text-sm leading-[160%]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <div className="flex w-full max-w-[504px] flex-col gap-6">
              <form onSubmit={handleSubmit} className="flex items-start gap-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="h-[52px] w-full min-w-0 max-w-[376px] flex-1 rounded-full border border-[#CED0D3] bg-white px-6 py-[18px] text-base leading-[160%] text-[#242528] placeholder:text-[#242528] outline-none focus:border-[#242528]"
                />
                <button
                  type="submit"
                  className="flex h-[46px] items-center justify-center rounded-3xl bg-[#D4FB20] px-6 py-3 text-lg font-medium leading-[120%] text-[#242528] cursor-pointer hover:brightness-95 transition"
                >
                  {subscribeLabel}
                </button>
              </form>
              <p className="text-xs leading-[160%]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="flex w-full flex-wrap items-start gap-x-10 gap-y-10 lg:w-auto">
            {columns.map(({ id, heading, items }) => (
              <div key={id} className="w-[140px] flex flex-col sm:w-[167px]">
                {/*
                  The design keeps space for a heading (24px + 24px gap) but doesn't show it.
                  It stays in the DOM for screen readers; remove `sr-only` to show it.
                */}
                {heading ? <h3 className="sr-only text-base leading-6">{heading}</h3> : null}
                <ul className="mt-12 flex flex-col items-start gap-4">
                  {items.map(({ id: itemId, label, onClick }) => (
                    <li key={itemId}>
                      <button
                        type="button"
                        onClick={onClick}
                        className="text-left text-sm leading-[160%] cursor-pointer hover:opacity-70 transition-opacity"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-6">
          <hr className="border-0 border-t border-[#CED0D3]" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <p className="text-xs leading-[160%]">© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
            <ul className="flex flex-wrap items-start gap-x-6 gap-y-2">
              {legalLinks.map(({ id, label, onClick }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={onClick}
                    className="text-xs leading-[160%] cursor-pointer hover:opacity-70 transition-opacity"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;