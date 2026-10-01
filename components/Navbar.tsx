"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ByteLogo from "./Icons/nav/bytelogo";
import CartLogo from "./Icons/nav/cartlogo";

export interface NavItem {
  /** Unique id, also used to match `activeId` when there is no `href` */
  id: string;
  label: string;
  /** When set the item renders as a `next/link` and lights up from the URL */
  href?: string;
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
  { id: "home", label: "Home", href: "/" },
  { id: "courses", label: "Courses", href: "/courses" },
  /* No `/creators` index page yet — clicking this lands on app/not-found.tsx. */
  { id: "creators", label: "Creators", href: "/creators" },
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
  const pathname = usePathname();

  /* An item with an `href` follows the URL (nested paths included, e.g.
     `/creators/purepearl-studio` keeps "Creators" lit); otherwise fall back to
     the explicitly passed `activeId`. */
  const isActive = ({ id, href }: NavItem) =>
    href ? pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) : id === activeId;

  return (
    <header
      className={`w-full bg-transparent text-[#F5F5F6] font-satoshi relative z-50 ${className}`}
      {...props}
    >
      {/* Desktop / Tablet bar — logo left, links centred, actions on the right.
          Three columns of equal weight keep the links in the middle of the bar
          whatever the logo or the cart button end up measuring. */}
      <div className="grid h-[72px] grid-cols-[1fr_auto_1fr] items-center px-6 sm:px-10 lg:px-[120px]">
        {/* Logo */}
        <button
          type="button"
          onClick={onLogoClick}
          aria-label="ByteSpace home"
          className="col-start-1 flex items-center gap-2 justify-self-start cursor-pointer flex-shrink-0"
        >
          <ByteLogo size={28} />
          <span className="font-clash-display font-extrabold text-xl leading-[120%]">
            ByteSpace
          </span>
        </button>

        {/* Center nav — hidden on mobile */}
        <nav aria-label="Primary navigation" className="col-start-2 hidden justify-self-center md:block">
          <ul className="flex items-center gap-8">
            {links.map((item) => {
              const { id, label, href, onClick } = item;
              const active = isActive(item);
              const itemClass = `text-sm leading-[160%] cursor-pointer hover:opacity-80 transition-opacity ${
                active ? "font-semibold" : "font-normal"
              }`;

              return (
                <li key={id}>
                  {href ? (
                    <Link
                      href={href}
                      onClick={onClick}
                      aria-current={active ? "page" : undefined}
                      className={`inline-block ${itemClass}`}
                    >
                      {label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={onClick}
                      aria-current={active ? "page" : undefined}
                      className={itemClass}
                    >
                      {label}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right actions — hidden on mobile */}
        <div className="col-start-3 hidden items-center gap-6 justify-self-end md:flex">
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
          className="col-start-3 flex flex-col gap-1.5 justify-self-end cursor-pointer p-1 md:hidden"
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
              {links.map((item) => {
                const { id, label, href, onClick } = item;
                const active = isActive(item);
                const itemClass = `text-base leading-[160%] cursor-pointer hover:opacity-80 transition-opacity ${
                  active ? "font-semibold" : "font-normal"
                }`;

                return (
                  <li key={id}>
                    {href ? (
                      <Link
                        href={href}
                        onClick={() => {
                          onClick?.();
                          setMobileOpen(false);
                        }}
                        aria-current={active ? "page" : undefined}
                        className={`inline-block ${itemClass}`}
                      >
                        {label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          onClick?.();
                          setMobileOpen(false);
                        }}
                        aria-current={active ? "page" : undefined}
                        className={itemClass}
                      >
                        {label}
                      </button>
                    )}
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