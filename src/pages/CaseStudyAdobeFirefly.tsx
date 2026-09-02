import { Link }  from  'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const stats = [
  { number: '93.4%', label: 'AI prediction accuracy for winning creatives' },
  { number: '52%', label: 'Human judgment accuracy — essentially a coin flip' },
  { number: '780K creatives', label: 'Analyzed in the benchmark' },
];

const CaseStudyAdobeFirefly = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Adobe Firefly: AI Predicts Winning Ads With 93.4% Accuracy — Case Study | Zockto"
        description="An Adobe Firefly benchmark across 780K creatives found AI predicted winning ads with 93.4% accuracy, vs 52% for human judgment. Stop burning budget on creatives you guessed would work."
        path="/case-studies/adobe-firefly-prediction-benchmark"
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
            Research · Creative Prediction
          </motion.p>
          <motion.h1
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Adobe Firefly Benchmark Across 780K Creatives: AI Predicts Winning Ads With 93.4% Accuracy. Human Judgment? 52%.
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Adobe analyzed 780,000 ad creatives to test something performance marketers have argued about for years: can you predict which creatives will win before you spend money testing them? The finding was decisive. AI predicted winning creatives with 93.4% accuracy. Human judgment landed at 52% — barely better than a coin flip.
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
            Can you tell a winning ad from a losing one before you spend on it?
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              Every performance marketer has had the experience: you and your team pick the three creatives you're most excited about, push them live, and watch two of them flop while the one nobody loved becomes the winner.
            </p>
            <p>
              It happens because human judgment about creative performance is famously unreliable. Founders, marketers, and creative directors are all looking at the same ad and predicting different outcomes. And once the budget goes live, every wrong guess is real money spent on a creative that was never going to win.
            </p>
            <p>
              Adobe set out to measure this directly in a benchmark study covering 780,000 ad creatives. The methodology compared two prediction approaches: AI-based creative success prediction versus human judgment, both scored against actual campaign performance once the ads ran.
            </p>
          </div>
        </section>

        {/* The Findings */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            AI predicted winners. Humans guessed.
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The accuracy gap was larger than most marketers would expect:
            </p>
            <ul className="space-y-3 rounded-2xl bg-primary/5 border border-primary/15 p-6">
              {[
                "AI predicted winning creatives with 93.4% accuracy across the 780K-creative dataset",
                "Human judgment accuracy came in at 52% — barely distinguishable from random chance",
                "The gap held across the full creative set, not just in narrow categories",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              That 52% number is the one performance marketers should sit with. It means that across every creative review meeting where teams confidently picked which ads "would work," human judgment was getting it right slightly more often than flipping a coin. Every losing creative greenlit by gut feeling represented budget that could have been spent on an actual winner.
            </p>
            <p>
              AI prediction at 93.4% accuracy isn't "AI is better at picking ads." It's a fundamentally different kind of measurement — pattern-matching across hundreds of thousands of historical performance signals that no human reviewer can hold in their head.
            </p>
          </div>
        </section>

        {/* What This Means For Your Brand */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            If you've ever burned budget on a creative you were sure would win
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The fear that stops most brands from scaling AI ad production isn't that AI can't make videos. It's that AI will make more losers, faster — and the brand will burn through ad spend testing them.
            </p>
            <p>
              The Firefly benchmark inverts that fear. The real risk in ad spend isn't producing more creatives. It's producing more creatives without a reliable way to know which ones will perform before the budget goes live.
            </p>
            <p>
              For paid-social brands, performance marketing agencies, and media buyers, this changes how creative testing should be structured:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-primary">
              <li>Volume of creatives matters less than the ability to predict which ones will win</li>
              <li>A 93.4% prediction accuracy means most of your ad spend gets routed to creatives that have already been scored as likely winners</li>
              <li>Human "this looks great" judgment — the basis for most creative approval today — is essentially noise at scale</li>
              <li>The brands compounding fastest aren't the ones producing the most ads. They're the ones spending the most on the right ads</li>
            </ul>
            <p>
              The shift the Firefly data points to isn't "use AI to make ads." It's "use AI to decide which ads to spend on." Both functions matter. The second one is where wasted budget actually lives.
            </p>
            <p>
              If you've ever watched a creative you loved underperform — or watched an ad nobody on the team was excited about become the campaign winner — that's the 52% problem. The Firefly benchmark says it's solvable.
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
                href="https://app.zockto.com/"
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
            Based on an Adobe Firefly benchmark study analyzing 780,000 ad creatives, comparing AI-based creative success prediction to human judgment. Results reflect the original benchmark as published, and are presented here as industry proof of AI ad creative performance.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyAdobeFirefly;
