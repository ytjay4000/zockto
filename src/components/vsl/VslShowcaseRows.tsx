import { useEffect, useRef, useState, type ReactNode } from "react";
import { Play, X, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { demoVideos } from "@/data/demoVideos";
import { useVslSource } from "@/context/VslVariant";
import { getAppUrl } from "@/lib/leadToken";
import { posthog } from "@/lib/posthog";

type Card = { key: string; title: string; poster: string; video: string; templateId?: number };

/** Auto-scrolling row that stays natively swipeable. Items are duplicated; we wrap at the halfway point. */
const MarqueeRow = ({ children, speed = 0.35 }: { children: ReactNode; speed?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const resumeT = useRef<number>();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let pos = el.scrollLeft;
    const tick = () => {
      const half = el.scrollWidth / 2;
      if (!paused.current && half > el.clientWidth) {
        pos += speed;
        if (pos >= half) pos -= half;
        el.scrollLeft = pos;
      } else {
        pos = el.scrollLeft;
        if (pos >= half && half > 0) { pos -= half; el.scrollLeft = pos; }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const pause = () => { paused.current = true; window.clearTimeout(resumeT.current); };
  const resume = (ms = 1500) => {
    window.clearTimeout(resumeT.current);
    resumeT.current = window.setTimeout(() => (paused.current = false), ms);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={pause}
      onMouseLeave={() => resume(300)}
      onTouchStart={pause}
      onTouchEnd={() => resume()}
      onPointerDown={pause}
      onPointerUp={() => resume()}
      onWheel={() => { pause(); resume(); }}
      className="flex gap-3 md:gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {children}
      {children}
    </div>
  );
};

const ShowCard = ({ c, onPlay, useHref }: { c: Card; onPlay: (c: Card) => void; useHref?: string }) => (
  <div className="shrink-0 w-[148px] md:w-[180px] text-left">
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-muted border border-border/60 shadow-card">
      <button onClick={() => onPlay(c)} className="absolute inset-0 w-full h-full" aria-label={`Play ${c.title}`}>
        <img src={c.poster} alt={c.title} loading="lazy" draggable={false} className="w-full h-full object-cover" />
        <span className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/90 flex items-center justify-center shadow">
          <Play className="w-3.5 h-3.5 text-foreground ml-0.5" fill="currentColor" />
        </span>
      </button>
      {useHref && (
        <a
          href={useHref}
          onClick={() => posthog.capture("template_use_click", { template_id: c.templateId })}
          className="absolute left-2 right-2 bottom-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-background text-foreground text-[13px] font-semibold py-2 shadow-card hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Use It <ArrowRight className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
    <p className="mt-2 text-[13px] font-semibold leading-tight line-clamp-1">{c.title}</p>
  </div>
);

const BUSINESS: Card[] = [...demoVideos].reverse().map((v) => ({
  key: `d${v.id}`,
  title: v.category,
  poster: `/demo-posters/${v.id}.jpg`,
  video: v.link,
}));

const VslShowcaseRows = () => {
  const source = useVslSource() ?? "99";
  const [trending, setTrending] = useState<Card[]>([]);
  const [active, setActive] = useState<Card | null>(null);

  useEffect(() => {
    supabase
      .from("product_ad_video")
      .select("id,name,preview_image,video_url")
      .eq("style", "trending")
      .eq("is_active", true)
      .order("trend_rank", { ascending: true })
      .then(({ data }) =>
        setTrending(
          (data ?? [])
            .filter((r) => r.preview_image && r.video_url)
            .map((r) => ({ key: `t${r.id}`, title: r.name ?? "Template", poster: r.preview_image!, video: r.video_url!, templateId: r.id })),
        ),
      );
  }, []);

  const play = (c: Card) => {
    setActive(c);
    posthog.capture("demo_video_play", { video: c.key });
  };

  return (
    <div className="space-y-8 md:space-y-10 -mx-4">
      {trending.length > 0 && (
        <div>
          <h2 className="px-4 mb-3 text-left font-display text-lg md:text-xl font-bold tracking-tight">Trending styles</h2>
          <MarqueeRow>
            {trending.map((c) => (
              <ShowCard key={c.key} c={c} onPlay={play}
                useHref={`${getAppUrl("/product-ad-shot", source)}&template_id=${c.templateId}`} />
            ))}
          </MarqueeRow>
        </div>
      )}
      <div>
        <h2 className="px-4 mb-3 text-left font-display text-lg md:text-xl font-bold tracking-tight">
          Made with Zockto, for real businesses
        </h2>
        <MarqueeRow speed={0.3}>
          {BUSINESS.map((c) => <ShowCard key={c.key} c={c} onPlay={play} />)}
        </MarqueeRow>
      </div>

      {active && (
        <div className="fixed inset-0 z-[70] bg-foreground/80 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="relative w-full max-w-[360px]" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)} aria-label="Close"
              className="absolute -top-11 right-0 w-9 h-9 rounded-full bg-background flex items-center justify-center">
              <X className="w-4 h-4" />
            </button>
            <video src={active.video} poster={active.poster} autoPlay controls playsInline
              className="w-full aspect-[9/16] rounded-2xl bg-foreground object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VslShowcaseRows;
