import { Suspense, lazy, useEffect } from "react";
import SEO from "@/components/SEO";
import VslHeader from "@/components/vsl/VslHeader";
import VslHero from "@/components/vsl/VslHero";
import VslLogoMarquee from "@/components/vsl/VslLogoMarquee";
import VslTrustStrip from "@/components/vsl/VslTrustStrip";
import VslStorytelling from "@/components/vsl/VslStorytelling";
import VslOldVsNew from "@/components/vsl/VslOldVsNew";
import VslHowItWorks from "@/components/vsl/VslHowItWorks";
import VslWrittenTestimonials from "@/components/vsl/VslWrittenTestimonials";
import VslPerformance from "@/components/vsl/VslPerformance";
import VslOffer from "@/components/vsl/VslOffer";
import VslRiskReversal from "@/components/vsl/VslRiskReversal";
import VslFinalCta from "@/components/vsl/VslFinalCta";
import VslFooter from "@/components/vsl/VslFooter";
import VslWhatsappOptIn from "@/components/vsl/VslWhatsappOptIn";
import VslCta from "@/components/vsl/VslCta";
import { posthog } from "@/lib/posthog";

// Deferred so the hero paints first on mobile connections.
const DemoVideoGrid = lazy(() => import("@/components/demo/DemoVideoGrid"));
const VoiceTestimonialsSection = lazy(() => import("@/components/VoiceTestimonialsSection"));
const UseCaseCards = lazy(() => import("@/components/case-studies/UseCaseCards"));
const VslFaq = lazy(() => import("@/components/vsl/VslFaq"));

const Blank = <div className="py-16" />;

const VSL = () => {
  useEffect(() => {
    posthog.capture("vsl_page_view");
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Turn One Product Photo Into an Ad That Sells | Zockto"
        description="Zockto builds a complete 30sec storytelling video ad — voiceover, music, captions, fully edited — starting at ₹299, ready in 10 minutes."
        path="/vsl"
      />
      <VslHeader />
      <main className="pt-16 md:pt-20">
        <VslHero />
        <VslLogoMarquee />
        <VslTrustStrip />

        <Suspense fallback={Blank}>
          <DemoVideoGrid
            eyebrow="Real ads. Real businesses."
            heading="See What Zockto Actually Creates."
            footer={<VslCta event="primary_cta_click" className="w-full sm:w-auto" />}
          />
        </Suspense>

        <VslStorytelling />
        <VslOldVsNew />
        <VslHowItWorks />

        <Suspense fallback={Blank}>
          <VoiceTestimonialsSection
            eyebrow="Heard from real users"
            heading="Listen to Business Owners Using Zockto."
            sub="Real voices from real businesses. Tap play to listen."
          />
        </Suspense>

        <VslWrittenTestimonials />

        <div className="flex justify-center pb-16 md:pb-20 px-4">
          <VslCta event="primary_cta_click" className="w-full sm:w-auto" />
        </div>

        <VslPerformance />

        <Suspense fallback={Blank}>
          <UseCaseCards heading="What Businesses Use Zockto For" subheading="One product photo, many places to run it." />
        </Suspense>

        <VslOffer />
        <VslRiskReversal />
        <VslWhatsappOptIn />

        <Suspense fallback={Blank}>
          <VslFaq />
        </Suspense>

        <VslFinalCta />
      </main>
      <VslFooter />
    </div>
  );
};

export default VSL;
