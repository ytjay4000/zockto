import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  buttonLabel?: string;
  variant?: 'primary' | 'amber';
}

const BUY_CREDITS_URL = 'https://app.zockto.com/buy-credits';

const InlineCtaBanner = ({
  eyebrow,
  headline,
  subheadline,
  buttonLabel = 'Buy credits & start creating',
  variant = 'primary',
}: Props) => {
  const isAmber = variant === 'amber';
  return (
    <section className="py-8 md:py-12">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto rounded-2xl border px-5 py-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 ${
            isAmber
              ? 'border-amber-200 bg-amber-50'
              : 'border-border/50 gradient-card'
          }`}
        >
          <div className="flex-1">
            {eyebrow && (
              <p className={`text-xs md:text-sm font-medium mb-1 ${isAmber ? 'text-amber-700' : 'text-primary'}`}>
                {eyebrow}
              </p>
            )}
            <h3 className={`font-display text-lg md:text-2xl font-bold ${isAmber ? 'text-amber-900' : ''}`}>
              {headline}
            </h3>
            {subheadline && (
              <p className={`text-sm md:text-base mt-1 ${isAmber ? 'text-amber-800' : 'text-muted-foreground'}`}>
                {subheadline}
              </p>
            )}
          </div>
          <Button variant="hero" size="lg" asChild className="flex-shrink-0">
            <a href={BUY_CREDITS_URL} target="_blank" rel="noreferrer">
              {buttonLabel} <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InlineCtaBanner;
