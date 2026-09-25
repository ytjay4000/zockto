import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import VslSectionHeading from './VslSectionHeading';

const testimonials = [
  {
    name: 'Tarun',
    role: 'Founder',
    quote:
      "We were burning money on agencies and freelancers for every new ad. Zockto replaced that entire workflow. Studio-quality UGC ads, instantly, at a fraction of the cost — it's a no-brainer for any founder.",
  },
  {
    name: 'Sriniwasa',
    role: 'Performance Marketer',
    quote:
      'As a performance marketer, creative testing is the bottleneck. Zockto gives me 10+ ad variations in the time it used to take to brief one. Winning creatives now show up in days, not weeks.',
  },
  {
    name: 'Meet Shah',
    role: 'D2C Brand Owner',
    quote:
      'Running a D2C brand, creatives are everything. Zockto lets me spin up fresh ad variations from just my product link — no shoots, no editors. My ROAS has genuinely improved since I started testing more creatives every week.',
  },
  {
    name: 'Khushi',
    role: 'E-commerce Seller',
    quote:
      'I sell on multiple marketplaces and never had time to make videos. With Zockto I just paste the product URL and get a polished ad ready to post. My listings finally look like the big brands.',
  },
];

const VslWrittenTestimonials = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4 max-w-[1100px]">
      <VslSectionHeading eyebrow="What businesses are saying" headline="Real Experiences. Real Businesses." />

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-border/60 bg-card p-5 md:p-6 flex flex-col"
          >
            <Quote className="w-6 h-6 text-primary/40 mb-3" />
            <p className="text-sm md:text-[15px] text-foreground/90 leading-relaxed mb-5 flex-1">{t.quote}</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-xs">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-sm leading-tight">{t.name}</span>
                <span className="text-xs text-muted-foreground">{t.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VslWrittenTestimonials;
