import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Loader2, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useSampleVideoLibrary, type SampleVideo } from '@/hooks/useSampleVideoLibrary';

interface Props {
  heading: string;
  subheading: string;
  rankedVideoIds?: number[];
}

const VideoTile = ({ video, activeAudioId, onAudio }: {
  video: SampleVideo;
  activeAudioId: number | null;
  onAudio: (id: number | null) => void;
}) => {
  const [activated, setActivated] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [el, setEl] = useState<HTMLVideoElement | null>(null);
  const muted = activeAudioId !== video.id;

  const activate = () => {
    if (!activated) {
      setActivated(true);
      onAudio(video.id);
      setPlaying(true);
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
    <div className="group cursor-pointer" onClick={activate}>
      <div className="relative aspect-[9/16] bg-muted rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all">
        {!activated && video.link && (
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
        )}
        {activated && video.link && (
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
        <div className="absolute top-3 left-3 flex gap-2">
          {video.language && (
            <Badge variant="outline" className="bg-background/60 backdrop-blur-sm border-border/50 text-xs">
              {video.language}
            </Badge>
          )}
        </div>
        {activated && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); activate(); }}
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
    </div>
  );
};

const SampleVideoLibrarySection = ({ heading, subheading, rankedVideoIds }: Props) => {
  const { videos, loading } = useSampleVideoLibrary();
  const [activeAudioId, setActiveAudioId] = useState<number | null>(null);

  const sorted = useMemo(() => {
    if (rankedVideoIds && rankedVideoIds.length > 0) {
      const rank = new Map(rankedVideoIds.map((id, i) => [id, i]));
      return [...videos].sort((a, b) => {
        const ra = rank.has(a.id) ? (rank.get(a.id) as number) : Number.MAX_SAFE_INTEGER;
        const rb = rank.has(b.id) ? (rank.get(b.id) as number) : Number.MAX_SAFE_INTEGER;
        return ra - rb;
      });
    }
    return [...videos].sort((a, b) => {
      const ca = (a.category || 'Other').trim();
      const cb = (b.category || 'Other').trim();
      return ca.localeCompare(cb);
    });
  }, [videos, rankedVideoIds]);

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
