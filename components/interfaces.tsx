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
  learners?: CourseLearner[];
}