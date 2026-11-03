import { test, expect } from "bun:test";
import { internationalPlans, internationalDemoVideos, isInternationalVisitor } from "./internationalLanding";

test("India keeps its current landing page", () => expect(isInternationalVisitor(true, false)).toBe(false));
test("confirmed countries outside India get international content", () => expect(isInternationalVisitor(false, false)).toBe(true));
test("unresolved country does not activate international content", () => expect(isInternationalVisitor(false, true)).toBe(false));
test("Basic costs 29 euros", () => expect(internationalPlans[0].price).toBe(29));
test("Creator costs 59 euros", () => expect(internationalPlans[1].price).toBe(59));
test("Business costs 447 euros", () => expect(internationalPlans[2].price).toBe(447));
test("international demo selection contains exactly the eleven supplied videos", () => {
  expect(internationalDemoVideos).toHaveLength(11);
  expect(new Set(internationalDemoVideos.map(v => v.video)).size).toBe(11);
  expect(internationalDemoVideos[0].video).toBe("https://storages.zockto.com/product_ads_shot_output/8347094d-c6b4-4e09-ba40-fdf07d62cf439423video.mp4");
  expect(internationalDemoVideos[10].video).toBe("https://storages.zockto.com/globalvideo_tempate/food%20supplement%20display.mp4");
});