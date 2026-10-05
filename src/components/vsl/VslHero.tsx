import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import VslCta from "./VslCta";
import { useVslVariant } from "@/context/VslVariant";
import { DemoTile } from "@/components/demo/DemoVideoGrid";
import { demoVideos } from "@/data/demoVideos";

// Newest four ads, shown as posters until tapped.
const HERO_ADS = [...demoVideos].reverse().slice(0, 4);

const VslHero = () => {
  const vv = useVslVariant();
  const [activeAudioId, setActiveAudioId] = useState<number | null>(null);

  return (
    <section className="pt-24 md:pt-32 pb-14 md:pb-20">
      <div className="container px-4 max-w-[1100px] text-center">
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
          className="font-display text-[28px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight mb-5 max-w-[900px] mx-auto"
        >
          Turn 1 Product Photo into a Video Ad that Convert.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[720px] mx-auto mb-6"
        >
          You don't need AI skills, prompting or editing skills. Zockto comes up with the ad idea, hook, script and
          storyboard — then creates the finished video with voiceover, B-rolls, music and captions.
        </motion.p>

        {/* Above-the-fold credibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-muted/40 px-4 py-2 mb-8 md:mb-10"
        >
          <span className="flex items-center gap-0.5 text-amber-500">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-3.5 h-3.5" fill="currentColor" />
            ))}
          </span>
          <span className="text-xs md:text-sm font-medium">Loved by 1,000+ Indian businesses</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-[960px] mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 text-left">
            {HERO_ADS.map((v) => (
              <DemoTile key={v.id} video={v} activeAudioId={activeAudioId} onAudio={setActiveAudioId} />
            ))}
          </div>
          <p className="mt-4 text-xs md:text-sm text-muted-foreground">
            Real ads made by Zockto from one product photo. Tap any ad to play.
          </p>
        </motion.div>

        <div className="mt-8 md:mt-10 flex flex-col items-center gap-4">
          <VslCta event="primary_cta_click" className="w-full sm:w-auto text-base" note={vv.refundNote} />
        </div>
      </div>
    </section>
  );
};

export default VslHero;
