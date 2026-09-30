import { DesignIcon } from "../Icons/home/DesignIcon";
import NextJsLogo from "../Icons/home/NextjsLogo";
import ReactLogo from "../Icons/home/ReactLogo";
import SunburstLogo from "../Icons/home/SunburstLogo";
import TailwindLogo from "../Icons/home/Tailwindlogo";
import BoltLogo from "../Icons/nav/BoltLogo";
import type { Category, Course, CourseCategory } from "../interfaces";
import type { Partner } from "../home/PartnerCart";

const cls = "h-9 w-9";
export const data: Category[] = [
  { id: 1, name: "Design", icon: <DesignIcon className={cls} /> },
  { id: 2, name: "Development", icon: <DesignIcon className={cls} /> },
  { id: 3, name: "IT & Software", icon: <DesignIcon className={cls} /> },
  { id: 4, name: "Business", icon: <DesignIcon className={cls} /> },
  { id: 5, name: "Marketing", icon: <DesignIcon className={cls} /> },
  { id: 6, name: "Photography", icon: <DesignIcon className={cls} /> },
];


export const PARTNER_LOGOS: Partner[] = [
  { id: "partner-1", name: "Logoipsum", Icon: TailwindLogo },
  { id: "partner-2", name: "Logoipsum", Icon: SunburstLogo },
  { id: "partner-3", name: "Logoipsum", Icon: BoltLogo },
  { id: "partner-4", name: "Logoipsum", Icon: ReactLogo },
  { id: "partner-5", name: "Logoipsum", Icon: NextJsLogo },
];

export const HAPPY_STATS = {
  rating: 4.5,
  reviewCount: 240,
  studentCount: 2,
  students: [
    { id: "s1", name: "Student 1", avatarUrl: "" },
    { id: "s2", name: "Student 2", avatarUrl: "" },
    { id: "s3", name: "Student 3", avatarUrl: "" },
    { id: "s4", name: "Student 4", avatarUrl: "" },
    { id: "s5", name: "Student 5", avatarUrl: "" },
    { id: "s6", name: "Student 6", avatarUrl: "" },
  ],
};



/* Courses*/

export const COURSE_CATEGORIES: CourseCategory[] = [
  { id: "featured", label: "Featured" },
  { id: "music", label: "Music" },
  { id: "drawing-painting", label: "Drawing & Painting" },
  { id: "marketing", label: "Marketing" },
  { id: "animation", label: "Animation" },
  { id: "social-media", label: "Social Media" },
  { id: "ui-ux-design", label: "UI/UX Design" },
  { id: "creative-marketing", label: "Creative Marketing" },
  { id: "digital-illustration", label: "Digital Illustration" },
  { id: "film-and-video", label: "Film & Video" },
  { id: "crafts", label: "Crafts" },
  { id: "freelance-entrepreneurship", label: "Freelance & Entrepreneurship" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "photography", label: "Photography" },
  { id: "productivity", label: "Productivity" },
  { id: "web-development", label: "Web Development" },
  { id: "data-science", label: "Data Science" },
  { id: "cooking", label: "Cooking" },
  { id: "business", label: "Business" },
  { id: "finance", label: "Finance" },
  { id: "health-and-fitness", label: "Health & Fitness" },
  { id: "personal-development", label: "Personal Development" },
  { id: "teaching-and-academics", label: "Teaching & Academics" },
  { id: "artificial-intelligence", label: "Artificial Intelligence" },
];


export const COURSES: Course[] = [
  {
    id: "course-1",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    difficulty: "Beginner",
    price: "$25",
    rating: 4.5,
    categoryId: "ui-ux-design",
    image: "/assets/hero/courseCard1.png",
    learners: [
      { id: "c1-l1", name: "Learner 1" },
      { id: "c1-l2", name: "Learner 2" },
      { id: "c1-l3", name: "Learner 3" },
      { id: "c1-l4", name: "Learner 4" },
      { id: "c1-l5", name: "Learner 5" },
      { id: "c1-l6", name: "Learner 6" },
      { id: "c1-l47", name: "Learner 5" },
      { id: "c1-l60", name: "Learner 6" },
    ],
  },
  {
    id: "course-2",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    difficulty: "Beginner",
    price: "$25",
    rating: 4.5,
    categoryId: "creative-marketing",
    image: "/assets/hero/courseCard1.png",
    learners: [
      { id: "c2-l1", name: "Learner 1" },
      { id: "c2-l2", name: "Learner 2" },
      { id: "c2-l3", name: "Learner 3" },
      { id: "c2-l4", name: "Learner 4" },
    ],
  },
  {
    id: "course-3",
    title: "the Power of Big Data",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    difficulty: "Beginner",
    price: "$25",
    rating: 4.5,
    categoryId: "marketing",
    image: "/assets/hero/courseCard1.png",
    learners: [
      { id: "c3-l1", name: "Learner 1" },
      { id: "c3-l2", name: "Learner 2" },
      { id: "c3-l3", name: "Learner 3" },
      { id: "c3-l4", name: "Learner 4" },
      { id: "c3-l5", name: "Learner 5" },
      { id: "c3-l6", name: "Learner 6" },
      { id: "c3-l7", name: "Learner 7" },
      { id: "c3-l8", name: "Learner 8" },
      { id: "c3-l9", name: "Learner 9" },
    ],
  },
  {
    id: "course-4",
    title: "Balancing Productivity and Creativity",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    difficulty: "Beginner",
    price: "$25",
    rating: 4.5,
    categoryId: "creative-marketing",
    image: "/assets/hero/courseCard1.png",
    learners: [
      { id: "c4-l1", name: "Learner 1" },
      { id: "c4-l2", name: "Learner 2" },
      { id: "c4-l3", name: "Learner 3" },
      { id: "c4-l4", name: "Learner 4" },
      { id: "c4-l5", name: "Learner 5" },
    ],
  },
  {
    id: "course-5",
    title: "Mastering Money Management",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    difficulty: "Beginner",
    price: "$25",
    rating: 4.5,
    categoryId: "marketing",
    image: "/assets/hero/courseCard1.png",
    learners: [
      { id: "c5-l1", name: "Learner 1" },
      { id: "c5-l2", name: "Learner 2" },
      { id: "c5-l3", name: "Learner 3" },
    ],
  },
  {
    id: "course-6",
    title: "From Idea to Startup Success",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    difficulty: "Beginner",
    price: "$25",
    rating: 4.5,
    categoryId: "marketing",
    image: "/assets/hero/courseCard1.png",
    learners: [
      { id: "c6-l1", name: "Learner 1" },
      { id: "c6-l2", name: "Learner 2" },
      { id: "c6-l3", name: "Learner 3" },
      { id: "c6-l4", name: "Learner 4" },
      { id: "c6-l5", name: "Learner 5" },
      { id: "c6-l6", name: "Learner 6" },
      { id: "c6-l7", name: "Learner 7" },
    ],
  },
];
