import { test } from "node:test";
import assert from "node:assert/strict";
import { internationalCurrency, internationalPlans, internationalDemoVideos, internationalFinalDemoId, isInternationalVisitor, shouldShowVoiceTestimonials } from "./internationalLanding";

test("India keeps its current landing page", () => assert.equal(isInternationalVisitor(true, false), false));
test("India keeps voice testimonials", () => assert.equal(shouldShowVoiceTestimonials(isInternationalVisitor(true, false)), true));
test("outside India voice testimonials are hidden", () => assert.equal(shouldShowVoiceTestimonials(isInternationalVisitor(false, false)), false));
test("confirmed countries outside India get international content", () => assert.equal(isInternationalVisitor(false, false), true));
test("unresolved country does not activate international content", () => assert.equal(isInternationalVisitor(false, true), false));
test("international pricing uses US dollars", () => assert.equal(internationalCurrency, "USD"));
test("Starter costs 59 dollars", () => assert.equal(internationalPlans[0].price, 59));
test("Growth costs 79 dollars", () => assert.equal(internationalPlans[1].price, 79));
test("Pro costs 149 dollars", () => assert.equal(internationalPlans[2].price, 149));
test("international demos start with the four supplied styles and end with ID 27", () => {
  assert.deepEqual([...internationalDemoVideos.map(({ id }) => id), internationalFinalDemoId], [60, 61, 62, 63, 27]);
  assert.equal(new Set(internationalDemoVideos.map(({ video }) => video)).size, 4);
  assert.ok(internationalDemoVideos.every(({ video }) => video.startsWith("https://storages.zockto.com/product_ad_video/international/trending/")));
});
