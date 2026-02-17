import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useVideos } from '@/hooks/useVideos';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';
import CategoryFilter from './CategoryFilter';
import { VideoData } from '@/types/video';
import { Button } from '@/components/ui/button';

const VideoGallery = () => {
  const { videos, categories, selectedCategory, setSelectedCategory, loading, error } = useVideos();
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [displayCount, setDisplayCount] = useState(12);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

  const displayedVideos = videos.slice(0, displayCount);
  const hasMore = videos.length > displayCount;

  if (error) {
    return (
      <section className="py-20">
        <div className="container px-4 text-center">
          <p className="text-destructive">Failed to load videos. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="demos" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 gradient-glow opacity-50" />

      <div className="container px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Demo Videos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our collection of AI-generated UGC videos across different categories and styles.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </motion.div>

        {/* Loading state */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            {/* Video grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {displayedVideos.map((video, index) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  index={index}
                  onExpand={(v) => { setActiveAudioId(null); setSelectedVideo(v); }}
                  activeAudioId={activeAudioId}
                  onAudioActivate={setActiveAudioId}
                />
              ))}
            </div>

            {/* Load more */}
            {hasMore && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setDisplayCount(prev => prev + 12)}
                >
                  Load More Videos
                </Button>
              </motion.div>
            )}

            {/* Empty state */}
            {videos.length === 0 && !loading && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No videos found in this category.</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Video modal */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
};

export default VideoGallery;
