import TestimonialCard from "@/components/home/TestimonialCard";
import { TESTIMONIALS } from "@/components/data/data";

const assetPathPrefix = "/assets/home";

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative isolate overflow-hidden bg-[#fafafa] px-6 py-[4.625rem] md:px-12 lg:px-20"
    >
      <img
        className="pointer-events-none absolute -top-60 left-[58%] -z-10 size-[71rem] max-w-none"
        src={`${assetPathPrefix}/29172.svg`}
        alt=""
        aria-hidden="true"
      />
      <img
        className="pointer-events-none absolute -top-36 left-[27%] -z-10 size-[42rem] max-w-none"
        src={`${assetPathPrefix}/5400e.svg`}
        alt=""
        aria-hidden="true"
      />
      <img
        className="pointer-events-none absolute -bottom-96 -left-[31rem] -z-10 size-[71rem] max-w-none"
        src={`${assetPathPrefix}/60d3b.svg`}
        alt=""
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-[75.25rem] flex-col gap-[4.5rem]">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_1fr] lg:gap-[2.6875rem]">
          <h2
            id="testimonials-title"
            className="max-w-[36.0625rem] font-poppins text-[2.25rem] leading-[1.2] font-semibold tracking-[-0.0275rem] text-black md:text-[2.75rem]"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[36.25rem] font-satoshi text-lg leading-[1.6] font-normal text-muted">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[2.5625rem]">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
