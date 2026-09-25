import { useEffect } from 'react';
import SEO from '@/components/SEO';
import DemoVideoGrid from '@/components/demo/DemoVideoGrid';
import VoiceTestimonialsSection from '@/components/VoiceTestimonialsSection';
import UseCaseCards from '@/components/case-studies/UseCaseCards';
import VslHeader from '@/components/vsl/VslHeader';
import VslHero from '@/components/vsl/VslHero';
import VslTrustStrip from '@/components/vsl/VslTrustStrip';
import VslStorytelling from '@/components/vsl/VslStorytelling';
import VslOldVsNew from '@/components/vsl/VslOldVsNew';
import VslHowItWorks from '@/components/vsl/VslHowItWorks';
import VslWrittenTestimonials from '@/components/vsl/VslWrittenTestimonials';
import VslPerformance from '@/components/vsl/VslPerformance';
import VslOffer from '@/components/vsl/VslOffer';
import VslRiskReversal from '@/components/vsl/VslRiskReversal';
import VslFaq from '@/components/vsl/VslFaq';
import VslFinalCta from '@/components/vsl/VslFinalCta';
import VslFooter from '@/components/vsl/VslFooter';
import VslStickyCta from '@/components/vsl/VslStickyCta';
import VslCta from '@/components/vsl/VslCta';
import { posthog } from '@/lib/posthog';

const VSL = () => {
  useEffect(() => {
    posthog.capture('vsl_page_view');
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Try Your First AI Video Ad for ₹299 | Zockto"
        description="Stop paying ₹10,000–₹15,000 for a single video ad. Upload one product photo and get a complete storytelling-based video ad with Zockto — starting at ₹299."
      />
      <VslHeader />
      <main className="pt-16 md:pt-20">
        <VslHero />
        <VslTrustStrip />

        <DemoVideoGrid
          eyebrow="Real ads. Real businesses."
          heading="See What Zockto Actually Creates."
          sub="Every video below was generated on Zockto by a real business — skincare, food, apparel, apps and more, in Hinglish, Hindi, English and Gujarati."
          footer={<VslCta event="primary_cta_click" label="Create My First Ad for ₹299" className="w-full sm:w-auto" />}
        />

        <VslStorytelling />
        <VslOldVsNew />
        <VslHowItWorks />

        <VoiceTestimonialsSection
          eyebrow="Heard from real users"
          heading="Listen to Business Owners Using Zockto."
          sub="Real voices from real businesses. Tap play to listen."
        />

        <VslWrittenTestimonials />
        <VslPerformance />
        <UseCaseCards />
        <VslOffer />
        <VslRiskReversal />
        <VslFaq />
        <VslFinalCta />
      </main>
      <VslFooter />
      <VslStickyCta />
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default VSL;
