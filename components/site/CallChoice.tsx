"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { site } from "@/lib/site";

export default function CallChoice({
  label,
  className = "btn btn-line",
}: {
  label: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={className}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>
      {open && mounted && createPortal(
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/45 p-4 pb-24 sm:items-center sm:pb-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            id={panelId}
            className="w-full max-w-md border border-ink/10 bg-paper p-5 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id={titleId} className="font-display text-2xl">
                Bel de vestiging bij jou in de buurt
              </h2>
              <button ref={closeRef} type="button" className="btn btn-line px-3" onClick={() => setOpen(false)}>
                Sluit
              </button>
            </div>
            <ul className="mt-5 grid gap-3">
              {site.locations.map((location) => (
                <li key={location.tel}>
                  <a href={location.tel} className="btn btn-ink w-full justify-between">
                    <span>{location.name}</span>
                    <span>{location.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
