import React, { createContext, useContext, useEffect, useState } from "react";

export interface VslVariant {
  /** Price in INR, e.g. 299, 199, 999, or 99 */
  price: number;
  /** "₹299", "₹999/mo", etc. */
  priceLabel: string;
  /** Video duration in seconds */
  seconds: number;
  /** Passed to app.zockto.com as ?source= */
  source: string;
  refundNote: string;
  /** Main button text */
  ctaLabel: string;
  /** Button text in the pricing card */
  offerLabel: string;
  // Plan-specific details for ₹999 & custom configurations
  badge?: string;
  creditsLabel?: string;
  unitCostNote?: string;
  featuresTitle?: string;
  features?: string[];
}

const make = (
  price: number,
  seconds: number,
  extra: Partial<VslVariant> = {},
): VslVariant => ({
  price,
  priceLabel: `₹${price}`,
  seconds,
  source: String(price),
  refundNote: "One-time payment · No subscription · 7-day money-back guarantee",
  ctaLabel: "Create My Story Based Ad",
  offerLabel: `Create My First Ad — ₹${price} →`,
  ...extra,
});

export const VSL_VARIANTS: Record<string, VslVariant> = {
  "299": make(299, 30),
  "199": make(199, 30),
  "99": make(99, 15, {
    ctaLabel: "Get Started",
    offerLabel: "Get Started",
    refundNote:
      "One-time payment · No subscription · 7-day money-back guarantee",
  }),
  "999": {
    price: 999,
    priceLabel: "₹999/mo",
    seconds: 30,
    source: "999",
    refundNote: "One-time, 30-day validity · No auto-pay",
    ctaLabel: "Get Started — ₹999/mo →",
    offerLabel: "Get Started — ₹999/mo →",
    badge: "One-time, 30-day validity",
    creditsLabel: "600 credits per month",
    unitCostNote: "₹83 per video • ₹1.67 per credit",
    featuresTitle: "What this gets you",
    features: [
      "Up to 120 seconds of video ads",
      "Up to 12 fully edited video ads",
      "Up to 75 image ads",
      "Up to 600 seconds of AI avatar talking",
      "1080p quality",
      "200 Natural AI Actors",
      "Use your custom avatar",
      "Access to all templates",
      "48 languages",
      "Commercial rights",
    ],
  },
};

const DEFAULT_VARIANT_KEY = "199";
const STORAGE_KEY = "zockto_source";

/** Resolves the initial variant key from URL search query or localStorage. */
const resolveInitialVariantKey = (): string => {
  if (typeof window === "undefined") return DEFAULT_VARIANT_KEY;

  try {
    const params = new URLSearchParams(window.location.search);
    const urlSource = params.get("source");

    if (urlSource && VSL_VARIANTS[urlSource]) {
      localStorage.setItem(STORAGE_KEY, urlSource);
      return urlSource;
    }

    const storedSource = localStorage.getItem(STORAGE_KEY);
    if (storedSource && VSL_VARIANTS[storedSource]) {
      return storedSource;
    }
  } catch {
    // Graceful fallback if localStorage is blocked/unavailable
  }

  return DEFAULT_VARIANT_KEY;
};

const Ctx = createContext<VslVariant | null>(null);

export interface VslVariantProviderProps {
  children: React.ReactNode;
  /** Optional override if you want to hardcode a variant for a specific route */
  value?: VslVariant;
}

export const VslVariantProvider: React.FC<VslVariantProviderProps> = ({
  children,
  value,
}) => {
  const [variant, setVariant] = useState<VslVariant>(
    () => value ?? VSL_VARIANTS[resolveInitialVariantKey()],
  );

  useEffect(() => {
    if (value) {
      setVariant(value);
      return;
    }

    const key = resolveInitialVariantKey();
    if (VSL_VARIANTS[key]) {
      setVariant(VSL_VARIANTS[key]);
    }
  }, [value]);

  return <Ctx.Provider value={variant}>{children}</Ctx.Provider>;
};

/** Variant for VSL components; defaults to the ₹299 offer. */
export const useVslVariant = (): VslVariant =>
  useContext(Ctx) ?? VSL_VARIANTS[DEFAULT_VARIANT_KEY];

/** Raw source (null outside VSL pages) — used by AppLink. */
export const useVslSource = (): string | null =>
  useContext(Ctx)?.source ?? null;
