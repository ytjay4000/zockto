import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import VoiceTestimonialsSection from '@/components/VoiceTestimonialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSection from '@/components/case-studies/HeroSection';
import SampleVideoLibrarySection from '@/components/case-studies/SampleVideoLibrarySection';
import FounderSection from '@/components/case-studies/FounderSection';
import BeforeAfterBlock from '@/components/case-studies/BeforeAfterBlock';
import UseCaseCards from '@/components/case-studies/UseCaseCards';
import FinalCtaSection from '@/components/case-studies/FinalCtaSection';
import ValueBreakdownSection from '@/components/case-studies/ValueBreakdownSection';
import InlineCtaBanner from '@/components/case-studies/InlineCtaBanner';
import { usePersonalizedCaseStudy, type PersonalizedCopy } from '@/hooks/usePersonalizedCaseStudy';

const defaults: PersonalizedCopy = {
  hero: {
    headline: 'You just saw 4 seconds. Imagine the full 30-second ad running for your brand.',
    subheadline:
      "Your sample is only a tiny preview. Real Zockto ads are 15–60 seconds, 1080p, with full scripts, hooks and CTAs — already running for thousands of small businesses like yours.",
    ctaLabel: 'See real ads businesses are running',
  },
  library: {
    heading: "Don't take our word for it — watch real ads from real businesses",
    subheading:
      'Every video below was generated on Zockto by a small business owner just like you. Different categories, different countries, same tool you just used.',
    rankedVideoIds: [],
  },
  founder: {
    heading: "We built Zockto because ad creators were eating small businesses alive",
    body:
      "₹20,000 for one video. Two-week waits. Endless revisions. Most small brands can't play that game — so they stay invisible. Zockto exists so a one-person business in Jaipur or Jakarta can ship ads that look like a Mumbai agency made them, in 10 minutes, for the price of a chai run.",
  },
  socialProof: {
    heading: 'Hear what others say about us',
  },
  useCases: {
    heading: 'What businesses are actually using Zockto for',
    subheading: 'Every channel where your customers scroll, swipe, and buy — covered.',
  },
  finalCta: {
    headline: 'Start at just ₹999 — get 8 to 10 full ad videos this week',
    subheadline:
      "That's roughly ₹100–₹125 per finished ad. One agency invoice = a full year on Zockto. No contracts, regenerate as many times as you want.",
    buttonLabel: 'Buy credits & start creating',
    egoTrigger:
      "Other small businesses like yours are already shipping ads daily with Zockto. Don't let your competitor's feed out-pace yours.",
  },
};

const merge = (override: PersonalizedCopy | null): PersonalizedCopy => {
  if (!override) return defaults;
  return {
    hero: { ...defaults.hero, ...(override.hero ?? {}) },
    library: { ...defaults.library, ...(override.library ?? {}) },
    founder: { ...defaults.founder, ...(override.founder ?? {}) },
    socialProof: { ...defaults.socialProof, ...(override.socialProof ?? {}) },
    useCases: { ...defaults.useCases, ...(override.useCases ?? {}) },
    finalCta: { ...defaults.finalCta, ...(override.finalCta ?? {}) },
  };
};

const CaseStudies = () => {
  const { copy: personalisedCopy } = usePersonalizedCaseStudy();
  const copy = merge(personalisedCopy);
  const libraryRef = useRef<HTMLDivElement>(null);

  const scrollToLibrary = () => {
    libraryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Customer Case Studies & Real AI Ad Results | Zockto"
        description="See real businesses creating Meta and Instagram ads with Zockto AI — sample videos, before/after stories, and the use cases brands actually run."
        path="/case-studies"
      />
      <Navbar />

      <HeroSection
        headline={defaults.hero.headline}
        subheadline={defaults.hero.subheadline}
        ctaLabel={defaults.hero.ctaLabel}
        onCtaClick={scrollToLibrary}
      />

      <div ref={libraryRef}>
        <SampleVideoLibrarySection
          heading={copy.library.heading}
          subheading={copy.library.subheading}
          rankedVideoIds={copy.library.rankedVideoIds}
        />
      </div>

      <InlineCtaBanner
        eyebrow="Ready when you are"
        headline="Like what you see? Start shipping ads from ₹999"
        subheadline="8–10 full ad videos a month — roughly ₹100–₹125 per finished ad."
        buttonLabel="Buy credits"
      />

      <FounderSection heading={copy.founder.heading} body={copy.founder.body} />

      <section className="pt-4">
        <div className="container px-4 text-center mb-2">
          <h2 className="font-display text-2xl md:text-4xl font-bold">{copy.socialProof.heading}</h2>
        </div>
      </section>
      <VoiceTestimonialsSection />
      <BeforeAfterBlock />
      <TestimonialsSection />

      <InlineCtaBanner
        variant="amber"
        eyebrow="Join them today"
        headline="Your competitors are already running AI ads daily"
        subheadline="Grab credits and ship your first full-length ad in the next 10 minutes."
        buttonLabel="Buy credits now"
      />

      <UseCaseCards heading={copy.useCases.heading} subheading={copy.useCases.subheading} />

      <ValueBreakdownSection />

      <FinalCtaSection
        headline={copy.finalCta.headline}
        subheadline={copy.finalCta.subheadline}
        buttonLabel={copy.finalCta.buttonLabel}
        egoTrigger={copy.finalCta.egoTrigger}
      />

      <Footer />
    </div>
  );
};

export default CaseStudies;
