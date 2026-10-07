import { motion } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
import VslCta from './VslCta';
import { useVslVariant } from '@/context/VslVariant';

const includes = [
  'Storytelling-based ad concept',
  'Complete video ad',
  'Voiceover',
  'B-rolls & product visuals',
  'Music',
  'Captions',
  'Transitions',
  'Fully edited final video',
];

const VslOffer = () => {
  const vv = useVslVariant();
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
            Your first video ad
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-3">
            Get Your First Video Ad for {vv.priceLabel}.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Start with one ad. See what Zockto creates for your business before committing to a monthly plan.
          </p>
        </div>

        <div className="max-w-[560px] mx-auto rounded-2xl border border-border/60 bg-card p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="font-display text-4xl md:text-5xl font-bold text-primary">{vv.priceLabel}</div>
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-muted-foreground mt-1.5">
              One-time payment
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
            {includes.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-3 mb-5 text-center">
            <p className="font-display text-sm md:text-base font-bold">No subscription. No auto-pay.</p>
            <p className="inline-flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground mt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              7-day money-back guarantee
            </p>
          </div>

          <VslCta
            event="offer_cta_click"
            label={vv.offerLabel}
            className="w-full text-base"
            note={null}
          />
        </div>
      </motion.div>
    </div>
  </section>
);
};

export default VslOffer;
