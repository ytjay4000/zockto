export function captureLeadToken() {
  const params = new URLSearchParams(window.location.search);
  const lead = params.get("lead");
  if (lead) {
    localStorage.setItem("zockto_lead", lead);
    localStorage.setItem("zockto_lead_time", String(Date.now()));
  }

  // Save source if provided in URL (e.g. ?source=999)
  const source = params.get("source");
  if (source) {
    localStorage.setItem("zockto_source", source);
  }
}

export function getAppUrl(path: string = "/product-ad-shot", source?: string | null): string {
  let base = `https://app.zockto.com${path}`;

  // Use passed source or fall back to stored source
  const effectiveSource = source || localStorage.getItem("zockto_source");
  if (effectiveSource) {
    base += `${base.includes("?") ? "&" : "?"}source=${encodeURIComponent(effectiveSource)}`;
  }

  const lead = localStorage.getItem("zockto_lead");
  if (lead) {
    base += `${base.includes("?") ? "&" : "?"}lead=${encodeURIComponent(lead)}`;
  }
  return base;
}
