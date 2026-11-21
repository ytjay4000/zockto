import { test } from "node:test";
import assert from "node:assert/strict";
import { internationalCurrency, internationalPlans, internationalDemoVideos, isInternationalVisitor, shouldShowVoiceTestimonials } from "./internationalLanding";

test("India keeps its current landing page", () => assert.equal(isInternationalVisitor(true, false), false));
test("India keeps voice testimonials", () => assert.equal(shouldShowVoiceTestimonials(isInternationalVisitor(true, false)), true));
test("outside India voice testimonials are hidden", () => assert.equal(shouldShowVoiceTestimonials(isInternationalVisitor(false, false)), false));
test("confirmed countries outside India get international content", () => assert.equal(isInternationalVisitor(false, false), true));
test("unresolved country does not activate international content", () => assert.equal(isInternationalVisitor(false, true), false));
test("international pricing uses US dollars", () => assert.equal(internationalCurrency, "USD"));
test("Basic costs 59 dollars", () => assert.equal(internationalPlans[0].price, 59));
test("Creator costs 79 dollars", () => assert.equal(internationalPlans[1].price, 79));
test("Business costs 149 dollars", () => assert.equal(internationalPlans[2].price, 149));
test("international demo selection contains exactly the eleven supplied videos", () => {
  assert.equal(internationalDemoVideos.length, 11);
  assert.equal(new Set(internationalDemoVideos.map(v => v.video)).size, 11);
  assert.equal(internationalDemoVideos[0].video, "https://storages.zockto.com/product_ads_shot_output/8347094d-c6b4-4e09-ba40-fdf07d62cf439423video.mp4");
  assert.equal(internationalDemoVideos[10].video, "https://storages.zockto.com/globalvideo_tempate/food%20supplement%20display.mp4");
});