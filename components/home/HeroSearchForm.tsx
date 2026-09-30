"use client";

import { SearchInput } from "@/components/SearchInput";
import { SearchButton } from "@/components/buttons/SearchButton";

export function HeroSearchForm() {
  return (
    <form
      role="search"
      className="flex items-center gap-3 w-full max-w-[520px] px-4 sm:px-0"
      onSubmit={(e) => e.preventDefault()}
    >
  
      <SearchInput
        placeholder="Course, topic, creator"
        aria-label="Search courses"
        className="flex-1 min-w-0"
      />
      <SearchButton label="Search" type="submit" className="flex-shrink-0" />
    </form>
  );
}
