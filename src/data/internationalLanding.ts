export const isInternationalVisitor = (isIndia: boolean, loading: boolean) => !loading && !isIndia;
export const shouldShowVoiceTestimonials = (international: boolean) => !international;

export const internationalPlans = [
  { id: "basic", name: "Basic Plan", price: 29, credits: 600, videoSeconds: 120, videos: 12, images: 75, avatarSeconds: 600, popular: false },
  { id: "creator", name: "Creator Plan", price: 59, credits: 2400, videoSeconds: 480, videos: 48, images: 300, avatarSeconds: 2400, popular: true },
  { id: "business", name: "Business Plan", price: 447, credits: 25500, videoSeconds: 5100, videos: 510, images: 3187, avatarSeconds: 25500, popular: false },
] as const;

export const internationalFeatures = ["1080p quality", "200 Natural AI Actors", "Use your custom avatar", "Access to all templates", "48 languages", "Commercial rights"];

export const internationalDemoVideos = [
  { id: -1, name: "Product video ad", video: "https://storages.zockto.com/product_ads_shot_output/8347094d-c6b4-4e09-ba40-fdf07d62cf439423video.mp4" },
  { id: -2, name: "Quick dry nail tutorial", video: "https://storages.zockto.com/globalvideo_tempate/quick%20dry%20nail%20tutorial.mp4" },
  { id: -3, name: "Cheek color application", video: "https://storages.zockto.com/globalvideo_tempate/cheek%20color%20application%20tutorial.mp4" },
  { id: -4, name: "Bold lip color", video: "https://storages.zockto.com/globalvideo_tempate/Bold%20Lip%20Color%20Tutorial.mp4" },
  { id: -5, name: "Winged eyeliner", video: "https://storages.zockto.com/globalvideo_tempate/Winged%20Eyeliner%20Tutorial.mp4" },
  { id: -6, name: "Stackable styling", video: "https://storages.zockto.com/globalvideo_tempate/Stackable%20Styling%20Tutorial.mp4" },
  { id: -7, name: "Men’s testimonial", video: "https://storages.zockto.com/globalvideo_tempate/Men%27s%20Testimonial.mp4" },
  { id: -8, name: "Gym jewelry testimonial", video: "https://storages.zockto.com/globalvideo_tempate/Gym%20Jewelry%20Testimonial.mp4" },
  { id: -9, name: "Athlete nutrition testimonial", video: "https://storages.zockto.com/globalvideo_tempate/Athlete%20Nutrition%20Testimonial.mp4" },
  { id: -10, name: "Business video ad", video: "https://storages.zockto.com/product_ads_shot_output/6cf1c3e0-9747-4080-bad4-2a95dd81f280/fcd969f0-27cd-4918-b6e5-cf8d4f6c20a61.mp4" },
  { id: -11, name: "Food supplement display", video: "https://storages.zockto.com/globalvideo_tempate/food%20supplement%20display.mp4" },
] as const;