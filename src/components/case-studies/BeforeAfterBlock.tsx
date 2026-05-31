import { motion } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';

const pairs = [
  {
    before: 'Hiring creators, briefing agencies, waiting weeks for a single ad cut.',
    after: 'Paste product link, pick an avatar, ad goes live the same hour.',
    label: 'Meet Shah · D2C Brand Owner',
  },
  {
    before: 'Listings looked amateur next to big brands — no video budget.',
    after: 'Studio-quality product videos on every SKU, posted across marketplaces.',
    label: 'Khushi · E-commerce Seller',
  },
  {
    before: 'Creative testing capped at 1-2 variants per week.',
    after: '10+ ad variants in a day. Winners surface in days, not weeks.',
    label: 'Sriniwasa · Performance Marketer',
  },
];

const BeforeAfterBlock = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-xl md:text-3xl font-bold mb-2">
            Before Zockto <span className="text-muted-foreground">vs</span> After Zockto
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">Real shifts our customers describe.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {pairs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl gradient-card border border-border/50 p-5 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-4 h-4" />
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{p.before}</p>
              </div>
              <div className="flex items-center justify-center my-1 text-primary">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-sm text-foreground leading-relaxed font-medium">{p.after}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-auto pt-2 border-t border-border/40">{p.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterBlock;
