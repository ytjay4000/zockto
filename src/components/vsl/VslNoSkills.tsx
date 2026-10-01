import { motion } from 'framer-motion';
import { Check, ArrowRight, Image, Target, PenLine, Film, CheckCircle2 } from 'lucide-react';

const flow = [
  { icon: Image, label: 'Your product photo' },
  { icon: Target, label: 'Zockto finds the best ad angle' },
  { icon: PenLine, label: 'Zockto writes the story' },
  { icon: Film, label: 'Zockto builds the video' },
  { icon: CheckCircle2, label: 'Your finished ad' },
];

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

        {/* Flow */}
        <div className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-3 mb-8">
          {flow.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.label} className="flex md:flex-col md:flex-1 items-center gap-2 md:gap-3">
                <div className="flex-1 md:w-full flex md:flex-col items-center gap-3 rounded-2xl border border-border/60 bg-background px-4 py-3 md:py-5 text-left md:text-center">
                  <span className="w-9 h-9 flex-shrink-0 rounded-xl gradient-primary flex items-center justify-center">
                    <Icon className="w-[18px] h-[18px] text-primary-foreground" />
                  </span>
                  <span className="text-[13px] md:text-sm font-medium leading-snug">{f.label}</span>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 rotate-90 md:rotate-0 md:hidden lg:block" />
                )}
              </div>
            );
          })}
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
