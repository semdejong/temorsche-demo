import type { Shot } from "@/lib/services";

export const galleries: { id: string; title: string; text: string; shots: Shot[] }[] = [
  {
    id: "middachten",
    title: "Kasteel Middachten",
    text: "Specialistisch schilderwerk aan de rijksbeschermde buitenplaats in De Steeg. De foto’s hieronder tonen hetzelfde gebouw.",
    shots: [
      { src: "/fotos/img_7263.jpg", alt: "Lang monumentaal bouwwerk van Kasteel Middachten met geschilderde kozijnen", w: 2000, h: 1333, caption: "Kasteel Middachten, De Steeg" },
      { src: "/fotos/img_7283.jpg", alt: "Kasteel Middachten met gracht en tuin", w: 2000, h: 1333, caption: "Gracht en tuin bij Kasteel Middachten" },
      { src: "/fotos/img_7260.jpg", alt: "Topgevel met uurwerk van Kasteel Middachten", w: 2000, h: 1334, caption: "Topgevel met uurwerk" },
      { src: "/fotos/img_7261.jpg", alt: "Gevel van Kasteel Middachten met dakkapellen en luiken", w: 2000, h: 1334, caption: "Dakkapellen en luiken" },
      { src: "/fotos/img_7270.jpg", alt: "Geschilderde kozijnen en luiken van Kasteel Middachten", w: 2000, h: 1334, caption: "Kozijnen en luiken" },
      { src: "/fotos/img_7282.jpg", alt: "Zijde van het lange bouwwerk van Kasteel Middachten", w: 2000, h: 1333, caption: "Lange gevel" },
    ],
  },
  {
    id: "monumentaal",
    title: "Monumentaal schilderwerk",
    text: "Schilderwerk aan monumentale gevels en bijgebouwen.",
    shots: [
      { src: "/fotos/img_7257.jpg", alt: "Monumentaal bakstenen bijgebouw met gracht en brug", w: 2000, h: 1333, caption: "Bakstenen bijgebouw met gracht" },
      { src: "/fotos/img_7258.jpg", alt: "Monumentaal bijgebouw aan het water", w: 2000, h: 1333, caption: "Bijgebouw aan het water" },
      { src: "/fotos/img_7287.jpg", alt: "Gevel met boogdeur en hekwerk", w: 2000, h: 1333, caption: "Gevel met boogdeur" },
      { src: "/fotos/img_7415.jpg", alt: "Sierraam met smeedijzeren ornament in een geschilderd kozijn", w: 2000, h: 1333, caption: "Sierraam in geschilderd kozijn" },
    ],
  },
  {
    id: "schilderwerk",
    title: "Schilderwerk",
    text: "Kozijnen, luiken, deuren en gevels van woningen en gebouwen.",
    shots: [
      { src: "/fotos/img_7383.jpg", alt: "Woonhuis met geschilderde kozijnen en luiken", w: 2000, h: 1333, caption: "Woonhuis met luiken" },
      { src: "/fotos/img_7389.jpg", alt: "Vakwerkgebouw met donkere gevels", w: 2000, h: 1333, caption: "Vakwerkgebouw" },
      { src: "/fotos/img_7290.jpg", alt: "Groene paneeldeur in een wit kozijn", w: 1333, h: 2000, caption: "Paneeldeur" },
      { src: "/fotos/img_7272.jpg", alt: "Geschilderde schuiframen met roeden en luiken", w: 2000, h: 1334, caption: "Schuiframen met roeden" },
      { src: "/fotos/img_7275.jpg", alt: "Detail van geschilderde ramen en luiken", w: 2000, h: 1333, caption: "Detail van ramen en luiken" },
    ],
  },
  {
    id: "interieur",
    title: "Interieur en behang",
    text: "Binnenschilderwerk, wandafwerking en glasweefsel of behang.",
    shots: [
      { src: "/fotos/img_7358.jpg", alt: "Decoratieve wandafwerking achter een dressoir", w: 2000, h: 1333, caption: "Decoratieve wandafwerking" },
      { src: "/fotos/img_7366.jpg", alt: "Woonkamer met houtlook-behang", w: 2000, h: 1334, caption: "Woonkamer" },
      { src: "/fotos/img_7377.jpg", alt: "Interieur met fotobehang", w: 2000, h: 1333, caption: "Interieur met fotobehang" },
      { src: "/fotos/img_7500.jpg", alt: "Interieur met gewelven en geschilderde houten puien", w: 2000, h: 1333, caption: "Geschilderde houten puien" },
      { src: "/fotos/img_7525.jpg", alt: "Houten pui in een interieur met gewelf", w: 2000, h: 1333, caption: "Houten pui onder een gewelf" },
      { src: "/fotos/img_7288.jpg", alt: "Ovaal raam met roeden", w: 2000, h: 1333, caption: "Ovaal raam met roeden" },
    ],
  },
  {
    id: "werkplaats",
    title: "Op de werkplaats en aan het werk",
    text: "De werkplaats, de kleurenmengmachine en het werk buiten.",
    shots: [
      { src: "/fotos/img_2039.jpg", alt: "Schilder op een ladder bij een raam met luiken", w: 1024, h: 768, caption: "Schilderwerk aan een raam" },
      { src: "/fotos/img_7294.jpg", alt: "Werk aan een rode deur in een bakstenen muur", w: 1333, h: 2000, caption: "Werk aan een rode deur" },
      { src: "/fotos/img_7455.jpg", alt: "Kleurenmengmachine in de werkplaats", w: 2000, h: 1333, caption: "Kleurenmengmachine" },
    ],
  },
];
