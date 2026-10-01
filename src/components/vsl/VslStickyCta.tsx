import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import AppLink from "@/components/AppLink";
import { posthog } from "@/lib/posthog";
import { trackMetaCustomEvent } from "@/lib/metaPixel";

const VslStickyCta = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Appears once the hero (video + first CTA) has scrolled out of view.
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`md:hidden fixed left-0 right-0 z-50 px-4 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      style={{ bottom: "calc(12px + env(safe-area-inset-bottom))" }}
    >
      <div className="relative rounded-2xl bg-background/85 backdrop-blur-md border border-border/60 shadow-card px-3 pt-3 pb-2.5">
        <AppLink
          onClick={() => {
            posthog.capture("sticky_cta_click", { price_inr: 299 });
            trackMetaCustomEvent("VSLOfferClick", { price_inr: 299, placement: "sticky_cta_click" });
          }}
          className="flex items-center justify-center gap-2 w-full min-h-[52px] rounded-full gradient-primary text-primary-foreground font-semibold text-[15px] py-3.5 shadow-glow active:scale-[0.98] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          Create My Story Based Ad
          <ArrowRight className="w-4 h-4" />
        </AppLink>
        <p className="text-[11px] text-muted-foreground text-center mt-1.5">See your ad preview before paying ₹299.</p>

        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="absolute -top-2.5 -right-1.5 w-7 h-7 rounded-full bg-background border border-border/60 flex items-center justify-center text-muted-foreground"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default VslStickyCta;
