"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CallChoice from "@/components/site/CallChoice";
import { menuLinks, nav, site, swatches } from "@/lib/site";

function active(path: string, href: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [diensten, setDiensten] = useState(false);

  useEffect(() => {
    setOpen(false);
    setDiensten(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header data-section="header" className={`sticky top-0 border-b border-ink/10 bg-paper ${open ? "z-[70]" : "z-40"}`}>
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5 lg:px-8">
        <Link href="/" className="mr-auto shrink-0">
          <Image
            src="/logo-te-morsche.png"
            alt="Te Morsche"
            width={444}
            height={153}
            preload
            sizes="168px"
            className="h-11 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-x-6 lg:flex" aria-label="Hoofdmenu">
          {nav.map((item) =>
            "children" in item ? (
              <div
                key={item.href}
                className="relative"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDiensten(false);
                }}
              >
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center text-sm font-semibold"
                  aria-expanded={diensten}
                  aria-controls="diensten-menu"
                  onClick={() => setDiensten((value) => !value)}
                >
                  Diensten
                </button>
                {diensten && (
                  <div id="diensten-menu" className="absolute left-0 top-full z-20 min-w-52 border border-ink/10 bg-paper py-2 shadow-lg">
                    <Link href="/diensten" className="block px-4 py-2 text-sm hover:bg-muted">
                      Alle diensten
                    </Link>
                    {item.children.map((child) => {
                      const tone = swatches.find((item) => item.href === child.href);
                      return (
                        <Link key={child.href} href={child.href} className="flex min-h-11 items-center gap-2 px-4 text-sm hover:bg-muted">
                          <span className="h-3 w-3 shrink-0" style={{ background: tone?.swatch ?? "#202060" }} aria-hidden />
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-11 items-center text-sm font-semibold ${active(path, item.href) ? "underline decoration-[#202060] decoration-2 underline-offset-8" : ""}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block xl:hidden">
          <CallChoice label="Bel" className="btn btn-line" />
        </div>

        <Link href="/offerte" data-cta="offerte" className="btn btn-ink px-3 sm:px-4">
          <span className="sm:hidden">Offerte</span>
          <span className="hidden sm:inline">Offerte aanvragen</span>
        </Link>

        <button
          type="button"
          className="btn btn-line px-3 lg:hidden"
          aria-expanded={open}
          aria-controls="hoofdmenu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Sluit" : "Menu"}
        </button>
      </div>
      <div className="hidden border-t border-ink/10 xl:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-8 py-2 text-sm">
          {site.locations.map((location, index) => (
            <a key={location.tel} href={location.tel} className="inline-flex min-h-11 items-center gap-2">
              <span className="h-3 w-3" style={{ background: index === 0 ? "#202060" : "#409040" }} aria-hidden />
              <span className="uppercase tracking-widest text-taupe-text">{location.name}</span>
              <span className="font-semibold">{location.phone}</span>
            </a>
          ))}
          <a href={site.mailto} className="inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline">
            {site.email}
          </a>
        </div>
      </div>

      {open && (
        <nav id="hoofdmenu" aria-label="Mobiel menu" className="fixed inset-0 z-[60] overflow-y-auto bg-paper px-5 pb-28 pt-4 lg:hidden">
          <div className="mb-6 flex items-center justify-between">
            <Image src="/logo-te-morsche.png" alt="" width={444} height={153} sizes="140px" className="h-11 w-auto" />
            <button type="button" className="btn btn-line px-3" onClick={() => setOpen(false)}>
              Sluit
            </button>
          </div>
          <ul className="grid gap-1">
            {menuLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-cta={"cta" in item && item.cta ? "offerte" : undefined}
                  className="flex min-h-11 items-center border-b border-ink/10 text-lg font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.vitris} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center text-lg">
                Glas bestellen
                <span className="sr-only"> (opent in een nieuw venster)</span>
              </a>
            </li>
          </ul>
          <div className="mt-6 grid gap-2">
            {site.locations.map((location) => (
              <a key={location.tel} href={location.tel} className="btn btn-line justify-between">
                <span>{location.name}</span>
                <span>{location.phone}</span>
              </a>
            ))}
            <a href={site.mailto} className="btn btn-line">
              {site.email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
