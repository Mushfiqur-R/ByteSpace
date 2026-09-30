import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { CoursesCatalog } from "@/components/courses/CoursesCatalog";
import { CoursesHero } from "@/components/courses/CoursesHero";
import { FilterBar } from "@/components/courses/FilterBar";

export const metadata: Metadata = {
  title: "Courses — ByteSpace",
  description:
    "Browse ByteSpace courses across design, marketing, music, cooking and more. Filter by level and category to find your next course.",
};

/**
 * `/courses` — the catalogue page. The Navbar and the hero share one blue grid
 * band, exactly like the home page; the footer comes from `app/layout.tsx`.
 */
export default function CoursesPage() {
  return (
    <main className="w-full">
      <div className="relative w-full overflow-hidden bg-[#003BE2] hero-grid">
        <Navbar />
        <CoursesHero />
      </div>

      <FilterBar />

      <CoursesCatalog />
    </main>
  );
}
