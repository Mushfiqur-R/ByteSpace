import type { CSSProperties } from "react";

/** Figma exports every decoration as art (`src`) + its silhouette (`mask`). */
const assetPathPrefix = "/assets/home";

const decorations = [
  { src: "5713a.png", mask: "dc547.png", tone: "lime", box: [1080, 0, 188] },
  { src: "80418.png", mask: "8a604.png", tone: "lime", box: [1110, 289, 330] },
  { src: "eb4eb.png", mask: "41fc0.png", tone: "lime", box: [-118, -162, 385] },
  { src: "eb4eb.png", mask: "b8b88.png", tone: "white", box: [178, 5, 175], flip: true },
  { src: "682df.png", mask: "dc30f.png", tone: "white", box: [-48, 225, 188] },
  { src: "e89fa.png", mask: "82ebe.png", tone: "lime", box: [20, 299, 342] },
  { src: "30652.png", mask: "68643.png", tone: "white", box: [1226, 6, 370] },
];

function Decoration({ decoration }: { decoration: (typeof decorations)[number] }) {
  const maskStyle = {
    "--shape-mask": `url("${assetPathPrefix}/${decoration.mask}")`,
    left: decoration.box[0],
    top: decoration.box[1],
    width: decoration.box[2],
    height: decoration.box[2],
  } as CSSProperties;

  return (
    <div className={`cta-shape${decoration.flip ? " -scale-x-100" : ""}`} style={maskStyle}>
      <img className="size-full object-fill" src={`${assetPathPrefix}/${decoration.src}`} alt="" aria-hidden="true" />
      <span className={`cta-shape__tint cta-shape__tint--${decoration.tone}`} />
    </div>
  );
}

export default function CreatorCta() {
  return (
    <section
      aria-labelledby="creator-cta-title"
      className="relative isolate flex min-h-[30.5rem] items-center justify-center overflow-hidden bg-brand px-6 py-20 text-center"
    >
      <img
        className="pointer-events-none absolute top-0 left-1/2 h-[1026px] w-[1442px] max-w-none -translate-x-1/2"
        src={`${assetPathPrefix}/937f8.svg`}
        alt=""
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 md:block"
        aria-hidden="true"
      >
        {decorations.map((decoration, index) => (
          <Decoration key={`${decoration.src}-${decoration.mask}-${index}`} decoration={decoration} />
        ))}
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[60.25rem] flex-col items-center gap-8 md:gap-10">
        <h2
          id="creator-cta-title"
          className="max-w-[44.375rem] font-poppins text-[2.25rem] leading-[1.2] font-semibold tracking-[-0.0275rem] text-brand-white md:text-[2.75rem]"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="font-satoshi text-base leading-[1.6] font-normal text-brand-white md:text-lg">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <button
          className="cursor-pointer rounded-full border-0 bg-lime px-6 py-3 font-satoshi text-lg leading-[1.2] font-medium text-ink transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          type="button"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}
