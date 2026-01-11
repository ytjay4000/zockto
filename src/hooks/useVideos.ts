import { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';
import { VideoData, CategoryFilter } from '@/types/video';

export const useVideos = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/data/videos.csv');
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const videoData = results.data as VideoData[];
            // Filter only video type entries
            const filteredVideos = videoData.filter(v => v.type === 'video' && v.link);
            setVideos(filteredVideos);
            setLoading(false);
          },
          error: (err) => {
            setError(err.message);
            setLoading(false);
          }
        });
      } catch (err) {
        setError('Failed to load videos');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const categories = useMemo(() => {
    const cats = [...new Set(videos.map(v => v.category).filter(Boolean))];
    return ['All', ...cats.sort()];
  }, [videos]);

  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'All') return videos;
    return videos.filter(v => v.category === selectedCategory);
  }, [videos, selectedCategory]);

  return {
    videos: filteredVideos,
    allVideos: videos,
    categories,
    selectedCategory,
    setSelectedCategory,
    loading,
    error,
  };
};
