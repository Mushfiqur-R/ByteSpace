import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-brand hero-grid">
      <Navbar />

      <main className="relative z-10 flex min-h-[calc(100dvh-120px)] items-start justify-center px-5 pb-12">
        <div
          aria-hidden="true"
          className="absolute top-[3.9vh] left-1/2 -translate-x-1/2 bg-linear-to-b from-lime from-0% via-lime/80 via-50% to-transparent bg-clip-text text-center font-poppins text-[clamp(220px,33.33vw,480px)] leading-none tracking-[-0.01em] whitespace-nowrap text-transparent"
        >
          404
        </div>

        <section className="mt-[39.16vh] flex w-full max-w-[935px] flex-col items-center gap-8 text-center">
          <h1 className="font-poppins text-[clamp(42px,5vw,72px)] leading-[1.2] tracking-[-0.01em] text-white">
            The page you are looking for doesn’t exist
          </h1>
          <p className="font-satoshi text-base leading-[1.6] font-normal text-[#e5e6e8] md:text-lg">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link
            href="/"
            className="rounded-3xl bg-lime px-6 py-3 font-satoshi text-lg leading-[1.2] font-medium text-ink transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          >
            Back to Home
          </Link>
        </section>
      </main>
    </div>
  );
}
