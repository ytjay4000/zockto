import { motion } from "framer-motion";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import VslCta from "./VslCta";
import { useVslVariant } from "@/context/VslVariant";

const standardIncludes = [
  "Storytelling-based ad concept",
  "Complete video ad",
  "Voiceover",
  "B-rolls & product visuals",
  "Music",
  "Captions",
  "Transitions",
  "Fully edited final video",
];

const VslOffer = () => {
  const vv = useVslVariant();
  const isCustomPlan = vv.source === "999" || Boolean(vv.features?.length);
  const displayFeatures = vv.features ?? standardIncludes;

  return (
    <section className="pt-4 pb-12 md:py-20">
      <div className="container px-4 max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-primary/25 bg-gradient-to-b from-primary/[0.06] via-background to-background p-6 md:p-10 shadow-card"
        >
          <div className="text-center max-w-[600px] mx-auto mb-7">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              {isCustomPlan ? "Premium growth plan" : "Your first video ad"}
            </p>
          </div>

          <div
            className={`mx-auto rounded-2xl border border-border/60 bg-card p-6 md:p-8 ${isCustomPlan ? "max-w-[640px]" : "max-w-[560px]"}`}
          >
            {/* Header & Pricing */}
            <div className="text-center mb-6">
              {vv.badge && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{vv.badge}</span>
                </div>
              )}
              <div className="font-display text-4xl md:text-5xl font-bold text-primary">{vv.priceLabel}</div>
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-muted-foreground mt-1.5">
                {isCustomPlan ? (vv.badge ?? "One-time, 30-day validity") : "One-time payment"}
              </p>
            </div>

            {/* Credits & Rate Highlights (for ₹999 / custom plan) */}
            {isCustomPlan && (vv.creditsLabel || vv.unitCostNote) && (
              <div className="rounded-xl border border-primary/20 bg-primary/[0.05] p-3.5 mb-6 text-center">
                {vv.creditsLabel && (
                  <p className="font-display text-base md:text-lg font-bold text-foreground">{vv.creditsLabel}</p>
                )}
                {vv.unitCostNote && (
                  <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{vv.unitCostNote}</p>
                )}
              </div>
            )}

            {/* Features List */}
            {isCustomPlan && vv.featuresTitle && (
              <div className="text-left mb-3.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {vv.featuresTitle}
                </h4>
              </div>
            )}

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
              {displayFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Refund & Payment Guarantee Box */}
            <div className="rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-3 mb-5 text-center">
              <p className="font-display text-sm md:text-base font-bold">
                {isCustomPlan ? vv.refundNote : "No subscription. No auto-pay."}
              </p>
              {!isCustomPlan && (
                <p className="inline-flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  7-day money-back guarantee
                </p>
              )}
            </div>

            {/* CTA Button */}
            <VslCta event="offer_cta_click" label={vv.offerLabel} className="w-full text-base" note={null} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VslOffer;
