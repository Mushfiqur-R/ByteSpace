"use client";

import { useState } from "react";
import type { ComponentType, HTMLAttributes, SVGProps } from "react";
import ArrowUpDownIcon from "@/components/Icons/courses/ArrowUpDownIcon";
import BarChartIcon from "@/components/Icons/courses/BarChartIcon";
import FilterIcon from "@/components/Icons/courses/FilterIcon";
import LayoutGridIcon from "@/components/Icons/courses/LayoutGridIcon";

interface FilterAction {
  id: string;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const LEFT_ACTIONS: FilterAction[] = [
  { id: "filter", label: "Filter", Icon: FilterIcon },
  { id: "level", label: "Level", Icon: BarChartIcon },
  { id: "category", label: "Category", Icon: LayoutGridIcon },
];

/** Sits apart from the left group, aligned right. */
const SORT_ACTION: FilterAction = {
  id: "sort",
  label: "Most relevant",
  Icon: ArrowUpDownIcon,
};

const PILL =
  "flex h-12 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-[24px] border border-[#CED0D3] bg-white px-4 py-3 font-satoshi text-[16px] font-medium leading-[120%] text-[#4B4C53] transition-colors";

export interface FilterBarProps extends HTMLAttributes<HTMLElement> {
  /** Id of the pill whose panel is open. Omit for uncontrolled behaviour. */
  openId?: string | null;
  onOpenChange?: (id: string | null) => void;
}

/**
 * Courses catalogue filter bar.
 *
 * The pills only toggle their own open/closed state for now: the dropdown
 * panels are added later, so the markup already exposes `aria-expanded`.
 */
export const FilterBar = ({
  openId,
  onOpenChange,
  className = "",
  ...props
}: FilterBarProps) => {
  const [internalOpenId, setInternalOpenId] = useState<string | null>(null);
  const isControlled = openId !== undefined;
  const activeOpenId = isControlled ? openId : internalOpenId;

  const toggle = (id: string) => {
    const next = activeOpenId === id ? null : id;
    if (!isControlled) setInternalOpenId(next);
    onOpenChange?.(next);
  };

  const renderPill = ({ id, label, Icon }: FilterAction) => {
    const isOpen = activeOpenId === id;

    return (
      <button
        key={id}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => toggle(id)}
        className={`${PILL} ${isOpen ? "border-[#242528]" : "hover:bg-[#F5F6F7]"}`}
      >
        <Icon className="size-6 shrink-0 text-[#242528]" />
        {label}
      </button>
    );
  };

  return (
    <section
      aria-label="Course filters"
      className={`w-full bg-white px-6 pt-10 sm:px-10 sm:pt-12 ${className}`}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-[1201px] flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4">
          {LEFT_ACTIONS.map(renderPill)}
        </div>
        {renderPill(SORT_ACTION)}
      </div>
    </section>
  );
};

export default FilterBar;
