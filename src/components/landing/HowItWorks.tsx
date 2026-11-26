import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Play, RotateCcw } from "lucide-react";
import okritoProductImage from "@/assets/landing/okrito-product.jpg";
import okritoStoryboardImage from "@/assets/landing/okrito-storyboard.webp";
import lrpProductImage from "@/assets/landing/lrp-cicaplast-product.webp";
import { lrpInternationalAd } from "@/data/internationalLanding";
import { okritoAd } from "@/data/landingPreviewPosters";
import { posthog } from "@/lib/posthog";
import "./how-it-works.css";

const okritoStoryboardUrl =
  "https://storages.zockto.com/storyboards/f59919a3-42c3-4575-9a36-a0fe2efe3928/660f36fe-6957-4566-823d-c07b444f6c06/sheet1-6c039d52-4472-43c2-a779-1797e40946b6.png";
const lrpStoryboardUrl =
  "https://storages.zockto.com/storyboards/6cf1c3e0-9747-4080-bad4-2a95dd81f280/873b1a59-6594-4515-891a-08f40a7a20ce/sheet1-e60efc6c-bab8-4fba-8c0d-59dc17024314.png";
const steps = [
  {
    label: "Your photo",
    title: "Upload your product",
    copy: "Start with one clear product photo.",
  },
  {
    label: "Your style",
    title: "Choose a style",
    copy: "Pick your look. Zockto plans the scenes.",
  },
  {
    label: "Your ad",
    title: "Get your finished ad",
    copy: "Voiceover, music, captions. All edited for you.",
  },
];

export default function HowItWorks({
  activeMedia,
  international,
  onMedia,
  onStop,
}: {
  activeMedia: string | null;
  international: boolean;
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
  const adUrl = international ? lrpInternationalAd.video : okritoAd.video;

  useEffect(() => {
    setStarted(false);
    setFailed(false);
    onStop("finished-ad");
  }, [international, onStop]);

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
    if (!player.getAttribute("src")) player.src = adUrl;
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
                  <div className={`studio-how-media studio-how-product${international ? " is-international" : ""}`}>
                    {international ? (
                      <img
                        src={lrpProductImage}
                        alt="La Roche-Posay Cicaplast B5 spray bottle"
                        loading="lazy"
                      />
                    ) : (
                      <div className="studio-how-product-cutout">
                        <img
                          src={okritoProductImage}
                          alt="Original photo of the OKRITO okra chips pouch"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                )}
                {index === 1 && (
                  <a
                    className="studio-how-media studio-how-storyboard"
                    href={international ? lrpStoryboardUrl : okritoStoryboardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open the complete storyboard created for this product"
                  >
                    <img
                      src={international ? lrpStoryboardUrl : okritoStoryboardImage}
                      alt={international ? "Nine-scene storyboard for the La Roche-Posay Cicaplast B5 ad" : "Storyboard for the OKRITO okra chips ad"}
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
                      key={adUrl}
                      ref={video}
                      src={international && selectedStep === 2 ? `${adUrl}#t=0.1` : undefined}
                      poster={international ? undefined : okritoAd.poster}
                      preload={international && selectedStep === 2 ? "metadata" : "none"}
                      playsInline
                      controls={started && !failed}
                      aria-label={international ? "Finished La Roche-Posay Cicaplast B5 ad" : "Finished OKRITO okra chips ad"}
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
