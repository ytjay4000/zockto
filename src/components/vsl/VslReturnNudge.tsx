import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import AppLink from "@/components/AppLink";
import { posthog } from "@/lib/posthog";

/** Shown once when a visitor switches away and comes back to the tab. */
const VslReturnNudge = () => {
  const [visible, setVisible] = useState(false);
  const [used, setUsed] = useState(false);

  useEffect(() => {
    let left = false;
    const onChange = () => {
      if (document.visibilityState === "hidden") {
        left = true;
        return;
      }
      if (left && !used) {
        setVisible(true);
        setUsed(true);
        posthog.capture("vsl_return_nudge_shown");
      }
    };
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, [used]);

  if (!visible) return null;

  return (
    <div className="fixed z-[60] left-4 right-4 bottom-24 md:left-auto md:right-6 md:bottom-6 md:w-[360px]">
      <div className="relative rounded-2xl border border-primary/30 bg-card shadow-card-hover p-4 pr-9">
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </button>
        <p className="text-sm font-semibold mb-1">Still thinking?</p>
        <p className="text-sm text-muted-foreground mb-3">Your ₹299 first ad is 2 minutes away.</p>
        <AppLink
          onClick={() => posthog.capture("primary_cta_click", { price_inr: 299, placement: "return_nudge" })}
          className="inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold px-4 py-2.5"
        >
          Create My First Ad for ₹299
          <ArrowRight className="w-4 h-4" />
        </AppLink>
      </div>
    </div>
  );
};

export default VslReturnNudge;
