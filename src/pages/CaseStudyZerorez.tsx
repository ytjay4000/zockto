import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const stats = [
  { number: '28%', label: 'Lower cost per lead ($60–$90 → $27–$55)' },
  { number: '73%', label: 'Cheaper clicks on Meta lead-gen campaigns' },
  { number: '3x', label: 'More creatives shipped per month (6–12 → 30+)' },
  { number: '70%', label: 'Less production time per asset' },
];

const CaseStudyZerorez = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How Zerorez Cut Cost Per Lead 28% With AI Ads — Case Study | Zockto"
        description="Zerorez, a carpet cleaning franchise, cut cost per lead by 28%, got 73% cheaper clicks, and tripled creative output by switching to AI-generated video and image ads."
        path="/case-studies/zerorez-local-services"
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
            Case Study · Local Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            How a Carpet Cleaning Franchise Cut Lead Costs by 28% and Tripled Their Creative Output With AI Ads
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Zerorez, a carpet cleaning franchise operating in Austin and Las Vegas, was stuck producing just 6–12 ad creatives a month. After switching to AI-generated video and image ads, they now ship 30+ creatives monthly, pay 28% less per lead, and got 73% cheaper clicks — all while cutting production time by 70%.
          </motion.p>
        </section>

        {/* Stat block */}
        <section className="max-w-5xl mx-auto px-6 pb-16 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Stuck at 6–12 creatives a month with no way to scale
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              Zerorez, a carpet cleaning franchise with locations in Austin and Las Vegas, ran Meta lead generation campaigns as their primary growth channel. The problem wasn't the channel — it was the creative pipeline feeding it.
            </p>
            <p>
              Their traditional design workflow took 2–4 days per asset. Between concepting, shooting, editing, and approvals, the team could only produce 6 to 12 ad creatives per month.
            </p>
            <p>
              For Meta lead-gen, that's not enough. The algorithm needs fresh creatives constantly to keep CPMs low and avoid ad fatigue. With such limited output, Zerorez couldn't test enough hooks, offers, or angles to find the winners that would lower their cost per lead. They were trapped in a loop: high CPLs, limited testing, no way to break out.
            </p>
            <p>
              For a local service business with marketing budget split across two markets, every wasted week of stale creatives meant real money lost.
            </p>
          </div>
        </section>

        {/* The Switch */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Replacing the design pipeline with AI ad creatives
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              Zerorez moved away from manually produced ads and switched to AI-generated video and image creatives. Instead of waiting 2–4 days for each asset, the team could now produce a finished ad in 5 to 10 minutes.
            </p>
            <p>
              That single change unlocked everything else. With production no longer the bottleneck, they could finally do what Meta lead-gen actually needs: test relentlessly.
            </p>
            <p>
              New hooks, new offers, new visual angles — all running in parallel, all swapped out the moment performance dipped. The same small team that was previously shipping a dozen creatives a month was now shipping 30+ without adding headcount or hiring an agency.
            </p>
          </div>
        </section>

        {/* The Results */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Lower costs, higher hook rates, more leads
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The numbers shifted across every metric that mattered for their lead-gen funnel:
            </p>
            <ul className="space-y-3 rounded-2xl bg-primary/5 border border-primary/15 p-6">
              {[
                'Cost per lead dropped 28%, from $60–$90 down to $27–$55',
                'Cost per click fell by 73% on their Meta campaigns',
                'Hook rates improved by 35%, meaning more people stopped scrolling and watched the ad',
                'Monthly creative output tripled, from 6–12 to 30+ ads per month',
                'Production time per asset dropped 70%, opening up time for actual marketing strategy',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              For a local service business, lower cost per lead compounds fast. Every dollar saved per lead is a dollar that can be reinvested into more reach, more markets, or simply higher margins per booked job.
            </p>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            If you run a local service business, this is the unlock
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              Cleaning services, salons, clinics, repair shops, fitness studios, home services — every local business running Meta or Instagram ads runs into the same wall Zerorez hit.
            </p>
            <p>
              You need fresh creatives constantly. But you don't have a creative team. You don't have time to film new videos every week. And paying a design agency every month doesn't make financial sense for a local operation.
            </p>
            <p>
              AI ad creatives change the math. With production time dropping from days to minutes:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-primary">
              <li>You can test 5–10 new hooks per week instead of 1–2 per month</li>
              <li>You don't need a videographer, an editor, or an agency retainer</li>
              <li>You can spin up location-specific or offer-specific creatives in minutes</li>
              <li>Your cost per lead drops because the algorithm finally has enough variations to optimize against</li>
            </ul>
            <p>
              Zerorez didn't win because they spent more on ads. They won because they finally had enough creatives to let Meta do its job.
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
            Based on published results from Zerorez, a carpet cleaning franchise operating in Austin and Las Vegas. Results reflect their reported experience switching from manual ad production to AI-generated video and image creatives, and are presented here as industry proof of AI ad creative performance.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyZerorez;
