import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Loader2, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useSampleVideoLibrary, type SampleVideo } from '@/hooks/useSampleVideoLibrary';

interface Props {
  heading: string;
  subheading: string;
  categoryOrder?: string[];
}

const VideoTile = ({ video, activeAudioId, onAudio }: {
  video: SampleVideo;
  activeAudioId: number | null;
  onAudio: (id: number | null) => void;
}) => {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [el, setEl] = useState<HTMLVideoElement | null>(null);
  const muted = activeAudioId !== video.id;

  const toggle = () => {
    if (!el) return;
    if (playing) { el.pause(); setPlaying(false); }
    else { el.play().catch(() => {}); setPlaying(true); }
  };
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAudio(muted ? video.id : null);
  };

  return (
    <div className="group cursor-pointer" onClick={toggle}>
      <div className="relative aspect-[9/16] bg-muted rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 z-10">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        )}
        {video.link && (
          <video
            ref={setEl}
            src={`${video.link}#t=0.1`}
            className="w-full h-full object-cover"
            muted={muted}
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setLoaded(true)}
          />
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          {video.language && (
            <Badge variant="outline" className="bg-background/60 backdrop-blur-sm border-border/50 text-xs">
              {video.language}
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); toggle(); }}
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
      </div>
    </div>
  );
};

const SampleVideoLibrarySection = ({ heading, subheading, categoryOrder }: Props) => {
  const { videos, loading } = useSampleVideoLibrary();
  const [activeAudioId, setActiveAudioId] = useState<number | null>(null);

  const sorted = useMemo(() => {
    const norm = (s: string) => s.toLowerCase().trim();
    const order = (categoryOrder ?? []).map(norm);
    const rank = (cat: string) => {
      const i = order.indexOf(norm(cat));
      return i === -1 ? Number.MAX_SAFE_INTEGER : i;
    };
    return [...videos].sort((a, b) => {
      const ca = (a.category || 'Other').trim();
      const cb = (b.category || 'Other').trim();
      const r = rank(ca) - rank(cb);
      return r !== 0 ? r : ca.localeCompare(cb);
    });
  }, [videos, categoryOrder]);

  const INITIAL = 8;
  const STEP = 6;
  const [visible, setVisible] = useState(INITIAL);
  const shown = sorted.slice(0, visible);
  const hasMore = visible < sorted.length;

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            Sample Video Library
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-muted-foreground text-base md:text-lg">{subheading}</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : sorted.length === 0 ? (
          <p className="text-center text-muted-foreground">No sample videos available yet.</p>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {shown.map((v, idx) => {
                const cat = (v.category || 'Other').trim();
                const prevCat = idx > 0 ? (shown[idx - 1].category || 'Other').trim() : null;
                const showLabel = cat !== prevCat;
                return (
                  <div key={v.id} className="flex flex-col">
                    {showLabel && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 capitalize">
                        {cat}
                      </span>
                    )}
                    <VideoTile video={v} activeAudioId={activeAudioId} onAudio={setActiveAudioId} />
                  </div>
                );
              })}
            </div>
            {hasMore && (
              <div className="flex justify-center mt-10">
                <Button variant="outline" size="lg" onClick={() => setVisible((v) => v + STEP)}>
                  Load more
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SampleVideoLibrarySection;
