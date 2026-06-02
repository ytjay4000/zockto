import { motion } from "framer-motion";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  heading?: string;
  subheading?: string;
}

const rows = [
  { label: "Starting price", zockto: "₹999 / month", agency: "₹15,000 – ₹50,000 per month" },
  { label: "Per-video cost", zockto: "₹100 – ₹125 per video", agency: "₹2000+ per video" },
  { label: "Turnaround", zockto: "5 – 10 minutes", agency: "2 – 4 weeks" },
  { label: "Video quality", zockto: "1080p, studio-grade AI", agency: "Studio-grade (varies by team)" },
  {
    label: "Customisation",
    zockto: "Unlimited regenerates, free A/B variants",
    agency: "Paid revisions, extra invoices",
  },
  {
    label: "AI avatars & voices",
    zockto: "150+ avatars, 200+ voices, 48 languages",
    agency: "Talent booking, single language",
  },
  { label: "Longer durations", zockto: "15s, 30s, 60s — same flow", agency: "Pricier the longer it gets" },
  { label: "Risk", zockto: "Cancel anytime, regenerate free", agency: "Locked-in retainers, sunk cost" },
];

const ValueBreakdownSection = ({
  heading = "Zockto vs hiring an agency — the honest math",
  subheading = "You just made your first 4-second sample. Here's what scaling looks like — without burning a creator budget.",
}: Props) => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            Value breakdown
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">{subheading}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border/60 overflow-hidden shadow-card bg-card"
        >
          <div className="grid grid-cols-[1.1fr_1.4fr_1.4fr] text-xs md:text-sm font-semibold bg-muted/60">
            <div className="px-4 py-4 md:px-6">What you compare</div>
            <div className="px-4 py-4 md:px-6 flex items-center gap-2 text-primary">
              <Sparkles className="w-4 h-4" /> Zockto
            </div>
            <div className="px-4 py-4 md:px-6 text-muted-foreground">Traditional agency</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-[1.1fr_1.4fr_1.4fr] text-xs md:text-sm border-t border-border/50 ${
                i % 2 === 0 ? "bg-background" : "bg-muted/20"
              }`}
            >
              <div className="px-4 py-3 md:px-6 md:py-4 font-medium">{r.label}</div>
              <div className="px-4 py-3 md:px-6 md:py-4 flex items-start gap-2 text-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{r.zockto}</span>
              </div>
              <div className="px-4 py-3 md:px-6 md:py-4 flex items-start gap-2 text-muted-foreground">
                <X className="w-4 h-4 text-destructive/70 mt-0.5 flex-shrink-0" />
                <span>{r.agency}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-5 md:px-7 md:py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
        >
          <div className="flex-1">
            <p className="text-sm md:text-base text-amber-900">
              <span className="font-bold">Start at just ₹999/month</span> — that's{" "}
              <span className="font-bold">8–10 full ad videos</span> at roughly{" "}
              <span className="font-bold">₹100–₹125 per video</span>. The same money buys you{" "}
              <span className="underline decoration-amber-500">a fraction of one agency video</span>.
            </p>
          </div>
          <Button variant="hero" size="lg" asChild className="flex-shrink-0">
            <a href="https://app.zockto.com/buy-credits" target="_blank" rel="noreferrer">
              Buy credits <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueBreakdownSection;
