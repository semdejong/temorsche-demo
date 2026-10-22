export const site = {
  name: "Schildersbedrijf Te Morsche",
  short: "Te Morsche",
  email: "info@te-morsche.nl",
  mailto: "mailto:info@te-morsche.nl",
  vitris: "https://www.te-morsche.nl/VITRISnet/",
  locations: [
    { name: "Beltrum", phone: "0544-481278", tel: "tel:+31544481278" },
    { name: "Lochem", phone: "0573-459699", tel: "tel:+31573459699" },
  ],
} as const;

export const houseLinks = [
  { href: "/diensten/schilderwerk", label: "Schilderwerk" },
  { href: "/diensten/spuitwerk", label: "Spuitwerk" },
  { href: "/diensten/glasservice", label: "Glasservice" },
  { href: "/diensten/kleuradvies", label: "Kleuradvies" },
  { href: "/diensten/behang", label: "Behang" },
] as const;

export const nav = [
  { href: "/diensten", label: "Diensten", children: houseLinks },
  { href: "/monumenten-en-restauratie", label: "Monumenten & restauratie" },
  { href: "/projecten", label: "Projecten" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
] as const;

/** Alle pagina's voor het mobiele menu. */
export const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  ...houseLinks,
  { href: "/monumenten-en-restauratie", label: "Monumenten & restauratie" },
  { href: "/projecten", label: "Projecten" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
  { href: "/offerte", label: "Offerte aanvragen", cta: true },
] as const;

export const swatches = [
  {
    href: "/diensten/schilderwerk",
    label: "Schilderwerk",
    swatch: "#202060",
    fan: "-8deg",
    text: "Buiten en binnen: uitstraling én bescherming van hout, muur en plafond.",
  },
  {
    href: "/diensten/spuitwerk",
    label: "Spuitwerk",
    swatch: "#409040",
    fan: "-4.5deg",
    text: "TempSpray voor deuren, kozijnen, radiatoren en trappen. Airless voor muren.",
  },
  {
    href: "/diensten/glasservice",
    label: "Glasservice",
    swatch: "#5E5037",
    fan: "-1.5deg",
    text: "Glas leveren en plaatsen, enkel of dubbel, op maat voor kantoor of woning.",
  },
  {
    href: "/diensten/kleuradvies",
    label: "Kleuradvies",
    swatch: "#F0C030",
    fan: "1.5deg",
    text: "Elke kleur uit de eigen mengmachine. Producten van Herfst en Helder.",
  },
  {
    href: "/diensten/behang",
    label: "Behang",
    swatch: "#F09030",
    fan: "4.5deg",
    text: "Van bouwbehang tot decoratieve wandafwerking. Glasweefsel in vele varianten.",
  },
  {
    href: "/monumenten-en-restauratie",
    label: "Restauratie",
    swatch: "#E02020",
    fan: "8deg",
    text: "Monumentaal schilderwerk en beglazing, gecertificeerd sinds 2015.",
  },
] as const;
