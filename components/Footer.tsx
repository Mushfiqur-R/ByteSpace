"use client";
import * as React from "react";
import { useState } from "react";
import ByteLogo from "./Icons/nav/bytelogo";
import { FooterItem, FooterProps } from "./interfaces";
import { DEFAULT_COLUMNS } from "./data/data";

  
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
      className={`w-full border-t border-line bg-white font-satoshi text-ink ${className}`}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-6 pt-12 pb-12 sm:px-10 sm:pt-16 lg:gap-[130px] lg:px-[120px] lg:pt-[71px]">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:justify-between lg:gap-[92px]">
          <div className="w-full max-w-[528px] flex flex-col gap-10 sm:gap-12 lg:gap-[45px]">
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={onLogoClick}
                aria-label="ByteSpace home"
                className="flex h-[37px] w-fit items-start gap-2 cursor-pointer"
              >
                <ByteLogo width={28.88} height={31.5} />
                <span className="font-clash-display font-bold text-[24px] leading-[30px] mt-[7px]">ByteSpace</span>
              </button>
              <p className="text-sm leading-[22px]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <div className="flex w-full max-w-[504px] flex-col gap-6">
              <form onSubmit={handleSubmit} className="flex flex-wrap items-start gap-4 sm:gap-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="h-[52px] w-full min-w-0 max-w-[376px] flex-1 rounded-full border border-line bg-white px-6 py-[18px] text-base leading-[26px] text-ink placeholder:text-ink outline-none focus:border-brand"
                />
                <button
                  type="submit"
                  className="flex h-[46px] cursor-pointer items-center justify-center rounded-3xl bg-lime px-6 py-3 text-lg leading-[22px] font-medium text-ink transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {subscribeLabel}
                </button>
              </form>
              <p className="text-xs leading-[19px]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid w-full grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:w-[580px] lg:pt-12"
          >
            {columns.map(({ id, heading, items }) => (
              <div key={id} className="flex flex-col gap-4">
                {heading ? <h3 className="text-base leading-6 font-normal">{heading}</h3> : null}
                <ul className="flex flex-col items-start gap-4 text-sm leading-[1.6]">
                  {items.map(({ id: itemId, label, onClick }) => (
                    <li key={itemId}>
                      <button
                        type="button"
                        onClick={onClick}
                        className="cursor-pointer text-left transition-opacity hover:opacity-70"
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

        <div className="flex flex-col">
          <div className="flex flex-col gap-4 border-t border-line pt-4 sm:flex-row sm:items-start sm:justify-between">
            <p className="text-xs leading-[19px]">© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
            <ul className="flex flex-wrap items-start gap-x-6 gap-y-2">
              {legalLinks.map(({ id, label, onClick }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={onClick}
                    className="text-xs leading-[19px] cursor-pointer hover:opacity-70 transition-opacity"
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