import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  onCtaClick?: () => void;
}

const HeroSection = ({ headline, subheadline, ctaLabel, onCtaClick }: HeroSectionProps) => {
  return (
    <section className="pt-28 md:pt-36 pb-12 md:pb-20">
      <div className="container px-4 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-5">
            Case Studies & Real Results
          </span>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            {headline}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-7 max-w-xl">
            {subheadline}
          </p>
          <Button variant="hero" size="lg" onClick={onCtaClick}>
            <Play className="w-4 h-4 mr-1" fill="currentColor" />
            {ctaLabel}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden border border-border/60 shadow-card bg-black"
        >
          <video
            src="https://storages.zockto.com/explainer_video/zockto_proof_video.mp4"
            controls
            preload="metadata"
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
