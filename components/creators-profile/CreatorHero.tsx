"use client";

import { useState } from "react";
import type { HTMLAttributes } from "react";
import Button from "@/components/creators-profile/Button";
import type { Creator } from "@/components/interfaces";

export interface CreatorHeroProps extends HTMLAttributes<HTMLElement> {
  creator: Creator;
}

/** Frosted white pill used by both statistics. */
const STAT_PILL =
  "flex items-center gap-2 rounded-3xl bg-white px-6 py-3 font-satoshi text-[18px] font-medium leading-[1.2] text-ink backdrop-blur-[20px]";

/**
 * Heading block of the creator profile page. Sits on the royal hero band, so
 * the text uses the light `frost` tone and the section itself carries the
 * width/padding wrapper — the page only supplies the band.
 */
export const CreatorHero = ({ creator, className = "", ...props }: CreatorHeroProps) => {
  const [following, setFollowing] = useState(creator.following);

  return (
    <section
      aria-labelledby="creator-hero-heading"
      className={`relative w-full pb-16 pt-12 lg:pb-[72px] lg:pt-[52px] ${className}`}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 sm:px-8 xl:px-0">
        {/* Avatar, name, badge and tagline */}
        <div className="flex flex-wrap items-center gap-6">
          <img
            src={creator.avatar}
            alt={creator.name}
            width={96}
            height={96}
            loading="lazy"
            className="size-24 shrink-0 rounded-3xl object-cover"
          />

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1
                id="creator-hero-heading"
                className="font-poppins text-[28px] font-bold leading-[1.2] tracking-[-0.36px] text-white sm:text-4xl"
              >
                {creator.name}
              </h1>
              {/* Standard variant: `badge` keeps its own compact sizing. */}
              <Button variant="badge">{creator.badge}</Button>
            </div>

            <p className="font-satoshi text-lg leading-[1.6] text-frost">{creator.tagline}</p>
          </div>
        </div>

        {/* Bio paragraphs */}
        <div className="flex max-w-[1197px] flex-col gap-4 font-satoshi text-lg leading-[1.6] text-frost">
          {creator.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {/* Stats + follow */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-4">
            <Stat value={creator.products} label="Products" />
            <Stat
              value={following ? creator.followers + 1 : creator.followers}
              label="Followers"
            />
          </div>

          <Button variant="primary" size="lg" onClick={() => setFollowing((value) => !value)}>
            {following ? "Following" : "Follow"}
          </Button>
        </div>
      </div>
    </section>
  );
};

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <p className={STAT_PILL}>
      <span className="text-brand">{value}</span>
      <span className="text-ink">{label}</span>
    </p>
  );
}

export default CreatorHero;
