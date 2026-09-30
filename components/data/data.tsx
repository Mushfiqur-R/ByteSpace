import { DesignIcon } from "../Icons/home/DesignIcon";
import NextJsLogo from "../Icons/home/NextjsLogo";
import ReactLogo from "../Icons/home/ReactLogo";
import SunburstLogo from "../Icons/home/SunburstLogo";
import TailwindLogo from "../Icons/home/Tailwindlogo";
import BoltLogo from "../Icons/nav/BoltLogo";
import type { Category, Course, CourseCategory, CourseLearner, Testimonial } from "../interfaces";
import type { Partner } from "../home/PartnerCart";
import type { HappyStudentStats, HappyStudentAvatar } from "../home/HappyStudentCart";

const cls = "h-9 w-9";

/** Asset root shared by the Figma Make home sections. */
const homeAssets = "/assets/home";

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

/* Happy Students card — shared by the hero and the CoursesShowcase sections. */

export const HAPPY_STUDENT_ASSETS = {
  star: `${homeAssets}/eafcb.svg`,
  moreAvatar: `${homeAssets}/bf7f4.svg`,
  avatars: [
    `${homeAssets}/d0fbe.png`,
    `${homeAssets}/cb015.png`,
    `${homeAssets}/b27d0.png`,
    `${homeAssets}/85dac.png`,
    `${homeAssets}/50032.png`,
    `${homeAssets}/ce2e1.png`,
    `${homeAssets}/9c73f.png`,
  ],
} as const;

/** One entry per avatar, so both sections show the same faces. */
const happyStudents: HappyStudentAvatar[] = HAPPY_STUDENT_ASSETS.avatars.map((avatarUrl, index) => ({
  id: `happy-${index + 1}`,
  name: `Student ${index + 1}`,
  avatarUrl,
}));

/**
 * Stats for the "Happy Students" card: 4.5 (240), seven avatars and the "2K+"
 * badge from the CoursesShowcase Figma design. The hero renders the very same
 * card, so there is one source of truth for both sections.
 */
export const HAPPY_STATS: HappyStudentStats = {
  rating: 4.5,
  reviewCount: 240,
  studentCount: 2000,
  starIcon: HAPPY_STUDENT_ASSETS.star,
  moreAvatarUrl: HAPPY_STUDENT_ASSETS.moreAvatar,
  students: happyStudents,
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



export const COURSE_CARD_ASSETS = {
  cover: "/assets/home/670ab.png",
  difficultyIcon: "/assets/home/49c4e.svg",
  ratingIcon: "/assets/home/652e6.svg",
  moreAvatar: "/assets/home/95600.svg",
  learnerAvatars: [
    "/assets/home/2448e.png",
    "/assets/home/06ad8.png",
    "/assets/home/50d3a.png",
    "/assets/home/51caf.png",
  ],
} as const;

/** Builds a learner list whose avatars cycle through `avatars`. */
const makeLearners = (prefix: string, total: number, avatars: readonly string[]): CourseLearner[] =>
  Array.from({ length: total }, (_, index) => ({
    id: `${prefix}-l${index + 1}`,
    name: `Learner ${index + 1}`,
    avatarUrl: avatars.length > 0 ? avatars[index % avatars.length] : undefined,
  }));

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
    image: COURSE_CARD_ASSETS.cover,
    imageAlt: "Learn Figma from Basic course cover",
    difficultyIcon: COURSE_CARD_ASSETS.difficultyIcon,
    ratingIcon: COURSE_CARD_ASSETS.ratingIcon,
    // moreAvatarUrl: COURSE_CARD_ASSETS.moreAvatar,
    /* 30 learners -> 4 avatars + a "+26" badge, matching the Figma card. */
    learners: makeLearners("c1", 30, COURSE_CARD_ASSETS.learnerAvatars),
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
    imageAlt: "Build Digital Asset course cover",
    difficultyIcon: COURSE_CARD_ASSETS.difficultyIcon,
    ratingIcon: COURSE_CARD_ASSETS.ratingIcon,
    // moreAvatarUrl: COURSE_CARD_ASSETS.moreAvatar,
    /* 8 learners -> 4 avatars + a "+4" badge. */
    learners: makeLearners("c2", 8, COURSE_CARD_ASSETS.learnerAvatars),
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
    imageAlt: "the Power of Big Data course cover",
    difficultyIcon: COURSE_CARD_ASSETS.difficultyIcon,
    ratingIcon: COURSE_CARD_ASSETS.ratingIcon,
    // moreAvatarUrl: COURSE_CARD_ASSETS.moreAvatar,
    /* 12 learners -> 4 avatars + a "+8" badge. */
    learners: makeLearners("c3", 12, COURSE_CARD_ASSETS.learnerAvatars),
  },
];

/* Testimonials (community section) */

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: `${homeAssets}/b6932.png`,
    quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: `${homeAssets}/31926.png`,
    quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: `${homeAssets}/c852a.png`,
    quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];


/* Courses page (`/courses`) — chips row plus the 15 catalogue cards. */

const COURSE_PAGE_CATEGORY_IDS = [
  "featured",
  "music",
  "drawing-painting",
  "marketing",
  "animation",
  "social-media",
  "ui-ux-design",
  "creative-marketing",
  "cooking",
] as const;

