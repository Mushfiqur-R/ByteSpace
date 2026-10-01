"use client";

import { useRef, useState } from "react";
import type { HTMLAttributes } from "react";
import PlayCircleIcon from "@/components/Icons/course-details/PlayCircleIcon";

export interface CourseVideoProps extends HTMLAttributes<HTMLDivElement> {
  /** Preview still exported from Figma, e.g. `/assets/courseDetails/277ad.png`. */
  poster: string;
  posterAlt?: string;
  /**
   * Optional media file. As soon as one is supplied the button plays and pauses
   * the real video; until then the still doubles as the preview and the button
   * toggles its own overlay (hovering the frame brings it back).
   */
  src?: string;
}

/**
 * Preview frame at the bottom of the royal band (Figma: 720 × 479, 24px radius).
 * The still fills the frame with `object-fit: cover` over a light grey backdrop,
 * so nothing is letterboxed; the blue band itself belongs to the page — which
 * also keeps the 62px tail below the frame — so this stays a plain media block
 * and can be reused anywhere.
 */
export const CourseVideo = ({
  poster,
  posterAlt = "",
  src,
  className = "",
  ...props
}: CourseVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) {
      setPlaying((wasPlaying) => !wasPlaying);
      return;
    }

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div
      className={`group relative aspect-[720/479] w-full overflow-hidden rounded-3xl bg-[#d9d9d9] ${className}`}
      {...props}
    >
      {src ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <img src={poster} alt={posterAlt} className="absolute inset-0 size-full object-cover" />
      )}

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={playing ? "Pause course preview" : "Play course preview"}
        aria-pressed={playing}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-3xl border border-[#4f4f4f] bg-[rgba(61,61,61,0.24)] p-3 backdrop-blur-[20px] transition hover:scale-105 sm:p-4 ${
          playing ? "opacity-0 group-hover:opacity-100 focus-visible:opacity-100" : "opacity-100"
        }`}
      >
        <PlayCircleIcon className="size-12 text-white sm:size-[72px]" />
      </button>
    </div>
  );
};

export default CourseVideo;
