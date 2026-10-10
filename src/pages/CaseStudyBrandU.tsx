import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const stats = [
  { number: '9 videos/day', label: 'Produced by a 3-person team' },
  { number: '20K–80K', label: 'Views on their top-performing AI video' },
  { number: '200+ orders', label: 'Direct orders from a single AI video' },
  { number: 'Beat traditional', label: 'Outperformed filmed content in both reach and sales' },
];

const CaseStudyBrandU = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How Brand U Ships 9 Fashion Videos a Day With AI — Case Study | Zockto"
        description="Brand U, a US women's fashion ecommerce brand, ships 9 AI-generated videos a day with a 3-person team. Their top AI video drove 200+ direct orders and beat traditional filmed content."
        path="/case-studies/brand-u-fashion"
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
            Case Study · Fashion Ecommerce
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            How a US Fashion Brand Ships 9 Videos a Day With a 3-Person Team — And Drove 200+ Orders From a Single AI Video
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Brand U, a US women's fashion ecommerce brand, used AI-generated fashion videos — outfit swapping and image-to-video — to produce 9 videos every single day with just three people. Their top AI video pulled 20K–80K views and drove over 200 direct orders, outperforming traditionally filmed content in both reach and sales.
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

        {/* The Challenge */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Daily TikTok and Reels content with a team that doesn't have time to film
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              For fashion ecommerce, organic short-form video is the channel. TikTok, Instagram Reels, and the algorithm-driven discovery feeds reward brands that ship constantly — multiple posts a day, fresh outfits, fresh angles, fresh hooks.
            </p>
            <p>
              The brands winning that game aren't the ones with the biggest marketing budgets. They're the ones who can produce video at the volume the algorithm rewards.
            </p>
            <p>
              For a small team, that's nearly impossible with traditional production. Filming a single outfit means coordinating a model, a photographer, a location, lighting, editing, and approvals. Even if everything goes perfectly, you might ship one or two videos a day — and the unit cost makes paid testing impractical.
            </p>
            <p>
              Brand U, a US women's fashion ecommerce brand, ran into exactly this wall. Three people on the team. A full product catalog to promote. A daily content cadence to maintain across organic TikTok and Reels. Traditional shoots couldn't move fast enough or cheaply enough to feed that machine.
            </p>
          </div>
        </section>

        {/* The Approach */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            AI fashion video — outfit swapping and image-to-video
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              Brand U switched to AI-generated fashion videos built around two specific techniques:
            </p>
            <p>
              <strong>Outfit swapping</strong> — taking an existing video of a model and AI-swapping the outfit onto her, so a single base video could become dozens of different product showcases.
            </p>
            <p>
              <strong>Image-to-video</strong> — turning a single product photo into a full motion video, with the model moving naturally, the fabric draping, the outfit shown from multiple angles.
            </p>
            <p>
              Together, these two techniques meant Brand U could produce a full day's worth of content without ever scheduling a shoot. They could turn one good base asset into ten variations. They could feature a new product the day it dropped, instead of waiting two weeks for the shoot to be scheduled and edited.
            </p>
            <p>
              With three people, they hit nine videos a day.
            </p>
          </div>
        </section>

        {/* The Results */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            A small team out-shipping — and out-selling — traditional production
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              Volume alone would have been impressive. The performance numbers were better:
            </p>
            <ul className="space-y-3 rounded-2xl bg-primary/5 border border-primary/15 p-6">
              {[
                "9 videos shipped per day with a 3-person team — a daily cadence most fashion brands can't hit with much larger teams",
                "20K–80K views on the top-performing AI video, well into the range where organic content starts compounding through the algorithm",
                "200+ direct orders driven by a single AI video — not assists, not contributions, direct orders",
                "AI video outperformed traditionally filmed content in both reach and sales",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              That last point is the one fashion brands struggle to believe until they see it. The assumption is that traditionally filmed content — a real model, a real shoot, real cinematography — has to win on the metrics that actually matter, even if AI wins on volume.
            </p>
            <p>
              Brand U's data showed the opposite. The AI videos didn't just produce more content. They produced better content — measured by the only two numbers that count on organic short-form: views and orders.
            </p>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 border-t border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            If you're a small fashion or ecommerce team trying to win on TikTok and Reels
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-foreground/90">
            <p>
              Every fashion brand, DTC apparel store, and Amazon seller running on organic short-form video runs into the same equation: the algorithm rewards volume, but volume requires either a big team or a big shoot budget — usually both.
            </p>
            <p>
              That's the trap. And it's the trap that AI fashion video breaks open.
            </p>
            <p>
              If you're a small team running a fashion or apparel ecommerce store:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-primary">
              <li>You can ship daily content on TikTok and Reels without scheduling a single shoot</li>
              <li>You can turn one base asset into dozens of product-specific variations using outfit swapping</li>
              <li>You can feature a new product the day it lands, not the week after it's been photographed</li>
              <li>You can produce enough video volume to actually test what converts — instead of guessing</li>
            </ul>
            <p>
              The brands winning on organic short-form right now aren't the ones with the biggest production budgets. They're the ones who figured out how to ship daily without burning out a tiny team.
            </p>
            <p>
              Brand U didn't beat the competition by spending more. They beat them by shipping more — and by the metrics that matter, shipping better.
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
            Based on a published case study covering Brand U, a US women's fashion ecommerce brand, and their results using AI-generated fashion video techniques including outfit swapping and image-to-video. Results reflect the original campaign as reported, and are presented here as industry proof of AI ad creative performance.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyBrandU;
