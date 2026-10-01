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
  difficultyIcon?: string;
  ratingIcon?: string;
  moreAvatarUrl?: string;
  learners?: CourseLearner[];
}


export type CourseIcon = ComponentType<SVGProps<SVGSVGElement>>;


export type CourseIconProps = SVGProps<SVGSVGElement> & { color?: string };


export interface CourseStat {
  id: string;
  label: string;
  Icon: CourseIcon;
  iconProps?: CourseIconProps;
}

export interface CourseDetails extends Course {
  subtitle: string;
  author: string;
  stats: CourseStat[];
}

export interface CourseLesson {
  no: number;
  title: string;
  duration: string;
}

export interface CourseInclude {
  id: string;
  label: string;
  Icon: CourseIcon;
  iconProps?: CourseIconProps;
}

export interface CourseSneakPeek {
  src: string;
  alt: string;
}


export interface CourseInstructor {
  name: string;
  role: string;
  avatarUrl: string;
  blurb: string;
  slug?: string;
}


export interface CourseModule {
  id: string;
  title: string;
  body: string;
}


export interface CourseLessonsContent {
  overview: string;
  content: string;

  progressNote: string;

  progressPercent: number;
  modules: CourseModule[];
}


export interface CourseRatingBreakdown {
  stars: number;
  count: number;
}


export interface CourseReview {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;

  date: string;

  rating: number;
  text: string;
}


export interface CourseReviewsContent {

  intro: string;

  average: number;

  total: number;

  breakdown: CourseRatingBreakdown[];
  reviews: CourseReview[];
}


export interface CourseTabContent {
  description: string[];
  keyPoints: string[];
  sneakPeek: CourseSneakPeek[];
  lessonsTab: CourseLessonsContent;
  reviewsTab: CourseReviewsContent;
}


export interface CoursePageContent {
  videoPoster: string;
  videoPosterAlt: string;
 
  lessonsSummary: string;
  lessons: CourseLesson[];

  moreLessons: number;
  includes: CourseInclude[];
  instructor: CourseInstructor;
  enrollNote: string;

  tabContent: CourseTabContent;
}

export interface Testimonial {
  name: string;
  role: string;

  image: string;

  quote: string;
}


export interface Creator {
  id: string;
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  bio: string[];
  avatar: string;
  products: number;
  followers: number;
  following: boolean;
}

export interface FooterItem {
  id: string;
  label: string;
  onClick?: () => void;
}

export interface FooterColumn {
  id: string;
  heading?: string;
  items: FooterItem[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  legalLinks?: FooterItem[];
  onSubscribe?: (email: string) => void;
  onLogoClick?: () => void;
  subscribeLabel?: string;
}