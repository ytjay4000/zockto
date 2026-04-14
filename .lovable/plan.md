

## Plan: Geo-Based Content (Pricing + Demo Videos)

### Approach
Use a free IP geolocation API (e.g., `https://ipapi.co/json/`) to detect if the user is in India. Create a shared React context/hook (`useGeoLocation`) that caches the result and exposes an `isIndia` boolean. Both `PricingSection` and `VideoGallery` will consume this hook to show region-appropriate content.

### New File: `src/hooks/useGeoLocation.ts`
- On mount, fetch `https://ipapi.co/json/` (free, no key needed)
- Parse `country_code`, set `isIndia = country_code === 'IN'`
- Cache in `localStorage` to avoid repeated API calls
- Default to India (`true`) while loading or on error (safe fallback for existing users)

### Changes to `src/components/PricingSection.tsx`
- Import `useGeoLocation`
- Define two plan arrays: current INR plans (unchanged) and new USD plans:
  - Basic: $39/mo, $31/mo annual ($372/yr)
  - Creator: $99/mo, $79/mo annual ($948/yr)  
  - Business: $399/mo, $319/mo annual ($3,828/yr)
  - Same credits, features, and whatYouGet as INR plans
- Swap currency symbol (`₹` vs `$`) and plan prices based on `isIndia`

### Changes to `src/components/VideoGallery.tsx`
- Import `useGeoLocation`
- Define `VIDEOS_INDIA` (current 8 videos) and `VIDEOS_GLOBAL` (the 8 new URLs provided)
- Select video array based on `isIndia`

### Files to create/modify
1. **Create** `src/hooks/useGeoLocation.ts` — geo detection hook
2. **Modify** `src/components/PricingSection.tsx` — dual pricing
3. **Modify** `src/components/VideoGallery.tsx` — dual video sets

