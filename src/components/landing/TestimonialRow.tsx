import { useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import {
  voiceTestimonials,
  type VoiceTestimonial,
} from "@/data/voiceTestimonials";
import { posthog } from "@/lib/posthog";
import "./testimonial-row.css";

const time = (value: number) =>
  `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, "0")}`;

function VoiceStory({
  testimonial,
  instance,
  activeMedia,
  onMedia,
  onStop,
}: {
  testimonial: VoiceTestimonial;
  instance: string;
  activeMedia: string | null;
  onMedia: (id: string | null) => void;
  onStop: (id: string) => void;
}) {
  const player = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (activeMedia !== instance) player.current?.pause();
  }, [activeMedia, instance]);
  const toggle = () => {
    const audio = player.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    if (failed) audio.load();
    setFailed(false);
    onMedia(instance);
    audio.play().catch(() => {
      setFailed(true);
      onStop(instance);
    });
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
          onMedia(instance);
          posthog.capture("voice_testimonial_play", {
            testimonial_id: testimonial.id,
          });
        }}
        onPause={() => {
          setPlaying(false);
          onStop(instance);
        }}
        onEnded={() => {
          setPlaying(false);
          setCurrent(0);
          onStop(instance);
        }}
        onError={() => {
          setFailed(true);
          setPlaying(false);
          onStop(instance);
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

const voiceEntries = voiceTestimonials.map((testimonial) => ({
  kind: "voice" as const,
  key: testimonial.id,
  testimonial,
}));
const writtenEntries = writtenStories.map((testimonial) => ({
  kind: "written" as const,
  key: testimonial.name,
  testimonial,
}));

interface TestimonialProps {
  activeMedia: string | null;
  onMedia: (id: string | null) => void;
  onStop: (id: string) => void;
  renderCta: (placement: string) => ReactNode;
}

function TestimonialRow({
  activeMedia,
  onMedia,
  onStop,
  renderCta,
  kind,
}: TestimonialProps & { kind: "voice" | "written" }) {
  const stories = kind === "voice" ? voiceEntries : writtenEntries;
  const viewport = useRef<HTMLDivElement>(null);
  const firstGroup = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>();
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(!document.hidden);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(preference.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    observer.observe(element);
    const visibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  useEffect(() => () => clearTimeout(resumeTimer.current), []);
  useEffect(() => {
    const element = viewport.current;
    if (
      !element ||
      !inView ||
      !visible ||
      reduced ||
      paused ||
      hovered ||
      focused ||
      interacting ||
      (kind === "voice" && activeMedia)
    )
      return;
    let frame = 0;
    let last = 0;
    let position = element.scrollLeft;
    const tick = (now: number) => {
      const width = firstGroup.current?.offsetWidth ?? 0;
      if (width) {
        if (last) position += Math.min(now - last, 50) * 0.022;
        position = ((position % width) + width) % width;
        element.scrollLeft = position;
      }
      last = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [
    inView,
    visible,
    reduced,
    paused,
    hovered,
    focused,
    interacting,
    activeMedia,
    kind,
  ]);

  const pauseInteraction = () => {
    clearTimeout(resumeTimer.current);
    setInteracting(true);
  };
  const resumeInteraction = () => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setInteracting(false), 1500);
  };
  const move = (direction: number) => {
    const element = viewport.current;
    if (!element) return;
    pauseInteraction();
    const width = firstGroup.current?.offsetWidth ?? 0;
    if (direction < 0 && element.scrollLeft < 1 && width)
      element.scrollLeft = width;
    element.scrollBy({
      left: direction * 350,
      behavior: reduced ? "instant" : "smooth",
    });
    resumeInteraction();
  };
  return (
    <section
      id={kind === "voice" ? "stories" : "written-stories"}
      ref={section}
      className={
        "studio-section studio-testimonial-section studio-testimonial-section-" +
        kind
      }
    >
      <div className="studio-container">
        <div className="studio-proof-heading">
          <p className="studio-eyebrow">
            {kind === "voice" ? "Heard from real users" : "In their own words"}
          </p>
          <h2>
            {kind === "voice"
              ? "Listen to Business Owners"
              : "Real experiences."}
            <br />
            <em>{kind === "voice" ? "Using Zockto." : "Real businesses."}</em>
          </h2>
          <p>
            {kind === "voice"
              ? "Real voices from real businesses. Tap play to listen."
              : "A few words from founders, sellers, and marketers using Zockto."}
          </p>
        </div>
      </div>
      <div
        ref={viewport}
        className="studio-testimonial-viewport"
        role="region"
        aria-label={
          (kind === "voice" ? "Voice" : "Written") +
          " customer testimonials, scroll horizontally"
        }
        tabIndex={0}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setHovered(true);
        }}
        onPointerLeave={() => {
          setHovered(false);
          resumeInteraction();
        }}
        onPointerDown={pauseInteraction}
        onPointerUp={resumeInteraction}
        onPointerCancel={resumeInteraction}
        onWheel={() => {
          pauseInteraction();
          resumeInteraction();
        }}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setFocused(false);
        }}
        onKeyDown={(event) => {
          if (
            event.target === event.currentTarget &&
            ["ArrowLeft", "ArrowRight"].includes(event.key)
          ) {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        <div className="studio-testimonial-track">
          {[0, 1].map((group) => (
            <div
              key={group}
              ref={group === 0 ? firstGroup : undefined}
              className="studio-testimonial-group"
            >
              {stories.map((story) => (
                <div className="studio-testimonial-item" key={story.key}>
                  {story.kind === "voice" ? (
                    <VoiceStory
                      testimonial={story.testimonial}
                      instance={"voice:" + group + ":" + story.key}
                      activeMedia={activeMedia}
                      onMedia={onMedia}
                      onStop={onStop}
                    />
                  ) : (
                    <figure className="studio-testimonial-quote">
                      <span className="studio-text-review-label">
                        Written review
                      </span>
                      <blockquote>{story.testimonial.quote}</blockquote>
                      <figcaption>
                        <span
                          className="studio-voice-initials"
                          aria-hidden="true"
                        >
                          {story.testimonial.name[0]}
                        </span>
                        <span>
                          <strong>{story.testimonial.name}</strong>
                          <small>{story.testimonial.role}</small>
                        </span>
                      </figcaption>
                    </figure>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="studio-container studio-testimonial-footer">
        {kind === "written" && renderCta("testimonials_cta_click")}
        <button
          className="studio-testimonial-pause"
          aria-pressed={paused}
          aria-label={
            paused
              ? "Resume " + kind + " testimonial scrolling"
              : "Pause " + kind + " testimonial scrolling"
          }
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}
          {paused ? "Resume scrolling" : "Pause scrolling"}
        </button>
      </div>
    </section>
  );
}

export default function TestimonialSections(props: TestimonialProps) {
  return (
    <>
      <TestimonialRow {...props} kind="voice" />
      <TestimonialRow {...props} kind="written" />
    </>
  );
}
