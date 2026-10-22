import Link from "next/link";
import CallChoice from "@/components/site/CallChoice";

export default function MobileBar() {
  return (
    <div
      data-section="belbalk"
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/10 bg-paper p-2 md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <CallChoice label="Bel" className="btn btn-line flex-1" />
      <Link href="/offerte" data-cta="offerte" className="btn btn-ink flex-1">
        Offerte
      </Link>
    </div>
  );
}
