## Plan: Voice Testimonials Section

### Placement
Insert a new `VoiceTestimonialsSection` in `src/pages/Index.tsx` directly **before** the existing `TestimonialsSection` (i.e. after `HowItWorksSection`). This keeps the proven text-marquee social proof and front-loads it with high-trust real client voices.

### Section design (minimal & clear)
- Section heading: "Hear it from our clients" + small subline "Real voices. Real results."
- Responsive grid of cards:
  - Mobile: 1 column
  - sm: 2 columns
  - lg: 4 columns (scales naturally to more cards later)
- Each card (clean, lots of whitespace, rounded-2xl, `gradient-card` + `border-border/50`):
  - Circular headshot (64px) top-left
  - Name (font-display, semibold) + role/business (muted-foreground, small) next to it
  - Short pull-quote (2 lines, `line-clamp-2`) — optional, derived from transcript
  - Audio player row: large circular Play/Pause button (primary gradient) + animated waveform bars + `MM:SS / MM:SS` time
- Subtle "Verified client" check badge under the name for trust

### Playback behavior
- Single React Context (`VoiceTestimonialsProvider`) tracks the currently-playing card id.
- When a card hits Play, it dispatches `setPlayingId(id)`; every other card listens and pauses its `<audio>` element if its id no longer matches.
- Waveform animates only while that card is playing; bars freeze when paused.
- Audio elements use `preload="metadata"` for fast load.
- Tracks Meta Pixel `fbq('trackCustom', 'VoicePlay', { client })` on first play of each card (fits existing pixel setup, optional and non-blocking).

### Data model (easy to extend)
`src/data/voiceTestimonials.ts`:
```ts
export type VoiceTestimonial = {
  id: string;
  name: string;
  role: string;       // e.g. "Founder, Brand Name"
  photo: string;      // /testimonials/<slug>.jpg
  audio: string;      // /testimonials/<slug>.m4a
  quote?: string;     // optional short pull-quote
};
export const voiceTestimonials: VoiceTestimonial[] = [ /* 4 entries */ ];
```
Adding a 5th, 6th, … client later = one entry + 2 files in `public/testimonials/`. No layout changes needed.

### Files to create / modify
1. **Create** `public/testimonials/` and copy:
   - `meetshah.m4a`, `khushi.m4a`, `sriniwasa.m4a`, `tarun.m4a`
   - `meetshah.jpg`, `khushi.jpg`, `sriniwasa.jpg`, `tarun.jpg` (you provide)
2. **Create** `src/data/voiceTestimonials.ts` — data array
3. **Create** `src/components/VoiceTestimonialsSection.tsx` — section + grid
4. **Create** `src/components/VoiceTestimonialCard.tsx` — single card (audio + waveform + play state)
5. **Create** `src/context/VoicePlaybackContext.tsx` — single-playing-at-a-time control
6. **Modify** `src/pages/Index.tsx` — render `<VoiceTestimonialsSection />` before `<TestimonialsSection />`

### Blocker — I need two things from you
I tried to transcribe the 4 voice notes inside the sandbox but no transcription API is available here, so I cannot extract names/businesses/quotes from the audio myself. Please share **either**:

**Option A (preferred — fastest):** reply with the following for each of the 4 clients, and attach a square headshot image:
- Full name
- Role / business name (e.g. "Founder, Acme Skincare")
- Optional one-line pull-quote (2 lines max). If skipped, the card will just show name + role + audio.

**Option B:** add an `ELEVENLABS_API_KEY` to project secrets and I will transcribe the 4 clips during implementation, draft pull-quotes from the transcripts, and still ask you for the headshots + business names (since the audio likely won't include a verified business URL).

Once I have the photos + names/roles, I'll implement everything in one pass.
