import Image from "next/image";
import { HeroSearchForm } from "@/components/home/HeroSearchForm";
import { HappyStudentCard } from "@/components/home/HappyStudentCart";
import { LearningProgressCard } from "@/components/home/LearningProgressCard";
import { HAPPY_STATS } from "../data/data";

function UXDesignBadge() {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
      <div className="flex flex-col">
        <span className="font-satoshi text-[13px] font-bold leading-[120%] text-[#242528]">
          UI/UX Design
        </span>
        <span className="mt-0.5 font-satoshi text-[11px] font-normal leading-[140%] text-[#82868E]">
          200 Courses • 1000+ Students
        </span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative w-full overflow-hidden pb-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 top-0 w-[120px] sm:w-[180px] md:w-[240px] lg:w-[300px] xl:w-[340px]"
      >
        <Image
          src="/assets/shapes/left_mshape_lime.png"
          alt=""
          width={340}
          height={420}
          className="w-full h-auto"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-[3%] sm:left-[5%] lg:left-[8%] top-[38%] w-[55px] sm:w-[70px] lg:w-[90px] hidden sm:block"
      >
        <Image
          src="/assets/shapes/mshape_white.png"
          alt=""
          width={90}
          height={115}
          className="w-full h-auto"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-[3%] sm:left-[4%] lg:left-[6%] bottom-[6%] w-[100px] sm:w-[130px] lg:w-[165px] hidden md:block"
      >
        <Image
          src="/assets/shapes/Oshape.png"
          alt=""
          width={165}
          height={110}
          className="w-full h-auto"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 top-0 w-[80px] sm:w-[120px] md:w-[160px] xl:w-[200px] hidden sm:block"
      >
        <Image
          src="/assets/shapes/right_cylinder_lime.png"
          alt=""
          width={200}
          height={330}
          className="w-full h-auto"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[6%] lg:right-[9%] top-[42%] w-[60px] sm:w-[80px] lg:w-[110px] hidden md:block"
      >
        <Image
          src="/assets/shapes/Triangle_white.png"
          alt=""
          width={110}
          height={105}
          className="w-full h-auto"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[2%] lg:right-[4%] bottom-[4%] w-[70px] sm:w-[90px] lg:w-[120px] hidden md:block"
      >
        <Image
          src="/assets/shapes/Mask Group (3).png"
          alt=""
          width={120}
          height={150}
          className="w-full h-auto"
        />
      </div>


      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 pt-10 sm:pt-14 lg:pt-16">
        <h1
          className="
            font-poppins font-semibold text-white
            tracking-[-0.01em] leading-[120%]
            text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px]
            max-w-[320px] sm:max-w-[540px] md:max-w-[700px] lg:max-w-[935px]
            mb-4 sm:mb-5 lg:mb-6
          "
        >
          Get Access to Hundreds Courses Available
        </h1>

        {/* Supporting text */}
        <p
          className="
            font-satoshi font-normal text-white/80
            text-sm sm:text-base leading-[160%]
            max-w-[300px] sm:max-w-[480px] lg:max-w-[600px]
            mb-6 sm:mb-8 lg:mb-10
          "
        >
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search bar — centered */}
        <HeroSearchForm />
      </div>

      <div
        className="
          relative z-10
          mt-10 sm:mt-12 lg:mt-14
          flex justify-center
          /* Extra bottom padding so the person image has room */
          pb-0
        "
      >
        {/* Container that holds the lime circle + person + cards together */}
        <div
          className="
            relative
            w-full max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[680px]
            mx-auto
          "
        >
          {/* ── Responsive SVG Lime Ring ── */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[55%] md:translate-y-[60%] w-[140%] sm:w-[150%] md:w-[160%] lg:w-[168%] z-0 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-auto text-[#CBFC01]">
              <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="28" />
            </svg>
          </div>

          {/*  UI/UX Design card (upper-left of person)  */}
          <div
              className="
              absolute z-20
              left-0 sm:-left- lg:-left-2
               top-[15%] sm:top-[20%]
               hidden sm:block
               scale-75 sm:scale-90 lg:scale-100
               origin-top-left
               "
          >
  <UXDesignBadge />
</div>

          {/* Learning Progress card (upper-right of person) */}
          <div
            className="
              absolute z-20
              right-0 sm:-right-6 lg:-right-12
              top-[15%] sm:top-[20%]
              scale-75 sm:scale-90 lg:scale-100 origin-top-right
            "
          >
            <LearningProgressCard
              progress={55}
              className="shadow-xl"
            />
          </div>

          {/* Happy Students card */}
          <div
            className="
              absolute z-20
              left-[-5%] sm:-left-6 lg:-left-12
              bottom-[10%] sm:bottom-[12%]
              hidden sm:block
              scale-75 sm:scale-90 lg:scale-100 origin-bottom-left
            "
          >
            <HappyStudentCard stats={HAPPY_STATS} className="shadow-xl" />
          </div>

          {/* Hero person image  */}
          <Image
            src="/assets/hero/hero_person.png"
            alt="A smiling student wearing headphones and holding a laptop"
            width={680}
            height={720}
            priority
            className="relative z-10 w-full h-auto object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
