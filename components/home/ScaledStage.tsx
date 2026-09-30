"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  width: number;
  height: number;
  children: ReactNode;
  className?: string;
};

export default function ScaledStage({ width, height, children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={ref}
      className={`w-full ${className}`}
      style={{ maxWidth: width, height: height * scale }}
    >
      <div className="relative origin-top-left" style={{ width, height, transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  );
}
