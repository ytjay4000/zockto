import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const stats = [
  { number: '28%', label: 'Lower cost per result vs top UGC ad' },
  { number: '31%', label: 'Lower cost per click vs top UGC ad' },
  { number: '2 platforms', label: 'Tested on TikTok and Meta simultaneously' },
];

const CaseStudyAIVsTraditional = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Video Ads vs UGC and Studio Ads — Case Study | Zockto"
        description="A controlled A/B test showed AI-generated video ads delivered 28% lower cost per result and 31% lower cost per click than top-performing UGC and studio ads on TikTok and Meta."
        path="/case-studies/ai-vs-traditional-video-ads"
      />
      <Navbar />

      <article className="pt-24">
        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-6 pt-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All case studies
          </Link>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6"
          >
            Case Study · Performance Marketing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            AI Video Ads Beat UGC and Studio Ads in a Head-to-Head A/B Test
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            A controlled A/B test on TikTok and Meta Ads pitted AI-generated video ads against an advertiser's
            best-performing UGC ad and best-performing studio-produced ad. The AI creatives won on both cost and
            clicks — at a fraction of the production time.
          </motion.p>
        </section>

        {/* Stat block */}
        <section className="max-w-5xl mx-auto px-6 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-8 text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-3">
                  {s.number}
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Challenge */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Why brands are stuck on the UGC and studio treadmill
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              Most ecommerce and D2C brands rely on two creative sources to feed their paid social campaigns:
              influencer-produced UGC and professionally designed studio ads. Both work — but both come with the
              same problem.
            </p>
            <p>
              They're slow. They're expensive. And no matter how big your creative budget is, you can't produce
              enough variations to keep ad fatigue from eating your ROAS.
            </p>
            <p>
              Brands spending heavily on influencer partnerships and design agencies were still missing their ROAS
              and CPA targets, simply because they couldn't ship fresh creatives fast enough to find and scale
              winners.
            </p>
          </div>
        </section>

        {/* The Test */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            A controlled A/B test on TikTok and Meta
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              To find out whether AI-generated video ads could actually compete with human-made creatives at the
              top of the funnel, a controlled A/B test was set up with three creative variants running against
              each other:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-primary">
              <li>The advertiser's best-performing UGC ad, produced by an influencer</li>
              <li>The advertiser's best-performing studio ad, crafted using professional brand assets</li>
              <li>An AI-generated video ad, produced from a product image and a script</li>
            </ul>
            <p>
              All three ran on TikTok and Meta Ads simultaneously, on the same audience, with the same budget
              allocation, optimizing for the same conversion event.
            </p>
          </div>
        </section>

        {/* The Results */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            AI creatives outperformed both UGC and studio ads
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The AI-generated video ads didn't just keep up with the influencer and studio creatives — they beat
              them on the metrics that matter most for paid acquisition:
            </p>
            <ul className="space-y-3 rounded-2xl bg-primary/5 border border-primary/15 p-6">
              {[
                '28% lower cost per result compared to the top-performing UGC ad',
                '31% lower cost per click compared to the top-performing UGC ad',
                'Performance held against the best studio-produced creative as well',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              The AI videos were also produced in minutes instead of days, and at a small fraction of the cost of
              either UGC or studio production.
            </p>
          </div>
        </section>

        {/* Why this matters */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Why this matters for your brand
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              If you're running Meta or TikTok ads with UGC creators, influencers, or a design agency — and you're
              either missing your ROAS target or struggling to produce enough variations to scale — this test
              shows you don't have to choose between performance and volume.
            </p>
            <p>Switching part of your creative budget to AI ad videos can immediately:</p>
            <ul className="space-y-3 pl-6 list-disc marker:text-primary">
              <li>Lower your cost per result and cost per click</li>
              <li>Multiply the number of fresh variations you can test each week</li>
              <li>Free up budget that's currently locked into production fees</li>
            </ul>
            <p>
              The AI ads in this test weren't just "good enough." They beat the best human-made creatives the
              advertiser had ever produced.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              Create your first AI ad video in 60 seconds
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl mx-auto">
              Free to try. No credit card. Made for Indian brands running Meta and Instagram ads.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 font-semibold px-8"
            >
              <a
                href="https://wa.me/917610336917"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start free on WhatsApp
              </a>
            </Button>
          </div>
        </section>

        {/* Footnote */}
        <section className="max-w-2xl mx-auto px-6 py-12">
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            Based on a published controlled A/B test of AI-generated video ads vs UGC and studio ads on TikTok and
            Meta Ads. Results reflect the original test and are presented here as industry proof of AI ad creative
            performance.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyAIVsTraditional;
