import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { posthog } from '@/lib/posthog';

const identifyInPostHog = (userId: string | null, email: string | null, videoInfo: Record<string, unknown> | null) => {
  if (!userId) return;
  try {
    posthog.identify(userId, {
      ...(email ? { email } : {}),
      ...(videoInfo ?? {}),
      source: 'case-studies-video-id',
    });
  } catch (e) {
    console.error('posthog identify failed', e);
  }
};

export interface PersonalizedCopy {
  hero: { headline: string; subheadline: string; ctaLabel: string };
  library: { heading: string; subheading: string; rankedVideoIds: number[] };
  founder: { heading: string; body: string };
  socialProof: { heading: string };
  useCases: { heading: string; subheading: string };
  finalCta: { headline: string; subheadline: string; buttonLabel: string; egoTrigger: string };
}

export interface PersonalizationResult {
  personalized: boolean;
  copy: PersonalizedCopy | null;
  videoInfo: Record<string, unknown> | null;
  loading: boolean;
}

const CACHE_PREFIX = 'cs_personalize_v1_';

export const usePersonalizedCaseStudy = (): PersonalizationResult => {
  const [params] = useSearchParams();
  const videoId = params.get('video_id');
  const [state, setState] = useState<PersonalizationResult>({
    personalized: false,
    copy: null,
    videoInfo: null,
    loading: !!videoId,
  });

  useEffect(() => {
    if (!videoId) {
      setState({ personalized: false, copy: null, videoInfo: null, loading: false });
      return;
    }

    const cacheKey = CACHE_PREFIX + videoId;
    try {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        identifyInPostHog(parsed.user_id ?? null, parsed.user_email ?? null, parsed.video_info ?? null);
        setState({
          personalized: !!parsed.personalized,
          copy: parsed.copy ?? null,
          videoInfo: parsed.video_info ?? null,
          loading: false,
        });
        return;
      }
    } catch {}

    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke('personalize-case-study', {
          body: { video_id: videoId },
        });
        if (cancelled) return;
        if (error) throw error;
        try {
          sessionStorage.setItem(cacheKey, JSON.stringify(data));
        } catch {}
        identifyInPostHog(data?.user_id ?? null, data?.user_email ?? null, data?.video_info ?? null);
        setState({
          personalized: !!data?.personalized,
          copy: data?.copy ?? null,
          videoInfo: data?.video_info ?? null,
          loading: false,
        });
      } catch (e) {
        console.error('personalize fetch failed', e);
        if (!cancelled) setState({ personalized: false, copy: null, videoInfo: null, loading: false });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [videoId]);

  return state;
};
