import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const stats = [
  { number: '$1.90 CPM', label: '80% lower than industry benchmarks' },
  { number: '285K', label: 'Unique people reached in the awareness phase' },
  { number: '1.9x ROAS', label: 'On the seasonal promotion' },
  { number: '#1 creative', label: 'AI video drove the most purchases and revenue in the campaign' },
];

const CaseStudyHouse = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How House Hit 1.9x ROAS With AI Video Ads — Case Study | Zockto"
        description="House, an Australian retail brand, hit 1.9x ROAS on an Afterpay promotion with AI-generated video ads delivering $1.90 CPMs — 80% below industry benchmarks — and 285K reach."
        path="/case-studies/house-retail-seasonal"
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
            Case Study · Retail
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            How a Retail Brand Used AI Video Ads to Cut CPMs by 80% and Hit 1.9x ROAS on a Seasonal Promotion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            House, an Australian retail brand, ran a top-of-funnel awareness campaign on Meta ahead of a major Afterpay seasonal promotion. Using AI-generated video ads, they reached 285K unique people at an $1.90 CPM — 80% below industry benchmarks — built a large retargeting pool for the sale, and the AI video drove more purchases and revenue than any other creative in the campaign.
          </motion.p>
        </section>

        {/* Stat block */}
        <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            How do you prime an audience for a sale without burning your budget?
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              For retail brands, seasonal promotions are the moments when the entire quarter can swing. Afterpay Day, end-of-season sales, holiday events — these are the high-intent windows when conversions actually happen.
            </p>
            <p>
              But there's a problem most retail marketers know painfully well: if you only start advertising when the promotion goes live, you're competing against every other brand for the same audience at the same time. CPMs spike. Auction costs balloon. ROAS collapses.
            </p>
            <p>
              The smarter play is to build the audience before the promotion starts — a top-of-funnel awareness campaign that gets your brand in front of the right people, fills your retargeting pool, and primes them to buy when the sale launches.
            </p>
            <p>
              House, an Australian retail brand, wanted to do exactly that ahead of a major Afterpay promotion. The problem was the same one every brand faces with top-of-funnel video: CPMs are high, ROI is hard to prove, and you don't have unlimited time or budget to test creatives before the sale window opens.
            </p>
            <p>
              They needed video that performed at upper-funnel CPMs, drove enough reach to build a serious retargeting pool, and — if possible — actually drove purchases during the promotion itself.
            </p>
          </div>
        </section>

        {/* The Approach */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            AI-generated video as the upper-funnel workhorse
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              Instead of betting the awareness campaign on traditional studio-produced video, House ran AI-generated video ads as the primary creative for the top-of-funnel phase.
            </p>
            <p>
              The logic was simple. To hit low CPMs at scale, you need volume of creative variations — not a single hero spot that gets exhausted in a week. AI video made it possible to produce enough variations to keep the campaign fresh across hundreds of thousands of impressions, without the production budget that traditional video would have required.
            </p>
            <p>
              The campaign was built to feed the funnel that the Afterpay promotion would later convert: awareness first, retargeting pool built during the campaign, then the promotion itself.
            </p>
          </div>
        </section>

        {/* The Results */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            The most efficient creative in the campaign — by every metric
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              The AI video ads didn't just deliver acceptable upper-funnel numbers. They beat the benchmarks in both directions — efficient reach and conversion impact:
            </p>
            <ul className="space-y-3 rounded-2xl bg-primary/5 border border-primary/15 p-6">
              {[
                '$1.90 CPM — roughly 80% lower than industry benchmarks for retail video',
                '285K unique people reached in the awareness phase, building a substantial retargeting pool',
                '1.9x ROAS on the Afterpay promotion',
                'The AI video drove the most purchases and revenue of any creative in the campaign — outperforming traditional creatives at both the top and bottom of the funnel',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              That last point matters. AI video is often pitched as a top-of-funnel tool — cheap impressions, broad reach, with the assumption that conversion-stage creatives still have to be traditionally produced. House's campaign showed the opposite. The same AI video that delivered $1.90 CPMs at the top of the funnel was also the single highest-converting creative when the promotion went live.
            </p>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            If you run seasonal promotions, this is the playbook
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              Every retail brand running Meta or Instagram ads runs into the same trap with seasonal promotions: you wait until the sale launches, you compete with everyone else for the same audience, CPMs spike, and ROAS suffers.
            </p>
            <p>
              The fix is building the audience before the sale — but only if you can do it efficiently. Traditional video production is too slow and too expensive to feed a top-of-funnel awareness campaign at the scale that actually moves the needle.
            </p>
            <p>
              AI video changes the math:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-primary">
              <li>You can run upper-funnel awareness campaigns at $1.90 CPMs instead of competing on auction costs once the sale starts</li>
              <li>You can produce enough creative variations to keep the awareness phase fresh for weeks</li>
              <li>You build a large retargeting pool that converts when the promotion launches</li>
              <li>And the same creatives that delivered cheap reach can also convert at the bottom of the funnel</li>
            </ul>
            <p>
              For retail brands, BNPL/Afterpay-style financing brands, and any ecommerce store with regular seasonal promotions, this is the campaign structure that compounds. Build the audience early. Keep CPMs low. Let the retargeting pool do the work when the sale goes live.
            </p>
            <p>
              House didn't outspend the competition. They got in front of the audience earlier, at a fraction of the cost.
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
              Try it free. Generate your first AI UGC ad in under 60 seconds — no card needed.
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
                Try Zockto Free
              </a>
            </Button>
          </div>
        </section>

        {/* Footnote */}
        <section className="max-w-2xl mx-auto px-6 py-12">
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            Based on a published case study by Adcore covering House, an Australian retail brand, and their upper-funnel Meta Ads campaign using AI-generated video ahead of an Afterpay seasonal promotion. Results reflect the original campaign as reported, and are presented here as industry proof of AI ad creative performance.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyHouse;
