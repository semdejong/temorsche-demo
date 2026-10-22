/**
 * Sleads-demo configuratie. De tracker leest `slug`.
 * Uitgebreide teksten en foto's staan in lib/.
 */
export const content = {
  slug: "temorsche-demo",

  company: {
    name: "Schildersbedrijf Te Morsche",
    logo: "/logo-te-morsche.png",
  },

  colors: {
    primary: "#1D1B18",
    primaryForeground: "#F7F4EE",
    accent: "#736243",
    background: "#F7F4EE",
    foreground: "#1D1B18",
    muted: "#EFEAE1",
  },

  seo: {
    title: "Schildersbedrijf Te Morsche | Beltrum en Lochem",
    description:
      "Thuis in alle facetten van schilderwerk. Binnen- en buitenschilderwerk, spuitwerk, behang en glaswerk vanuit Beltrum en Lochem.",
    lang: "nl",
  },
};

export type Content = typeof content;
