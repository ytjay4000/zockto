import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useVslSource } from "@/context/VslVariant";
import { getAppUrl } from "@/lib/leadToken";
import { posthog } from "@/lib/posthog";
import "./trending-styles.css";

interface TrendingTemplate {
  id: number;
  name: string;
  poster: string;
  video: string;
}

// Layout placeholder only, not measured campaign performance. Keep the visible
// "Example" label until this is replaced with verified per-style campaign data.
const EXAMPLE_ROAS = "3.4×";

function TrendingCard({
  template,
  instance,
  viewport,
  playing,
  audible,
  onSound,
  onSilent,
  onResume,
}: {
  template: TrendingTemplate;
  instance: string;
  viewport: React.RefObject<HTMLDivElement>;
  playing: boolean;
  audible: boolean;
  onSound: (instance: string) => void;
  onSilent: (instance: string) => void;
  onResume: () => void;
}) {
  const card = useRef<HTMLElement>(null);
  const player = useRef<HTMLVideoElement>(null);
  const tracked = useRef(false);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [failed, setFailed] = useState(false);
  const source = useVslSource();
  const templateUrl = new URL(getAppUrl("/product-ad-shot", source));
  templateUrl.searchParams.set("template_id", String(template.id));

  useEffect(() => {
    const node = card.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setLoaded(true);
      },
      { root: viewport.current, threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [viewport]);

  useEffect(() => {
    const video = player.current;
    if (!video || !loaded) return;
    let cancelled = false;
    if (playing && visible && !failed) {
      video.play().catch((error: DOMException) => {
        if (!cancelled && error.name !== "AbortError") setBlocked(true);
      });
    } else {
      video.pause();
      video.muted = true;
      onSilent(instance);
    }
    return () => {
      cancelled = true;
      video.pause();
    };
  }, [playing, visible, loaded, failed, instance, onSilent]);

  useEffect(() => {
    if (player.current) player.current.muted = !audible;
  }, [audible]);

  const start = () => {
    const video = player.current;
    if (!video) return;
    onResume();
    setFailed(false);
    if (failed) video.load();
    video
      .play()
      .then(() => setBlocked(false))
      .catch(() => setBlocked(true));
  };

  return (
    <article
      ref={card}
      className="studio-trending-card"
      aria-label={template.name}
    >
      <div className="studio-trending-media">
        <video
          ref={player}
          src={loaded ? template.video : undefined}
          poster={template.poster}
          muted={!audible}
          autoPlay={playing && visible}
          loop
          playsInline
          preload="none"
          aria-label={`${template.name} preview`}
          onError={() => {
            setFailed(true);
            onSilent(instance);
          }}
          onPlaying={() => {
            setBlocked(false);
            if (!tracked.current) {
              tracked.current = true;
              posthog.capture("demo_video_play", {
                video: `t${template.id}`,
                template_id: template.id,
                placement: "trending_styles",
                autoplay: true,
              });
            }
          }}
        />
        <span className="studio-trending-shade" aria-hidden="true" />
        <span className="studio-trending-proof">Made with Zockto</span>
        {(blocked || !playing || failed) && (
          <button
            className="studio-trending-play"
            onClick={start}
            aria-label={
              failed ? `Retry ${template.name}` : `Play ${template.name}`
            }
          >
            {failed ? (
              <RotateCcw size={19} />
            ) : (
              <Play size={19} fill="currentColor" />
            )}
          </button>
        )}
        <div className="studio-trending-overlay">
          <p>{template.name}</p>
          <button
            className="studio-trending-sound"
            disabled={failed}
            aria-label={
              audible ? `Mute ${template.name}` : `Unmute ${template.name}`
            }
            aria-pressed={audible}
            onClick={() => {
              const video = player.current;
              if (!video) return;
              const next = !audible;
              if (next) onResume();
              video.muted = !next;
              onSound(instance);
              if (next) video.play().catch(() => setBlocked(true));
              posthog.capture("template_sound_toggle", {
                template_id: template.id,
                muted: !next,
              });
            }}
          >
            {audible ? <Volume2 size={17} /> : <VolumeX size={17} />}
          </button>
        </div>
        {failed && (
          <span className="studio-trending-failed" role="status">
            Couldn’t load video. Tap to retry.
          </span>
        )}
      </div>
      <div className="studio-trending-footer">
        <span
          className="studio-trending-metric"
          aria-label={`Example ROAS ${EXAMPLE_ROAS}, illustrative only, not a measured campaign result`}
          title="Illustrative example only—not a measured campaign result."
        >
          <span className="studio-trending-metric-example">Example</span>{" "}
          <strong>{EXAMPLE_ROAS}</strong> ROAS
        </span>
        <a
          href={templateUrl.toString()}
          className="studio-trending-use"
          aria-label={`Use this style: ${template.name}`}
          onClick={() =>
            posthog.capture("template_use_click", {
              template_id: template.id,
              template_name: template.name,
              source,
              placement: "trending_styles",
            })
          }
        >
          Use this style <ArrowRight size={12} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function TrendingStyles() {
  const viewport = useRef<HTMLDivElement>(null);
  const firstGroup = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>();
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [audible, setAudible] = useState<string | null>(null);
  const playing = !paused && inView && pageVisible;
  const {
    data: templates = [],
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["trending-styles"],
    queryFn: async ({ signal }): Promise<TrendingTemplate[]> => {
      const { data, error } = await supabase
        .from("product_ad_video")
        .select("id,name,preview_image,video_url")
        .eq("style", "trending")
        .eq("is_active", true)
        .order("trend_rank", { ascending: true })
        .abortSignal(signal);
      if (error) throw error;
      return (data ?? []).flatMap((row) =>
        row.preview_image && row.video_url
          ? [
              {
                id: row.id,
                name: row.name ?? "Trending style",
                poster: row.preview_image,
                video: row.video_url,
              },
            ]
          : [],
      );
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
  // Fill narrow feeds before duplicating the row, so its loop never exposes a gap.
  const row = templates.length
    ? Array.from(
        { length: Math.max(templates.length, 6) },
        (_, index) => templates[index % templates.length],
      )
    : [];
  const silence = useCallback(
    (instance: string) =>
      setAudible((current) => (current === instance ? null : current)),
    [],
  );
  const toggleSound = useCallback(
    (instance: string) =>
      setAudible((current) => (current === instance ? null : instance)),
    [],
  );

  useEffect(() => {
    const node = section.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (!entry.isIntersecting) setAudible(null);
    });
    observer.observe(node);
    const visibility = () => {
      setPageVisible(!document.hidden);
      if (document.hidden) setAudible(null);
    };
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  useEffect(() => {
    const node = viewport.current;
    if (
      !node ||
      !playing ||
      reduced ||
      hovered ||
      focused ||
      interacting ||
      audible ||
      !templates.length
    )
      return;
    let frame = 0;
    let last = 0;
    let position = node.scrollLeft;
    const tick = (time: number) => {
      const width = firstGroup.current?.offsetWidth ?? 0;
      if (width && width > node.clientWidth) {
        if (last) position += Math.min(time - last, 50) * 0.025;
        position = ((position % width) + width) % width;
        node.scrollLeft = position;
      }
      last = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [
    playing,
    reduced,
    hovered,
    focused,
    interacting,
    audible,
    templates.length,
  ]);

  const pauseInteraction = () => {
    clearTimeout(resumeTimer.current);
    setInteracting(true);
  };
  const resumeInteraction = () => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setInteracting(false), 1800);
  };
  const move = (direction: number) => {
    const node = viewport.current;
    if (!node) return;
    pauseInteraction();
    const width = firstGroup.current?.offsetWidth ?? 0;
    if (width && direction < 0 && node.scrollLeft < 1) node.scrollLeft = width;
    node.scrollBy({
      left: direction * 250,
      behavior: reduced ? "instant" : "smooth",
    });
    resumeInteraction();
  };

  return (
    <section
      ref={section}
      id="work"
      className="studio-trending"
      aria-label="Video styles created with Zockto"
    >
      {templates.length > 0 && (
        <button
          className="studio-trending-pause"
          onClick={() => {
            setPaused(!paused);
            setAudible(null);
          }}
          aria-pressed={paused}
          aria-label={
            paused ? "Play trending previews" : "Pause trending previews"
          }
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}
          <span>{paused ? "Play" : "Pause"}</span>
        </button>
      )}
      {isPending ? (
        <div
          className="studio-trending-loading"
          role="status"
          aria-label="Loading trending styles"
        >
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div key={index} />
          ))}
        </div>
      ) : isError ? (
        <div className="studio-trending-empty" role="status">
          <p>Trending styles couldn’t load. Please try again.</p>
          <button onClick={() => refetch()}>
            Try again <RotateCcw size={13} />
          </button>
        </div>
      ) : templates.length === 0 ? (
        <p className="studio-trending-empty">
          New styles are on their way. See how one product becomes a finished ad
          below.
        </p>
      ) : (
        <>
          <div
            ref={viewport}
            className="studio-trending-viewport"
            role="region"
            aria-label="Trending video styles, scroll horizontally"
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
            <div className="studio-trending-track">
              {[0, 1].map((group) => (
                <div
                  ref={group === 0 ? firstGroup : undefined}
                  key={group}
                  className="studio-trending-group"
                >
                  {row.map((template, index) => {
                    const instance = `${group}-${index}-${template.id}`;
                    return (
                      <TrendingCard
                        key={instance}
                        template={template}
                        instance={instance}
                        viewport={viewport}
                        playing={playing}
                        audible={audible === instance}
                        onSound={toggleSound}
                        onSilent={silence}
                        onResume={() => setPaused(false)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
