import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Play, RotateCcw } from "lucide-react";
import productImage from "@/assets/kfd-product.jpg.asset.json";
import storyboardImage from "@/assets/kfd-storyboard.jpg.asset.json";
import { posthog } from "@/lib/posthog";
import "./sales-proof.css";
import TestimonialRow from "./TestimonialRow";

const FINAL_VIDEO =
  "https://storage.googleapis.com/zockto-demo-videos/demo-192.mp4";

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function ProductProof({
  activeMedia,
  onMedia,
  onStop,
}: {
  activeMedia: string | null;
  onMedia: (id: string | null) => void;
  onStop: (id: string) => void;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (activeMedia !== "finished-ad") video.current?.pause();
  }, [activeMedia]);
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
    <section id="process" className="studio-section studio-proof-demo">
      <div className="studio-container">
        <Reveal className="studio-proof-heading">
          <p className="studio-eyebrow">How Zockto works</p>
          <h2>
            From one product photo
            <br />
            to a <em>finished ad.</em>
          </h2>
          <p>
            One product. The actual storyboard. The finished video. See the
            whole journey.
          </p>
        </Reveal>
        <ol className="studio-proof-steps">
          <li>
            <div className="studio-proof-step-title">
              <span>01</span>
              <div>
                <h3>Upload your product</h3>
                <p>One clear photo is all Zockto needs.</p>
              </div>
            </div>
            <div className="studio-proof-media studio-proof-product">
              <img
                src={productImage.url}
                alt="Original KFD Beauty Hub product photo used to create this ad"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <div className="studio-proof-step-title">
              <span>02</span>
              <div>
                <h3>Choose a style</h3>
                <p>Zockto plans every scene. You pick what you like.</p>
              </div>
            </div>
            <a
              className="studio-proof-media studio-proof-storyboard"
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
                View full storyboard <ArrowUpRight size={14} />
              </span>
            </a>
          </li>
          <li>
            <div className="studio-proof-step-title">
              <span>03</span>
              <div>
                <h3>Get your finished ad</h3>
                <p>Voiceover, music, captions — fully edited.</p>
              </div>
            </div>
            <div className="studio-proof-media studio-proof-final">
              <video
                ref={video}
                poster="/demo-posters/192.jpg"
                preload="none"
                playsInline
                controls={started && !failed}
                aria-label="Finished KFD product video ad"
                onPlay={() => onMedia("finished-ad")}
                onPause={() => onStop("finished-ad")}
                onError={() => setFailed(true)}
                onEnded={() => {
                  setStarted(false);
                  onMedia(null);
                }}
              />
              {(!started || failed) && (
                <button
                  onClick={play}
                  aria-label={
                    failed
                      ? "Retry finished product ad"
                      : "Play finished product ad"
                  }
                >
                  {failed ? (
                    <RotateCcw size={25} />
                  ) : (
                    <Play size={25} fill="currentColor" />
                  )}
                </button>
              )}
              {failed && (
                <p className="studio-proof-video-error" role="status">
                  Couldn’t load the video. Tap to retry.
                </p>
              )}
            </div>
          </li>
        </ol>
        <p className="studio-proof-caption">
          You provide the product.{" "}
          <strong>Zockto does the creative work.</strong>
        </p>
      </div>
    </section>
  );
}

const noSkills = [
  "No prompting",
  "No script writing",
  "No storyboard writing",
  "No video editing",
  "No camera",
  "No AI experience",
];
export default function SalesProof({
  renderCta,
}: {
  renderCta: (placement: string) => ReactNode;
}) {
  const [activeMedia, setActiveMedia] = useState<string | null>(null);
  const stopMedia = useCallback(
    (id: string) =>
      setActiveMedia((current) => (current === id ? null : current)),
    [],
  );
  useEffect(() => {
    const stop = () => {
      if (document.hidden) setActiveMedia(null);
    };
    document.addEventListener("visibilitychange", stop);
    return () => document.removeEventListener("visibilitychange", stop);
  }, []);
  return (
    <>
      <ProductProof
        activeMedia={activeMedia}
        onMedia={setActiveMedia}
        onStop={stopMedia}
      />
      <section className="studio-no-skills">
        <div className="studio-container">
          <Reveal className="studio-no-skills-grid">
            <div>
              <h2>
                You Don't Need to Know
                <br />
                How to <em>Use AI.</em>
              </h2>
              <p>
                Zockto does the creative work for you. You only provide the
                product.
              </p>
              {renderCta("benefits_cta_click")}
            </div>
            <ul>
              {noSkills.map((skill) => (
                <li key={skill}>
                  <Check size={17} />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <TestimonialRow
        activeMedia={activeMedia}
        onMedia={setActiveMedia}
        onStop={stopMedia}
        renderCta={renderCta}
      />
    </>
  );
}
