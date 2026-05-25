import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import VoiceTestimonialsSection from '@/components/VoiceTestimonialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQAccordion from '@/components/blog/FAQAccordion';
import AppLink from '@/components/AppLink';
import { Button } from '@/components/ui/button';

type IndexCard = {
  category: string;
  headline: string;
  href: string;
  gradient: string;
};

const indexCards: IndexCard[] = [
  {
    category: 'Performance Marketing',
    headline: 'AI Video Ads Beat UGC and Studio Ads in a Head-to-Head A/B Test',
    href: '/case-studies/ai-vs-traditional-video-ads',
    gradient: 'from-indigo-600 via-blue-600 to-sky-500',
  },
  {
    category: 'Local Services',
    headline: 'How a Carpet Cleaning Franchise Cut Lead Costs by 28% With AI Ads',
    href: '/case-studies/zerorez-local-services',
    gradient: 'from-blue-700 via-indigo-600 to-purple-600',
  },
  {
    category: 'D2C Wellness',
    headline: 'How a Harvard-Founded Longevity Brand Hit $3.89 Cost Per Order With AI Avatar Ads',
    href: '/case-studies/laife-dtc-wellness',
    gradient: 'from-purple-600 via-violet-600 to-indigo-600',
  },
  {
    category: 'Retail',
    headline: 'How a Retail Brand Cut CPMs by 80% and Hit 1.9x ROAS on a Seasonal Promotion',
    href: '/case-studies/house-retail-seasonal',
    gradient: 'from-sky-600 via-blue-600 to-indigo-700',
  },
  {
    category: 'Fashion Ecommerce',
    headline: 'How a Fashion Brand Ships 9 Videos a Day With a 3-Person Team',
    href: '/case-studies/brand-u-fashion',
    gradient: 'from-fuchsia-600 via-purple-600 to-blue-700',
  },
  {
    category: 'Research · Performance Data',
    headline: 'Nielsen Study: AI Ad Creatives Delivered 2.1x Higher CTR Than Manual',
    href: '/case-studies/nielsen-ai-creatives-ctr-study',
    gradient: 'from-blue-600 via-cyan-600 to-teal-500',
  },
  {
    category: 'Research · ROAS Data',
    headline: 'Forrester: Enterprise Brands Using AI Creatives Saw a 45–58% ROAS Lift',
    href: '/case-studies/forrester-ai-roas-research',
    gradient: 'from-indigo-700 via-purple-700 to-fuchsia-600',
  },
  {
    category: 'Research · Creative Prediction',
    headline: 'Adobe Firefly: AI Predicts Winning Ads With 93.4% Accuracy',
    href: '/case-studies/adobe-firefly-prediction-benchmark',
    gradient: 'from-violet-700 via-indigo-600 to-blue-600',
  },
  {
    category: 'Research · Customer Experience',
    headline: 'Personalized AI Video Ads Hit 28% CTR vs 15% for Traditional',
    href: '/case-studies/customerthink-personalized-ai-ctr',
    gradient: 'from-purple-700 via-pink-600 to-rose-500',
  },
];

const faqs = [
  {
    question: 'How quickly will I see results with Zockto?',
    answer:
      'Most brands launch their first AI-generated UGC video ads within an hour of signing up. Performance lift on Meta typically shows within the first 7-14 days of testing 5-10 creative variations.',
  },
  {
    question: 'Do I need any video editing or design experience?',
    answer:
      'No. You paste a product URL or upload an image — Zockto generates the script, voiceover, avatar, and fully edited video automatically. No camera, no editor, no influencer needed.',
  },
  {
    question: 'Will these results work for my industry?',
    answer:
      'Zockto powers D2C, e-commerce, beauty, food, fashion, tech, and home brands across India and the US. The platform adapts hooks, pacing, and avatars to your category automatically.',
  },
  {
    question: 'How is this different from agencies or freelance editors?',
    answer:
      'Agencies take weeks per creative and cost thousands per ad. Zockto generates studio-quality videos in minutes at a fraction of the cost — and lets you test 10x more variations to find winners faster.',
  },
  {
    question: 'Can I see how the videos look before I commit?',
    answer:
      'Yes — every plan includes free credits so you can generate real videos before paying. No card needed to try it.',
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Customer Case Studies & Testimonials | Zockto"
        description="Real results from D2C brands, e-commerce sellers, and performance marketers using Zockto AI to scale Meta ad creatives. Browse case studies and research by industry."
        path="/case-studies"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-5">
              Case Studies & Testimonials
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Real brands.{' '}
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                Real Meta ad results.
              </span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              See how D2C founders, e-commerce sellers, and performance marketers cut creative costs and scaled ROAS with Zockto AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Index */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
              Case Studies
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">
              Real results across every niche
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Browse case studies and research by industry and objection. Find the proof point that matches your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {indexCards.map((card, idx) => (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  to={card.href}
                  className={`group relative block aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br ${card.gradient} p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  {/* subtle texture overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_60%)] pointer-events-none" />

                  {/* Z mark */}
                  <div className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <span className="text-white font-display font-bold text-sm">Z</span>
                  </div>

                  <div className="relative flex flex-col h-full">
                    <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-[11px] font-medium tracking-wide">
                      {card.category}
                    </span>

                    <h3 className="mt-auto font-display text-[18px] md:text-[20px] font-semibold text-white leading-snug">
                      {card.headline}
                    </h3>

                    <div className="mt-4 inline-flex items-center gap-1.5 text-white/90 text-sm font-medium">
                      Read case study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice testimonials */}
      <VoiceTestimonialsSection />

      {/* Written testimonials marquee */}
      <TestimonialsSection />

      {/* FAQ */}
      <section className="py-8 md:py-16">
        <div className="container px-4 max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Soft CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-2xl gradient-card border border-border/50 p-8 md:p-12 text-center"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">
              See what Zockto can do for{' '}
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                your brand
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-xl mx-auto">
              Try it free. Generate your first AI UGC ad in under 60 seconds — no card needed.
            </p>
            <Button variant="hero" size="lg" asChild>
              <AppLink appPath="/">
                Try Zockto Free <ArrowRight className="w-4 h-4 ml-1" />
              </AppLink>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">No credit card · Free credits included</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
