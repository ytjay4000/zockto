import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Loader2, Play, RotateCcw, ArrowDown } from "lucide-react";
import { demoVideos, demoCategories, type DemoVideo } from "@/data/demoVideos";
import { posthog } from "@/lib/posthog";
import "./demo-gallery.css";

export function DemoTile({
  video,
  activeVideoId,
  onPlayVideo,
  onStopVideo,
}: {
  video: DemoVideo;
  activeVideoId: number | null;
  onPlayVideo: (id: number) => void;
  onStopVideo: (id: number) => void;
}) {
  const player = useRef<HTMLVideoElement>(null);
  const tile = useRef<HTMLElement>(null);
  const [activated, setActivated] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const label = video.category + " ad " + video.id;

  useEffect(() => {
    if (activeVideoId !== video.id) player.current?.pause();
  }, [activeVideoId, video.id]);

  useEffect(() => {
    if (!tile.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          player.current?.pause();
          onStopVideo(video.id);
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(tile.current);
    return () => observer.disconnect();
  }, [onStopVideo, video.id]);

  const start = () => {
    const element = player.current;
    if (!element) return;
    setActivated(true);
    setFailed(false);
    onPlayVideo(video.id);
    if (!element.getAttribute("src")) element.src = video.link;
    if (failed) {
      setLoaded(false);
      element.load();
    }
    element.play().catch((error: DOMException) => {
      if (error.name !== "AbortError") {
        setFailed(true);
        onStopVideo(video.id);
      }
    });
    posthog.capture("demo_video_play", {
      video_id: video.id,
      category: video.category,
      path: window.location.pathname,
    });
  };

  return (
    <article ref={tile} className="studio-demo-tile" aria-label={label}>
      <div className="studio-demo-media">
        <video
          ref={player}
          poster={"/demo-posters/" + video.id + ".jpg"}
          controls={activated && !failed}
          preload="none"
          playsInline
          loop
          aria-label={label}
          onLoadedData={() => setLoaded(true)}
          onPlay={() => {
            setPlaying(true);
            onPlayVideo(video.id);
          }}
          onPause={() => {
            setPlaying(false);
            onStopVideo(video.id);
          }}
          onError={() => {
            setFailed(true);
            setPlaying(false);
            onStopVideo(video.id);
          }}
        />
        {!activated && (
          <img
            src={"/demo-posters/" + video.id + ".jpg"}
            alt={video.category + " video ad in " + video.language}
            loading="lazy"
            decoding="async"
          />
        )}
        <span className="studio-demo-language">{video.language}</span>
        {!playing && (
          <button
            type="button"
            className="studio-demo-play"
            onClick={start}
            aria-label={(failed ? "Retry " : "Play ") + label}
          >
            {failed ? (
              <RotateCcw size={22} aria-hidden="true" />
            ) : (
              <Play size={22} fill="currentColor" aria-hidden="true" />
            )}
          </button>
        )}
        {activated && !loaded && !failed && (
          <span
            className="studio-demo-loading"
            role="status"
            aria-label="Loading video"
          >
            <Loader2 size={22} aria-hidden="true" />
          </span>
        )}
        {failed && (
          <p className="studio-demo-error" role="status">
            Couldn’t load this ad. Tap to retry.
          </p>
        )}
      </div>
      <div className="studio-demo-tile-caption">
        <h3>{video.category}</h3>
        <span aria-hidden="true">{String(video.id).padStart(3, "0")}</span>
      </div>
    </article>
  );
}

const INITIAL = 8;
const STEP = 8;

export default function DemoVideoGrid({
  eyebrow,
  heading,
  sub,
  footer,
}: {
  eyebrow?: string;
  heading?: string;
  sub?: string;
  footer?: ReactNode;
}) {
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(INITIAL);
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);
  const stopVideo = useCallback(
    (id: number) =>
      setActiveVideoId((current) => (current === id ? null : current)),
    [],
  );

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) setActiveVideoId(null);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const filtered = useMemo(
    () =>
      [
        ...(category === "All"
          ? demoVideos
          : demoVideos.filter((video) => video.category === category)),
      ].reverse(),
    [category],
  );
  const shown = filtered.slice(0, visible);
  return (
    <section
      id="demo-videos"
      className="studio-demo-library studio-container"
      aria-labelledby="demo-gallery-title"
    >
      <div className="studio-demo-library-heading">
        <div>
          {eyebrow && <p className="studio-eyebrow">{eyebrow}</p>}
          <h2 id="demo-gallery-title">{heading ?? "Find your next look."}</h2>
          {sub && <p className="studio-page-description">{sub}</p>}
        </div>
        <p role="status" aria-live="polite">
          Showing {shown.length} of {filtered.length} ads
        </p>
      </div>
      <div className="studio-demo-filter-scroll">
        <div
          className="studio-demo-filters"
          role="group"
          aria-label="Filter videos by product category"
        >
          {demoCategories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              onClick={() => {
                setCategory(item);
                setVisible(INITIAL);
                setActiveVideoId(null);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="studio-demo-grid">
        {shown.map((video) => (
          <DemoTile
            key={video.id}
            video={video}
            activeVideoId={activeVideoId}
            onPlayVideo={setActiveVideoId}
            onStopVideo={stopVideo}
          />
        ))}
      </div>
      {visible < filtered.length && (
        <div className="studio-demo-more">
          <button
            type="button"
            className="studio-button studio-button-outline"
            onClick={() => setVisible((count) => count + STEP)}
          >
            Load more videos <ArrowDown size={16} aria-hidden="true" />
          </button>
        </div>
      )}
      {footer && <div className="studio-demo-more">{footer}</div>}
    </section>
  );
}
