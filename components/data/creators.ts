import type { Creator } from "../interfaces";
import { CREATORS } from "./data";

/**
 * "PurePearl Studio" and the lowercase `instructor` byline "purepearl studio"
 * both resolve to "purepearl-studio", so a course can be traced back to its
 * creator without duplicating the slug in two places.
 */
export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Slugs used by `generateStaticParams` in app/creators/[slug]/page.tsx. */
export const getAllCreatorSlugs = (): string[] => CREATORS.map(({ slug }) => slug);

export const getCreatorBySlug = (slug: string): Creator | undefined =>
  CREATORS.find((creator) => creator.slug === slug);

/**
 * Resolves the creator behind a course's `instructor` byline, so the course
 * sidebar's "See Full Profile" link can point at the right profile.
 */
export const getCreatorByInstructor = (instructor: string): Creator | undefined =>
  getCreatorBySlug(slugify(instructor));
