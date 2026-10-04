import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";

const KEY = "zockto_inapp_dismissed";

// Instagram / Facebook in-app WebViews block Google sign-in and can break checkout.
const isInApp = () => typeof navigator !== "undefined" && /instagram|fban|fbav/i.test(navigator.userAgent);
const isIOS = () =>
  /iphone|ipad|ipod/i.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const InAppBrowserPrompt = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isInApp()) return;
    try {
      if (sessionStorage.getItem(KEY)) return;
    } catch {
      /* storage blocked: still show */
    }
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  const openInChrome = () => {
    const { host, pathname, search } = window.location;
    window.location.href = `intent://${host}${pathname}${search}#Intent;scheme=https;package=com.android.chrome;end`;
  };

  const ios = isIOS();

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center p-3 sm:inset-0 sm:items-center sm:p-4 pointer-events-none">
      <div
        role="dialog"
        aria-labelledby="inapp-title"
        className="pointer-events-auto relative w-full max-w-md rounded-3xl border border-border/60 bg-card text-card-foreground shadow-card-hover p-6 animate-in slide-in-from-bottom-4 fade-in duration-300"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted"
        >
          <X className="w-4 h-4" />
        </button>

        <h2 id="inapp-title" className="font-display text-lg font-bold tracking-tight pr-8 mb-2">
          For the best experience, open in your main browser
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          You're viewing this inside Instagram's browser, which can block Google sign-in. Opening this page in
          Chrome/Safari takes 1 click and everything works better.
        </p>

        {ios ? (
          <ol className="space-y-2.5 mb-5 text-sm">
            {["Tap the “•••” menu in the Instagram browser", "Tap “Open in Safari” (or “Open in browser”)"].map(
              (step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ),
            )}
          </ol>
        ) : (
          <div className="mb-4">
            <button
              onClick={openInChrome}
              className="w-full min-h-[48px] rounded-full gradient-primary text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 shadow-glow active:scale-[0.98] transition-transform"
            >
              Open in Chrome <ExternalLink className="w-4 h-4" />
            </button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Or tap ⋮ in Instagram's menu → Open in Chrome.
            </p>
          </div>
        )}

        <button
          onClick={dismiss}
          className="w-full min-h-[44px] rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors"
        >
          Continue here anyway
        </button>
      </div>
    </div>
  );
};

export default InAppBrowserPrompt;
