import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import MobileBar from "@/components/site/MobileBar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#inhoud" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-paper focus:px-3 focus:py-2">
        Naar inhoud
      </a>
      <Header />
      <main id="inhoud" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
