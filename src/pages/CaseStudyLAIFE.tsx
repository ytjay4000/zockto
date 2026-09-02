import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const stats = [
  { number: '$3.89', label: 'Cost per order on US digital ads' },
  { number: '50 videos', label: 'Shipped per week (up from a fraction of that)' },
  { number: 'Cold-start cleared', label: 'Successfully passed Meta\'s algorithm learning phase in the US' },
];

const CaseStudyLAIFE = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How LAIFE Hit $3.89 Cost Per Order With AI Avatar Ads — Case Study | Zockto"
        description="LAIFE, a Harvard-founded longevity brand, hit $3.89 cost per order and cleared Meta's cold-start phase by switching to realistic AI avatar video ads — shipping 50 ads per week."
        path="/case-studies/laife-dtc-wellness"
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
            Case Study · D2C Wellness
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            How a Harvard-Founded Longevity Brand Hit $3.89 Cost Per Order With Realistic AI Avatar Ads
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            LAIFE, a longevity brand founded out of Harvard, couldn't launch a digital ad campaign in the US. Earlier AI tools produced unrealistic characters and broken lip sync. Manual editing created a production bottleneck. After switching to realistic AI avatar videos, LAIFE now ships 50 ads per week, hit a $3.89 cost per order, and successfully cleared the algorithm's cold-start phase.
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
            A premium brand that couldn't get past the algorithm's cold-start phase
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              LAIFE is a longevity brand founded out of Harvard — a premium D2C product in a category where brand trust isn't a nice-to-have. It's the entire purchase decision.
            </p>
            <p>
              When LAIFE tried to launch their digital ad campaign in the US, they hit two walls.
            </p>
            <p>
              The first was algorithm volume. To get past Meta's cold-start phase — the early learning period where the platform figures out who to show your ads to — you need to feed the algorithm a steady stream of fresh creative variations. The industry rule of thumb for serious testing is 50+ videos per week, covering different hooks, avatars, and product angles. LAIFE couldn't get anywhere close to that number.
            </p>
            <p>
              The second wall was quality. They tried earlier-generation AI video tools to scale output. The results were unusable: unrealistic, uncanny characters and lip sync that didn't match the audio. For a premium longevity brand asking customers to trust them with their health, ads that looked obviously fake were worse than no ads at all.
            </p>
            <p>
              That left them with manual editing — slow, expensive, and impossible to run at the volume the algorithm demanded. The campaign couldn't launch.
            </p>
          </div>
        </section>

        {/* The Switch */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Realistic AI avatars solved both problems at once
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              LAIFE switched to AI video generation built around realistic avatars — characters that looked human, with lip sync that actually matched the script.
            </p>
            <p>
              That single change broke the bottleneck in both directions. Quality went up enough that the ads matched a premium brand's standards. And because the production was AI-driven, output scaled to the volume the algorithm needed.
            </p>
            <p>
              LAIFE went from a trickle of usable creative to 50 fresh videos every week. They could finally test the things that matter for a D2C wellness brand at launch: which avatar resonates with the audience, which product angle converts, which hook stops the scroll for someone who's never heard of the brand before.
            </p>
          </div>
        </section>

        {/* The Results */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Premium brand quality, performance-marketing economics
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              With realistic AI avatars and the volume the algorithm needed:
            </p>
            <ul className="space-y-3 rounded-2xl bg-primary/5 border border-primary/15 p-6">
              {[
                '50 videos shipped per week, finally hitting the threshold for serious creative testing',
                '$3.89 cost per order on US digital ads',
                'Cold-start phase cleared — Meta\'s algorithm successfully exited the learning phase and started scaling the campaign',
                'No quality compromise — the avatars were realistic enough to carry a premium longevity brand',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              For a category where customer trust drives the purchase, the most important number isn't the cost per order. It's that the AI-generated ads worked at all for a brand that couldn't afford to look cheap.
            </p>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            If your brand is premium, this is the case that should change your mind
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              There's a real concern that gets raised every time AI ads come up: "Won't they hurt my brand?"
            </p>
            <p>
              It's a fair question. First-generation AI video tools deserved every bit of the skepticism. Uncanny faces. Lip sync that drifted out of phase. Generic, corporate-feeling output that no premium brand would put their logo on.
            </p>
            <p>
              The technology has moved. Realistic AI avatars don't look like AI anymore — they look like people. The lip sync matches. The expressions are natural. And the volume advantage means you can produce dozens of variations in a week and only run the ones that actually meet your brand standard.
            </p>
            <p>
              For D2C wellness, supplements, beauty, longevity, and personal care brands — categories where trust is the entire conversion — this changes the calculation:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-primary">
              <li>You can test 50+ hooks and angles per week to find what actually converts</li>
              <li>You can clear Meta's cold-start phase fast enough for your campaign to scale</li>
              <li>You don't have to choose between brand quality and ad volume</li>
              <li>Your cost per order drops because the algorithm finally has enough data to optimize</li>
            </ul>
            <p>
              LAIFE didn't lower their standards to use AI ads. They found AI ads that finally met them.
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
            Based on published results from LAIFE, a Harvard-founded longevity brand. Results reflect their reported experience launching US digital ad campaigns using realistic AI avatar video generation, and are presented here as industry proof of AI ad creative performance.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyLAIFE;
