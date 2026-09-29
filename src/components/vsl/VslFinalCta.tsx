import { motion } from 'framer-motion';
import VslCta from './VslCta';

const VslFinalCta = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-primary/[0.07] to-background border-t border-border/50">
    <div className="container px-4 max-w-[760px] text-center">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          Ready to create your first ad?
        </p>
        <h2 className="font-display text-2xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight mb-4">
          Your Next Video Ad Could Cost ₹299 — Not ₹10,000+.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-8">
          Upload your product. Tap a concept. Zockto creates the ad for you.
        </p>
        <VslCta event="primary_cta_click" className="w-full sm:w-auto text-base" />
        <p className="text-sm text-muted-foreground mt-4">
          Start with one ad. See the actual output for yourself.
        </p>
      </motion.div>
    </div>
  </section>
);

export default VslFinalCta;
