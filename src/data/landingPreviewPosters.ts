import problemSolutionPoster from "@/assets/landing/preview-problem-solution.webp";
import customerTestimonialPoster from "@/assets/landing/preview-customer-testimonial.webp";
import storytellingPoster from "@/assets/landing/preview-storytelling.webp";
import localServicePoster from "@/assets/landing/preview-local-service.webp";
import okritoPoster from "@/assets/landing/okrito-finished-ad.webp";

export const okritoAd = {
  video: "https://storages.zockto.com/product-ad-native/f59919a3-42c3-4575-9a36-a0fe2efe3928/bbf0fa3f-08f4-4a41-8f74-e21018993e8e/f2e6a2d4-2161-44e5-9ca9-15ee02294863/final.mp4",
  poster: okritoPoster,
};

// Pair each poster with its exact video so template IDs can be reused safely.
export const indiaDemoPosters: ReadonlyMap<string, string> = new Map([
  [
    "https://storages.zockto.com/product-ad-native/a044807b-d922-44fb-b177-a1a25438270a/fdf2b234-0782-4c02-8a2c-bfea9d18ec93/7d30c489-68fe-4d22-bbe7-d865512533bf/final.mp4",
    problemSolutionPoster,
  ],
  [okritoAd.video, okritoAd.poster],
  [
    "https://storages.zockto.com/product-ad-native/a74579c7-7172-4164-82af-53aa633170f3/514d6630-2723-46cd-bdc1-00d155211dcf/23fbb296-9c0e-489b-a0bd-91451ab8fc05/final.mp4",
    customerTestimonialPoster,
  ],
  [
    "https://storages.zockto.com/product-ad-native/743875ba-c185-4b47-9e34-c338529e10f5/a52771b2-8874-403c-b2b2-2e1b26c6f482/e8237dfd-6f52-4663-9e3c-20a2fe5d4184/final.mp4",
    storytellingPoster,
  ],
  [
    "https://storages.zockto.com/product-ad-native/066912a3-bdbe-45f7-8e28-d713d4f2b851/1c10a2e1-b153-4b76-9b31-ac5c31ff849d/e1a25a9d-5f30-4fb3-9557-6c8738b75b9a/final.mp4",
    localServicePoster,
  ],
]);
