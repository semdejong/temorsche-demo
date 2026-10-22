export type Shot = {
  src: string;
  alt: string;
  w: number;
  h: number;
  caption: string;
};

export type Service = {
  slug: string;
  name: string;
  summary: string;
  lede: string;
  blocks: { title?: string; text: string[] }[];
  lists?: { title: string; items: string[] }[];
  photos: Shot[];
};

export const services: Service[] = [
  {
    slug: "schilderwerk",
    name: "Schilderwerk",
    summary: "Buiten- en binnenschilderwerk voor woning, bedrijfspand en gebouw.",
    lede: "Verzorgd schilderwerk zorgt voor een goede uitstraling en beschermt het hout. Binnen draagt het bij aan de sfeer van je woning of bedrijf.",
    blocks: [
      {
        title: "Buitenschilderwerk",
        text: [
          "Natuurlijk wil je ook dat jouw woning, bedrijfspand of gebouw er piekfijn uitziet. Verzorgd schilderwerk is daarbij van essentieel belang. Het zorgt voor een goede uitstraling en beschermt het hout tegen weersinvloeden zoals regen, wind en zon.",
          "Voor een optimaal resultaat maakt Schildersbedrijf Te Morsche gebruik van professionele materialen en producten voor de behandeling en afwerking van het schilderwerk.",
        ],
      },
      {
        title: "Binnenschilderwerk",
        text: [
          "Goed en gedegen binnenschilderwerk draagt bij aan de verfraaiing en sfeer van jouw woning of bedrijf. Een glimmend kozijn, een strak afgelakte deur en een mooi gesausd plafond zijn een lust voor het oog.",
          "Ook biedt het binnenschilderwerk bescherming van hout, muur en plafond.",
        ],
      },
    ],
    photos: [
      {
        src: "/fotos/img_7383.jpg",
        alt: "Woonhuis met geschilderde kozijnen en luiken",
        w: 2000,
        h: 1333,
        caption: "Woonhuis met geschilderde kozijnen en luiken",
      },
      {
        src: "/fotos/img_7272.jpg",
        alt: "Geschilderde schuiframen met roeden en donkere luiken",
        w: 2000,
        h: 1334,
        caption: "Schuiframen met roeden en luiken",
      },
      {
        src: "/fotos/img_7290.jpg",
        alt: "Groene paneeldeur in een wit geschilderd kozijn",
        w: 1333,
        h: 2000,
        caption: "Paneeldeur in een wit kozijn",
      },
    ],
  },
  {
    slug: "spuitwerk",
    name: "Spuitwerk",
    summary: "TempSpray en airless spuiten: strak, streeploos en gelijkmatig.",
    lede: "Een specialiteit van Schildersbedrijf Te Morsche is het spuiten met de TempSpray-machine. Deuren, kozijnen, radiatoren en trappen worden met dit apparaat gespoten.",
    blocks: [
      {
        text: [
          "Met de TempSpray wordt de verf verwarmd. Hierdoor wordt de verf dunner en kun je met minder druk de verf vernevelen. Er is minder spuitnevel en de verf droogt strak en streeploos op.",
          "Te Morsche werkt ook met het airless spuiten van muurverf. De latex of muurverf wordt zo egaal en gelijkmatig mogelijk aangebracht, waardoor er na droging nagenoeg geen structuur zichtbaar is. Muren die moeilijk te rollen zijn, kunnen zo goed behandeld worden.",
        ],
      },
    ],
    lists: [
      {
        title: "Voordelen van TempSpray",
        items: [
          "Toepassing in nieuwbouw en bij bestaande bouw",
          "Laagdikte gelijk aan twee arbeidsgangen",
          "Tijd- en kostenbesparend",
          "Hogere laagdikte",
          "Snellere droging",
          "Fraai en strak eindresultaat",
          "Geen rollerstructuur of kwaststrepen",
        ],
      },
      {
        title: "Voordelen van airless spuiten",
        items: [
          "Grote laagdikte, altijd dekkend",
          "Veel druk, sneller spuiten",
          "Grotere spuitstraal, sneller werken",
          "Egaal resultaat, nagenoeg geen structuur",
        ],
      },
    ],
    photos: [
      {
        src: "/fotos/img_7275.jpg",
        alt: "Strak geschilderde schuiframen met roeden",
        w: 2000,
        h: 1333,
        caption: "Kozijnen en ramen — werk waarbij we TempSpray inzetten",
      },
      {
        src: "/fotos/img_7415.jpg",
        alt: "Sierraam met smeedijzeren ornament in een geschilderd kozijn",
        w: 2000,
        h: 1333,
        caption: "Geschilderd kozijn met sierraam",
      },
    ],
  },
  {
    slug: "glasservice",
    name: "Glasservice",
    summary: "Glas leveren en plaatsen in alle soorten en maten.",
    lede: "Of je nu op zoek bent naar enkele of dubbele beglazing voor een kantoorpand, of op maat geleverd glas voor een complete woning: alles kan.",
    blocks: [
      {
        text: [
          "Glas leveren en plaatsen wij in alle soorten en maten. Hiervoor zijn aantrekkelijke subsidiemogelijkheden beschikbaar. Vraag gerust naar de mogelijkheden.",
          "We hebben ook ruime ervaring met schilderwerk aan monumentale panden in de regio, bijvoorbeeld Kasteel Middachten in De Steeg. Beglazing bij restauratie hoort daarbij.",
        ],
      },
    ],
    photos: [
      {
        src: "/fotos/img_7288.jpg",
        alt: "Ovaal raam met roeden in een bakstenen gevel",
        w: 2000,
        h: 1333,
        caption: "Raam met roedenverdeling",
      },
      {
        src: "/fotos/img_7260.jpg",
        alt: "Topgevel van Kasteel Middachten met uurwerk en geschilderde ramen",
        w: 2000,
        h: 1334,
        caption: "Kasteel Middachten, De Steeg",
      },
    ],
  },
  {
    slug: "kleuradvies",
    name: "Kleuradvies",
    summary: "Verf of latex in iedere kleur, gemengd in de eigen kleurenmengmachine.",
    lede: "We mengen verf of latex in iedere gewenste kleur in onze eigen kleurenmengmachine. Neem gerust een kleurenwaaier mee om rustig te bekijken welke kleur je aanspreekt.",
    blocks: [
      {
        text: [
          "We werken met producten van Herfst en Helder, voor een duurzaam resultaat.",
          "De mengmachine staat in de werkplaats. Je hoeft dus niet te gokken op een kleurkaart alleen: neem de waaier mee naar huis en kijk het na bij je eigen licht.",
        ],
      },
    ],
    photos: [
      {
        src: "/fotos/img_7455.jpg",
        alt: "Kleurenmengmachine aan de toonbank in de werkplaats",
        w: 2000,
        h: 1333,
        caption: "Kleurenmengmachine in de werkplaats",
      },
    ],
  },
  {
    slug: "behang",
    name: "Behang",
    summary: "Van bouwbehang tot decoratieve wandafwerking en glasweefsel.",
    lede: "Van eenvoudig bouwbehang in nieuwbouw tot een zeer decoratieve afwerking van wanden: we helpen je graag bij het uitzoeken van passend behang.",
    blocks: [
      {
        text: [
          "Ook glasweefsel is in vele varianten leverbaar. Samen kijken we wat past bij de kamer, de ondergrond en het gebruik.",
        ],
      },
    ],
    photos: [
      {
        src: "/fotos/img_7358.jpg",
        alt: "Decoratieve wandafwerking achter een houten dressoir",
        w: 2000,
        h: 1333,
        caption: "Decoratieve wandafwerking",
      },
      {
        src: "/fotos/img_7366.jpg",
        alt: "Woonkamer met houtlook-behang en banken",
        w: 2000,
        h: 1334,
        caption: "Woonkamer met houtlook-behang",
      },
      {
        src: "/fotos/img_7377.jpg",
        alt: "Interieur met fotobehang en een bar",
        w: 2000,
        h: 1333,
        caption: "Interieur met fotobehang",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
