import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Play, Pause, Volume2, VolumeX, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { demoVideos, demoCategories, type DemoVideo } from "@/data/demoVideos";
import { posthog } from "@/lib/posthog";

const DemoTile = ({
  video,
  activeAudioId,
  onAudio,
}: {
  video: DemoVideo;
  activeAudioId: number | null;
  onAudio: (id: number | null) => void;
}) => {
  const [activated, setActivated] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [el, setEl] = useState<HTMLVideoElement | null>(null);
  const muted = activeAudioId !== video.id;
  const tileRef = useRef<HTMLDivElement>(null);
  const [nearView, setNearView] = useState(false);

  // Only fetch a preview frame once the tile is close to the viewport.
  useEffect(() => {
    const node = tileRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);


  const activate = () => {
    if (!activated) {
      setActivated(true);
      onAudio(video.id);
      setPlaying(true);
      posthog.capture("demo_video_play", {
        video_id: video.id,
        category: video.category,
        path: window.location.pathname,
      });
      return;
    }
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      onAudio(video.id);
      el.play().catch(() => {});
      setPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activated) {
      setActivated(true);
      onAudio(video.id);
      setPlaying(true);
      return;
    }
    onAudio(muted ? video.id : null);
  };

  return (
    <div className="group flex flex-col">
      <div
        className="relative aspect-[9/16] bg-muted rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all cursor-pointer"
        onClick={activate}
      >
        {!activated ? (
          <>
            <video
              src={`${video.link}#t=0.1`}
              className="w-full h-full object-cover"
              muted
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="w-14 h-14 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 ml-0.5 text-foreground" fill="currentColor" />
              </div>
            </div>
          </>
        ) : (
          <>
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 z-10">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
              </div>
            )}
            <video
              ref={setEl}
              src={video.link}
              className="w-full h-full object-cover"
              muted={muted}
              loop
              playsInline
              autoPlay
              preload="auto"
              onLoadedData={() => setLoaded(true)}
            />
          </>
        )}

        <div className="absolute top-3 left-3 flex flex-wrap gap-2 max-w-[85%]">
          <Badge variant="outline" className="bg-background/70 backdrop-blur-sm border-border/50 text-xs">
            {video.language}
          </Badge>
          {video.duration && (
            <Badge variant="outline" className="bg-background/70 backdrop-blur-sm border-border/50 text-xs gap-1">
              <Clock className="w-3 h-3" /> {video.duration}s
            </Badge>
          )}
        </div>

        {activated && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                activate();
              }}
              className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" fill="currentColor" />}
            </button>
            <button
              onClick={toggleMute}
              className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>

      <div className="mt-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{video.category}</p>
      </div>
    </div>
  );
};

const INITIAL = 8;
const STEP = 8;

interface DemoVideoGridProps {
  eyebrow?: string;
  heading?: string;
  sub?: string;
  footer?: React.ReactNode;
}

const DemoVideoGrid = ({ eyebrow, heading, sub, footer }: DemoVideoGridProps) => {
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(INITIAL);
  const [activeAudioId, setActiveAudioId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const list = category === "All" ? demoVideos : demoVideos.filter((v) => v.category === category);
    return [...list].reverse();
  }, [category]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <section id="demo-videos" className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            {eyebrow ?? "Trusted by 1000+ businesses"}
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">
            {heading ?? "Watch the actual quality — nothing staged, nothing cherry-picked"}
          </h2>
        </motion.div>

        <div className="-mx-4 px-4 mb-10 overflow-x-auto md:overflow-visible md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-2 w-max md:w-auto">
            {demoCategories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  setVisible(INITIAL);
                }}
                className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  category === c
                    ? "bg-primary text-primary-foreground border-primary shadow-card"
                    : "border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {shown.map((v) => (
            <DemoTile key={v.id} video={v} activeAudioId={activeAudioId} onAudio={setActiveAudioId} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg" onClick={() => setVisible((v) => v + STEP)}>
              Load more videos
            </Button>
          </div>
        )}

        {footer && <div className="flex justify-center mt-10">{footer}</div>}
      </div>
    </section>
  );
};

export default DemoVideoGrid;
