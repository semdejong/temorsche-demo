"use client";

import { useEffect, useRef, useState } from "react";

export default function Stroke({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`mt-3 block h-3.5 w-40 overflow-hidden ${className}`} aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/textures/logo-stroke.png"
        alt=""
        className={`h-full w-full object-contain object-left ${on ? "stroke-on" : "stroke-off"}`}
      />
    </span>
  );
}
