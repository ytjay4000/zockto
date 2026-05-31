import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  headline: string;
  subheadline: string;
  buttonLabel: string;
  egoTrigger: string;
}

const BUY_CREDITS_URL = 'https://app.zockto.com/buy-credits';

const FinalCtaSection = ({ headline, subheadline, buttonLabel, egoTrigger }: Props) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-3xl gradient-card border border-border/50 p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.15),transparent_60%)] pointer-events-none" />
          <div className="relative">
            <p className="text-sm md:text-base text-amber-600 font-medium mb-3">{egoTrigger}</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">{headline}</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-xl mx-auto">{subheadline}</p>
            <Button variant="hero" size="lg" asChild>
              <a href={BUY_CREDITS_URL} target="_blank" rel="noreferrer">
                {buttonLabel} <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
