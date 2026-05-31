ALTER TABLE public.sample_video_libaray ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON public.sample_video_libaray TO anon;
GRANT SELECT ON public.sample_video_libaray TO authenticated;
GRANT ALL ON public.sample_video_libaray TO service_role;

CREATE POLICY "Anyone can view sample videos"
ON public.sample_video_libaray
FOR SELECT
USING (true);