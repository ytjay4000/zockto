import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Loader2 } from 'lucide-react';
import { VideoData } from '@/types/video';
import { Badge } from '@/components/ui/badge';

interface VideoCardProps {
  video: VideoData;
  index: number;
  onExpand: (video: VideoData) => void;
}

const VideoCard = ({ video, index, onExpand }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Start loading video on first interaction (hover or click)
  const handleStartLoading = () => {
    if (!shouldLoadVideo) {
      setShouldLoadVideo(true);
      setIsLoading(true);
    }
  };

  const handlePlayPause = () => {
    handleStartLoading();
    
    if (videoRef.current && isLoaded) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-play when video is loaded after user interaction
  useEffect(() => {
    if (isLoaded && videoRef.current && isHovered && !isPlaying) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay may be blocked
      });
    }
  }, [isLoaded, isHovered]);

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    onExpand(video);
  };

  // Extract first sentence of description for display
  const shortDescription = video.description
    ?.split('\n')[0]
    ?.replace(/\*\*/g, '')
    ?.slice(0, 100) || '';

  return (
    <div
      ref={containerRef}
      className="video-card group cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        handleStartLoading();
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
        {/* Loading/placeholder state - show gradient placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 z-10">
            {isLoading ? (
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            ) : (
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow opacity-80">
                <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            )}
          </div>
        )}
        
        {shouldLoadVideo && (
          <video
            ref={videoRef}
            src={video.link}
            className="w-full h-full object-cover"
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            onLoadedData={() => {
              setIsLoaded(true);
              setIsLoading(false);
            }}
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
