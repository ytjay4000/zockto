import { createContext, useContext } from "react";

export interface VslVariant {
  /** Price in INR, e.g. 299 or 99 */
  price: number;
  /** "₹299" */
  priceLabel: string;
  /** "30" or "15" (seconds) */
  seconds: number;
  /** Passed to app.zockto.com as ?source= */
  source: string;
  refundNote: string;
  /** Main button text */
  ctaLabel: string;
  /** Button text in the pricing card */
  offerLabel: string;
}

const make = (price: number, seconds: number, extra: Partial<VslVariant> = {}): VslVariant => ({
  price,
  priceLabel: `₹${price}`,
  seconds,
  source: String(price),
  refundNote: `See your ad preview before paying ₹${price}.`,
  ctaLabel: "Create My Story Based Ad",
  offerLabel: `Create My First Ad — ₹${price} →`,
  ...extra,
});

export const VSL_VARIANTS = {
  "299": make(299, 30),
  "99": make(99, 15, {
    ctaLabel: "Get My First Ad for ₹99",
    offerLabel: "Get My First Ad for ₹99",
    refundNote: "One-time payment · No subscription · 7-day money-back guarantee",
  }),
} as const;

const Ctx = createContext<VslVariant | null>(null);

export const VslVariantProvider = Ctx.Provider;

/** Variant for VSL components; defaults to the ₹299 offer. */
export const useVslVariant = () => useContext(Ctx) ?? VSL_VARIANTS["299"];

/** Raw source (null outside VSL pages) — used by AppLink. */
export const useVslSource = () => useContext(Ctx)?.source ?? null;
