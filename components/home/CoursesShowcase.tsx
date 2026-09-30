
import type { ReactNode } from "react";
import { COURSES, HAPPY_STATS } from "@/components/data/data";
import CourseCard from "@/components/home/courseCard";
import { HappyStudentCard } from "@/components/home/HappyStudentCart";
import ScaledStage from "@/components/home/ScaledStage";


const a = "/assets/home";

const img = {
  studentMan: `${a}/e3a78.png`,
  squiggle1: `${a}/80418.png`,
  squiggleMask1: `${a}/e5f4c.png`,
  studentWoman: `${a}/af9cb.png`,
  squiggle2: `${a}/eb4eb.png`,
  squiggleMask2: `${a}/41fc0.png`,
  bgBlobs: `${a}/ede30.svg`,
  bgBlob: `${a}/5400e.svg`,
  check: `${a}/1a25f.svg`,
};

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const features = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

/**
 * Figma's `font-poppins-semibold` / `font-poppins-medium` families are mapped
 * onto the project's Poppins token plus a weight utility — Poppins 500 + 600
 * are already loaded in app/layout.tsx, so no extra font plumbing is needed.
 */
const heading =
  "font-poppins font-semibold text-ink text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.2] tracking-[-0.44px]";
const body = "font-satoshi font-normal text-body text-[16px] sm:text-[18px] leading-[1.6]";

function Squiggle({ src, mask, className }: { src: string; mask: string; className: string }) {
  return (
    <div className={`absolute size-[215px] ${className}`}>
      <img alt="" src={src} className="pointer-events-none absolute inset-0 size-full object-cover" />
      <div
        className="absolute inset-0 bg-lime mix-blend-hard-light"
        style={{ maskImage: `url("${mask}")`, maskSize: "216px 216px", maskRepeat: "no-repeat" }}
      />
    </div>
  );
}

function ProgressBar({ track }: { track: string }) {
  return (
    <div className={`h-2 w-[200px] rounded-full ${track}`}>
      <div className="h-2 w-[112px] rounded-full bg-lime" />
    </div>
  );
}

function HeroVisual() {
  return (
    <ScaledStage width={621} height={552}>
      {/* The one reusable card component, fed by data.tsx. */}
      <CourseCard {...COURSES[0]} />
      <img
        alt="Smiling student with laptop"
        src={img.studentMan}
        className="absolute top-3 left-0 h-[540px] w-[577px] object-cover shadow-float"
      />
      <div className="absolute top-[213px] left-[345px] flex flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]">
        <p className="font-satoshi text-[14px] leading-[24px] font-medium text-ink">Learning Progress</p>
        <p className="font-poppins text-[48px] leading-[1.2] font-semibold tracking-[-0.48px] text-ink">55%</p>
        <ProgressBar track="bg-[#f6f6f6]" />
      </div>
      <Squiggle src={img.squiggle1} mask={img.squiggleMask1} className="left-[406px] top-[67px]" />
    </ScaledStage>
  );
}

function StatCard({
  title,
  sub,
  children,
  className,
}: {
  title: string;
  sub: string;
  children: ReactNode;
  className: string;
}) {
  return (
    <div
      className={`absolute left-0 flex flex-col gap-2 rounded-2xl bg-brand p-4 text-[#f5f5f6] backdrop-blur-[10px] ${className}`}
    >
      <div>
        <p className="font-satoshi text-[16px] leading-[1.2] font-medium">{title}</p>
        <p className="font-satoshi text-[10px] leading-[1.2]">{sub}</p>
      </div>
      {children}
    </div>
  );
}

function Badge() {
  return (
    <span className="rounded-full bg-lime-strong px-2 py-0.5 font-satoshi text-[10px] leading-[20px] font-medium text-ink">
      +12$
    </span>
  );
}

function ManageVisual() {
  return (
    <ScaledStage width={541} height={596}>
      <StatCard title="Total Revenue" sub="July 1-28" className="top-[44px]">
        <div className="flex w-[200px] items-center justify-between">
          <span className="font-poppins text-[24px] leading-[32px] font-semibold tracking-[-0.24px]">$120.29</span>
          <Badge />
        </div>
        <ProgressBar track="bg-white" />
      </StatCard>
      <StatCard title="Year to Date" sub="2023" className="top-[194px] w-[134px] items-start">
        <span className="font-poppins text-[24px] leading-[32px] font-semibold tracking-[-0.24px]">$1,200.38</span>
        <Badge />
      </StatCard>
      <div className="absolute top-0 left-[28px] h-[596px] w-[435px] overflow-hidden shadow-float">
        <img
          alt="Student with headphones and tablet"
          src={img.studentWoman}
          className="absolute top-0 left-[-28.51%] h-[114.6%] w-[157.01%] max-w-none"
        />
      </div>
      {/* Figma's "Happy Students" card — same component the hero uses, fed by data.tsx. */}
      <HappyStudentCard stats={HAPPY_STATS} className="absolute top-[413px] left-[283px] w-[258px]" />
      <Squiggle src={img.squiggle2} mask={img.squiggleMask2} className="left-[305px] top-[114px]" />
    </ScaledStage>
  );
}

export default function CoursesShowcase() {
  return (
    <section aria-label="Courses showcase" className="relative overflow-hidden bg-[#fafafa]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          alt=""
          src={img.bgBlobs}
          className="absolute top-[-506px] left-[calc(50%-1268px)] h-[2471px] w-[2536px] max-w-none"
        />
        <img
          alt=""
          src={img.bgBlob}
          className="absolute top-[906px] left-[calc(50%-1047px)] size-[752px] max-w-none"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-20 px-5 py-16 sm:px-10 lg:gap-[72px] lg:px-[121px] lg:py-[120px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-[63px]">
          <div className="flex w-full max-w-[577px] flex-col gap-8 lg:gap-10">
            <h2 className={heading}>Your Path to Professional Growth Starts Here!</h2>
            <p className={`${body} max-w-[477px]`}>
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
              career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark
              on a new career path entirely, we have the resources you need.
            </p>
            <dl className="flex flex-wrap gap-10 sm:gap-14">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className={body}>{s.label}</dt>
                  <dd className="font-poppins text-[36px] leading-[44px] font-medium tracking-[-0.36px] text-brand">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <HeroVisual />
        </div>

        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-[79px]">
          <ManageVisual />
          <div className="flex w-full max-w-[580px] flex-col gap-8 lg:gap-10">
            <h2 className={`${heading} max-w-[391px]`}>Create &amp; Manage Courses Easily.</h2>
            <p className={body}>
              <span className="font-bold text-ink">ByteSpace</span> supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-end gap-2 font-satoshi text-[18px] leading-[1.2] font-medium text-ink"
                >
                  <img alt="" src={img.check} className="size-6" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
