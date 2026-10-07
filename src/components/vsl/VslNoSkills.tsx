import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const nots = [
  'No prompting',
  'No script writing',
  'No storyboard writing',
  'No video editing',
  'No camera',
  'No AI experience',
];

const VslNoSkills = () => (
  <section className="py-12 md:py-16">
    <div className="container px-4 max-w-[1100px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-border/60 bg-card p-6 md:p-10"
      >
        <div className="text-center max-w-[640px] mx-auto mb-8">
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-3">
            You Don't Need to Know How to Use AI.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Zockto does the creative work for you. You only provide the product.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-2.5 max-w-[720px] mx-auto">
          {nots.map((n) => (
            <li key={n} className="flex items-center gap-2 text-sm font-medium">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              {n}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default VslNoSkills;
