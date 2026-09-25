import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { posthog } from '@/lib/posthog';
import VslCta from './VslCta';
import vslAsset from '@/assets/zockto_vsl_final.mp4.asset.json';

// Final ~70s VSL master video.
const VSL_SRC = vslAsset.url;

const VslHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const milestones = useRef<Record<number, boolean>>({});

  const handlePlay = () => {
    setStarted(true);
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
    posthog.capture('vsl_play');
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const pct = (v.currentTime / v.duration) * 100;
    [25, 50, 75].forEach((m) => {
      if (pct >= m && !milestones.current[m]) {
        milestones.current[m] = true;
        posthog.capture(`vsl_${m}_percent`);
      }
    });
  };

  return (
    <section className="pt-24 md:pt-32 pb-14 md:pb-20">
      <div className="container px-4 max-w-[950px] text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5"
        >
          AI Video Ads For Your Business
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-[28px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight mb-5"
        >
          Stop Paying ₹10,000–₹15,000 for a Single Video Ad.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[680px] mx-auto mb-9 md:mb-12"
        >
          Create a complete storytelling-based video ad with Zockto — starting at just ₹299.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black border border-border/60 shadow-card"
        >
          <video
            ref={videoRef}
            src={VSL_SRC}
            className="w-full h-full object-contain bg-black"
            controls={started}
            playsInline
            preload="metadata"
            poster=""
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => posthog.capture('vsl_complete')}
          />
          {!started && (
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors"
            >
              <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background/95 flex items-center justify-center shadow-lg">
                <Play className="w-7 h-7 md:w-8 md:h-8 ml-1 text-foreground" fill="currentColor" />
              </span>
            </button>
          )}
        </motion.div>

        <div className="mt-8 md:mt-10 flex flex-col items-center gap-3">
          <VslCta event="primary_cta_click" className="w-full sm:w-auto text-base" />
          <p className="text-sm text-muted-foreground">
            Upload your product. Choose your concept. Let Zockto create the ad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VslHero;
