import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface SampleVideo {
  id: number;
  link: string | null;
  category: string | null;
  language: string | null;
  description: string | null;
  type: string | null;
  duration: number | null;
  country: string | null;
}

export const useSampleVideoLibrary = () => {
  const [videos, setVideos] = useState<SampleVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from('sample_video_libaray')
        .select('id, link, category, language, description, type, duration, country')
        .not('link', 'is', null);
      if (cancelled) return;
      if (error) {
        console.error('sample video library fetch error', error);
        setVideos([]);
      } else {
        setVideos((data ?? []) as SampleVideo[]);
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { videos, loading };
};
