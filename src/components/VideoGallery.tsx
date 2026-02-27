import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoModal from './VideoModal';
import AppLink from './AppLink';

const VIDEOS = [
  { id: '1', link: 'https://storages.zockto.com/product_ads_shot_output/0708f8ad-7601-4c73-89e2-57c18d72f367/6d7ae9c6-a735-4d78-a786-4db70ab42dc61.mp4' },
  { id: '2', link: 'https://storages.zockto.com/product_ads_shot_output/6cf1c3e0-9747-4080-bad4-2a95dd81f280/74bf68d6-28fd-42f1-8e48-2e3f153eba0e1.mp4' },
  { id: '3', link: 'https://storages.zockto.com/product_ads_shot_output/6cf1c3e0-9747-4080-bad4-2a95dd81f280/b18de9b2-9950-4d9d-8e5e-56a2430f838b1.mp4' },
  { id: '4', link: 'https://storages.zockto.com/product_ads_shot_output/0708f8ad-7601-4c73-89e2-57c18d72f367/08f72cfd-a1e0-4fef-b9f9-0095bd0610691.mp4' },
  { id: '5', link: 'https://storages.zockto.com/product_ads_shot_output/6cf1c3e0-9747-4080-bad4-2a95dd81f280/7e0c086d-3c4d-44c8-9366-f22b947a253a1.mp4' },
  { id: '6', link: 'https://storages.zockto.com/product_ads_shot_output/6cf1c3e0-9747-4080-bad4-2a95dd81f280/979b835b-1997-49ac-b84c-eb34a2b8a84c1.mp4' },
];

interface MiniCardProps {
  video: typeof VIDEOS[0];
  activeAudioId: string | null;
  onAudioActivate: (id: string | null) => void;
  onExpand: (video: typeof VIDEOS[0]) => void;
}

const MiniCard = ({ video, activeAudioId, onAudioActivate, onExpand }: MiniCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMuted = activeAudioId !== video.id;

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsInView(true); obs.disconnect(); } }, { rootMargin: '200px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="group cursor-pointer"
      onMouseEnter={() => { setIsHovered(true); if (videoRef.current && loaded) { videoRef.current.play().catch(() => {}); setIsPlaying(true); } }}
      onMouseLeave={() => { setIsHovered(false); if (videoRef.current && isPlaying) { videoRef.current.pause(); setIsPlaying(false); } }}
      onClick={() => { if (videoRef.current) { isPlaying ? videoRef.current.pause() : videoRef.current.play().catch(() => {}); setIsPlaying(!isPlaying); } }}
    >
      <div className="relative aspect-[9/16] bg-muted rounded-xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-300">
        {!loaded && <div className="absolute inset-0 flex items-center justify-center bg-muted z-10"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>}
        {isInView && (
          <video ref={videoRef} src={`${video.link}#t=0.1`} className="w-full h-full object-cover" muted={isMuted} loop playsInline preload="auto" onLoadedData={() => setLoaded(true)} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div className="absolute inset-0 flex items-center justify-center" initial={false} animate={{ opacity: isHovered && !isPlaying ? 1 : 0 }}>
          <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-glow">
            <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
          </div>
        </motion.div>
        <motion.div className="absolute bottom-0 left-0 right-0 p-3" initial={false} animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }} transition={{ duration: 0.2 }}>
          <div className="flex items-center gap-2">
            <button onClick={(e) => { e.stopPropagation(); if (videoRef.current) { isPlaying ? videoRef.current.pause() : videoRef.current.play().catch(() => {}); setIsPlaying(!isPlaying); } }} className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" fill="currentColor" />}
            </button>
            <button onClick={(e) => { e.stopPropagation(); if (isMuted) { onAudioActivate(video.id); if (videoRef.current) videoRef.current.muted = false; } else { onAudioActivate(null); if (videoRef.current) videoRef.current.muted = true; } }} className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button onClick={(e) => { e.stopPropagation(); onExpand(video); }} className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors ml-auto">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof VIDEOS[0] | null>(null);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(VIDEOS[0].id);

  return (
    <section id="demos" className="py-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 gradient-glow opacity-50" />
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {VIDEOS.map((video, index) => (
            <motion.div key={video.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
              <MiniCard video={video} activeAudioId={activeAudioId} onAudioActivate={setActiveAudioId} onExpand={(v) => { setActiveAudioId(null); setSelectedVideo(v); }} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <AppLink>
            <Button variant="hero" size="lg">Start for Free</Button>
          </AppLink>
        </motion.div>
      </div>

      {selectedVideo && (
        <VideoModal
          video={{ id: selectedVideo.id, link: selectedVideo.link, created_at: '', category: '', language: '', description: '', type: 'video' }}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
};

export default VideoGallery;
