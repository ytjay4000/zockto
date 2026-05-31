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

  const grouped = useMemo(() => {
    const map = new Map<string, SampleVideo[]>();
    videos.forEach((v) => {
      const cat = (v.category || 'Other').trim();
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(v);
    });
    const keys = Array.from(map.keys());
    const norm = (s: string) => s.toLowerCase().trim();
    if (categoryOrder?.length) {
      const order = categoryOrder.map(norm);
      keys.sort((a, b) => {
        const ia = order.indexOf(norm(a));
        const ib = order.indexOf(norm(b));
        if (ia === -1 && ib === -1) return a.localeCompare(b);
        if (ia === -1) return 1;
        if (ib === -1) return -1;
        return ia - ib;
      });
    } else {
      keys.sort((a, b) => a.localeCompare(b));
    }
    return keys.map((k) => ({ category: k, items: map.get(k)! }));
  }, [videos, categoryOrder]);

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
        ) : grouped.length === 0 ? (
          <p className="text-center text-muted-foreground">No sample videos available yet.</p>
        ) : (
          <div className="space-y-12">
            {grouped.map(({ category, items }) => (
              <div key={category}>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-5 capitalize">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {items.map((v) => (
                    <VideoTile key={v.id} video={v} activeAudioId={activeAudioId} onAudio={setActiveAudioId} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SampleVideoLibrarySection;
