import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import LogoPartner from "@/components/home/PartnerCart";
import { CourseSection } from "@/components/home/CourseSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { PARTNER_LOGOS } from "@/components/data/data";

export default function Home() {
  return (
    <main className="w-full">

      <div className="relative w-full bg-[#003BE2] hero-grid overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>

      <LogoPartner partners={PARTNER_LOGOS} />

      <CourseSection />

      <CategoriesSection />
    </main>
  );
}
