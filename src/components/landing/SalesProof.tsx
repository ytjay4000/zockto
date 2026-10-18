import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Pause, Play, RotateCcw } from "lucide-react";
import productImage from "@/assets/kfd-product.jpg.asset.json";
import storyboardImage from "@/assets/kfd-storyboard.jpg.asset.json";
import {
  voiceTestimonials,
  type VoiceTestimonial,
} from "@/data/voiceTestimonials";
import { posthog } from "@/lib/posthog";
import "./sales-proof.css";

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
}: {
  activeMedia: string | null;
  onMedia: (id: string | null) => void;
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
const time = (value: number) =>
  `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, "0")}`;

function VoiceStory({
  testimonial,
  activeMedia,
  onMedia,
}: {
  testimonial: VoiceTestimonial;
  activeMedia: string | null;
  onMedia: (id: string | null) => void;
}) {
  const player = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (activeMedia !== testimonial.id) player.current?.pause();
  }, [activeMedia, testimonial.id]);
  const toggle = () => {
    const audio = player.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    if (failed) audio.load();
    setFailed(false);
    onMedia(testimonial.id);
    audio.play().catch(() => setFailed(true));
  };
  return (
    <article className="studio-voice-story">
      <div className="studio-voice-person">
        <span className="studio-voice-initials" aria-hidden="true">
          {testimonial.name
            .split(" ")
            .map((name) => name[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.role}</p>
        </div>
        <span className="studio-voice-recording">Voice note</span>
      </div>
      <div className="studio-voice-player">
        <button
          onClick={toggle}
          aria-label={`${playing ? "Pause" : failed ? "Retry" : "Play"} testimonial from ${testimonial.name}`}
        >
          {failed ? (
            <RotateCcw size={17} />
          ) : playing ? (
            <Pause size={17} fill="currentColor" />
          ) : (
            <Play size={17} fill="currentColor" />
          )}
        </button>
        <div className="studio-voice-waveform">
          <div aria-hidden="true">
            {Array.from({ length: 32 }, (_, index) => (
              <span
                key={index}
                style={{
                  height: `${24 + Math.abs(Math.sin(index * 1.3) * Math.cos(index * 0.7)) * 76}%`,
                  background:
                    duration && index / 32 <= current / duration
                      ? "#3459d7"
                      : undefined,
                }}
              />
            ))}
          </div>
          <input
            type="range"
            min="0"
            max={duration || 1}
            step="0.1"
            value={current}
            disabled={!duration}
            aria-label={`Seek testimonial from ${testimonial.name}`}
            aria-valuetext={`${time(current)} of ${time(duration)}`}
            onChange={(event) => {
              if (player.current) {
                player.current.currentTime = Number(event.target.value);
                setCurrent(Number(event.target.value));
              }
            }}
          />
        </div>
        <span className="studio-voice-time">
          {duration ? time(current || duration) : "Listen"}
        </span>
      </div>
      {failed && (
        <p className="studio-voice-error" role="status">
          Couldn’t play this recording. Tap to retry.
        </p>
      )}
      <audio
        ref={player}
        src={testimonial.audio}
        preload="none"
        onLoadedMetadata={(event) =>
          setDuration(
            Number.isFinite(event.currentTarget.duration)
              ? event.currentTarget.duration
              : 0,
          )
        }
        onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
        onPlay={() => {
          setPlaying(true);
          onMedia(testimonial.id);
          posthog.capture("voice_testimonial_play", {
            testimonial_id: testimonial.id,
          });
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setCurrent(0);
          onMedia(null);
        }}
        onError={() => {
          setFailed(true);
          setPlaying(false);
        }}
      />
    </article>
  );
}

const writtenStories = [
  {
    name: "Sriniwasa",
    role: "Performance Marketer",
    quote:
      "As a performance marketer, creative testing is the bottleneck. Zockto gives me 10+ ad variations in the time it used to take to brief one. Winning creatives now show up in days, not weeks.",
  },
  {
    name: "Khushi",
    role: "E-commerce Seller",
    quote:
      "I sell on multiple marketplaces and never had time to make videos. With Zockto I just paste the product URL and get a polished ad ready to post. My listings finally look like the big brands.",
  },
  {
    name: "Tarun",
    role: "Founder",
    quote:
      "We were burning money on agencies and freelancers for every new ad. Zockto replaced that entire workflow. Studio-quality UGC ads, instantly, at a fraction of the cost — it's a no-brainer for any founder.",
  },
  {
    name: "Meet Shah",
    role: "D2C Brand Owner",
    quote:
      "Running a D2C brand, creatives are everything. Zockto lets me spin up fresh ad variations from just my product link — no shoots, no editors. My ROAS has genuinely improved since I started testing more creatives every week.",
  },
];

export default function SalesProof({
  renderCta,
}: {
  renderCta: (placement: string) => ReactNode;
}) {
  const [activeMedia, setActiveMedia] = useState<string | null>(null);
  useEffect(() => {
    const stop = () => {
      if (document.hidden) setActiveMedia(null);
    };
    document.addEventListener("visibilitychange", stop);
    return () => document.removeEventListener("visibilitychange", stop);
  }, []);
  return (
    <>
      <ProductProof activeMedia={activeMedia} onMedia={setActiveMedia} />
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
      <section id="stories" className="studio-section studio-voice-stories">
        <div className="studio-container">
          <Reveal className="studio-proof-heading">
            <p className="studio-eyebrow">Heard from real users</p>
            <h2>
              Listen to Business Owners
              <br />
              <em>Using Zockto.</em>
            </h2>
            <p>Real voices from real businesses. Tap play to listen.</p>
          </Reveal>
          <div className="studio-voice-grid">
            {voiceTestimonials.map((testimonial) => (
              <Reveal key={testimonial.id}>
                <VoiceStory
                  testimonial={testimonial}
                  activeMedia={activeMedia}
                  onMedia={setActiveMedia}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="studio-section studio-written-stories">
        <div className="studio-container">
          <Reveal className="studio-section-heading">
            <div>
              <p className="studio-eyebrow">In their own words</p>
              <h2>
                Real experiences.
                <br />
                <em>Real businesses.</em>
              </h2>
            </div>
            <p className="studio-section-copy">
              Founders, sellers, and marketers.
              <br />A few words from people using Zockto.
            </p>
          </Reveal>
          <div className="studio-quotes">
            {writtenStories.map((person) => (
              <Reveal key={person.name}>
                <figure>
                  <span className="studio-quote-mark" aria-hidden="true">
                    “
                  </span>
                  <blockquote>{person.quote}</blockquote>
                  <figcaption>
                    <span className="studio-avatar">{person.name[0]}</span>
                    <span>
                      <strong>{person.name}</strong>
                      <small>{person.role}</small>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="studio-stories-cta">
            {renderCta("testimonials_cta_click")}
          </div>
        </div>
      </section>
    </>
  );
}
