import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Play, RotateCcw } from "lucide-react";
import productImage from "@/assets/kfd-product.jpg.asset.json";
import storyboardImage from "@/assets/kfd-storyboard.jpg.asset.json";
import { posthog } from "@/lib/posthog";
import "./how-it-works.css";

const FINAL_VIDEO =
  "https://storage.googleapis.com/zockto-demo-videos/demo-192.mp4";
const steps = [
  {
    label: "Upload",
    title: "Upload your product",
    copy: "Start with one clear product photo.",
  },
  {
    label: "Choose",
    title: "Choose a style",
    copy: "Pick your look. Zockto plans the scenes.",
  },
  {
    label: "Watch",
    title: "Get your finished ad",
    copy: "Voiceover, music, captions. All edited for you.",
  },
];

export default function HowItWorks({
  activeMedia,
  onMedia,
  onStop,
}: {
  activeMedia: string | null;
  onMedia: (id: string | null) => void;
  onStop: (id: string) => void;
}) {
  const id = useId();
  const reduced = useReducedMotion();
  const [selectedStep, setSelectedStep] = useState(0);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (activeMedia !== "finished-ad" || selectedStep !== 2)
      video.current?.pause();
  }, [activeMedia, selectedStep]);

  const selectStep = (index: number) => {
    if (index !== 2) {
      video.current?.pause();
      onStop("finished-ad");
      setStarted(false);
    }
    setSelectedStep(index);
  };

  const navigateSteps = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % steps.length;
    else if (event.key === "ArrowLeft")
      next = (index + steps.length - 1) % steps.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = steps.length - 1;
    else return;
    event.preventDefault();
    selectStep(next);
    tabs.current[next]?.focus();
  };

  const play = () => {
    const player = video.current;
    if (!player) return;
    if (!player.getAttribute("src")) player.src = FINAL_VIDEO;
    if (failed) player.load();
    if (player.ended) player.currentTime = 0;
    setStarted(true);
    setFailed(false);
    player.play().catch(() => setFailed(true));
    posthog.capture("how_it_works_video_play");
  };

  return (
    <section
      id="process"
      className="studio-section studio-how"
      aria-labelledby={id + "-heading"}
    >
      <div className="studio-container">
        <h2 id={id + "-heading"} className="studio-how-heading">
          How Zockto works
        </h2>
        <div className="studio-how-shell">
          <div
            className="studio-how-tabs"
            role="tablist"
            aria-label="How Zockto works, three steps"
          >
            {steps.map((step, index) => (
              <motion.button
                key={step.label}
                ref={(element) => {
                  tabs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={id + "-tab-" + index}
                aria-controls={id + "-panel-" + index}
                aria-selected={selectedStep === index}
                aria-label={"Step " + (index + 1) + ": " + step.title}
                tabIndex={selectedStep === index ? 0 : -1}
                className="studio-how-tab"
                animate={{ flexGrow: selectedStep === index ? 1.4 : 1 }}
                transition={
                  reduced
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 340, damping: 32 }
                }
                onClick={() => selectStep(index)}
                onKeyDown={(event) => navigateSteps(event, index)}
              >
                {selectedStep === index && (
                  <motion.span
                    className="studio-how-tab-highlight"
                    layoutId={id + "-highlight"}
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 340, damping: 32 }
                    }
                    aria-hidden="true"
                  />
                )}
                <span className="studio-how-step-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="studio-how-tab-label">{step.label}</span>
              </motion.button>
            ))}
          </div>
          <div className="studio-how-stage">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                role="tabpanel"
                id={id + "-panel-" + index}
                aria-labelledby={id + "-tab-" + index}
                tabIndex={0}
                hidden={selectedStep !== index}
                className="studio-how-panel"
                initial={false}
                animate={{
                  opacity: selectedStep === index ? 1 : 0,
                  y: selectedStep === index ? 0 : 12,
                }}
                transition={{
                  duration: reduced ? 0 : 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="studio-how-copy">
                  <span className="studio-how-count" aria-hidden="true">
                    0{index + 1} / 03
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
                {index === 0 && (
                  <div className="studio-how-media studio-how-product">
                    <img
                      src={productImage.url}
                      alt="Original KFD Beauty Hub product photo used to create this ad"
                      loading="lazy"
                    />
                  </div>
                )}
                {index === 1 && (
                  <a
                    className="studio-how-media studio-how-storyboard"
                    href={storyboardImage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open the complete storyboard created for this product"
                  >
                    <img
                      src={storyboardImage.url}
                      alt="The original scene-by-scene storyboard Zockto created for the KFD product"
                      loading="lazy"
                    />
                    <span>
                      View full storyboard{" "}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </a>
                )}
                {index === 2 && (
                  <div className="studio-how-media studio-how-final">
                    <video
                      ref={video}
                      poster="/demo-posters/192.jpg"
                      preload="none"
                      playsInline
                      controls={started && !failed}
                      aria-label="Finished KFD product video ad"
                      onPlay={() => {
                        if (selectedStep !== 2) {
                          video.current?.pause();
                          return;
                        }
                        onMedia("finished-ad");
                      }}
                      onPause={() => onStop("finished-ad")}
                      onError={() => setFailed(true)}
                      onEnded={() => {
                        setStarted(false);
                        onStop("finished-ad");
                      }}
                    />
                    {(!started || failed) && (
                      <button
                        type="button"
                        onClick={play}
                        aria-label={
                          failed
                            ? "Retry finished product ad"
                            : "Play finished product ad"
                        }
                      >
                        {failed ? (
                          <RotateCcw size={24} aria-hidden="true" />
                        ) : (
                          <Play
                            size={24}
                            fill="currentColor"
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    )}
                    {failed && (
                      <p className="studio-how-video-error" role="status">
                        Couldn’t load the video. Tap to retry.
                      </p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
