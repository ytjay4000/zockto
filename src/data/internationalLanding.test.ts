import { test } from "node:test";
import assert from "node:assert/strict";
import { internationalPlans, internationalDemoVideos, isInternationalVisitor } from "./internationalLanding";

test("India keeps its current landing page", () => assert.equal(isInternationalVisitor(true, false), false));
test("confirmed countries outside India get international content", () => assert.equal(isInternationalVisitor(false, false), true));
test("unresolved country does not activate international content", () => assert.equal(isInternationalVisitor(false, true), false));
test("Basic costs 29 euros", () => assert.equal(internationalPlans[0].price, 29));
test("Creator costs 59 euros", () => assert.equal(internationalPlans[1].price, 59));
test("Business costs 447 euros", () => assert.equal(internationalPlans[2].price, 447));
test("international demo selection contains exactly the eleven supplied videos", () => {
  assert.equal(internationalDemoVideos.length, 11);
  assert.equal(new Set(internationalDemoVideos.map(v => v.video)).size, 11);
  assert.equal(internationalDemoVideos[0].video, "https://storages.zockto.com/product_ads_shot_output/8347094d-c6b4-4e09-ba40-fdf07d62cf439423video.mp4");
  assert.equal(internationalDemoVideos[10].video, "https://storages.zockto.com/globalvideo_tempate/food%20supplement%20display.mp4");
});