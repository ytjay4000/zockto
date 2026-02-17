import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Loader2 } from 'lucide-react';
import { VideoData } from '@/types/video';
import { Badge } from '@/components/ui/badge';

interface VideoCardProps {
  video: VideoData;
  index: number;
  onExpand: (video: VideoData) => void;
  activeAudioId: string | null;
  onAudioActivate: (id: string | null) => void;
}

const VideoCard = ({ video, index, onExpand, activeAudioId, onAudioActivate }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isMuted = activeAudioId !== video.id;

  // Sync muted state when activeAudioId changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Lazy load video thumbnails using IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isMuted) {
        onAudioActivate(video.id);
        videoRef.current.muted = false;
      } else {
        onAudioActivate(null);
        videoRef.current.muted = true;
      }
    }
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    onExpand(video);
  };

  return (
    <div
      ref={containerRef}
      className="video-card group cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        // Start playing on hover if loaded
        if (videoRef.current && thumbnailLoaded) {
          videoRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (videoRef.current && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }}
      onClick={handlePlayPause}
    >
      <div className="relative aspect-[9/16] bg-muted rounded-xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-300">
        {/* Loading placeholder - only show before thumbnail loads */}
        {!thumbnailLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 z-10">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        )}
        
        {isInView && (
          <video
            ref={videoRef}
            src={`${video.link}#t=0.1`}
            className="w-full h-full object-cover"
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setThumbnailLoaded(true)}
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play button overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ opacity: isHovered && !isPlaying ? 1 : 0 }}
        >
          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow">
            <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
        >
          {/* Category badge */}
          <Badge variant="secondary" className="mb-3 bg-background/80 backdrop-blur-sm">
            {video.category}
          </Badge>

          {/* Control buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayPause}
              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
              )}
            </button>
            <button
              onClick={handleMuteToggle}
              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={handleExpand}
              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors ml-auto"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Language badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-background/60 backdrop-blur-sm border-border/50 text-xs">
            {video.language}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
