import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, X } from 'lucide-react';
import VslSectionHeading from './VslSectionHeading';
import VslCta from './VslCta';


const chain = [
  { step: 'Hook', desc: 'Stop the scroll in the first two seconds.' },
  { step: 'Story', desc: 'Give a reason to keep watching.' },
  { step: 'Product', desc: 'Show the product solving the problem.' },
  { step: 'Reason to believe', desc: 'Proof, benefit, detail — something credible.' },
  { step: 'Call to action', desc: 'Tell the viewer exactly what to do next.' },
];

const VslStorytelling = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4 max-w-[1100px]">
      <VslSectionHeading
        eyebrow="Not just AI video generation"
        headline="Pretty Videos Aren't Enough."
        highlight="Zockto Builds Ads Around Storytelling."
        sub="A good ad isn't only about making a product look good. It needs a hook, a story, a reason to keep watching, and a reason to act."
      />

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 items-start">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/60 bg-muted/30 p-5 md:p-6"
          >
            <div className="flex items-center gap-2 mb-2 text-muted-foreground">
              <X className="w-4 h-4 text-destructive/70" />
              <span className="text-sm font-semibold">Generic AI video tools</span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              “Make something that looks good.” You get a nice-looking clip with no argument inside it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="rounded-2xl border border-primary/30 gradient-card p-5 md:p-6"
          >
            <div className="flex items-center gap-2 mb-2 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Zockto</span>
            </div>
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              “Create a convincing ad around this product.” The concept, script and edit are built to persuade, not
              just to decorate.
            </p>
          </motion.div>
        </div>

        <div className="space-y-2">
          {chain.map((c, i) => (
            <motion.div
              key={c.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="rounded-xl border border-border/60 bg-card px-5 py-4 flex items-baseline gap-4">
                <span className="font-display font-bold text-base md:text-lg text-primary whitespace-nowrap">
                  {c.step}
                </span>
                <span className="text-sm text-muted-foreground leading-snug">{c.desc}</span>
              </div>
              {i < chain.length - 1 && (
                <div className="flex justify-center py-1 text-primary/50">
                  <ChevronDown className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <VslCta event="primary_cta_click" className="w-full sm:w-auto" />
      </div>
    </div>
  </section>

);

export default VslStorytelling;
