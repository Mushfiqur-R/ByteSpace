import type {
  Course,
  CourseDetails,
  CourseInclude,
  CourseLesson,
  CourseModule,
  CoursePageContent,
  CourseRatingBreakdown,
  CourseReview,
  CourseReviewsContent,
  CourseStat,
} from "../interfaces";
import { COURSES, COURSE_CATEGORIES, COURSE_PAGE_COURSES, TESTIMONIALS } from "./data";
import { getCreatorByInstructor } from "./creators";
import CheckCircleIcon from "../Icons/course-details/CheckCircleIcon";
import NewsIcon from "../Icons/course-details/NewsIcon";
import PlayCircleIcon from "../Icons/course-details/PlayCircleIcon";
import UsersIcon from "../Icons/course-details/UsersIcon";
import VideoIcon from "../Icons/course-details/VideoIcon";
import WalkingIcon from "../Icons/course-details/WalkingIcon";


const ALL_COURSES: Course[] = [...COURSES, ...COURSE_PAGE_COURSES];


const SUBTITLE_OVERRIDES: Record<string, string> = {
  "course-2": "Unlock the Power of Digital Creation with Expert Guidance",
};

const categoryLabel = (categoryId: string) =>
  COURSE_CATEGORIES.find((category) => category.id === categoryId)?.label ?? "Creative Skills";

const getSubtitle = (course: Course) =>
  SUBTITLE_OVERRIDES[course.id] ??
  `Unlock the Power of ${categoryLabel(course.categoryId)} with Expert Guidance`;


const getCourseStats = (course: Course): CourseStat[] => [
  {
    id: "level",
    label: course.difficulty,
    Icon: WalkingIcon,
  },
  {
    id: "reviews",
    label: `${course.rating.toFixed(1)} (${course.comments} reviews)`,
    Icon: NewsIcon,
  },
  {
    id: "students",
    label: `${course.learners?.length ?? 0} Students`,
    Icon: UsersIcon,
   
    iconProps: { color: "currentColor" },
  },
];

export const getCourseById = (id: string): CourseDetails | undefined => {
  const course = ALL_COURSES.find((item) => item.id === id);
  if (!course) return undefined;

  return {
    ...course,
    subtitle: getSubtitle(course),
    author: course.instructor,
    stats: getCourseStats(course),
  };
};


export const getAllCourseIds = (): string[] => ALL_COURSES.map(({ id }) => id);

/** Figma exports that belong to this page, in `public/assets/courseDetails/`. */
const detailAsset = (file: string) => `/assets/courseDetails/${file}`;


const PAGE_MEDIA = {
  video: "aa365.png",
  instructor: "3bfea.png",
  sneakPeek: [
    { file: "cda37.png", alt: "The ByteSpace app on two phones" },
    { file: "53d66.png", alt: "A design system laid out on a desktop monitor" },
    { file: "f50f8.png", alt: "Sketching interface wireframes by hand" },
    { file: "aa365.png", alt: "A student working through the course" },
  ],
} as const;

const pluralize = (count: number, singular: string) =>
  `${count} ${singular}${count === 1 ? "" : "s"}`;

const toMinutes = (duration: string) => {
  const hours = Number(/(\d+)\s*hour/i.exec(duration)?.[1] ?? 0);
  const minutes = Number(/(\d+)\s*min/i.exec(duration)?.[1] ?? 0);
  return hours * 60 + minutes;
};

/** 754 -> "12:34". */
const formatRuntime = (seconds: number) => {
  const whole = Math.max(Math.floor(seconds), 0);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
};


const LESSON_WEIGHTS = [0.22, 0.28, 0.3, 0.2];

/** Used when `course.duration` is missing or unreadable. */
const FALLBACK_LESSON_MINUTES = 12;

const LESSON_TITLE_TEMPLATES: ((course: Course) => string)[] = [
  (course) => `Introduction to ${course.title}`,
  () => "Getting set up: tools and best practices",
  (course) => `Core ${categoryLabel(course.categoryId)} concepts, step by step`,
  () => "Hands-on project walkthrough",
];

const lessonTitle = (course: Course, index: number) => {
  const template = LESSON_TITLE_TEMPLATES[index];
  return template ? template(course) : `Lesson ${index + 1}`;
};

/** The four previewed chapters; the rest of `course.lessons` is summarised. */
const getCurriculum = (course: Course): CourseLesson[] => {
  const total = toMinutes(course.duration) || LESSON_WEIGHTS.length * FALLBACK_LESSON_MINUTES;

  return LESSON_WEIGHTS.map((weight, index) => ({
    no: index + 1,
    title: lessonTitle(course, index),
    duration: formatRuntime(total * 60 * weight),
  }));
};


const MODULE_BODY_TEMPLATES: ((course: Course) => string)[] = [
  (course) =>
    `Meet the tools, set up your workspace and follow along with the first ${course.difficulty.toLowerCase()} exercise.`,
  () => "Work through the core techniques with the project files open beside you, one step at a time.",
  (course) => `Rebuild the chapter on a brief of your own, then compare the result with ${course.instructor}'s.`,
];

const moduleBody = (course: Course, index: number) => {
  const template = MODULE_BODY_TEMPLATES[index];
  return (
    template?.(course) ??
    "Review the finished work, polish the details and take the delivery checklist with you."
  );
};


