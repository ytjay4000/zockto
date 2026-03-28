/**
 * Capture lead token from URL and store in localStorage.
 * Call this on app initialization.
 */
export function captureLeadToken() {
  const params = new URLSearchParams(window.location.search);
  const lead = params.get("lead");
  if (lead) {
    localStorage.setItem("zockto_lead", lead);
    localStorage.setItem("zockto_lead_time", String(Date.now()));
  }
}

/**
 * Get the app.zockto.com URL with lead token appended if available.
 */
export function getAppUrl(path: string = "/ugc-ads"): string {
  const base = `https://app.zockto.com${path}`;
  const lead = localStorage.getItem("zockto_lead");
  if (lead) {
    const separator = base.includes("?") ? "&" : "?";
    return `${base}${separator}lead=${encodeURIComponent(lead)}`;
  }
  return base;
}
