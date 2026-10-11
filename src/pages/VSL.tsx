import { Suspense, lazy, useEffect } from "react";
import SEO from "@/components/SEO";
import VslHeader from "@/components/vsl/VslHeader";
import VslHero from "@/components/vsl/VslHero";
import VslLogoMarquee from "@/components/vsl/VslLogoMarquee";
import VslNoSkills from "@/components/vsl/VslNoSkills";
import VslTrustStrip from "@/components/vsl/VslTrustStrip";
import VslHowItWorks from "@/components/vsl/VslHowItWorks";
import VslWrittenTestimonials from "@/components/vsl/VslWrittenTestimonials";
import VslVideoSection from "@/components/vsl/VslVideoSection";
import VslOffer from "@/components/vsl/VslOffer";
import VslFinalCta from "@/components/vsl/VslFinalCta";
import VslFooter from "@/components/vsl/VslFooter";
import VslWhatsappOptIn from "@/components/vsl/VslWhatsappOptIn";
import VslCta from "@/components/vsl/VslCta";
import VslStickyCta from "@/components/vsl/VslStickyCta";
import { posthog } from "@/lib/posthog";
import { trackMetaEvent } from "@/lib/metaPixel";
import { VSL_VARIANTS, VslVariantProvider } from "@/context/VslVariant";

// Deferred so the hero paints first on mobile connections.
const VoiceTestimonialsSection = lazy(() => import("@/components/VoiceTestimonialsSection"));
const VslFaq = lazy(() => import("@/components/vsl/VslFaq"));

const Blank = <div className="py-16" />;

const VSL = ({ variant = "299" }: { variant?: "299" | "99" }) => {
  const vv = VSL_VARIANTS[variant];
  useEffect(() => {
    posthog.capture("vsl_page_view", { source: vv.source });
    // Meta Pixel: the homepage IS the VSL / sales page.
    trackMetaEvent("ViewContent", { content_name: "VSL homepage" });
  }, [vv.source]);

  return (
    <VslVariantProvider value={vv}>
      <div className="vsl-theme min-h-screen bg-background text-foreground overflow-x-hidden">
        <SEO
          title="Turn 1 Product Photo into a Video Ad that Convert | Zockto"
          description={`No prompting, no script writing, no editing. Upload your product photo and Zockto creates a complete ${vv.seconds}-second video ad with voiceover, music and captions. First ad ${vv.priceLabel}.`}
          path={variant === "99" ? "/" : "/vsl"}
        />
        <VslHeader />
        <main className="pt-16 md:pt-20">
          <VslHero />
          <VslLogoMarquee />
          <VslTrustStrip />

          <VslHowItWorks />
          <VslNoSkills />

          <Suspense fallback={Blank}>
            <VoiceTestimonialsSection
              eyebrow="Heard from real users"
              heading="Listen to Business Owners Using Zockto."
              sub="Real voices from real businesses. Tap play to listen."
            />
          </Suspense>

          <VslWrittenTestimonials />

          <VslVideoSection />
          <VslOffer />

          <Suspense fallback={Blank}>
            <VslFaq />
          </Suspense>

          <VslFinalCta />
        </main>
        <VslFooter />
        {/* Room for the sticky bar so it never covers the footer links on phones. */}
        <div className="h-24 md:hidden" aria-hidden />
        <VslStickyCta />
      </div>
    </VslVariantProvider>
  );
};

export default VSL;
