import type { Testimonial } from "@/components/interfaces";

/**
 * Single testimonial. Data (names, roles, quotes, avatars) lives in
 * `components/data/data.tsx` — nothing here is hardcoded.
 */
export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full flex-col items-start gap-6 rounded-3xl bg-white p-6">
      <img className="size-20 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />

      <div>
        <h3 className="font-poppins text-xl leading-[1.4] font-semibold tracking-[-0.0125rem] text-black">
          {testimonial.name}
        </h3>

        <p className="font-satoshi text-lg leading-[1.6] font-normal text-brand">{testimonial.role}</p>
      </div>

      <blockquote className="font-satoshi text-lg leading-[1.6] font-normal text-muted">{testimonial.quote}</blockquote>
    </article>
  );
}
