import ContactBand from "@/components/home/ContactBand";
import Hero from "@/components/home/Hero";
import Kennis from "@/components/home/Kennis";
import KleurGlas from "@/components/home/KleurGlas";
import Middachten from "@/components/home/Middachten";
import OverBand from "@/components/home/OverBand";
import Routes from "@/components/home/Routes";
import Spuit from "@/components/home/Spuit";
import Swatches from "@/components/home/Swatches";
import Vestigingen from "@/components/home/Vestigingen";
import Werkwijze from "@/components/home/Werkwijze";
import Shell from "@/components/site/Shell";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <Routes />
      <Swatches />
      <Middachten />
      <Kennis />
      <Spuit />
      <KleurGlas />
      <Werkwijze />
      <OverBand />
      <Vestigingen />
      <ContactBand />
    </Shell>
  );
}
