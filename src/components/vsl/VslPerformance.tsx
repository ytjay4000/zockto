import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const proof = [
  {
    stat: 'Up to 2.5×',
    label: 'Better ROAS reported by some businesses versus their previous creatives',
  },
  {
    stat: '28% lower',
    label: 'Cost per lead after switching to AI creatives',
    href: '/case-studies/zerorez-local-services',
  },
  {
    stat: '45–58%',
    label: 'ROAS lift reported in Forrester research on AI-generated creatives',
    href: '/case-studies/forrester-ai-roas-research',
  },
];

const VslPerformance = () => (
  <section className="py-16 md:py-24 bg-muted/20 border-y border-border/50">
    <div className="container px-4 max-w-[1100px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-[700px] mx-auto mb-10 md:mb-12"
      >
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          Reported performance
        </p>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-3">
          Up to 2.5× Better ROAS Reported
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Some businesses have reported up to 2.5× better ROAS when comparing Zockto-created ads with their previous
          creatives. Results vary by product, offer and audience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {proof.map((p, i) => (
          <motion.div
            key={p.stat}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-2xl border border-border/60 bg-card p-6 flex flex-col"
          >
            <TrendingUp className="w-5 h-5 text-primary mb-4" />
            <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">{p.stat}</div>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.label}</p>
            {p.href && (
              <Button variant="link" asChild className="px-0 mt-3 justify-start h-auto">
                <Link to={p.href}>
                  View case study <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VslPerformance;
