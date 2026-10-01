import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { CreatorCourses } from "@/components/creators-profile/CreatorCourses";
import { CreatorHero } from "@/components/creators-profile/CreatorHero";
import { getAllCreatorSlugs, getCreatorBySlug, slugify } from "@/components/data/creators";
import { COURSE_PAGE_COURSES } from "@/components/data/data";

type CreatorProfilePageProps = {
  params: Promise<{ slug: string }>;
};

/** One pre-rendered page per creator slug from components/data/data.tsx. */
export function generateStaticParams(): { slug: string }[] {
  return getAllCreatorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CreatorProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);

  if (!creator) return { title: "Creator not found — ByteSpace" };

  return {
    title: `${creator.name} — ByteSpace`,
    description: creator.tagline,
  };
}

export default async function CreatorProfilePage({ params }: CreatorProfilePageProps) {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);

  if (!creator) notFound();

  /* The catalogue is shared, so the grid keeps only the courses this creator teaches. */
  const creatorCourses = COURSE_PAGE_COURSES.filter(
    (course) => slugify(course.instructor) === creator.slug,
  );

  return (
    <main className="w-full">
      <div className="relative w-full overflow-hidden bg-[#003BE2] hero-grid">
        <Navbar />
        <CreatorHero creator={creator} />
      </div>

      <CreatorCourses courses={creatorCourses} />
    </main>
  );
}
