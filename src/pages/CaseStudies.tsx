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
import { usePersonalizedCaseStudy, type PersonalizedCopy } from '@/hooks/usePersonalizedCaseStudy';

const defaults: PersonalizedCopy = {
  hero: {
    headline: 'Businesses Like Yours Are Creating AI Ads in Minutes',
    subheadline:
      'No creators. No agencies. No editing team. Just upload your product and generate UGC-style ads instantly.',
    ctaLabel: 'Watch the full video',
  },
  library: {
    heading: 'Real ads from real businesses',
    subheading: 'Browse sample videos by category and hear the audio that converts.',
    categoryOrder: [],
  },
  founder: {
    heading: 'Why We Built Zockto',
    body: "Most small businesses can't afford expensive ad shoots, creators, or agencies. We wanted to make high-quality video ads accessible for everyone.",
  },
  socialProof: {
    heading: 'What customers are saying',
  },
  useCases: {
    heading: 'What Businesses Are Actually Using Zockto For',
    subheading: 'Every channel where your customers scroll, swipe, and buy.',
  },
  finalCta: {
    headline: 'Get your first AI ads live today',
    subheadline: 'Buy credits, generate your first 10 ads, and start testing this week.',
    buttonLabel: 'Buy credits',
    egoTrigger:
      "Still thinking? Other businesses are already using Zockto and seeing 2x more sales on average.",
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
        headline={copy.hero.headline}
        subheadline={copy.hero.subheadline}
        ctaLabel={copy.hero.ctaLabel}
        onCtaClick={scrollToLibrary}
      />

      <div ref={libraryRef}>
        <SampleVideoLibrarySection
          heading={copy.library.heading}
          subheading={copy.library.subheading}
          categoryOrder={copy.library.categoryOrder}
        />
      </div>

      <FounderSection heading={copy.founder.heading} body={copy.founder.body} />

      <section className="pt-4">
        <div className="container px-4 text-center mb-2">
          <h2 className="font-display text-2xl md:text-4xl font-bold">{copy.socialProof.heading}</h2>
        </div>
      </section>
      <VoiceTestimonialsSection />
      <BeforeAfterBlock />
      <TestimonialsSection />

      <UseCaseCards heading={copy.useCases.heading} subheading={copy.useCases.subheading} />

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
