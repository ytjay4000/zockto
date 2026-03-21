

## Plan: Install Meta Pixel & Track Lead Events

### Current State
- No Meta Pixel is currently installed (no `fbq` references in the codebase).
- All "Get Started" / CTA buttons use the `AppLink` component, which calls `window.open()` on click.
- There are ~7 places using `AppLink` (Navbar, Hero, CTASection, PricingSection, Footer, VideoGallery).

### Changes

#### 1. Add Meta Pixel base code to `index.html`
Insert the standard Meta Pixel snippet (ID: `1671282827362523`) in the `<head>` section, right after GTM. This loads the pixel on all pages with `PageView` tracking.

#### 2. Update `AppLink.tsx` to fire `fbq('track', 'Lead')` before redirect
Modify the `handleClick` function to:
1. Prevent default
2. Call `fbq('track', 'Lead')` (with a type-safe `window.fbq` declaration)
3. Wait 300ms via `setTimeout` before calling `window.open()`

This ensures all CTA buttons across the site (Hero, Navbar, CTA Section, Pricing, Footer, VideoGallery) automatically fire the Lead event before redirecting, with no duplication.

#### 3. Add `BlogCTA` tracking
The blog CTA component (`BlogCTA.tsx`) uses a plain `<a>` tag instead of `AppLink`. Update it to also fire `fbq('track', 'Lead')` with a 300ms delay before navigation.

#### 4. Add TypeScript declaration for `fbq`
Add a global type declaration for `window.fbq` to avoid TS errors.

### Files to modify
- `index.html` — add pixel snippet
- `src/components/AppLink.tsx` — add Lead event + delay
- `src/components/blog/BlogCTA.tsx` — add Lead event + delay
- `src/vite-env.d.ts` — add `fbq` type declaration

