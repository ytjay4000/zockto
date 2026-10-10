import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const stats = [
  { number: '45–58%', label: 'ROAS improvement reported by enterprise brands' },
  { number: '52.7%', label: 'Average ROAS lift for CPG brands' },
  { number: '3 platforms', label: 'Validated across Meta, TikTok, and Google' },
];

const CaseStudyForrester = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Forrester: AI Creatives Deliver 45–58% ROAS Lift — Case Study | Zockto"
        description="A Q1 2026 Forrester report found 63% of enterprise brands using AI-generated creatives saw a 45–58% ROAS lift, with CPG brands averaging 52.7% ROAS improvement across Meta, TikTok, and Google."
        path="/case-studies/forrester-ai-roas-research"
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
            Research · ROAS Data
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Forrester Research: 63% of Enterprise Brands Using AI-Generated Creatives Saw a 45–58% ROAS Lift
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            A Q1 2026 Forrester report studied enterprise brands running AI-generated ad creatives across Meta, TikTok, and Google. The finding: 63% of brands using AI creatives delivered a 45–58% ROAS improvement, with CPG brands averaging a 52.7% ROAS lift across all three platforms.
          </motion.p>
        </section>

        {/* Stat block */}
        <section className="max-w-5xl mx-auto px-6 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 16 }}
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
            Forrester measured the actual revenue impact of AI ad creatives
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The most common question performance marketers ask about AI ad creatives isn't whether they get more clicks. It's whether they make more money. Click-through rate is interesting. Return on ad spend is the number that decides budgets.
            </p>
            <p>
              The Q1 2026 Forrester report set out to answer that question with real enterprise data. The study analyzed 63% of enterprise brands actively using AI-generated creatives, measuring ROAS impact across the three major paid social and search platforms: Meta, TikTok, and Google.
            </p>
            <p>
              This wasn't a single-campaign case study. It was a cross-platform measurement of enterprise advertisers — brands with the budgets, attribution, and reporting infrastructure to measure ROAS cleanly.
            </p>
          </div>
        </section>

        {/* The Findings */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            AI creatives lifted ROAS across every platform measured
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The numbers from the Forrester report:
            </p>
            <ul className="space-y-3 rounded-2xl bg-primary/5 border border-primary/15 p-6">
              {[
                "45–58% ROAS improvement reported by enterprise brands using AI-generated creatives",
                "52.7% average ROAS lift for CPG brands specifically — meaning every ₹100 of ad spend that was returning ₹200 in revenue with manual creatives was returning roughly ₹305 with AI creatives",
                "Consistent across Meta, TikTok, and Google — not platform-dependent, not concentrated in a single channel",
                "63% of enterprise brands in the study were already using AI creatives at the time of measurement, indicating significant enterprise adoption",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              The CPG number deserves a second look. CPG is one of the most competitive performance-marketing categories on the planet. The brands in that vertical have professional creative teams, agency relationships, and decades of advertising expertise. A 52.7% ROAS lift in a category that mature isn't a margin-of-error finding. It's a structural shift in what good creative production looks like.
            </p>
          </div>
        </section>

        {/* What This Means For Your Brand */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            What a 50% ROAS lift actually looks like in your ad account
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              ROAS percentages can sound abstract. The translation into actual campaign economics is what makes this study matter.
            </p>
            <p>
              If your campaigns are currently running at 2x ROAS — for every ₹100 spent, you're making ₹200 — a 50% ROAS lift moves you to 3x. For every ₹100 spent, you're now making ₹300. That additional ₹100 of revenue per ₹100 of spend is pure margin expansion.
            </p>
            <p>
              For a brand spending ₹5 lakh a month on ads at 2x ROAS, that's the difference between ₹10 lakh and ₹15 lakh in monthly revenue from the same spend. The 50% lift compounds every month the campaign runs.
            </p>
            <p>
              For performance marketers and ROAS-focused founders specifically:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-primary">
              <li>A 45–58% ROAS lift is large enough to fundamentally change what you can profitably spend on</li>
              <li>The lift was measured across Meta, TikTok, and Google — so it's not a single-platform fluke</li>
              <li>CPG brands — typically the most creative-mature category — saw the lift hold, which suggests the gains don't depend on your existing creative being weak</li>
              <li>Forrester is an independent research firm, not an AI vendor — meaning the data isn't downstream of someone trying to sell you AI tools</li>
            </ul>
            <p>
              The question for any ROAS-driven brand isn't whether AI creatives can lift returns. The Forrester data already answered that. The question is what your campaigns would look like at 1.5x your current ROAS — and whether you can afford to leave that on the table.
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
            Based on a Q1 2026 Forrester research report measuring ROAS impact of AI-generated ad creatives across enterprise brands running on Meta, TikTok, and Google. Results reflect the original report as published, and are presented here as industry proof of AI ad creative performance.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyForrester;
