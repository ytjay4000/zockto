import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import VslCta from './VslCta';

const includes = [
  'Storytelling-based ad concept',
  'AI-generated video ad',
  'B-rolls and product visuals',
  'Voiceover',
  'Background music',
  'Captions',
  'Transitions',
  'Fully edited final video',
];

const VslOffer = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4 max-w-[1100px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-primary/25 bg-gradient-to-b from-primary/[0.06] via-background to-background p-6 md:p-12 shadow-card"
      >
        <div className="text-center max-w-[640px] mx-auto mb-8 md:mb-10">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Start with your first ad
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-3">
            Try Zockto for Just ₹299.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            You don't need to commit to an expensive agency or a monthly plan before seeing what Zockto can create for
            your business.
          </p>
        </div>

        <div className="max-w-[560px] mx-auto rounded-2xl border border-border/60 bg-card p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="font-display text-4xl md:text-5xl font-bold text-primary">₹299</div>
            <p className="text-sm md:text-base font-medium mt-2">Your first AI video ad</p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-7">
            {includes.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <VslCta event="offer_cta_click" label="Create My First Ad for ₹299" className="w-full text-base" />
          <p className="text-xs md:text-sm text-muted-foreground text-center mt-3">
            Upload your product → choose your concept → get your ad.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default VslOffer;
