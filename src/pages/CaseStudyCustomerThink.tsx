import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const stats = [
  { number: '28% CTR', label: 'Personalized AI video ads' },
  { number: '15% CTR', label: 'Traditional ad benchmarks' },
  { number: '35% CTR', label: 'With high personalization matched to consumer data' },
];

const CaseStudyCustomerThink = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Personalized AI Video Ads Hit 28% CTR vs 15% Traditional — Case Study | Zockto"
        description="Industry reporting found personalized AI video ads deliver 28% CTR vs 15% for traditional, with high personalization reaching 35% CTR. The 'AI feels generic' concern points the wrong way."
        path="/case-studies/customerthink-personalized-ai-ctr"
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
            Research · Customer Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Personalized AI Video Ads Hit 28% CTR vs 15% for Traditional. With High Personalization, CTR Jumps to 35%.
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Industry reporting on platform-level performance data found personalized AI video ads delivering nearly double the click-through rate of traditional ads. The brands most worried about AI feeling "generic" are exactly the ones the data points to as benefiting most — because personalization, not production, is what AI video unlocks.
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
            The data behind "AI videos feel generic" turns out to point the other way
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The most common quality concern brands raise about AI ad video is that it will feel generic, corporate, or detached — and that running AI creatives will erode the brand trust that authentic content was building.
            </p>
            <p>
              It's a reasonable fear. First-generation AI video had real quality problems. But the industry reporting on more recent platform-level performance data tells a different story, and one that runs directly counter to the "generic" assumption.
            </p>
            <p>
              CustomerThink's analysis of internal performance data from Meta's testing of personalized AI video ads, combined with platform-reported engagement metrics, surfaced a finding worth taking seriously: the brands worried about AI hurting customer experience were looking at the wrong metric. Personalization — the thing AI video makes economically possible at scale — is what was driving engagement up, not down.
            </p>
          </div>
        </section>

        {/* The Findings */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Higher CTR, higher engagement, higher conversion lift — across the funnel
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The reported performance data:
            </p>
            <ul className="space-y-3 rounded-2xl bg-primary/5 border border-primary/15 p-6">
              {[
                "Personalized AI video ads hit 28% CTR, compared to roughly 15% for traditional ad benchmarks — nearly double",
                "High-personalization AI ads matched to consumer data reached 35% CTR — more than double traditional benchmarks",
                "3x higher engagement reported across platforms for dynamic AI video content",
                "47% conversion lift from AI-personalized video versus static or non-personalized ad creative",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              The mechanism behind the numbers is what makes them durable, not flukey. Traditional video production economics force every brand to make the same compromise: one ad, one message, one customer profile, one creative variant pushed to everyone. AI video breaks that constraint. Different hooks for different audiences. Different angles for different customer segments. Different visual treatments for different moments in the funnel.
            </p>
            <p>
              The "AI feels generic" assumption was built on the old constraint, where one AI ad got pushed at everyone the same way human ads did. The platform-level data shows what happens when AI ads are actually used the way they can be used: matched to the customer.
            </p>
          </div>
        </section>

        {/* What This Means For Your Brand */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            If your brand-quality concern is real, this is the inversion worth understanding
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The "AI videos will hurt my brand" objection rests on a specific belief: that the human-produced ad you'd otherwise run is the higher-quality experience for your customer.
            </p>
            <p>
              That belief is worth testing against the data. A 28–35% CTR isn't customers ignoring "generic" ads. It's customers engaging at nearly double the rate they engage with traditional creative. A 47% conversion lift isn't disengagement. It's the opposite.
            </p>
            <p>
              What's actually happening: the ad shown to a customer who's been browsing wellness content for two weeks is different from the ad shown to a customer who's never heard of your brand. The fashion ad shown to someone who clicked on minimalist styles is different from the one shown to someone who clicked on bold prints. That's what AI video makes affordable. Traditional production can't.
            </p>
            <p>
              For ecommerce, D2C, and retail brands worried about brand quality:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-primary">
              <li>Personalization is the customer experience metric — not "is this ad AI or human-produced"</li>
              <li>AI video lets you produce enough variations to actually match the customer, instead of pushing one generic ad to everyone</li>
              <li>The CTR and conversion lifts the data shows aren't possible with human-produced video, because the production economics don't allow that many variations</li>
              <li>The choice isn't "AI ads vs authentic ads." It's "personalized ads vs everyone-gets-the-same-ad" — and AI is what makes the first option financially viable</li>
            </ul>
            <p>
              Brand quality isn't determined by who produced the ad. It's determined by whether the customer felt the ad was for them. The data says personalized AI is winning that test.
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
            Based on industry reporting by CustomerThink covering platform-level performance data on personalized AI video ads, including Meta's internal testing and cross-platform engagement metrics. Results reflect the original reporting as published, and are presented here as industry proof of AI ad creative performance.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyCustomerThink;
