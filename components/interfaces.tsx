import { ReactNode } from "react";

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

export interface Testimonial {
  name: string;
  role: string;
  /** Avatar path, e.g. `/assets/home/b6932.png`. */
  image: string;
  /** Quote as authored, including its surrounding quotation marks. */
  quote: string;
}