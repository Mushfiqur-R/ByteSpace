import type { ComponentType, ReactNode, SVGProps } from "react";

export type Category = {
  id: number;
  name: string;
  icon?: ReactNode;
};

const cls = "h-9 w-9";

export interface CourseCategory {
  id: string;
  label: string;
}

export interface CourseLearner {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  lessons: number;
  duration: string;
  comments: number;
  difficulty: string;
  price: string;
  priceType?: string;
  rating: number;
  categoryId: string;
  image: string;
  imageAlt?: string;
  /** Icon rendered inside the difficulty chip, e.g. `/assets/home/49c4e.svg`. */
  difficultyIcon?: string;
  /** Star rendered next to the rating, e.g. `/assets/home/652e6.svg`. */
  ratingIcon?: string;
  /** Face used by the "+N" learners badge, e.g. `/assets/home/95600.svg`. */
  moreAvatarUrl?: string;
  learners?: CourseLearner[];
}

/**
 * Icon used by the hero chips and the sidebar's "This course include" list —
 * the data stores the component itself, not an image URL.
 */
export type CourseIcon = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Props for icons that don't paint with `currentColor` on their own — e.g.
 * `UsersIcon` takes a `color` prop, so callers point it at the text colour.
 */
export type CourseIconProps = SVGProps<SVGSVGElement> & { color?: string };

/** One chip in the course hero, e.g. the difficulty, rating or student count. */
export interface CourseStat {
  id: string;
  label: string;
  Icon: CourseIcon;
  iconProps?: CourseIconProps;
}

/** A course plus the extra copy only the details page needs. */
export interface CourseDetails extends Course {
  subtitle: string;
  author: string;
  stats: CourseStat[];
}

/** One row of the curriculum list, e.g. `{ no: 1, title: "…", duration: "7:21" }`. */
export interface CourseLesson {
  no: number;
  title: string;
  duration: string;
}

/** One bullet in the sidebar's "This course include" list. */
export interface CourseInclude {
  id: string;
  label: string;
  Icon: CourseIcon;
  iconProps?: CourseIconProps;
}

/** A Sneak Peak thumbnail. */
export interface CourseSneakPeek {
  src: string;
  alt: string;
}

/** Author block at the bottom of the sidebar. */
export interface CourseInstructor {
  name: string;
  role: string;
  avatarUrl: string;
  blurb: string;
  /** Creator profile the "See Full Profile" link points at, e.g. `"purepearl-studio"`. */
  slug?: string;
}

/**
 * One module of the Lessons tab's lesson list, e.g.
 * `{ id: "module-1", title: "…", body: "…" }`.
 */
export interface CourseModule {
  id: string;
  title: string;
  /** One-line summary shown under the module title. */
  body: string;
}

/**
 * The Lessons tab: the Figma frame's four sections — "Explore the Modules", the
 * module list, "Lesson Content" and "Lesson Progress Tracking" with its card.
 */
export interface CourseLessonsContent {
  /** Copy under "Explore the Modules". */
  overview: string;
  /** Copy under "Lesson Content". */
  content: string;
  /** Copy under "Lesson Progress Tracking". */
  progressNote: string;
  /** Completed share the progress card shows, 0 - 100. */
  progressPercent: number;
  modules: CourseModule[];
}

/**
 * One bar of the Reviews tab's Ratings card, e.g. `{ stars: 5, count: 41 }`.
 */
export interface CourseRatingBreakdown {
  stars: number;
  count: number;
}

/** One review card of the Reviews tab. */
export interface CourseReview {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  /** When it was left, e.g. `"3 weeks ago"`. */
  date: string;
  /** Whole stars, 1 - 5 — the row the filter pills match on. */
  rating: number;
  text: string;
}

/**
 * The Reviews tab: the summary card, the rating filter pills and the reviews
 * themselves (Figma's "What Learners Are Saying" / "Individual Reviews:").
 */
export interface CourseReviewsContent {
  /** Copy under "What Learners Are Saying". */
  intro: string;
  /** Average score the summary card shows, e.g. 4.7. */
  average: number;
  /** How many ratings the average is based on. */
  total: number;
  /** Bars of the summary card, 5 stars down to 1. */
  breakdown: CourseRatingBreakdown[];
  reviews: CourseReview[];
}

/**
 * The slice of the page content the tab island (`CourseTabs`) renders. Every
 * field is a plain value because client components can only be handed props
 * React can serialise — icon components stay inside the component itself.
 */
export interface CourseTabContent {
  description: string[];
  keyPoints: string[];
  sneakPeek: CourseSneakPeek[];
  lessonsTab: CourseLessonsContent;
  reviewsTab: CourseReviewsContent;
}

/** Everything the details page renders below the hero, derived per course. */
export interface CoursePageContent {
  videoPoster: string;
  videoPosterAlt: string;
  /** "17 Lessons • 2 hours 16 mins" — the sidebar heading. */
  lessonsSummary: string;
  lessons: CourseLesson[];
  /** Lessons that don't fit the sidebar list, e.g. 13 -> "13 more videos". */
  moreLessons: number;
  includes: CourseInclude[];
  instructor: CourseInstructor;
  enrollNote: string;
  /** Serialisable props for the `CourseTabs` client component. */
  tabContent: CourseTabContent;
}

export interface Testimonial {
  name: string;
  role: string;
  /** Avatar path, e.g. `/assets/home/b6932.png`. */
  image: string;
  /** Quote as authored, including its surrounding quotation marks. */
  quote: string;
}

/** A course creator, as shown on the profile page (`/creators/[slug]`). */
export interface Creator {
  id: string;
  /** URL segment used by `/creators/[slug]`. */
  slug: string;
  name: string;
  /** Small highlight rendered next to the name, e.g. `"Popular"`. */
  badge: string;
  /** One-line role summary under the name, e.g. `"Passionate UI/UX, Web designer"`. */
  tagline: string;
  /** Bio paragraphs, rendered in order. */
  bio: string[];
  /** Avatar path, e.g. `/assets/courseDetails/3bfea.png`. */
  avatar: string;
  /** Published courses shown as the "Products" statistic. */
  products: number;
  followers: number;
  /** Whether the viewer already follows the creator. */
  following: boolean;
}