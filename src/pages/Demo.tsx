import { useReducedMotion } from "framer-motion";
import StudioPageLayout from "@/components/landing/StudioPageLayout";
import SEO from "@/components/SEO";
import VoiceTestimonialsSection from "@/components/VoiceTestimonialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DemoHero from "@/components/demo/DemoHero";
import DemoVideoGrid from "@/components/demo/DemoVideoGrid";
import ValueBreakdownSection from "@/components/case-studies/ValueBreakdownSection";
import BeforeAfterBlock from "@/components/case-studies/BeforeAfterBlock";
import UseCaseCards from "@/components/case-studies/UseCaseCards";
import InlineCtaBanner from "@/components/case-studies/InlineCtaBanner";

const Demo = () => {
  const reduced = useReducedMotion();
  const scrollToGrid = () =>
    document.getElementById("demo-videos")?.scrollIntoView({
      behavior: reduced ? "instant" : "smooth",
      block: "start",
    });

  return (
    <StudioPageLayout className="studio-demo-page">
      <SEO
        title="Zockto Demo — Watch Real AI UGC Ad Samples"
        description="Watch 50+ real AI-generated UGC video ads created with Zockto across skincare, food, apparel, apps and more — in Hinglish, Hindi, English and Gujarati."
        path="/demo"
      />

      <DemoHero onWatchClick={scrollToGrid} />

      <DemoVideoGrid />

      <div className="studio-demo-support">
        <InlineCtaBanner
          variant="amber"
          eyebrow="Like what you just watched?"
          headline="Your product can look exactly like this in 10 minutes"
          subheadline="Start from ₹999 — that's 8–10 full ad videos, roughly ₹100–₹125 each."
          buttonLabel="Buy credits"
        />

        <VoiceTestimonialsSection />
        <TestimonialsSection />

        <ValueBreakdownSection
          heading="Zockto vs hiring an agency — the honest math"
          subheading="You just saw the output quality. Here's what the same quality costs everywhere else."
        />

        <BeforeAfterBlock />

        <UseCaseCards
          heading="What businesses are actually using these videos for"
          subheading="Every channel where your customers scroll, swipe, and buy — covered."
        />

        <InlineCtaBanner
          variant="amber"
          eyebrow="Join them today"
          headline="Start at just ₹999 — get 8 to 10 full ad videos this week"
          subheadline="No contracts, no editors, no waiting. Regenerate as many times as you want."
          buttonLabel="Buy credits"
        />
      </div>
    </StudioPageLayout>
  );
};

export default Demo;