/** Chips row above the `/courses` grid, resolved from `COURSE_CATEGORIES`. */
export const COURSE_PAGE_CATEGORIES: CourseCategory[] = COURSE_PAGE_CATEGORY_IDS.map(
  (id) => COURSE_CATEGORIES.find((category) => category.id === id) ?? { id, label: id },
);

/** Cover images the catalogue cards cycle through. */
const COURSE_PAGE_COVERS = [
  `${homeAssets}/670ab.png`,
  "/assets/hero/courseCard1.png",
  `${homeAssets}/e3a78.png`,
  `${homeAssets}/af9cb.png`,
  `${homeAssets}/eb4eb.png`,
  `${homeAssets}/41fc0.png`,
  `${homeAssets}/8a604.png`,
  `${homeAssets}/5713a.png`,
  `${homeAssets}/682df.png`,
  `${homeAssets}/68643.png`,
  `${homeAssets}/82ebe.png`,
  `${homeAssets}/dc30f.png`,
  `${homeAssets}/dc547.png`,
  `${homeAssets}/e89fa.png`,
  `${homeAssets}/b8b88.png`,
] as const;

/** Card fields that differ per catalogue entry (everything else is shared). */
type CoursePageSeed = Pick<
  Course,
  "title" | "categoryId" | "price" | "difficulty" | "rating" | "lessons" | "duration" | "comments"
>;

const COURSE_PAGE_SEED: CoursePageSeed[] = [
  { title: "Learn Figma from Basic", categoryId: "ui-ux-design", price: "$25", difficulty: "Beginner", rating: 4.5, lessons: 17, duration: "2 hours 16 mins", comments: 59 },
  { title: "Build Digital Asset", categoryId: "creative-marketing", price: "$32", difficulty: "Beginner", rating: 4.6, lessons: 12, duration: "1 hour 48 mins", comments: 41 },
  { title: "The Power of Big Data", categoryId: "marketing", price: "$45", difficulty: "Intermediate", rating: 4.7, lessons: 24, duration: "3 hours 05 mins", comments: 78 },
  { title: "Music Production Fundamentals", categoryId: "music", price: "$38", difficulty: "Beginner", rating: 4.4, lessons: 19, duration: "2 hours 32 mins", comments: 36 },
  { title: "Watercolor Painting for Beginners", categoryId: "drawing-painting", price: "$27", difficulty: "Beginner", rating: 4.8, lessons: 15, duration: "2 hours 04 mins", comments: 52 },
  { title: "2D Animation in After Effects", categoryId: "animation", price: "$52", difficulty: "Intermediate", rating: 4.6, lessons: 28, duration: "3 hours 41 mins", comments: 88 },
  { title: "Social Media Strategy 2024", categoryId: "social-media", price: "$29", difficulty: "Beginner", rating: 4.3, lessons: 14, duration: "1 hour 57 mins", comments: 29 },
  { title: "Advanced UI/UX Design Systems", categoryId: "ui-ux-design", price: "$64", difficulty: "Advanced", rating: 4.9, lessons: 32, duration: "4 hours 12 mins", comments: 104 },
  { title: "Creative Marketing Masterclass", categoryId: "creative-marketing", price: "$41", difficulty: "Intermediate", rating: 4.5, lessons: 26, duration: "3 hours 18 mins", comments: 67 },
  { title: "Digital Illustration with Procreate", categoryId: "digital-illustration", price: "$34", difficulty: "Beginner", rating: 4.7, lessons: 18, duration: "2 hours 26 mins", comments: 45 },
  { title: "Cinematic Filmmaking & Video Editing", categoryId: "film-and-video", price: "$58", difficulty: "Intermediate", rating: 4.6, lessons: 30, duration: "4 hours 02 mins", comments: 92 },
  { title: "Handmade Crafts Business", categoryId: "crafts", price: "$22", difficulty: "Beginner", rating: 4.2, lessons: 11, duration: "1 hour 34 mins", comments: 24 },
  { title: "Freelance & Entrepreneurship Launchpad", categoryId: "freelance-entrepreneurship", price: "$49", difficulty: "Intermediate", rating: 4.5, lessons: 22, duration: "2 hours 51 mins", comments: 58 },
  { title: "Graphic Design Portfolio Bootcamp", categoryId: "graphic-design", price: "$36", difficulty: "Beginner", rating: 4.6, lessons: 20, duration: "2 hours 44 mins", comments: 61 },
  { title: "Cooking: Everyday Gourmet Skills", categoryId: "cooking", price: "$19", difficulty: "Beginner", rating: 4.8, lessons: 16, duration: "2 hours 08 mins", comments: 47 },
];

/** The 15 mock cards rendered by the `/courses` grid. */
export const COURSE_PAGE_COURSES: Course[] = COURSE_PAGE_SEED.map((seed, index) => ({
  ...seed,
  id: `catalog-${index + 1}`,
  instructor: "purepearl studio",
  image: COURSE_PAGE_COVERS[index % COURSE_PAGE_COVERS.length],
  imageAlt: `${seed.title} course cover`,
  difficultyIcon: COURSE_CARD_ASSETS.difficultyIcon,
  ratingIcon: COURSE_CARD_ASSETS.ratingIcon,
  learners: makeLearners(`cp${index + 1}`, 6 + (index % 6) * 4, COURSE_CARD_ASSETS.learnerAvatars),
}));

