import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, RotateCcw, Star } from "lucide-react";
import { posthog } from "@/lib/posthog";
import { trackMetaCustomEvent } from "@/lib/metaPixel";
import AppLink from "@/components/AppLink";
import VslCta from "./VslCta";
import { useVslVariant } from "@/context/VslVariant";
import vslAsset from "@/assets/zockto_vsl_h264.mp4.asset.json";
import posterAsset from "@/assets/zockto_vsl_poster.jpg.asset.json";

// H.264 / AAC master so every phone and browser can decode it.
const VSL_SRC = vslAsset.url;
const VSL_POSTER = posterAsset.url;
const VSL_LENGTH = "1:10";

const VslHero = () => {
  const vv = useVslVariant();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [showMidRoll, setShowMidRoll] = useState(false);
  const [ended, setEnded] = useState(false);
  const milestones = useRef<Record<number, boolean>>({});
  // Meta Pixel video events fire at most once per page view.
  const metaFired = useRef<Record<string, boolean>>({});

  const fireMetaOnce = (name: string, params?: Record<string, unknown>) => {
    if (metaFired.current[name]) return;
    metaFired.current[name] = true;
    trackMetaCustomEvent(name, params);
  };

  const handlePlay = useCallback(() => {
    setStarted(true);
    setEnded(false);
    const v = videoRef.current;
    if (!v) return;
    // Video source is attached only on tap — nothing downloads before that.
    if (!v.getAttribute("src")) v.src = VSL_SRC;
    v.play().catch(() => {});
    posthog.capture("vsl_play");
  }, []);

  const replay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    setEnded(false);
    v.play().catch(() => {});
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
    // Meta Pixel watch milestones — each fires only once per page view.
    if (pct >= 50) fireMetaOnce("VSLVideo50", { content_name: "VSL homepage" });
    if (pct >= 95) fireMetaOnce("VSLVideo95", { content_name: "VSL homepage" });
    // Mid-roll offer appears at the halfway point for ~8 seconds.
    setShowMidRoll(pct >= 50 && pct < 62);
  };

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
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black border border-border/60 shadow-card max-w-[900px] mx-auto"
        >
          {/* Poster stays behind the video so the player never shows a black box. */}
          <img
            src={VSL_POSTER}
            alt="Zockto founder explaining how a product photo becomes a video ad"
            className="absolute inset-0 w-full h-full object-cover"
            width={1024}
            height={576}
            fetchPriority="high"
            decoding="async"
          />
          <video
            ref={videoRef}
            className={`relative w-full h-full object-contain bg-black transition-opacity duration-300 ${
              started ? "opacity-100" : "opacity-0"
            }`}
            controls={started}
            playsInline
            preload="none"
            poster={VSL_POSTER}
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => {
              setEnded(false);
              fireMetaOnce("VSLVideoPlay", { content_name: "VSL homepage" });
            }}

            onEnded={() => {
              setEnded(true);
              setShowMidRoll(false);
              posthog.capture("vsl_complete");
            }}
          />

          {!started && (
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/35 hover:bg-black/25 transition-colors"
            >
              <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background/95 flex items-center justify-center shadow-lg">
                <Play className="w-7 h-7 md:w-8 md:h-8 ml-1 text-foreground" fill="currentColor" />
              </span>
              <span className="rounded-full bg-background/90 px-3 py-1 text-xs md:text-sm font-semibold">
                Watch: {VSL_LENGTH}
              </span>
            </button>
          )}

          {/* Mid-roll offer overlay */}
          {started && showMidRoll && !ended && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-3 right-3 bottom-14 md:bottom-16 flex justify-center pointer-events-none"
            >
              <AppLink
                onClick={() => {
                  posthog.capture("primary_cta_click", {
                    price_inr: vv.price,
                    source: vv.source,
                    placement: "vsl_midroll",
                  });
                  trackMetaCustomEvent("VSLOfferClick", {
                    price_inr: vv.price,
                    source: vv.source,
                    placement: "vsl_midroll",
                  });
                }}

                className="pointer-events-auto inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground text-xs md:text-sm font-semibold px-4 py-2.5 shadow-glow"
              >
                Create My Story Based Ad
                <ArrowRight className="w-4 h-4" />
              </AppLink>
            </motion.div>
          )}

          {/* Clickable end screen */}
          {ended && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/95 px-6 text-center">
              <p className="font-display text-lg md:text-2xl font-bold max-w-[420px]">
                Ready to see your own product as an ad?
              </p>
              <AppLink
                onClick={() => {
                  posthog.capture("primary_cta_click", {
                    price_inr: vv.price,
                    source: vv.source,
                    placement: "vsl_endscreen",
                  });
                  trackMetaCustomEvent("VSLOfferClick", {
                    price_inr: vv.price,
                    source: vv.source,
                    placement: "vsl_endscreen",
                  });
                }}

                className="inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground font-semibold text-sm md:text-base px-6 py-3 shadow-glow"
              >
                Create My Story Based Ad
                <ArrowRight className="w-4 h-4" />
              </AppLink>
              <p className="text-xs text-muted-foreground">{vv.refundNote}</p>
              <button
                onClick={replay}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Watch again
              </button>
            </div>
          )}
        </motion.div>

        <div className="mt-8 md:mt-10 flex flex-col items-center gap-4">
          <VslCta event="primary_cta_click" className="w-full sm:w-auto text-base" note={vv.refundNote} />
        </div>
      </div>
    </section>
  );
};

export default VslHero;
