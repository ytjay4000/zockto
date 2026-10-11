import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VslSectionHeading from "./VslSectionHeading";
import { VslCta } from "./VslCta";
import { useVslVariant } from "@/context/VslVariant";
import productImg from "@/assets/kfd-product.jpg.asset.json";
import storyboardImg from "@/assets/kfd-storyboard.jpg.asset.json";
import { posthog } from "@/lib/posthog";

const FINAL_VIDEO = "https://storage.googleapis.com/zockto-demo-videos/demo-192.mp4";

const FinalVideo = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden bg-foreground shadow-card">
      <video
        ref={ref}
        src={`${FINAL_VIDEO}#t=0.1`}
        poster="/demo-posters/192.jpg"
        preload="none"
        playsInline
        controls={started}
        className="w-full h-full object-cover"
      />

      {!started && (
        <button
          onClick={() => {
            setStarted(true);
            ref.current?.play().catch(() => {});
            posthog.capture("how_it_works_video_play");
          }}
          className="absolute inset-0 flex items-center justify-center bg-foreground/20"
          aria-label="Play finished ad"
        >
          <span className="w-16 h-16 rounded-full gradient-primary shadow-glow flex items-center justify-center">
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
};

const steps = [
  {
    n: 1,
    title: "Upload your product",
    desc: "One clear photo is all Zockto needs.",
    media: (
      <div className="mx-auto w-full max-w-[300px] aspect-square rounded-2xl bg-background border border-border/60 p-5 flex items-center justify-center">
        <img
          src={productImg.url}
          alt="Product photo uploaded to Zockto"
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ),
  },
  {
    n: 2,
    title: "Choose a style",
    desc: "Zockto plans every scene of your ad. You pick what you like.",
    media: (
      <a
        href={storyboardImg.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mx-auto w-full max-w-[420px] rounded-2xl overflow-hidden border border-border/60 bg-foreground"
      >
        <img src={storyboardImg.url} alt="Storyboard created by Zockto" loading="lazy" className="w-full h-auto" />
      </a>
    ),
  },
  {
    n: 3,
    title: "Get your finished ad",
    desc: "Voiceover, music, captions — fully edited. Tap to watch.",
    media: <FinalVideo />,
  },
];

const VslHowItWorks = () => {
  const vv = useVslVariant();

  return (
    <section className="py-12 md:py-20 bg-secondary/40">
      <div className="container px-4 max-w-[1100px]">
        <VslSectionHeading eyebrow="How Zockto works" headline="From One Product Photo to a Finished Ad." />

        <ol className="relative grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative rounded-3xl border border-border/60 bg-card p-4 md:p-5 shadow-card flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 shrink-0 rounded-full gradient-primary text-primary-foreground font-display font-bold flex items-center justify-center shadow-glow">
                  {s.n}
                </span>

                <div>
                  <h3 className="font-display font-semibold text-base md:text-lg leading-tight">{s.title}</h3>

                  <p className="text-[13px] text-muted-foreground leading-snug mt-0.5">{s.desc}</p>
                </div>
              </div>

              <div className="flex-1 flex items-center">{s.media}</div>
            </motion.li>
          ))}
        </ol>

        <p className="mt-8 text-center font-display text-sm md:text-lg font-bold tracking-tight">
          You provide the product. <span className="text-primary">Zockto does the work.</span>
        </p>

        {/* CTA button */}
        <div className="flex mt-8 flex-col items-center gap-4">
          <VslCta event="primary_cta_click" className="w-full sm:w-auto text-base" note={vv.refundNote} />
        </div>
      </div>
    </section>
  );
};

export default VslHowItWorks;
