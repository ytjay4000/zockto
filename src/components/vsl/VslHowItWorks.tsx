import { motion } from 'framer-motion';
import { Upload, ScanSearch, Lightbulb, MousePointerClick, Film } from 'lucide-react';
import VslSectionHeading from './VslSectionHeading';

const steps = [
  { n: '01', icon: Upload, title: 'Upload your product', desc: 'Start with a product image.' },
  {
    n: '02',
    icon: ScanSearch,
    title: 'AI analyses it',
    desc: 'Zockto understands the product, its benefits and selling points.',
  },
  {
    n: '03',
    icon: Lightbulb,
    title: 'Get storytelling concepts',
    desc: 'Zockto generates ad concepts designed around your product.',
  },
  {
    n: '04',
    icon: MousePointerClick,
    title: 'Pick your favourite',
    desc:
      'Zockto creates ready-made ad concepts for your product; you just tap the one you like. Nothing to write, nothing to figure out.',
  },
  {
    n: '05',
    icon: Film,
    title: 'Get the finished ad',
    desc: 'Storyboard, B-rolls, voice, music, captions and transitions come together into the final video.',
  },
];

const VslHowItWorks = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4 max-w-[1100px]">
      <VslSectionHeading
        eyebrow="How Zockto works"
        headline="From One Product Photo to a Complete Video Ad."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border border-border/60 bg-card p-5 md:p-6 hover:shadow-card-hover transition-all ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-display text-sm font-bold text-muted-foreground/60">{s.n}</span>
              </div>
              <h3 className="font-display font-semibold text-base md:text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default VslHowItWorks;
