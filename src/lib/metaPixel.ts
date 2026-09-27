// Meta Pixel helper.
// Every event carries a unique eventID so the same event can later be sent
// server-side via the Conversions API and deduplicated by Meta.

type Params = Record<string, unknown>;

const uuid = (): string => {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
      const b = crypto.getRandomValues(new Uint8Array(16));
      b[6] = (b[6] & 0x0f) | 0x40;
      b[8] = (b[8] & 0x3f) | 0x80;
      const hex = Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
      return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    }
  } catch {
    /* fall through */
  }
  return `evt-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const send = (method: 'track' | 'trackCustom', name: string, params: Params = {}): string => {
  const eventID = uuid();
  try {
    const fbq = typeof window !== 'undefined' ? window.fbq : undefined;
    if (typeof fbq === 'function') {
      fbq(method, name, params, { eventID });
    }
  } catch {
    /* never break the page for analytics */
  }
  return eventID;
};

/** Standard Meta event (ViewContent, Lead, Purchase...). Returns the eventID. */
export const trackMetaEvent = (name: string, params?: Params) => send('track', name, params);

/** Custom Meta event (VSLVideoPlay, VSLOfferClick...). Returns the eventID. */
export const trackMetaCustomEvent = (name: string, params?: Params) => send('trackCustom', name, params);
