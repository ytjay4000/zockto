import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoModal from './VideoModal';
import AppLink from './AppLink';
import { useGeoLocation } from '@/hooks/useGeoLocation';

const VIDEOS_INDIA = [
  { id: '1', link: 'https://storages.zockto.com/product_ads_shot_output/0708f8ad-7601-4c73-89e2-57c18d72f367/6d7ae9c6-a735-4d78-a786-4db70ab42dc61.mp4' },
  { id: '2', link: 'https://storages.zockto.com/product_ads_shot_output/6cf1c3e0-9747-4080-bad4-2a95dd81f280/74bf68d6-28fd-42f1-8e48-2e3f153eba0e1.mp4' },
  { id: '3', link: 'https://storages.zockto.com/demovideosample/video/ea424540-3da1-4a6e-9bf1-d45db7adc3c9/key_1763128653979_8744953.mp4' },
  { id: '4', link: 'https://storages.zockto.com/product_ads_shot_output/0f5815f0-5465-4aaf-91b3-229196cd242b/2ae66c3b-44e3-48b5-a93b-2467b5ce14ec1.mp4' },
  { id: '5', link: 'https://storages.zockto.com/product_ads_shot_output/0f5815f0-5465-4aaf-91b3-229196cd242b/8d992d7c-078f-48b5-b06f-6f1fc07b6a0f1.mp4' },
  { id: '6', link: 'https://storages.zockto.com/product_ads_shot_output/0f5815f0-5465-4aaf-91b3-229196cd242b/3009ae18-8917-4875-9b44-0a8c3dd90a0c1.mp4' },
  { id: '7', link: 'https://storages.zockto.com/product_ads_shot_output/0f5815f0-5465-4aaf-91b3-229196cd242b/f9861123-c191-4fe3-a3de-aec6b1c93afe1.mp4' },
  { id: '8', link: 'https://storages.zockto.com/product_ads_shot_output/2a2be4cf-0028-4c18-801b-ef750e0c0be4/e467e9b3-fc62-42db-b645-4b3a6e5b88ba1.mp4' },
];

const VIDEOS_GLOBAL = [
  { id: 'g1', link: 'https://storages.zockto.com/globalvideo_tempate/Product%20Testimonial.mp4' },
  { id: 'g2', link: 'https://storages.zockto.com/globalvideo_tempate/food%20supplement%20display.mp4' },
  { id: 'g3', link: 'https://storages.zockto.com/product_ads_shot_output/6cf1c3e0-9747-4080-bad4-2a95dd81f280/fcd969f0-27cd-4918-b6e5-cf8d4f6c20a61.mp4' },
  { id: 'g4', link: 'https://storages.zockto.com/globalvideo_tempate/Athlete%20Nutrition%20Testimonial.mp4' },
  { id: 'g5', link: 'https://storages.zockto.com/globalvideo_tempate/Gym%20Jewelry%20Testimonial.mp4' },
  { id: 'g6', link: 'https://storages.zockto.com/globalvideo_tempate/Sustainable%20Fitness%20Testimonial.mp4' },
  { id: 'g7', link: 'https://storages.zockto.com/globalvideo_tempate/Men%27s%20Testimonial.mp4' },
  { id: 'g8', link: 'https://storages.zockto.com/globalvideo_tempate/Stackable%20Styling%20Tutorial.mp4' },
];

interface MiniCardProps {
  video: typeof VIDEOS_INDIA[0];
  activeAudioId: string | null;
  onAudioActivate: (id: string | null) => void;
  onExpand: (video: typeof VIDEOS_INDIA[0]) => void;
}

const MiniCard = ({ video, activeAudioId, onAudioActivate, onExpand }: MiniCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activated, setActivated] = useState(false);
  const [inView, setInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMuted = activeAudioId !== video.id;

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  // Lazy-mount video (metadata only) when card enters viewport — gives us a real first-frame thumbnail without loading the whole file
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!activated) {
      setActivated(true);
      // Upgrade preload so playback buffers fast
      try { v.preload = 'auto'; } catch {}
      v.play().then(() => setIsPlaying(true)).catch(() => {});
      return;
    }
    if (isPlaying) {
      v.pause();
      setIsPlaying(false);
    } else {
      v.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative aspect-[9/16] bg-muted rounded-xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-300">
        {inView && (
          <video
            ref={videoRef}
            src={`${video.link}#t=0.1`}
            className="w-full h-full object-cover"
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
          />
        )}

        {/* Play button overlay — shown before/while paused */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={false}
          animate={{ opacity: !isPlaying ? 1 : 0 }}
        >
          <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-glow">
            <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
          </div>
        </motion.div>

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Controls */}
        {activated && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-3"
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); if (videoRef.current) { isPlaying ? videoRef.current.pause() : videoRef.current.play().catch(() => {}); setIsPlaying(!isPlaying); } }}
                className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" fill="currentColor" />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); if (isMuted) { onAudioActivate(video.id); if (videoRef.current) videoRef.current.muted = false; } else { onAudioActivate(null); if (videoRef.current) videoRef.current.muted = true; } }}
                className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onExpand(video); }}
                className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors ml-auto"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const VideoGallery = ({ ctaLabel = "Start Creating" }: { ctaLabel?: string } = {}) => {
  const { isIndia } = useGeoLocation();
  const VIDEOS = isIndia ? VIDEOS_INDIA : VIDEOS_GLOBAL;
  const [selectedVideo, setSelectedVideo] = useState<typeof VIDEOS_INDIA[0] | null>(null);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(VIDEOS[0].id);

  return (
    <section id="demos" className="py-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 gradient-glow opacity-50" />
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {VIDEOS.map((video, index) => (
            <motion.div key={video.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
              <MiniCard video={video} activeAudioId={activeAudioId} onAudioActivate={setActiveAudioId} onExpand={(v) => { setActiveAudioId(null); setSelectedVideo(v); }} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <AppLink>
            <Button variant="hero" size="lg">{ctaLabel}</Button>
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
