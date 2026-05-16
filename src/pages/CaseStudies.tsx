import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, TrendingDown, DollarSign, MousePointerClick, Eye, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import VoiceTestimonialsSection from '@/components/VoiceTestimonialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQAccordion from '@/components/blog/FAQAccordion';
import AppLink from '@/components/AppLink';
import { Button } from '@/components/ui/button';

type Metric = {
  label: string;
  before: string;
  after: string;
  delta: string;
  positive: boolean;
  icon: React.ElementType;
};

type CaseStudy = {
  client: string;
  industry: string;
  summary: string;
  duration: string;
  spend: string;
  metrics: Metric[];
  quote: string;
};

const caseStudies: CaseStudy[] = [
  {
    client: 'D2C Skincare Brand',
    industry: 'Beauty & Personal Care',
    summary:
      'Switched from static carousel ads to Zockto AI-generated UGC videos across Meta. Tested 12 creative variations in week one.',
    duration: '30 days',
    spend: '₹4.2L ad spend',
    quote: '"Our ROAS doubled in the first month. We finally stopped relying on freelance editors." — Meet Shah',
    metrics: [
      { label: 'ROAS', before: '1.8x', after: '4.2x', delta: '+133%', positive: true, icon: TrendingUp },
      { label: 'CTR', before: '0.9%', after: '2.7%', delta: '+200%', positive: true, icon: MousePointerClick },
      { label: 'CPM', before: '₹420', after: '₹268', delta: '-36%', positive: true, icon: TrendingDown },
      { label: 'CPA', before: '₹680', after: '₹290', delta: '-57%', positive: true, icon: DollarSign },
    ],
  },
  {
    client: 'Multi-Marketplace E-com Seller',
    industry: 'Home & Kitchen',
    summary:
      'Generated localized video ads from product URLs for Amazon, Flipkart and Meta. No shoots, no editors involved.',
    duration: '45 days',
    spend: '$3,800 ad spend',
    quote: '"My listings finally look like the big brands. Sales went up without me lifting a camera." — Khushi',
    metrics: [
      { label: 'ROAS', before: '2.1x', after: '5.6x', delta: '+167%', positive: true, icon: TrendingUp },
      { label: 'CTR', before: '1.2%', after: '3.4%', delta: '+183%', positive: true, icon: MousePointerClick },
      { label: 'Impressions', before: '180K', after: '520K', delta: '+189%', positive: true, icon: Eye },
      { label: 'CPA', before: '$22.40', after: '$8.90', delta: '-60%', positive: true, icon: DollarSign },
    ],
  },
  {
    client: 'Performance Agency',
    industry: 'Marketing Agency',
    summary:
      'Replaced manual creative briefs with Zockto for client testing pipeline. Ship 10+ variations in the time it used to take to brief one.',
    duration: '60 days',
    spend: '₹12L+ managed spend',
    quote: '"Winning creatives now show up in days, not weeks. Creative testing is no longer the bottleneck." — Sriniwasa',
    metrics: [
      { label: 'Creatives/wk', before: '3', after: '28', delta: '+833%', positive: true, icon: Target },
      { label: 'Avg ROAS', before: '2.4x', after: '4.9x', delta: '+104%', positive: true, icon: TrendingUp },
      { label: 'CTR', before: '1.1%', after: '2.9%', delta: '+164%', positive: true, icon: MousePointerClick },
      { label: 'CPA', before: '₹540', after: '₹245', delta: '-55%', positive: true, icon: DollarSign },
    ],
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

const MetaAdsCard = ({ study, variant }: { study: CaseStudy; variant: 'before' | 'after' }) => {
  const isBefore = variant === 'before';
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Meta-style header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#1877F2] flex items-center justify-center text-white text-[10px] font-bold">f</div>
          <span className="text-xs font-medium text-slate-700">Ads Manager</span>
        </div>
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
            isBefore ? 'bg-slate-200 text-slate-600' : 'bg-emerald-100 text-emerald-700'
          }`}
        >
          {isBefore ? 'BEFORE ZOCKTO' : 'AFTER ZOCKTO'}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[11px] text-slate-500">Campaign</p>
            <p className="text-sm font-semibold text-slate-900">{study.client}</p>
          </div>
          <span
            className={`text-[10px] px-2 py-0.5 rounded ${
              isBefore ? 'bg-slate-100 text-slate-600' : 'bg-emerald-50 text-emerald-700'
            }`}
          >
            ● {isBefore ? 'Underperforming' : 'Active · Winning'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {study.metrics.map((m) => (
            <div key={m.label} className="bg-slate-50 rounded-lg p-2.5">
              <p className="text-[10px] text-slate-500 uppercase tracking-wide">{m.label}</p>
              <p className="text-base font-bold text-slate-900 mt-0.5">{isBefore ? m.before : m.after}</p>
              {!isBefore && (
                <p className="text-[10px] font-semibold text-emerald-600 mt-0.5">{m.delta}</p>
              )}
            </div>
          ))}
        </div>

        {/* Fake chart */}
        <div className="mt-3 h-14 flex items-end gap-1">
          {Array.from({ length: 18 }).map((_, i) => {
            const baseH = isBefore ? 15 + Math.sin(i * 0.6) * 8 : 25 + i * 2.5 + Math.sin(i * 0.8) * 6;
            return (
              <div
                key={i}
                className={`flex-1 rounded-sm ${isBefore ? 'bg-slate-300' : 'bg-emerald-400'}`}
                style={{ height: `${Math.max(8, Math.min(100, baseH))}%` }}
              />
            );
          })}
        </div>
        <p className="text-[10px] text-slate-400 mt-1.5">Last 14 days · {study.spend}</p>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Customer Case Studies & Testimonials | Zockto"
        description="Real results from D2C brands, e-commerce sellers, and performance marketers using Zockto AI to scale Meta ad creatives. See before/after Meta Ads Manager metrics."
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

      {/* Voice testimonials */}
      <VoiceTestimonialsSection />

      {/* Case Studies with Before/After */}
      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="container px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
              Before & After
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">
              Meta Ads Manager — actual lift
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Pulled from real client accounts. Numbers anonymized; metrics are unchanged.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((study, idx) => (
              <motion.article
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
              >
                <div className="mb-6 md:mb-8 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="font-medium text-primary">{study.industry}</span>
                    <span>·</span>
                    <span>{study.duration}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-3xl font-bold mb-2">{study.client}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{study.summary}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6">
                  <MetaAdsCard study={study} variant="before" />
                  <MetaAdsCard study={study} variant="after" />
                </div>

                <div className="rounded-xl border-l-4 border-amber-500 bg-white p-4 md:p-5 shadow-sm">
                  <p className="text-sm md:text-base text-slate-700 italic">{study.quote}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

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
