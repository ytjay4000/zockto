DROP POLICY IF EXISTS "Allow Public Read Access 1uswaj_0" ON storage.objects;
DROP POLICY IF EXISTS "Allow Public Read Access 1uswaj_1" ON storage.objects;
DROP POLICY IF EXISTS "Allow Public Read Access 1uswaj_2" ON storage.objects;
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
CREATE POLICY "Owners can list their creator files" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'creator_files' AND owner_id = (select auth.uid()::text));
DROP POLICY IF EXISTS "Service role can insert verifications" ON public.mobile_verifications;