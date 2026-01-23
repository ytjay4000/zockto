import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX, ExternalLink } from 'lucide-react';
import { VideoData } from '@/types/video';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

interface VideoModalProps {
  video: VideoData | null;
  onClose: () => void;
}

const VideoModal = ({ video, onClose }: VideoModalProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (video && videoRef.current) {
      videoRef.current.play();
    }
  }, [video]);

  if (!video) return null;

  // Parse description to get key info
  const descLines = video.description?.split('\n').filter(Boolean) || [];
  const productName = descLines.find(l => l.includes('Product Name'))?.replace(/\*\*/g, '').replace('Product Name:', '').trim();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-auto h-[85vh] max-h-[85vh] bg-card rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video */}
          <div className="relative flex-1 min-h-0 bg-black">
            <video
              ref={videoRef}
              src={video.link}
              className="h-full w-auto max-w-full mx-auto object-contain"
              muted={isMuted}
              loop
              playsInline
              autoPlay
              controls
            />

            {/* Mute toggle */}
            <button
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.muted = !isMuted;
                  setIsMuted(!isMuted);
                }
              }}
              className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Info section */}
          <div className="p-6 bg-card">
            <div className="flex items-center gap-2 mb-3">
              <Badge className="gradient-primary border-0">{video.category}</Badge>
              <Badge variant="outline">{video.language}</Badge>
            </div>
            
            {productName && (
              <h3 className="font-display text-lg font-semibold mb-4">{productName}</h3>
            )}

            <Button variant="hero" className="w-full" asChild>
              <a href="https://app.zockto.com/ugc-ads" target="_blank" rel="noopener noreferrer">
                Create Videos Like This
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
