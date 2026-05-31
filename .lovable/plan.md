
# Rebuild /case-studies (dynamic + personalised)

Replace the current /case-studies page entirely with a new 6-section layout. When `?video_id=` is present, fetch context from Supabase and personalise copy + content order via the Lovable AI Gateway (Gemini). Existing detail pages under `/case-studies/...` remain untouched.

## Data sources

- `result` table — read `video_info` (jsonb) where `video_id = :video_id` and current user owns the row (RLS already scopes to owner; for public visitors we'll use a server-side edge function with service role to read just `video_info` so unauthenticated visitors can also personalise).
- `sample_video_libaray` table (note the existing spelling) — fetch all rows for Section 2.
  - Currently has **no RLS policies and no GRANT to anon** — needs a small migration to allow public read.

## Sections

1. **Hero** — left: personalised headline + subheadline + "Watch the full video" CTA. Right: hero visual (reuse an existing asset for now).
2. **Sample Video Library** — videos from `sample_video_libaray` grouped by `category`. When personalised, category order comes from Gemini; otherwise alphabetical with user's likely category guesses (geo-based fallback). Each card uses the existing `VideoCard` styling pattern (9:16, hover-play, mute toggle).
3. **Founder / Why We Built Zockto** — static copy + placeholder founder image (user will swap later).
4. **Social Proof** — three stacked blocks:
   - `VoiceTestimonialsSection` (existing)
   - Before/After block — derived synthetically from `testimonials` quote content (paired "before Zockto" vs "after Zockto" cards generated from existing testimonial copy)
   - `TestimonialsSection` (existing written testimonials marquee)
5. **Use Case Cards** — 8 static cards (Instagram ads, Festival offers, Product launches, WhatsApp marketing, Facebook ads, Reels content, Daily posting, Retargeting ads) with icons.
6. **Final CTA** — links to `https://app.zockto.com/buy-credits` (note: this bypasses the standard `AppLink` path-rewrite memory; will hardcode this exact URL per request). Ego-trigger message personalised by Gemini.

## Personalisation flow

Client logic in `CaseStudies.tsx`:

```text
1. read ?video_id from URL
2. if absent → render defaults
3. else → POST { video_id } to edge function `personalize-case-study`
4. edge function:
     - service-role read of result.video_info for that video_id
     - if video_info empty → return { personalized: false }
     - else call Lovable AI Gateway (model: google/gemini-3.1-flash-lite-preview)
       with a JSON-tool-call schema returning:
         {
           hero: { headline, subheadline, ctaLabel },
           library: { heading, subheading, categoryOrder: string[] },
           founder: { heading, body },
           socialProof: { heading },
           useCases: { heading, subheading },
           finalCta: { headline, subheadline, buttonLabel, egoTrigger }
         }
     - return { personalized: true, video_info, copy }
5. client merges copy over defaults; if any field missing, fall back to default.
```

While the request is in flight, render defaults (no skeleton flash) and swap in personalised copy on resolve.

## Files

- `supabase/functions/personalize-case-study/index.ts` — new edge function, `verify_jwt = false`, structured tool-call output.
- `src/hooks/usePersonalizedCaseStudy.ts` — fetches + caches in sessionStorage by video_id.
- `src/hooks/useSampleVideoLibrary.ts` — fetches `sample_video_libaray` rows.
- `src/pages/CaseStudies.tsx` — full rewrite into 6 sections.
- `src/components/case-studies/` (new):
  - `HeroSection.tsx`
  - `SampleVideoLibrarySection.tsx`
  - `FounderSection.tsx`
  - `BeforeAfterBlock.tsx`
  - `UseCaseCards.tsx`
  - `FinalCtaSection.tsx`
- Migration: add SELECT-to-anon RLS policy + GRANT on `sample_video_libaray`.

## Out of scope

- Editing other case study detail pages.
- New imagery for founder section (placeholder used).
- Any change to navbar / footer.
- The case study index grid (9 cards) — removed entirely per scope confirmation. Detail pages remain reachable by direct URL only.

## Defaults (used when no video_id or video_info empty)

- Hero: "Businesses Like Yours Are Creating AI Ads in Minutes" / "No creators. No agencies. No editing team. Just upload your product and generate UGC-style ads instantly."
- Final CTA ego trigger: "Still thinking? Other businesses are already using Zockto and seeing 2x more sales on average."

Approve to proceed — I'll start with the migration, then the edge function, then the page.
