import { motion } from 'framer-motion';
import { Upload, MousePointerClick, Film } from 'lucide-react';
import VslSectionHeading from './VslSectionHeading';

const steps = [
  {
    n: '01',
    icon: Upload,
    title: 'Upload Your Product',
    desc: 'Just upload a clear product photo.',
  },
  {
    n: '02',
    icon: MousePointerClick,
    title: 'Choose the Ad You Like',
    desc:
      'Zockto creates the ad concept, hook, story and storyboard. You simply choose the version you want.',
  },
  {
    n: '03',
    icon: Film,
    title: 'Get the Finished Video',
    desc:
      'Zockto creates the complete 30-second ad with voiceover, B-rolls, music, captions and transitions.',
  },
];

const VslHowItWorks = () => (
  <section className="py-12 md:py-20">
    <div className="container px-4 max-w-[1100px]">
      <VslSectionHeading
        eyebrow="How Zockto works"
        headline="From One Product Photo to a Finished Ad."
      />

      <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border/60 bg-card p-5 md:p-6 hover:shadow-card-hover transition-all"
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

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 md:mt-8 text-center font-display text-sm md:text-lg font-bold tracking-tight"
      >
        You provide the product.{' '}
        <span className="text-primary">Zockto does the work.</span>
      </motion.p>
    </div>
  </section>
);

export default VslHowItWorks;