const getModules = (course: Course, lessons: CourseLesson[]): CourseModule[] =>
  lessons.map(({ no, title }, index) => ({
    id: `module-${no}`,
    title,
    body: moduleBody(course, index),
  }));

/** Lessons-tab copy, word for word from the Figma frame. */
const LESSONS_TAB_COPY = {
  overview:
    "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  content:
    "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
  progressNote:
    "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
};


const PROGRESS_PERCENT = 55;


const RATING_WEIGHTS = [0.62, 0.24, 0.08, 0.04, 0.02];


const REVIEW_STARS = [5, 5, 4];

/** How long ago each reused testimonial was written. */
const REVIEW_AGES = ["2 weeks ago", "1 month ago", "3 months ago"];

const getRatingBreakdown = (course: Course): CourseRatingBreakdown[] => {
  const counts = RATING_WEIGHTS.map((weight) => Math.round(course.comments * weight));
  const drift = course.comments - counts.reduce((sum, count) => sum + count, 0);

  return counts.map((count, index) => ({
    stars: RATING_WEIGHTS.length - index,
    count: index === 0 ? Math.max(count + drift, 0) : count,
  }));
};


const getReviews = (): CourseReview[] =>
  TESTIMONIALS.map(({ name, role, image, quote }, index) => ({
    id: name,
    name,
    role,
    avatarUrl: image,
    date: REVIEW_AGES[index] ?? "6 months ago",
    rating: REVIEW_STARS[index] ?? 5,
    text: quote,
  }));

/** The Reviews tab, in one piece: summary card, filter pills and the reviews. */
const getReviewsTab = (course: Course): CourseReviewsContent => ({
  intro: `Discover what our learners have to say about their experience with '${course.title}'. Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.`,
  average: course.rating,
  total: course.comments,
  breakdown: getRatingBreakdown(course),
  reviews: getReviews(),
});

const getDescription = (course: Course): string[] => {
  const category = categoryLabel(course.categoryId);

  return [
    `${course.title} is a ${course.difficulty.toLowerCase()} ${category} course for creators who want to finish real work. Across ${pluralize(course.lessons, "lesson")} (${course.duration}) ${course.instructor} walks through the whole process, from the first idea to the final delivery.`,
    "Every chapter builds on the one before it, so you always know where you are and what comes next. You work in the same tools professionals use, then repeat the steps on a brief of your own.",
    `By the end you have a finished project for your portfolio, a workflow you can reuse on any ${category.toLowerCase()} job, and the confidence to take on the next one yourself.`,
  ];
};

const getKeyPoints = (course: Course): string[] => [
  `${pluralize(course.lessons, "practical lesson")} you can follow at your own pace`,
  `${course.duration} of on-demand video, streamed or downloaded`,
  `Built for ${course.difficulty.toLowerCase()} learners — no guesswork required`,
  "Project files and resources for every chapter",
  `Rated ${course.rating.toFixed(1)} out of 5 by ${pluralize(course.comments, "learner")}`,
];

const getIncludes = (course: Course): CourseInclude[] => [
  { id: "lessons", label: pluralize(course.lessons, "video lesson"), Icon: VideoIcon },
  { id: "runtime", label: `${course.duration} of on-demand video`, Icon: PlayCircleIcon },
  { id: "resources", label: "Downloadable resources & notes", Icon: NewsIcon },
  {
    id: "community",
    label: "Access to the creator community",
    Icon: UsersIcon,
    /* UsersIcon defaults to brand blue, so it follows the row colour instead. */
    iconProps: { color: "currentColor" },
  },
  { id: "certificate", label: "Certificate of completion", Icon: CheckCircleIcon },
];


export const getCoursePageContent = (course: CourseDetails): CoursePageContent => {
  const lessons = getCurriculum(course);
  const moreLessons = Math.max(course.lessons - lessons.length, 0);
  const learnerCount = course.learners?.length ?? 0;

  return {
    videoPoster: detailAsset(PAGE_MEDIA.video),
    videoPosterAlt: `${course.title} preview still`,
    lessonsSummary: `${pluralize(course.lessons, "Lesson")} • ${course.duration}`,
    lessons,
    moreLessons,
    includes: getIncludes(course),
    instructor: {
      name: course.instructor,
      role: "Professional Creator",
      avatarUrl: detailAsset(PAGE_MEDIA.instructor),
      blurb:
        learnerCount > 0
          ? `${course.instructor} teaches ${pluralize(course.lessons, "lesson")} to ${pluralize(learnerCount, "learner")} on ByteSpace.`
          : `${course.instructor} teaches ${pluralize(course.lessons, "lesson")} on ByteSpace.`,
      slug: getCreatorByInstructor(course.instructor)?.slug,
    },
    enrollNote: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
    tabContent: {
      description: getDescription(course),
      keyPoints: getKeyPoints(course),
      sneakPeek: PAGE_MEDIA.sneakPeek.map(({ file, alt }) => ({ src: detailAsset(file), alt })),
      lessonsTab: {
        ...LESSONS_TAB_COPY,
        progressPercent: PROGRESS_PERCENT,
        modules: getModules(course, lessons),
      },
      reviewsTab: getReviewsTab(course),
    },
  };
};
