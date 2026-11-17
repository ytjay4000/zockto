import productVideoAd from "@/assets/global-demo/1.webp";
import quickDryNailTutorial from "@/assets/global-demo/2.webp";
import cheekColorApplication from "@/assets/global-demo/3.webp";
import boldLipColor from "@/assets/global-demo/4.webp";
import wingedEyeliner from "@/assets/global-demo/5.webp";
import stackableStyling from "@/assets/global-demo/6.webp";
import mensTestimonial from "@/assets/global-demo/7.webp";
import gymJewelryTestimonial from "@/assets/global-demo/8.webp";
import athleteNutritionTestimonial from "@/assets/global-demo/9.webp";
import businessVideoAd from "@/assets/global-demo/10.webp";
import foodSupplementDisplay from "@/assets/global-demo/11.webp";
import type { internationalDemoVideos } from "./internationalLanding";

export const internationalDemoPosters = {
  [-1]: productVideoAd,
  [-2]: quickDryNailTutorial,
  [-3]: cheekColorApplication,
  [-4]: boldLipColor,
  [-5]: wingedEyeliner,
  [-6]: stackableStyling,
  [-7]: mensTestimonial,
  [-8]: gymJewelryTestimonial,
  [-9]: athleteNutritionTestimonial,
  [-10]: businessVideoAd,
  [-11]: foodSupplementDisplay,
} satisfies Record<(typeof internationalDemoVideos)[number]["id"], string>;
