export const isInternationalVisitor = (isIndia: boolean, loading: boolean) => !loading && !isIndia;
export const shouldShowVoiceTestimonials = (international: boolean) => !international;
export const internationalCurrency = "USD";
export const internationalLandingSource = "us";

export const internationalPlans = [
  { id: "basic", name: "Starter", price: 59, videos: 12, images: 75 },
  { id: "creator", name: "Growth", price: 79, videos: 48, images: 300 },
  { id: "business", name: "Pro", price: 149, videos: 170, images: 1062 },
] as const;

export const internationalFeatures = [
  "1080p video support",
  "Custom avatars",
  "All templates",
  "48 languages",
  "Up to 30 seconds per Product Ad Shot",
];

export const lrpInternationalAd = {
  id: 61,
  name: "Customer Testimonial",
  video: "https://storages.zockto.com/product_ad_video/international/trending/la-roche-posay-testimonial-a159edf681e67f3d.mp4",
} as const;

export const internationalDemoVideos = [
  {
    id: 60,
    name: "UGC Style",
    video: "https://storages.zockto.com/product_ad_video/international/trending/tom-ford-perfume-ugc-1c13337ca6bd6e99.mp4",
  },
  lrpInternationalAd,
  {
    id: 62,
    name: "Problem Solution",
    video: "https://storages.zockto.com/product_ad_video/international/trending/sioris-glass-skin-d2ea3a202efff747.mp4",
  },
  {
    id: 63,
    name: "Storytelling Ad",
    video: "https://storages.zockto.com/product_ad_video/international/trending/rage-sunglasses-story-96b83bf0892729fb.mp4",
  },
] as const;

export const internationalFinalDemoId = 27;
