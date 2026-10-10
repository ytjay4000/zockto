import { Link }  from  'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const stats = [
  { number: '2.1x', label: 'Higher CTR for AI-optimized creatives vs manual' },
  { number: '2.4x', label: 'CTR lift specifically for retail brands' },
  { number: '2.3M+', label: 'Ad impressions analyzed across 14 verticals' },
];

const CaseStudyNielsen = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Nielsen Study: AI Ad Creatives Deliver 2.1x Higher CTR — Case Study | Zockto"
        description="A Nielsen and Google DeepMind study across 2.3M+ ad impressions found AI-optimized creatives delivered 2.1x higher CTR than manual ads, with retail brands seeing a 2.4x lift."
        path="/case-studies/nielsen-ai-creatives-ctr-study"
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
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6"
          >
            Research · Performance Data
          </motion.p>
          <motion.h1
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Nielsen Study Across 2.3M+ Impressions: AI-Optimized Ad Creatives Delivered 2.1x Higher CTR Than Manual Creatives
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            A large-scale study by Nielsen and Google DeepMind analyzed over 2.3 million ad impressions across 14 different industry verticals. The conclusion was unambiguous: AI-optimized creatives more than doubled click-through rates compared to manually produced ads — and retail brands saw an even bigger lift.
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
                className="rounded-2xl border border-border bg-card p-6 text-center flex flex-col justify-center min-h-[180px]"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-3 leading-tight">
                  {s.number}
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Study */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            A large-scale measurement of AI vs human-made ad creative
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The research was conducted by Nielsen — one of the longest-standing names in advertising measurement — in partnership with Google DeepMind. The dataset was not a small sample. It covered more than 2.3 million ad impressions across 14 different industry verticals, including retail.
            </p>
            <p>
              The methodology was direct: compare click-through rates of AI-optimized ad creatives against manually produced creatives running in real campaigns, with real audiences, on real spend. No synthetic benchmarks. No A/B tests in a lab. Production ad performance, at scale, across industries.
            </p>
          </div>
        </section>

        {/* The Findings */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            AI creatives more than doubled click-through rates
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The headline number from the study:
            </p>
            <ul className="space-y-3 rounded-2xl bg-primary/5 border border-primary/15 p-6">
              {[
                "AI-optimized creatives delivered 2.1x higher CTR than manually produced creatives across the full 2.3M+ impression dataset",
                "Retail brands saw an even sharper lift — 2.4x CTR compared to manual creatives in the same vertical",
                "The lift held consistently across the 14 verticals studied, not concentrated in any single industry",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              What makes this study harder to dismiss than typical AI-marketing claims: the sample size, the measurement firm, and the methodology. Nielsen is not an AI vendor. Google DeepMind is not selling a creative tool. The data was measured the same way every other industry CTR benchmark is measured.
            </p>
          </div>
        </section>

        {/* What This Means For Your Brand */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            If you are skeptical that AI ads can outperform your current creative
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The most common objection to switching ad production from human teams to AI is the most reasonable one: "How do I know AI creatives will actually perform better than what we have?"
            </p>
            <p>
              This study is one of the cleanest answers to that question:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-primary">
              <li>Across 2.3M+ impressions and 14 verticals, AI creatives more than doubled CTR</li>
              <li>For retail specifically, the lift was 2.4x — meaning every 100 clicks you are getting from manual ads could be 240 clicks from AI-optimized creatives at the same spend</li>
              <li>The measurement was independent, large-scale, and across real campaigns — not vendor-produced marketing material</li>
            </ul>
            <p>
              CTR is not the only metric that matters, but it is the one that drives everything downstream. Higher CTR means lower CPCs, more data into the algorithm faster, and more efficient scaling. A 2x CTR lift compounds across the entire funnel.
            </p>
            <p>
              If your current ad creatives are manually produced — by an in-house team, a design agency, or UGC creators — this study is the baseline question to ask: what would your campaigns look like with 2x the click-through rate?
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              See what Zockto can do for your brand
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl mx-auto">
              Generate your first AI video ad in under 60 seconds — no card needed.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 font-semibold px-8"
            >
              <a
                href="https://app.zockto.com/product-ad-shot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Zockto
              </a>
            </Button>
          </div>
        </section>

        {/* Footnote */}
        <section className="max-w-2xl mx-auto px-6 py-12">
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            Based on published research by Nielsen and Google DeepMind analyzing 2.3M+ ad impressions across 14 verticals. Results reflect the original study as reported, and are presented here as industry proof of AI ad creative performance.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyNielsen;
