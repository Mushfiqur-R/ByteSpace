"use client";
import * as React from "react";
import { useState } from "react";
import ByteLogo from "./Icons/nav/bytelogo";
import CartLogo from "./Icons/nav/cartlogo";

export interface NavItem {
  /** Unique id, also used to match `activeId` */
  id: string;
  label: string;
  onClick?: () => void;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  links?: NavItem[];
  activeId?: string;
  actions?: NavItem[];
  onLogoClick?: () => void;
  onCartClick?: () => void;
}

const DEFAULT_LINKS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "creators", label: "Creators" },
];

const DEFAULT_ACTIONS: NavItem[] = [
  { id: "sign-in", label: "Sign In" },
  { id: "join-us", label: "Join Us" },
];

export const Navbar = ({
  links = DEFAULT_LINKS,
  activeId = "home",
  actions = DEFAULT_ACTIONS,
  onLogoClick,
  onCartClick,
  className = "",
  ...props
}: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`w-full bg-transparent text-[#F5F5F6] font-satoshi relative z-50 ${className}`}
      {...props}
    >
      {/* Desktop / Tablet bar */}
      <div className="flex items-center justify-between h-[72px] px-6 sm:px-10 lg:px-[120px]">
        {/* Logo */}
        <button
          type="button"
          onClick={onLogoClick}
          aria-label="ByteSpace home"
          className="flex items-center gap-2 cursor-pointer flex-shrink-0"
        >
          <ByteLogo size={28} />
          <span className="font-clash-display font-bold text-xl leading-[120%]">
            ByteSpace
          </span>
        </button>

        {/* Center nav — hidden on mobile */}
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map(({ id, label, onClick }) => {
              const active = id === activeId;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={onClick}
                    aria-current={active ? "page" : undefined}
                    className={`text-sm leading-[160%] cursor-pointer hover:opacity-80 transition-opacity ${
                      active ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right actions — hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          {actions.map(({ id, label, onClick }) => (
            <button
              key={id}
              type="button"
              onClick={onClick}
              className="text-sm font-normal leading-6 cursor-pointer hover:opacity-80 transition-opacity"
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={onCartClick}
            aria-label="Cart"
            className="flex cursor-pointer hover:opacity-80 transition-opacity"
          >
            <CartLogo />
          </button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-[#F5F5F6] transition-transform duration-200 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#F5F5F6] transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#F5F5F6] transition-transform duration-200 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#003BE2] border-t border-white/10 px-6 pb-6">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4 pt-4">
              {links.map(({ id, label, onClick }) => {
                const active = id === activeId;
                return (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => {
                        onClick?.();
                        setMobileOpen(false);
                      }}
                      aria-current={active ? "page" : undefined}
                      className={`text-base leading-[160%] cursor-pointer hover:opacity-80 transition-opacity ${
                        active ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/10">
            {actions.map(({ id, label, onClick }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  onClick?.();
                  setMobileOpen(false);
                }}
                className="text-sm font-normal leading-6 cursor-pointer hover:opacity-80 transition-opacity"
              >
                {label}
              </button>
            ))}
            <button
              type="button"
              onClick={onCartClick}
              aria-label="Cart"
              className="flex cursor-pointer hover:opacity-80 transition-opacity ml-auto"
            >
              <CartLogo />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;