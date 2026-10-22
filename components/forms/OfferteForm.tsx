"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const SOORT = [
  "Buitenschilderwerk",
  "Binnenschilderwerk",
  "Spuitwerk",
  "Behang/glasweefsel",
  "Glas",
  "Kleuradvies",
  "Monument/restauratie",
];

const PAND = ["Woning", "Bedrijfspand", "Monument", "Anders"];

function value(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}

export default function OfferteForm({ variant = "full" }: { variant?: "full" | "short" }) {
  const [copy, setCopy] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Naam: ${value(data, "naam")}`,
      `Telefoon: ${value(data, "telefoon")}`,
      `E-mail: ${value(data, "email")}`,
    ];
    if (variant === "full") {
      lines.push(
        `Plaats: ${value(data, "plaats")}`,
        `Soort werk: ${value(data, "soort")}`,
        `Type pand: ${value(data, "pand") || "—"}`,
        `Gewenste periode: ${value(data, "periode") || "—"}`,
      );
    }
    lines.push("", "Omschrijving:", value(data, "bericht"));
    const files = data.getAll("fotos").filter((file): file is File => file instanceof File && file.name !== "" && file.size > 0);
    if (files.length) {
      lines.push("", "Foto's om als bijlage toe te voegen:", ...files.map((file) => `- ${file.name}`));
    }
    const body = lines.join("\n");
    const subject = variant === "full" ? "Offerteaanvraag" : "Bericht via de website";
    setCopy(body);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  if (copy) {
    return (
      <div role="status" className="border border-ink/15 bg-white p-5 md:p-6">
        <h3 className="font-display text-2xl">Je mailprogramma is geopend</h3>
        <p className="mt-3 text-taupe-text">
          Verstuur het bericht naar{" "}
          <a className="font-semibold text-ink underline" href={site.mailto}>
            {site.email}
          </a>
          . Foto&apos;s voeg je als bijlage toe. Opent er niets? Kopieer de tekst en mail hem zelf.
        </p>
        <textarea readOnly value={copy} className="mt-4 h-44" aria-label="Tekst van je bericht" />
      </div>
    );
  }

  const full = variant === "full";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="field">
        <span>Naam *</span>
        <input name="naam" autoComplete="name" required />
      </label>
      <label className="field">
        <span>Telefoonnummer *</span>
        <input name="telefoon" type="tel" autoComplete="tel" required />
      </label>
      <label className="field">
        <span>E-mailadres *</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      {full && (
        <>
          <label className="field">
            <span>Plaats *</span>
            <input name="plaats" autoComplete="address-level2" required />
          </label>
          <label className="field">
            <span>Soort werk *</span>
            <select name="soort" required defaultValue="">
              <option value="" disabled>
                Kies het soort werk
              </option>
              {SOORT.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Type pand</span>
            <select name="pand" defaultValue="">
              <option value="">Maak een keuze</option>
              {PAND.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Gewenste periode</span>
            <input name="periode" />
          </label>
        </>
      )}
      <label className="field">
        <span>Omschrijving *</span>
        <textarea name="bericht" required />
      </label>
      {full && (
        <label className="field">
          <span>Foto&apos;s</span>
          <input name="fotos" type="file" accept="image/*" multiple />
          <span className="font-normal text-taupe-text">
            Je kunt foto&apos;s ook mailen naar {site.email}. Voeg ze als bijlage toe aan je e-mail.
          </span>
        </label>
      )}
      <label className="flex min-h-11 items-start gap-3 text-sm">
        <input type="checkbox" name="privacy" required className="mt-1 h-5 w-5" />
        <span>Je mag deze gegevens gebruiken om contact met me op te nemen over deze aanvraag.</span>
      </label>
      <button type="submit" data-cta="offerte" className="btn btn-ink w-full sm:w-auto">
        {full ? "Verstuur aanvraag" : "Verstuur bericht"}
      </button>
    </form>
  );
}
